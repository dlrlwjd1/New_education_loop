# Deployments, Rolling Updates and Scaling in Kubernetes - Performing Rollback

## 개요
- `kubectl rollout history`로 리비전을 확인하고 `--to-revision`으로 최초 버전까지 롤백한 뒤, `kubectl scale`로 수동 업/다운스케일링을 실습.

## 내용
### 리비전 히스토리 확인
```bash
kubectl rollout history deployment/nginx-deployment
```
- 3개의 리비전 확인(1: 1.26.1, 2: 1.16, 3: 1.27).
- **CHANGE-CAUSE 컬럼이 "none"으로 표시**되는 이유: `kubectl set image` 실행 시 **`--record=true`** 플래그를 쓰지 않았기 때문 — 이 플래그를 사용하면 실행한 명령이 자동으로 기록되어 히스토리에 표시됨(실습 시 이 플래그 사용 권장).

### 리비전 3 → 리비전 1로 롤백
```bash
kubectl rollout undo deployment/nginx-deployment --to-revision=1
```
- `--to-revision` 없이 `undo`만 실행하면 바로 이전 리비전(3→2)으로만 이동하지만, **`--to-revision=1`**을 지정하면 원하는 특정 리비전으로 바로 이동 가능.
- 결과: 가장 오래된 ReplicaSet(버전 1.26.1)이 다시 활성화되어 Pod 3개를 갖게 되고, 나머지 ReplicaSet들은 모두 0개로 감소.
```bash
kubectl describe pod <Pod 이름>          # 이미지가 1.26.1로 돌아온 것을 확인
kubectl rollout status deployment/nginx-deployment   # "successfully rolled out" 확인
```
- 롤백 후 히스토리를 다시 확인하면, 기존 리비전 1이 **최신 리비전(4)으로 재기록**되고 2, 3은 그대로 유지됨:
```bash
kubectl rollout history deployment/nginx-deployment   # 2, 3, 4로 표시(1이 4로 복제됨)
```

### 수동 스케일링(Scale Up/Down)
```bash
kubectl scale deployment nginx-deployment --replicas=5   # 3 → 5로 업스케일 (Pod 2개 추가 생성)
kubectl scale deployment nginx-deployment --replicas=1   # 5 → 1로 다운스케일 (Pod 4개 종료)
kubectl scale deployment nginx-deployment --replicas=0   # 0으로 다운스케일 (Deployment는 남지만 Pod 없음)
kubectl scale deployment nginx-deployment --replicas=3   # 다시 3으로 복귀
```
- Replica 수는 몇이든 자유롭게 조절 가능(0 포함).

### 오토스케일링 사전 준비 — Metric Server
- 오토스케일링(HPA)을 설정하려면 **Metric Server**가 필요 — Pod의 리소스 사용률(CPU 등)을 수집하는 역할.
- Minikube 사용 시 별도 YAML을 적용해 Metric Server를 설치해야 하지만, **GKE 같은 관리형 클러스터에는 기본적으로 이미 설치되어 실행 중**.

## 요약
- `kubectl rollout history`로 리비전 히스토리를 확인하고 `kubectl rollout undo --to-revision=<번호>`로 원하는 과거 버전으로 직접 롤백할 수 있으며(`--record=true`를 안 쓰면 CHANGE-CAUSE가 비워짐), `kubectl scale --replicas=<수>`로 Pod 수를 자유롭게 조절할 수 있고, 오토스케일링을 위해서는 Pod 리소스 사용률을 수집하는 Metric Server가 필요하다(GKE는 기본 내장, Minikube는 별도 설치 필요).

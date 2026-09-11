# Rolling Updates and Rollbacks - Performing a Rolling Update

## 개요
- 롤링 업데이트를 수행하는 두 가지 방법(YAML 수정 vs `kubectl set image`)과, `kubectl rollout undo`로 롤백을 수행하는 절차·명령을 정리.

## 내용
### 롤링 업데이트 수행 방법 1 — YAML 파일 수정
1. Deployment YAML 파일의 이미지 버전을 수정(예: `nginx:1.17` → `nginx:1.18`).
2. 적용:
```bash
kubectl apply -f deployment.yaml
```
3. 이미지가 변경되었으므로 자동으로 업데이트 시작.
4. 진행 상황 모니터링:
```bash
kubectl rollout status deployment/<이름>
```

### 롤링 업데이트 수행 방법 2 — `kubectl set image` 명령
```bash
kubectl set image deployment/<디플로이먼트 이름> <컨테이너 이름>=nginx:1.18
kubectl rollout status deployment/<이름>
```
- YAML을 직접 고치지 않고도 명령 한 줄로 동일한 결과를 얻는 대안.

### 롤백(Rollback)이란
- 업데이트 후 문제가 발생했을 때 **이전의 안정적인 상태로 되돌리는 것** — 애플리케이션의 24/7 가용성을 보장하기 위해 업데이트만큼 중요한 절차.

### 롤백 동작 원리
- Deployment는 업데이트 시 새 ReplicaSet(예: 1.18 버전 Pod 3개)을 만들고 기존 ReplicaSet의 Pod를 종료.
- 롤백을 수행하면, Deployment가 **다시 이전 ReplicaSet(1.17)의 Pod를 하나씩 통제된 방식으로 재생성**하고 새 ReplicaSet(1.18)의 Pod를 하나씩 삭제.
- 결과: 이전 ReplicaSet은 다시 Replica 3개로 채워지고, 롤백 대상이 된 ReplicaSet은 **Replica 0**이 되어 Pod가 남지 않음(단, ReplicaSet 리소스 자체는 히스토리로 남아있음).

### 롤백 명령
```bash
kubectl rollout history deployment/<이름>
```
- 리비전 히스토리 확인(예: Revision 1=1.17, Revision 2=1.18, Revision 3=1.19, Revision 4=1.20).
```bash
kubectl rollout undo deployment/<이름>
```
- **바로 이전 리비전으로만** 되돌림(예: Revision 4 → Revision 3, 즉 1.20 → 1.19).
```bash
kubectl rollout undo deployment/<이름> --to-revision=1
```
- **`--to-revision`** 플래그로 **특정 리비전을 지정**해 임의의 과거 버전으로 롤백 가능(예: Revision 4에서 곧바로 Revision 1로).

## 요약
- 롤링 업데이트는 Deployment YAML의 이미지 버전을 수정해 `kubectl apply`하거나 `kubectl set image`로 즉시 실행할 수 있고, 두 방법 모두 `kubectl rollout status`로 진행 상황을 모니터링하며, 문제가 생기면 `kubectl rollout history`로 리비전 히스토리를 확인한 뒤 `kubectl rollout undo`(바로 이전 리비전) 또는 `--to-revision=<번호>`(특정 리비전 지정)로 원하는 과거 상태로 롤백할 수 있다.

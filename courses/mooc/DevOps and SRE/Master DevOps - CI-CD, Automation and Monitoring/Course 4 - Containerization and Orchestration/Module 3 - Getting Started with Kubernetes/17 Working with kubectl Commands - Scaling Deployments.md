# Working with kubectl Commands - Scaling Deployments

## 개요
- `kubectl scale`로 Deployment를 자유롭게 업/다운스케일하고, `kubectl set image`로 롤링 업데이트를 수행하며, `kubectl rollout status`로 배포 상태를 확인한 뒤 YAML 파일로 정리하는 실습.

## 내용
### 스케일 업/다운
```bash
kubectl scale deployment nginx-deployment --replicas=7   # 4개 → 7개로 스케일 업(새 Pod 3개 생성)
kubectl scale deployment nginx-deployment --replicas=2   # 7개 → 2개로 스케일 다운(5개 자동 종료)
kubectl scale deployment nginx-deployment --replicas=0   # 0개로 축소 — Deployment는 남지만 Pod는 없음
kubectl scale deployment nginx-deployment --replicas=1   # 다시 1개로 스케일 업
kubectl get deploy,pod   # 각 단계마다 Pod 수 변화 확인
```
- Replica 수는 몇이든 자유롭게 늘리거나(Up) 줄일(Down) 수 있으며 0으로도 가능(Deployment 자체는 유지된 채 Pod만 사라짐).

### `kubectl set image`로 롤링 업데이트
```bash
kubectl describe deployment nginx-deployment   # 현재 이미지 버전 확인(예: nginx:1.19)
kubectl set image deployment/nginx-deployment nginx=nginx:1.20
```
- 컨테이너 이름(`nginx`, YAML에 정의된 이름)을 지정해 이미지를 `1.19` → `1.20`으로 업데이트.
```bash
kubectl get deploy,pod   # 기존 Pod가 종료(Terminating)되고 새 Pod가 생성되는 것을 확인
kubectl describe pod <새 Pod 이름>   # 새 이미지(1.20)로 실행 중임을 확인
kubectl describe deployment nginx-deployment   # Deployment 자체도 1.20으로 갱신됨을 확인
```

### 롤아웃 상태 모니터링
```bash
kubectl rollout status deployment/nginx-deployment
```
- **"deployment nginx-deployment successfully rolled out"** 메시지로 배포가 정상 완료됐음을 확인.

### 정리(Cleanup) — 두 가지 방법
```bash
kubectl get service   # 기본 클러스터 서비스만 남아있음(이미 서비스는 앞서 삭제함)
kubectl get deployment   # 정리할 Deployment 확인
```
1. **직접 삭제**: `kubectl delete deployment nginx-deployment` → Deployment와 그에 속한 Pod가 함께 삭제됨.
2. **YAML 파일로 삭제(권장 방식)**:
```bash
kubectl delete -f nginx-deploy.yaml
```
   - 리소스를 생성할 때 썼던 것과 동일한 YAML 파일을 `-f` 플래그와 함께 `delete` 명령에 사용 — 실무에서 널리 쓰이는 정리 방식.
```bash
kubectl get deploy,pod   # 아무 리소스도 남지 않음을 확인
```

## 요약
- `kubectl scale --replicas=<수>`로 Deployment의 Pod 수를 자유롭게(0 포함) 조절할 수 있고, `kubectl set image deployment/<이름> <컨테이너>=<새이미지>`로 컨테이너 이미지를 교체하는 롤링 업데이트를 수행한 뒤 `kubectl rollout status`로 완료 여부를 확인할 수 있으며, 정리 시에는 `kubectl delete deployment`보다 원본 YAML 파일로 `kubectl delete -f <파일>`을 사용하는 것이 실무에서 널리 쓰이는 방식이다.

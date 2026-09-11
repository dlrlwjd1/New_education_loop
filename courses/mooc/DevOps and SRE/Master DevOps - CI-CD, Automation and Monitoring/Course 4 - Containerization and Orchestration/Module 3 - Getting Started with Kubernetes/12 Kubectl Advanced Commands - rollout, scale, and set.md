# Kubectl Advanced Commands - rollout, scale, and set

## 개요
- `kubectl cluster-info`, `rollout`(히스토리·롤백·상태 확인), `scale`(복제본 수 조절), `set`(필드 업데이트) 명령어를 정리.

## 내용
### `kubectl cluster-info` — 클러스터 정보 확인
```bash
kubectl cluster-info
```
- Kubernetes API 버전, Master Node 및 기타 노드 정보 등 클러스터 전반의 세부 정보를 확인.

### `kubectl rollout` — 롤링 업데이트 관리
```bash
kubectl rollout history deployment/<디플로이먼트 이름>   # 업데이트 히스토리 확인
kubectl rollout undo deployment/<디플로이먼트 이름>        # 롤백(이전 버전으로 되돌림)
kubectl rollout status deployment/<디플로이먼트 이름>       # 현재 롤아웃 상태 확인
```
- 예: 애플리케이션이 1.21 → 1.22 → 1.23 → 1.24로 업데이트된 히스토리를 확인하거나, 1.24에서 1.23으로 되돌리는(undo) 등의 작업에 사용.

### `kubectl scale` — Pod 개수 조절
```bash
kubectl scale --replicas=4 deployment/nginx-deployment
```
- **Deployment, ReplicaSet, StatefulSet**의 복제본(Pod) 수를 늘리거나(Up) 줄이는(Down) 명령.
- 예: Replica가 2인 Deployment를 4로 늘리거나(Upscale), 1이나 0으로 줄이는(Downscale, 0이면 Deployment 자체는 남지만 Pod는 없는 상태) 것 모두 가능.
- 예시: `kubectl scale --replicas=4 deployment/nginx-deployment` → `nginx-deployment`를 Pod 4개로 확장.

### `kubectl set` — 리소스의 특정 필드 업데이트
```bash
kubectl set image deployment/nginx-deployment nginx=nginx:1.22
```
- 리소스의 특정 필드(예: 컨테이너 이미지 버전)를 업데이트 — 예를 들어 Nginx 컨테이너 이미지를 1.21에서 1.22로 바꾸는 **롤링 업데이트** 수행.
- 문법: `kubectl set image deployment/<디플로이먼트> <컨테이너 이름>=<새 이미지>`.
- 이 명령을 실행하면 Deployment가 관리하는 Pod들의 컨테이너 이미지가 새 버전으로 업데이트됨.

## 요약
- `kubectl cluster-info`로 클러스터 상세 정보를 확인하고, `kubectl rollout`(history/undo/status)으로 롤링 업데이트 히스토리·롤백·상태를 관리하며, `kubectl scale --replicas=<수>`로 Deployment/ReplicaSet/StatefulSet의 Pod 개수를 늘리거나 줄이고, `kubectl set image`로 컨테이너 이미지 버전 같은 특정 필드를 업데이트해 롤링 업데이트를 수행할 수 있다.

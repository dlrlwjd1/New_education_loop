# Working with kubectl Commands - Describing Deployments

## 개요
- `kubectl describe deployment`로 Deployment 상세 정보를 확인하고, `kubectl logs`로 Pod 로그를 조회하며, 실습 환경(Kubernetes 1.32)에서 `kubectl exec -it`가 이미 제거된 것을 확인.

## 내용
### `kubectl describe deployment`
```bash
kubectl describe deployment nginx-deployment
```
- 출력 내용: 실행 중인 네임스페이스, 생성 시각, **Total/Desired/Updated/Available/Unavailable Pod 수**, 현재 리비전 번호(Revision 1), 컨테이너 이미지(`nginx:1.19`).
- **Events** 섹션에서 스케일링 히스토리 확인 가능(예: 0→2 Pod 생성 후 2→4로 스케일된 이벤트).

### `kubectl logs`
```bash
kubectl get pod   # 자동 생성된 Pod 이름 확인(사람이 짓지 않을 법한 랜덤 이름)
kubectl logs <Pod 이름>
```
- 지정한 Pod의 애플리케이션 로그(Nginx 로그 등) 확인.

### `kubectl exec` 명령의 폐기(Deprecated) 확인
```bash
kubectl exec -it <Pod 이름> -- ls
```
- 이 실습 환경(Kubernetes 서버 버전 1.32.3)에서는 **`kubectl exec` 명령이 더 이상 지원되지 않음** — Kubernetes 1.31 버전대부터 이 명령이 제거됨.
```bash
kubectl get nodes    # 클러스터 버전 확인(예: 1.32)
kubectl version       # 서버 버전 확인(예: 서버 1.32.3, 2025년 5월 기준 최신은 1.33)
```
- 대안 명령은 이후 세션에서 다룰 예정(당장은 신경 쓰지 않아도 됨).

## 요약
- `kubectl describe deployment`로 Pod 수 현황과 스케일링 이벤트 히스토리를 확인하고 `kubectl logs`로 개별 Pod의 애플리케이션 로그를 조회할 수 있으며, 이 실습에서 사용 중인 Kubernetes 1.32 버전에서는 `kubectl exec -it`가 더 이상 지원되지 않아 대안 명령을 별도로 알아봐야 한다.

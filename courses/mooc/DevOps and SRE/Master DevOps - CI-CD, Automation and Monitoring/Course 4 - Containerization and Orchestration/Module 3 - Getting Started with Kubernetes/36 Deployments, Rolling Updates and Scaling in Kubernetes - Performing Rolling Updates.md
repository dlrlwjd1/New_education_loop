# Deployments, Rolling Updates and Scaling in Kubernetes - Performing Rolling Updates

## 개요
- 방화벽을 연 뒤 NodePort로 애플리케이션 접근을 검증하고, `kubectl set image`로 Nginx 버전을 다운그레이드(1.26.1→1.16)했다가 다시 업그레이드(1.16→1.27)하는 롤링 업데이트를 실제로 수행.

## 내용
### NodePort로 접근 검증
- 방화벽을 연 뒤 `http://<노드 External IP>:30466`으로 접속 → "Welcome to nginx!" 정상 표시.
- 다른 노드의 External IP + 같은 포트(30466)로도 동일하게 접근 가능 — NodePort는 **클러스터의 모든 노드**에서 동일한 포트로 서비스에 접근 가능하게 함.
- Minikube라면 `minikube service <서비스명> --url`이나 `curl`로도 접근 확인 가능.

### 현재 버전 확인
```bash
cat nginx_deployment.yaml   # 현재 이미지: nginx:1.26.1
kubectl describe pod <Pod 이름>   # 실제 실행 중인 버전 확인
```

### 롤링 업데이트(다운그레이드) 수행
```bash
kubectl set image deployment/nginx-deployment nginx=nginx:1.16
```
- **업데이트는 업그레이드든 다운그레이드든 모두 가능** — 버전을 올리면 업그레이드, 낮추면 다운그레이드일 뿐 메커니즘은 동일.
- 실행 후 관찰(watch 중이던 터미널에서): 새 ReplicaSet이 생성되어 새 Pod가 하나씩 Running 상태가 되고, 기존 ReplicaSet은 점차 0/0/0으로 줄어드는 것을 실시간으로 확인.
```bash
kubectl describe pod <새 Pod 이름>   # 이미지가 1.16으로 바뀐 것을 확인
kubectl rollout status deployment/nginx-deployment   # "successfully rolled out" 확인
```

### 롤링 업데이트(업그레이드) 재수행
```bash
kubectl set image deployment/nginx-deployment nginx=nginx:1.27
```
- 1.16 → 1.27로 다시 업데이트 — 또 다른 새 ReplicaSet이 생성되어 Pod 3개가 순차적으로 교체됨(Replica 수가 3이므로 새 Pod도 3개 생성).
```bash
kubectl describe pod <새 Pod 이름>   # 이미지가 1.27로 바뀐 것을 확인
kubectl rollout status deployment/nginx-deployment
```

## 요약
- GCP 방화벽을 열어 NodePort로 애플리케이션 접근을 확인한 뒤, `kubectl set image deployment/<이름> <컨테이너>=<이미지>`로 버전을 낮추거나(1.26.1→1.16) 다시 높이는(1.16→1.27) 롤링 업데이트를 수행하면 매번 새로운 ReplicaSet이 생성되어 지정한 Replica 수만큼 새 버전의 Pod가 순차적으로 교체되고, `kubectl describe pod`와 `kubectl rollout status`로 각 단계의 성공을 검증할 수 있다.

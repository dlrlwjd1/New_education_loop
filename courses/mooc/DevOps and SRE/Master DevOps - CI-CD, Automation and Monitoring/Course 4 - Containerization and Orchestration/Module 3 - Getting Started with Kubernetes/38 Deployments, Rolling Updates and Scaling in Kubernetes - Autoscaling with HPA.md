# Deployments, Rolling Updates and Scaling in Kubernetes - Autoscaling with HPA

## 개요
- Metric Server 상태를 확인하고 `kubectl autoscale`로 HPA(Horizontal Pod Autoscaler)를 설정한 뒤, 실습 마지막에 Service·HPA·Deployment를 모두 정리.

## 내용
### Metric Server 확인
```bash
kubectl get pods -n kube-system   # metrics-server, gke-metrics-agent 등이 실행 중인지 확인
kubectl top pods
```
- `kubectl top pods`가 정상 출력되면 Metric Server가 잘 동작 중이라는 뜻 — CPU는 **밀리코어(millicore, m)** 단위로 표시(1000m = 1 코어). 출력값 `0m`은 CPU를 전혀 사용하지 않는 유휴 상태를 의미.
- Minikube라면 별도 YAML을 적용해 Metric Server를 설치해야 하지만, GKE는 기본 내장.

### HPA(Horizontal Pod Autoscaler) 생성
```bash
kubectl autoscale deployment nginx-deployment --cpu-percent=50 --min=2 --max=10
```
- CPU 사용률이 **50%를 초과하면 스케일 업**, 최소 2개, 최대 10개의 Pod를 유지하도록 설정.
- **오토스케일링은 Deployment와 StatefulSet에만 사용 가능** — ReplicaSet 단독으로는 오토스케일링을 사용할 수 없음.
```bash
kubectl get hpa
```
- 생성 직후에는 CPU 값이 `<unknown>`으로 표시될 수 있으며(아직 지표를 수집하는 중), 잠시 후 안정화되면 최소값(2)에 맞춰 Pod 수가 자동으로 2개로 조정됨.
```bash
kubectl top pods   # 현재 CPU 사용률이 0이면 스케일 업이 발생하지 않음(최소 2개 유지)
```
- CPU 임계치 외에 **메모리 기준**으로도 오토스케일링 설정 가능.

### 이름 지정 관련 참고
- `kubectl autoscale`에 `--name` 플래그를 지정하지 않으면, 생성되는 HPA의 이름이 **자동으로 Deployment 이름과 동일하게** 설정됨.

### 전체 리소스 정리
```bash
kubectl get svc
kubectl delete svc nginx-svc                       # Service 삭제
kubectl delete hpa nginx-deployment                 # HPA 삭제(이름이 Deployment와 동일)
kubectl get svc,hpa                                  # 삭제 확인

kubectl delete deployment nginx-deployment           # 방법 1: 이름으로 직접 삭제
kubectl delete -f nginx_deployment.yaml              # 방법 2: YAML 파일로 삭제(Deployment와 그에 속한 Pod 모두 함께 제거)
```

## 요약
- Metric Server(`kubectl top pods`로 확인)가 정상 동작 중이면 `kubectl autoscale deployment --cpu-percent=<임계치> --min=<최소> --max=<최대>`로 HPA를 만들어 CPU 사용률에 따라 Pod 수를 자동 조절할 수 있으며(Deployment/StatefulSet 전용, ReplicaSet 단독 불가), 실습을 마칠 때는 Service·HPA·Deployment 순서로 이름 또는 YAML 파일을 이용해 모두 정리한다.

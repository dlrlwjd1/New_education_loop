# Kubernetes Pods Demonstration - Testing Connectivity with Port Forwarding

## 개요
- Port-forward 연결이 열려 있어야만 통신이 가능함을 확인하고, Pod와 클러스터를 정리하며 Pod 실습을 마무리.

## 내용
### Port-forward는 연결이 열려 있는 동안만 동작
```bash
curl 127.0.0.1:8080   # "Welcome to nginx" 정상 응답, 여러 번 반복 가능
```
- `kubectl port-forward` 명령을 실행 중인 터미널에서 **`Ctrl+C`로 연결을 닫으면**, 이후 동일한 `curl` 요청은 **연결할 수 없음("cannot connect")** 오류 발생.
- 즉, Port-forward는 **그 세션이 열려 있는 동안에만** 유효 — 이것이 프로덕션에서 사용하지 않는 이유. 순수하게 애플리케이션 접근성을 테스트/PoC하기 위한 용도.

### Pod 삭제 — 두 가지 방법
```bash
kubectl get pod
kubectl delete pod nginx-pod        # 방법 1: 이름으로 직접 삭제
kubectl delete -f nginx_pod.yaml    # 방법 2: YAML 파일로 삭제
kubectl get pod                      # 삭제 확인(리소스 없음)
```

### 클러스터 정리
- Minikube 사용 시: `minikube stop`으로 로컬 클러스터 중지.
- GKE 사용 시(이번 실습): 클러스터 생성 명령과 유사하되 `create` 대신 `delete`, 노드 수 지정 없이 실행:
```bash
gcloud container clusters delete hello-cluster --zone us-central1-a
```
- 확인 프롬프트(yes/no)에서 `yes` 입력하면 클러스터 완전히 삭제.

## 요약
- `kubectl port-forward`는 명령을 실행한 세션(터미널)이 열려 있는 동안에만 로컬 포트와 Pod를 연결하며 연결을 끊으면 즉시 접근이 불가능해지므로 테스트 전용이라는 것을 재확인했고, 실습 마무리로 Pod는 `kubectl delete pod` 또는 `kubectl delete -f <YAML>`로, GKE 클러스터 자체는 `gcloud container clusters delete`로 정리했다.

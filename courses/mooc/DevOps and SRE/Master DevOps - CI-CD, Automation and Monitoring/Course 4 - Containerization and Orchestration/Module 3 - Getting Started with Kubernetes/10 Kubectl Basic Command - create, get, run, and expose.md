# Kubectl Basic Command - create, get, run, and expose

## 개요
- kubectl의 기본 명령어인 `create`, `get`, `run`, `expose`의 문법과 용도를 정리.

## 내용
### `kubectl create` — YAML 파일로 리소스 생성
```bash
kubectl create -f pod.yaml
```
- `-f` — 파일 이름을 지정하는 플래그.
- `pod.yaml`에는 API 버전, 리소스 종류(Kind, 예: Pod), 메타데이터(이름, 레이블), 스펙(어떤 컨테이너를 실행할지 — MySQL, Nginx 등)을 정의.
- 표준 입력(파일)으로부터 리소스를 생성하는 명령.

### `kubectl get` — 리소스 목록 조회
```bash
kubectl get pods          # 현재 네임스페이스의 모든 Pod 목록
kubectl get services       # 서비스 목록
kubectl get deployment     # Deployment 목록
kubectl get pods -n mysql  # 특정 네임스페이스(mysql)의 Pod 목록
```

### `kubectl run` — YAML 없이 즉시 Pod 실행
```bash
kubectl run nginx --image=nginx
```
- YAML 파일 작성 없이 Pod 이름과 이미지만 지정해 즉시 Pod 생성.
- 예: 이름이 `nginx`인 Pod를 생성하고 그 안에서 `nginx` 이미지의 컨테이너를 실행.

### `kubectl expose` — Pod를 Service로 노출
```bash
kubectl expose pod nginx --port=80 --target-port=80
```
- **`--port`** — Service가 리스닝할 포트(서비스 IP:포트로 접근).
- **`--target-port`** — 실제 애플리케이션(Pod)이 리스닝하는 포트(예: Nginx는 80, MySQL은 3306).
- 통신 흐름: 클라이언트가 **Service IP:Port**로 요청 → Service가 **Pod IP:Target Port**로 전달.
- Port와 Target Port는 같을 수도, 다를 수도 있음(예시에서는 둘 다 80으로 동일).
- Service는 Pod와 통신(클러스터 내부·외부 모두)하기 위해 필요.

## 요약
- `kubectl create -f <파일>`은 YAML 파일 기반으로 리소스를 생성하고, `kubectl get <리소스>`는 Pod·Service·Deployment 등의 목록을 조회하며, `kubectl run <이름> --image=<이미지>`는 YAML 없이 즉시 Pod를 실행하고, `kubectl expose pod <이름> --port=<서비스포트> --target-port=<애플리케이션포트>`는 Pod를 Service로 노출해 클러스터 내외부에서 접근 가능하게 한다.

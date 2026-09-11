# Kubectl Basic Command - delete, apply, and edit

## 개요
- kubectl의 `delete`, `apply`, `edit` 명령어의 문법과 용도를 정리.

## 내용
### `kubectl delete` — 리소스 삭제
```bash
kubectl delete pod nginx        # Pod nginx 삭제
kubectl delete service <이름>    # Service 삭제
```
- 파일 이름 또는 리소스 이름으로 리소스를 제거하는 명령.

### `kubectl apply` — 설정 변경 사항 적용
```bash
kubectl apply -f deployment.yaml
```
- `kubectl create -f`로 이미 리소스를 만든 뒤, YAML 파일을 수정했다면 그 변경 사항을 반영할 때 사용.
- 리소스가 이미 실행 중인 상태에서 YAML 파일의 설정 변경 사항을 클러스터에 적용.

### `kubectl edit` — YAML 파일 없이 즉석 수정
```bash
kubectl edit service <서비스 이름>
kubectl edit deployment <디플로이먼트 이름>
```
- YAML 파일을 따로 갖고 있지 않을 때, 실행 중인 리소스를 바로 수정하고 싶다면 사용.
- 명령 실행 시 해당 리소스의 YAML 설정이 자동으로 텍스트 에디터(Linux의 경우 보통 vi)에 열리며, 수정 후 저장하면 **자동으로 변경 사항이 적용**됨.
- 예: 서비스 포트를 80에서 8080으로 변경, 또는 Deployment의 Replica 수를 2개에서 4개로 늘리는 경우 모두 `kubectl edit`으로 즉시 수정하고 저장만 하면 자동 반영.

## 요약
- `kubectl delete <리소스> <이름>`으로 리소스를 삭제하고, YAML 파일을 수정한 뒤 그 변경 사항을 반영하려면 `kubectl apply -f <파일>`을, YAML 파일 없이 실행 중인 리소스를 바로 고치려면 `kubectl edit <리소스> <이름>`으로 에디터를 열어 수정 후 저장하면 자동으로 적용된다.

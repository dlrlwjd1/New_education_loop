# Kubectl Advanced Commands - describe, exec, and logs

## 개요
- `kubectl describe`(상세 정보), `kubectl exec`(컨테이너 내부 명령 실행), `kubectl logs`(로그 확인) 명령어를 정리.

## 내용
### `kubectl describe` — 리소스 상세 정보
```bash
kubectl describe pod nginx
kubectl describe deployment <이름>
```
- 리소스(Pod, Deployment, Service 등)의 전체 세부 정보를 표시 — 어느 노드에서 실행 중인지, Pod IP, 컨테이너 이름·이미지, 이벤트(컨테이너·Pod 실행 여부), 네임스페이스 등을 상세히 확인.

### `kubectl exec` — 컨테이너 내부 명령 실행
```bash
kubectl exec <Pod 이름> -- <명령>
kubectl exec <Pod 이름> -c <컨테이너 이름> -- <명령>   # 컨테이너가 여러 개인 Pod의 경우
```
- Pod 안의 컨테이너에 들어가 특정 명령을 실행(예: 설정 파일 확인, 수정 등).
- Pod에 컨테이너가 **하나뿐이면 `-c` 플래그가 필요 없음**, 컨테이너가 여러 개(c1, c2 등)면 `-c <컨테이너 이름>`으로 대상 컨테이너를 지정.
- 예시:
```bash
kubectl exec nginx -- ls /usr/share/nginx/html   # 해당 경로의 내용을 출력
kubectl exec <Pod 이름> -- ps -ef                  # 컨테이너 내 프로세스 목록 확인
```

### `kubectl logs` — 로그 확인
```bash
kubectl logs <Pod 이름>
kubectl logs <Pod 이름> -c <컨테이너 이름>   # 컨테이너가 여러 개인 Pod의 경우
```
- 컨테이너의 로그를 출력 — 예: Pod 안의 MySQL 애플리케이션이 실패하고 있다면 `kubectl logs`로 실패 원인을 트러블슈팅.
- 단일 컨테이너 Pod라면 `-c` 없이 Pod 이름만으로 충분.

## 요약
- `kubectl describe <리소스> <이름>`은 노드·IP·이벤트 등 리소스의 전체 상세 정보를 보여주고, `kubectl exec <Pod> -- <명령>`(다중 컨테이너는 `-c`로 지정)은 컨테이너 내부에서 명령을 실행하며, `kubectl logs <Pod>`(다중 컨테이너는 `-c`로 지정)는 애플리케이션 로그를 확인해 장애 원인을 트러블슈팅하는 데 사용된다.

# Setting up Docker Hub - Pull and Run Image from Docker Hub

## 개요
- 계정 네임스페이스가 포함된 이미지를 빌드→로컬 실행 검증→Push→전체 삭제→Pull로 복구하는 전체 라이프사이클을 실습으로 완결.

## 내용
### 빌드 확인
```bash
docker images   # devcloudhub/my-docker-app:latest 확인 (태그 미지정 시 latest)
```

### 로컬 컨테이너 실행과 Port Binding
```bash
docker run -d -p 8080:80 devcloudhub/my-docker-app:latest
docker ps -a   # 포트 80(컨테이너) → 8080(호스트) 매핑 확인
```
- 브라우저에서 `http://<Docker Host Public IP>:8080` 접속 → "Hello Docker" 페이지 정상 확인.

### Docker Hub에 Push
```bash
docker push devcloudhub/my-docker-app:latest
```
- 태그를 지정하지 않으면 자동으로 `latest`로 업로드됨.
- 이 단계에서 처음부터 계정 네임스페이스로 빌드했으므로 재태깅 없이 곧바로 Push 성공.

### 전체 삭제 후 복구 검증
```bash
docker ps -a
docker rm -f <컨테이너 ID/이름>    # 컨테이너 강제 삭제
docker images
docker rmi devcloudhub/my-docker-app:latest
docker rmi nginx:latest             # 베이스 이미지도 삭제
docker images   # 아무것도 없음을 확인
docker ps -a     # 컨테이너도 없음을 확인
```
- 완전히 초기화된 상태에서 다시 이미지를 가져옴:
```bash
docker pull devcloudhub/my-docker-app:latest
docker images   # 이미지가 다시 존재
docker run -d -p 30000:80 devcloudhub/my-docker-app:latest
docker ps -a
```
- 브라우저에서 `http://<Public IP>:30000` 접속 → "Hello Docker" 페이지 정상 확인 — Docker Hub에서 이미지를 완전히 복구해 재배포할 수 있음을 검증.

## 요약
- 계정 네임스페이스로 빌드한 이미지는 곧바로 `docker push`로 Docker Hub에 올릴 수 있으며, 로컬의 컨테이너·이미지를 모두 삭제한 뒤에도 `docker pull`로 동일한 이미지를 다시 받아 새로운 포트(예: 30000)로 컨테이너를 실행하면 애플리케이션이 문제없이 복구된다는 것을 보여준다.

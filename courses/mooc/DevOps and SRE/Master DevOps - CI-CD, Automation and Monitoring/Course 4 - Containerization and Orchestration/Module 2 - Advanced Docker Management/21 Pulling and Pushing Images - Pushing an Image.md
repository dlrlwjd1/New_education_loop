# Pulling and Pushing Images - Pushing an Image

## 개요
- Docker Hub 계정을 생성하고 `docker login`으로 인증한 뒤, 로컬 이미지를 Docker Hub에 Push하려다 네임스페이스 문제로 거부되는 과정을 실습.

## 내용
### Push/Pull 용어 정리와 목적
- **Push** = 업로드, **Pull** = 다운로드.
- 로컬 Docker Host에만 있는 이미지를 중앙(Docker Hub)에 올려야 하는 이유:
  1. **안전한 보관** — Docker Host가 오프라인이 되어도 중앙 저장소에서 이미지를 계속 사용할 수 있음.
  2. **공유·협업** — 다른 팀원이 인터넷을 통해 같은 이미지를 pull해 사용할 수 있음.

### Docker Hub 계정 생성
1. `hub.docker.com` 접속 → **Sign up** → 이메일 주소, 사용자 이름(Username), 비밀번호 입력(회사 이메일이 없으면 개인 이메일도 가능).
2. 가입 후 이메일로 전송된 인증 링크를 클릭해 계정을 인증(verify).

### CLI에서 Docker Hub 로그인
```bash
docker login
```
- Username과 Password를 입력하면 **"Login Succeeded"** 메시지로 인증 완료 확인 — Push하려면 반드시 이 로그인이 선행되어야 함.

### 이미지 Push 시도와 실패
```bash
docker push flask-app:v1
```
- 결과: **"requested access to the resource is denied"** 오류 발생.
- 원인: 이렇게 푸시하면 Docker Hub는 이 이미지를 `library`라는 공식 네임스페이스(공식 이미지 전용, `docker.io` URL 기준) 아래로 인식하려 하기 때문 — 개인 계정의 이미지는 반드시 **본인의 Docker Hub 사용자 이름을 이미지 이름 앞에 붙인 형태**(예: `devcloudhub/flask-app:v1`)로 태그를 다시 지정한 뒤 Push해야 함(다음 강의에서 이어짐).

## 요약
- Docker Hub에 이미지를 Push하려면 먼저 계정을 만들어 이메일 인증을 완료하고 `docker login`으로 CLI에서 인증해야 하며, 단순히 `docker push <이미지>:<태그>`를 실행하면 공식 `library` 네임스페이스로 오인되어 접근 거부(access denied) 오류가 발생하므로 이미지 이름 앞에 본인의 Docker Hub 사용자 이름을 붙여 다시 태그해야 한다.

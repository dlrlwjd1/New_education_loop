# Setting up Docker Hub - Logging into Docker Hub

## 개요
- Docker Hub 계정 생성·로그인 절차를 복습하고, HTML 파일을 호스팅하는 Nginx 기반 이미지를 처음부터 **계정 네임스페이스를 포함한 태그로 빌드**하는 실습.

## 내용
### 사전 확인
```bash
systemctl status docker   # active 확인
docker --version           # 예: 26.1.3
```

### Docker Hub 계정 준비
- `hub.docker.com` → **Sign up → Personal** 탭 → 이메일, 사용자 이름, 비밀번호 입력 → 가입 → 이메일 인증 링크 클릭.
```bash
docker login   # 사용자 이름/비밀번호 입력 → "Login Succeeded"
```

### 애플리케이션 파일 준비
```bash
mkdir my-docker-app
cd my-docker-app
vi index.html   # "Hello Docker"를 출력하는 간단한 HTML 작성
vi Dockerfile
```
```dockerfile
FROM nginx
COPY index.html /usr/share/nginx/html/index.html
```
- `FROM nginx` — Nginx를 베이스 이미지로 사용.
- `COPY` — 작성한 `index.html`을 Nginx가 기본으로 서비스하는 경로(`/usr/share/nginx/html/index.html`)에 복사.

### 계정 네임스페이스를 포함해 바로 빌드
```bash
docker build -t devcloudhub/my-docker-app .
```
- 태그에 처음부터 **`<Docker Hub 사용자 이름>/<이미지 이름>`** 형태를 사용하는 이유: 만약 계정 이름 없이 `docker build -t my-docker-app .`처럼 빌드하면 이미지는 Docker Host의 기본(`library`) 계정에 속하게 되어, 나중에 Push하려면 `docker tag`로 다시 태깅해야 하는 번거로움이 생김.
- 처음부터 `devcloudhub/my-docker-app`으로 태그를 지정해 빌드하면 **재태깅 없이 곧바로 Push**할 수 있음.

## 요약
- Docker Hub 계정으로 로그인(`docker login`)한 뒤, Nginx 베이스 이미지에 `index.html`을 복사하는 Dockerfile을 작성하고, `docker build -t <Docker Hub 계정명>/<이미지 이름> .`처럼 **처음부터 계정 네임스페이스를 포함한 태그로 빌드**하면 이후 `docker tag`로 재태깅할 필요 없이 곧바로 Push할 수 있다.

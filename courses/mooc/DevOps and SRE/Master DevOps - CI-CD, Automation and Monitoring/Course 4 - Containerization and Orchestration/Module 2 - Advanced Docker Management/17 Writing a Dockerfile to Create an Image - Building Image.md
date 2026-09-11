# Writing a Dockerfile to Create an Image - Building Image

## 개요
- Node.js 애플리케이션용 Dockerfile을 빌드해 이미지를 만들고, Port Binding으로 컨테이너를 실행해 공인 IP로 접근을 검증하는 실습.

## 내용
### 완성된 Dockerfile 구조
```dockerfile
FROM node:18
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```
- **`FROM node:18`** — 공식 Node.js 18 이미지를 베이스로 사용.
- **`WORKDIR`** — 작업 디렉터리 생성.
- **`COPY package.json .`** — 의존성 설치에 필요한 `package.json`을 먼저 복사(다른 파일보다 먼저 복사해 캐싱 이점을 살리는 방식).
- **`RUN npm install`** — `package.json`에 정의된 의존성 설치.
- **`COPY . .`** — 나머지 애플리케이션 파일(코드 등) 전체를 복사.
- **`EXPOSE 3000`** — 애플리케이션이 리스닝하는 포트(3000) 노출.
- **`CMD ["node", "server.js"]`** — 컨테이너 시작 시 `server.js`를 실행.

### 이미지 빌드
```bash
docker build -t my-node-app .
```
- 버전 태그를 지정하지 않으면 자동으로 `latest`가 부여됨.
- 빌드 과정: Node 18 이미지 다운로드 → `WORKDIR` → `package.json` 복사 → `npm install`(66개 패키지 설치 등 로그 확인) → 나머지 파일 복사 → 포트 3000 노출 → 프로세스 시작 명령 반영 → 최종 이미지 생성.
```bash
docker images   # my-node-app:latest 확인
```

### 컨테이너 실행과 Port Binding
```bash
docker run -d -p 8080:3000 my-node-app:latest
```
- 컨테이너 포트 `3000`을 Docker Host 포트 `8080`에 매핑.
```bash
docker ps -a   # 컨테이너가 Up 상태이며 8080->3000 매핑 확인
```

### 접근 검증
- Docker Host가 AWS에서 호스팅되어 공인 IP를 가지므로, `http://<Public IP>:8080`으로 접속.
- "Hello Docker" 응답이 정상적으로 표시됨 — 이번에는 Node.js 애플리케이션으로 동일한 결과를 확인.

## 요약
- `FROM node:18` → `WORKDIR` → `COPY package.json` → `RUN npm install` → `COPY . .` → `EXPOSE 3000` → `CMD ["node","server.js"]`로 구성된 Dockerfile을 `docker build -t my-node-app .`로 빌드하고 `docker run -d -p 8080:3000 my-node-app`으로 실행하면, Docker Host의 공인 IP와 포트 8080을 통해 Node.js 애플리케이션에 정상적으로 접근할 수 있다.

# Prometheus Kubernetes Exporters and Custom Metrics - Build and Deploy a Custom Metric Application

## 개요
- 커스텀 메트릭을 노출하는 Node.js 애플리케이션 코드를 작성하고, `package.json`·`.dockerignore`·`Dockerfile`을 구성해 Docker 이미지를 빌드하는 과정.
- 참고: 애플리케이션 코드(`app.js`)의 정확한 JavaScript 문법은 화면에서 보여졌을 뿐 자막으로 낭독되지 않아 원문에서 확인할 수 없으므로, 이 노트에서는 강사가 말로 설명한 **동작 내용(설명)**만 정리하고 임의로 코드를 재구성하지 않음.

## 내용
### 애플리케이션 코드(app.js) — 설명된 동작
- Node.js 애플리케이션으로, **`express`**와 **`prom-client`** 패키지를 불러와 사용.
- 핵심 동작: "Hello World"를 출력하는 엔드포인트가 있고, 이 엔드포인트가 호출된 **횟수를 카운터(counter)로 기록** — 이 카운터 값이 바로 이번 실습의 **커스텀 메트릭**이 됨.
- 최종적으로 "Hello World"에 몇 번 접속(hit)했는지를 이 커스텀 메트릭을 통해 확인할 수 있도록 구성.
```bash
vi app.js
# (Express + prom-client 기반 Hello World 카운터 애플리케이션 코드 작성)
```

### package.json 갱신
- `npm init -y`로 생성된 기본 `package.json`을 실제 의존성(`express`, `prom-client`)과 시작 스크립트(`start`: `node app.js` 형태)를 포함하도록 전체 내용을 교체.
- 애플리케이션 이름은 **`custom-metric-app`**으로 지정.

### .dockerignore 작성 — 불필요한 파일 제외
```text
node_modules
npm-debug.log
Dockerfile
.dockerignore
```
- Docker 이미지 빌드 시 실제로 필요한 파일은 **`package.json`과 `app.js`뿐** — `node_modules`, `npm-debug.log`, `Dockerfile`, `.dockerignore` 자체는 이미지에 포함될 필요가 없음.
- 이 파일들을 제외하지 않으면 이미지 용량이 불필요하게 커지므로, `.dockerignore`로 명시적으로 제외.

### Dockerfile 작성
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```
- **`FROM node:20-alpine`** — 베이스 이미지로 가벼운 Node 20 Alpine 이미지 사용.
- **`WORKDIR /app`** — 컨테이너 내 작업 디렉터리를 `/app`으로 설정.
- **`COPY package*.json ./`** 후 **`npm install --production`** — 의존성 설치.
- **`COPY . .`** — 로컬 디렉터리의 파일을 컨테이너의 `/app`에 복사하되, `.dockerignore`에 명시된 4가지 파일/디렉터리(`node_modules`, `npm-debug.log`, `Dockerfile`, `.dockerignore`)는 제외됨.
- **`EXPOSE 3000`** — 애플리케이션이 사용하는 포트(타깃 포트) 3000번 노출.
- **`CMD ["npm", "start"]`** — 컨테이너 시작 시 `npm start`로 애플리케이션 실행.

### Docker 이미지 빌드 및 태깅
```bash
docker build -t custom-metric-app .
```
- **`-t custom-metric-app`**으로 이미지 이름(태그) 지정, **`.`**은 현재 디렉터리의 Dockerfile을 사용하겠다는 의미.
- Docker Hub에 푸시하기 위해 자신의 Docker Hub 계정 이름을 포함해 다시 태깅:
```bash
docker build -t <dockerhub-username>/custom-metric-app .
```
- 이 명령 실행 중 **권한 거부(permission denied)** 오류가 발생 — Docker 명령 실행에 필요한 권한(`sudo` 또는 `docker` 그룹 권한)이 없어서 발생한 문제로, 다음 강의에서 이어서 해결.

## 요약
- Hello World 접속 횟수를 카운터로 기록해 커스텀 메트릭으로 노출하는 Express 기반 Node.js 애플리케이션을 작성하고, `package.json`을 실제 의존성에 맞게 갱신했으며, `node_modules`·`Dockerfile` 등을 제외하는 `.dockerignore`와 `node:20-alpine` 베이스의 `Dockerfile`을 작성해 `docker build -t <이름> .`으로 이미지를 빌드하려 했으나, Docker Hub 계정명을 포함해 태깅하는 과정에서 권한 거부 오류가 발생해 다음 강의에서 이어서 해결한다.

# Writing a Dockerfile to Create an Image - Installing node.js

## 개요
- Node.js 애플리케이션을 컨테이너화하기 위한 사전 준비 — 서버에 Node.js·npm을 설치하고 프로젝트를 초기화하는 실습.

## 내용
### 전체 접근 방식
1. 사전 준비(Node.js, npm 설치).
2. 애플리케이션 코드(`server.js`) 작성.
3. Dockerfile 작성.
4. Dockerfile을 실행(`docker build`)해 이미지 생성.
5. 이미지로 컨테이너 실행.

### 사전 준비: Node.js와 npm 설치
```bash
apt update        # root 사용자이므로 sudo 불필요(일반 사용자라면 sudo 필요)
apt install -y nodejs npm
```
- **Node.js** — 코드를 읽고 실행하는 런타임 플랫폼(컨테이너 안에서도 Node 이미지를 사용하게 됨).
- **npm(Node Package Manager)** — Node.js의 패키지 매니저 — Python의 `pip`(예: `pip install flask`)에 대응하는 개념으로, 필요한 의존성·모듈을 설치.
```bash
node -v   # 예: v18
npm -v    # 예: 9.2.0
```

### 프로젝트 디렉터리 생성과 초기화
```bash
mkdir node-app
cd node-app
npm init -y   # package.json 파일 생성(프로젝트 초기화)
```
- 이후 **Express**(Node.js용 웹 프레임워크 패키지)를 설치하는 단계로 이어짐.

## 요약
- Node.js 애플리케이션을 컨테이너화하기 전 단계로, 서버에 `nodejs`와 `npm`을 설치(`apt install`)하고 버전을 확인한 뒤, 프로젝트 디렉터리를 만들어 `npm init -y`로 `package.json`을 생성해 Node.js 프로젝트 환경을 초기화한다.

# Setting Up the Development Environment

## 개요
- NestJS 개발을 시작하기 위한 사전 준비물(prerequisite)을 확인하고, Node.js 버전 점검부터 Nest CLI 설치, 새 프로젝트 생성까지의 실제 과정을 시연하는 강의.

## 내용
### 사전 준비물(prerequisites)
- 코드 에디터(code editor)가 설치되어 있어야 한다. 강사는 이 코스에서 VS Code를 사용하지만 원하는 에디터를 선택해도 된다.
- Node.js가 시스템에 설치되어 있어야 하고, Node.js의 기본 개념을 알고 있어야 한다.
- npm 명령어들에 대한 기본 이해가 필요하다. NestJS 설치는 물론, NestJS와 함께 사용할 여러 패키지를 설치할 때 npm을 많이 사용하게 된다.

### Node.js 설치 및 버전 확인
- nodejs.org에서 최신 버전의 Node.js를 다운로드할 수 있다.
- 터미널(terminal)에서 `node -v` 명령으로 현재 설치된 Node.js 버전을 확인할 수 있다.
- 여러 버전이 설치되어 있다면 `nvm list`로 설치된 모든 Node 버전을 확인하고, `nvm use <버전>` 명령으로 원하는 버전(강의에서는 버전 18)으로 전환할 수 있다.
- 최신 버전을 새로 다운로드하는 경우에는 이런 버전 전환 작업이 따로 필요하지 않다.

### Nest CLI 설치 및 새 프로젝트 생성
- 원하는 폴더로 이동한 뒤(`cd document` 등 자신의 폴더 선택), NestJS를 전역(global)으로 설치한다.
- 설치 명령은 `npm i -g @nestjs/cli@latest`이며, 이는 NestJS의 최신 버전을 시스템에 설치한다.
- NestJS 설치가 끝나면 `nest new` 명령으로 새 프로젝트를 생성할 수 있다. 강의에서는 프로젝트 이름을 `first-nest-app`으로 지정했다.
- 프로젝트 생성 과정에서 사용할 패키지 매니저(package manager)를 선택해야 하며, 강사는 npm을 선택했다.
- 프로젝트 생성이 끝나면 `cd first-nest-app`으로 프로젝트 폴더에 들어간 뒤, VS Code가 설치되어 있다면 터미널에서 `code .` 명령으로 해당 프로젝트를 VS Code에서 바로 열 수 있다.
- `nest new` 명령으로 생성된 프로젝트 폴더 안에는 여러 파일들이 자동으로 생성되어 있다.

## 예시
```bash
# Node 버전 확인
node -v

# 설치된 모든 Node 버전 목록 확인
nvm list

# 특정 Node 버전 사용 (예: 18)
nvm use 18

# 원하는 폴더로 이동
cd document

# NestJS CLI 전역 설치
npm i -g @nestjs/cli@latest

# 새 NestJS 프로젝트 생성
nest new first-nest-app
# → 패키지 매니저 선택 프롬프트에서 npm 선택

# 생성된 프로젝트 폴더로 이동
cd first-nest-app

# VS Code로 프로젝트 열기
code .
```

## 요약
- NestJS 개발을 시작하려면 코드 에디터, Node.js, npm 기본 지식이 필요하다.
- `node -v`와 `nvm list`/`nvm use`로 Node 버전을 확인하고 전환할 수 있다.
- `npm i -g @nestjs/cli@latest`로 Nest CLI를 전역 설치하고, `nest new <프로젝트명>`으로 새 프로젝트를 생성한다.
- 다음 영상에서는 `nest new`로 생성된 프로젝트 템플릿의 파일 구조를 자세히 살펴본다.

# Setting Up the Project

## 개요
- **Nest CLI**를 설치하고 이를 이용해 새 NestJS 프로젝트를 생성하는 과정을 실습으로 보여주는 강의.

## 내용
### Nest CLI 소개
- NestJS를 시작하려면 먼저 **Nest CLI**를 설치해야 한다.
- Nest는 자체적으로 강력한 커맨드라인 인터페이스(command-line interface) 도구를 제공하며, 이 도구는 NestJS 애플리케이션을 스캐폴딩(scaffold)하고 빌드(build)하고 관리(manage)하기 위한 다양한 명령어(command)를 제공한다.
- Angular를 다뤄본 적이 있다면 Nest CLI가 비슷한 경험(similar experience)을 제공한다는 것을 느낄 수 있다.
- Nest는 어떤 프런트엔드와도 함께 사용할 수 있다. 서버에서 뷰(view)를 렌더링하든, API를 만들어 React, Angular, Vue, 심지어 순수 자바스크립트(Vanilla JavaScript) 애플리케이션과 연결하든 상관없다.

### 프로젝트 생성 실습
- VS Code 터미널을 열고, Node.js는 이미 설치되어 있다고 가정한다.
- Nest CLI를 전역(global)으로 설치하는 명령어는 `npm i -g @nestjs/cli`다.
- 설치한 버전을 확인하려면 `nest -v` 명령어를 사용한다.
- 새 프로젝트를 생성할 때는 `nest new <프로젝트 이름>` 명령어를 사용한다.
- Nest CLI로 명령을 실행할 때는 항상 `nest`라는 키워드를 접두어(prefix)로 붙인다. 이것이 메인 명령어이고 그 뒤에 나머지 명령이 이어진다.
- 엔터를 누르면 CLI가 어떤 패키지 매니저(package manager)를 사용할지 묻는 프롬프트가 뜨는데, 원하는 것을 선택하면 된다(강의에서는 npm을 선택).
- 선택 후 CLI가 필요한 파일과 폴더를 설치하며 애플리케이션을 스캐폴딩(scaffold)하고, 이로써 프로젝트가 생성된다.

## 예시
```bash
# Nest CLI 전역 설치
npm i -g @nestjs/cli

# 설치된 Nest CLI 버전 확인
nest -v

# 새 프로젝트 생성 (실행 후 패키지 매니저 선택 프롬프트가 뜨며, 강의에서는 npm 선택)
nest new <프로젝트 이름>
```

## 요약
- NestJS 개발을 시작하려면 `npm i -g @nestjs/cli`로 Nest CLI를 먼저 설치한다.
- `nest -v`로 버전을 확인하고, `nest new <프로젝트 이름>`으로 새 프로젝트를 생성한다.
- Nest CLI 명령은 항상 `nest` 키워드로 시작한다.
- 프로젝트 생성 시 패키지 매니저 선택 프롬프트가 나타나며, 선택 후 CLI가 필요한 파일과 폴더를 자동으로 스캐폴딩한다.
- 다음 강의에서는 이렇게 생성된 프로젝트의 구조(project structure)를 자세히 살펴본다.

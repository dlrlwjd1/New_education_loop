# Introduction to MyStore Application

## 개요
- 지금까지 배운 개념들을 종합해 만들 실전 프로젝트 **MyStore** 애플리케이션을 소개하는 강의. 사용할 기술 스택과 앞으로 구현할 기능들, 그리고 완성된 애플리케이션의 전체 흐름을 미리 살펴본다.

## 내용
### MyStore 애플리케이션 소개
- 이번 섹션부터 여러 섹션에 걸쳐, NestJS 개발자로서 경험을 쌓는 데 필요한 대부분의 개념을 다루는 작지만 실용적인(practical) 애플리케이션인 **MyStore**를 만든다.
- 서버 API는 **NestJS**로, 템플릿 엔진(templating engine)은 **EJS**를 사용한다.
- 데이터베이스는 이미 설정해 둔 **MySQL**과 `mysql2` 드라이버를 그대로 사용한다.

### 구현할 기능들
- REST API 생성
- EJS를 이용한 실전 템플릿 디자인
- Bootstrap 5를 이용한 화면 작업
- 라우트(route) 설정
- 쿠키(cookie) 및 세션 쿠키(session cookie)를 이용한 인증(authentication)
- JWT를 이용한 인증
- 비밀번호 해싱(password hashing)을 위한 bcrypt.js 적용
- 파일 업로드/다운로드 기능
- 이메일 전송
- 페이지네이션(pagination) 등
- MyStore 앱을 모든 기능과 함께 완성한 뒤에는, 동일한 앱을 ORM으로 Mongoose를, 데이터베이스로 MongoDB를 사용해 다시 만드는 과정도 보여줄 예정이라고 언급한다.

### 애플리케이션의 최종 흐름 미리보기
- 애플리케이션이 로드되면 내비게이션 바(NAV bar)에 Home, Sign up, Login 링크가 표시되고, 등록된 상품이 있으면 화면에 표시된다.
- **Sign up** 링크를 선택하면 이메일과 비밀번호로 새 사용자를 등록하는 회원가입 폼으로 이동하며, 이메일과 비밀번호에 대한 유효성 검사(validation)도 구현할 예정이다. 회원가입을 마치면 홈 페이지로 이동한다.
- 등록된 사용자는 **Login**을 클릭해 자격 증명(credentials)을 입력하고, 유효한 정보를 전달하면 로그인된다.
- 로그인한 사용자는 상품을 추가(add product)하고 로그아웃(logout)할 수 있는 링크, 그리고 상품을 수정(edit)하고 삭제(delete)할 수 있는 옵션을 갖게 된다.
- 이는 기본적인 아이디어이며, 앱에는 이 밖에도 다양한 소소한 기능들이 포함될 예정이라고 설명한다.

## 예시
(이 강의에는 별도 코드 예시 없음)

## 요약
- MyStore는 NestJS(서버 API) + EJS(템플릿 엔진) + MySQL/mysql2(데이터베이스)로 만드는 실전 프로젝트다.
- REST API, EJS 템플릿, Bootstrap 5, 라우트 설정, 쿠키/세션/JWT 인증, bcrypt 해싱, 파일 업로드/다운로드, 이메일 전송, 페이지네이션 등 다양한 기능을 구현할 예정이다.
- 완성 후에는 동일한 앱을 Mongoose와 MongoDB로도 다시 구현할 예정이다.
- 앱의 최종 흐름은 Home/Sign up/Login 내비게이션 → 회원가입 → 로그인 → 로그인한 사용자의 상품 추가/수정/삭제 기능 순으로 구성된다.

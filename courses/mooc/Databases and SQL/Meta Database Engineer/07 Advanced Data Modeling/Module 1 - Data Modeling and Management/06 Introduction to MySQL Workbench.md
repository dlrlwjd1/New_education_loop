# Introduction to MySQL Workbench

## 개요

- MySQL Workbench(Oracle의 통합 시각 모델링·관리 도구) 소개: 특징, 설치, 사용자 생성, 연결 설정

## 내용

### 특징

- **오픈소스·크로스 플랫폼** — 여러 운영체제에서 사용 가능
- 설계·유지보수 단순화, 시각적 SQL 에디터, 자동 완성·하이라이팅
- 서로 다른 MySQL 버전 간, 그리고 다른 관계형 시스템과의 **데이터 마이그레이션** 지원

### 설치

- dev.mysql.com/downloads에서 운영체제에 맞는 사본 다운로드 → 설치 마법사(커스텀 설정)에서 **MySQL Server, MySQL Workbench, MySQL Shell** 설치.

### 홈 화면

- 환영 메시지, 문서·블로그·포럼 링크, 도구 접근.
- 사이드 패널: **Connections**(로컬·원격 MySQL 인스턴스 연결 목록 — 로드·구성·그룹·정보), **Models**(최근 모델 + 새 모델(+) / 저장 모델 열기), **Migration** 마법사.

### 새 사용자 생성 (가장 안전한 연결 방식)

1. root 사용자로 서버 로그인
2. Management 메뉴의 **Users and Privileges** → **Add Account**
3. 이름(admin1)·비밀번호 입력, 권한 제어:
   - **Account Limits** — 최대 쿼리·갱신·연결 수 제한
   - **Administrative Roles** — 역할 부여 (예: **DBA** = 모든 작업 권한)
   - **Schema Privileges** — 접근 권한 제어
4. Apply로 생성

### 새 연결 생성

- 홈 화면 + 아이콘 → Setup New Connection 폼: 인스턴스 이름(test server), 사용자명(admin1), **호스트 127.0.0.1, 포트 3306** → Test Connection으로 확인 → OK 저장.

## 요약

- Workbench는 모델링·관리·마이그레이션을 아우르는 시각 도구다.
- root로 새 사용자(권한 제어 포함)를 만들고, 127.0.0.1:3306으로 연결을 설정해 스키마·쿼리 작업을 시작한다.

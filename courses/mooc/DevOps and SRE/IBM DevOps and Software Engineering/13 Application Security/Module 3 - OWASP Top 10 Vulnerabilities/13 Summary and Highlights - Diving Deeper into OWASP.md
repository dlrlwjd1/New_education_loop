# Summary & Highlights - Diving Deeper into OWASP

> MOOC 읽기 자료 · [원본 강의](https://www.mooc.org/learn/application-security-for-developers-devops/supplement/2Ke3H/summary-highlights-diving-deeper-into-owasp)

## 개요
- Module 3 후반부(SQL 인젝션, 크로스 사이트 스크립팅, 시크릿 관리)의 핵심 내용을 정리한 공식 요약.

## 내용
- SQL 인젝션은 문자열 입력을 전달해 데이터베이스를 악용하는 공격.
- SQL 인젝션의 4가지 유형: SQL 조작, 코드 인젝션, 함수 호출 인젝션, 버퍼 오버플로.
- 쿼리 매개변수 사용, 서버 사이드 검증, 사용자 권한 제한, 동적 애플리케이션 보안 테스트(DAST) 수행으로 SQL 인젝션 공격으로부터 애플리케이션을 보호할 수 있음.
- 크로스 사이트 스크립팅은 애플리케이션이 신뢰할 수 없는 데이터를 브라우저로 보낼 때 발생하며, 저장형·블라인드형·반사형이 3가지 흔한 유형.
- 의심스러운 HTTP 요청과 키워드 확인, 목록·키워드 이스케이프, HTTP TRACE 비활성화, 안전하지 않은 싱크 회피로 크로스 사이트 스크립팅을 예방할 수 있음.
- 시크릿 관리는 비밀번호처럼 비밀로 유지되어야 하는 항목을 저장·관리하는 것.
- 시크릿을 저장·관리하는 3가지 흔한 방법: GUI(Graphical User Interface), CLI(Command Line Interface), HTTP API(Hypertext Transport Protocol Application Programming Interface).
- 코드 개발의 과제로는 접근성, 감사와 로깅, 보안이 포함됨.

## 요약
- Module 3 후반 강의는 SQL 인젝션(4가지 유형과 쿼리 매개변수·서버 사이드 검증·최소 권한·DAST를 통한 예방), 크로스 사이트 스크립팅(저장형·블라인드형·반사형과 이스케이프·HTTP TRACE 비활성화·안전하지 않은 싱크 회피를 통한 예방), 그리고 GUI·CLI·HTTP API로 관리하는 시크릿 관리를 요약하며 Module 3을 마무리한다.

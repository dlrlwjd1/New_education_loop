# Lecture: JavaScript Object Notation

## 개요
- 데이터 직렬화(serialization)의 개념과 역사(XML → AJAX → JSON), 그리고 JSON이 표준으로 자리잡게 된 배경을 설명하는 강의

## 내용
### 데이터 직렬화란
- 서로 다른 언어로 작성된 프로그램 간(또는 네트워크로 연결된 프로그램 간)에 데이터 구조를 주고받으려면, 양쪽이 동의하는 공통 형식이 필요하다 — 이를 직렬화(serialization) 또는 마샬링(marshalling)이라 부른다.
- 대부분의 프로그래밍 언어의 데이터 구조는 선형 구조(리스트/배열)와 키-값 구조(딕셔너리/객체) 두 가지로 요약되며, 트리(계층) 구조가 그 외의 대표적 형태다.

### XML 시대와 AJAX
- 1990년대에는 확장 가능한 마크업 언어인 XML이 직렬화의 표준으로 자리잡았다 — 태그 이름을 자유롭게 정할 수 있어 어느 정도 자체 문서화(self-documenting)가 가능했다.
- 웹이 페이지 전체 새로고침 없이 서버와 통신하는 방식(AJAX, Asynchronous JavaScript and XML)으로 발전하면서, 브라우저의 JavaScript가 서버의 XML 데이터를 읽어 배열·객체로 재구성하는 패턴이 널리 쓰였다. 문제는 XML이 계층 구조 표현에는 강하지만, 배열이나 딕셔너리 같은 단순 구조를 표현하고 다시 그 구조로 복원하는 데는 번거로웠다는 점이다.

### Douglas Crockford와 JSON의 탄생
- Douglas Crockford(당시 Yahoo)는 "JavaScript의 객체·배열 리터럴 문법을 그대로 직렬화 형식으로 쓰자"는 아이디어를 제시했다 — 이것이 JavaScript Object Notation(JSON)이다.
- Python의 딕셔너리 리터럴과 JavaScript의 객체 리터럴이 형태적으로 매우 비슷했던 것이 JSON 보급에 큰 행운으로 작용했다고 언급된다.
- Crockford는 JSON을 JavaScript보다 더 제한적이고 엄격한 문법으로 설계해, PHP·Java 등 다른 언어에서도 안전하게 파싱할 수 있는 라이브러리를 만들기 쉽게 했다. json.org에 명세를 공개해 사실상 표준으로 자리잡게 했다.

### JSON의 확산과 NoSQL로의 연결
- 이후 Node.js(서버의 JavaScript), MongoDB(JSON 기반 데이터베이스) 등이 등장하며 "클라이언트도 JavaScript, 서버도 JavaScript, DB도 JSON"이라는 스택이 유행했다 — 이것이 "NoSQL" 데이터베이스 확산의 한 축이 되었고, 이후 PostgreSQL·MySQL 같은 관계형 데이터베이스도 JSON 열 지원을 추가하는 계기가 되었다고 설명한다(다음 강의에서 이어짐).

## 예시
- (코드 예시 없음 — 역사적 배경 설명 강의)

## 요약
- 직렬화는 서로 다른 언어/시스템 간에 데이터 구조를 주고받기 위한 공통 형식을 의미하며, XML이 초기 표준이었다.
- Douglas Crockford가 JavaScript의 객체·배열 리터럴 문법을 표준화한 것이 JSON이며, Python의 딕셔너리와 형태가 비슷해 널리 확산되는 데 유리했다.
- JSON 기반 스택(JS 클라이언트-서버-DB)의 인기가 NoSQL 데이터베이스 확산과 이후 관계형 데이터베이스의 JSON 지원 추가로 이어졌다.

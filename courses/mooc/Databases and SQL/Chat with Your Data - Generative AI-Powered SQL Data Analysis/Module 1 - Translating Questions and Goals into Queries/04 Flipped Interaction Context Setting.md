# Flipped Interaction Context Setting

## 개요
- 앞선 강의에서 강조한 "충분한 데이터베이스 컨텍스트 제공"을 **직접 다 정리해서 주는 대신, AI가 스스로 필요한 질문을 던지게 하는 방법** — **플립드 인터랙션 패턴(Flipped Interaction Pattern)**을 SQL 컨텍스트 수집에 적용하는 강의.

## 내용
### 문제의식 — 컨텍스트를 사람이 다 정리하기는 부담스럽다
- 데이터베이스 종류, 버전, 클라이언트, 테이블 구조, 샘플 데이터 등을 매번 문서로 정리해서 주는 것도 방법이지만, **"애초에 무엇을 문서에 담아야 할지"를 아는 것 자체가 부담**이다.
- 해결책: **AI가 필요한 정보를 스스로 물어보게 만드는 것.**

### 비유 — "시험 공부 자료를 주는 학생"
- AI에게 "시험을 봐야 하는데, 답을 알려줘"라고 시키는 대신, **AI가 스스로 "이 시험을 풀려면 무엇을 알아야 하지?"라고 묻고, 공부 자료를 요청하고, 그걸 학습한 뒤 답하게 만드는 것**과 같다.

### 플립드 인터랙션 프롬프트 (SQL 컨텍스트 수집용)
```
I'm going to need your help querying a database. Ask me questions one at a time to determine the database version, tables, etc.,
to give you all the information needed to generate SQL queries for me.
You can ask me to run commands to gather key information for you. Ask the first question.
```
- 핵심: "네가 질문해라. 내가 답을 주고, 명령어 실행이 필요하면 나에게 실행해달라고 요청해라"라고 **대화의 주도권을 AI에게 넘긴다.**

### 실전 진행 과정
1. AI: "먼저, DB 버전이 뭔지 알아야 합니다. MySQL이면 `SELECT VERSION()`을, Postgres면 `SELECT version()`을, SQL Server면 다른 명령을 실행해주세요." (DB 종류별로 다른 명령을 제시)
2. 사용자: MySQL 클라이언트에서 명령을 실행하고, 결과("MySQL 9.2.0")를 **그대로 복사해서 붙여넣음** (부가 설명 없이 결과만).
3. AI: 결과를 보고 즉시 "MySQL이군요. 이제 사용 가능한 데이터베이스 목록을 확인합시다. `SHOW DATABASES;`를 실행해주세요."라고 다음 명령을 제시.
4. 사용자: 명령 실행 후 **결과를 스크린샷으로 첨부** — 이것이 **멀티모달 프롬프팅(multimodal prompting)**의 실전 예. 텍스트 복사/CSV 저장이 번거로울 땐 화면을 그냥 스크린샷 찍어서 주는 것도 편리한 방법.
   - 이때 "여러 데이터베이스 중 Tequila라는 것만 관심 있다"는 **부가 맥락도 함께 제공**해, 불필요한 다른 DB 탐색을 생략시킴.
5. AI: "좋습니다. 이제 `SHOW TABLES IN Tequila;`를 실행해주세요."라고 또 다음 명령 제시.
6. 사용자: 테이블 목록 결과를 복사해서 붙여넣음(이미 대화 맥락상 "이게 테이블 목록"이라는 설명도 필요 없음 — 이미 AI가 요청한 것이므로).
7. AI: "이제 어떤 테이블에 관심 있으신가요?"라고 물었을 때, 사용자가 "테이블이 그렇게 많지 않으니, **모든 테이블 정보를 한 번에 가져올 수 있는 명령어**를 하나 줘"라고 요청.
   - (주의: 테이블이 1,000개나 되는 거대한 데이터베이스라면 이 방식은 적합하지 않다고 명시.)
8. AI가 모든 테이블의 컬럼명/데이터 타입 등을 한 번에 조회하는 쿼리를 제시 → 실행 결과를 통째로 복사해서 붙여넣음.
9. AI: "이제 전체 구조를 완전히 이해했습니다."

### 핵심 원칙 — "한 번에 다 시키지 말고, 조금씩 적응하며 진행하라"
- 목표는 **한 번의 프롬프트로 모든 걸 해결하려 하지 않는 것**이다.
- 한 번에 전부 쿼리를 생성해달라고 하면, **중요한 정보를 빠뜨리기 쉽고 환각이 발생할 위험이 크다.**
- 반면 이렇게 **정보를 조금씩 수집하며 AI가 스스로 판단해 다음 단계를 결정하게 하면**, AI가 미처 생각하지 못했을 수도 있는 미묘한 문제나 오류까지 짚어내며 더 정확한 쿼리를 만들 수 있다.

## 예시
```
초기 프롬프트:
"I'm going to need your help querying a database. Ask me questions one at a time to determine
the database version, tables, etc., to give you all the information needed to generate SQL queries for me.
You can ask me to run commands to gather key information for you. Ask the first question."

이후 흐름: AI가 명령 제시 → 사용자가 실행 후 결과(텍스트 또는 스크린샷)를 그대로 붙여넣기 → AI가 다음 명령 제시 → 반복
```

## 요약
- 데이터베이스 컨텍스트를 사람이 미리 다 정리해서 주는 대신, **플립드 인터랙션 패턴으로 AI가 스스로 필요한 정보를 하나씩 질문하고 명령을 제시하게** 만들 수 있다.
- 사용자는 그 명령을 실행하고 **결과(텍스트든 스크린샷이든)를 그대로 돌려주기만 하면** 된다 — 이는 멀티모달 프롬프팅의 실전 활용이기도 하다.
- 핵심은 한 번에 모든 걸 요청하지 않고, **AI가 정보를 점진적으로 수집하며 적응적으로 다음 단계를 결정하게** 하는 것 — 이렇게 하면 환각을 줄이고 더 정확한 쿼리를 얻을 수 있다.

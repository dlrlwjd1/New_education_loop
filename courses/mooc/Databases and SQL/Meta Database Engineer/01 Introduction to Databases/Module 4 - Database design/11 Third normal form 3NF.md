# Third normal form 3NF

## 개요

- 제3정규형(3NF)의 조건과 이행 종속(transitive dependency)의 개념
- 유럽 베스트셀러 도서 테이블에서 이행 종속을 제거하는 과정

## 내용

### 3NF의 조건

- 3NF이려면 먼저 **1NF와 2NF를 만족**해야 한다 (정규화는 점진적).
- 추가 조건: **이행 종속이 없어야 한다** — 비키(non-key) 속성이 다른 비키 속성에 함수적으로 종속되면 안 된다.
- 개념 표기: A → B이고 B → C이면 **A가 B를 거쳐 C를 결정**한다 — 이것이 이행 종속이다.

### 예제 — 온라인 서점의 유럽 베스트셀러 테이블

- 속성: 책 ID(유일한 키), 제목, 저자명, 언어, 국가.
- ID로 모든 비키 속성을 찾을 수 있다 (예: ID 3 → 저자 Cormac O'Dwyer, 언어 Irish, 국가 Ireland).
- 그런데 **언어로 국가를, 국가로 언어를 결정할 수 있다** (유럽 맥락에서 언어가 French면 국가는 France) — 두 개 모두 비키 속성이므로 **이행 종속** 발생: 언어 ↔ 국가.
- 다른 속성들은 ID에만 종속되므로 문제없다 — 저자명이 제목이나 언어를 결정하지는 못한다 (예: 저자 Michel Leiris는 프랑스어·스페인어 두 언어로 책을 썼다).

### 3NF로 재설계

1. 테이블을 둘로 분리: **TopBooks** 테이블 유지, **Country** 테이블(국가, 언어) 신설
2. TopBooks에는 **country 컬럼을 외래 키로 남겨** 두 테이블을 연결
3. TopBooks에서 언어 컬럼은 제거 — 국가만 알면 언어가 결정되기 때문
4. Country 테이블은 중복 없는 4개 레코드만 보유
- 이제 **모든 비키 속성이 각 테이블의 기본 키에 의해서만 결정**되므로 3NF 충족.

## 예시

```text
-- 3NF 위반 (language ↔ country 이행 종속)
TopBooks(id PK, title, author, language, country)

-- 3NF 재설계
TopBooks(id PK, title, author, country FK → Country)
Country(country PK, language)
```

## 요약

- 3NF = 2NF + 이행 종속 없음. 비키 속성끼리 서로 결정하는 관계를 제거한다.
- 이행 종속(A→B→C)이 발견되면 해당 속성 쌍을 새 테이블로 분리하고 외래 키로 연결한다.
- 결과적으로 모든 비키 속성은 오직 기본 키에 의해서만 결정된다.

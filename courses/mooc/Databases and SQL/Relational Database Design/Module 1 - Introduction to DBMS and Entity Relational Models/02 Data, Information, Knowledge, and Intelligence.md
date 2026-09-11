# Data, Information, Knowledge, and Intelligence (데이터·정보·지식·지능)

> 강좌: Relational Database Design (MOOC, 강사 Di Wu) · 모듈 1: Introduction to DBMS and Entity Relational Models

## 개요
- 모듈 1의 도입. DBMS의 필요성과, **데이터(data) → 정보(information) → 지식(knowledge) → 지능(intelligence)**으로 이어지는 가치 사슬을 소개한다.

## 내용

### 모듈 1 학습 목표
- 고전적 파일 시스템(file system)과 비교해 **DBMS의 필요성**을 설명한다.
- 서로 다른 DBMS의 **장단점**을 설명한다.
- **엔티티(entity)와 속성(attribute)**을 이해·설명한다.
- **관계(relationship)와 카디널리티(cardinality)·참여(participation)**를 이해·설명한다.
- **ERD(개체-관계 다이어그램)**를 그려 관계형 모델로 변환할 준비를 한다.

### 데이터 → 정보 → 지식 → 지능
- **데이터(data)** — 그 자체로는 의미가 적은 값. 예: `350`이라는 숫자 하나(통화 단위 정도만).
- **정보(information)** — 데이터에 의미(semantic)를 부여한 것. 예: "350은 2021년 1월 29일 기준 GameStop 주식 1주 가격".
- **지식(knowledge)** — 여러 정보의 연결·비교. 예: 1월 4일 17.25달러 → 1월 29일 350달러 ≈ 약 2,000% 상승이라는 패턴 인식.
- **지능/지혜(intelligence/wisdom)** — 지식을 바탕으로 상관관계·인과관계를 찾아 **의사결정**(사고팔기 등)을 내리는 것. = 데이터의 진짜 가치.

### 핵심 메시지
- 숫자·정보가 **분리되어 있거나 비교되지 않으면** 생각만큼 가치가 없다.
- 따라서 데이터를 관리하는 **체계적·효율적 방법(=DBMS)**이 필요하며, 이를 통해 "데이터가 말하게(let data speak)" 해 **실행 가능한 통찰(actionable insights)**로 나아간다.

## 예시
- `350`은 데이터, “1월 29일 주가 350달러”는 정보, 한 달간 약 2,000% 상승했다는 비교는 지식, 이를 근거로 한 의사결정은 지능에 해당한다.

## 요약
- **데이터 → 정보 → 지식 → 지능**의 사슬에서 데이터에 의미를 부여하고 연결·비교해야 가치가 생긴다.
- 이를 위해 체계적 데이터 관리 도구인 **DBMS**가 필요하다.

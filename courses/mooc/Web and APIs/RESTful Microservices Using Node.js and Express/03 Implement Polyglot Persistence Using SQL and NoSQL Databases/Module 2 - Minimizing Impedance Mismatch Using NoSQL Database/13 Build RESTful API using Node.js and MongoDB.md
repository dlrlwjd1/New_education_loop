# Build RESTful API using Node.js and MongoDB

## 개요
- SRP에 따른 REST API 4계층 구조를 다시 정리하고, Node.js REST 애플리케이션의 샘플 파일 구성과 MongoDB의 4가지 주요 특징을 다루는 강의

## 내용

### REST API 구조화 모범 사례
- **단일 책임 원칙(SRP)** — 각 코드는 하나의 책임만 처리한다. 이 원칙에 따라 애플리케이션을 **계층**으로 분리하는 것이 좋은 관행이며, 계층은 코드가 수행하는 작업에 따라 만든다.
- 전형적인 REST API 솔루션의 **4계층**:

| 계층 | 역할 |
|---|---|
| **REST API / 라우트 계층** | 요청을 적절한 컨트롤러 함수로 전달. 모듈화를 위해 **모든 라우트 핸들러를 `app.js`가 아닌 별도 `.js` 파일에 정의** — `app.js`는 진입점이며 모든 사용자에게 열려 있다 |
| **컨트롤러 계층** | router 메서드에 넘겨지는 콜백 함수 |
| **서비스 계층** | 애플리케이션의 비즈니스 로직 |
| **DAO 계층** | 데이터 조회·갱신·특정 자원 삭제 등 데이터 연산 |

### 샘플 파일 구성
| 파일 | 역할 |
|---|---|
| `app.js` | 애플리케이션 진입점. 라우트를 위해 `index.js`를 호출한다 |
| `index.js` | `users.api.js`를 참조한다 |
| `users.api.js` | 모든 라우트 |
| `users.controller.js` | 들어오는 요청 처리와 응답 반환 |
| `users.service.js` | 모든 비즈니스 로직 |
| `users.dao.js` | 데이터에 대한 모든 조작 |

### MongoDB의 4가지 주요 특징
1. **고성능(high performance)** — 두 이유: **내장 데이터 구조 지원으로 I/O 활동이 줄고**, **인덱스가 더 빠른 질의를 지원**한다.
2. **풍부한 질의 언어(rich query language)** — 읽기·쓰기 연산은 물론 **데이터 집계(aggregation)와 강력한 검색**을 지원한다.
3. **고가용성(high availability)** — 복제 기능인 **레플리카 셋(replica set)**: 같은 데이터셋을 유지하는 MongoDB 서버 그룹으로 **자동 장애 조치(failover), 데이터 중복성, 가용성 증대**를 제공한다.
4. **수평 확장성(horizontal scalability)** — 데이터를 **머신 클러스터에 분산**할 수 있다.

## 예시
```text
app.js ──→ index.js ──→ users.api.js ──→ users.controller.js ──→ users.service.js ──→ users.dao.js ──→ MongoDB
진입점      라우트 집합    라우트 계층      컨트롤러 계층           서비스(비즈니스)      DAO(데이터)
```

```text
MongoDB 4대 특징
고성능        내장 구조 → I/O 감소, 인덱스 → 빠른 질의
풍부한 질의    읽기·쓰기 + 집계 + 검색
고가용성       레플리카 셋 → 자동 failover, 중복성
수평 확장     클러스터 분산
```

## 요약
- SRP에 따라 라우트·컨트롤러·서비스·DAO 4계층으로 나누고 라우트 핸들러는 `app.js` 밖에 둔다.
- 샘플 구성은 `app.js → index.js → users.api.js → controller → service → dao`로 흐른다.
- MongoDB는 내장 구조와 인덱스로 고성능, 집계·검색을 포함한 풍부한 질의, 레플리카 셋으로 고가용성, 클러스터 분산으로 수평 확장성을 제공한다.

# Document the API using Swagger

## 개요
- **OpenAPI 명세**(구 Swagger 명세)와 Swagger 도구(Editor·UI·Codegen), YAML 문서 구조(metadata·paths·parameters), 문서 작성 단계, 그리고 **기존 Node.js API에 문서를 붙이는 방법**(`swagger-ui-express` + `yamljs`)을 다루는 강의

## 내용

### OpenAPI 명세
- 이전에 **Swagger 명세**로 불렸던 **REST API 기술(description) 형식**이다.
- OpenAPI 파일로 **API 전체**를 기술할 수 있다:
  - 사용 가능한 **엔드포인트**와 각 엔드포인트의 **연산**
  - 각 연산의 **파라미터** — 요청 본문, 응답, 라우트 파라미터
  - **인증 방법**
  - 연락처, 라이선스, 이용 약관 등
- 명세는 **YAML 또는 JSON** 으로 쓴다.

### Swagger
- OpenAPI 명세를 중심으로 만들어진 **오픈소스 도구 모음**으로 REST API를 **설계·구축·문서화·소비**하게 돕는다.
- JSON으로 표현되는 RESTful API의 **인터페이스 기술 언어**다.
- 주요 도구:

| 도구 | 역할 |
|---|---|
| **Swagger Editor** | 브라우저 기반 편집기에서 OpenAPI 명세를 작성 |
| **Swagger UI** | 사용자가 **브라우저에서 API 호출을 직접 시험**할 수 있는 **인터랙티브 API 문서** 생성 |
| **Swagger Codegen** | **40개 이상 언어**의 API 클라이언트 라이브러리 생성 |

- API 설계를 시작하기 전에 어떻게 보일지 윤곽을 잡는 것이 중요하며, Swagger가 **API 우선(API-first) 설계**를 돕는다.

### 문서 구조
Swagger 정의는 YAML 또는 JSON이며 **metadata, paths, parameters** 로 이뤄진다.
- **metadata** — info, version, 앱이 도는 host 등
- **paths** — 서로 다른 HTTP 메서드의 **개별 엔드포인트**
- **parameters** — URL 경로로 넘기는 파라미터, 데이터 타입 등
- **요청 본문과 응답**의 상세도 YAML에 정의한다.

### Swagger Editor
- OpenAPI 명세로 RESTful API를 설계·정의·문서화하는 **오픈소스 편집기**다. 로컬에 내려받아 어떤 브라우저에서든 쓰거나 웹에서 접근한다.
- API 설계를 시작하기도 전에 설계할 API의 윤곽을 Swagger Editor에 지정할 수 있다.

### YAML 문서 작성 단계
1. 웹에서 **Swagger Editor** 에 접근한다.
2. 설계할 API(또는 문서화할 기존 API)의 구조를 **YAML** 로 쓴다.
3. **GET·POST·PUT·DELETE** 같은 HTTP 메서드를 지정하고 API 구성 요소를 기술한다.
4. YAML 파일을 **Node.js 애플리케이션에 import** 하고 문서 UI를 생성한다.

### YAML 예시 셋
- **첫째** — API의 metadata: info와 서버가 도는 host
- **둘째** — GET·POST 엔드포인트 정의. POST에는 생성할 객체를 담은 **요청 본문**이 있고 성공 시 **201** 응답
- **셋째** — ID 속성으로 특정 객체를 가져오는 GET. 파라미터는 **경로(path)** 로 넘기고 성공 시 **200**

### 기존 API에 문서 추가
1. Swagger Editor에서 문서 명세를 **YAML 파일로 다운로드**한다. 앞서 만든 사용자 REST API의 문서를 만드는 데 쓴다.
2. 다운로드한 **`swagger.yaml`** 을 프로젝트의 **`api-docs`** 폴더에 넣는다.
3. **`swagger-ui-express`** 와 **`yamljs`** 모듈을 import한다.
4. **yamljs로 `swagger.yaml`을 로드**한다.
5. 문서용 **라우트 경로**를 만들고 UI를 서비스한다. **setup 함수**에 YAML 명세를 넘긴다.
6. 애플리케이션을 시작하고 브라우저에 URL을 입력하면 문서화된 사용자 API가 보인다.

## 예시
```yaml
# 1) metadata
swagger: "2.0"
info:
  title: User API
  description: User details REST API
  version: "1.0.0"
host: localhost:3000
basePath: /api/v1
schemes:
  - http

# 2) GET / POST
paths:
  /users:
    get:
      summary: Get all users
      responses:
        200:
          description: Successful operation
    post:
      summary: Create a new user
      parameters:
        - in: body
          name: user
          required: true
          schema:
            type: object
      responses:
        201:
          description: User created

  # 3) 경로 파라미터로 단건 조회
  /users/{userId}:
    get:
      summary: Get user by ID
      parameters:
        - in: path
          name: userId
          required: true
          type: integer
      responses:
        200:
          description: Successful operation
```

```bash
npm install swagger-ui-express yamljs
```

```javascript
// app.js — 기존 API에 문서 붙이기
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerDoc = YAML.load('./api-docs/swagger.yaml');   // YAML 로드
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));   // 문서 라우트

// 브라우저: http://localhost:3000/api-docs
```

```text
Swagger 도구
Editor  — YAML 작성 (브라우저)
UI      — 인터랙티브 문서, 브라우저에서 호출 시험
Codegen — 40+ 언어 클라이언트 생성
```

## 요약
- OpenAPI(구 Swagger) 명세는 엔드포인트·연산·파라미터·인증·연락처 등 API 전체를 YAML/JSON으로 기술한다.
- Swagger Editor(작성)·UI(인터랙티브 문서)·Codegen(클라이언트 생성)이 주요 도구이며 API-first 설계를 돕는다.
- 문서는 metadata·paths·parameters로 구성되고, POST는 본문과 201, 경로 파라미터 GET은 200을 정의한다.
- 기존 Node.js API에는 `swagger.yaml`을 `api-docs`에 두고 `yamljs`로 로드해 `swagger-ui-express`의 `serve`·`setup`으로 `/api-docs` 라우트에 붙인다.

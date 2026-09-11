# Define the components of Node.js

## 개요
- Node.js 애플리케이션을 개발·테스트·배포할 때 쓰는 주요 구성 요소 — **Node CLI, NPM, package.json, 서드파티 모듈, 코어 모듈** — 를 정리하는 강의

## 내용

### 주요 구성 요소
| 구성 요소 | 설명 |
|---|---|
| **Node CLI** | 명령과 스크립트 파일을 실행하는 다양한 CLI 옵션. 내장 디버깅, 여러 스크립트 실행 방식, 유용한 런타임 옵션을 노출한다 |
| **NPM(Node Package Manager)** | Node의 패키지 매니저. Node.js 모듈(패키지)을 **설치·갱신·제거·구성**한다 |
| **package.json** | JSON 형식의 평문 파일. **애플리케이션 이름, 모듈 의존성, 모듈 버전** 같은 프로젝트 메타데이터를 기록한다 |
| **서드파티 모듈** | Mongoose, MongoDB 등 애플리케이션 개발에 필요한 외부 모듈 |
| **코어 모듈** | `http`, `url`, `querystring`, `fs` 등 Node에 내장된 모듈 |

- **각 기능은 별도의 모듈 또는 패키지로 구현**된다.

## 예시
```bash
node app.js              # Node CLI로 스크립트 실행
node inspect app.js      # 내장 디버깅 옵션
npm install mongoose     # NPM으로 서드파티 모듈 설치
```

```json
// package.json — 프로젝트 메타데이터
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": { "mongoose": "^7.0.0" }
}
```

```javascript
const http = require('http');          // 코어 모듈
const fs = require('fs');              // 코어 모듈
const mongoose = require('mongoose');  // 서드파티 모듈
```

## 요약
- Node.js는 Node CLI, NPM, package.json, 서드파티 모듈(Mongoose·MongoDB), 코어 모듈(http·url·querystring·fs)로 구성된다.
- NPM이 패키지를 관리하고 package.json이 이름·의존성·버전 메타데이터를 기록한다.
- 기능 하나하나가 별도 모듈·패키지로 구현된다.

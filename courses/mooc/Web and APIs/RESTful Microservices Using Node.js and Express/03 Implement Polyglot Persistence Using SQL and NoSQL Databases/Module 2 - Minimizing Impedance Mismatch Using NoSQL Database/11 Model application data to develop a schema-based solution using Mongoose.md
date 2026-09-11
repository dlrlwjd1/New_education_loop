# Model application data to develop a schema-based solution using Mongoose

## 개요
- 스키마리스 MongoDB의 한계(제약 미적용)를 보완하는 **ODM 도구 Mongoose** 의 개념 — 스키마→모델→문서 관계, 8가지 스키마 타입, 각 타입에 붙일 수 있는 기능, 비동기 지원

## 내용

### 왜 Mongoose인가
- MongoDB는 **스키마리스 NoSQL 데이터베이스**다. 스키마가 없으면 **유연**하지만 **들어오는 데이터에 제약(constraint)을 적용하지 못한다.**
- 데이터 무결성을 보장하는 코드를 처음부터 쓰는 것은 번거롭다.
- **Mongoose는 공식 MongoDB Node.js 드라이버 위에 만들어져** 애플리케이션 데이터를 모델링하는 **간단한 스키마 기반 솔루션**을 제공한다.

### Mongoose의 동작
- Mongoose는 **객체 모델링 도구**로 **ODM(Object Document Mapping)** 이라 정의할 수 있다. **강타입 스키마(strongly typed schema)** 로 객체를 정의하게 해 준다.
- **스키마**는 **MongoDB 컬렉션에 매핑**되고 문서의 구조를 정의한다.
- 스키마 정의를 쓰려면 스키마를 **모델(model)** 로 변환한다.
- 모델의 인스턴스를 **문서(document)** 라 한다.
- Mongoose 문서는 MongoDB에 저장된 문서와 **일대일 매핑**된다.

### 8가지 스키마 타입
**String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array**

### 각 데이터 타입에 지정할 수 있는 것
- **기본값(default value)**
- **사용자 정의 검증 함수(custom validation function)**
- **GET 함수** — 객체로 반환되기 **전에** 데이터를 조작
- **SET 함수** — 데이터베이스에 저장되기 **전에** 데이터를 조작
- **인덱스** — 데이터를 더 빨리 가져오게 함

### 비동기 지원
- Mongoose는 **비동기 환경**에서 동작하도록 설계되었고 **콜백과 프로미스**를 모두 지원한다.

## 예시
```text
Mongoose 계층
Schema  ──(컬렉션에 매핑, 문서 구조 정의)
  │ compile
Model   ──(문서를 만드는 클래스)
  │ new
Document ──(모델 인스턴스, MongoDB 문서와 1:1)
```

```javascript
const mongoose = require('mongoose');

// 스키마 — 8가지 타입 중 사용 + 기능 지정
const projectSchema = new mongoose.Schema({
  premiseType: { type: String, required: true },
  budget:      { type: Number, default: 0, min: 0 },          // 기본값·검증
  createdAt:   { type: Date, default: Date.now },
  ownership:   { type: String, enum: ['private', 'public'] },  // 검증
  tags:        { type: [String], index: true },               // 배열·인덱스
  owner:       { type: mongoose.Schema.Types.ObjectId },
  meta:        { type: mongoose.Schema.Types.Mixed },
  name: {
    type: String,
    set: (v) => v.trim(),            // 저장 전 조작
    get: (v) => v.toUpperCase(),     // 반환 전 조작
  },
});

// 모델
const Project = mongoose.model('Project', projectSchema);

// 문서
const doc = new Project({ premiseType: 'hotel', budget: 250000 });
```

| 스키마 타입 |
|---|
| String · Number · Date · Buffer · Boolean · Mixed · ObjectId · Array |

## 요약
- 스키마리스 MongoDB는 유연하지만 제약을 걸 수 없어, 공식 드라이버 위에 세워진 ODM Mongoose가 스키마 기반 모델링을 제공한다.
- 스키마는 컬렉션에 매핑되어 문서 구조를 정의하고, 모델로 컴파일되며, 모델 인스턴스가 문서다(MongoDB 문서와 1:1).
- 8가지 스키마 타입 각각에 기본값·검증 함수·GET/SET 함수·인덱스를 지정할 수 있다.
- 비동기 환경용으로 설계되어 콜백과 프로미스를 모두 지원한다.

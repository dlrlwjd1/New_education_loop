# Make use of Mongo shell commands to perform CRUD operations

## 개요
- MongoDB에서 CRUD를 수행하는 shell 명령 개관 — 삽입(`insertOne`·`insertMany`), 조회(`find`와 필터·점 표기법·배열·연산자·복합 질의·`pretty`·프로젝션), 갱신(`updateOne`·`updateMany`·`$set`), 삭제(`deleteOne`·`deleteMany`·`remove`)

## 내용

### CRUD
- **C**reate(생성), **R**ead(조회), **U**pdate(갱신), **D**elete(삭제)
- MongoDB에서는 문서를 컬렉션에 삽입하고, 문서를 읽고(질의·연산자·복합 질의), 반환 문서의 필드를 **프로젝션**하고, 문서를 갱신·삭제할 수 있다.

### 삽입
- MongoDB는 문서를 **BSON**(JSON의 이진 형식)으로 저장한다.
- **한 컬렉션에 모양이 다른 문서들을 저장**할 수 있다. 필드를 추가·제거하거나 필드 타입을 바꾸는 데 별도 연산이 필요 없다.
- 문서에 `_id` 필드가 없으면 MongoDB가 **ObjectId 값의 `_id` 필드를 추가**한다.
- **`insertOne`** — 문서 하나 삽입. **`insertMany`** — 여러 문서 삽입.
- **컬렉션은 미리 있을 필요가 없고 첫 삽입에서 생성된다.**

### 조회
- **`db.collection.find()`** 로 컬렉션의 문서를 읽는다. **빈 문서**를 질의 필터로 넘기면 전체 문서를 선택한다.
- **특정 문서**는 JSON 문서를 필터 조건으로 넘겨 가져온다. 이 메서드는 **동등 비교**를 수행하며 **내장 문서를 조건으로 받는다.**
- 내장 JSON 객체의 **한 필드와 정확히 일치**하는 문서를 가져오려면 **점 표기법(`field.nestedField`)** 을 쓴다.
- 문서 안 **배열**을 질의하려면 배열에 동등 조건을 지정한다. **배열 길이**로 질의하려면 **`$size`** 연산자를 쓴다.

### 연산자와 복합 질의
- **`$lt`, `$gt`** 는 미만·초과 비교다.
- 복합 질의의 절들은 **암묵적 논리 AND** 로 연결되어 모든 조건을 만족하는 문서를 고른다.
- **`$or`** 는 각 절을 논리 OR로 잇는 복합 질의를 지정한다. 여러 복합 절로 데이터를 가져오려면 **`$or` 안에 암묵적 AND 질의**를 쓴다.
- 복합 질의는 문서의 **둘 이상 필드**에 조건을 걸 수 있다.
- `find`의 기본 출력은 읽기 어렵다. **`pretty()`** 를 이어 붙이면 읽기 쉬운 형식으로 표시된다.

### 프로젝션
- 기본적으로 `find`는 일치 문서의 **모든 필드**를 반환한다. **프로젝션 문서**를 포함해 반환 필드를 지정·제한하면 MongoDB가 애플리케이션에 보내는 데이터 양을 줄일 수 있다.
- 필드를 **1**로 설정하면 명시적으로 **포함**한다. **`_id`는 기본 포함**되며 **0**으로 두면 억제된다.
- 제외할 필드를 **0**으로 두면 그 필드 외 모두를 반환한다.
- **`_id`를 제외하면 다른 필드에서 포함과 제외를 섞어 쓸 수 없다.**

### 갱신
- **`updateOne`** — 문서 하나 갱신. **`updateMany`** — 여러 문서 갱신.
- 둘 다 **`$set`** 연산자로 새 필드를 추가하거나 기존 필드 값을 수정한다.
- 연산은 **상태를 담은 문서**를 반환한다.

### 삭제
- **`deleteOne`** — 조건에 맞는 **첫 문서** 삭제. **`deleteMany`** — 조건에 맞는 **모든 문서** 삭제.
- **`db.collection.remove`** 도 문서를 제거한다. `remove`는 내부적으로 delete 명령을 쓴다. 기본으로 질의식에 맞는 **모든 문서**를 제거하며, **`justOne`** 옵션(불리언)을 `true`로 주면 하나만 제거한다.

## 예시
```javascript
// 삽입 — 컬렉션은 첫 삽입에서 생성, _id 자동
db.projects.insertOne({ premiseType: "hotel", budget: 250000 })
db.projects.insertMany([{ premiseType: "library" }, { premiseType: "residence" }])

// 조회
db.projects.find({})                                   // 전체
db.projects.find({ premiseType: "hotel" })             // 동등
db.projects.find({ "size.stories": 4 })                // 점 표기법 (내장 필드)
db.projects.find({ rooms: { floor: "first", count: 15 } })   // 배열 요소 동등
db.projects.find({ rooms: { $size: 2 } })              // 배열 길이

// 연산자·복합
db.projects.find({ "size.stories": { $lt: 4 } })
db.projects.find({ premiseType: "residence", "size.stories": { $lt: 4 } })   // 암묵적 AND
db.projects.find({ $or: [ { "size.area": { $gt: 2500 } }, { "size.stories": { $gt: 2 } } ] })
db.projects.find().pretty()

// 프로젝션
db.projects.find({ premiseType: "hotel" }, { premiseType: 1, rooms: 1, budget: 1, _id: 0 })  // 포함
db.projects.find({ premiseType: "hotel" }, { rooms: 0 })                                    // 제외

// 갱신
db.projects.updateOne({ premiseType: "hotel" }, { $set: { parkings: 200 } })
db.projects.updateMany({ ownership: "private" }, { $set: { designTeam: "in-house" } })

// 삭제
db.projects.deleteOne({ "size.stories": { $gt: 2 } })
db.projects.deleteMany({ ownership: "public" })
db.projects.remove({ premiseType: "library" }, { justOne: true })
```

| 연산 | 하나 | 여러 개 |
|---|---|---|
| 삽입 | `insertOne` | `insertMany` |
| 갱신 | `updateOne` + `$set` | `updateMany` + `$set` |
| 삭제 | `deleteOne` / `remove(…, {justOne:true})` | `deleteMany` / `remove` |

## 요약
- MongoDB는 한 컬렉션에 서로 다른 모양의 문서를 저장하고, `_id`를 자동 부여하며, 컬렉션은 첫 삽입에서 생성된다.
- `find`는 빈 필터면 전체, 문서 필터면 동등 비교이고 내장 필드는 점 표기법, 배열 길이는 `$size`로 질의한다.
- 복합 조건은 암묵적 AND이고 `$or`로 OR를 만들며, `$lt`·`$gt` 같은 연산자는 `$` 접두다.
- 프로젝션은 1로 포함·0으로 제외하고 `_id`는 기본 포함이며, `_id` 외 필드는 포함·제외를 섞을 수 없다.
- 갱신은 `$set`으로 필드를 추가·수정하고, 삭제는 `deleteOne`/`deleteMany`/`remove(justOne)`로 한다.

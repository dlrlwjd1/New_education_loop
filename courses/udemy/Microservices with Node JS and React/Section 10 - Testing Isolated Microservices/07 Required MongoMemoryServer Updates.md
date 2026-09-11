# Required MongoMemoryServer Updates

## 개요
- afterAll(async () => { if (mongo) { await mongo.stop(); await mongoose.connection.close(); Lastly, find the beforeEach hook and add a conditional check: beforeEach(async () => { if (mongoose.connection.db) { const collections = await mongoose.connection.db.collections(); for (let collection of collections) { await collection.deleteMany…

## 내용
### 자막·본문 기반 핵심 내용
- afterAll(async () => { if (mongo) { await mongo.stop(); await mongoose.connection.close(); Lastly, find the beforeEach hook and add a conditional check: beforeEach(async () => { if (mongoose.connection.db) { const collections = await mongoose.connection.db.collections(); for (let collection of collections) { await collection.deleteMany…
- Required MongoMemoryServer Updates In the upcoming lecture, we will be setting up our test environment with MongoMemoryServer. If you are using the latest versions of this library a few changes will be required: In auth/src/test/setup.ts, change these lines: mongo = new MongoMemoryServer(); const mongoUri = await mongo.getUri();
- For reference: https://nodkz.github.io/mongodb-memory-server/docs/guides/migration/migrate7/https://nodkz.github.io/mongodb-memory-server/docs/guides/migration/migrate7/
- to this: mongo = await MongoMemoryServer.create(); const mongoUri = mongo.getUri(); Remove the useNewUrlParser and useUnifiedTopology parameters from the connect method. Change this: await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true, to this: await mongoose.connect(mongoUri, {}); Then, find the afterAll…

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `ts`, `await`, `mongoose`, `async`, `https`, `github`, `mongodb`, `setup.ts`

## 예시
`ts`, `await`, `mongoose`, `async`, `https`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Required MongoMemoryServer Updates**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/32901680#overview)

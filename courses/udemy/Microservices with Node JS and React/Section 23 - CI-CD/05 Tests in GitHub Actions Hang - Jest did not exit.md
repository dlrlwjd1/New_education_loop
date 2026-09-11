# Tests in GitHub Actions Hang - Jest did not exit

## 개요
- Tests in GitHub Actions Hang - Jest did not exit If, over the next few lectures, you find that your tests are hanging in the GitHub Actions environment and you also see the following message in the logs: Jest did not exit one second after the test run has completed Then, you'll need to find the src/test/setup.ts file for each service a…

## 내용
### 자막·본문 기반 핵심 내용
- Tests in GitHub Actions Hang - Jest did not exit If, over the next few lectures, you find that your tests are hanging in the GitHub Actions environment and you also see the following message in the logs: Jest did not exit one second after the test run has completed Then, you'll need to find the src/test/setup.ts file for each service a…
- const mongo = await MongoMemoryServer.create(); to this: mongo = await MongoMemoryServer.create();

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `GitHub`, `Jest`, `ts`, `service`, `await`, `setup.ts`

## 예시
`GitHub`, `Jest`, `ts`, `service`, `await`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Tests in GitHub Actions Hang - Jest did not exit**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/39154032#overview)

# Augmenting Type Definitions

## 개요
- 지난 비디오에서 현재 사용자 속성을 요청 개체에 할당하려 했는데 TypeScript는 그게 못마땅했죠 왜냐면 TypeScript엔 Express를 위한 형식 정의 파일이 있는데 요청이 뭔지 정확히 정의하거든요

## 내용
### 자막·본문 기반 핵심 내용
- 지난 비디오에서 현재 사용자 속성을 요청 개체에 할당하려 했는데 TypeScript는 그게 못마땅했죠 왜냐면 TypeScript엔 Express를 위한 형식 정의 파일이 있는데 요청이 뭔지 정확히 정의하거든요
- JWT 확인 라인 맨 끝에서 사용자 페이로드로 쓸게요 마우스오버페이로드를 쓸게요 TypeScript는 이해해요
- 확장할 필요가 없었죠 현존하는 인터페이스 같은 거요 그럴 필요 없었어요 기존 인터페이스를 수정하거나 새 속성을 추가하고 싶다면 동일한 인터페이스에 동일한 이름을 쓰면 돼요 그리고 기존 인터페이스를 보강하고 싶은 어떤 속성이든 추가하면 이 경우엔 TypeScript한테 Express 프로젝트 안에서 요청 인터페이스를 찾으라고 하죠 그 안에서 이미 정의된 것을요 하지만 이미 생성된 인터페이스는 이 추가 속성을 추가하길 원해요
- 마우스오버페이로드를 쓰면 TypeScript에 충분한 정보를 추가해 우리가 유형 사용자 페이로드를 재순환 사용자에 할당하려 한다는 걸 이해하게 되죠

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `TypeScript`, `Express`, `JSON`, `JWT`

## 예시
`TypeScript`, `Express`, `JSON`, `JWT`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Augmenting Type Definitions**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19119930#overview)

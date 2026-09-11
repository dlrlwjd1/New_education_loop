# Changing Node Env During Tests

## 개요
- 참이란 쿠키는 누군가 HTTPS로 우리 서버에 요청을 할 때만 공유된다는 뜻이죠 슈퍼 테스트를 사용할 땐 HTTPS 연결을 만드는 게 아니에요 평범한 HTTP 요청을 만들죠

## 내용
### 자막·본문 기반 핵심 내용
- 참이란 쿠키는 누군가 HTTPS로 우리 서버에 요청을 할 때만 공유된다는 뜻이죠 슈퍼 테스트를 사용할 땐 HTTPS 연결을 만드는 게 아니에요 평범한 HTTP 요청을 만들죠
- 그런 다음 JSON Web 토큰을 생성해 해당 세션 객체에 저장해요 쿠키 세션은 세션 객체를 문자열로 바꾼다는 걸 기억하세요
- JSON Web 토큰을 생성해 해당 응답 안으로 다시 전송했어요 성공적으로 등록한 후에 응답에는 대시 쿠키 헤더가 설정돼 있죠
- Jest가 터미널에서 테스트를 실행할 때마다 이 노드 환경 변수를 문자열 테스트와 동일하게 if == test라고 하면 False를 달라고 하는 거죠

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `JSON`, `Express`, `HTTPS`, `HTTP`, `Session`, `Jest`

## 예시
`JSON`, `Express`, `HTTPS`, `HTTP`, `Session`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Changing Node Env During Tests**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19120528#overview)

# ID Adjustment

## 개요
- MongoDB의 티켓 서비스에 이 정보를 불러올 때 여전히 밑줄 ID가 그건 우리가 이 레코드를 JSON으로 바꿔서 이벤트를 통해 전송할 때만 해당 ID가 일반 ID인 1에서 3으로 전환되죠

## 내용
### 자막·본문 기반 핵심 내용
- MongoDB의 티켓 서비스에 이 정보를 불러올 때 여전히 밑줄 ID가 그건 우리가 이 레코드를 JSON으로 바꿔서 이벤트를 통해 전송할 때만 해당 ID가 일반 ID인 1에서 3으로 전환되죠
- 이 티켓을 반영하기 위해 MongoDB 레코드에서 무슨 일이 일어날지 힌트를 좀 드리죠
- 두말하면 잔소리죠 하지만 기억하세요 MongoDB에 레코드를 삽입할 때마다 그건 임의의 ID를 할당받아요
- 기억하실지 모르겠지만 MongoDB에는 모든 레코드를 밑줄 ID 속성과 함께 저장하죠

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `MongoDB`, `JSON`, `Mongoose`

## 예시
`MongoDB`, `JSON`, `Mongoose`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **ID Adjustment**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19565096#overview)

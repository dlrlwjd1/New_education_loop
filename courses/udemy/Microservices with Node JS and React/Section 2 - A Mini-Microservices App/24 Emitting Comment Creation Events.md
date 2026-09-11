# Emitting Comment Creation Events

## 개요
- post service와 공통 서비스는 전혀 신경 쓰지 않아요 우리가 생성한, 생성한, 생성한 다음 게시물 중 발생하는 이벤트는 신경 안 하지만 쿼리 서비스를 만드는 순간 응용 프로그램에서 나오는 이벤트와 관련이 있는 것들을 보게 되는 것이죠

## 내용
### 자막·본문 기반 핵심 내용
- post service와 공통 서비스는 전혀 신경 쓰지 않아요 우리가 생성한, 생성한, 생성한 다음 게시물 중 발생하는 이벤트는 신경 안 하지만 쿼리 서비스를 만드는 순간 응용 프로그램에서 나오는 이벤트와 관련이 있는 것들을 보게 되는 것이죠
- 말하자면 코멘트를 저장하는 거죠 액시오스. post를 추가할 거예요 local host Colon 4005에요.
- 기술적으로 그건 매개 변수 문자열이나 루트 문자열이기 때문에 REC 매개 변수 .id를 써서 접근할 수 있어요 postID를 REC. params id라고 치죠
- 일종의 혜성이 탄생하는 거죠 이 경우엔 데이터가 실제 코멘트죠 다시 한 번 이걸 이벤트 버스로 보내죠

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `service`

## 예시
`service`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Emitting Comment Creation Events**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19099076#overview)

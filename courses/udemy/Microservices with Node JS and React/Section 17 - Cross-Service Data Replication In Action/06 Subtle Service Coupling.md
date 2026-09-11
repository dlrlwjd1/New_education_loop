# Subtle Service Coupling

## 개요
- 유효성 검사에서 잠재적으로 할 수 있는 단계가 하나 더 있는데요 사용자가 티켓 ID 속성을 넘기면 시스템 내의 또 다른 티켓을 참조하는 티켓 ID가 MongoDB에 저장되어 있기 때문에 티켓 ID 속성이 MongoDB의 구조를 가지고 있다는 것을 알 수 있죠

## 내용
### 자막·본문 기반 핵심 내용
- 유효성 검사에서 잠재적으로 할 수 있는 단계가 하나 더 있는데요 사용자가 티켓 ID 속성을 넘기면 시스템 내의 또 다른 티켓을 참조하는 티켓 ID가 MongoDB에 저장되어 있기 때문에 티켓 ID 속성이 MongoDB의 구조를 가지고 있다는 것을 알 수 있죠
- 저한테는 그게 SG티켓이에요 콜먼, 당신은 다른 조직의 이름을 갖고 있어요 Express Validator에서 바디 기능도 얻고요
- 이 두 서비스 사이에 일종의 결합이 있어요 특정 시점에 MongoDB ID를 제공하고 있다고 말하는 경우 미래에 티켓 서비스가 사용하는 데이터베이스를 다른 종류의 데이터베이스로 바꾸기로 할 수도 있어요
- 그걸 잘 하면 더는 MongoDB를 사용하지 않을 수도 있어요 ID의 구조가 완전히 다를 수도 있어요

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `Express`, `MongoDB`

## 예시
`Express`, `MongoDB`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Subtle Service Coupling**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19493742#overview)

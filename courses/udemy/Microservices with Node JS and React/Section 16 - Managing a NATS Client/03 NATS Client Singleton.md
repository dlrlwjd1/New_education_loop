# NATS Client Singleton

## 개요
- 게시자 파일 내부를 보시면 NATS와 연결할 때 내부 연결이나 내부 개체는 없습니다 이 NATS 라이브러리 안에서 이 연결을 추적하는 거죠

## 내용
### 자막·본문 기반 핵심 내용
- 게시자 파일 내부를 보시면 NATS와 연결할 때 내부 연결이나 내부 개체는 없습니다 이 NATS 라이브러리 안에서 이 연결을 추적하는 거죠
- 우리는 MongoDB 인스턴스에 성공적으로 Mongoose를 통해 연결해야 합니다 익스프레스 응용 프로그램을 시작하거나 기술적으로 트래픽을 청취하기 전에요
- 프로젝트 안에서 다른 파일을 열어서 mongoose를 불러오라고 할 수 있어요 이건 Mongoose 복사본이에요 이미 서버에 연결돼 있죠
- Mongoose를 자유롭게 사용할 수도 있고 MongoDB에 접근하거나 쿼리 같은 것을 만들기 위해 생성된 다양한 모델을 이용할 수도 있어요.

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `MongoDB`, `Mongoose`, `NATS`

## 예시
`MongoDB`, `Mongoose`, `NATS`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **NATS Client Singleton**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19485316#overview)

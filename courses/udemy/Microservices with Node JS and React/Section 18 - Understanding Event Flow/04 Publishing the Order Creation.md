# Publishing the Order Creation

## 개요
- 그 이유는 이 안에 어떤 개체를 넣든 결국엔 JSON으로 변하기 날짜 객체가 JSON이나 문자열로 변할 때 JSON 코드는 이렇게 말하는 거죠 데이터 객체야 널 문자열로 바꿔 그럼 날짜 객체는 문자열로 바뀌어야 한다고 추정해요

## 내용
### 자막·본문 기반 핵심 내용
- 그 이유는 이 안에 어떤 개체를 넣든 결국엔 JSON으로 변하기 날짜 객체가 JSON이나 문자열로 변할 때 JSON 코드는 이렇게 말하는 거죠 데이터 객체야 널 문자열로 바꿔 그럼 날짜 객체는 문자열로 바뀌어야 한다고 추정해요
- 여기 이 Nets 상류층은 아주 하단에 Nets 래퍼라는 단일 싱글을 생성해요 이 Nets 래퍼 클래스는 활성화된 Nets 클라이언트에 엑세스 권한을 주죠
- Nets 클라이언트를 관리하기 위해 기억하실지도 모르겠네요 Nets 래퍼 파일은 루트 CRC 디렉터리 안에 있죠
- 날짜 객체는 사실 데이터베이스에 저장되는 것이 아닙니다. 하지만 Mongoose는 자동으로 날짜 객체를 문자열로 변환합니다.

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `Mongoose`, `MongoDB`, `JSON`

## 예시
`Mongoose`, `MongoDB`, `JSON`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Publishing the Order Creation**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19565052#overview)

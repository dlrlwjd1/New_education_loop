# Fixing the "Any" Type

## 개요
- 현재 좌표는 아무 유형이고 딱 그 경우예요 JSON PARSE가 값을 아무 유형이든 반환하거든요 TypeScript는 JSON PARSE가 뭘 반환할지 예측할 수 없거든요

## 내용
### 자막·본문 기반 핵심 내용
- 현재 좌표는 아무 유형이고 딱 그 경우예요 JSON PARSE가 값을 아무 유형이든 반환하거든요 TypeScript는 JSON PARSE가 뭘 반환할지 예측할 수 없거든요
- 오류 메시지가 아주 빨리 나타납니다 해당 개체의 속성이 아니라고 말해주죠 이건 형식 annotation을 추가하는 세 가지 경우 중 하나예요 함수를 호출할 때마다 type any를 반환하죠
- 그리고 Y 속성은 숫자이기도 하죠 TypeScript에 충분한 정보를 줬으니 지금쯤 어떤 유형의 값 좌표인지 알 수 있을 거예요
- JSON PARSE는 JavaScript 함수 중 하나로 어떤 타입도 반환할 수 있어요

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `JSON`, `TypeScript`, `JavaScript`

## 예시
`JSON`, `TypeScript`, `JavaScript`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Fixing the "Any" Type**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19226044#overview)

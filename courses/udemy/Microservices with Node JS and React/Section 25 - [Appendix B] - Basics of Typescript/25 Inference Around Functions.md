# Inference Around Functions

## 개요
- 광고 함수를 조금 분석해서 type annotation이 함수와 어떻게 작용하는지 다시 한 번, 인수 목록을 추가할 때마다 모든 인수에 주석을 달게 인수 목록 다음에 annotation을 추가합니다 함수가 어떤 것을 반환할지에 여기 return annotation을 추가하면 TypeScript가 여러분의 함수 본체를 즉시 분석할 거예요

## 내용
### 자막·본문 기반 핵심 내용
- 광고 함수를 조금 분석해서 type annotation이 함수와 어떻게 작용하는지 다시 한 번, 인수 목록을 추가할 때마다 모든 인수에 주석을 달게 인수 목록 다음에 annotation을 추가합니다 함수가 어떤 것을 반환할지에 여기 return annotation을 추가하면 TypeScript가 여러분의 함수 본체를 즉시 분석할 거예요
- 이게 형식 추론이에요 return annotation 형식은 추가하지 않았지만 TypeScript가 우리 함수의 본문을 읽어서 우리가 숫자를 반환할 걸 알아요
- 말 그대로 이 안의 코드를 읽어 여러분이 실제로 값을 반환하고 있는지 판단하는 이 경우 TypeScript는 A와 B가 숫자인 걸 알죠
- 우리가 둘을 합치는 걸 보죠 두 숫자를 더하면 숫자가 나온다는 걸 알아요 그런 다음 우리가 그 값을 반환하는 TypeScript는 이 코드 줄을 읽고 우리가 하려고 했던 걸 정확히 실행했다는 걸 알 수 있죠

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `TypeScript`

## 예시
`TypeScript`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Inference Around Functions**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19226060#overview)

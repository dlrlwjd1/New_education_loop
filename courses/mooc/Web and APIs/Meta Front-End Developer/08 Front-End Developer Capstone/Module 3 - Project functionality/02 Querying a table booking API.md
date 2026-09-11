# Querying a table booking API

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/meta-front-end-developer-capstone/lecture/DutZM/querying-a-table-booking-api)

## 개요
- 예를 들어, 동기식 및 단일 스레드인 JavaScript가 비동기 작업을 처리하는 방법의 일반적인 원칙을 이해해야 합니다.

## 내용
- 예를 들어, 동기식 및 단일 스레드인 JavaScript가 비동기 작업을 처리하는 방법의 일반적인 원칙을 이해해야 합니다.
- 다른 내장 브라우저 기능을 사용하여 작업을 위임한 다음 해당 작업의 결과를 수락합니다.
- 그러나 이 수업의 작업을 성공적으로 완료하려면 React에서 이 기능을 구현하기 전에 일반 JavaScript에서 타사 데이터에 대한 요청을 처리하는 방법을 알아야 합니다.
- JavaScript에서 타사 JSON 데이터를 요청하는 방법은 여러 가지가 있지만 가장 인기있는 방법 중 하나는 내장 JavaScript Facade 함수인 Fetch 메서드를 사용하는 것입니다.
- 약속이 이행되면 JavaScript 엔진은 원래 Fetch 호출에 연결되어 있는 함수 호출로 주어진 모든 메서드를 자유롭게 실행할 수 있습니다.
- Fetch 메서드를 호출하면 React 외부의 무언가를 의미하는 부작용이 있으므로 이 데이터를 가져오려면 UseEffect 후크를 사용해야 합니다.
- React가 타사 JSON 데이터를 가져올 때 UseEffect 후크를 사용해야 하는 이유는 무엇입니까?

## 예시
- 예를 들어, 동기식 및 단일 스레드인 JavaScript가 비동기 작업을 처리하는 방법의 일반적인 원칙을 이해해야 합니다.

## 요약
- Fetch 메서드를 호출하면 React 외부의 무언가를 의미하는 부작용이 있으므로 이 데이터를 가져오려면 UseEffect 후크를 사용해야 합니다. React가 타사 JSON 데이터를 가져올 때 UseEffect 후크를 사용해야 하는 이유는 무엇입니까?

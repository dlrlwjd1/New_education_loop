# Manipulating children dynamically in JSX

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/advanced-react/lecture/i3RPl/manipulating-children-dynamically-in-jsx)

## 개요
- React child는 모든 컴포넌트가 함축적으로 가지고 있는 특수 소품 중 하나로, 리액트 컴포지션 모델과 함께 컴포넌트 디자인의 새로운 패러다임을 가능하게 합니다.

## 내용
- React child는 모든 컴포넌트가 함축적으로 가지고 있는 특수 소품 중 하나로, 리액트 컴포지션 모델과 함께 컴포넌트 디자인의 새로운 패러다임을 가능하게 합니다.
- 주방에서 일하는 셰프에게 정말 유용한 것은 각 고객 주문을 요리 이름, 각 요리의 양, 총 가격 , 제출 시간 및 고객의 성명과 함께 별도의 행에 표시하는 것입니다.
- 컴포넌트 설계 기술을 향상시켜 줄 새로운 반응 API 세트를 사용하면 스마트하고 효율적인 솔루션으로 Little Lemon의 이 문제를 해결할 수 있을 것입니다.
- 이 API는 부모가 하위 속성 수정, 하위 속성에 추가, 하위 구성 요소의 기능 확장 등의 작업을 수행할 수 있도록 하는 데 유용합니다.
- 자식 조작에 유용한 또 다른 중요한 최상위 API는 react.children으로, props.children 데이터 구조를 처리하기 위한 유틸리티를 제공합니다.
- React.Children.map은 배열의 맵 함수와 매우 유사하며 , 하위 소품에 포함된 모든 자식에서 함수를 호출하여 변환을 수행하고 새 요소를 반환합니다.
- 이제 React.CloneElement와 React.Children.map을 모두 구현으로 사용하여 분리 문제를 해결해 보겠습니다.

## 예시
- 예를 들어 Little Lemon 레스토랑을 보면 고객으로부터 들어오는 실시간 주문의 요약을 시각화할 수 있습니다.

## 요약
- React.Children.map은 배열의 맵 함수와 매우 유사하며 , 하위 소품에 포함된 모든 자식에서 함수를 호출하여 변환을 수행하고 새 요소를 반환합니다. 이제 React.CloneElement와 React.Children.map을 모두 구현으로 사용하여 분리 문제를 해결해 보겠습니다.

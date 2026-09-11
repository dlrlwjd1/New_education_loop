# Render large lists by sections using SectionList

## 개요
- SectionList는 큰 리스트를 섹션(section) 단위로 나누어 렌더링하는 React Native 내장 컴포넌트다.
- FlatList처럼 지연 렌더링(lazy rendering)과 ScrollView props 상속을 지원하면서, 추가로 섹션 헤더(section header)와 섹션 구분선(section separator)을 지원한다.
- 필수 props는 `sections`와 `renderItem`이다.

## 내용

### 왜 SectionList가 필요한가
- FlatList로 만든 Little Lemon 메뉴는 빠르게 로드되지만, 전체 메뉴가 끊김 없는 하나의 긴 리스트라 사용자가 특정 항목을 찾기 어렵다.
- 리스트를 섹션으로 나누고 각 섹션에 내용을 설명하는 고유 헤더(예: 애피타이저(appetizers), 샐러드(salads))를 붙이면 정리된 형태가 된다.

### FlatList와의 공통점
- SectionList도 지연 렌더링을 사용한다. 화면에 나타나야 할 시점에만 아이템을 렌더링하고, 더 이상 사용되지 않는 아이템은 제거해 렌더링 속도를 높인다.
- SectionList도 ScrollView 컴포넌트의 props를 상속하므로 ScrollView의 기능을 함께 사용할 수 있다.

### FlatList와의 차이점
- SectionList는 섹션 헤더와 섹션 구분선을 지원한다.
- 메뉴를 작은 덩어리(chunk)로 나누고 적절한 헤더를 추가할 수 있어, 성능뿐 아니라 더 보기 좋고 읽기 쉬운 형식으로 메뉴를 표시할 수 있다.

### 문법과 props
- 필수 props 두 가지:
  - `sections`: 사용 가능한 섹션들의 배열로, 렌더링할 실제 데이터를 담는다. FlatList의 `data` prop에 해당한다.
  - `renderItem`: 각 섹션의 모든 아이템에 대한 기본 렌더러(default renderer) 역할을 하는 메서드다.
- `renderItem`은 네 가지 요소를 포함한다:
  - `item`: 섹션의 data 키에 지정된 객체
  - `index`: 섹션 내 아이템의 위치
  - `section`: `sections` prop에 지정된 섹션 객체
  - `separators`: 강조(highlighting)/강조 해제(unhighlighting) 및 props 업데이트에 사용할 수 있는 객체
- 그 외 헤더, 푸터, 구분선, 섹션 헤더, 섹션 구분선 등을 정의하는 여러 선택적 props를 전달할 수 있다.

## 예시

```jsx
<SectionList
  sections={sections}
  renderItem={({ item, index, section, separators }) => (
    // 각 섹션의 아이템 렌더링
  )}
/>
```

## 요약
- SectionList는 FlatList와 같이 지연 렌더링을 사용하고 ScrollView props를 상속하는 성능 좋은 리스트 컴포넌트다.
- FlatList와 달리 섹션 헤더와 섹션 구분선을 지원해 리스트를 카테고리별로 나눌 수 있다.
- 필수 props는 `sections`(섹션 데이터 배열)와 `renderItem`(아이템 렌더러)이다.

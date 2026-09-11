# Rendering large lists using FlatList component

## 개요
- ScrollView는 모든 자식 컴포넌트(child component)를 한 번에 렌더링하므로 큰 리스트에서 렌더링이 느려진다.
- FlatList는 지연 렌더링(lazy rendering)을 사용해 큰 리스트도 렌더링 시간에 영향 없이 효율적으로 표시한다.
- FlatList는 ScrollView의 기능(props)을 모두 상속하면서 자체 기능을 추가로 제공한다.

## 내용

### ScrollView의 한계
- ScrollView 컴포넌트는 화면에 보이는지 여부와 관계없이 리스트의 모든 아이템을 동시에 렌더링한다.
- Little Lemon 앱 예시: 메뉴 텍스트 리스트에 각 항목의 이미지를 추가해 100개의 이미지를 표시해야 한다면, ScrollView에서는 사용자가 모든 이미지가 로드될 때까지 기다려야 하므로 시간이 오래 걸린다.

### FlatList와 지연 렌더링(lazy rendering)
- FlatList는 React Native에 내장(built-in)된 컴포넌트로, 큰 리스트를 효율적으로 렌더링한다.
- 지연 렌더링이란 리스트 전체를 한 번에 렌더링하지 않고, 아이템이 화면에 나타나야 할 시점에만 렌더링하는 방식이다.
- 사용자가 스크롤해서 아이템이 화면에서 벗어나면 해당 아이템은 제거(remove)되고, 다음에 나타날 아이템 세트가 렌더링된다.
- 그 결과 더 빠른 렌더링과 우수한 성능(superior performance)을 얻는다.

### FlatList의 문법과 props
- FlatList는 ScrollView 컴포넌트의 모든 props를 상속한다.
- 필수 props 두 가지: `data`, `renderItem`
- `renderItem`의 문법에는 세 가지 요소가 있다:
  - `item`: FlatList에 전달된 data 배열의 단일 아이템을 나타내는 객체
  - `index`: 해당 아이템에 대응하는 고유 인덱스
  - `separators`(선택): 아이템을 강조(highlight)하거나 강조 해제(un-highlight)할 때 사용
- 그 외에도 헤더(header), 푸터(footer), 구분선(separator) 등을 정의하는 여러 선택적 props를 전달할 수 있다.

## 예시

```jsx
<FlatList
  data={data}
  renderItem={({ item, index, separators }) => (
    // 단일 아이템 렌더링
  )}
/>
```

## 요약
- ScrollView는 모든 아이템을 한 번에 렌더링해 큰 리스트에서 성능 문제가 발생한다.
- FlatList는 지연 렌더링(lazy rendering)으로 화면에 나타날 아이템만 렌더링하고, 스크롤로 벗어난 아이템은 제거한다.
- FlatList는 ScrollView의 모든 props를 상속하며, 필수 props는 `data`와 `renderItem`이다.

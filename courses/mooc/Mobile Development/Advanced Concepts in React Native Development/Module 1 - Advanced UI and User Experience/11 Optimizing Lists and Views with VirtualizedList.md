# Optimizing Lists and Views with VirtualizedList

## 개요

- VirtualizedList가 보이는 항목과 주변 버퍼만 유지해 대규모 목록의 메모리 사용을 줄이는 방식을 설명한다.
- `getItem`, `getItemCount`, `initialNumToRender`를 사용하는 기본 구성을 시연한다.

## 내용

### 가상화

스크롤 창 밖의 항목을 모두 화면 요소로 유지하지 않고 필요한 범위만 렌더링한다. 사용자가 스크롤하면 렌더링 창을 이동해 새 항목을 추가하고 멀어진 항목을 제거한다.

### 필수 함수

VirtualizedList는 일반 배열 외의 데이터 구조도 지원하므로 `getItem(data, index)`와 `getItemCount(data)`를 직접 제공한다. `keyExtractor`는 각 항목의 안정적인 key를 만든다.

> 강의에서는 FlatList가 모든 항목을 한 번에 렌더링한다고 설명하지만, FlatList도 VirtualizedList를 기반으로 한다. VirtualizedList를 직접 쓰는 이점은 사용자 정의 데이터 소스를 더 세밀하게 제어하는 데 있다.

## 예시

```tsx
<VirtualizedList
  data={data}
  initialNumToRender={10}
  getItem={(items, index) => items[index]}
  getItemCount={(items) => items.length}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <Text>{item.label}</Text>}
/>
```

## 요약

- 가상화는 큰 목록의 렌더링 작업과 메모리 사용을 줄인다.
- VirtualizedList에는 항목 조회와 개수 계산 함수를 제공해야 한다.
- 배열 데이터라면 보통 FlatList가 더 간단한 선택이다.

# Implementing Grid Layouts with FlatList

## 개요

- FlatList의 `numColumns`를 이용해 반응형 그리드를 구성한다.
- 고유 key와 초기 렌더링 수, 창 크기 등 목록 성능 관련 설정을 소개한다.

## 내용

### 그리드 구성

`numColumns`는 별도의 행 배열을 만들지 않고 항목을 여러 열에 배치한다. 강의 예제는 세 열과 30개 항목을 사용하며, 화면 너비를 기준으로 셀 크기를 계산한다.

### 성능과 접근성

`keyExtractor`로 항목의 고유성을 보장하고 `initialNumToRender`, `windowSize`를 데이터와 화면에 맞게 조정한다. 각 셀에는 접근성 역할과 읽을 수 있는 레이블을 제공하는 것이 좋다.

## 예시

```tsx
<FlatList
  data={items}
  numColumns={3}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <View style={styles.cell}>
      <Text>{item.label}</Text>
    </View>
  )}
/>
```

## 요약

- `numColumns`로 FlatList를 그리드로 바꿀 수 있다.
- `keyExtractor`와 렌더링 창 설정은 성능에 직접 영향을 준다.
- 화면 너비에 따라 셀을 계산하면 반응형 레이아웃이 된다.

# Using ScrollView for Long Content

## 개요

- `ScrollView`로 화면보다 긴 정적 콘텐츠를 세로 또는 가로로 스크롤하는 방법을 설명한다.
- 큰 데이터 목록에는 모든 자식을 한 번에 렌더링하는 ScrollView보다 FlatList가 적합하다.

## 내용

### 기본 동작

ScrollView는 자식 전체를 스크롤 가능한 컨테이너로 감싼다. 기본 방향은 세로이며 `horizontal`을 지정하면 가로로 바뀐다. 스크롤 표시기는 `showsVerticalScrollIndicator`와 `showsHorizontalScrollIndicator`로 제어한다.

### 선택 기준

고정된 문단이나 적은 수의 카드에는 ScrollView가 간단하다. API에서 받은 대규모 목록처럼 항목 수가 많다면 보이는 항목을 중심으로 가상화하는 FlatList를 선택한다.

## 예시

```tsx
<ScrollView showsVerticalScrollIndicator>
  {Array.from({ length: 50 }, (_, index) => (
    <View key={index}>
      <Text>Item {index + 1}</Text>
    </View>
  ))}
</ScrollView>
```

## 요약

- ScrollView의 기본 방향은 세로이며 `horizontal`로 변경한다.
- 정적·소규모 콘텐츠에는 ScrollView, 큰 목록에는 FlatList가 알맞다.
- 반복 렌더링 항목에는 안정적인 `key`가 필요하다.

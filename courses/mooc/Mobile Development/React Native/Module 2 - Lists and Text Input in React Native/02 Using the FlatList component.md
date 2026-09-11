# Using the FlatList component

## 개요
- FlatList 컴포넌트로 긴 메뉴 리스트를 성능 좋게(performant) 렌더링하는 실습 데모다.
- 필수 props인 `data`와 `renderItem`을 사용해 배열 데이터를 FlatList에 전달한다.
- 각 아이템을 표시하는 별도의 Item 컴포넌트를 만들어 코드 가독성을 높인다.

## 내용

### 데이터 준비
- Little Lemon 레스토랑의 메뉴 아이템 컴포넌트 파일에 `menuItemsToDisplay`라는 배열이 있다.
- 배열의 각 아이템은 이름(name)과 고유 ID(unique ID)를 가진다.

### FlatList 사용 단계
1. React Native에서 FlatList 컴포넌트를 import한다.
2. 메뉴 아이템 컴포넌트의 return 문에서 FlatList를 렌더링한다.
3. 필수 prop `data`에 아이템 리스트 배열(`menuItemsToDisplay`)을 전달한다.
4. 필수 prop `renderItem`에는 FlatList가 배열의 각 아이템을 순회하며 호출할 함수를 전달한다.
5. return 문 이전에 `renderItem` 콜백 함수를 만들고, 각 메뉴 아이템의 `name`을 prop으로 넘겨 Item 컴포넌트를 렌더링한다.

### Item 컴포넌트 만들기
- 메뉴 아이템 컴포넌트 바깥에 Item 컴포넌트를 만들고 `name` prop을 받아 부모 컴포넌트(parent component)로부터 데이터를 얻는다.
- 미리 정의한 `innerContainer` 스타일을 적용한다.
- View 태그 안에 Text 요소를 넣어 각 아이템 이름을 표시한다.
- 작은 Item 컴포넌트로 분리하면 코드가 더 읽기 쉬워진다.

### 실행 결과
- iOS 에뮬레이터(emulator)에서 "View Menu" 텍스트 헤더와 메뉴 아이템 리스트가 보이고, 스크롤하면 더 많은 아이템이 나타난다.
- ScrollView로 만든 것이 아니므로 아이템은 화면에 나타날 때만 렌더링되고 스크롤로 벗어나면 제거된다. 큰 리스트 처리에 훨씬 성능이 좋다.

## 예시

```jsx
import { View, Text, FlatList } from 'react-native';

const menuItemsToDisplay = [
  { name: 'Hummus', id: '1A' },
  // ... 메뉴 아이템들 (name과 고유 id 포함)
];

const Item = ({ name }) => (
  <View style={styles.innerContainer}>
    <Text>{name}</Text>
  </View>
);

const MenuItems = () => {
  const renderItem = ({ item }) => <Item name={item.name} />;

  return (
    <FlatList data={menuItemsToDisplay} renderItem={renderItem} />
  );
};
```

## 요약
- FlatList의 필수 props는 `data`(아이템 배열)와 `renderItem`(각 아이템을 렌더링하는 함수)이다.
- `renderItem` 콜백에서 각 아이템의 `name`을 prop으로 넘겨 별도의 Item 컴포넌트를 렌더링한다.
- FlatList는 화면에 나타나는 아이템만 렌더링하고 벗어나면 제거하므로 큰 리스트에서 성능이 우수하다.

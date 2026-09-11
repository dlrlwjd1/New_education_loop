# Using the SectionList component

## 개요
- SectionList로 카테고리별로 그룹화된 메뉴 리스트를 섹션 헤더와 함께 렌더링하는 실습 데모다.
- 필수 props `sections`, `renderItem`과 함께 `renderSectionHeader`로 섹션 헤더를 렌더링한다.
- SectionList는 iOS와 Android에서 각각 네이티브(natively)로 렌더링되어 플랫폼별로 동작이 조금 다르다.

## 내용

### 데이터 구조
- `menuItemsToDisplay` 배열의 아이템은 이전과 같지만, 이번에는 카테고리로 그룹화되어 있다.
- 카테고리: 애피타이저(appetizers), 메인 요리(main dishes), 사이드(sides), 디저트(desserts)
- 각 카테고리마다 섹션 헤더를 표시하려는 상황이므로 SectionList를 쓰기에 적합하다.

### SectionList 구성 단계
1. React Native에서 SectionList 컴포넌트를 import한다.
2. 이전 예제의 Separator, Footer, Item, MenuItems 컴포넌트를 재사용하며, SectionList는 MenuItems 컴포넌트 안에 배치한다.
3. 필수 prop `sections`에 전체 데이터를 담은 배열(`menuItemsToDisplay`)을 전달한다. FlatList의 `data`에 해당한다.
4. 필수 prop `renderItem`에 renderItem 함수를 전달한다. 이 함수는 각 아이템을 순회하며 기존에 만든 Item 컴포넌트를 호출하고, Item의 `name` prop에 해당 아이템을 넘긴다. Item 컴포넌트 안의 View가 각 아이템의 이름을 표시한다.

### 섹션 헤더 렌더링
- SectionList에 `renderSectionHeader` prop을 추가하고 같은 이름의 함수를 전달한다.
- 이 함수는 `section`을 받아 배열의 타이틀(appetizers, main dishes 등)을 추출하고, return에서 타이틀을 표시하는 Text로 렌더링한다.
- 텍스트에는 menuStyles에 저장된 기존 `sectionHeader` 스타일을 적용한다. 이 스타일은 배경색(background color), 글자 크기(font size), 텍스트 정렬(text alignment) 등을 설정한다.

### 플랫폼별 차이 (iOS vs Android)
- iOS 에뮬레이터: 스크롤할 때 각 섹션 헤더가 상단에 고정(stick)되어 있다가 다음 섹션에 도달하면 교체된다.
- Android 에뮬레이터: 헤더 크기(sizing)가 다르고, 스크롤해서 지나가면 섹션 헤더가 사라지며 iOS와 같은 고정(sticking) 동작이 없다.
- 이는 SectionList가 iOS와 Android 각각에서 네이티브로 렌더링되어 플랫폼별 네이티브 경험을 만들기 때문이다.

### 마무리 디테일
- FlatList 때처럼 `ItemSeparatorComponent` prop에 Separator를 전달해 아이템 사이 구분선을 추가한다.
- `ListFooterComponent` prop에 Footer를 전달해 하단에 저작권(copyright) 정보를 표시하는 푸터를 추가한다.

## 예시

```jsx
import { View, Text, SectionList } from 'react-native';

const menuItemsToDisplay = [
  { title: 'Appetizers', data: ['Hummus', 'Falafel', 'Eggplant Salad' /* ... */] },
  { title: 'Main Dishes', data: [/* ... */] },
  { title: 'Sides', data: [/* ... */] },
  { title: 'Desserts', data: [/* ... */] },
];

const MenuItems = () => {
  const renderItem = ({ item }) => <Item name={item} />;

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={menuStyles.sectionHeader}>{title}</Text>
  );

  return (
    <SectionList
      sections={menuItemsToDisplay}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      ItemSeparatorComponent={Separator}
      ListFooterComponent={Footer}
    />
  );
};
```

## 요약
- SectionList의 필수 props는 `sections`(그룹화된 데이터 배열)와 `renderItem`이다.
- `renderSectionHeader`로 배열의 타이틀을 추출해 섹션 헤더 텍스트로 렌더링한다.
- SectionList는 플랫폼별로 네이티브 렌더링되므로 iOS에서는 헤더가 고정되고 Android에서는 고정되지 않는 등 경험이 조금씩 다르다.
- `ItemSeparatorComponent`와 `ListFooterComponent`는 FlatList와 동일하게 사용할 수 있다.

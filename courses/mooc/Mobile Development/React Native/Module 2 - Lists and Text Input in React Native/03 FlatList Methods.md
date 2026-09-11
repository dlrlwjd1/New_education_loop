# FlatList Methods

## 개요
- FlatList의 유용한 props를 사용해 리스트를 확장하는 데모다.
- `keyExtractor`로 각 아이템의 고유 ID를 키(key)로 추출한다.
- `ItemSeparatorComponent`, `ListHeaderComponent`, `ListFooterComponent`로 구분선, 헤더, 푸터를 렌더링한다.

## 내용

### keyExtractor
- `menuItemsToDisplay` 배열은 객체(object)의 배열이고, 각 아이템은 이름(name)과 중복 없는 고유 ID(1A, 2B, 3C 등)를 가진다.
- `keyExtractor`는 지정된 인덱스(index)의 아이템에서 고유 키를 추출하는 prop이다.
- 키는 캐싱(caching)에 사용되고, React의 key처럼 아이템 재정렬(re-ordering) 추적에 사용된다.
- React의 리스트에서 key를 쓰듯 React Native의 리스트에서도 key를 사용한다.
- `keyExtractor={item => item.id}` 형태로 전달하며, UI 자체는 바뀌지 않는다.

### Separator (구분선)
- 별도의 Separator 컴포넌트를 만들어 View를 렌더링하고, 아래쪽 테두리 두께(borderBottomWidth) 1과 테두리 색(border color)이 정의된 기존 스타일(`menuStyles.separator`)을 적용한다.
- FlatList의 `ItemSeparatorComponent` prop에 이 Separator 컴포넌트를 전달하면 각 메뉴 아이템 사이에 구분선이 렌더링된다.
- 구분선은 선(line)에 한정되지 않으며 필요하면 이미지도 사용할 수 있다.

### Header (헤더)
- 기존에 render 안에 있던 헤더를 별도의 Header 컴포넌트로 분리하고 "View Menu" 텍스트를 렌더링한다.
- FlatList의 `ListHeaderComponent` prop에 Header 컴포넌트를 전달한다.
- 헤더가 FlatList의 일부가 되므로 리스트를 스크롤하면 "View Menu" 헤더는 화면 밖으로 사라진다. 반면 FlatList에 속하지 않은 페이지 헤더는 그대로 고정된다.

### Footer (푸터)
- 헤더와 유사하게 Footer 컴포넌트를 만들고 스타일을 적용한 뒤 "All rights reserved by Little Lemon 2022" 텍스트를 렌더링한다.
- FlatList의 `ListFooterComponent` prop에 Footer 컴포넌트를 전달하면 리스트 맨 아래에 푸터가 렌더링된다.

## 예시

```jsx
const Separator = () => <View style={menuStyles.separator} />;

const Header = () => <Text style={menuStyles.headerText}>View Menu</Text>;

const Footer = () => (
  <Text style={menuStyles.footerText}>All rights reserved by Little Lemon 2022</Text>
);

<FlatList
  data={menuItemsToDisplay}
  renderItem={renderItem}
  keyExtractor={item => item.id}
  ItemSeparatorComponent={Separator}
  ListHeaderComponent={Header}
  ListFooterComponent={Footer}
/>
```

## 요약
- `keyExtractor`는 각 아이템의 고유 키를 추출하며 캐싱과 아이템 추적에 쓰인다.
- `ItemSeparatorComponent`로 아이템 사이 구분선(또는 이미지)을 렌더링한다.
- `ListHeaderComponent`로 헤더를, `ListFooterComponent`로 푸터를 FlatList의 일부로 렌더링한다.
- FlatList에 속한 헤더는 스크롤 시 함께 움직이고, 리스트 밖 페이지 헤더는 고정된다.

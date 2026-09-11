# Practical Styling

## 개요
- Little Lemon 앱의 인라인 스타일을 `StyleSheet` API로 추출해 코드를 정리하는 데모 강의
- `StyleSheet.create`로 만든 객체(menuStyles)에 container, innerContainer, headerText, itemText 등 설명적인(descriptive) 이름의 스타일을 모은다
- MenuItems, LittleLemonHeader, App 컴포넌트를 모두 같은 방식으로 정리한다

## 내용
### 왜 정리하는가
지금까지 작성한 컴포넌트 코드는 스타일 때문에 어수선해서 실제로 무슨 일이 일어나는지 파악하기 어렵다. React Native의 StyleSheet API는 CSS 스타일시트와 비슷하며, 스타일링을 컴포넌트의 렌더링(render) 밖으로 옮겨 StyleSheet에 담게 해준다. 이점은 두 가지다:
1. 렌더링에서 스타일을 분리해 코드를 이해하기 쉽게 만든다.
2. 각 스타일에 설명적인 이름을 붙여 저수준(low-level) 컴포넌트에 의미를 더한다.

### MenuItems 컴포넌트 리팩터링 순서
1. `react-native`에서 `StyleSheet`를 import한다.
2. 같은 파일 안에 `menuStyles`라는 상수를 만든다. 메뉴용 스타일이므로 설명적인 이름을 쓴다. `StyleSheet.create`를 호출해 모든 스타일을 `menuStyles` 객체에 저장한다.
3. **container**: View에 쓰던 `flex: 0.75`를 빼내어 `container`라는 스타일로 만든다 (전체 ScrollView 메뉴의 View 컨테이너). 원래 자리의 인라인 스타일과 여분의 중괄호를 지우고 `menuStyles.container`로 대체한다 (IDE가 속성을 자동 제안).
4. **innerContainer**: ScrollView의 스타일을 모두 `innerContainer`로 옮기고, 렌더링부에서는 `menuStyles.innerContainer`를 참조한다.
5. **headerText**: "View Menu"를 표시하는 Text의 color, fontSize, flexWrap을 `headerText`로 추출한다.
6. **itemText**: 각 메뉴 항목 텍스트의 스타일을 `itemText`로 추출한다.

정리 후 컴포넌트는 훨씬 짧고 읽기 쉽다. View 안에 ScrollView가 있고, headerText를 표시하는 Text와 itemText를 표시하는 Text가 있다는 것이 코드만 읽어도 이해된다. 스타일 변경이 필요하면 아래쪽 StyleSheet에서 수정하면 컴포넌트에 반영된다.

### 다른 컴포넌트도 정리
- **LittleLemonHeader**: container, headerText, innerText 스타일로 정리.
- **App**: 같은 접근으로 훨씬 짧고 깔끔해짐 — View 하나가 LittleLemonHeader와 MenuItems 컴포넌트를 호출하고 스타일은 아래 StyleSheet에 모여 있다.

React Native 컴포넌트를 작성할 때마다 StyleSheet API를 사용하는 습관을 들이자. 코드가 깔끔해질 뿐 아니라 스타일이 컴포넌트 가까이에 유지된다.

## 예시
```jsx
// components/MenuItems.js — StyleSheet로 정리한 형태
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function MenuItems() {
  return (
    <View style={menuStyles.container}>
      <ScrollView horizontal={false} style={menuStyles.innerContainer}>
        <Text style={menuStyles.headerText}>View Menu</Text>
        <Text style={menuStyles.itemText}>{menuItemsToDisplay}</Text>
      </ScrollView>
    </View>
  );
}

const menuStyles = StyleSheet.create({
  container: {
    flex: 0.75,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 40,
    backgroundColor: 'black',
  },
  headerText: {
    color: 'white',
    fontSize: 40,
    flexWrap: 'wrap',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 36,
  },
});
```

## 요약
- `StyleSheet.create`로 스타일 객체를 만들어 렌더링부의 인라인 스타일을 모두 추출한다.
- container, innerContainer, headerText, itemText처럼 역할이 드러나는 이름을 사용한다.
- 정리 후에는 코드만 읽어도 컴포넌트 구조가 파악되고, 스타일 수정은 StyleSheet 한곳에서 한다.
- 모든 React Native 컴포넌트에 이 접근을 적용하는 것이 권장 습관이다.

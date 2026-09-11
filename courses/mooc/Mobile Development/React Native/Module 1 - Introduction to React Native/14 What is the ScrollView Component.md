# What is the ScrollView Component?

## 개요
- 작은 모바일 화면에 다 들어가지 않는 콘텐츠(예: Little Lemon 메뉴)를 위해 스크롤 가능한 목록이 필요하다
- `ScrollView`는 React Native 패키지의 기본 코어 컴포넌트로 스크롤 가능한 뷰를 만든다
- **단 하나의 규칙**: ScrollView는 반드시 높이가 제한(bounded height)되어야 동작한다 — 부모 View에 높이를 지정하거나 `flex: 1`을 준다

## 내용
### ScrollView가 필요한 이유
Little Lemon 앱은 메뉴 항목을 화면에 표시해야 하는데, 항목이 작은 모바일 화면에 다 들어가지 않는다. 사용자가 메뉴를 위아래로 스크롤할 수 있어야 하므로 스크롤 가능한 리스트가 필요하다. 소셜 미디어 앱처럼 손가락으로 스크롤하면 많은 정보가 계속 로드되는 UI가 대표적인 예다.

### ScrollView의 규칙
ScrollView 컴포넌트에는 규칙이 하나 있다. **높이가 제한되어야(bounded by a height) 동작한다.** 즉 모든 부모 View가 제한된 높이를 갖도록 해야 한다. 보통 ScrollView는 View 컴포넌트 안에 위치하므로, View에 높이를 설정하거나 CSS flexbox 속성처럼 `flex: 1` 스타일을 준다.

### 구현 순서
1. React Native 패키지에서 `ScrollView` 컴포넌트를 import한다.
2. 표시할 메뉴 항목 텍스트를 담은 상수 배열(예: `menuItemsToDisplay`)을 선언한다.
3. 부모 `View`에 `flex: 1`을 전달해 자식에게 제한된 높이를 준다.
4. `ScrollView` 안에 `Text` 컴포넌트를 렌더링해 메뉴 항목 배열을 표시한다.
5. ScrollView도 다른 컴포넌트처럼 props를 받는다. `style` prop으로 패딩(padding)과 초록 배경색을 지정한다.

이렇게 하면 직접 컴포넌트를 만들 필요 없이 iOS와 Android 모두를 위한 네이티브 ScrollView가 완성된다. 내장 터치 응답 시스템(touch responder system)이 있어 화면을 터치해 위아래로 스크롤할 수 있다.

## 예시
```jsx
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const menuItemsToDisplay = [
  'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab ...',
];

export default function MenuItems() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ padding: 40, backgroundColor: 'green' }}>
        <Text>{menuItemsToDisplay}</Text>
      </ScrollView>
    </View>
  );
}
```

## 요약
- ScrollView는 화면에 다 안 들어가는 콘텐츠를 스크롤 가능하게 만드는 코어 컴포넌트다.
- 반드시 높이가 제한되어야 하므로 부모 View에 높이 지정 또는 `flex: 1`이 필요하다.
- style prop으로 패딩·배경색 등 외관을 조정할 수 있다.
- 내장 터치 응답 시스템 덕분에 iOS·Android 모두에서 네이티브 스크롤이 동작한다.

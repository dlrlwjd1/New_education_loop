# Using the ScrollView Component

## 개요
- Little Lemon 앱에 `MenuItems` 컴포넌트를 만들어 ScrollView 기반의 스크롤 가능한 메뉴 목록을 구현하는 데모 강의
- ScrollView와 그 자식 컴포넌트에 각각 별도의 스타일을 적용하는 방법 시연
- `horizontal`, `indicatorStyle` 등 ScrollView의 유용한 props 소개

## 내용
### MenuItems 컴포넌트 만들기
현재 앱에는 커스텀 컴포넌트인 LittleLemonHeader가 있고 루트 App이 이를 호출한다. 메뉴를 화면에 표시하기 위해 `components` 폴더 안에 `MenuItems` 컴포넌트를 새로 만든다 (메뉴 항목 이름 배열은 미리 준비되어 있음).

구성:
1. 부모 `View` 안에 `ScrollView`를 호출한다.
2. ScrollView 안에 "View Menu" 같은 안내 텍스트용 `Text` 컴포넌트를 두어 메뉴 목록이 이어진다는 것을 알려준다.
3. 또 다른 `Text` 컴포넌트에 메뉴 항목 배열(`menuItemsToDisplay`)을 표시한다.
4. **flex 배분**: 헤더가 화면의 약 10%를 차지하므로 이 View에는 `flex: 0.75`를 지정해 나머지 화면의 75%를 메뉴가 차지하게 한다.

### 스타일링
- ScrollView: 수평·수직 패딩 40픽셀(`paddingHorizontal: 40`, `paddingVertical: 40`), 배경색은 지금까지 쓰던 초록색 hex 코드.
- 안내 텍스트(View Menu): `fontSize`, `flexWrap`, `color` 지정.
- 메뉴 항목 텍스트: 레몬 노란색과 큰 폰트 크기.

### App.js에서 호출
헤더를 import했던 것처럼 `MenuItems` 컴포넌트를 import하고(IDE가 위치를 자동 제안) 헤더 아래에 배치한다. 에뮬레이터에서 헤더 바로 아래에 MenuItems가 표시되고, 목록이 실제로 스크롤된다.

### ScrollView의 유용한 props
- **horizontal**: `horizontal` prop을 전달하면 세로 스크롤 대신 가로로 스크롤된다. 세로 목록을 원하므로 `false`로 되돌리지만, 가로 목록을 만들 때 이 옵션을 쓸 수 있다.
- **indicatorStyle**: ScrollView 배경을 검정으로 바꾸면(화면의 75%가 검정, 나머지는 푸터로 쓸 수 있는 기존 초록 View) 스크롤 인디케이터(scroll indicator)가 잘 보이지 않는다. `indicatorStyle`은 `black`, `white`, `default`(검정) 중 선택할 수 있다. 배경이 검정이므로 `white`를 선택하면 오른쪽에 흰 인디케이터가 나타나고, 스크롤을 멈추면 자동으로 사라졌다가 다시 스크롤하면 나타난다. 배경색에 따라 인디케이터 색을 골라야 한다.
- 이외에도 많은 속성이 있다. 에디터에서 Ctrl+Space를 누르면 다른 속성과 함수가 표시되며, React Native 문서에서 더 살펴볼 수 있다.

## 예시
```jsx
// components/MenuItems.js
import { View, Text, ScrollView } from 'react-native';

const menuItemsToDisplay = [
  'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab ...',
];

export default function MenuItems() {
  return (
    <View style={{ flex: 0.75 }}>
      <ScrollView
        horizontal={false}
        indicatorStyle="white"
        style={{
          paddingHorizontal: 40,
          paddingVertical: 40,
          backgroundColor: 'black',
        }}
      >
        <Text style={{ color: 'white', fontSize: 40, flexWrap: 'wrap' }}>
          View Menu
        </Text>
        <Text style={{ color: '#F4CE14', fontSize: 36 }}>
          {menuItemsToDisplay}
        </Text>
      </ScrollView>
    </View>
  );
}
```

```jsx
// App.js
import LittleLemonHeader from './components/LittleLemonHeader';
import MenuItems from './components/MenuItems';

// 헤더 아래에 렌더링
<LittleLemonHeader />
<MenuItems />
```

## 요약
- 스크롤 메뉴는 `View(flex: 0.75)` 안의 `ScrollView`에 안내 텍스트와 메뉴 항목 텍스트를 넣어 만든다.
- ScrollView와 자식 Text에 각각 별도 스타일(패딩, 배경색, 폰트, 색상)을 적용할 수 있다.
- `horizontal` prop으로 가로 스크롤 목록을 만들 수 있다.
- `indicatorStyle`(black/white/default)은 배경색과 대비되게 선택해야 인디케이터가 보인다.

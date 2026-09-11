# Using the View and Text Components

## 개요
- Little Lemon 앱에서 `View`와 `Text` 컴포넌트의 실제 사용법을 시연하는 데모 강의
- `flex` 속성으로 자식 View가 부모 View 공간에서 차지하는 비율을 제어한다 (0.5 = 50%, 0.2 = 20%)
- 텍스트 문자열은 반드시 `Text` 컴포넌트로 감싸야 하며, `Text`는 중첩(nesting)과 스타일 상속·오버라이드, `numberOfLines` 속성을 지원한다

## 내용
### 루트 View와 flex
루트 레벨 컴포넌트에서 `View`가 부모 컴포넌트이고 그 안에 하나 이상의 자식이 들어간다. LittleLemonHeader 컴포넌트는 이 View의 자식이다. 부모 View에 `flex: 1`과 초록 배경색을 주면 화면 전체가 이 View로 채워진다. 루트 컴포넌트의 부모 View이기 때문이다. 배경색을 분홍으로 바꾸면 화면 전체 배경이 분홍으로 바뀐다.

### 중첩 View와 flex 비율
헤더 컴포넌트 안의 View에 `flex: 0.5`를 주면 부모 View 공간의 50%(화면의 절반)를 차지한다. 배경색을 바꿔보면 잘 보인다.
- `flex: 0.3` → 화면의 약 30%
- `flex: 0.2` → 화면의 약 20%
- `flex: 1` → 부모 View와 같은 공간 전체를 차지하며 분홍색이 초록색을 덮는다(override)

헤더에는 `flex: 0.2`가 적당하다. 색상은 분홍 대신 레몬 느낌의 노란색 16진수(hex code) 값으로 변경한다. 즉, View는 중첩할 수 있고 `flex` 속성으로 자식 View가 부모 대비 차지하는 비율을 정한다.

### Text 컴포넌트의 필수 규칙
모든 텍스트 문자열은 반드시 `Text` 컴포넌트 안에 있어야 한다. `Text` 컴포넌트를 제거하고 문자열을 `View`에 바로 넣으면 빨간 경고 화면이 뜬다: "Text strings must be rendered within a <Text> component." React Native의 요구사항이다.

### Text 스타일링과 중첩
- 패딩 40픽셀에 폰트 크기를 키우고 색을 검정으로 설정하는 등 여러 스타일을 적용할 수 있다.
- **중첩(nesting)**: Text 컴포넌트 안에 또 다른 Text 컴포넌트를 넣을 수 있다. 자식 Text는 부모 Text의 속성을 상속(inherit)하며 일부 스타일을 오버라이드할 수 있다.
- 예: 부모 Text에 "Welcome to", 자식 Text에 "Little Lemon"을 넣으면 에뮬레이터에서는 하나의 텍스트처럼 보인다. 자식에 굵은 글씨(bold)를 적용하면 "Little Lemon"만 굵게 표시된다. font weight, color, padding 등을 오버라이드하면서도 나머지 부모 스타일은 상속된다.

### numberOfLines 속성
`numberOfLines`는 Text 컴포넌트에 허용되는 줄 수를 지정한다.
- `numberOfLines={1}`이면 한 줄에 들어가지 않는 내용은 잘린다(예: "Lemon" 단어 중간에서 잘림).
- `numberOfLines={3}`이면 텍스트가 3줄 이하이므로 전부 표시된다.
- 텍스트 양이 많은 화면이나 폼(form)에서 유용하다.

## 예시
```jsx
// App.js — 부모 View
<View style={{ flex: 1, backgroundColor: 'green' }}>
  <LittleLemonHeader />
</View>
```

```jsx
// components/LittleLemonHeader.js
import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ flex: 0.2, backgroundColor: '#F4CE14' }}>
      <Text
        style={{ padding: 40, fontSize: 30, color: 'black' }}
        numberOfLines={3}
      >
        Welcome to <Text style={{ fontWeight: 'bold' }}>Little Lemon</Text>
      </Text>
    </View>
  );
}
```

## 요약
- 부모 View의 `flex: 1`은 화면 전체를 차지하고, 자식 View의 `flex` 값(0.2, 0.3, 0.5)은 부모 대비 비율을 정한다.
- 화면의 모든 텍스트는 반드시 `Text` 컴포넌트로 감싸야 한다 (아니면 빨간 경고 발생).
- Text는 중첩 가능하며 자식은 부모 스타일을 상속하고 fontWeight 등 일부만 오버라이드할 수 있다.
- `numberOfLines`로 허용 줄 수를 제한하면 넘치는 텍스트는 잘린다.

# What are View and Text Components?

## 개요
- `View`는 모바일 UI를 만드는 가장 기본적인 컴포넌트로, 화면의 작은 직사각형 영역이며 모든 요소를 담는 컨테이너(container)다
- `Text`는 화면에 텍스트를 표시하는 기본 코어 컴포넌트다
- `style` prop으로 마진(margin), 폰트 크기, 색상, 배경색 등을 지정할 수 있다

## 내용
### View 컴포넌트
모바일 개발에서 뷰(view)는 사용자 인터페이스의 기본 빌딩 블록으로, 화면 위의 작은 직사각형 요소다. View는 그 안의 모든 요소를 담으며, 앱에서 가장 먼저 필요한 컴포넌트다. React Native로 모바일 UI를 만들 때 가장 근본적인(fundamental) 컴포넌트이기도 하다.

- View 컴포넌트는 웹 세계의 **스크롤되지 않는 `div` 태그**와 같다.
- 모바일 화면의 레이아웃(layout)을 지원하는 컨테이너다.
- View 안에서 스타일링(styling), 플렉스박스(flexbox), 터치 처리(touch handling), 접근성(accessibility) 제어를 사용할 수 있다.
- View는 다른 View 안에 중첩(nested)될 수 있으며, 0개 또는 여러 개의 자식(children)을 가질 수 있다.

### Text 컴포넌트
Text는 텍스트를 표시하기 위한 React Native의 기본 코어 컴포넌트다. 스타일링, 중첩, 터치 처리를 지원한다. 모바일 화면에 텍스트를 표시할 때마다 사용하는 흔한 컴포넌트다.

### 코드 예제 흐름
1. `LittleLemonWelcome`이라는 React 컴포넌트를 정의한다.
2. `View`(부모) 안에 `Text` 컴포넌트를 렌더링한다.
3. View 컴포넌트는 `style`이라는 prop을 받는다. style prop에는 스타일링 정보를 담는다.
4. 마진 두 개(`marginTop: 40`, `marginLeft: 40`)를 추가하면 텍스트가 위·왼쪽에 40픽셀 여백을 두고 표시된다.
5. 폰트 크기를 30으로 키우고, 텍스트에 색상(color)을 주고, View에 배경색(backgroundColor)을 추가하면 에뮬레이터에서 훨씬 큰 텍스트가 View의 배경색과 지정한 글자색으로 렌더링된다.

## 예시
```jsx
import React from 'react';
import { View, Text } from 'react-native';

const LittleLemonWelcome = () => {
  return (
    <View style={{ marginTop: 40, marginLeft: 40, backgroundColor: '#495E57' }}>
      <Text style={{ fontSize: 30, color: '#EDEFEE' }}>
        Welcome to Little Lemon
      </Text>
    </View>
  );
};

export default LittleLemonWelcome;
```

## 요약
- `View`는 스크롤되지 않는 `div`와 같은 레이아웃 컨테이너로, 중첩이 가능하고 자식을 0개 이상 가질 수 있다.
- `Text`는 텍스트 표시용 코어 컴포넌트로 스타일링·중첩·터치 처리를 지원한다.
- `style` prop으로 마진, 폰트 크기, 글자색, 배경색 등을 지정한다.
- 이 두 컴포넌트만으로 Little Lemon 앱의 기본 화면을 설계할 수 있다.

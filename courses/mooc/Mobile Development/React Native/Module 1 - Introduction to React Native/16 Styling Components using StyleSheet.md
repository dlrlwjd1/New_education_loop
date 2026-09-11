# Styling Components using StyleSheet

## 개요
- 인라인 스타일링(inline styling)은 앱이 커질수록 관리가 어려워지고 코드 가독성을 해친다
- `StyleSheet` API는 CSS 스타일시트와 매우 비슷한 API로, 스타일을 컴포넌트 렌더링 밖으로 분리한다
- 스타일에 의미 있는 이름을 붙여 재사용할 수 있고, 관심사 분리(separation of concerns)로 코드가 깔끔해진다

## 내용
### 인라인 스타일링의 문제
인라인 스타일링은 컴포넌트의 렌더링 안에 모든 스타일을 두는 방식이다. 애플리케이션이 커지면 이 방식은 금세 관리 불가능해지고 코드를 읽기 어려워진다. View 안에 Text가 있고 각각 다른 스타일이 적용된 예를 보면, 코드와 스타일이 뒤엉켜 마치 스타일과 코드가 섞인 거미줄(cobweb)처럼 무슨 일이 일어나는지 파악하기 어렵다.

### StyleSheet API
React Native는 CSS 스타일시트와 매우 유사한 `StyleSheet` API를 제공한다. StyleSheet API를 쓰면 스타일을 컴포넌트의 렌더링에서 분리해 모든 스타일을 한곳에 모을 수 있어 이해하기 쉬워진다.

예시 스타일시트에는 두 스타일이 있다:
- **container**: 컴포넌트의 부모 레벨 View에 사용. `flex: 1`(화면의 사용 가능한 공간 전부 차지), 패딩과 상단 마진, 흰색 배경색.
- **title**: 이름 그대로 Text 컴포넌트로 표시되는 제목에 대응하는 스타일.

스타일을 컴포넌트에서 참조하면 컴포넌트가 훨씬 작고 깔끔하고 읽기 쉬워진다. 부모 View가 텍스트를 감싸고 모든 스타일은 앞서 정의한 스타일시트에서 온다. 컴파일되면 "Little Lemon Restaurant" 텍스트가 스타일시트에 정의된 스타일로 표시된다.

### 스타일 배치 원칙
- 스타일을 정의하면 다시 정의하지 않고 **재사용**할 수 있다.
- 스타일은 항상 **같은 파일 안에서 컴포넌트 가까이에** 둔다. 그래야 해당 컴포넌트의 스타일을 빠르게 참조할 수 있다.
- 여러 컴포넌트에 걸쳐 사용할 **전역 스타일(global styles)** 은 별도 파일로 옮겨 여러 컴포넌트가 참조하게 한다.

## 예시
```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonView() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Little Lemon Restaurant</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,            // 화면의 사용 가능한 공간 전부 차지
    padding: 24,
    marginTop: 25,
    backgroundColor: 'white',
  },
  title: {
    // 제목(Text)용 스타일
    fontSize: 30,
    color: 'black',
  },
});
```

## 요약
- 인라인 스타일은 앱이 커지면 코드와 뒤엉켜 읽기 어려워진다.
- StyleSheet API로 스타일을 렌더링 밖으로 추출하면 컴포넌트가 작고 깔끔해진다.
- 각 스타일에 의미 있는 이름(container, title 등)을 붙이고 재사용한다.
- 컴포넌트별 스타일은 같은 파일에, 전역 스타일은 별도 파일에 둔다.
- 이점: 코드 가독성 향상, 관심사 분리, 의미 있는 스타일 이름.

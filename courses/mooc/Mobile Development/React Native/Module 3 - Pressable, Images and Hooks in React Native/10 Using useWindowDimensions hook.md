# Using useWindowDimensions hook

## 개요
- useWindowDimensions는 창(window)의 높이(height), 너비(width), 폰트 스케일(font scale) 정보를 자동으로 가져오는 React Native 훅이다.
- 화면 크기가 바뀌면 값이 자동으로 업데이트되므로, 다양한 크기의 화면에서 요소의 크기·스케일을 조정하는 판단에 활용할 수 있다.

## 내용

### useWindowDimensions란
- 창의 height, width 값과 font scale을 자동으로 조회하는 훅이다.
- 이 정보로 앱 요소들이 서로 다른 크기의 창에서 어떻게 보일지 파악하고, 크기와 스케일 조정을 더 잘 결정할 수 있다.
- **fontScale**: 현재 앱에서 사용 중인 폰트의 스케일이다. 일부 운영체제는 읽기 편의를 위해 사용자가 폰트 크기를 키우거나 줄일 수 있게 한다.

### 사용 방법
1. react-native 패키지에서 useWindowDimensions를 import한다.
2. 다른 훅처럼 어떤 React 컴포넌트에서도 사용할 수 있다. `const`로 훅에서 height, width, fontScale을 구조 분해(destructure)해 받는다.
3. 세 값은 모두 숫자(number)이며, 이후 앱 안에서 다양한 계산에 사용할 수 있다.
- 이 훅의 유용한 점은 **화면 치수가 바뀔 때마다 업데이트된 값**을 받을 수 있다는 것이다.

### 데모: 화면에 치수 출력
- `styles.regular` 스타일을 적용한 텍스트 컴포넌트에 "Window Dimensions"를 출력하고, 같은 텍스트 컴포넌트를 세 번 복사해 각각 height, width, fontScale을 표시한다.
- iOS 에뮬레이터: height 844, width 390, fontScale 1
- Android 에뮬레이터: height 712, width 360, fontScale 1 — 기기마다 값이 다르다.

## 예시

강의 설명 기반 재구성:

```jsx
import { View, Text, useWindowDimensions, StyleSheet } from 'react-native';

const App = () => {
  const { height, width, fontScale } = useWindowDimensions();

  return (
    <View>
      <Text style={styles.regular}>Window Dimensions</Text>
      <Text style={styles.regular}>Height: {height}</Text>
      <Text style={styles.regular}>Width: {width}</Text>
      <Text style={styles.regular}>Font scale: {fontScale}</Text>
    </View>
  );
};
```

## 요약
- useWindowDimensions는 창의 height, width, fontScale(모두 숫자)을 반환하는 훅이다.
- 화면 치수가 변할 때마다 최신 값으로 자동 업데이트된다.
- 기기마다 값이 다르므로(iOS 844×390 vs Android 712×360 등) 반응형 디자인 결정에 활용한다.
- fontScale은 사용자가 OS에서 설정한 폰트 크기 배율을 반영한다.

# React Native Code

## 개요
- 브라우저 기반 샌드박스(sandbox)인 Expo Snack(snack.expo.dev)에서 React Native 코드 구조를 시연하는 데모 강의
- 로컬 설치 없이 iOS와 Android 에뮬레이터에서 동시에 코드를 실행할 수 있다
- `View`, `Text` 코어 컴포넌트를 가져와(import) 조합하고 스타일링해 화면 가운데에 환영 문구를 표시

## 내용
### Expo Snack 소개
snack.expo.dev는 React Native 코드를 작성하고 iOS·Android 에뮬레이터 양쪽에서 실행할 수 있는 도구다. React Native를 로컬에 설치하지 않고 샌드박스처럼 사용할 수 있다. 계정을 만들면 원하는 React Native 코드를 작성해 iOS와 Android에서 즉시 실행되는 모습을 볼 수 있다.

### Welcome App 컴포넌트 만들기
1. 비어 있는 `WelcomeApp` 컴포넌트에서 시작한다 (iOS 에뮬레이터 화면은 빈 상태).
2. React Native 패키지에서 `View`와 `Text` 컴포넌트를 import한다.
3. `View`를 부모 컴포넌트(parent component)로 사용하고, 그 안의 `Text` 컴포넌트에 "Welcome to React Native"를 입력한다.
4. 이 상태에서는 텍스트가 화면 맨 위에 있어 눈에 잘 띄지 않는다.
5. `View`에 스타일을 추가한다: `flex: 1`, `justifyContent: 'center'`, `alignItems: 'center'` — 텍스트가 화면 중앙에 표시된다.

### Android에서도 실행
Expo Snack의 "Android" 버튼을 클릭하면 Android 에뮬레이터가 바로 실행되고, 같은 Welcome App 컴포넌트가 표시된다. 별도 설정이나 에뮬레이터 설치 없이 브라우저에서 빠르게 React Native 코드를 작성할 수 있다.

## 예시
```jsx
import React from 'react';
import { View, Text } from 'react-native';

const WelcomeApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to React Native</Text>
    </View>
  );
};

export default WelcomeApp;
```

## 요약
- Expo Snack(snack.expo.dev)은 설치 없이 브라우저에서 React Native 코드를 작성·실행하는 샌드박스다.
- 코어 컴포넌트는 React Native 라이브러리에서 import해서 사용해야 한다.
- `View`(부모) 안에 `Text`를 넣고, `flex: 1` + `justifyContent: 'center'` + `alignItems: 'center'`로 중앙 정렬한다.
- 같은 코드가 iOS와 Android 에뮬레이터 모두에서 즉시 실행된다.

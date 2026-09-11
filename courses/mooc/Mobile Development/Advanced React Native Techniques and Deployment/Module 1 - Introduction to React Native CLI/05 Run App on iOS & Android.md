# Run App on iOS & Android

## 개요
- React Native CLI로 첫 프로젝트를 생성하고 iOS 시뮬레이터와 Android 에뮬레이터에서 실행한다.
- 프로젝트 생성은 `npx @react-native-community/cli@latest init`, 실행은 `npm start`(Metro) + `npm run ios` / `npm run android`.
- 프로젝트 구조에 `android`, `ios` 폴더가 생기며, UI 코드 작성 방식은 Expo와 동일하다.

## 내용
### 프로젝트 생성
- 공식 문서에서 "Get started without a framework"(프레임워크 없이 React Native 사용)를 선택하면 생성 명령을 확인할 수 있다.
- 원하는 폴더에서 터미널을 열고 생성 명령을 실행한다 (프로젝트 이름: `ChatApp`).
- 생성 중 나오는 질문들:
  - `@react-native-community/cli` 패키지를 설치할지 → `y` 입력.
  - CocoaPods를 설치할지 → `y` 입력. (CocoaPods는 iOS용)
- 생성이 끝나면 실행 방법 안내가 출력된다.

### 프로젝트 열기와 구조
- `cd ChatApp`으로 이동한 뒤 `code .`으로 VS Code에서 연다.
- `App` 파일에서 Expo처럼 코드를 수정할 수 있고, `android`와 `ios` 폴더가 존재한다 — 이 폴더들은 매우 중요하며 이유는 나중에 배운다.

### 앱 실행
1. `npm start`로 Metro 번들러(Metro bundler)를 시작한다.
2. 새 터미널에서 `npm run ios`로 iOS 시뮬레이터에서 실행한다.
3. Android는 `npm run android`로 실행한다.
   - 실제 기기(real device)를 노트북에 연결하고 `npm run android`를 실행하면 실제 기기에서 실행된다. 연결된 기기가 없으면 에뮬레이터에서 실행된다.

### UI 코드는 Expo와 동일
- 기본 컴포넌트로 교체하고 스타일을 추가해 보면 Expo에서 배운 그대로 동작한다.
- 주의: `backgroundColor` 값 `black`의 첫 글자를 대문자로 쓰면 적용되지 않는다 — 소문자로 써야 한다.

## 예시
```bash
# 프로젝트 생성
npx @react-native-community/cli@latest init ChatApp

# 프로젝트 열기
cd ChatApp
code .

# Metro 번들러 시작
npm start

# iOS 시뮬레이터에서 실행 (새 터미널)
npm run ios

# Android 에뮬레이터/실기기에서 실행
npm run android
```

```jsx
// Expo와 동일하게 동작하는 기본 컴포넌트 예시
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    color: 'white',
  },
});
```

## 요약
- `npx @react-native-community/cli@latest init 프로젝트명`으로 React Native CLI 프로젝트를 생성한다.
- `npm start`(Metro 번들러) → `npm run ios` / `npm run android`로 각 플랫폼에서 실행한다.
- 스타일링 등 UI 코드는 Expo에서 배운 것과 동일하게 사용할 수 있다.
- 실제 Android 기기를 연결한 상태에서 `npm run android`를 실행하면 실기기에서 앱이 실행된다.

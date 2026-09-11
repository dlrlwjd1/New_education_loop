# React Native with Expo

## 개요
- Expo CLI로 개발 환경을 설정하고 React Native 앱을 실행하는 데모 강의
- `npx create-expo-app` 명령 하나로 프로젝트를 생성하고 `npm start`로 실행한다
- 에뮬레이터(emulator)가 코드 변경을 컴파일 시간 없이 즉시 반영해 빠른 개발 워크플로를 제공한다

## 내용
### 사전 준비 (prerequisites)
- 최신 Node 설치
- iOS 또는 Android 중 최소 하나의 에뮬레이터 준비 — 또는 Expo를 처음 열 때 나오는 QR 코드를 스캔해 실제 기기에서 실행할 수도 있다
- IDE 설치 (강의에서는 VS Code 사용, 다른 에디터도 무방)

### 프로젝트 생성
VS Code 터미널에서 프로젝트 생성 명령을 실행하고 프로젝트 이름(예: SampleProject)을 지정한다. `create-expo-app` 패키지 설치 여부를 물으면 `Y`를 눌러 진행한다. Expo와 관련 패키지 설치가 끝나면 iOS, Android, 웹 브라우저에서 프로젝트를 실행하는 방법이 안내된다.

### 프로젝트 구조와 실행
- `App.js` 파일에는 `Text`, `View`, `StyleSheet` 같은 React Native 컴포넌트가 이미 가져와져(import) 있다.
- Expo에는 전용 상태 바(status bar) 컴포넌트가 있다. 이는 Expo 위에 작성된 단순한 React Native 코드다.
- 터미널에서 `npm start`를 실행하면 프로젝트가 시작되고 **Expo Metro Bundler**에 접근하는 QR 코드가 표시된다. Metro Bundler는 JavaScript 코드를 변환(translate)해 하나의 파일로 번들링(bundling)하며, 에뮬레이터가 없을 때 앱을 실행하는 편리한 방법이다.
- 에뮬레이터가 설치되어 있으면 실행한다. 강의에서는 Xcode로 설치한 iOS 시뮬레이터를 `i` 키를 눌러 열었다(iPhone 11). 잠시 후 Expo Go로 열라는 프롬프트가 뜨고 "open"을 탭한다.
- iOS 에뮬레이터는 macOS(예: MacBook)에서만 실행 가능하다. Windows 머신에서는 Android 에뮬레이터를 사용한다.

### 코드 수정과 즉시 반영
Expo Go가 열리면 환영 메시지와 함께 `App.js`를 열어 작업을 시작하라는 안내가 나온다. `App.js`의 `Text` 컴포넌트 안 메시지를 "Hello, welcome to Little Lemon app"으로 바꾸면 에뮬레이터에 즉시 반영된다. 폰트 크기를 20으로 키우는 스타일을 추가해도 변경이 즉시 표시된다. 컴파일 시간이 없어 빠르고 쾌적한 워크플로가 가능하다.

## 예시
```bash
# 프로젝트 생성
npx create-expo-app SampleProject

# 프로젝트 실행 (프로젝트 폴더 안에서)
npm start

# 실행 후 'i' 키 → iOS 시뮬레이터 열기 (macOS만 가능)
```

```jsx
// App.js — 메시지와 폰트 크기 수정 예
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Hello, welcome to Little Lemon app</Text>
      <StatusBar style="auto" />
    </View>
  );
}
```

## 요약
- Expo 설치에 필요한 것은 IDE와 Node 설치, 그리고 명령 하나(`npx create-expo-app`)뿐이다.
- `npm start`로 실행하면 Metro Bundler QR 코드가 나오고, 에뮬레이터가 없어도 QR 스캔으로 실행할 수 있다.
- iOS 시뮬레이터는 macOS 전용이며 Windows에서는 Android 에뮬레이터를 쓴다.
- 코드 변경이 에뮬레이터에 컴파일 없이 즉시 반영된다.

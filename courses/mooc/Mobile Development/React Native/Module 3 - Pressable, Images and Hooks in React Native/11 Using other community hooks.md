# Using other community hooks

## 개요
- React Native는 오픈 소스(open source)이므로 개발자 커뮤니티가 새 훅을 기여해 기능을 확장한다.
- `@react-native-community/hooks` 패키지를 npm 또는 yarn으로 설치해 커뮤니티 훅을 사용할 수 있다.
- 대표 훅: useAppState, useImageDimensions, useKeyboard, useDeviceOrientation.

## 내용

### 커뮤니티 훅 접근 방법
- 코어 React Native 패키지 밖에 커뮤니티 컴포넌트가 있듯, 커뮤니티가 만든 훅도 앱에 연결해 쓸 수 있다.
- `github.com/react-native-community/hooks` 페이지에서 확인한다. 4,300명 이상의 커뮤니티와 최소 30명의 기여자(contributor)가 있다.
- 설치: npm 또는 yarn으로 `@react-native-community/hooks` 패키지를 설치한다.
- 현재 이 패키지에는 12개의 훅이 있으며 커뮤니티가 지속적으로 개선·추가하고 있다.
- 설치 요건: React Native 버전 **0.59.0 이상**이 필요하다.

### 주요 커뮤니티 훅

#### useAppState
- 가장 자주 사용되는 커뮤니티 훅. 앱이 active인지 background인지(iOS의 경우 inactive 포함)를 알려준다.
- 상태에 따라 앱 동작을 커스터마이즈할 수 있다. 예: 앱이 background/inactive일 때 특정 기능을 비활성화해 기기 전력 소모를 줄인다.

#### useImageDimensions
- 이미지 소스(에셋 또는 웹 URL)를 전달하면 그 이미지의 치수(dimensions)를 반환한다.
- 보너스로 이미지가 로딩 중인지, 에러가 발생했는지도 알려준다.
- 이미지의 높이·너비·종횡비(aspect ratio) 데이터를 앱 디자인에 활용할 수 있다.

#### useKeyboard
- 가상 키보드(virtual keyboard)가 화면에 표시되어 있는지와 그 높이를 알려준다.
- 키보드를 더 효과적으로 활용하는 앱 설계에 도움이 된다.

#### useDeviceOrientation
- 기기가 가로 모드(landscape)인지 세로 모드(portrait)인지 알려준다.
- 특히 태블릿에서 유용하며, 가로/세로 모드에 따른 디자인 대응에 도움이 된다.

## 예시

설치 명령:

```bash
npm install @react-native-community/hooks
# 또는
yarn add @react-native-community/hooks
```

## 요약
- 커뮤니티 훅은 `@react-native-community/hooks` 패키지로 제공되며 npm/yarn으로 설치한다(React Native 0.59.0 이상 필요).
- useAppState: 앱의 active/background/inactive 상태 감지 — 전력 절약 등 동작 커스터마이즈.
- useImageDimensions: 이미지 치수와 로딩/에러 상태 반환.
- useKeyboard: 가상 키보드 표시 여부와 높이 반환.
- useDeviceOrientation: 가로/세로 모드 감지.

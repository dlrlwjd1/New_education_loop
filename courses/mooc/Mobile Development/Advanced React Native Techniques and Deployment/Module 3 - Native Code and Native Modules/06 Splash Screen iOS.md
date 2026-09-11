# Splash Screen iOS

## 개요
- 이전 강의(Android)에 이어 iOS에 스플래시 스크린(splash screen)을 설정
- 패키지 설치와 이미지 생성은 이전 강의와 공통이며, iOS 전용 단계는 `pod install`과 `AppDelegate.swift` 수정 두 가지

## 내용

### 사전 조건 (이전 강의에서 완료한 단계)
- 이전 강의를 따라오지 않았다면 아래를 먼저 해야 한다.

```bash
yarn add react-native-bootsplash
cd ios && pod install

# 스플래시 이미지 생성 (경로·옵션은 프로젝트에 맞게 수정)
yarn react-native-bootsplash generate src/assets/splash.png \
  --background=000000 \
  --logo-width=120
```

### AppDelegate.swift 수정
- 문서의 iOS 섹션에서 React Native 버전 분기(0.77 이상/미만)를 확인한다. 이 프로젝트는 0.77이므로 Swift 기반 코드를 사용한다.
- `ios/{앱이름}/AppDelegate.swift`에 두 줄을 추가한다.
  1. 파일 상단에 import 추가: `import RNBootSplash`
  2. AppDelegate 클래스 안(예: sourceURL 함수 위)에 문서에서 복사한 override 코드를 붙여넣는다 (스플래시 초기화용 `customize` override).

```swift
import RNBootSplash

// AppDelegate 클래스 내부에 문서의 override 코드 추가
override func customize(_ rootView: RCTRootView!) {
  super.customize(rootView)
  RNBootSplash.initWithStoryboard("BootSplash", rootView: rootView)
}
```

### 재빌드와 확인
- 네이티브 코드 변경이므로 재빌드한다.

```bash
yarn ios
```

- 앱을 닫았다 다시 열면 스플래시 스크린이 표시되고, `App.tsx`에 이전 강의에서 넣은 `BootSplash.hide({ fade: true })` 코드 덕분에 자동으로 사라진다. 이 hide 코드를 빠뜨리지 않도록 주의한다.

## 요약
- iOS 스플래시는 `react-native-bootsplash` 설치 + 이미지 생성(공통 단계) 후 `cd ios && pod install`을 실행한다.
- `AppDelegate.swift`에 `import RNBootSplash`와 override 코드 두 부분을 추가한다 (RN 0.77은 Swift 사용).
- `yarn ios`로 재빌드하면 스플래시가 적용되며, JS 쪽 `BootSplash.hide` 코드가 있어야 스플래시가 사라진다.

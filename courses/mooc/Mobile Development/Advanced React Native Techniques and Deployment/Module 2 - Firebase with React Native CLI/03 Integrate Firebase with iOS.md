# Integrate Firebase with iOS

## 개요
- React Native iOS 앱에 Firebase를 연동한다. Firebase 콘솔에 iOS 앱을 등록하고 `GoogleService-Info.plist`를 Xcode로 추가한다.
- 최신 React Native는 AppDelegate가 Objective-C(.m)가 아닌 **Swift**(`AppDelegate.swift`)라서, 문서의 Objective-C 코드 대신 Swift 코드(`import Firebase`, `FirebaseApp.configure()`)를 사용해야 한다.
- `pod install` 시 Swift 정적 라이브러리 에러가 나면 Podfile에서 해당 pod에 `:modular_headers => true`를 지정한다.

## 내용
### 사전 준비
- `@react-native-firebase/app` 패키지는 이전 강의(Android 연동)에서 이미 설치했다. 설치하지 않았다면 Yarn 또는 npm으로 먼저 설치한다.

### Firebase 콘솔에 iOS 앱 등록
1. Firebase 콘솔에서 Add app → 이번에는 Android가 아닌 **iOS**를 선택한다.
2. **번들 ID(bundle ID)**: Android와 같은 값이지만, 반드시 **자신의 프로젝트**의 `PRODUCT_BUNDLE_IDENTIFIER` 값을 넣어야 한다 (강사의 것이 아님).
3. 앱 닉네임 입력(예: Shady iOS) → Register app.
4. `GoogleService-Info.plist`를 다운로드한다.

### GoogleService-Info.plist를 Xcode로 추가
- iOS 프로젝트에는 Xcode에서 추가하는 것이 좋다.
- VS Code 터미널에서 `xed -b ios`로 Xcode를 연다.
- 문서대로 프로젝트(chat app)에서 우클릭 → **Add Files to "..."** → 다운로드한 `GoogleService-Info.plist`를 선택하고 Finish. (드래그 앤 드롭도 가능)

### AppDelegate 수정 — 문서가 오래됨 주의
- 공식 문서의 이 부분은 업데이트되지 않았다. React Native 팀이 (강사 기억으로 0.75 무렵부터) Objective-C를 **Swift**로 교체했고, `ios` 폴더에는 `AppDelegate.m`이 아닌 `AppDelegate.swift`가 있다.
- 문서의 Objective-C 코드는 Swift 파일에서 동작하지 않으므로 대신:
  - `AppDelegate.swift` 상단에 `import Firebase` 추가.
  - `didFinishLaunchingWithOptions` 안에서 super 호출 전에 `FirebaseApp.configure()` 추가. (이 한 줄은 Firebase 문서의 iOS 설정 단계에서 복사할 수 있다)
- 문서의 "Use frameworks linkage" 단계도 필요 없다 — 현재 React Native 프로젝트의 Podfile이 문서보다 더 잘 설정되어 있다.

### pod 설치와 에러 해결
- `ios` 폴더로 이동해 pod을 설치한다.
- 에러 발생: "The following Swift pods cannot yet be integrated as static libraries" — 해결 옵션은 두 가지다:
  1. Podfile에 전역으로 `use_modular_headers!` 설정 → 강사는 이 방법에서 다른 에러가 났다.
  2. **특정 의존성에만 modular headers를 지정** → 이 방법을 사용한다.
- Podfile의 target 안(`pod install` 관련 블록 위쪽)에 에러에 나온 pod들(`FirebaseCoreInternal`, `GoogleUtilities`)을 `:modular_headers => true`로 추가하고 다시 `pod install`을 실행한다.

### 실행 확인
- `cd ..`로 루트로 돌아가 `yarn ios`(또는 `npx react-native run-ios`)로 실행한다.
- 에러나 경고 없이 실행되면 Firebase가 iOS 앱에 올바르게 연결된 것이다.

## 예시
```bash
# 패키지 설치 (아직 안 했다면)
yarn add @react-native-firebase/app

# Xcode 열기
xed -b ios

# pod 설치
cd ios
pod install

# 루트로 돌아가 실행
cd ..
yarn ios
```

```swift
// ios/ChatApp/AppDelegate.swift
import Firebase

// didFinishLaunchingWithOptions 안, super 호출 전에
FirebaseApp.configure()
```

```ruby
# ios/Podfile — target 블록 안에 추가
pod 'FirebaseCoreInternal', :modular_headers => true
pod 'GoogleUtilities', :modular_headers => true
```

## 요약
- Firebase 콘솔에 자신의 번들 ID로 iOS 앱을 등록하고 `GoogleService-Info.plist`를 Xcode의 Add Files로 추가한다.
- AppDelegate가 Swift로 바뀌었으므로 문서의 Objective-C 코드 대신 `import Firebase` + `FirebaseApp.configure()`를 사용한다.
- Swift 정적 라이브러리 pod 에러는 `FirebaseCoreInternal`, `GoogleUtilities`에 `:modular_headers => true`를 지정해 해결한다.
- `pod install` 후 `yarn ios`로 실행해 경고가 없으면 연동 성공이다.

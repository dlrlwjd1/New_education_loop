# Social Login | Google Gmail Login with iOS

## 개요
- Android에 이어 iOS에서 Google 로그인을 설정한다. JavaScript 코드는 그대로 재사용하고 네이티브 통합 단계만 추가한다.
- 핵심 단계: `pod install` → 새 `GoogleService-Info.plist` 교체 → Xcode에서 URL Scheme(REVERSED_CLIENT_ID) 등록 → `AppDelegate.swift` 수정.
- 문서의 Objective-C 코드는 Swift 기반(React Native 0.77+) 프로젝트에 맞게 수정해야 하며, 빌드 에러는 Podfile의 modular headers로 해결한다.

## 내용
### pod 설치와 plist 재다운로드
1. Metro를 닫고 `cd ios && pod install`로 pod을 설치한다.
2. 이전 강의에서 Google 제공자(provider)를 활성화했으므로 **`GoogleService-Info.plist`를 다시 다운로드**해야 한다. Firebase 콘솔 → Project settings → iOS 앱(chatty iOS) 선택 → plist 다운로드.
3. VS Code에서 `ios` 폴더의 기존 파일에 드래그 앤 드롭해 교체(replace)한다.

### URL Type 설정 (Xcode)
1. 터미널에서 `xed -b ios`로 Xcode를 연다.
2. Target 선택 → **Info** 탭 → **URL Types** → + 버튼으로 추가.
3. **URL Schemes**에 `REVERSED_CLIENT_ID` 값을 넣는다 — `GoogleService-Info.plist`에서 `REVERSED_CLIENT_ID`를 찾아 복사해 붙여넣는다.

### AppDelegate.swift 수정
- 문서의 import를 붙여넣으면 에러가 난다 — 문서 코드는 Objective-C용이고 우리 파일은 Swift이기 때문이다 (React Native 0.77 이상은 Swift 사용).
- Swift 문법으로 `import GoogleSignIn`으로 고친다.
- 문서의 URL 처리 메서드를 추가하면 "cannot find application delegate in scope" 에러가 난다 → 해당 부분을 제거하고 Google Sign-In 처리 라인만 반환(return)하도록 단순화한다.

### 빌드 에러 해결
1. Product → **Clean** (단축키 Shift+Command+K)으로 프로젝트를 클린한다.
2. 실행 시 "module FirebaseCore not found" 빌드 에러 발생 → Podfile에서 이전에 추가한 modular headers pod 라인을 하나 복제해 `FirebaseCore`로 바꿔 추가한다.
3. `cd ios && pod install` 재실행 → `cd ..` → `xed -b ios`로 Xcode를 다시 열고 빌드 폴더를 클린(Shift+Command+K)한 뒤 다시 실행한다.
4. "Make sure the packager is running" 에러 → Metro 번들러를 켜지 않은 것. `yarn start`로 Metro를 실행하고 다시 앱을 실행한다.
- 강사 조언: 통합 작업에서는 시니어도 에러를 만나므로 에러가 나도 좌절하지 말 것 — 에러를 만나고 해결하는 것은 프로그래머에게 매우 정상적인 일이다.

### 테스트
- 앱에서 "Sign in with Google" 버튼을 누르면 "chat app wants to use google.com to sign in" 다이얼로그 → Continue → 계정 선택 → 로그인 성공.
- Android와 동일하게 사용자 정보(이름, 이메일, 사진)가 표시된다. JavaScript 코드는 추가로 작성할 필요가 없었다.

## 예시
```bash
# pod 설치
cd ios
pod install

# Xcode 열기
cd ..
xed -b ios

# Metro 번들러 시작 (앱 실행 전 필수)
yarn start
```

```swift
// ios/ChatApp/AppDelegate.swift
import GoogleSignIn

// URL 처리 — Swift에 맞게 단순화
func application(_ app: UIApplication, open url: URL,
                 options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {
  return GIDSignIn.sharedInstance.handle(url)
}
```

```ruby
# ios/Podfile — 기존 modular headers pod에 FirebaseCore 추가
pod 'FirebaseCoreInternal', :modular_headers => true
pod 'GoogleUtilities', :modular_headers => true
pod 'FirebaseCore', :modular_headers => true
```

## 요약
- Google 제공자 활성화 후에는 iOS도 `GoogleService-Info.plist`를 다시 받아 교체해야 한다.
- Xcode의 Target → Info → URL Types에 `REVERSED_CLIENT_ID`를 URL Scheme으로 등록한다.
- Swift 프로젝트이므로 문서의 Objective-C 코드를 Swift(`import GoogleSignIn`, handle(url) 반환)로 바꿔 적용한다.
- "module FirebaseCore not found" 에러는 Podfile에 `pod 'FirebaseCore', :modular_headers => true`를 추가하고 pod을 재설치해 해결한다.
- JavaScript 로그인 코드는 Android에서 작성한 것이 iOS에서 그대로 동작한다.

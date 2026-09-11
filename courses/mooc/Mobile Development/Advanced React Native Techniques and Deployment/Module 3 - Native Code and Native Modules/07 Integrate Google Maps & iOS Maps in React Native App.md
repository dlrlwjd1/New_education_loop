# Integrate Google Maps & iOS Maps in React Native App

## 개요
- `react-native-maps` 패키지를 설치하고 iOS/Android 네이티브 설정을 진행하는 통합(integration) 강의
- Google Maps Platform API 사용을 위해 Google Cloud Console에서 결제 계정(billing account) 생성과 API 키 발급이 필수
- 문서가 Objective-C 기준이라 Swift 기반 `AppDelegate.swift`에서는 코드를 수정해서 넣어야 함

## 내용

### 패키지 설치
- Google에서 "react native maps"를 검색해 공식 문서의 Installation instructions를 따른다.

```bash
yarn add react-native-maps
cd ios && pod install
```

- 문서 경고: Google Maps Platform API를 사용하려면 반드시 가입 후 결제 계정을 만들어야 한다.

### iOS 설정 (AppDelegate.swift)
- 문서는 `AppDelegate.m`(Objective-C) 기준이지만 최신 React Native는 Swift를 사용하므로 `ios/{앱이름}/AppDelegate.swift`에 맞게 수정한다.
  - 상단에 Google Maps import를 추가한다: `import GoogleMaps`
  - API 키 제공 코드는 Objective-C 문법(`[GMSServices provideAPIKey:@"..."]`)이 아니라 Swift 문법으로 작성해야 한다. 그대로 붙여넣으면 빌드 에러가 난다.

```swift
import GoogleMaps

// didFinishLaunchingWithOptions 내부
GMSServices.provideAPIKey("YOUR_IOS_API_KEY")
```

- Podfile에도 문서에 나온 두 줄(`rn_maps_path`, Google Maps pod 관련)을 추가하고 다시 `pod install`을 실행한다.

### Android 설정 (AndroidManifest.xml)
- `android/app/src/main/AndroidManifest.xml`의 `<application>` 태그 안에 문서의 meta-data 두 줄을 붙여넣고 API 키를 넣는다.

```xml
<application>
  <meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="YOUR_ANDROID_API_KEY" />
</application>
```

### Google Cloud Console에서 API 키 발급
1. Google Cloud Console에 접속해 계정 생성 → Start free (결제 수단·결제 프로필 입력 필요, 결제 계정 없이는 사용 불가).
2. 프로젝트를 선택하거나 새로 생성한다.
3. "APIs & Services" → "Enable APIs and Services"에서 두 가지를 활성화한다.
   - Maps SDK for Android
   - Maps SDK for iOS
4. 활성화하면 문자와 숫자로 된 API 키를 얻는다. 이 키를 `AndroidManifest.xml`과 `AppDelegate.swift`에 각각 넣는다.

### 빌드 확인
- 새 네이티브 패키지를 링크했으므로 빌드가 실패할 수 있어 양쪽 모두 확인한다.

```bash
yarn android
yarn ios
```

- Android 빌드 실패 시 에뮬레이터 상태를 확인하고 재시도하거나 `cd android && ./gradlew clean` 후 다시 빌드한다.
- iOS에서 Objective-C 문법 그대로 키를 넣으면 "expected ',' separator / cannot provide API key" 류의 컴파일 에러가 나므로 위 Swift 문법(`GMSServices.provideAPIKey`)으로 고쳐야 한다.

## 요약
- `yarn add react-native-maps` + iOS는 `pod install`(Podfile 수정 후 재실행 포함)로 설치한다.
- iOS는 `AppDelegate.swift`에 `import GoogleMaps`와 `GMSServices.provideAPIKey("키")`를 Swift 문법으로 추가한다 (문서의 Objective-C 코드 그대로는 빌드 실패).
- Android는 `AndroidManifest.xml`의 `<application>` 안에 API 키 meta-data를 추가한다.
- API 키는 Google Cloud Console에서 결제 계정 생성 후 Maps SDK for Android / iOS를 각각 활성화해 발급받는다.
- 지도 표시용 JavaScript 코드는 다음 강의에서 작성한다.

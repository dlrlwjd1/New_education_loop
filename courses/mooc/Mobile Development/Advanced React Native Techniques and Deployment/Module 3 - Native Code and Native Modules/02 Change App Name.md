# Change App Name

## 개요
- 앱 아이콘 아래에 표시되는 앱 이름을 iOS와 Android 각각의 네이티브 코드(native code)에서 변경하는 방법
- iOS는 `Info.plist`의 `CFBundleDisplayName`, Android는 `strings.xml`의 앱 이름을 수정
- 네이티브 코드 수정이므로 핫 리로딩(hot reloading)이 적용되지 않아 앱을 다시 빌드해야 함

## 내용

### iOS 앱 이름 변경
- `ios/{앱이름}/Info.plist` 파일을 연다.
- 키 `CFBundleDisplayName`의 값이 아이콘 아래 표시되는 이름이다. 예: `ChatApp` → `Chatty`로 변경 후 저장.
- JavaScript 코드가 아니라 네이티브 코드이므로 핫 리로딩이 동작하지 않는다. 반드시 재컴파일해야 반영된다.

```bash
yarn ios
```

### Android 앱 이름 변경
- 경로: `android/app/src/main/res/values/strings.xml`
- 파일 검색(Cmd+T 등)으로 `strings.xml`을 찾아도 된다.
- `app_name` 값을 원하는 이름(예: `Chatty`)으로 바꾸고 저장한 뒤 재빌드한다.

```bash
yarn android
```

## 예시

```xml
<!-- android/app/src/main/res/values/strings.xml -->
<resources>
    <string name="app_name">Chatty</string>
</resources>
```

```xml
<!-- ios/{앱이름}/Info.plist -->
<key>CFBundleDisplayName</key>
<string>Chatty</string>
```

## 요약
- iOS: `Info.plist`의 `CFBundleDisplayName` 값 변경 → `yarn ios`로 재빌드
- Android: `android/app/src/main/res/values/strings.xml`의 `app_name` 변경 → `yarn android`로 재빌드
- 네이티브 코드 변경은 핫 리로딩이 안 되므로 반드시 앱을 다시 실행해야 이름이 바뀐다.

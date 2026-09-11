# OTA Updates iOS

## 개요
- Android에서 구성한 Stallion OTA 프로젝트를 iOS 앱에도 연결한다.
- `AppDelegate.swift`와 `Info.plist`에 SDK 설정을 추가하고 Release 빌드를 만든다.
- iOS 번들을 게시·승격한 뒤 앱 재시작으로 변경 사항을 검증한다.

## 내용
### iOS 네이티브 설정
- iOS 디렉터리에서 CocoaPods 의존성을 설치한다.
- React Native 0.77 프로젝트의 `AppDelegate.swift`에 React Native Stallion을 import한다.
- `bundleURL` 함수가 Stallion이 관리하는 번들 URL을 반환하도록 바꾼다.
- `Info.plist`에 Android에서 사용한 것과 같은 프로젝트 ID와 앱 토큰을 추가한다.
- 강의에서는 Stallion 문서의 plist 예제에 누락된 `<string>` 시작 태그를 보완한다.

### Release 빌드
- Xcode의 `Product > Scheme > Edit Scheme`에서 Build Configuration을 `Release`로 바꾼다.
- 빌드 폴더를 정리한 뒤 릴리스 앱을 실행한다.
- 릴리스 번들은 소스의 즉석 변경을 반영하지 않으므로 OTA 적용 전후를 명확히 비교할 수 있다.

### iOS 번들 배포
- CLI 게시 명령의 플랫폼을 Android에서 iOS로 바꾸고 릴리스 노트를 지정한다.
- 대시보드의 iOS 번들을 앱 버전 `1.0` 대상으로 승격하고 롤아웃을 100%로 설정한다.
- 앱을 완전히 종료한 뒤 다시 열어 번들을 내려받고, 다시 재시작해 헤더 색상·문구·아이콘 변경을 확인한다.

## 예시
```bash
cd ios
pod install
```

```text
iOS OTA 확인: Release 빌드 → 변경 번들 게시 → iOS 번들 승격
→ 100% 롤아웃 → 앱 종료/재실행 → 변경 확인
```

## 요약
- iOS는 `AppDelegate.swift`, `Info.plist`, CocoaPods 설정이 핵심이다.
- Xcode Release 빌드에서 OTA 번들을 게시하고 버전별로 승격한다.
- 앱을 재시작해 다운로드된 JavaScript 번들이 실제로 적용되는지 확인한다.

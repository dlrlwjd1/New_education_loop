# Change App Icon iOS

## 개요
- 기본 앱 아이콘을 커스텀 아이콘으로 교체하는 방법 (iOS 편)
- appicon.co 사이트로 원본 `icon.png`에서 각 해상도의 아이콘 세트를 자동 생성
- 생성된 `AppIcon.appiconset` 폴더를 Xcode 에셋 폴더에 교체한 뒤 앱을 재빌드

## 내용

### 아이콘 세트 생성
1. 강의 리소스에서 `icon.png`를 다운로드한다.
2. https://appicon.co 에 접속해 아이콘 이미지를 업로드하고 Generate를 누른다.
3. 다운로드된 zip을 풀면 Android용과 iOS용 아이콘 폴더가 함께 들어 있다.

### iOS 프로젝트에 적용
- 생성된 iOS용 `AppIcon.appiconset` 폴더를 프로젝트의 다음 경로에 드래그 앤 드롭으로 넣고 Replace(교체)한다.
  - `ios/{앱이름}/Images.xcassets/AppIcon.appiconset`

### 재빌드
- 아이콘 교체는 네이티브 코드 변경이므로 저장만으로는 반영되지 않는다. 앱을 다시 실행해야 한다.

```bash
# 터미널 정리는 clear 또는 Cmd+K
yarn ios
```

- 빌드 완료 후 앱을 닫고 홈 화면을 보면 새 아이콘이 적용되어 있다.

## 요약
- appicon.co에서 `icon.png`로 iOS/Android 아이콘 세트를 생성한다.
- iOS는 `ios/{앱이름}/Images.xcassets/AppIcon.appiconset` 폴더를 통째로 교체한다.
- 네이티브 변경이므로 `yarn ios`로 재빌드해야 아이콘이 바뀐다.
- Android 아이콘 교체는 다음 강의에서 다룬다.

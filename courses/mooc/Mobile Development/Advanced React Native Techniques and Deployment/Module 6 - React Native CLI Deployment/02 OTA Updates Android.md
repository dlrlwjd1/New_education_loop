# OTA Updates Android

## 개요
- Stallion을 사용해 Android 릴리스 앱에 OTA(Over-the-Air) 업데이트를 배포한다.
- React Native Stallion SDK와 Android 네이티브 코드를 연결하고 프로젝트 ID·앱 토큰을 설정한다.
- 번들을 게시·승격한 뒤 앱 재시작으로 JavaScript 변경 사항이 적용되는지 확인한다.

## 내용
### OTA 업데이트
- OTA는 사용자가 Play Store에서 새 APK를 설치하지 않아도 JavaScript 번들을 갱신하는 방식이다.
- 버그 수정이나 작은 기능을 빠르게 전달할 수 있지만 네이티브 코드 변경은 새 스토어 빌드가 필요하다.

### Android 연동
- Stallion CLI와 `react-native-stallion` 패키지를 설치한다.
- React Native 0.77 프로젝트이므로 `MainApplication.kt`에 Stallion import와 JS 번들 경로 메서드를 추가한다.
- Stallion 대시보드에서 프로젝트와 버킷을 만든다.
- `android/app/src/main/res/values/strings.xml`에 프로젝트 ID와 앱 토큰을 넣고 `App.tsx` 내보내기를 Stallion 고차 컴포넌트로 감싼다.

### 게시와 롤아웃
- 릴리스 APK를 설치한 뒤 헤더 색상 같은 JavaScript UI를 변경한다.
- CLI에 로그인하고 조직/프로젝트/버킷 경로, Android 플랫폼, 릴리스 노트를 지정해 번들을 게시한다.
- 대시보드에서 앱 버전 `1.0`을 대상으로 번들을 승격하고 롤아웃을 100%로 설정한다.
- 앱을 종료하고 다시 열어 번들이 다운로드·적용되어 UI가 바뀌는지 확인한다.

## 예시
```text
검증 흐름
릴리스 APK 설치 → UI 색상 변경 → Android 번들 게시
→ 대상 앱 버전으로 승격 → 롤아웃 설정 → 앱 재시작 → 변경 확인
```

## 요약
- Stallion SDK를 Android 네이티브 진입점과 React Native 앱에 연결한다.
- 게시된 번들은 버전 승격과 롤아웃 설정을 거쳐 사용자에게 배포된다.
- OTA는 JavaScript 번들 변경에 적합하며 실제 릴리스 APK로 동작을 검증한다.

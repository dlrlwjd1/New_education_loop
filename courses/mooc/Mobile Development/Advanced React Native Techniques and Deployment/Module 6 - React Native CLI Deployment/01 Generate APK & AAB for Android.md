# Generate APK & AAB for Android

## 개요
- Android 배포용 APK(Android Package)와 AAB(Android App Bundle)의 차이를 이해한다.
- 업로드 키스토어를 만들고 Gradle 서명 설정에 연결한다.
- 릴리스 AAB와 APK를 생성하고 APK를 에뮬레이터에서 시험한다.

## 내용
### APK와 AAB
- APK는 Android 기기에 직접 설치하거나 다른 사람에게 전달할 수 있는 설치 파일이다.
- AAB는 Google Play가 기기별로 최적화된 APK를 생성할 때 사용하는 게시 형식이다.
- 두 형식의 서명 준비 과정은 같고 마지막 빌드 명령과 출력 위치가 다르다.

### 릴리스 서명 준비
- React Native의 Google Play 게시 문서에 따라 업로드 키스토어를 생성한다.
- 키스토어 파일을 `android/app`에 두고 `android/gradle.properties`에 별칭과 암호를 연결한다.
- `android/app/build.gradle`의 `signingConfigs`와 릴리스 빌드 타입에 서명 설정을 추가한다.
- 키스토어와 암호가 없으면 같은 앱의 후속 업데이트를 서명하기 어려우므로 안전하게 보관한다.

### 빌드와 확인
- AAB는 `android/app/build/outputs/bundle/release/app-release.aab`에서 확인한다.
- APK는 `android/app/build/outputs/apk/release/app-release.apk`에서 확인한다.
- 기존 앱을 제거한 뒤 릴리스 APK를 에뮬레이터에 설치해 정상 실행되는지 시험한다.

## 예시
```bash
# 프로젝트 루트: AAB 생성
npx react-native build-android --mode=release

# android 디렉터리: macOS/Linux에서 APK 생성
./gradlew assembleRelease

# Windows에서 APK 생성
gradlew.bat assembleRelease
```

## 요약
- APK는 직접 설치용, AAB는 Google Play 게시용이다.
- 릴리스 빌드 전에 키스토어와 Gradle 서명 구성을 완료한다.
- 키스토어와 암호를 안전하게 백업하고 결과물을 실제 기기나 에뮬레이터에서 검증한다.

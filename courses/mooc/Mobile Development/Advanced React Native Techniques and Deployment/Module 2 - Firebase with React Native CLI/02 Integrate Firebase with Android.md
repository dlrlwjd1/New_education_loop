# Integrate Firebase with Android

## 개요
- React Native CLI Android 앱에 Firebase를 연동한다 (React Native Firebase 라이브러리 사용).
- 흐름: Firebase 프로젝트 생성 → `@react-native-firebase/app` 설치 → SHA 지문 추출 → Firebase에 Android 앱 등록 → `google-services.json` 배치 → Gradle 설정 2줄 추가.
- `build.gradle`이 두 개(루트/`android`와 `android/app`) 있으므로 각 설정을 올바른 파일에 넣어야 한다.

## 내용
### Firebase 프로젝트 생성
- 구글에서 "React Native Firebase"를 검색해 공식 문서로 이동한다.
- Firebase 콘솔에서 Create a project → 프로젝트 이름 입력(예: chatty) → 계속 → Analytics용 기본 계정(default account) 선택 → 프로젝트 생성.

### 라이브러리 설치
- 문서의 설치 안내 중 Expo CLI용이 아닌 **React Native CLI용** 부분으로 스크롤한다.
- npm이 아닌 Yarn을 사용하므로 Yarn 명령을 복사해 설치한다.

### SHA 인증서 지문(SHA certificate fingerprints) 추출
- 문서의 명령을 실행해 SHA 지문을 얻는다 (`cd android && ./gradlew signingReport`).
- 출력된 SHA 값들은 서로 같으며, 지금 것은 **디버그 키스토어(debug keystore)** 용이다. 나중에 프로덕션용 키스토어(keystore)를 만들면 그때 프로덕션 SHA를 다시 생성한다.
- 아무거나 하나 복사해 둔다 (곧 필요함).

### Firebase에 Android 앱 등록
1. Firebase 콘솔에서 Android 아이콘을 눌러 앱 추가.
2. **패키지 이름(package name)**: `MainApplication.kt` 등에 있는 자신의 번들 ID와 **정확히 일치**해야 한다. 여러 곳에 있으므로 복사해서 붙여넣는 것이 안전하다. (각자 자신의 번들 ID를 사용)
3. **앱 닉네임(nickname)**: Firebase 콘솔에 표시될 이름 (예: Shadi Android).
4. **SHA**: 터미널에서 복사한 디버그 SHA를 붙여넣는다.
5. Register app을 누른다.

### google-services.json 배치
- `google-services.json`을 다운로드한 뒤 VS Code에서 `android/app` 폴더 안으로 드래그 앤 드롭한다.
- 파일 내용은 각자 다르지만 파일명은 동일하게 `google-services.json`이다.

### Gradle 설정 (2줄)
- 프로젝트에는 `build.gradle`이 두 개 있다: **루트 `android/build.gradle`** 과 **`android/app/build.gradle`** — 혼동하지 않도록 주의.
1. **classpath 라인**: 루트 `android/build.gradle`에 추가한다 (app 폴더 것이 아님).
2. **apply plugin 라인** (`com.google.gms.google-services`): `android/app/build.gradle` 상단에 추가한다.

### 실행 확인
- `cd ..`로 루트로 돌아가 `yarn android`를 실행한다 (android 폴더에 있었기 때문. 새 터미널이면 `cd ..` 불필요).
- 하단에 경고(warning)가 없으면 Firebase가 Android 앱에 성공적으로 연결된 것이다.

## 예시
```bash
# React Native Firebase 설치
yarn add @react-native-firebase/app

# SHA 인증서 지문 확인 (디버그용)
cd android
./gradlew signingReport

# 루트로 돌아가 실행
cd ..
yarn android
```

```gradle
// android/build.gradle (루트) — buildscript dependencies에 추가
classpath 'com.google.gms:google-services:4.4.2'
```

```gradle
// android/app/build.gradle — 상단에 추가
apply plugin: 'com.google.gms.google-services'
```

## 요약
- `@react-native-firebase/app`을 Yarn으로 설치하고 Firebase 콘솔에 Android 앱을 등록한다.
- 패키지 이름은 앱의 번들 ID와 정확히 일치해야 하며, 디버그 SHA 지문도 함께 등록한다.
- `google-services.json`은 `android/app` 폴더에 넣는다.
- classpath는 루트 `android/build.gradle`에, apply plugin은 `android/app/build.gradle`에 추가한다.
- `yarn android` 실행 후 경고가 없으면 연동 성공이다.

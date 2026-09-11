# Mac Android Environment Setup

## 개요
- macOS에서 Android용 React Native CLI 개발 환경을 설정한다.
- 대부분의 단계(Node, Watchman, JDK, Android Studio)는 이전에 이미 완료했기 때문에 iOS보다 쉽다.
- 새로 하는 작업은 `.zshrc` 파일에 환경 변수(environment variable)를 추가하는 것 정도다.

## 내용
### 설치 단계
1. **Node와 Watchman**: iOS 설정과 공유되는 단계로, 이전 강의에서 이미 설치했다.
2. **Java Development Kit (JDK)**: 문서의 명령을 복사해 터미널에서 실행한다. 섹션 1에서 Expo를 시작할 때 이미 Java 17을 설치했으므로 다시 설치할 필요는 없다.
3. **환경 변수 설정**: `.zshrc` 파일에 문서에 나온 환경 변수(export 라인, Java/Android 관련 경로)를 추가해야 한다.
   - 터미널에서 `.zshrc` 파일을 열고(강사는 `code`로 여는 것을 선호), 문서의 export 라인을 복사해 붙여넣은 뒤 저장한다.
4. **Android Studio**: 다운로드해서 설치하고 아래 항목이 설치되어 있는지 확인한다. (이전에 Android 에뮬레이터를 만들 때 모두 완료함)
   - Android SDK
   - Android SDK Platform
   - Android Virtual Device

## 예시
```bash
# .zshrc 파일을 VS Code로 열기
code ~/.zshrc
```

```bash
# .zshrc에 추가하는 환경 변수 (React Native 공식 문서의 export 라인)
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

## 요약
- Android 환경 설정은 Node/Watchman(공유), JDK(Java 17, 기설치), 환경 변수 추가, Android Studio(기설치) 확인으로 구성된다.
- 실질적으로 새로 하는 작업은 `.zshrc`에 환경 변수 export 라인을 추가하고 저장하는 것이다.
- Android SDK, Android SDK Platform, Android Virtual Device가 설치되어 있는지 Android Studio에서 확인한다.

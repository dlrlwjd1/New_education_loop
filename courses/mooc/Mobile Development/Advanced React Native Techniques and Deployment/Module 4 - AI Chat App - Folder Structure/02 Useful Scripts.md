# Useful Scripts

## 개요
- `package.json`의 scripts에 반복 명령을 등록해 타이핑 시간을 절약하는 방법
- Gradle 정리, pod 설치, node_modules 재설치 등 자주 쓰는 긴 명령을 짧은 스크립트로 정의
- 스크립트 이름은 자유롭게 정할 수 있으며 필요할 때마다 추가하면 됨

## 내용

### scripts의 동작 원리
- `package.json`의 `scripts`에는 기본적으로 5개의 스크립트가 있고, `yarn android`는 `react-native run-android`를 실행하는 스크립트다.
- 스크립트 이름을 예컨대 `a`로 바꾸면 `yarn android`는 "command not found"가 되고 `yarn a`로 실행된다. 즉 이름은 임의로 지을 수 있다.

### 추가한 유용한 스크립트
- `both` — Android와 iOS를 한 번에 실행
- `gcrun` — Gradle clean 후 Android 실행 (g=gradle, c=clean, run)
- `gclean` — Gradle clean만 수행
- `pod` — iOS 폴더로 가서 pod install 후 루트로 복귀 (새 패키지 설치 시 사용)
- `xcode` — `xed -p`로 프로젝트를 Xcode에서 열기
- `newblood` — 캐싱 문제나 앱이 멈추는 문제 등 node_modules 관련 문제가 있을 때: node_modules, yarn.lock, ios/Podfile.lock을 모두 삭제하고 의존성과 pods를 재설치

## 예시

```json
{
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "both": "react-native run-android && react-native run-ios",
    "gcrun": "cd android && ./gradlew clean && cd .. && react-native run-android",
    "gclean": "cd android && ./gradlew clean && cd ..",
    "pod": "cd ios && pod install && cd ..",
    "xcode": "xed -p ios",
    "newblood": "rm -rf node_modules && rm -rf yarn.lock && cd ios && rm -rf Podfile.lock && cd .. && yarn install && cd ios && pod install && cd .."
  }
}
```

```bash
yarn both     # Android + iOS 동시 실행
yarn gcrun    # Gradle clean 후 Android 실행
yarn gclean   # Gradle clean만
yarn pod      # iOS pods 설치
yarn xcode    # Xcode로 프로젝트 열기
yarn newblood # node_modules/yarn.lock/Podfile.lock 삭제 후 전체 재설치
```

## 요약
- `package.json` scripts에 긴 반복 명령을 짧은 이름으로 등록하면 `yarn {이름}`으로 실행할 수 있다.
- 새 패키지 설치 후에는 `yarn pod`, Android 빌드 문제 시 `yarn gcrun`/`yarn gclean`, 캐시·의존성 문제 시 `yarn newblood`를 사용한다.
- 스크립트 이름은 자유이며, 유용한 명령이 생길 때마다 추가하면 된다.

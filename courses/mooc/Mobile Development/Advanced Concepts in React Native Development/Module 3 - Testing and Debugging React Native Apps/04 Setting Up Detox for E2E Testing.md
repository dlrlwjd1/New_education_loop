# Setting Up Detox for E2E Testing

## 개요

- React Native 앱의 실제 사용자 흐름을 자동화하는 Detox E2E(end-to-end) 테스트를 소개한다.
- Android 에뮬레이터용 설치, 네이티브 빌드와 설정 흐름을 설명한다.

## 내용

### Detox의 역할

Detox는 버튼 탭, 텍스트 입력과 화면 이동을 자동화해 앱 전체 흐름을 검증하는 gray-box 테스트 도구다. 앱이 비동기 작업을 마치고 idle 상태가 될 때까지 동기화해 불안정한 테스트를 줄인다.

### 프로젝트 준비

강의는 Detox CLI와 프로젝트 dev dependency를 설치하고 초기 설정을 만든다. Expo 프로젝트에 네이티브 폴더가 없다면 `npx expo prebuild`를 실행한다. Detox 설정에는 빌드 명령, 바이너리 경로와 Android AVD 이름을 지정한다.

## 예시

```bash
npm install --save-dev detox jest-circus
npx expo prebuild
npx detox init
emulator -list-avds
```

```bash
npx detox build --configuration android.emu.debug
npx detox test --configuration android.emu.debug
```

## 요약

- Detox는 에뮬레이터·기기에서 사용자 흐름 전체를 검증한다.
- 실행 전 네이티브 프로젝트, 빌드 설정과 대상 기기를 맞춰야 한다.
- CI에서도 동일한 빌드·테스트 명령을 자동화할 수 있다.

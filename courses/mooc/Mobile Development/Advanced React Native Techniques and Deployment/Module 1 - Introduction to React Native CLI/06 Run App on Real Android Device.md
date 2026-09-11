# Run App on Real Android Device

## 개요
- 실제 Android 기기에서 React Native 앱을 실행하는 방법을 배운다.
- 기기에서 개발자 모드(developer mode)와 USB 디버깅(USB debugging)을 활성화한 뒤, `adb devices`로 연결을 확인하고 앱을 실행한다.
- 로그(log)는 Metro에서 `j` 키를 눌러 DevTools를 열어 확인한다.

## 내용
### 개발자 모드 활성화
1. 기기의 설정(Settings) → 내 휴대전화(My phone) 항목으로 이동한다. 폰에 따라 "About phone(휴대전화 정보)" 등 메뉴 이름이 다를 수 있다.
2. 아래로 스크롤해 **빌드 번호(build number)**를 찾고 여러 번 연속으로 누른다 → "You are now a developer" 메시지와 함께 개발자 모드가 활성화된다.
3. 설정 → 시스템(System) → **개발자 옵션(developer options)**이 새로 보인다. 개발자 모드를 켜기 전에는 이 메뉴가 보이지 않는다.

### USB 디버깅 활성화
- 개발자 옵션에서 아래로 스크롤해 **USB debugging**을 찾아 활성화하고 확인을 누른다.

### 앱 실행
- 터미널에서 `adb devices`를 입력하면 연결된 기기 번호가 보인다.
- `yarn android`로 실행한다. Yarn을 아직 설치하지 않았다면 `npx react-native run-android`를 사용해도 된다 (강사는 Yarn 사용을 선호).
- 실행하면 실제 기기에 앱이 로드되어 표시된다.

### 로그 확인
- 로그가 Metro 터미널에서 DevTools로 이동했다는 안내가 나온다.
- 터미널에서 `j`를 누르면 DevTools가 열리고, 여러 앱이 있으면 번호(1 또는 2)로 자기 앱의 패키지 이름(예: `com....chat`)을 선택해 로그를 확인한다.

## 예시
```bash
# 연결된 기기 확인
adb devices

# 실기기에서 앱 실행 (Yarn)
yarn android

# Yarn이 없다면
npx react-native run-android
```

## 요약
- 빌드 번호를 여러 번 눌러 개발자 모드를 켜고, 개발자 옵션에서 USB 디버깅을 활성화한다.
- `adb devices`로 기기 연결을 확인한 뒤 `yarn android`(또는 `npx react-native run-android`)로 실기기에서 실행한다.
- 로그는 Metro 터미널에서 `j`를 눌러 DevTools를 열고 앱을 선택해 확인한다.

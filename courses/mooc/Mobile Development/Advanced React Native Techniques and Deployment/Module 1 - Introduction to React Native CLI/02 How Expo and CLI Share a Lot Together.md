# How Expo and CLI Share a Lot Together

## 개요
- React Native CLI와 Expo CLI는 매우 많은 부분을 공유하며, 이전 섹션에서 배운 내용의 약 90% 이상을 그대로 사용할 수 있다.
- 차이가 나는 지점은 프로젝트 생성/실행 방법, 아이콘 라이브러리, 패키지 설치 명령, 커스텀 폰트, Firebase 연동 정도다.
- 이 섹션부터는 Expo를 더 이상 사용하지 않고 React Native CLI만 사용한다.

## 내용
### 섹션별 공통점과 차이점
- **섹션 1 (환경 설정)**: iOS 시뮬레이터(simulator), Android 에뮬레이터(emulator), 환경 설정 등 대부분 그대로 사용 가능. 차이는 **앱 생성(create)과 실행(run) 방법**뿐이다.
- **섹션 2 (UI)**: 완전히 동일. SafeAreaView, Text, StyleSheet, 이미지, 버튼, 반응형(responsive), position, Dimensions 등 Expo에서 배운 코드를 그대로 구현할 수 있다.
  - 유일한 예외: **Expo Icons는 사용할 수 없다.** React Native CLI에서는 `react-native-vector-icons` 라이브러리를 대신 사용한다.
- **섹션 3 (내비게이션과 하단 탭)**: 코드가 완전히 동일. 유일한 차이는 패키지 설치 방식 — Expo에서는 `npx expo install`을 쓰지만 React Native CLI에서는 `npm`으로 설치한다.
- **섹션 4 (axios로 API 다루기)**: GET, POST, DELETE 요청 등 axios로 API를 다루는 방법이 완전히 동일하다.
- **섹션 5 (Redux와 Redux Toolkit)**: Expo, React Native CLI, 그리고 React JS(웹)에서까지 동일하게 사용할 수 있다.
- **스마트 이커머스(smart e-commerce) 섹션**: 대부분 그대로 구현 가능하되 **커스텀 폰트(custom fonts) 추가 방식이 다르다** — React Native CLI에서는 Expo Fonts를 사용하지 않는다. 프로젝트 생성 방법도 다르다.
- **상태 관리(state management)**: useState, Redux, Redux Toolkit, React Query 등 전역 상태(global state) 관리 방식이 완전히 동일하다. 폼 핸들링(form handling)도 동일하다.
- **Firebase**: React Native CLI에서는 다르다 — Firebase 패키지(Firebase app)를 사용해 Android와 iOS에 각각 별도로 연동(link)해야 한다.
- **로컬라이제이션(localization)**: Expo와 React Native CLI에서 동일하다.

### 결론
- React Native CLI는 새롭거나 어려운 것이 아니다. Expo가 CLI보다 단순할 뿐이며 둘은 많은 것을 공유한다.
- 이 섹션부터는 React Native CLI만 사용한다.

## 요약
- 이전 섹션에서 배운 내용의 90% 이상을 React Native CLI에서 그대로 재사용할 수 있다.
- 다른 점: 프로젝트 생성/실행, 아이콘(`react-native-vector-icons` 사용), 패키지 설치(npm), 커스텀 폰트, Firebase 연동(Android/iOS 별도 링크).
- 같은 점: UI 코드, 내비게이션, axios API 호출, Redux/Redux Toolkit, 상태 관리, 폼 핸들링, 로컬라이제이션.

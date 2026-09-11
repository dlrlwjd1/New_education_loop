# React Native Development Environment Overview

## 개요
- React Native 개발 환경(development environment) 설정에는 두 가지 선택지가 있다: Expo Go Quickstart와 React Native CLI Quickstart
- 모바일 개발 초보자에게는 Expo Go가 가장 쉬운 시작 방법이고, 모바일 개발 경험자라면 React Native CLI가 나을 수 있다
- 이 코스에서는 Expo Go 설치만으로 충분하다

## 내용
### 두 가지 설치 옵션
React Native 웹사이트의 "Setting up the development environment" 페이지에는 두 옵션이 있다.

- **Expo Go Quickstart**: 초보자에게 가장 쉬운 방법. 이 코스를 진행하는 데 필요한 모든 것이 포함되어 있으며, React Native CLI 설치에 따라오는 모든 패키지가 필요하지 않다.
- **React Native CLI Quickstart**: 이미 모바일 개발에 익숙한 경우 더 나은 선택일 수 있다.

### Expo Go 설정
필요한 것은 Node 설치와 VSCode 같은 IDE뿐이다. IDE의 터미널에서 페이지에 안내된 명령을 실행하면 되고, 약 5분 정도 걸리는 빠른 과정이다.

### React Native CLI 설정
여러 단계의 선택이 필요하다.

1. **개발 OS(development OS)** 선택: macOS, Windows, Linux 중 자신의 머신에 맞게 선택
2. **타깃 OS(target OS)** 선택: Android 또는 iOS. 선택에 따라 다른 설치 지침이 제공된다
   - 교차 플랫폼 개발자라면 둘 다 설치할 수 있다
   - 단, iOS 개발은 macOS에서만 가능하다. Mac이 있으면 Android·iOS 둘 다 설정할 수 있지만, Windows 머신이라면 Android만 설정해야 한다
3. **의존성(dependencies) 설치**:
   - Android 선택 시: 필요한 의존성 목록과 함께 Android Studio 설치 단계가 안내된다
   - iOS 선택 시: 다른 의존성 목록과 함께 Xcode 설치가 안내된다

React Native CLI 방식은 실행 준비까지 약 1시간 정도 걸린다.

## 예시
해당 없음 (환경 설정 개요 강의)

## 요약
- Expo Go: Node + IDE(VSCode)만 있으면 약 5분 만에 설정 완료. 이 코스에는 이것으로 충분하다.
- React Native CLI: 개발 OS와 타깃 OS를 선택하고 Android Studio(Android) 또는 Xcode(iOS)를 설치하며 약 1시간 소요.
- iOS 개발은 macOS에서만 가능하고, Windows에서는 Android만 설정할 수 있다.

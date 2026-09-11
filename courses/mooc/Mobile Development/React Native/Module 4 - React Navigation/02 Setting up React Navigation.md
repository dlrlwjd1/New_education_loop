# Setting up React Navigation

## 개요
- React Navigation 공식 문서(Getting Started 섹션)를 통해 설치 전 요구사항을 확인한다.
- 최소 요구사항: React Native 0.63 이상, Expo 41 이상, TypeScript 사용 시 4.1.0 이상.
- 코어 패키지 설치 후 의존 라이브러리(react-native-screens, react-native-safe-area-context)를 추가로 설치한다.

## 내용

### 최소 요구사항
- React Native 버전 0.63 이상
- Expo를 사용하는 경우 버전 41 이상
- Expo와 TypeScript 모두 React Navigation과 호환된다.
  - Expo는 모바일 앱 개발 플랫폼이고, TypeScript는 React·React Native 라이브러리를 지원하는 JavaScript 기반 언어다.
- TypeScript를 함께 사용하는 경우 버전 4.1.0 이상이어야 한다.

### 설치 절차
1. 코어 유틸리티 설치 — 내비게이터(navigator) 설정에 사용되는 핵심 패키지를 설치한다.
2. 의존 라이브러리 설치 — React Navigation이 의존하는 라이브러리를 프로젝트 유형에 따라 설치한다.
   - Expo 프로젝트: `npx expo install`로 react-native-screens와 react-native-safe-area-context를 설치한다.
   - 순수(barebone) React Native 프로젝트: `npm install`로 직접 설치한다.
3. 이후 사용할 내비게이터에 따라 개별 내비게이터 패키지를 추가로 설치하게 된다.

## 예시

```bash
# 1. 코어 유틸리티 설치
npm install @react-navigation/native

# 2-a. Expo 프로젝트인 경우
npx expo install react-native-screens react-native-safe-area-context

# 2-b. 순수 React Native 프로젝트인 경우
npm install react-native-screens react-native-safe-area-context
```

## 요약
- React Navigation 설치 전 React Native 0.63+, Expo 41+, TypeScript 4.1.0+ 요구사항을 확인한다.
- `npm install @react-navigation/native`로 코어 유틸리티를 설치한다.
- Expo 프로젝트는 `npx expo install`, 일반 프로젝트는 `npm install`로 react-native-screens와 react-native-safe-area-context를 설치한다.
- 사용할 내비게이터별 패키지는 이후에 추가로 설치한다.

# What are React Native Components?

## 개요
- 컴포넌트(component)는 UI를 독립적이고 재사용 가능한 조각으로 나누는 기본 빌딩 블록이며, React Native도 React 기반이므로 같은 개념을 따른다
- React Native 컴포넌트는 크게 세 가지로 분류된다: 코어 컴포넌트(core components), 커뮤니티 컴포넌트(community components), 네이티브 컴포넌트(native components)
- 코어 컴포넌트는 네이티브 iOS·Android 컴포넌트로 자동 변환(translate)되므로 특수한 코드 없이 기기의 네이티브 기능을 활용한다

## 내용
### 컴포넌트란
React에서 UI를 만드는 기본 빌딩 블록은 컴포넌트다. 컴포넌트는 UI를 독립적이고 재사용 가능한(reusable) 조각으로 나눌 수 있게 하며, 이 독립적인 조각들을 모으면 완전한 앱이 만들어진다. React Native도 React로 만들어졌기 때문에 같은 개념이 적용된다. 앞서 만든 WelcomeApp처럼 개발자가 직접 만드는 컴포넌트를 React 컴포넌트라 하며, 헤더(header), 푸터(footer), 메뉴 바, 이미지 등 재사용 가능한 여러 컴포넌트를 개발해 하나의 완전한 모바일 앱으로 조합한다.

### 코어 컴포넌트 (core components)
- React Native 패키지에 포함되어 있어 추가 패키지 설치가 필요 없다.
- 예: `View`, `Text`, `Image`, `TextInput`, `ScrollView` 등.
- 바로 사용할 수 있는 네이티브 컴포넌트이며, **네이티브 iOS·Android 컴포넌트로 변환**된다. 즉 특수한 코드 없이 기기의 네이티브 기능에 맞게 동작한다. JavaScript에서 네이티브 모바일 코드로의 변환은 React Native가 알아서 처리한다. 이것이 React Native를 쓰는 목적 그 자체다.

### 커뮤니티 컴포넌트 (community components)
- React Native가 오픈 소스화된 뒤 커뮤니티가 만들어 공유하는 컴포넌트다. 코어 컴포넌트에 더해 사용할 수 있다.
- 예: React Navigation, React Native Screens, React Native Maps, React Native Video 등.
- React Native는 커뮤니티 컴포넌트에 크게 의존하므로 원본 패키지 자체는 매우 가볍다(lean). 앱의 필요에 따라 골라 쓸 수 있다.
- 예를 들어 화면 간 내비게이션(navigation)은 코어 컴포넌트가 아니며, 원하는 내비게이션 라이브러리를 선택해 추가할 수 있다. 기존 컴포넌트를 수정하거나 직접 만들어 오픈 소스로 커뮤니티에 공개할 수도 있다.

### 네이티브 컴포넌트 (your native components)
- 앱의 고유한 요구에 따라 직접 만드는 커스텀 iOS/Android 컴포넌트다.
- 네이티브 코드로 작성한다: iOS는 Swift·Objective-C, Android는 Java·Kotlin.
- 주로 네이티브 모바일 개발 경험자가 만들지만, 대부분의 경우 코어·커뮤니티 컴포넌트가 대부분의 사용 사례를 충족하므로 직접 만들 일은 드물다.
- 만들었다면 오픈 소스로 공개해 커뮤니티 컴포넌트로 기여할 수도 있다.

## 예시
해당 없음 (개념 강의 — 앞 강의의 WelcomeApp 컴포넌트를 재사용 가능한 UI 조각의 예로 언급)

## 요약
- 컴포넌트는 독립적이고 재사용 가능한 UI 조각이며, 이들을 조합해 완전한 앱을 만든다.
- 코어 컴포넌트(View, Text, Image, TextInput, ScrollView 등)는 React Native에 내장되어 있고 네이티브 코드로 자동 변환된다.
- 커뮤니티 컴포넌트(React Navigation 등)는 필요에 따라 설치해 쓰며, 덕분에 React Native 본체는 가볍다.
- 커스텀 네이티브 컴포넌트는 Swift/Objective-C/Java/Kotlin으로 직접 만들 수 있지만 대부분은 필요 없다.

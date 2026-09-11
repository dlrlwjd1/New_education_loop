# What is React Navigation?

## 개요
- 모바일 앱에서 화면 간 이동을 내비게이션(navigation) 또는 라우팅(routing)이라고 한다.
- React Native에는 내장 내비게이션이 없어 별도의 내비게이션 라이브러리를 선택해야 한다.
- React Navigation은 현재 가장 인기 있는 React Native 내비게이션 라이브러리로, 사용이 쉽고 커스터마이즈가 가능하며 iOS·Android 플랫폼별 컴포넌트를 제공한다.

## 내용

### React Navigation이란
- 모바일 앱은 여러 화면으로 구성되며, 사용자 경험은 화면 간의 매끄러운 이동에 달려 있다.
- React Native 자체에는 내비게이션이 내장되어 있지 않으므로 모든 개발자가 라이브러리를 골라야 한다.
- React Navigation은 오픈소스(open-source) 라이브러리로 커뮤니티의 신뢰를 받고 있으며, React Native CLI 앱과 Expo 기반 앱 모두에서 사용할 수 있다.

### 네이티브 스택 내비게이터와 히스토리 관리
- 네이티브 스택 내비게이터(Native Stack Navigator)를 제공해 화면 전환과 내비게이션 히스토리(navigation history)를 관리한다.
- 히스토리는 사용자가 이전 화면으로 돌아갈 때 필요하다.
- 개발자는 내부 동작이나 히스토리 유지 방식을 직접 배울 필요 없이 React Navigation API만 사용하면 된다.

### 웹 브라우저 라우팅과의 차이
- 웹 브라우저에서는 링크를 눌러 새 페이지로 이동하고, 뒤로 가기 버튼을 누르면 히스토리 스택(stack)의 맨 위에서 페이지를 꺼내(pop) 이전 페이지로 돌아간다.
- React Native에는 이런 개념이 내장되어 있지 않으며, React Navigation이 화면 이동과 히스토리 관리를 제공한다.
- React Navigation은 iOS와 Android에서 기대되는 제스처(gesture)와 애니메이션(animation)을 제공한다.

### 구현 방식과 장점
- 일부 애니메이션과 제스처는 네이티브 라이브러리를 사용한다.
  - screens: 네이티브 내비게이션 컨테이너 컴포넌트 제공
  - gesture handler: 네이티브 터치·제스처 시스템과의 호환성 향상
- 많은 UI 컴포넌트가 React Native 프리미티브(primitives) 위에서 JavaScript로 작성되어 있다.
- 그 덕분에 무선으로 전송되는 OTA 업데이트(over-the-air updates)를 배포하기 쉽고, 디버깅이 쉬우며, 내비게이터 컴포넌트를 커스터마이즈할 수 있다.
- 스택(stack), 탭(tab), 드로어(drawer) 등 내장 내비게이터를 제공하며, 네이티브 코드 없이 원하는 모양과 느낌의 커스텀 내비게이터를 만들 수도 있다.
- 내비게이터는 전부 JavaScript로 작성되어 플랫폼 내비게이션 위에 구현되므로, 사용 사례에 맞는 내비게이터를 선택하면 된다.

### 트레이드오프(trade-offs)
- 일부 내비게이터는 iOS·Android의 네이티브 내비게이션 API를 직접 사용하지 않는다. 이는 커스터마이즈를 가능하게 하려는 의도적 선택이다.
  - 네이티브 iOS/Android 경험과 동일한 내비게이션을 원한다면 네이티브 스택 내비게이터(native stack navigator)만 사용해야 한다.
- 버전 업그레이드 시 브레이킹 체인지(breaking changes)가 발생할 수 있어, 이전 API를 사용하는 코드가 동작하지 않을 수 있다.

### 대안 라이브러리
- react-native-router-flux
- react-native-navigation
- Little Lemon 앱에서는 React Navigation 라이브러리를 사용한다.

## 예시
해당 없음 (개념 소개 강의)

## 요약
- React Native에는 내비게이션이 내장되어 있지 않으며, React Navigation이 가장 널리 쓰이는 라이브러리다.
- 네이티브 스택 내비게이터로 화면 전환과 히스토리를 관리하고, iOS·Android에 맞는 제스처와 애니메이션을 제공한다.
- 스택·탭·드로어 내비게이터가 내장되어 있고, 네이티브 코드 없이 커스텀 내비게이터도 만들 수 있다.
- 트레이드오프: 일부 내비게이터는 네이티브 API를 직접 쓰지 않으며, 버전 업그레이드 시 브레이킹 체인지가 있을 수 있다.

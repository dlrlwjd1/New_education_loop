# Native, cross-platform & hybrid developer roles

## 개요
- 모바일 개발자의 세 가지 역할 유형: 네이티브(native), 교차 플랫폼(cross-platform), 하이브리드(hybrid) 개발자
- 네이티브 개발은 플랫폼 하나(iOS 또는 Android)에 특화되며, 각각 요구되는 언어와 기술이 완전히 다름
- React Native는 가장 인기 있는 교차 플랫폼 프레임워크 중 하나로, 하나의 코드베이스로 네이티브 iOS·Android 앱을 만든다

## 내용
### 네이티브 개발자 (native developer)
네이티브 개발은 가장 전통적인 모바일 앱 개발 방식이다. 네이티브 앱은 특정 플랫폼(iOS, Android, Windows 등) 전용으로 만들어진 앱이다. 네이티브 개발자는 하나의 플랫폼을 골라 전문화해야 하며, iOS와 Android를 모두 만드는 네이티브 개발자는 거의 없다. 두 플랫폼의 기술 스택이 완전히 다르기 때문이다.

- **iOS 네이티브 개발**: Swift 또는 Objective-C를 사용한다. 이 언어들은 iOS 앱 전용이라 Apple 생태계 밖에서는 쓸모가 적다. 개발에는 MacBook이 필요하다.
- **Android 네이티브 개발**: Java 또는 Kotlin을 사용한다. Android는 오늘날 사용자 수가 가장 많아 탄탄한 커리어 경로다. Kotlin은 오픈 소스 언어로 Android 전용은 아니다.

### 교차 플랫폼 개발자 (cross-platform developer)
교차 플랫폼 네이티브 앱은 하나의 코드베이스(single codebase)로 여러 플랫폼용 앱을 만드는 방식이며 점점 인기가 높아지고 있다. 하나의 코드베이스를 유지하면서 네이티브 iOS 앱과 네이티브 Android 앱을 동시에 만들 수 있다. 이런 개발자를 iOS/Android 개발자 대신 교차 플랫폼 모바일 개발자라고 부른다.

- **React Native**: 가장 인기 있는 교차 플랫폼 모바일 프레임워크 중 하나. Meta가 개발해 2015년 오픈 소스로 공개했다. JavaScript와 React로 만들어졌으며, 전적으로 JavaScript로 코딩해 네이티브 iOS·Android 앱을 만든다. JavaScript는 웹 개발에서도 널리 쓰이므로 React Native 밖에서도 유용하다.
- **다른 프레임워크**: Flutter, Xamarin 등도 교차 플랫폼 네이티브 앱을 만들 수 있다. 이들은 더 큰 유연성과 제어력 같은 이점이 있을 수 있지만, React Native는 더 큰 컴포넌트 라이브러리를 갖고 있어 사전 구축된(pre-built) 요소로 작업하기 쉽다.

### 하이브리드 개발자 (hybrid developer)
하이브리드 앱은 또 다른 범주의 교차 플랫폼 앱이다. React Native나 Flutter로 만든 앱과 달리, 하이브리드 앱은 기기의 내장 네이티브 기능에 직접 접근하지 못하고 Cordova 같은 외부 플러그인(plugin)으로 네이티브 기능을 통합한다. 그래픽 요소를 브라우저를 통해 렌더링하므로 화면에 컴포넌트가 표시되기까지 여러 단계를 거친다. 본질적으로 웹 뷰(web view)다.

## 예시
해당 없음 (개념 강의)

## 요약
- 네이티브 개발자는 iOS(Swift/Objective-C) 또는 Android(Java/Kotlin) 중 한 플랫폼에 전문화한다.
- 교차 플랫폼 개발자는 하나의 코드베이스로 여러 플랫폼의 네이티브 앱을 만든다 (React Native, Flutter, Xamarin).
- 하이브리드 앱은 브라우저(웹 뷰)로 렌더링하고 Cordova 같은 플러그인으로 네이티브 기능을 붙인다.
- 이 코스를 마치면 React Native로 두 번 코딩하지 않고 iOS·Android 모두에서 동작하는 앱을 만드는 교차 플랫폼 개발자가 된다.

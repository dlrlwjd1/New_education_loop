# What is Expo?

## 개요
- Expo는 React Native로 교차 플랫폼 네이티브 앱을 만들기 위한 오픈 소스 플랫폼으로, React Native 위에 추상화 계층(layer of abstraction)을 더한다
- 최소한의 설정으로 몇 분 안에 시작할 수 있어 모바일 개발 초보자에게 특히 적합하다
- OTA(Over The Air) 업데이트와 다양한 내장 네이티브 API가 장점이지만, 모든 API를 지원하지 않고 앱 크기가 커질 수 있다는 주의점이 있다

## 내용
### Expo란
Expo는 React Native로 교차 플랫폼 네이티브 앱을 만드는 데 사용되는 오픈 소스 플랫폼이다. React Native 앱 위에 추상화 계층을 추가하고, React Native용으로 만들어진 도구를 제공해 몇 분 안에 큰 어려움 없이 설정을 끝낼 수 있다.

React Native CLI를 쓰든 Expo CLI를 쓰든 JavaScript와 React로 React Native 코드를 작성하는 것은 같다. 다만 Expo에서는 Swift, Java, Kotlin 같은 네이티브 iOS/Android 코드를 전혀 만지지 않는다. Expo가 네이티브 코드를 React Native 코드와 자동으로 호환되게 만들며, 이 네이티브 코드는 개발자에게 노출되지 않는다.

### OTA (Over The Air) 업데이트
모든 코드가 JavaScript이므로 언제든지 OTA로 앱 업데이트를 푸시할 수 있다. 업데이트를 게시하는 데 앱 스토어 승인이 필요 없다. 보통 개발자는 앱 스토어 승인을 며칠씩 기다리는데, Expo에서는 버튼 하나로 게시(publish)하면 새 버전이 사용자에게 즉시 제공된다.

### 내장 네이티브 API
카메라(camera), 파일 시스템(file systems), 위치 서비스(location services), 푸시 알림(push notifications) 등 iOS·Android용 네이티브 API가 Expo 생태계(ecosystem)에 이미 포함되어 있다.

### 주의점 (cautions)
- **모든 API를 지원하지 않음**: Expo는 많은 기기 API를 지원하지만 전부는 아니다. 사용 전 API 문서를 확인해야 한다.
- **커스텀 네이티브 모듈**: React Native CLI로 만들면 네이티브 코드에 접근할 수 있어 커스텀 네이티브 컴포넌트를 직접 추가할 수 있다. Expo에서는 커스텀 네이티브 모듈 추가에 더 많은 단계가 필요하다(불가능하지는 않음).
- **앱 크기**: Expo에는 쓰지 않을 수도 있는 여러 패키지와 API가 포함되므로, 앱을 극도로 가볍게(lean) 유지하려면 최선의 선택이 아닐 수 있다.
- **이젝트(eject)**: Expo 앱에서 언제든 이젝트할 수 있다. 예를 들어 6개월 뒤 Expo 없이 하는 편이 나은 요구사항이 생기면 Expo 생태계에서 앱을 이젝트할 수 있다. 단, Expo 생태계 밖 라이브러리를 쓰도록 일부 코드를 리팩터링(refactoring)해야 하는 비용이 따른다.

주의점이 있어도 Expo는 모바일 개발에 처음 입문하는 초보자에게 강력히 추천된다. 모바일 개발의 고충(pain points)으로부터 보호해 학습 여정을 덜 힘들게 하며, 여전히 React Native 앱을 만드는 가장 빠른 방법이다.

## 예시
해당 없음 (개념 강의)

### 장단점 정리
| 장점 (pros) | 주의점 (cons) |
|---|---|
| 설정이 쉽다 | 모든 iOS/Android API가 포함되지는 않음 |
| iOS/Android 네이티브 코드 사전 지식 불필요 | 커스텀 모듈 통합이 상대적으로 번거로움 |
| 다양한 내장 API 제공 | 앱 크기가 커질 수 있음 |

## 요약
- Expo는 React Native 위의 추상화 계층으로, 최소 설정으로 교차 플랫폼 네이티브 앱을 만들 수 있게 한다.
- OTA 업데이트로 앱 스토어 승인 없이 즉시 업데이트를 배포할 수 있다.
- 카메라, 위치, 푸시 알림 등 많은 네이티브 API가 내장되어 있다.
- 모든 API를 지원하지 않고 앱 크기가 커질 수 있으며, 필요하면 이젝트할 수 있지만 리팩터링 비용이 든다.

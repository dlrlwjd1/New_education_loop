# Understanding the Native Module Bridge

## 개요

- React Native의 JavaScript/TypeScript 코드와 Android·iOS 네이티브 코드를 연결하는 브리지(bridge)를 설명한다.
- 기기 API 접근, 네이티브 라이브러리 연동과 고비용 작업 위임이 주요 사용 사례다.

## 내용

### 양방향 통신

JavaScript와 네이티브 코드는 서로 다른 스레드에서 실행된다. JavaScript가 네이티브 함수를 호출하면 요청이 통신 계층을 지나 Android의 Java/Kotlin 또는 iOS의 Objective-C/Swift 코드로 전달되고, 결과가 다시 JavaScript 쪽으로 돌아온다.

### 사용 사례와 주의점

카메라·GPS·센서·파일 시스템처럼 JavaScript만으로 접근할 수 없는 기능, 네이티브 전용 결제·분석 SDK, 성능 집약 작업에 사용한다. 비동기 통신, 스레드 관리, 두 계층을 오가는 디버깅 복잡성을 고려해야 한다.

## 예시

```tsx
import { NativeModules } from 'react-native';

const { DeviceInfoModule } = NativeModules;
const deviceName = await DeviceInfoModule.getDeviceName();
```

## 요약

- 네이티브 브리지는 JavaScript와 플랫폼 코드를 이어 주는 통신 계층이다.
- Android는 Java/Kotlin, iOS는 Objective-C/Swift로 모듈을 구현한다.
- 비동기 API, 명확한 오류 메시지와 작은 모듈 단위가 중요하다.

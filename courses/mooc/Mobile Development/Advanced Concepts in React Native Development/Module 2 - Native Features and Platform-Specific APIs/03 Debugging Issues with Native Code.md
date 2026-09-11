# Debugging Issues with Native Code

## 개요

- JavaScript와 Android·iOS 네이티브 계층을 함께 디버깅할 때 필요한 도구와 점검 항목을 설명한다.
- 충돌, 권한 누락, 자료형 불일치, 메모리 누수와 UI 멈춤을 대표 문제로 다룬다.

## 내용

### 플랫폼별 도구

Android는 Android Studio, Logcat, breakpoint와 ADB를 사용한다. iOS는 Xcode debugger와 콘솔을 사용한다. JavaScript 계층은 React Native DevTools, React Native Debugger, Flipper와 명시적인 로그로 조사한다.

### 경계에서 확인할 것

모듈이 올바르게 등록됐는지, JavaScript와 네이티브 메서드의 이름·인자·반환 자료형이 일치하는지 확인한다. 권한 거부와 네이티브 예외를 처리하지 않으면 앱이 즉시 종료될 수 있다.

## 예시

```tsx
try {
  const result = await NativeModules.MyModule.performTask();
  console.log('native result', result);
} catch (error) {
  console.error('native module failed', error);
}
```

## 요약

- 양쪽 계층의 로그와 breakpoint를 함께 사용한다.
- 등록, 권한, 자료형과 스레드 사용을 우선 확인한다.
- 에뮬레이터뿐 아니라 실제 Android·iOS 기기에서도 테스트한다.

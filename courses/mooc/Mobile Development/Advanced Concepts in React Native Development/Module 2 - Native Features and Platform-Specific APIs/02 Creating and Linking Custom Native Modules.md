# Creating and Linking Custom Native Modules

## 개요

- Expo 프로젝트에 네이티브 폴더를 만들고 Android 사용자 정의 모듈을 작성·등록하는 흐름을 설명한다.
- 네이티브 메서드를 Promise 기반 TypeScript API로 노출한다.

## 내용

### 네이티브 프로젝트 준비

Expo 프로젝트에 `android/`와 `ios/`가 없다면 `npx expo prebuild`로 생성한다. 강의는 Android에서 `ReactContextBaseJavaModule`을 상속한 Java 클래스를 만들고 `@ReactMethod`로 메서드를 노출한다.

### 모듈 등록과 TypeScript 래퍼

모듈을 ReactPackage에 포함시키고 애플리케이션 패키지 목록에 등록한다. JavaScript 쪽에서는 `NativeModules`에서 가져온 뒤, TypeScript 래퍼를 만들어 이름과 반환 타입을 한곳에서 관리한다.

## 예시

```java
@ReactMethod
public void getDeviceName(Promise promise) {
  try {
    promise.resolve(android.os.Build.MODEL);
  } catch (Exception error) {
    promise.reject("DEVICE_NAME_ERROR", error);
  }
}
```

```tsx
export const getDeviceName = (): Promise<string> =>
  NativeModules.MyNativeModule.getDeviceName();
```

## 요약

- Expo의 네이티브 코드를 수정하려면 먼저 prebuild가 필요하다.
- 네이티브 클래스, ReactPackage 등록, TypeScript 래퍼가 연결되어야 한다.
- Promise 거부에 의미 있는 오류 코드와 원인을 전달한다.

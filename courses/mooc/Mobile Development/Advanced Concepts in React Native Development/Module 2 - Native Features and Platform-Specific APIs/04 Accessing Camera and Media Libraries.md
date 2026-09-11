# Accessing Camera and Media Libraries

## 개요

- 카메라 촬영과 사진·동영상 라이브러리 접근에 필요한 라이브러리와 권한 처리를 설명한다.
- 권한 상태를 확인한 뒤 카메라를 렌더링하고 비동기로 사진을 촬영하는 흐름을 다룬다.

## 내용

### 라이브러리 선택

단순 이미지·동영상 선택과 촬영에는 Expo ImagePicker 또는 이미지 선택 라이브러리를 사용할 수 있다. 카메라 화면을 직접 제어해야 한다면 Expo Camera나 네이티브 카메라 라이브러리가 필요하다.

### 권한과 오류 처리

카메라·미디어 권한은 앱 설정에 선언하고 런타임에도 요청한다. 권한이 없으면 카메라 화면 대신 이유와 재시도 방법을 안내한다. 실제 기기에서 전·후면 카메라, 촬영과 저장을 확인한다.

## 예시

```tsx
const [permission, requestPermission] = useCameraPermissions();
const cameraRef = useRef<CameraView>(null);

if (!permission?.granted) {
  return <Button title="카메라 권한 허용" onPress={requestPermission} />;
}

const photo = await cameraRef.current?.takePictureAsync();
console.log(photo?.uri);
```

## 요약

- 필요한 기능 수준에 맞춰 선택기 또는 카메라 라이브러리를 고른다.
- 권한은 설정 선언과 런타임 요청을 모두 고려한다.
- 촬영 결과 URI와 오류를 명시적으로 처리한다.

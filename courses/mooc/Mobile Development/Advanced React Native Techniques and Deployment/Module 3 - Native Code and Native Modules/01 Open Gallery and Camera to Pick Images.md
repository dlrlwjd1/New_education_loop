# Open Gallery and Camera to Pick Images

## 개요
- `react-native-image-picker` 패키지로 갤러리(gallery)에서 이미지를 선택하거나 카메라(camera)로 사진을 촬영하는 방법을 학습
- iOS는 `Info.plist`에 사진 라이브러리·카메라·마이크 접근 권한 설명 키를 반드시 추가해야 함
- 선택한 이미지의 URI를 `useState`에 저장해 `<Image>` 컴포넌트로 화면에 표시
- iOS 시뮬레이터(simulator)에서는 카메라를 사용할 수 없고 실제 기기에서만 동작함

## 내용

### 패키지 설치
- Google에서 "react native image picker"를 검색해 공식 문서의 설치 명령을 사용한다.

```bash
yarn add react-native-image-picker

# iOS: 새 아키텍처(new architecture)를 활성화하여 Pods 설치 (문서 권장)
cd ios && RCT_NEW_ARCH_ENABLED=1 pod install
```

- Android는 `android/gradle.properties`에서 `newArchEnabled=true`인지 확인한다. 최신 React Native 버전은 이미 설정되어 있다.
- 문서에 나오는 API 레벨 30 미만용 추가 설정은, 이 프로젝트가 `android/app/build.gradle`에서 `targetSdkVersion 34`를 쓰므로 필요 없다.

### Android 빌드 캐시 정리
- `yarn android` 빌드가 실패하면 이전 빌드 캐시를 정리한 뒤 다시 실행한다.

```bash
cd android
./gradlew clean   # 이전 빌드 산출물, 빌드 캐시, 임시 파일 제거
```

### iOS 권한 키 추가 (Info.plist)
- 터미널에서 `xed ios`를 입력해 Xcode로 프로젝트를 열고, `Info.plist`에 아래 프라이버시 키를 추가한다.
  - `NSPhotoLibraryUsageDescription` — 예: "We need to access your photo library to select photos"
  - `NSCameraUsageDescription` — 카메라 접근 사유
  - `NSMicrophoneUsageDescription` — 마이크 접근 사유
- 이 설명 문구는 사용자에게 그대로 표시되며, 성의 없는 문구를 쓰면 App Store 심사에서 거절될 수 있으므로 앱의 실제 사용 목적을 잘 설명하는 문구를 작성해야 한다.
- Xcode에서 키를 붙여넣으면 "Privacy - Microphone Usage Description"처럼 표시 이름으로 자동 변환되는데 정상 동작이다.
- 빌드가 실패하면 Xcode에서 Clean Build Folder 후 다시 실행한다.

### 갤러리 열기 구현
- `src/lessons/CameraGallery.tsx` 파일을 만들고 `App.tsx`에서 이 컴포넌트를 렌더링한다.
- `launchImageLibrary`(갤러리)와 `launchCamera`(카메라) 두 함수를 import한다.
- 옵션 객체에는 `mediaType`(photo/video/mixed), `maxWidth`, `maxHeight`, `videoQuality`, `cameraType` 등을 지정할 수 있다.
- 결과 객체의 `assets` 배열에서 첫 번째 항목(`assets[0]`)의 `uri`를 꺼내 상태에 저장한다. (`fileName`, `fileSize`, `height`, `originalPath`, `uri` 등의 속성이 담겨 있음)

### 카메라 열기 구현
- 갤러리 함수를 복사해 `launchImageLibrary`를 `launchCamera`로 바꾸기만 하면 된다.
- Android 에뮬레이터(emulator)에서는 가상 카메라로 촬영 테스트가 가능하다.
- iOS 시뮬레이터에서 카메라를 열면 `camera_unavailable` 에러가 발생한다. 시뮬레이터에서는 갤러리만 사용 가능하고, 실제 iPhone 기기에서는 카메라와 갤러리 모두 사용할 수 있다.

## 예시

```tsx
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const CameraGallery = () => {
  const [selectedImageUri, setSelectedImageUri] = useState('');

  const openGallery = async () => {
    try {
      const result = await launchImageLibrary({ mediaType: 'photo' });
      console.log(result);
      setSelectedImageUri(result.assets[0].uri);
    } catch (error) {
      console.log('Error happened opening gallery', error);
    }
  };

  const openCamera = async () => {
    try {
      const result = await launchCamera({ mediaType: 'photo' });
      setSelectedImageUri(result.assets[0].uri);
    } catch (error) {
      console.log('Error happened opening camera', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={openGallery}>Open Gallery</Text>
      <Text style={styles.text} onPress={openCamera}>Open Camera</Text>
      {selectedImageUri ? (
        <Image
          source={{ uri: selectedImageUri }}
          style={{ height: 215, width: 215, borderRadius: 8 }}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: { fontSize: 30, color: 'white' },
});

export default CameraGallery;
```

## 요약
- `react-native-image-picker`의 `launchImageLibrary` / `launchCamera`로 갤러리·카메라 접근을 구현한다.
- iOS는 `Info.plist`에 `NSPhotoLibraryUsageDescription`, `NSCameraUsageDescription`, `NSMicrophoneUsageDescription` 키와 명확한 사유 문구를 추가해야 하며, 부실한 문구는 심사 거절 사유가 된다.
- 결과의 `assets[0].uri`를 `useState`에 저장해 `<Image source={{ uri }}>`로 표시한다.
- Android 빌드 실패 시 `cd android && ./gradlew clean`으로 캐시를 정리한다.
- iOS 시뮬레이터에서는 카메라 사용 불가(`camera_unavailable`), 갤러리만 가능하다.

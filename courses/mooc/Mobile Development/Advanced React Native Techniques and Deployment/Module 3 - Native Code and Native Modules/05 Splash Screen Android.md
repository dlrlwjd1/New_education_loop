# Splash Screen Android

## 개요
- 스플래시 스크린(splash screen)은 JS 코드가 로드되어 앱이 시작될 때까지 사용자에게 보여주는 화면
- `react-native-bootsplash` 패키지로 스플래시 이미지 생성 및 Android 네이티브 설정
- CLI 명령으로 해상도별 이미지를 자동 생성하고, `MainActivity.kt`에 코드 추가 후 JS에서 `BootSplash.hide()`로 숨김

## 내용

### 준비와 설치
- `src/assets/` 폴더를 만들고 리소스의 `splash.png` 이미지를 넣는다.
- 패키지 설치:

```bash
yarn add react-native-bootsplash
```

### 스플래시 이미지 생성
- 문서의 generate 명령(라이선스 키 없는 버전)을 복사해 프로젝트에 맞게 수정한다. 명령을 기록해 두기 위해 `splash.md` 같은 메모 파일에 저장해 두면 좋다.
- 옵션: `--background`(배경색), `--logo-width`(로고 너비) 등.

```bash
yarn react-native-bootsplash generate src/assets/splash.png \
  --background=000000 \
  --logo-width=120
```

- 실행하면 Android와 iOS용 스플래시 이미지가 모두 생성된다.
- 처음 `--logo-width=100`으로 생성했다가 너무 작아 120으로 바꿔 재생성했다. 이미지를 재생성하면 앱도 다시 빌드해야 한다.

### Android 네이티브 설정 (MainActivity.kt)
- 문서의 bare React Native 프로젝트 → Android 섹션에서, React Native 버전이 0.73 이상인 경우의 코드를 사용한다 (이 프로젝트는 0.77).
- `android/app/src/main/java/com/{앱이름}/MainActivity.kt`에 `onCreate`에서 `RNBootSplash.init(...)`을 호출하는 함수를 붙여넣고, 상단에 필요한 import 두 줄도 추가한다.

```kotlin
import android.os.Bundle
import com.zoontek.rnbootsplash.RNBootSplash

class MainActivity : ReactActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    RNBootSplash.init(this, R.style.BootTheme) // 문서 코드 그대로 추가
    super.onCreate(savedInstanceState)
  }
  // ...
}
```

- 네이티브 코드 변경이므로 재빌드가 필요하다.

```bash
yarn android
```

### 스플래시 숨기기 (JavaScript)
- 재빌드 후 스플래시가 표시되지만 사라지지 않는 문제가 생긴다. JS 쪽에서 숨기는 코드를 추가해야 한다.
- `App.tsx`에서 `useEffect` 안의 init 함수에는 스플래시가 떠 있는 동안 처리할 비동기 작업(예: 로컬 스토리지에서 설정·언어 등 데이터 로드)을 넣을 수 있다.

```tsx
import { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';

useEffect(() => {
  const init = async () => {
    // 초기 비동기 작업 (예: 설정, 언어 데이터 로드)
  };

  init().finally(async () => {
    await BootSplash.hide({ fade: true });
  });
}, []);
```

- 저장하면 앱 시작 후 스플래시가 페이드아웃되며 사라진다.

## 요약
- `react-native-bootsplash`를 설치하고 generate 명령으로 배경색·로고 너비를 지정해 해상도별 스플래시 이미지를 생성한다.
- Android는 `MainActivity.kt`에 init 코드와 import를 추가하고 `yarn android`로 재빌드한다.
- 스플래시는 자동으로 사라지지 않으므로 `App.tsx`의 `useEffect`에서 `BootSplash.hide({ fade: true })`를 호출한다.
- init 함수에 앱 시작 전 필요한 비동기 초기화 작업을 넣을 수 있다.
- iOS 설정은 다음 강의에서 다룬다.

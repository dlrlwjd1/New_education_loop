# Social Login | Google Gmail Login with Android

## 개요
- `@react-native-google-signin/google-signin` 패키지로 Android에서 Google 로그인(social login)을 구현한다.
- 선행 조건: `@react-native-firebase/app`으로 Firebase 연동이 완료되어 있어야 한다.
- Firebase 콘솔에서 Google 로그인 제공자(provider)를 활성화하고 `google-services.json`을 다시 받아 교체한다.
- 디버그 SHA로는 개발 중에만 동작하며, 프로덕션(release)에서는 release 키스토어의 SHA를 Firebase에 추가해야 한다.

## 내용
### 패키지 설치와 Android 설정
1. 구글에서 "react native google sign in"을 검색해 공식 문서 → Get started → 설치 명령을 복사해 설치한다.
2. Setup → **Android setup guide**를 따른다 (iOS는 다음 강의).
3. **Google 로그인 제공자 활성화**: Firebase 콘솔 → 프로젝트 선택 → **Authentication** → Get started → **Google** 활성화(enable) → 지원 이메일 선택 → Save.
4. 활성화 후에는 Firebase 설정 파일을 **다시 다운로드**해야 한다. Android용 `google-services.json`을 새로 받아 `android/app`의 기존 파일을 교체(replace)한다.
5. `android/build.gradle`(루트)에 문서의 `googlePlayServicesAuthVersion` 라인을 추가한다 (콤마를 붙이지 않도록 주의).
6. 문서의 나머지 dependencies/classpath 라인들은 Firebase 연동 때 이미 추가되어 있으므로(버전만 다름) 다시 추가할 필요 없다.
7. `yarn start`(Metro) + `yarn android`로 실행한다.

### JavaScript 구현
- 문서에서 Universal / Original Google sign-in 중 **Original** 방식을 사용한다.
- `src/lessons/GoogleSignInLesson.tsx` 파일을 만들어 컴포넌트를 작성하고 `App.tsx`에서 렌더링한다.
- **configure**: 로그인 시도 전에 반드시 `GoogleSignin.configure()`를 호출해야 한다(문서상 필수).
  - `webClientId`가 매우 중요하다. `android/app/google-services.json`에서 `client_type: 3` 항목 바로 위의 `client_id`를 복사해 넣는다.
- 문서의 sign-in 예제 함수를 복사해 `googleSignIn` 함수로 만들고, `isSuccessResponse`, `isErrorWithCode`를 패키지에서 import한다.
- `useState`로 `userInfo` 상태를 만들고(초기값 null) 성공 시 `setUserInfo(response.data)`로 저장한다.
- "Sign in with Google" 버튼을 만들어 `googleSignIn`을 연결한다.

### 테스트와 데이터 렌더링
- 버튼을 누르면 Google 로그인 UI가 뜨고 계정을 선택해 로그인한다.
- 응답 확인: `console.log(JSON.stringify(response.data, null, 3))` — scopes, idToken, user(사진, family name, 이메일, 이름, ID)가 들어 있다.
- `userInfo?.user.name`, `userInfo?.user.email`을 Text로 렌더링하고, `userInfo?.user.photo`를 Image의 `source={{ uri: ... }}`로 표시한다 (Image import 필수).
- 이 JavaScript 코드는 Android와 iOS 모두에서 동작하므로 다음 강의(iOS)에서는 통합 단계만 추가하면 된다.

### 프로덕션 주의사항 — release SHA
- `cd android && ./gradlew signingReport`로 얻어 Firebase에 등록했던 SHA는 **debug keystore**의 SHA다.
- APK/Google Play용 빌드를 만들 때는 `android/app`에 release 키스토어(예: `release.keystore`)를 생성하고, signingReport를 다시 실행해 **release 키의 SHA**를 얻어 Firebase 프로젝트 설정의 fingerprint에 추가해야 한다.
- 이 단계를 하지 않으면 Google 로그인이 디버그 모드에서만 동작하고 프로덕션에서는 동작하지 않는다. (배포 섹션에서 APK 생성 시 다룰 예정)

## 예시
```bash
yarn add @react-native-google-signin/google-signin@latest
yarn start
yarn android
```

```tsx
// src/lessons/GoogleSignInLesson.tsx
import { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import {
  GoogleSignin,
  isSuccessResponse,
  isErrorWithCode,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  // google-services.json에서 client_type: 3의 client_id
  webClientId: 'YOUR_WEB_CLIENT_ID',
});

const GoogleSignInLesson = () => {
  const [userInfo, setUserInfo] = useState(null);

  const googleSignIn = async () => {
    try {
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        console.log(JSON.stringify(response.data, null, 3));
        setUserInfo(response.data);
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        // 에러 코드별 처리
      }
    }
  };

  return (
    <View>
      <Button title="Sign in with Google" onPress={googleSignIn} />
      <Text style={{ fontSize: 30, color: 'white' }}>{userInfo?.user.name}</Text>
      <Text style={{ fontSize: 30, color: 'white' }}>{userInfo?.user.email}</Text>
      <Image
        style={{ height: 100, width: 100, borderRadius: 50 }}
        source={{ uri: userInfo?.user.photo }}
      />
    </View>
  );
};
```

## 요약
- Firebase Authentication에서 Google 제공자를 활성화하면 `google-services.json`을 다시 받아 교체해야 한다.
- `GoogleSignin.configure({ webClientId })`는 로그인 전에 반드시 호출하며, webClientId는 `google-services.json`의 `client_type: 3` client_id다.
- 로그인 응답(`response.data`)에는 idToken과 사용자 정보(이름, 이메일, 사진)가 들어 있어 그대로 렌더링할 수 있다.
- JavaScript 코드는 iOS에서도 재사용되며, 프로덕션 배포 시에는 release 키스토어의 SHA를 Firebase에 추가해야 Google 로그인이 동작한다.

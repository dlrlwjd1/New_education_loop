# Push Notifications Android

## 개요
- `@react-native-firebase/messaging`으로 Android 푸시 알림(push notification)을 구현한다. 이전 강의의 Firebase 연동(`@react-native-firebase/app`)이 선행되어야 한다.
- 알림 권한 요청, FCM 토큰(token) 발급, 백그라운드 메시지 핸들러 등록을 구현하고 Firebase 콘솔의 Cloud Messaging으로 테스트한다.
- 이번 강의는 백그라운드(background) 알림까지만 다루고, 포그라운드(foreground) 알림은 다음 강의에서 처리한다.

## 내용
### 패키지 설치
- React Native Firebase 문서의 Cloud Messaging → Usage로 이동한다.
- Expo용 안내는 건너뛰고 React Native CLI 기준으로 진행한다.

### 알림 권한 요청 (Android)
- Android API 레벨 32 이하는 권한 요청이 필요 없지만, **API 33 이상은 수동으로 권한을 요청**해야 한다.
- `src/notifications/useNotifications.ts` 파일을 만들고 `useNotifications` 훅을 export한다.
- 그 안에 `requestUserPermission` 비동기 함수를 만들어 문서의 Android 권한 요청 코드를 넣고, 결과가 granted인지에 따라 로그를 출력한다.
- 이 함수를 `useEffect` 안에서 호출한다.

### FCM 토큰 얻기
- 토큰은 **특정 기기(device)로 알림을 보낼 때** 사용하며, 백엔드가 특정 사용자에게 알림을 보내야 하므로 백엔드로 전달하는 매우 중요한 값이다.
- `getToken` 함수에서 `messaging().getToken()`을 try/catch로 감싸 호출하고 토큰을 로그로 출력한다. `messaging`은 `@react-native-firebase/messaging`에서 import한다.
- 이 함수도 `useEffect` 안에서 호출한다.

### 백그라운드 메시지 핸들러
- 문서: "백그라운드 핸들러(`setBackgroundMessageHandler`)는 애플리케이션 로직 밖에서 가능한 한 일찍 설정해야 한다" → **`index.js`에 추가**한다.
- `index.js`에 핸들러 코드를 붙여넣고 messaging import를 잊지 않는다.

### 앱에 적용
- `App.tsx`에서 `useNotifications()`를 호출하고 저장한 뒤 `yarn android`로 실행한다.

### Firebase 콘솔에서 테스트
1. Firebase 콘솔 → 프로젝트(chatty) 선택 → **Cloud Messaging** → Create your first campaign.
2. "Firebase Notification messages"(백그라운드 알림용)를 선택한다. (in-app messages는 나중에 다룸)
3. 제목/내용 입력 (예: "Hello world" / "Notification received").
4. 앱에서 알림 권한을 **허용(allow)** 하고, 아직 포그라운드 알림을 처리하지 않았으므로 **앱을 닫은 상태**여야 알림을 받을 수 있다.
5. Metro에서 `j`를 눌러 디버거를 열어 로그의 FCM 토큰을 복사한다.
6. Firebase의 **Send test message**에 토큰을 붙여넣고 Test를 누르면 기기에 알림이 도착한다.
- 전체 사용자에게 보내려면 Next → 타깃으로 앱(iOS/Android/둘 다) 선택 → Preview → Publish로 캠페인을 발행한다. 단, 캠페인은 즉시 전송되지 않고 시간이 걸리므로 빠른 테스트에는 Send test message가 낫다.
- 앱이 열려 있는 상태에서 알림을 보내면 아무것도 보이지 않는다 — 포그라운드 리스너는 다음 강의에서 추가한다.

## 예시
```bash
yarn add @react-native-firebase/messaging
yarn android
```

```ts
// src/notifications/useNotifications.ts
import { useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import messaging from '@react-native-firebase/messaging';

export const useNotifications = () => {
  const requestUserPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Notification permission granted');
    } else {
      console.log('Notification permission denied');
    }
  };

  const getToken = async () => {
    try {
      const token = await messaging().getToken();
      console.log('FCM token:', token);
    } catch (error) {
      console.log('Failed to get FCM token', error);
    }
  };

  useEffect(() => {
    requestUserPermission();
    getToken();
  }, []);
};
```

```js
// index.js — 애플리케이션 로직 밖, 가능한 한 이른 시점에 등록
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});
```

```tsx
// App.tsx
useNotifications();
```

## 요약
- 푸시 알림 전제 조건: `@react-native-firebase/app` 연동 완료 후 `@react-native-firebase/messaging` 설치.
- Android API 33 이상은 알림 권한을 수동으로 요청해야 한다.
- FCM 토큰은 특정 기기에 알림을 보내는 열쇠로, 백엔드로 전달해 사용한다.
- 백그라운드 핸들러는 `index.js`에 최대한 일찍 등록한다.
- 테스트는 Firebase 콘솔의 Send test message(토큰 기반)가 캠페인 발행보다 빠르다. 앱이 열려 있을 때의 처리(포그라운드)는 다음 강의에서 다룬다.

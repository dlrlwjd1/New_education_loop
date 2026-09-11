# Foreground Notifications

## 개요
- 앱이 열려 있을 때(포그라운드, foreground) 도착하는 알림을 처리하는 리스너(listener)를 추가한다.
- 문서(Cloud Messaging → Foreground state messages)의 `onMessage` 리스너 코드를 `useNotifications` 훅에 붙여넣는다.
- 기본은 Alert로 표시하지만 플래시 메시지 등 원하는 UI로 대체할 수 있다.

## 내용
### 포그라운드 리스너 추가
- 참고: 이 강의는 인앱 알림 핸들러(in-app notification handler)를 만드는 것이 아니라, 앱이 열려 있을 때 알림이 오면 무언가를 보여주는 **포그라운드 알림 리스너**를 추가하는 간단한 강의다.
- `useNotifications` 파일에는 이미 `getToken`과 `requestUserPermission` 두 함수가 있다. 여기에 새 코드를 추가한다.
- Cloud Messaging 문서에서 "Foreground state messages"를 검색해 import 문(이미 되어 있음)과 `useEffect` 훅 코드를 복사한다.
- 기존 `useEffect` 아래에 붙여넣고 `Alert`를 import한다.
- `remoteMessage`에서 제목과 본문을 꺼내 Alert에 표시한다:
  - `const messageTitle = remoteMessage.notification.title`
  - `const messageBody = remoteMessage.notification.body`

### 테스트와 디버깅
- 앱을 **연 상태**에서 Firebase 콘솔에서 알림을 만들고 기기 토큰으로 Send test message를 보낸다.
- 알림이 오면 Alert가 뜬다. 처음에는 제목과 본문 둘 다 title을 렌더링하는 실수가 있어 body로 수정 — 실수를 찾아 고치는 과정도 시연.
- Alert 대신 상단 알림, 하단 알림, 플래시 메시지(flash message) 등 이전에 배운 어떤 UI로도 대체할 수 있다.

## 예시
```ts
// src/notifications/useNotifications.ts — 포그라운드 리스너
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';

useEffect(() => {
  const unsubscribe = messaging().onMessage(async remoteMessage => {
    const messageTitle = remoteMessage.notification?.title;
    const messageBody = remoteMessage.notification?.body;
    Alert.alert(messageTitle, messageBody);
  });
  return unsubscribe;
}, []);
```

## 요약
- 포그라운드 알림은 `messaging().onMessage` 리스너를 `useEffect`에 등록해 처리한다.
- `remoteMessage.notification`의 `title`과 `body`를 꺼내 Alert 등으로 표시한다.
- 앱이 열린 상태에서 Firebase 콘솔의 테스트 메시지로 동작을 확인한다.
- Alert 대신 원하는 어떤 알림 UI(플래시 메시지 등)로도 바꿀 수 있다.

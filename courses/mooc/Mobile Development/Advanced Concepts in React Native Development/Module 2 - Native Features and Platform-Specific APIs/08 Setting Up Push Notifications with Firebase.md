# Setting Up Push Notifications with Firebase

## 개요

- 강의 제목은 Firebase 푸시 알림 설정이지만, 실제 영상은 Expo Notifications의 알림 표시 정책과 사용자 반응 listener를 다룬다.
- Firebase Cloud Messaging 토큰 발급이나 서버 발송 구성은 시연하지 않는다.

## 내용

### 알림 표시 정책

`setNotificationHandler`에서 앱이 알림을 받았을 때 alert, sound와 badge를 어떻게 처리할지 결정한다. 플랫폼에 따라 사용 가능한 표시 옵션이 다를 수 있다.

### 사용자 반응 구독

`addNotificationResponseReceivedListener`는 사용자가 알림을 눌렀을 때 실행된다. 화면 이동이나 전달 데이터 처리를 이 listener에 연결하며, 컴포넌트가 해제될 때 subscription도 제거해 메모리 누수를 막는다.

## 예시

```tsx
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

useEffect(() => {
  const subscription =
    Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(response.notification.request.content.data);
    });
  return () => subscription.remove();
}, []);
```

## 요약

- 영상의 실제 내용은 Expo 알림 처리와 반응 listener다.
- listener는 unmount 시 제거한다.
- 원격 푸시를 완성하려면 별도로 FCM/APNs 자격 증명, 토큰과 서버 발송 구성이 필요하다.

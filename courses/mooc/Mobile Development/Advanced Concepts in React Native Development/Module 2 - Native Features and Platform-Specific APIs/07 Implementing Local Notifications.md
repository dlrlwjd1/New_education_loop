# Implementing Local Notifications

## 개요

- 서버 없이 앱 자체가 즉시 또는 예약해 표시하는 로컬 알림(local notification)을 설명한다.
- Expo Notifications로 권한을 요청하고 즉시 알림을 예약하는 예제를 다룬다.

## 내용

### 로컬 알림

로컬 알림은 사용자 행동, 앱 이벤트 또는 정해진 시간에 기기 안에서 만들어진다. 리마인더와 일정 알림에 적합하며 외부 푸시 서버가 필요하지 않다.

### 권한과 사용 원칙

알림이 실제로 필요한 시점에 권한을 요청하고 이유를 설명한다. 알림에 민감한 정보를 그대로 노출하지 않으며, 과도한 발송으로 사용자가 알림을 끄거나 앱을 삭제하지 않도록 빈도를 조절한다.

## 예시

```tsx
const { status } = await Notifications.requestPermissionsAsync();
if (status !== 'granted') return;

await Notifications.scheduleNotificationAsync({
  content: {
    title: 'Instant notification',
    body: 'This is a local notification.',
  },
  trigger: null,
});
```

## 요약

- 로컬 알림은 외부 서버 없이 앱이 직접 생성한다.
- `trigger: null`은 즉시 알림을 의미한다.
- 권한, 개인정보와 알림 빈도를 함께 설계한다.

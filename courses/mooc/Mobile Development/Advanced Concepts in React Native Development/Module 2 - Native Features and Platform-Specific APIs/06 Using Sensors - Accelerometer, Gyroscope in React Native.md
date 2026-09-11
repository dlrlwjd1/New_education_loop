# Using Sensors - Accelerometer, Gyroscope in React Native

## 개요

- React Native Sensors 또는 Expo Sensors로 가속도계와 자이로스코프 값을 읽는 용도를 설명한다.
- 운동 추적, 기기 기울기 기반 게임과 방향·회전 감지가 주요 사례다.

## 내용

### 센서 차이

가속도계(accelerometer)는 중력을 포함한 x·y·z축 가속을 측정해 흔들기, 기울기와 움직임을 감지한다. 자이로스코프(gyroscope)는 축별 각속도를 측정해 더 정밀한 회전 변화를 파악한다.

### 성능과 테스트

센서를 높은 빈도로 계속 읽으면 배터리를 소모한다. 필요한 수준으로 업데이트 간격을 설정하고 화면을 떠날 때 구독을 해제한다. 에뮬레이터는 센서를 완전히 재현하지 못하므로 실제 기기 테스트가 필요하다.

## 예시

```tsx
Accelerometer.setUpdateInterval(250);

const subscription = Accelerometer.addListener(({ x, y, z }) => {
  setAcceleration({ x, y, z });
});

return () => subscription.remove();
```

## 요약

- 가속도계는 이동·기울기, 자이로스코프는 회전 변화를 측정한다.
- 업데이트 간격과 구독 해제가 배터리 관리의 핵심이다.
- 센서 기능은 실제 기기에서 검증한다.

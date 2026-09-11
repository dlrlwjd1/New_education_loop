# Geolocation and Maps Integration

## 개요

- 기기의 현재 위치를 얻어 지도·배달·운동 추적 앱에 사용하는 방식을 설명한다.
- 실시간 위치 갱신, 플랫폼 권한과 배터리 사용량을 강조한다.

## 내용

### 위치 조회와 추적

한 번의 현재 위치 조회는 주변 장소나 초기 지도 위치를 정할 때 사용한다. `watchPosition` 형태의 구독은 이동 중인 위치를 계속 받으므로 내비게이션과 운동·배달 추적에 적합하다.

### 권한과 자원 관리

Android Manifest와 iOS Info.plist에 권한 설명을 구성하고, 사용자에게 필요한 시점에만 런타임 권한을 요청한다. 잦은 고정밀 위치 갱신은 배터리를 소모하므로 간격과 정확도를 조절하고 사용이 끝나면 구독을 해제한다.

## 예시

```tsx
const subscription = await Location.watchPositionAsync(
  {
    accuracy: Location.Accuracy.Balanced,
    timeInterval: 5000,
  },
  setLocation,
);

// 더 이상 필요하지 않을 때
subscription.remove();
```

## 요약

- 현재 위치 조회와 지속 추적은 목적이 다르다.
- 권한 요청에는 사용 이유를 명확히 설명한다.
- 갱신 빈도를 제한하고 구독을 해제해 배터리 소모를 줄인다.

# Display Google Map in App

## 개요
- 네이티브 통합을 마친 후 JavaScript 코드로 `MapView`를 렌더링해 지도를 화면에 표시
- iOS는 기본이 Apple 지도이므로 `provider={PROVIDER_GOOGLE}`로 양쪽 모두 Google Maps를 사용하도록 통일
- `region` 속성의 latitude/longitude(중심 좌표)와 latitudeDelta/longitudeDelta(줌 레벨)의 의미를 학습

## 내용

### MapView 렌더링
- `src/lessons/GoogleMap.tsx` 파일을 만들고 `react-native-maps`에서 `MapView`를 import해 렌더링한다.
- 스타일은 `flex: 1`로 전체 화면을 채운다.
- `App.tsx`에서 이 `GoogleMap` 컴포넌트를 렌더링한다.

### provider 속성
- 그대로 실행하면 Android는 Google Maps, iOS는 Apple 지도(iOS map)가 표시된다.
- 양쪽 모두 Google Maps를 쓰려면 `provider={PROVIDER_GOOGLE}`를 추가한다 (`PROVIDER_GOOGLE`도 `react-native-maps`에서 import).

### region 속성
- 지도를 특정 지역에서 시작하려면 `region`에 네 가지 값을 넣는다.
  - `latitude` — 지도 중심의 위도. 북–남(north-south) 위치. 십진수 도(decimal degrees) 값.
  - `longitude` — 지도 중심의 경도. 동–서(east-west) 위치.
  - `latitudeDelta` — 수직(vertical) 줌 레벨 제어.
  - `longitudeDelta` — 수평(horizontal) 줌 레벨 제어.
- 좌표 얻는 법: Google Maps 웹에서 원하는 지점(예: 카이로, 베를린)을 우클릭하면 위도·경도 두 숫자가 표시되며 복사해서 쓰면 된다.
- delta 값이 작을수록 확대(줌 인), 클수록 축소된다. 강의에서는 중간 줌으로 `latitudeDelta: 0.015`, `longitudeDelta: 0.0121`을 쓰고, 이후 0.1, 1, 0.5 등으로 바꿔가며 줌 변화를 확인했다.
- Android에서 region 변경이 바로 반영되지 않는 문제가 있었는데, 앱을 다시 빌드/실행하니 정상 동작했다.

## 예시

```tsx
// src/lessons/GoogleMap.tsx
import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const GoogleMap = () => {
  return (
    <MapView
      style={styles.mapView}
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: 52.52,     // 북-남(north-south) 위치
        longitude: 13.405,   // 동-서(east-west) 위치
        latitudeDelta: 0.5,  // 수직 줌(vertical zoom)
        longitudeDelta: 0.5, // 수평 줌(horizontal zoom)
      }}
    />
  );
};

const styles = StyleSheet.create({
  mapView: { flex: 1 },
});

export default GoogleMap;
```

## 요약
- `react-native-maps`의 `MapView`를 `flex: 1` 스타일로 렌더링하면 지도가 표시된다.
- `provider={PROVIDER_GOOGLE}`를 지정하면 iOS에서도 Apple 지도 대신 Google Maps를 사용한다.
- `region`의 latitude/longitude는 지도 중심 좌표, latitudeDelta/longitudeDelta는 줌 레벨(작을수록 확대)이다.
- 좌표는 Google Maps 웹에서 우클릭으로 복사할 수 있다.
- 다음 강의에서 마커(marker) 추가를 다룬다.

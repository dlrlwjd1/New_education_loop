# Adding Markers to MapView

## 개요
- `react-native-maps`의 `Marker` 컴포넌트로 지도에 마커(marker)를 추가
- `coordinate`(latitude/longitude)로 위치를 지정하고 `title`/`description`으로 라벨과 설명을 표시
- 위도·경도 값 변경에 따른 마커 이동 방향과 lat/lng 축약 표기를 학습

## 내용

### Marker 컴포넌트 추가
- `react-native-maps`에서 `Marker`를 import해 `MapView`의 자식으로 넣는다.
- 필수 속성 `coordinate`에 `latitude`, `longitude`를 전달한다.
- `title`(라벨)과 `description`(설명)을 추가하면 마커를 눌렀을 때 표시된다.

### 여러 마커와 좌표의 의미
- `Marker`를 복사해 좌표만 바꾸면 여러 개를 표시할 수 있다 (예: "My City" / "My Friend City").
- `latitude`는 북–남(north-south, 수직) 위치: 값을 키우면 위로, 줄이면 아래로 이동한다 (예: 52.6 → 위, 52.4 → 아래).
- `longitude`는 동–서(east-west, 수평) 위치: 값을 줄이면 왼쪽(예: 13.2), 키우면 오른쪽(예: 13.35)으로 이동한다.

### 참고 사항
- 마커 추가는 JavaScript 코드이므로 앱을 재빌드할 필요 없이 핫 리로드로 반영된다. (강의 중 Android 에뮬레이터에서 반영이 안 되는 현상이 있었지만 패키지 또는 에뮬레이터 문제로 보이며, 재실행 후 정상 동작. iOS는 즉시 반영됨)
- 다른 자료에서 `lat`은 latitude, `lng`는 longitude의 축약 표기이므로 알아두어야 한다.

## 예시

```tsx
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

<MapView style={styles.mapView} provider={PROVIDER_GOOGLE} region={...}>
  <Marker
    coordinate={{ latitude: 52.5, longitude: 13.405 }}
    title="My City"
    description="Here I live"
  />
  <Marker
    coordinate={{ latitude: 52.5, longitude: 13.35 }}
    title="My Friend City"
    description="Here my friend lives"
  />
</MapView>
```

## 요약
- 마커는 `MapView` 자식으로 `<Marker coordinate={{ latitude, longitude }} />`를 넣어 추가한다.
- `title`과 `description` 속성으로 마커 탭 시 라벨·설명을 표시한다.
- latitude는 수직(북–남), longitude는 수평(동–서) 위치를 결정한다.
- JS 코드 변경이므로 재빌드 없이 반영된다. `lat`/`lng`는 latitude/longitude의 축약이다.

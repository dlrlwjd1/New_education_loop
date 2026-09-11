# App Header

## 개요
- AI 챗 앱의 첫 컴포넌트인 앱 헤더(app header)를 만든다.
- `src/components`에 `AppHeader.tsx`, `screens`에 `ChatScreen.tsx`를 생성하고 앱 엔트리에서 렌더링한다.
- `react-native-size-matters`의 `scale`/`verticalScale`로 크기를 지정하고, SVG 아이콘은 `fill`이 아닌 `stroke`로 색을 바꾼다.
- iOS에서만 상단 패딩(padding top)을 추가하는 플랫폼 분기(Platform-specific styling)를 적용한다.

## 내용
### 컴포넌트 생성과 렌더링 구조
- `src/components/AppHeader.tsx`를 만들고 스니펫 `rnfs`로 함수형 컴포넌트를 생성한다.
- 헤더는 `View`이며 `styles.container` 스타일을 가진다. 내부에는 텍스트 대신 앱 아이콘(SVG)을 렌더링한다.
- `screens/ChatScreen.tsx`를 만들어 그 안에서 `AppHeader`를 렌더링하고, 앱 엔트리(`App.tsx`)에서 `ChatScreen`을 렌더링한다.

### 스타일링
- 앱 아이콘: `height: scale(30)`, `width: scale(30)` — `scale`은 `react-native-size-matters`에서 import.
- 컨테이너: `justifyContent: 'center'`, `alignItems: 'center'`, `paddingVertical: verticalScale(12)`, `backgroundColor: colors.black`.
- 배경을 검정으로 바꾸면 검정 아이콘이 안 보이므로 아이콘 색을 `#FFF`로 변경한다.

### SVG 아이콘의 stroke vs fill
- 일부 아이콘은 `fill` 속성으로 색이 바뀌지만, 이 아이콘은 면(fill)이 아니라 테두리(border) 색을 바꿔야 한다.
- SVG를 확인해 보면 바꿔야 할 속성은 `stroke`이므로 `fill` 대신 `stroke="#FFF"`를 전달한다.

### iOS 전용 padding top
- iOS에서는 헤더가 노치 영역에 가려지므로 상단 패딩이 필요하다.
- Android에서는 `undefined`를 주어 패딩을 추가하지 않고, 그 외(iOS)에는 `verticalScale(43)`을 준다 (30 → 40 → 43으로 조정하며 확인).

## 예시
```tsx
// src/components/AppHeader.tsx
import { View, Platform, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <AppIcon height={scale(30)} width={scale(30)} stroke="#FFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    backgroundColor: colors.black,
    paddingTop: Platform.OS === 'android' ? undefined : verticalScale(43),
  },
});
```

## 요약
- `AppHeader` → `ChatScreen` → 앱 엔트리 순으로 렌더링 구조를 구성했다.
- 크기는 `react-native-size-matters`의 `scale`/`verticalScale`로 반응형으로 지정한다.
- 외곽선형 SVG 아이콘은 `fill`이 아닌 `stroke`로 색을 변경한다.
- iOS에서만 `paddingTop`을 주기 위해 Android는 `undefined`로 분기한다.
- 다음 강의에서 채팅 입력(chat input)과 요청/응답 메시지 컴포넌트 UI를 만든다.

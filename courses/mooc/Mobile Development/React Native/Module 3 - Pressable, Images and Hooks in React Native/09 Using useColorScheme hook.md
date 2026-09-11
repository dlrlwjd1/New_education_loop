# Using useColorScheme hook

## 개요
- useColorScheme은 React Native의 Appearance 모듈에서 컬러 스킴(color scheme) 업데이트를 제공하고 구독(subscribe)하는 내장 훅(built-in hook)이다.
- 사용자 기기의 라이트/다크 테마 설정에 따라 앱 스타일을 바꾸고, 설정이 바뀌면 즉시 감지해 반영한다.
- 반환값은 light, dark, null(사용자가 선호 테마를 지정하지 않은 경우) 세 가지다.

## 내용

### useColorScheme이란
- 기기가 라이트 테마인지 다크 테마인지에 따라 앱에 스타일 변경을 적용할 수 있다.
- 설정 변경도 감지한다. 예를 들어 기기가 밤 특정 시각에 라이트에서 다크로 자동 전환되도록 설정되어 있고 사용자가 앱을 쓰는 중에 전환이 일어나면, useColorScheme이 앱 테마를 맞춰 업데이트할 수 있다.

### Little Lemon 앱에 적용하기
1. react-native 패키지에서 useColorScheme을 import한다.
2. 훅을 사용할 컴포넌트 안에서 colorScheme 객체를 선언하고 useColorScheme 훅을 연결한다.
3. 훅은 **light, dark, null** 세 가지 값을 반환할 수 있다. null은 사용자가 선호 컬러 테마를 지정하지 않았을 때다.
4. (데모 목적) colorScheme 값을 출력하는 텍스트 컴포넌트를 추가한다. 실제 앱에서는 쓸모없지만 변화를 확인하기 위한 것이다.

### 테마 스타일 로직
- 스타일시트의 container 스타일에서 backgroundColor를 제거한다.
- ScrollView에 단일 스타일 대신 **스타일 배열**을 전달한다(대괄호로 감싼다). container 스타일과 함께 colorScheme 기반 스타일을 전달한다.
- container에 배경색이 없으므로 배경색은 colorScheme 조건에 따라 결정된다:
  - `colorScheme === 'light'`(strict equality, 삼중 등호)이면 흰색 배경
  - 그렇지 않으면(dark 또는 null) 다크 그레이 배경 — 조건 연산자(conditional)로 작성한다.
- 이렇게 기존 스타일과 훅 기반 가변 스타일을 배열로 함께 전달할 수 있다.
- 실제 앱에서는 이 데모처럼 개별 페이지 수준이 아니라 **앱 수준(app level)** 에서 useColorScheme으로 컬러 테마를 조정하는 것이 일반적이다.

### 에뮬레이터 확인
- 처음에는 흰 배경과 "color scheme: light" 텍스트가 표시된다(기기 테마가 라이트).
- 에뮬레이터 설정 → 개발자 옵션(developer options)에서 다크 모드(dark appearance)를 켜면 에뮬레이터 전체가 다크 모드로 바뀐다.
- 앱으로 돌아오면 즉시 배경이 다크 그레이가 되고 텍스트가 "color scheme: dark"로 바뀐다.

## 예시

강의 설명 기반 재구성:

```jsx
import { ScrollView, Text, useColorScheme, StyleSheet } from 'react-native';

const App = () => {
  const colorScheme = useColorScheme(); // 'light' | 'dark' | null

  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme === 'light'
          ? { backgroundColor: '#fff' }
          : { backgroundColor: '#333333' },
      ]}>
      <Text>Color scheme: {colorScheme}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor 제거 — colorScheme이 결정
  },
});
```

## 요약
- useColorScheme은 Appearance 모듈의 컬러 스킴을 구독하는 내장 훅으로, light / dark / null을 반환한다.
- 기기 테마 변경을 실시간으로 감지해 앱 스타일을 자동으로 맞출 수 있다.
- 스타일 배열 `[기존 스타일, 조건부 스타일]` 패턴으로 고정 스타일과 테마 기반 스타일을 함께 적용한다.
- 실제 앱에서는 페이지 단위가 아닌 앱 수준에서 적용하는 것이 바람직하다.

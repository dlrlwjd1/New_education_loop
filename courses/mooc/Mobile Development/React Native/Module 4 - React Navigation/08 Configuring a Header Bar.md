# Configuring a Header Bar

## 개요
- 스택 내비게이터 설정과 함께 자동으로 생기는 헤더 바(header bar)를 스타일링하고, 텍스트 대신 이미지(로고)를 표시하는 방법을 다룬다.
- 모든 화면에 같은 스타일을 적용하려면 내비게이터의 `screenOptions`에, 화면별로 다르게 하려면 각 `Stack.Screen`의 `options`에 지정한다.
- `headerTitle` prop으로 헤더 제목 자리에 커스텀 컴포넌트(예: 로고 이미지)를 렌더링할 수 있다.

## 내용

### screenOptions로 헤더 바 스타일링
- `headerStyle`의 `backgroundColor`를 더 어두운 16진수(hexadecimal) 색상 값으로 변경한다.
- `headerTintColor`로 헤더 텍스트 색을 지정한다. 배경이 어두우므로 가독성을 위한 대비(contrast)를 위해 밝은 색을 사용해야 한다.
- `headerTitleStyle`(헤더 바에 표시되는 텍스트의 스타일)에서 `fontWeight`를 bold로 설정한다. fontSize와 fontFamily도 지정할 수 있다.
- 이 설정들은 내비게이터의 `screenOptions`에 있으므로 Welcome 화면, Menu 화면은 물론 스택에 추가되는 모든 화면에 적용된다.

### 스타일 적용의 두 가지 방식
- 모든 화면에 같은 스타일: 내비게이터의 `screenOptions`에 추가한다.
- 화면마다 다른 스타일: 각 `Stack.Screen`의 `options`에 추가한다.

### 에뮬레이터 확인 (스타일)
- iOS 에뮬레이터에서 헤더 바가 더 어두운 회색 배경, 흰색 볼드 텍스트로 표시된다.
- View Menu로 이동한 Menu 화면에서도 같은 설정이 적용된다 (screenOptions에 지정했기 때문).

### 헤더 바에 로고 이미지 넣기
1. Image 컴포넌트를 임포트한다.
2. Little Lemon 로고를 렌더링하는 `LogoTitle` 컴포넌트를 새로 만든다.
   - `source`는 이미지 폴더의 `./img/littleLemonLogo.png` 같은 경로를 지정한다.
   - 원본 그대로 표시하지 않도록 스타일을 준다: `height: 40`, `width: 300`, `resizeMode: 'contain'`, 가운데 정렬(center).
3. Welcome 화면의 `Stack.Screen` `options`에 `headerTitle` 속성을 정의한다.
   - `headerTitle`은 텍스트 대신 특정 컴포넌트를 렌더링할 수 있으며, 필요한 만큼 props를 받을 수 있다.
   - props를 받아 `LogoTitle` 컴포넌트를 반환하는 함수를 지정한다.
- 이렇게 하면 Welcome 화면의 헤더 바에 텍스트 대신 Little Lemon 로고가 표시된다.
- 특정 화면의 options에만 지정했으므로 다른 화면에는 영향이 없다. 같은 방식을 다른 화면에도 적용할 수 있다.

### 에뮬레이터 확인 (로고)
- Welcome 페이지 헤더 바에 로고가 표시되고, Menu 화면으로 이동하면 헤더에는 여전히 Menu 텍스트가 표시된다 (로고는 Welcome 페이지에만 지정했기 때문).
- 헤더에는 아이콘, 이미지, 이미지+텍스트 등 원하는 것을 표시할 수 있다.

## 예시

```jsx
import { Image } from 'react-native';

// 헤더에 렌더링할 로고 컴포넌트
const LogoTitle = () => (
  <Image
    style={{ height: 40, width: 300, resizeMode: 'contain', alignSelf: 'center' }}
    source={require('./img/littleLemonSmallLogo.png')}
  />
);

<Stack.Navigator
  screenOptions={{
    headerStyle: { backgroundColor: '#333333' }, // 어두운 배경
    headerTintColor: '#FFFFFF',                  // 밝은 텍스트 색
    headerTitleStyle: { fontWeight: 'bold' },
  }}
>
  <Stack.Screen
    name="Welcome"
    component={WelcomeScreen}
    options={{
      title: 'Home',
      headerTitle: (props) => <LogoTitle {...props} />,
    }}
  />
  <Stack.Screen name="Menu" component={MenuScreen} />
</Stack.Navigator>
```

## 요약
- 헤더 바 스타일은 `headerStyle`(배경색), `headerTintColor`(텍스트 색), `headerTitleStyle`(폰트 굵기·크기·패밀리)로 지정한다.
- 전체 화면 공통 스타일은 `screenOptions`에, 화면별 스타일은 각 `Stack.Screen`의 `options`에 넣는다.
- `headerTitle`에 컴포넌트를 반환하는 함수를 지정하면 헤더 제목 자리에 로고 등 커스텀 컴포넌트를 렌더링할 수 있다.
- 어두운 배경에는 밝은 텍스트 색을 써서 대비를 확보한다.

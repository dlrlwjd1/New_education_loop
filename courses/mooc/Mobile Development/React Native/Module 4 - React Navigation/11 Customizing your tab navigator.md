# Customizing your tab navigator

## 개요
- 탭 내비게이터의 기본 물음표(placeholder) 아이콘을 의미 있는 커스텀 아이콘으로 바꾼다.
- 탭이 포커스(focused)/활성(active) 상태인지에 따라 아이콘 모양과 색이 달라지게 한다.
- Expo의 vector icons 라이브러리(Ionicons)를 사용하며, 다른 아이콘 라이브러리도 사용 가능하다.

## 내용

### 아이콘 라이브러리
- Expo의 vector icons 라이브러리를 사용한다. Expo를 쓰면 기본으로 설치되어 있다.
- 여기서 Ionicons를 임포트한다. 인기 있는 아이콘 세트들이 포함되어 있으며 `icons.expo.fyi`에서 둘러볼 수 있다.

### screenOptions로 tabBarIcon 정의
- Tab.Navigator의 `screenOptions`를 사용하며, `route`를 받는 화살표 함수(arrow function)로 정의한다. route 이름은 Menu 또는 Welcome이다.
- 첫 번째 스크린 옵션으로 `tabBarIcon`을 지정한다.
- `tabBarIcon` 함수는 다음 매개변수를 받는다.
  - `focused`: 아이콘이 포커스 상태인지 알려주는 불리언(Boolean)
  - `color`, `size`: 아이콘 색과 크기
- 아이콘 이름을 변수로 두고 로직을 작성한다.
  - `route.name`이 Welcome이면: 포커스 여부에 따라 다른 아이콘을 쓴다. 여기서는 'ios-information-circle-outline' 계열 아이콘을 사용한다.
  - `route.name`이 Menu이면: 'ios-list' 아이콘을 사용한다.
- 마지막으로 Ionicons 컴포넌트를 반환하며 `name`에 정의한 아이콘 이름, `size`와 `color`를 전달한다.

### 활성/비활성 틴트 색(tint color)
- 아이콘의 활성/비활성 상태에 따라 색을 적용한다.
- `tabBarActiveTintColor: 'tomato'`, `tabBarInactiveTintColor: 'gray'` 옵션을 추가한다.

### 에뮬레이터 확인
- 하단 왼쪽 탭에는 info 아이콘, 오른쪽 탭에는 iOS list 아이콘이 표시된다.
- 탭을 누르면 활성화되어 tomato 색으로 바뀌고, 비활성 탭은 gray가 된다.

## 예시

```jsx
import Ionicons from '@expo/vector-icons/Ionicons';

<Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === 'Welcome') {
        iconName = focused
          ? 'ios-information-circle'
          : 'ios-information-circle-outline';
      } else if (route.name === 'Menu') {
        iconName = 'ios-list';
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  })}
>
  <Tab.Screen name="Welcome" component={WelcomeScreen} />
  <Tab.Screen name="Menu" component={MenuScreen} />
</Tab.Navigator>
```

## 요약
- `screenOptions`를 route를 받는 함수로 정의하고 `tabBarIcon`에서 route 이름과 `focused` 여부에 따라 아이콘을 결정한다.
- 아이콘은 Expo vector icons의 Ionicons 컴포넌트로 렌더링하며 name, size, color를 전달한다.
- `tabBarActiveTintColor`와 `tabBarInactiveTintColor`로 활성/비활성 탭 색을 지정한다 (예: tomato / gray).

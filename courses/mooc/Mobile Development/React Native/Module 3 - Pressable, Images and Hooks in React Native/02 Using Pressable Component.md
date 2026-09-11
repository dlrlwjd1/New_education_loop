# Using Pressable Component

## 개요
- Little Lemon 앱에 Pressable 컴포넌트로 View Menu 버튼을 실제 구현하는 데모 강의다.
- `onPress` 콜백과 `useState` 훅(hook)으로 로컬 상태(local state) showMenu를 토글해 메뉴를 표시/숨김 처리한다.
- 조건부 렌더링(conditional rendering)으로 버튼 텍스트와 메뉴, 소개 텍스트의 표시 여부를 제어한다.

## 내용

### 목표
- 기존 메뉴 컴포넌트에는 메뉴 아이템 목록과 섹션 헤더가 이미 있다.
- 홈 화면에 "View Menu" 버튼을 추가하고, 클릭하면 메뉴가 나타나게 한다.
- 버튼을 아직 누르지 않았을 때는 소개 텍스트를 화면에 표시한다.

### Pressable 버튼 추가
1. react-native에서 Pressable 컴포넌트를 import한다.
2. View 안에 식당 소개와 메뉴 보기를 유도하는 텍스트 컴포넌트를 추가하고 스타일을 적용한다.
3. 그 텍스트 아래에 Pressable 컴포넌트를 추가하고 미리 정의한 스타일을 적용한다.
4. Pressable에 `onPress` 속성을 추가한다. 이는 사용자가 눌리는 영역을 클릭하는 순간 트리거되는 콜백 함수(callback function)다.
5. Pressable 안에 "View Menu" 텍스트 컴포넌트를 넣고 스타일링한다. Pressable이 이 텍스트를 감싸므로 텍스트 전체가 눌릴 수 있게 된다.

### useState로 로컬 상태 정의
- 사용자가 버튼을 클릭했는지 추적하기 위해 로컬 상태 `showMenu`와 세터(setter) `setShowMenu`를 `useState` 훅으로 정의한다.
- 기본값은 `false`(메뉴 숨김)이며, 버튼을 누르면 메뉴가 나타난다.
- `onPress` 콜백에서 `setShowMenu`를 호출해 showMenu의 불리언(Boolean) 값을 토글한다. true면 false로, false면 true로 바뀐다.

### 조건부 렌더링
- **버튼 텍스트**: 조건 연산자(conditional operator)를 사용해 showMenu가 true면 "Home", false면 "View Menu"를 같은 버튼 안에 표시한다.
- **SectionList**: showMenu가 true일 때만 렌더링되도록 연산자를 추가한다. View Menu를 누르면 메뉴가 보이고, Home을 누르면 사라진다.
- **소개 텍스트**: 텍스트 컴포넌트 앞에 `!showMenu &&`(논리 AND 연산자)를 붙여 메뉴가 보이지 않을 때만 표시한다.

### 스타일링
- 스타일시트에 `button` 스타일: 폰트 크기, 패딩(padding) 등 공통 속성 설정.
- `buttonText` 스타일: 색상, 정렬, 폰트 크기 설정.
- 실제 Button 컴포넌트가 아니라 Pressable을 버튼처럼 보이도록 스타일링해 사용한 것이다.

### 실행 결과
- 초기 화면에는 소개 텍스트와 View Menu 버튼이 보인다.
- 버튼 클릭 시 소개 텍스트가 사라지고 메뉴가 표시되며, 버튼 텍스트가 "Home"으로 바뀐다. 클릭이 showMenu를 true로 바꾸고 onPress가 트리거된 결과다.
- 다시 클릭하면 showMenu가 false로 토글되어 이전 화면으로 돌아간다.

## 예시

강의 설명 기반으로 재구성한 코드:

```jsx
import React, { useState } from 'react';
import { View, Text, Pressable, SectionList, StyleSheet } from 'react-native';

const MenuScreen = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <View>
      {!showMenu && (
        <Text style={styles.infoSection}>
          Little Lemon 소개 텍스트 — 메뉴를 확인해 보세요.
        </Text>
      )}
      <Pressable
        style={styles.button}
        onPress={() => setShowMenu(!showMenu)}>
        <Text style={styles.buttonText}>
          {showMenu ? 'Home' : 'View Menu'}
        </Text>
      </Pressable>
      {showMenu && (
        <SectionList
          // 메뉴 아이템과 섹션 헤더 렌더링
        />
      )}
    </View>
  );
};
```

## 요약
- Pressable을 import해 텍스트를 감싸면 버튼처럼 동작하는 눌림 영역을 만들 수 있다.
- `useState` 훅으로 showMenu 로컬 상태(기본값 false)를 정의하고, `onPress` 콜백에서 값을 토글한다.
- 조건 연산자로 버튼 텍스트를 "View Menu"/"Home"으로 전환하고, `showMenu &&`, `!showMenu &&` 패턴으로 메뉴와 소개 텍스트의 렌더링을 제어한다.
- 진짜 Button 컴포넌트 대신 Pressable을 스타일링해 버튼 역할을 수행하게 했다.

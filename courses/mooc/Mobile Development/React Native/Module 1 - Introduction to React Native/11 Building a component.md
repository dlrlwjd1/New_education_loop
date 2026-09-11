# Building a component

## 개요
- 첫 커스텀 React 컴포넌트(LittleLemonHeader)를 만들어 App.js에서 재사용하는 데모 강의
- 컴포넌트는 `components` 폴더에 별도 파일로 만들고, 이름은 반드시 대문자로 시작해야 한다
- 만든 컴포넌트는 import해서 어느 화면에서든 재사용할 수 있다

## 내용
### 배경: 컴포넌트의 분류 복습
React Native는 컴포넌트의 모음이다. 코어 컴포넌트(예: `View`)는 React Native에서 제공되고, 커뮤니티 컴포넌트는 설치해야 하는 커뮤니티 패키지에서 오며, 네이티브 컴포넌트는 직접 만든다. 이 모든 것이 React 컴포넌트라는 우산 아래에 속한다. React Native는 본질적으로 React로 작성되므로 헤더용 컴포넌트, 푸터용 컴포넌트, 메뉴 바용 컴포넌트 등 커스텀 React 컴포넌트를 원하는 만큼 만들 수 있다. 컴포넌트는 재사용 가능한 코드 조각이다.

### 헤더 컴포넌트 만들기
Little Lemon Restaurant 앱에 "Little Lemon Restaurant"이라는 헤더를 표시해야 한다.

1. **components 폴더 생성** — 재사용 헤더를 만들려면 프로젝트에 `components` 폴더가 필요하다. 없으면 만들고, 그 안에 `LittleLemonHeader.js` 파일을 생성한다.
2. **컴포넌트 작성** — `App.js`에 있던 컴포넌트 구조를 복사해 와서 이름을 `LittleLemonHeader`로 한다. **모든 React 컴포넌트 이름은 대문자로 시작해야 한다.** 부모 `View` 컴포넌트 안에 `Text` 컴포넌트로 헤더 텍스트(Little Lemon Restaurant)를 넣는다.
3. **App.js에서 사용** — `import` 키워드로 `components/LittleLemonHeader`에서 컴포넌트를 가져온다(VS Code 같은 IDE가 경로를 자동으로 찾아준다). 애플리케이션의 루트(root)인 App 컴포넌트의 `View` 안에서 `<LittleLemonHeader />`를 호출하면 끝이다.

### 스타일링
처음 렌더링하면 텍스트가 화면 맨 위에 붙어 잘 보이지 않는다. `View` 컴포넌트에 스타일 속성을 추가한다: `flex: 1`, `justifyContent: 'flex-start'`, `padding: 45`(45픽셀). 에뮬레이터로 돌아가면 헤더가 제대로 보인다.

### 팁
직접 만든 컴포넌트 위에서 우클릭 → "Go to Definition"을 클릭하면 새로 만든 컴포넌트 정의로 이동할 수 있다.

## 예시
```jsx
// components/LittleLemonHeader.js
import React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View>
      <Text>Little Lemon Restaurant</Text>
    </View>
  );
}
```

```jsx
// App.js
import { View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', padding: 45 }}>
      <LittleLemonHeader />
    </View>
  );
}
```

## 요약
- 커스텀 컴포넌트는 `components` 폴더에 별도 파일(`LittleLemonHeader.js`)로 만든다.
- React 컴포넌트 이름은 반드시 대문자로 시작한다.
- App.js에서 import 후 JSX 태그로 호출하면 어느 화면에서든 재사용할 수 있다.
- `flex: 1`, `justifyContent: 'flex-start'`, `padding: 45` 같은 스타일로 표시 위치를 다듬는다.

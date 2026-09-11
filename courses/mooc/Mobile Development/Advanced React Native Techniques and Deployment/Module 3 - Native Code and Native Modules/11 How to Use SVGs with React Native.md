# How to Use SVGs with React Native

## 개요
- SVG(Scalable Vector Graphics)는 XML 기반 벡터 이미지 포맷으로, 아이콘·로고·단순 이미지에 PNG보다 유리함
- `react-native-svg` 패키지를 설치하고, SVG 코드를 React Native 컴포넌트로 변환해 렌더링하는 방법
- 변환한 SVG 컴포넌트에 props(`width`, `height`, `stroke`/`fill`)를 전달해 크기·색상을 커스터마이징

## 내용

### SVG란? SVG vs PNG
- SVG는 Scalable Vector Graphics의 약자로, 벡터 그래픽을 표시하는 XML 기반 이미지 포맷이다.
- React Native 앱에서는 일반적으로 SVG가 PNG보다 나은 선택이지만 용도에 따라 다르다.
  - SVG 장점: 확장성(scalability), 작은 파일 크기, 높은 커스터마이징 가능성, 성능 — 작은 크기로 좋은 품질 제공
  - 아이콘, 로고, 단순 이미지에는 SVG를 사용해 품질 손실을 막는다.
  - 상품 사진 같은 복잡한 이미지는 PNG를 사용한다.

### SVG 아이콘 구하고 변환하기
1. SVG 아이콘 사이트(예: SVG Repo)에서 아이콘(예: phone)을 검색해 "Download SVG Vector"로 `.svg` 파일을 받는다.
2. SVG를 앱에서 쓰는 방법은 두 가지: 코드로 사용하거나 파일로 사용. 이 강의에서는 커스터마이징이 쉬운 코드 방식을 사용한다.
3. SVG Viewer 사이트에 SVG 코드를 붙여넣으면 React / React Native 컴포넌트로 변환해 준다 (JSX 다운로드 또는 복사).
   - SVG 코드는 브라우저에서 아이콘을 우클릭 → Inspect → 해당 `<svg>` 요소를 "Copy element"로 얻을 수 있다.
   - 사이트의 Edit vector 기능으로 색상 변경 등 편집도 가능하다.
4. PNG를 SVG로 바꾸고 싶으면 "PNG to SVG converter"를 검색하거나 Figma(또는 Adobe XD 등)를 사용한다. Figma에 이미지를 드래그 앤 드롭한 뒤 우클릭 → "Copy as SVG"로 SVG 코드를 얻는다.

### 패키지 설치

```bash
yarn add react-native-svg
npx pod-install   # iOS
yarn ios
yarn android
```

### SVG 컴포넌트 만들기와 렌더링
- `src/assets/icons/` 폴더를 만들고 `AppIcon.tsx` 파일에 변환된 JSX 코드를 붙여넣는다.
- 컴포넌트 이름을 `AppIcon`으로 바꾸고, props 타입은 `react-native-svg`의 `SvgProps`로 지정한다.
- `App.tsx`에서 import해 렌더링한다.

### 크기·색상 커스터마이징
- 아이콘이 너무 크면 컴포넌트 내부의 `width`/`height`를 줄이거나, 사용하는 쪽에서 `width={30} height={30}` props로 제어한다.
- 색상 변경: `stroke` prop을 넘겼는데 적용되지 않으면, SVG 내부 요소가 props를 받도록 `stroke={props.stroke ?? 'black'}` 형태로 연결해야 한다.
- 아이콘에 따라 색상이 `stroke`가 아니라 `fill`로 제어되는 경우도 있다 — SVG 코드 구조에 따라 다르다.
- SVG 다루기는 다소 까다롭지만(tricky) 다루다 보면 익숙해진다.

## 예시

```tsx
// src/assets/icons/AppIcon.tsx
import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const AppIcon = (props: SvgProps) => (
  <Svg width={15} height={15} viewBox="0 0 24 24" {...props}>
    <Path
      d="..."
      stroke={props.stroke ?? 'black'}
    />
  </Svg>
);

export default AppIcon;
```

```tsx
// App.tsx
import AppIcon from './src/assets/icons/AppIcon';

<AppIcon width={100} height={100} stroke="blue" />
```

## 요약
- SVG는 아이콘·로고에 적합한 벡터 포맷이고, 복잡한 이미지는 PNG를 쓴다.
- `yarn add react-native-svg` + iOS `pod install` 후 SVG Viewer로 변환한 JSX를 컴포넌트 파일로 저장해 사용한다.
- props 타입은 `SvgProps`, 크기는 `width`/`height` props로 커스터마이징한다.
- 색상은 아이콘에 따라 `stroke` 또는 `fill`로 제어하며, props가 내부 요소까지 전달되도록 연결해야 한다.
- PNG → SVG 변환은 Figma의 "Copy as SVG" 기능을 활용할 수 있다.

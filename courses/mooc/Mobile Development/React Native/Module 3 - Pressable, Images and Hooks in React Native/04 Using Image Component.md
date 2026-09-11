# Using Image Component

## 개요
- Little Lemon 앱의 웰컴 페이지에 Image 컴포넌트로 로고 이미지를 배치하는 데모 강의다.
- `require` 키워드로 로컬 이미지 파일 경로를 `source` prop에 전달한다.
- 스타일 없이 렌더링하면 이미지가 너무 커서 일부가 잘리며, 다음 강의에서 스타일링으로 해결한다.

## 내용

### 준비
- 웰컴 페이지에는 "Little Lemon, your local Mediterranean bistro"라는 텍스트만 있어 밋밋하다.
- 프로젝트 폴더 안에 이미지 폴더(img)를 만들고, 표시할 Little Lemon 로고를 PNG 파일로 업로드해 둔다.

### Image 컴포넌트 배치 절차
1. react-native에서 Image 컴포넌트를 import한다.
2. 이전에 만든 Welcome 컴포넌트의 View 안, 텍스트 위에 Image 컴포넌트를 배치한다.
3. `source`에 이미지 위치를 정의한다. `require` 키워드를 사용하고 그 안에 파일 경로 `img/littleLemonLogo.png`를 입력한 뒤 이미지 태그를 닫는다.
- 내장 Image 컴포넌트는 `source` prop에 위치만 전달하면 된다. 이 prop은 원격 URL도 받을 수 있는데, 그 경우 미리 지정된 치수(dimensions)를 가진 컨테이너가 필요하다. 이 데모에서는 로컬 파일 경로로 충분하다.

### 결과 확인
- 에뮬레이터(emulator)에서 확인하면 로고가 웰컴 텍스트 위에 나타난다.
- 그러나 이미지가 필요 이상으로 크고 일부가 잘려 보인다. 이를 고치려면 이미지 스타일링을 적용해야 하며, 다음 강의에서 다룬다.

## 예시

강의 설명 기반 재구성:

```jsx
import { View, Text, Image } from 'react-native';

const Welcome = () => (
  <View>
    <Image source={require('./img/littleLemonLogo.png')} />
    <Text>Little Lemon, your local Mediterranean bistro</Text>
  </View>
);
```

## 요약
- 로컬 이미지는 프로젝트 내 이미지 폴더에 두고 `require('경로')`를 `source` prop에 전달해 표시한다.
- Image 컴포넌트는 원격 URL도 지원하지만, 그 경우 컨테이너에 치수를 미리 지정해야 한다.
- 스타일을 지정하지 않으면 이미지가 원본 크기로 렌더링되어 화면에서 잘릴 수 있다 — 스타일링이 필요하다.

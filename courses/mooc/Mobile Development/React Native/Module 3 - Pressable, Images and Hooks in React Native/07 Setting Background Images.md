# Setting Background Images

## 개요
- 다른 컴포넌트를 위에 올릴 수 있는 배경 이미지(background image)를 렌더링하는 방법을 다룬다.
- React Native의 ImageBackground 컴포넌트를 사용하며, props는 Image 컴포넌트와 매우 유사하다.
- ImageBackground로 콘텐츠를 감싸면 텍스트 등 다른 콘텐츠가 배경 이미지 위에 표시된다.

## 내용

### ImageBackground 컴포넌트
- 배경 이미지 사용은 표준적인 관행(standard practice)이며 자주 요청받게 된다.
- React Native는 배경 이미지 표시를 위해 ImageBackground 컴포넌트를 제공한다.
- 속성은 Image 컴포넌트와 매우 비슷하지만, 이미지를 배경으로 렌더링한다는 점이 다르다. 즉 그 위에 텍스트나 다른 콘텐츠를 둘 수 있다.

### 적용 절차
1. 이미지 폴더에 배경으로 쓸 `LittleLemonBackground.png`를 추가한다.
2. 웰컴 화면 코드에서 ImageBackground 컴포넌트를 import한다.
3. Image 컴포넌트와 마찬가지로 `require` 함수로 `source`를 전달한다(이미지 폴더의 LittleLemonBackground.png).
4. ImageBackground 태그가 웰컴 텍스트를 감싸도록 닫는 태그를 배치한다. 이렇게 하면 웰컴 텍스트가 배경 이미지 위에 표시된다.

### 스타일링
- 스타일시트에 `image` 스타일을 새로 만든다:
  - `flex: 1` — 배경 이미지가 화면 전체 공간을 차지하게 한다.
  - `justifyContent: 'center'` — ImageBackground 컴포넌트 안에 표시되는 모든 것이 가운데에 오게 한다.
- `style` prop으로 `styles.image`를 전달한다.
- `resizeMode` 속성도 ImageBackground에 적용 가능하다. 여기서는 `contain`을 주어 사용 가능한 화면 공간 안에 이미지가 담기게 한다.

### 결과
- Android 에뮬레이터에서 Little Lemon 배경 이미지가 페이지 전체에 표시된다.
- justifyContent: center 스타일 덕분에 웰컴 텍스트가 화면 가운데, 배경 이미지 위에 표시된다.

## 예시

강의 설명 기반 재구성:

```jsx
import { ImageBackground, Text, StyleSheet } from 'react-native';

const Welcome = () => (
  <ImageBackground
    style={styles.image}
    resizeMode="contain"
    source={require('./img/LittleLemonBackground.png')}>
    <Text>Little Lemon, your local Mediterranean bistro</Text>
  </ImageBackground>
);

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
```

## 요약
- 배경 이미지가 필요할 때는 ImageBackground 컴포넌트를 사용한다.
- props는 Image와 유사하며(`source`, `resizeMode` 등), 자식 콘텐츠를 감싸서 배경 위에 렌더링한다.
- `flex: 1`로 화면 전체를 채우고, `justifyContent: 'center'`로 내부 콘텐츠를 가운데 정렬한다.

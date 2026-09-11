# Passing props to the Image Component

## 개요
- Image 컴포넌트에 접근성(accessibility) prop을 전달해 스크린 리더(screen reader) 같은 보조 기술(assistive technology)과 호환되게 만든다.
- `accessible`(불리언)과 `accessibilityLabel`(설명 텍스트) prop을 함께 사용한다.
- borderWidth, borderColor, borderRadius, resizeMode 등 추가 스타일링 옵션을 데모로 살펴본다.

## 내용

### 접근성 props
- 시각 장애가 있는 사용자를 위해 앱 요소를 스크린 리더 등 보조 기술과 호환되게 만드는 것이 중요하다.
- **accessible**: 불리언(Boolean) prop. true면 해당 이미지가 접근성 요소(accessibility element)임을 나타내며, 보조 기술이 상호작용할 수 있게 된다. 이미지에 라벨을 제공할 때 함께 사용한다.
- **accessibilityLabel**: 설명적인 라벨을 지정한다(예: "Little Lemon Logo"). 사용자가 이미지와 상호작용할 때 스크린 리더가 이 라벨을 읽어 준다.
- 접근성 props는 이미지뿐 아니라 다른 컴포넌트에도 사용할 수 있다. 컴포넌트를 추가할 때 항상 접근성을 염두에 둔다.

### 여러 이미지 추가하기
- 페이지가 길어져 스크롤이 필요하므로 View 컨테이너를 ScrollView 컨테이너로 바꾸고 import한다.
- 이미지 폴더에 Picture 1~4를 추가로 넣고, 웰컴 텍스트 아래에 Image 컴포넌트를 복사·붙여넣기로 4개 배치하며 파일명을 각각 갱신한다.
- 로고와 달리 `styles.image`(더 큰 height/width)를 적용해 다르게 스타일링하고, 스크롤 가능하게 만든다.
- 복사한 접근성 라벨도 각 이미지에 맞게 "Food Picture 1", "Food Picture 2" 식으로 고유하게 바꾼다. 실제 앱을 설계할 때는 음식이 무엇인지 설명하는 더 의미 있는 이름을 쓸수록 접근성에 좋다.

### 추가 스타일링 옵션
- **borderWidth**: 10픽셀 테두리를 주면 이미지 렌더링 방식이 크게 달라진다. 기본 테두리 색은 검정이며, 10은 너무 두꺼워 2로 줄인다.
- **borderColor**: 원하는 색으로 변경 가능(데모에서는 빨강). 얇은 빨간 테두리로 표시된다.
- **borderRadius**: 이미지에 모서리 반경도 줄 수 있다. 요구사항에 맞게 스타일을 실험해 본다.
- **resizeMode 변경**: 이미지가 박스를 가득 채우게 하려면 contain 대신 `cover`로 바꾼다. `repeat`으로 바꾸면 이미지가 타일(tiling) 형태로 반복되는데, 이것도 디자인 요구사항이 될 수 있다.
- 테두리가 마음에 들지 않으면 borderWidth/borderColor를 제거하면 더 깔끔하게 표시된다.

## 예시

강의 설명 기반 재구성:

```jsx
<ScrollView>
  <Image
    style={styles.logo}
    source={require('./img/littleLemonLogo.png')}
    resizeMode="contain"
    accessible={true}
    accessibilityLabel="Little Lemon Logo"
  />
  <Text>Little Lemon, your local Mediterranean bistro</Text>
  <Image
    style={styles.image}
    source={require('./img/picture1.png')}
    accessible={true}
    accessibilityLabel="Food Picture 1"
  />
  {/* picture2.png ~ picture4.png 동일 패턴 반복 */}
</ScrollView>
```

```jsx
const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 250,
    borderWidth: 2,
    borderColor: 'red',
  },
});
```

## 요약
- `accessible={true}` + `accessibilityLabel`로 이미지를 보조 기술이 인식하는 접근성 요소로 만든다.
- 라벨은 이미지마다 고유하고 설명적으로 작성할수록 접근성이 좋아진다.
- 긴 페이지는 View 대신 ScrollView로 감싸 스크롤 가능하게 한다.
- borderWidth, borderColor, borderRadius 등으로 이미지 테두리를 커스터마이즈할 수 있다.
- resizeMode를 cover로 하면 박스를 가득 채우고, repeat으로 하면 타일 형태로 반복된다.

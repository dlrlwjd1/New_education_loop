# Styling an Image within the app

## 개요
- 이전 강의에서 추가한 Little Lemon 로고 이미지에 스타일을 적용하는 데모 강의다.
- 스타일시트(StyleSheet)에 height/width를 정의한 logo 스타일을 만들어 `style` prop으로 전달한다.
- 가장자리가 잘리는 문제는 `resizeMode="contain"`으로 해결하며, iOS와 Android 양쪽에서 동일하게 동작한다.

## 내용

### 현재 상태
- View 컴포넌트 안에 Little Lemon 로고를 담은 Image 컴포넌트와 "Little Lemon, your local Mediterranean Bistro" 텍스트 컴포넌트가 있다.
- 여러 스타일을 담은 StyleSheet 컴포넌트가 있어 앱의 요소들에 쉽게 적용할 수 있다.

### logo 스타일 만들기
- 스타일시트에 `logo`라는 새 스타일을 만들고 height 100픽셀, width 300픽셀을 지정한다.
- 이 스타일을 `style` prop으로 Image 컴포넌트에 전달한다(`styles.logo`).
- 에뮬레이터에서 확인하면 로고 양옆 가장자리가 잘려 나온다.

### resizeMode로 해결
- Image 컴포넌트에 `resizeMode` prop을 전달한다. resizeMode는 프레임이 원본 이미지 치수와 맞지 않을 때 이미지를 어떻게 리사이즈할지 결정한다.
- 옵션: cover, contain, stretch, repeat, center
  - **cover**: 이미지의 너비와 높이 모두 뷰의 대응 치수와 같거나 커지도록 균일하게 스케일.
  - **contain**: 이미지의 너비와 높이 모두 뷰의 대응 치수와 같거나 작아지도록 균일하게 스케일.
  - **stretch**: 너비와 높이를 독립적으로 스케일.
  - **repeat**: 프레임을 채울 때까지 같은 이미지를 반복.
  - **center**: 이미지를 가운데에 배치.
- 이 데모에서는 `contain`을 적용해 이미지 두 치수가 뷰 치수 이하가 되도록 균일하게 스케일한다.

### 결과 및 크로스 플랫폼 확인
- 지정한 height/width와 resizeMode 덕분에 로고가 주어진 프레임 안에 완벽하게 담겨 표시된다.
- Android 에뮬레이터에서도 선명하게 표시된다. 같은 코드가 iOS와 Android 양 플랫폼(cross platform)에서 동작한다.

## 예시

강의 설명 기반 재구성:

```jsx
<Image
  style={styles.logo}
  source={require('./img/littleLemonLogo.png')}
  resizeMode="contain"
/>
```

```jsx
const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 300,
  },
});
```

## 요약
- 이미지 스타일은 StyleSheet에 height/width를 정의하고 `style` prop으로 전달한다.
- 크기만 지정하면 이미지가 잘릴 수 있으며, `resizeMode`로 리사이즈 방식을 제어한다.
- cover(뷰 이상으로 스케일) / contain(뷰 이하로 스케일) / stretch(독립 스케일) / repeat(반복) / center(가운데 정렬) 중 선택한다.
- contain을 적용하면 로고가 프레임 안에 온전히 담기며, iOS·Android 모두에서 동일하게 렌더링된다.

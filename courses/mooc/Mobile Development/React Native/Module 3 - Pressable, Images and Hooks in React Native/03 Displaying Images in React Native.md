# Displaying Images in React Native

## 개요
- Image는 다양한 종류의 이미지를 표시하는 React Native 코어 컴포넌트(core component)다.
- 정적 리소스, 임시 로컬 이미지, 카메라 롤 등 로컬 디스크 이미지, 네트워크 이미지를 모두 표시할 수 있다.
- `source` prop으로 이미지 위치(로컬 경로 또는 네트워크 URI)를 전달하고, `resizeMode`로 크기 조정 방식을 제어한다.

## 내용

### Image 컴포넌트란
- Little Lemon 앱에는 헤더, 리스트, 텍스트 입력, 버튼이 있지만 시각적으로 부족하므로 로고와 이미지를 추가한다.
- Image 컴포넌트로 표시할 수 있는 이미지 종류:
  - 리소스의 정적 이미지(static images)
  - 임시 로컬 이미지(temporary local images)
  - 카메라 롤(camera roll) 같은 로컬 디스크의 이미지
  - 네트워크 이미지(network images)

### 로컬 이미지 추가하기
1. React Native 프로젝트의 소스 폴더 안에 `img` 폴더를 만든다(없다면).
2. 앱에 표시할 이미지들을 이 폴더에 넣고, 나중에 참조하기 쉽도록 의미 있는 파일명을 붙인다.
3. Image 컴포넌트를 View 안에 배치하고, `source` prop에 이미지 위치(예: `./img/littlelemonlogo.png`)를 전달한다.
4. 페이지가 렌더링될 때 Image 컴포넌트가 이미지 파일을 로드해 전달된 스타일대로 렌더링한다.

### 스타일링과 resizeMode
- 스타일시트(StyleSheet)에서 이미지의 height와 width를 설정한다.
- `resizeMode` prop은 프레임(frame)과 이미지 크기가 맞지 않을 때 이미지를 어떻게 리사이즈할지 결정한다:
  - **contain**: 이미지의 크기가 뷰(패딩 제외)의 대응 치수 이하가 되도록 균일하게 스케일한다.
  - **stretch**: 너비와 높이를 서로 독립적으로 스케일한다.
  - **repeat**: 뷰의 프레임을 덮을 때까지 이미지를 반복한다.
  - **cover**: 최소 한 치수가 뷰와 같아지도록 스케일한다.
  - **center**: 이미지를 뷰의 가운데에 배치한다.

### 네트워크 이미지
- 로컬 파일 외에 인터넷의 이미지도 렌더링할 수 있다.
- 파일 경로 대신 이미지가 호스팅된 네트워크 위치의 URI(Uniform Resource Identifier)를 `source` prop에 전달한다.
- `loadingIndicatorSource` prop: 이미지 로딩 인디케이터를 렌더링할 리소스를 지정한다. 네트워크 URI에서 이미지가 다운로드되어 렌더링 준비가 될 때까지 표시되어, 사용자에게 무언가 로드 중임을 알려준다.

### 지원 이미지 포맷
- iOS와 Android 모두: PNG, JPEG, GIF, WebP
- iOS 전용: PSD, RAW 및 여러 비압축(uncompressed) 이미지 포맷 — 최고 해상도 이미지를 적용할 때 유용하다.

## 예시

강의 설명 기반 재구성:

```jsx
// 로컬 이미지
<View>
  <Image
    style={styles.logo}
    source={require('./img/littlelemonlogo.png')}
    resizeMode="contain"
  />
  <Text>Little Lemon</Text>
</View>

// 네트워크 이미지
<Image
  style={styles.logo}
  source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
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
- Image 컴포넌트는 정적/로컬/카메라 롤/네트워크 이미지를 표시하는 코어 컴포넌트다.
- 로컬 이미지는 프로젝트의 img 폴더에 두고 `source`에 경로를 전달하며, 네트워크 이미지는 URI를 전달한다.
- `resizeMode`(contain, stretch, repeat, cover, center)로 프레임과 이미지 크기 불일치를 처리한다.
- `loadingIndicatorSource`로 네트워크 이미지 로딩 중 표시할 인디케이터를 지정할 수 있다.
- PNG, JPEG, GIF, WebP는 양 플랫폼 지원, PSD·RAW 등은 iOS 전용이다.

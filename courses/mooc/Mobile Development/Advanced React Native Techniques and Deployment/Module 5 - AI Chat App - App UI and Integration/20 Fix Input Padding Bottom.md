# Fix Input Padding Bottom

## 개요
- iOS에서 키보드가 열렸을 때 `ChatInput` 아래 여백이 지나치게 커지는 문제를 해결한다.
- 앞에서 만든 `useKeyboardState` 훅으로 키보드 표시 여부를 확인한다.
- 키보드 상태에 따라 하단 패딩을 10 또는 20으로 동적으로 바꾼다.

## 내용
### 문제 상황
- 키보드가 닫힌 상태에서는 큰 하단 패딩이 입력창과 화면 가장자리 사이의 여백을 만든다.
- 같은 값을 키보드가 열린 상태에 적용하면 입력창 아래 공간이 과도하게 보인다.
- 반대로 패딩을 항상 줄이면 키보드가 닫힌 상태의 UI가 답답해진다.

### 조건부 패딩
- `useKeyboardState()`에서 `isKeyboardVisible`을 가져온다.
- 키보드가 열리면 `verticalScale(10)`, 닫히면 `verticalScale(20)`을 선택한다.
- 계산 결과를 `paddingBottomIOSStyle` 같은 변수에 담아 스타일에 사용한다.

## 예시
```tsx
const { isKeyboardVisible } = useKeyboardState();
const paddingBottomIOSStyle = isKeyboardVisible
  ? verticalScale(10)
  : verticalScale(20);

const styles = StyleSheet.create({
  container: {
    paddingBottom: paddingBottomIOSStyle,
  },
});
```

## 요약
- 고정 패딩 대신 키보드 표시 상태에 따른 조건부 값을 사용한다.
- 키보드가 열렸을 때는 10, 닫혔을 때는 20의 하단 패딩을 적용한다.
- 커스텀 키보드 훅을 입력 컴포넌트의 반응형 레이아웃에도 재사용한다.

# Implementing Swipes, Pinches, and Taps

## 개요

- 모바일 UI의 대표 제스처인 탭, 스와이프, 핀치를 구분한다.
- 각 제스처의 이벤트 값과 실제 사용 사례를 설명한다.

## 내용

### 제스처 종류

- 탭(tap): 버튼 선택, 카운터 증가 같은 단일 동작을 실행한다.
- 스와이프·팬(swipe/pan): x·y 이동량을 읽어 카드 이동이나 방향 전환을 처리한다.
- 핀치(pinch): 두 손가락 사이의 scale을 읽어 이미지 확대·축소에 사용한다.

### 상태 처리

제스처는 시작(begin), 활성(active), 종료(end) 상태를 거친다. 종료 시점에 동작을 확정하거나 애니메이션을 원상 복구할 수 있다.

## 예시

```tsx
const onPan = ({ nativeEvent }) => {
  if (nativeEvent.translationX > 0) setDirection('right');
  if (nativeEvent.translationX < 0) setDirection('left');
};

const onPinch = ({ nativeEvent }) => setScale(nativeEvent.scale);
```

## 요약

- 탭은 선택, 팬은 이동, 핀치는 확대·축소에 주로 사용한다.
- 이벤트의 translation과 scale 값을 앱 상태나 애니메이션에 연결한다.
- 제스처 상태의 종료 시점을 명확히 처리한다.

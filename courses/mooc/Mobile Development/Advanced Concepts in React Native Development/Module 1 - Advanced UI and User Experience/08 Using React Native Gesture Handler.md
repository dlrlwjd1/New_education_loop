# Using React Native Gesture Handler

## 개요

- React Native Gesture Handler가 네이티브 쪽에서 터치 입력을 처리하는 이유를 설명한다.
- 팬·탭·핀치·플링·회전 제스처와 조합 방법을 소개한다.

## 내용

### 주요 핸들러

Pan은 드래그와 스와이프, Tap은 단일·이중·긴 탭, Pinch는 확대·축소, Rotation은 회전을 처리한다. 네이티브 이벤트 처리 덕분에 복잡한 상호작용도 비교적 부드럽게 동작한다.

### 루트 설정과 조합

제스처를 사용하는 영역은 `GestureHandlerRootView` 안에 있어야 한다. 여러 제스처를 동시에 인식해야 할 때는 서로의 우선순위와 동시 실행 조건을 신중히 설정한다.

## 예시

```tsx
<GestureHandlerRootView style={{ flex: 1 }}>
  <PanGestureHandler onGestureEvent={onPan}>
    <Animated.View style={animatedStyle} />
  </PanGestureHandler>
</GestureHandlerRootView>
```

## 요약

- Gesture Handler는 일관되고 성능 좋은 네이티브 제스처 처리를 제공한다.
- 앱 루트를 GestureHandlerRootView로 감싸야 한다.
- 복수 제스처는 충돌과 동시 인식 조건을 함께 설계한다.

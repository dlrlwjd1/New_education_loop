# Task Time - Task 1

## 개요
- 앱 로고가 화면 왼쪽 밖에서 중앙으로 들어오는 인트로 애니메이션을 구현한다.
- 강의 해설에서는 시작 위치, 지연 실행, transform 연결 과정을 보여 준다.

## 내용
### 과제 요구사항
- 로고의 초기 수평 위치를 화면 밖의 `-500`으로 설정한다.
- 2초를 기다린 뒤 1.5초 동안 중앙 위치 `0`으로 이동시킨다.
- `useNativeDriver: true`를 사용한다.

### 구현 흐름
- `useRef`에 `translateX`를 만든다.
- `Animated.timing`으로 목표값 `0`을 설정하고 `.start()`를 호출한다.
- 마운트 시 `useEffect`와 `setTimeout`으로 애니메이션 시작을 지연한다.
- 로고의 transform 스타일에 `translateX`를 연결한다.

## 예시
```tsx
useEffect(() => {
  const timer = setTimeout(() => {
    Animated.timing(translateX, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, 2000);

  return () => clearTimeout(timer);
}, [translateX]);
```

## 요약
- 화면 밖에서 시작한 로고를 `translateX: 0`으로 이동한다.
- 지연 타이머와 애니메이션 값을 컴포넌트 생명주기에 맞춰 관리한다.

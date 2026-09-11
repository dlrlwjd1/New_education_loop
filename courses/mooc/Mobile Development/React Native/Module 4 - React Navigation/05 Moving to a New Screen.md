# Moving to a New Screen

## 개요
- 화면 이동은 한 방향이 아니며, 사용자는 앞으로·뒤로 이동하거나 스택(stack)을 건너뛸 수 있어야 한다.
- navigation prop은 네이티브 스택 내비게이터의 모든 스크린 컴포넌트에 전달된다.
- navigation prop의 핵심 메서드: `navigate`, `push`, `goBack`, `popToTop`.

## 내용

### 웹과의 비교
- 웹 브라우저에서는 앵커 태그(anchor tag)의 `href`에 라우트를 넣어 이동한다. 텍스트를 클릭하면 예를 들어 detail.html로 이동한다.
- 모바일에서는 비슷한 일을 navigation prop으로 수행한다. 이 prop은 네이티브 스택 내비게이터의 모든 스크린 컴포넌트에 전달되며, 여러 함수를 호출해 다양한 동작을 설정할 수 있다.

### navigate 메서드
- 이동하고 싶은 라우트(route)의 이름과 함께 호출한다.
- 예: "Go to details"라는 Button의 `onPress`에서 `navigation.navigate('Details')`를 호출하면 사용자가 Details 라우트로 이동한다.
- 정의하지 않은 라우트 이름으로 호출하면 개발 빌드(development build)에서는 에러가 출력되고, 프로덕션 빌드(production build)에서는 아무 일도 일어나지 않는다. 앱이 크래시하지는 않는다.

### push 메서드
- 내비게이션 스택에 새 라우트를 추가할 때 호출한다.
- `navigate`와의 차이:
  - `navigate`: 먼저 해당 이름의 기존 라우트를 찾고, 스택에 없을 때만 새 라우트를 푸시한다.
  - `push`: 내비게이션 히스토리와 무관하게 항상 스택 맨 위에 새 라우트를 추가한다.

### goBack 메서드
- 이전 화면으로 돌아가는 방법 중 하나는 내비게이터가 제공하는 헤더 바의 자동 뒤로 가기 버튼을 쓰는 것이다.
- 코드로 처리하려면 `goBack` 메서드를 사용하며, 내비게이션 히스토리상 이전 화면으로 돌아간다.
- 예: Screen 1 → 2 → 3 → 4로 이동한 뒤 `goBack`을 호출하는 버튼을 누르면 Screen 3으로 돌아간다.

### popToTop 메서드
- 한 화면씩 거치지 않고 첫 번째 화면으로 즉시 돌아가게 한다.
- 히스토리에 어떤 화면이 있든 `popToTop` 버튼 하나로 Screen 1로 돌아갈 수 있다.

## 예시

```jsx
// 웹 브라우저의 방식
// <a href="detail.html">Go to details</a>

// React Native + React Navigation의 방식
<Button
  title="Go to details"
  onPress={() => navigation.navigate('Details')}
/>

// 항상 스택 위에 새 라우트 추가
navigation.push('Details');

// 이전 화면으로
navigation.goBack();

// 첫 화면으로 즉시 이동
navigation.popToTop();
```

## 요약
- navigation prop은 스택 내비게이터의 모든 스크린에 전달되며, 이를 통해 내비게이션 동작을 제어한다.
- `navigate(routeName)`: 해당 라우트로 이동. 스택에 없을 때만 새로 푸시한다.
- `push(routeName)`: 히스토리와 무관하게 항상 스택 맨 위에 새 라우트를 추가한다.
- `goBack()`: 히스토리상 이전 화면으로 돌아간다.
- `popToTop()`: 첫 번째 화면으로 즉시 돌아간다.

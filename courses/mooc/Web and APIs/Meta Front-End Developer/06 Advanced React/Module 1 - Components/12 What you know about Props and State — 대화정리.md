# What you know about Props and State — 대화정리

> 원본 강의: [12 What you know about Props and State.md](12%20What%20you%20know%20about%20Props%20and%20State.md)

## 개요
- props와 state의 핵심 차이를 정리하는 강의. 둘 다 일반 자바스크립트 객체이고 렌더링 결과에 영향을 주지만, 값의 원천(source)이 다르다.

## 내용

### props vs state
- **props**: 함수의 매개변수(parameter)처럼, **부모가 컴포넌트에 전달**하는 값.
- **state**: 컴포넌트 **내부에서 선언되고 관리**되는 값 (함수 안에서 선언된 지역 변수 같은 것).
- 핵심 경험칙: **"컴포넌트가 특정 시점에 어떤 값을 스스로 바꿔야 한다면, 그 값은 state여야 한다."**

### "props를 state에 복사"하면 안 되는 이유 (out of sync)
- 자식 컴포넌트가 부모에게 받은 prop 값을 직접 수정하고 싶을 때, `useState(props.count)`처럼 prop을 state의 초기값으로 복사하는 방법을 떠올리기 쉽다.
- 하지만 `useState(count)`의 `count`는 **컴포넌트가 처음 mount될 때 딱 한 번만** 초기값으로 쓰인다. 이후 부모가 새로운 `count` prop을 내려줘도 자식의 로컬 state는 자동으로 갱신되지 않는다.
- 결과적으로 부모 state와 자식 state가 서로 다른 값으로 어긋나기(out of sync) 시작한다. ("초기 스냅샷만 가져와서 독립적으로 수정하는 편집 폼" 같은 특수한 경우엔 의도한 동작일 수 있지만, 대부분은 원치 않는 버그가 된다.)

### 표준적인 해법: state 끌어올리기 (lifting state up)
- 자식이 바꿔야 하는 값이라면, 그 state는 애초에 그 값을 실제로 소유해야 하는 곳(보통 더 위쪽 공통 부모)에 두고, 자식에게는 **값 + 그 값을 바꿀 수 있는 함수(콜백)**를 함께 내려준다.
- 자식은 값을 절대 직접 수정하지 않는다. 그냥 표시하고, 변경은 부모에게 콜백으로 요청한다.
- 이렇게 하면 값의 단일 정보 소스(single source of truth)는 항상 한 곳(부모)뿐이라, 자식이 여러 개여도 서로 다른 값으로 어긋날 일이 없다.

## 예시

```jsx
function Parent() {
  const [count, setCount] = useState(0);
  return (
    <Child
      count={count}
      onIncrement={() => setCount((c) => c + 1)}
    />
  );
}

function Child({ count, onIncrement }) {
  // count를 절대 직접 수정하지 않는다. 그냥 표시하고, 변경은 부모에게 요청한다.
  return <button onClick={onIncrement}>{count}</button>;
}
```

## 요약
- props는 부모가 내려주는 읽기 전용 값, state는 컴포넌트가 스스로 관리하는 값이다.
- 자식이 값을 바꿔야 한다고 해서 prop을 state로 복사하면, 이후 부모가 값을 바꿔도 자식이 따라가지 못해 어긋난다.
- 표준 해법은 state를 공통 부모로 끌어올리고(lifting state up), 자식에게는 값과 그 값을 바꾸는 콜백을 함께 내려주는 것이다. 이 패턴은 로드맵 1-B의 "부모→자식 데이터 흐름", Phase 4의 React Navigation 파라미터 전달로 이어진다.

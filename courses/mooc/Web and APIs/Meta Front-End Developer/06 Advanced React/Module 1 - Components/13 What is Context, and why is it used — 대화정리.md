# What is Context, and why is it used? — 대화정리

> 원본 강의: [13 What is Context, and why is it used.md](13%20What%20is%20Context%2C%20and%20why%20is%20it%20used.md)

## 개요
- 12번에서 다룬 "state 끌어올리기(lifting state up)"의 한계를 해결하는 도구가 Context다. 로그인 사용자, 테마, 지역 설정처럼 앱 여러 곳에서 동시에 필요한 전역(global) 데이터를 다룰 때 쓴다.

## 내용

### Prop drilling 문제
- state를 공통 부모로 끌어올리고 props로 내려주는 방식만 쓰면, 값이 실제로 필요한 컴포넌트가 트리 깊숙한 곳에 있을 때 중간의 모든 컴포넌트가 그 값을 **쓰지도 않으면서 그저 통과시키기 위해** 받아야 한다. 이를 **prop drilling**이라 부른다.
- 예: `App → Layout → Header → Nav → UserBadge`에서 `UserBadge`만 `user`를 쓰는데, `Layout`/`Header`/`Nav`도 전부 `user`를 받아서 넘겨야 한다.
- 문제점: 코드가 지저분해지고, 나중에 데이터 구조가 바뀌면 중간 컴포넌트 시그니처를 전부 고쳐야 하고, 관심 없는 데이터에 중간 컴포넌트들이 불필요하게 결합된다.

### Context의 해법
- Context는 트리 상단에서 값을 한 번 `Provider`로 "제공"해두면, 중간 단계를 거치지 않고 필요한 컴포넌트가 `useContext`로 직접 구독해서 꺼내 쓸 수 있게 해준다.
- `UserContext.Provider`는 소비(consuming) 컴포넌트가 컨텍스트 변경을 구독할 수 있게 하는 컴포넌트다.

```jsx
const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState({ name: 'Jinho' });
  return (
    <UserContext.Provider value={user}>
      <Layout />
    </UserContext.Provider>
  );
}

function Layout() { return <Header />; }   // user를 모르고, 받지도 않는다
function Header() { return <Nav />; }       // 마찬가지
function Nav() { return <UserBadge />; }    // 마찬가지

function UserBadge() {
  const user = useContext(UserContext); // 중간 단계 다 건너뛰고 바로 구독
  return <Text>{user.name}</Text>;
}
```

### Context vs 전역 상태 관리 라이브러리(Redux, Zustand, Recoil, Jotai 등)

**Context 장점**
- React 내장 — 별도 라이브러리 설치·번들 크기·버전 관리 부담이 없다.
- API가 단순하다 (`createContext` + `Provider` + `useContext`) — 액션·리듀서·미들웨어 같은 별도 개념이 필요 없다.
- 자주 안 바뀌는 전역 값(테마, 로그인 사용자, 언어 설정)에는 충분하고 딱 맞다.

**Context 단점**
- 값이 바뀌면 **구독자 전부가 리렌더링**된다 — 선택적 구독(내가 쓰는 조각만)이 기본으로 안 된다. 완화하려면 Context를 여러 개로 쪼개거나 `Provider`의 `value`를 `useMemo`로 감싸야 한다.
- 개발자 도구(액션 로그, 시간여행 디버깅)가 없다.
- 로깅·영속화·비동기 처리 같은 걸 표준화해주는 미들웨어 생태계가 없다.
- 크고 자주 바뀌는 복잡한 상태에는 성능·구조 둘 다 안 맞는다.

**상태 관리 라이브러리 장점**
- **선택적 구독(selector)** — 실제로 쓰는 상태 조각이 바뀔 때만 리렌더링된다.
- 개발자 도구(특히 Redux), 미들웨어(로깅, 영속화, 비동기 액션) 지원.
- 크고 복잡하고 자주 바뀌는 상태, 캐싱·낙관적 업데이트·undo/redo 같은 패턴에 잘 맞는다.

**상태 관리 라이브러리 단점**
- 추가 의존성(번들 크기, 버전 관리), 러닝커브(액션/리듀서/dispatch, atom 개념 등).
- 값이 단순하고 드물게 바뀌는 경우엔 과한 도구가 될 수 있다.

### 성능 차이의 실체 — 언제 진짜 문제가 되는가
- Context의 `value`가 바뀌면 그 Context를 구독하는 **모든** 컴포넌트가 리렌더링된다. 예: `{ user, notificationCount }`를 하나의 Context에 담고 `notificationCount`가 웹소켓으로 몇 초마다 갱신되면, `user.name`만 쓰는 다른 컴포넌트들도 매번 같이 리렌더링된다.
- 하지만 **컴포넌트 개수가 적고 각 컴포넌트가 가벼우면** 이 리렌더링은 사람이 체감할 정도의 성능 저하로 이어지지 않는다. React의 재조정(reconciliation)은 단순한 렌더에는 매우 빠르다.
- 진짜 문제가 되는 경우: 리렌더링되는 컴포넌트가 수백 개 항목을 그리는 무거운 리스트일 때, 리렌더링마다 비싼 계산(정렬·필터링·애니메이션)이 같이 실행될 때, 또는 갱신 빈도가 초당 수십 번일 때.
- 실무 원칙: **측정하기 전엔 최적화하지 않는다.** React DevTools Profiler로 실제 병목을 확인한 뒤에만 Context 분리나 라이브러리 도입을 고려한다. "이론적으로 전부 리렌더링된다"는 사실만으로 미리 라이브러리부터 얹는 건 과잉 엔지니어링이다.

## 예시
- 로드맵 관점: 이 로드맵의 Phase 8 산출물(실전 앱 1개)은 로그인 사용자, 테마 정도의 전역 상태만 필요할 가능성이 높다. 그 정도라면 Context + `useReducer`만으로 충분하고, Redux/Zustand를 새로 배워서 얹는 건 과할 수 있다.

## 요약
- Context는 prop drilling(중간 컴포넌트가 쓰지도 않는 값을 계속 통과시키는 문제)을 해결하는 React 내장 도구다.
- Context는 값이 바뀌면 구독자 전부가 리렌더링되는 반면, 전역 상태 관리 라이브러리는 선택적 구독으로 필요한 컴포넌트만 리렌더링한다.
- 선택 기준은 **값의 변경 빈도와 상태 복잡도**다 — 드물게 바뀌는 전역 값(테마, 인증 사용자)은 Context로 충분하고, 자주 바뀌고 복잡한 상태는 라이브러리가 유리하다.
- 성능 문제는 실제로 측정해서 확인된 뒤에만 대응한다. 이론적 가능성만으로 미리 라이브러리를 도입하는 건 과잉 엔지니어링이다.

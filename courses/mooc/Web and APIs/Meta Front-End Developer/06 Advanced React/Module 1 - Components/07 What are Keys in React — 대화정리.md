# What are Keys in React? — 대화정리

> 원본 강의: [07 What are Keys in React.md](07%20What%20are%20Keys%20in%20React.md)

## 개요
- 05번(Transforming lists in JavaScript)에서 다룬 key 개념을 공식적으로 정리하는 강의. React가 UI 업데이트를 자동으로 최적화하는 원리와, key를 잘못 쓰면(특히 index를 key로 쓰면) 성능이 어떻게 나빠지는지를 다룬다.

## 내용

### key 선택의 원칙
- 가장 중요한 원칙: **형제(sibling) 요소들 사이에서 고유함이 보장되는 값**을 key로 써야 한다.
- 배열 index를 key로 쓰는 것은 "최후의 수단"이다. 위치 기준이라 중복은 안 생기지만, **정렬 기능이 있거나 사용자가 항목을 추가·삭제할 수 있는 리스트**에는 index를 쓰지 말아야 한다.

### index를 key로 쓸 때, 리스트 맨 앞에 삽입하면 특히 나쁜 이유
- index가 key이기 때문에 `key = 배열에서의 위치`다.
- 리스트 **맨 앞**에 새 항목이 추가되면 기존 항목들의 index가 전부 하나씩 밀린다 (0→1, 1→2, 2→3 ...).
- React는 "이전 렌더링의 key=0은 A였는데, 새 렌더링의 key=0은 B(새 항목)네? 그럼 key=1은 이전엔 없었는데 A가 새로 생겼네?" 식으로 **모든 항목이 다른 항목으로 바뀐 것처럼** 인식한다.
- 결과적으로 새 항목 하나만 mount하면 되는 상황인데, React는 **기존 항목 전부를 다시 만드는** 비효율적인 경로를 탄다.
- 반대로 **맨 뒤에 추가**하면 기존 항목들의 index가 그대로 유지되므로, React는 "끝에 새 key 하나만 추가됐다"고 정확히 인식해서 새 노드 하나만 만들면 된다.

## 예시

리스트 `['Tiramisu', 'Cheesecake', 'Brownie']`에 index를 key로 쓰고 있다고 하자.

**맨 뒤에 'Donut' 추가** → `['Tiramisu', 'Cheesecake', 'Brownie', 'Donut']`
| key(index) | 이전 | 이후 | React의 판단 |
|---|---|---|---|
| 0 | Tiramisu | Tiramisu | 변화 없음 |
| 1 | Cheesecake | Cheesecake | 변화 없음 |
| 2 | Brownie | Brownie | 변화 없음 |
| 3 | (없음) | Donut | 새로 mount (효율적) |

**맨 앞에 'Donut' 추가** → `['Donut', 'Tiramisu', 'Cheesecake', 'Brownie']`
| key(index) | 이전 | 이후 | React의 판단 |
|---|---|---|---|
| 0 | Tiramisu | Donut | "내용이 바뀐 기존 항목"으로 오인 → 갱신 |
| 1 | Cheesecake | Tiramisu | "내용이 바뀐 기존 항목"으로 오인 → 갱신 |
| 2 | Brownie | Cheesecake | "내용이 바뀐 기존 항목"으로 오인 → 갱신 |
| 3 | (없음) | Brownie | 새로 mount |

→ 실제로는 항목 하나만 추가됐는데, React는 기존 항목 3개를 전부 "바뀐 것"으로 처리한다. 이게 05번에서 다룬 "체크박스 상태가 엉뚱한 항목에 눌러붙는" 문제와 같은 원인(index 기반 오인식)에서 나온, 성능 관점의 결과다.

## 요약
- key는 항상 형제 사이에서 고유함이 보장되는 값(데이터의 id 등)을 써야 한다.
- index를 key로 쓰면 리스트가 고정 순서로만 끝에 추가되는 경우엔 문제가 적지만, **정렬·삽입·삭제가 있는 리스트에서는 특히 맨 앞 삽입 시** 모든 기존 항목이 "바뀐 것"으로 오인되어 불필요하게 전부 다시 그려진다.
- 이 원인은 05번에서 확인한 "상태가 엉뚱한 항목에 눌러붙는" 버그와 동일한 뿌리(index 기반 정체성 오인)에서 나온다.

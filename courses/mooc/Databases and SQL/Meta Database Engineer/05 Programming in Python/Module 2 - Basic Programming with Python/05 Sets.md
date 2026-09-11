# Sets

## 개요

- 집합(set)의 선언과 add/remove/discard, 그리고 수학적 연산(합집합·교집합·차집합·대칭차집합)
- 집합의 두 특성: 중복 불허, 순서 없음(인덱스 접근 불가)

## 내용

### 선언과 기본 메서드

- **중괄호**로 선언: `set_a = {1, 2, 3, 4, 5}`
- **중복 불허**: 5를 두 번 넣어도 하나만 출력된다.
- **add(값)** — 추가, **remove(값)** — 제거, **discard(값)** — remove와 사실상 같은 동작.

### 수학 연산 (메서드와 연산자 두 표기)

| 연산 | 메서드 | 연산자 | 결과 (a={1..5}, b={4..8}) |
|---|---|---|---|
| 합집합 | `a.union(b)` | `a \| b` | {1,2,3,4,5,6,7,8} — 중복 제거 병합 |
| 교집합 | `a.intersection(b)` | `a & b` | {4, 5} — 양쪽에 있는 것 |
| 차집합 | `a.difference(b)` | `a - b` | {1, 2, 3} — a에만 있는 것 |
| 대칭차집합 | `a.symmetric_difference(b)` | `a ^ b` | {1,2,3,6,7,8} — 한쪽에만 있는 것 |

### 순서 없음 — 인덱스 접근 불가

- 집합은 중복 없는 컬렉션이자 **순서 없는 컬렉션**이다.
- `set_a[0]`을 시도하면 **TypeError: 'set' object is not subscriptable** — 집합은 시퀀스가 아니라 요소의 순서 인덱스가 없다.

## 예시

```python
set_a = {1, 2, 3, 4, 5}
set_b = {4, 5, 6, 7, 8}

set_a.add(6)
set_a.remove(2)

print(set_a | set_b)   # 합집합
print(set_a & set_b)   # 교집합
print(set_a - set_b)   # 차집합
print(set_a ^ set_b)   # 대칭차집합
```

## 요약

- 집합은 중괄호로 만드는 중복 없는·순서 없는 컬렉션이다.
- add/remove/discard로 조작하고, union(|)·intersection(&)·difference(-)·symmetric_difference(^)로 수학 연산을 한다.
- 인덱스 접근은 불가능하다(subscriptable하지 않음).

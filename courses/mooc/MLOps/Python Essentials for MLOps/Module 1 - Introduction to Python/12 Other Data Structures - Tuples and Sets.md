# Other Data Structures: Tuples and Sets

## 개요
- 리스트·딕셔너리 외에 자주 마주치는 두 자료구조 — **튜플(tuple, 읽기 전용 리스트)**과 **세트(set, 중복 없는 컬렉션)** — 를 다룬다.

## 내용

### 튜플(Tuple) — 읽기 전용 리스트
- 튜플은 **"읽기 전용(read-only) 리스트"**로 생각하면 된다. `()`로 표기.
- 리스트처럼 인덱스로 접근 가능: `ro_items[0]`, 음수 인덱스(`ro_items[-1]`)도 동일하게 동작.
- 존재하지 않는 인덱스에 접근하면 `IndexError: tuple index out of range` — 리스트와 매우 유사한 에러.
- `for` 루프로 순회 가능 — 리스트와 동일한 순서 보존.
- **사용 가능한 메서드가 매우 제한적**: `count`와 `index`만 있다 (리스트에는 있는 `append`, `pop` 등이 없음).
  - `append` 시도 시 `'tuple' object has no attribute 'append'` 에러.
- **한번 생성하면 수정이 불가능(immutable)** — 이것이 튜플의 핵심 특징.

### 세트(Set) — 중복 없는 컬렉션
- 세트도 리스트처럼 항목을 추가(append 유사)할 수 있지만, **핵심 특징은 컬렉션 내 항목을 항상 유일(unique)하게 유지**한다는 것.
- 문법이 딕셔너리처럼 중괄호 `{}`를 쓰지만 **키-값 매핑이 아니다** — 혼동하기 쉬운 부분.
- `.add()`로 항목 추가: 이미 존재하는 값을 여러 번 추가해도 **세트에는 유일한 값 하나만 남는다** (중복 자동 제거).
- `.pop()`으로 항목 제거 가능하지만, **리스트의 pop과 달리 인자(인덱스)를 받지 않는다** — 그냥 아무 항목(구현상 첫 항목)이나 하나를 제거한다.

## 예시
```python
# TUPLE — 읽기 전용
ro_items = ("first", "second", "third")
print(ro_items[0])     # first
print(ro_items[-1])    # third
for item in ro_items:
    print(item)         # first, second, third

ro_items.append("fourth")  # AttributeError: 'tuple' object has no attribute 'append'

# SET — 중복 제거
s = {"one"}
s.add("one")
s.add("one")
s.add("two")
print(s)        # {'one', 'two'} — 'one'은 한 번만 남음
s.pop()          # 인자 없이 항목 하나 제거
```

## 요약
- 튜플 = 읽기 전용 리스트. 인덱싱/순회는 리스트와 같지만 `count`/`index`만 지원하고 수정 불가(immutable).
- 세트 = 중괄호를 쓰지만 매핑이 아닌, 중복이 자동 제거되는 컬렉션. `.add()`로 추가, `.pop()`은 인자 없이 임의 항목 제거.
- 두 자료구조 모두 리스트·딕셔너리 외에 실무에서 종종 마주치는 보조적인 선택지.

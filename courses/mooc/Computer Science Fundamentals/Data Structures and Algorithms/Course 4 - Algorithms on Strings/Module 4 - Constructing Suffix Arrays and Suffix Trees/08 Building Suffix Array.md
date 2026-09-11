# Building Suffix Array

## 개요
- 지금까지 만든 모든 구성 요소(SortCharacters, ComputeCharClasses, SortDoubled, UpdateClasses)를 조합해 문자열의 접미사 배열(suffix array)을 만드는 `BuildSuffixArray` 절차를 완성한다.
- 전체 실행 시간이 `O(|S| log |S|)`임을 증명한다.

## 내용

### 절차 구성
- 입력은 문자열 `S` 하나뿐이다.
- **초기화 단계**
  1. `SortCharacters(S)`로 길이 1 부분 순환 이동(= 단일 문자)을 정렬해 `order`에 저장한다. 최종 결과(접미사들의 순서)도 이 `order` 배열에 계속 갱신해 담는다.
  2. `ComputeCharClasses(S, order)`로 길이 1 부분 순환 이동의 클래스 번호를 계산해 `class`에 저장한다.
  3. 현재 부분 순환 이동의 길이를 나타내는 변수 `L`을 1로 초기화한다.
- **메인 루프** — `L < len(S)`인 동안 반복하며 매번 부분 순환 이동의 길이를 두 배로 늘려 정렬한다.
  1. `SortDoubled(S, L, order, class)`로 길이 `2L` doubled 부분 순환 이동을 정렬하고, 그 결과를 다시 `order`에 저장한다(길이 `L`의 순서는 더 이상 필요 없으므로 덮어써도 된다).
  2. `UpdateClasses(order, class, L)`로 길이 `2L` doubled 부분 순환 이동의 클래스 번호를 계산해 다시 `class`에 저장한다(마찬가지로 길이 `L`의 클래스는 더 이상 필요 없다).
  3. `L`을 `2L`로 갱신한다.
- **종료 조건과 반환**
  - `L`이 문자열 길이 이상이 되면, 그 시점의 부분 순환 이동은 사실상 문자열보다 길어서 순환 이동이 곧 접미사와 같은 사전식 순서를 갖는다.
  - 즉, 그 시점의 `order`가 바로 정렬된 접미사들의 순서 — 접미사 배열이다.
  - `order`를 반환한다.

### BuildSuffixArray 의사코드

```
BuildSuffixArray(S):
    order = SortCharacters(S)
    class = ComputeCharClasses(S, order)
    L = 1
    while L < len(S):
        order = SortDoubled(S, L, order, class)
        class = UpdateClasses(order, class, L)
        L = 2 * L
    return order
```

### 실행 시간 분석
- 초기화 부분:
  - `SortCharacters`: `O(|S| + |alphabet|)`.
  - `ComputeCharClasses`: `O(|S|)` (선형).
- 메인 루프 각 반복:
  - `SortDoubled`: `O(|S|)` (선형).
  - `UpdateClasses`: `O(|S|)` (선형).
- 반복 횟수: 매번 `L`을 두 배로 늘리고 `L`이 `len(S)`를 넘을 때까지 반복하므로, 반복 횟수는 `O(log |S|)`다.
- 따라서 메인 루프 전체는 `O(|S| log |S|)`.
- 초기화의 `O(|S| + |alphabet|)`을 더해도, 알파벳 크기는 보통 매우 작으므로(작은 상수 취급) 전체 실행 시간은 `O(|S| log |S|)`로 지배된다.
- 메모리 사용량도 문자열 길이에 비례하는 배열을 몇 개 사용하는 정도이므로 `O(|S|)`다.

## 예시

`BuildSuffixArray`의 실행 시간 항을 정리하면:

| 단계 | 실행 시간 |
|------|-----------|
| SortCharacters | `O(|S| + |alphabet|)` |
| ComputeCharClasses | `O(|S|)` |
| 메인 루프 1회(SortDoubled + UpdateClasses) | `O(|S|)` |
| 메인 루프 반복 횟수 | `O(log |S|)` |
| 메인 루프 전체 | `O(|S| log |S|)` |
| **총합** | `O(|S| log |S| + |alphabet|) ≈ O(|S| log |S|)` |

## 요약
- `BuildSuffixArray`는 초기화(문자 정렬 + 클래스 계산) 후, `L`을 두 배씩 늘려가며 `SortDoubled`와 `UpdateClasses`를 반복 호출해 부분 순환 이동을 점점 더 긴 단위로 정렬한다.
- `L`이 문자열 길이 이상이 되면 그 순서가 곧 접미사 배열이다.
- 전체 실행 시간은 `O(|S| log |S|)`이며, 메모리도 `O(|S|)`다.
- 같은 방법으로 문자열의 모든 순환 이동(cyclic shift)도 같은 시간에 정렬할 수 있다.
- 다음 강의부터는 이렇게 얻은 접미사 배열로부터 선형 시간에 접미사 트리(suffix tree)를 구성하는 방법을 배운다.

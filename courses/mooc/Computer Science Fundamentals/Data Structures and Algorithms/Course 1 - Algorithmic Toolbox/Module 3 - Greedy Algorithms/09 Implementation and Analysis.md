# Implementation and Analysis

## 개요
- 이전 강의(Maximizing Loot)의 탐욕 알고리즘(분수 배낭 문제)을 구현하고 실행 시간을 분석한다.
- 기본 구현은 O(n²)이지만, 항목들을 무게당 가치 내림차순으로 미리 정렬(sort)하면 O(n log n)으로 개선됨을 보인다.

## 내용
### 알고리즘 개요 재확인
- 배낭이 가득 찰 때까지: 무게당 가치가 최대인 항목을 고르고, 전부 들어가면 전부 담고, 아니면 남은 용량만큼만 채우고 종료한다.
- 모든 항목을 담았는데도 배낭이 가득 차지 않으면 그 시점에서 알고리즘을 멈춘다.
- 최종적으로 담긴 항목들의 총 가치와 각 항목별로 담긴 양(amounts)을 반환한다.

### 보조 함수: BestItem
- 함수 `BestItem(w[1..n], v[1..n])`: n개 항목의 무게와 가치를 입력받아, 무게당 가치가 최대인 항목의 인덱스를 반환한다.
- 이미 담긴 항목은 무게(w)가 0으로 처리되어 고려 대상에서 제외된다.
- 초기화: `maxValuePerWeight = 0`, `bestIndex = 0`.
- `i`가 1부터 n까지 반복:
  - `w[i] > 0`(아직 남은 양이 있음)이고 `v[i] / w[i] > maxValuePerWeight`이면, `maxValuePerWeight = v[i] / w[i]`, `bestIndex = i`로 갱신.
- 루프가 끝나면 `bestIndex`를 반환한다.

### 메인 알고리즘: Knapsack
- 함수 `Knapsack(W, w[1..n], v[1..n])`: 배낭 총 용량 W와 각 항목의 무게·가치를 입력받는다.
- 초기화: `amounts = [0] * n`(각 항목별로 담은 양), `totalValue = 0`.
- n번 반복(항목이 n개이므로):
  - 남은 용량 `W == 0`이면 그 시점의 `totalValue`와 `amounts`를 반환하고 종료.
  - `BestItem`을 호출해 남은 항목 중 무게당 가치가 최대인 항목 인덱스 `i`를 구한다.
  - 담을 양 `a = min(w[i], W)`:
    - 항목 i 전체가 들어가면(`w[i] < W`) `a = w[i]`.
    - 전체가 들어가지 않으면(`W < w[i]`) 남은 용량만큼만, 즉 `a = W`.
  - `totalValue += a * (v[i] / w[i])`
  - `w[i] -= a` (남은 양 갱신; 전부 담았으면 `w[i] = 0`이 되어 이후 고려 대상에서 제외됨)
  - `amounts[i] += a`
  - `W -= a` (배낭의 남은 용량 갱신)
- 반복이 끝나면(n번 모두 돌았거나 중간에 용량이 0이 되어 종료) `totalValue`와 `amounts`를 반환한다.

### 기본 구현의 실행 시간: O(n²)
- **보조정리(lemma)**: `Knapsack` 함수의 실행 시간은 **O(n²)**이다.
- `BestItem` 함수는 for 루프 1개(n번 반복)만 사용하므로 **O(n)**(선형 시간)이다.
- `Knapsack`의 메인 루프는 최대 n번 실행되며, 매 반복마다 `BestItem`이 한 번씩 호출되고 그 외 연산은 상수 시간이다.
- 따라서 전체 실행 시간은 n × O(n) = **O(n²)**.

### 개선된 알고리즘: 정렬 후 O(n log n)
- 개선 아이디어: 항목들을 **무게당 가치(vᵢ/wᵢ) 내림차순**으로 미리 정렬해두면, 매번 `BestItem`을 호출해 최적 항목을 다시 찾을 필요가 없다.
- 정렬되어 있다고 가정하면, 항상 "아직 담기지 않은 항목 중 가장 앞에 있는 항목"이 곧 무게당 가치가 최대인 항목이다(이전 항목들은 이미 담겼거나 전부 처리되었으므로).
- 함수 `KnapsackFast(W, w[1..n], v[1..n])`: 기본 구조는 동일하나, `BestItem` 호출 없이 그냥 다음 순번의 항목 i를 그대로 사용한다.
  - 담을 양 `a = min(w[i], W)`은 동일하게 계산.
  - 이후 `totalValue`, `amounts`, 남은 용량 갱신도 기존과 동일.
- `BestItem`(O(n))을 호출하지 않으므로, 각 반복이 상수 시간이 되어 외부 for 루프 하나만 남는다.
- 따라서 `KnapsackFast`는 **O(n)**(선형 시간)에 동작한다.
- 정렬 자체에 **O(n log n)**이 필요하므로(정렬 알고리즘은 다음 모듈에서 학습), 전체 실행 시간은 정렬 O(n log n) + KnapsackFast O(n) = **O(n log n)**.

## 예시
- 의사코드 요약(기본 버전):
  ```
  function BestItem(w[1..n], v[1..n]):
      maxValuePerWeight = 0
      bestIndex = 0
      for i = 1 to n:
          if w[i] > 0 and v[i] / w[i] > maxValuePerWeight:
              maxValuePerWeight = v[i] / w[i]
              bestIndex = i
      return bestIndex

  function Knapsack(W, w[1..n], v[1..n]):
      amounts = [0] * n
      totalValue = 0
      repeat n times:
          if W == 0:
              return totalValue, amounts
          i = BestItem(w, v)
          a = min(w[i], W)
          totalValue += a * (v[i] / w[i])
          w[i] -= a
          amounts[i] += a
          W -= a
      return totalValue, amounts
  ```
- 정렬 이후 버전(KnapsackFast)은 `BestItem` 호출 대신 정렬된 순서대로 다음 항목을 그대로 사용한다.
- 복잡도 비교: 기본 구현 O(n²) → 정렬 후 O(n log n).

## 요약
- 분수 배낭 문제의 기본 탐욕 알고리즘 구현은 매 반복마다 `BestItem`(O(n))을 호출해 총 **O(n²)** 시간이 걸린다.
- 항목들을 무게당 가치 내림차순으로 미리 정렬하면 `BestItem` 호출이 필요 없어져 메인 루프가 **O(n)**으로 줄어들고, 정렬 비용(O(n log n))을 더해도 전체 **O(n log n)**에 문제를 해결할 수 있다.

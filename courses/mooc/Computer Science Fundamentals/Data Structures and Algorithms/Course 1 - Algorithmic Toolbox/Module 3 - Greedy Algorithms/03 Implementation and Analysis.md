# Implementation and Analysis

## 개요
- 이전 강의(Queue of Patients)에서 증명한 탐욕 알고리즘을 실제로 구현(implement)하고, 그 실행 시간(running time)을 분석한다.
- 기본 구현은 O(n²)이지만, 사전 정렬(sort)을 이용하면 O(n log n)으로 개선할 수 있음을 보인다.

## 내용
### 의사코드(pseudocode) 구조
- 함수 `MinTotalWaitingTime(t, n)`: 각 환자의 진료 시간 배열 `t`와 환자 수 `n`을 입력받아 전체 대기 시간(total waiting time)을 반환한다.
- 필요하면 진료 순서(order)도 함께 출력하도록 쉽게 바꿀 수 있지만, 단순화를 위해 생략한다.
- 초기화:
  - `waitingTime = 0` (아직 아무도 기다리지 않았으므로)
  - `treated`: 길이 n의 0으로 채워진 보조 배열(auxiliary array). `treated[i] = 0`이면 환자 i가 아직 진료받지 않은 것, `1`이면 진료받은 것을 의미한다.

### 알고리즘 진행 (이중 for 루프)
- 외부 for 루프: `i`가 1부터 n까지 (총 n번 반복, n명의 환자를 모두 진료해야 하므로)
  - `tmin = +∞`, `minIndex = 0`으로 초기화
  - 내부 for 루프: `j`가 1부터 n까지
    - `treated[j] == 0`이고(아직 진료 안 받음) `t[j] < tmin`이면 `tmin = t[j]`, `minIndex = j`로 갱신
  - 내부 루프가 끝나면 아직 진료받지 않은 환자 중 최소 진료 시간(`tmin`)과 그 환자의 인덱스(`minIndex`)를 알게 된다.
  - 대기 시간 갱신: 이 시점까지 i번 반복했다는 것은 이미 i명(엄밀히는 i-1명, 강의에서는 i번째 반복 시점 기준으로 서술)을 진료했다는 뜻이며, 남은 `n - i`명의 환자가 이번에 진료할 환자(진료 시간 `tmin`)를 기다리게 된다.
    - `waitingTime += (n - i) * tmin`
  - `treated[minIndex] = 1`로 갱신 (이 환자를 진료 완료 처리)
- 외부 루프가 n번 모두 끝나면 모든 환자가 진료된 것이며, `waitingTime`을 반환한다.
- 진료 순서를 출력하려면 외부 루프 끝에서 `minIndex`를 매번 출력하면 된다.

### 기본 구현의 실행 시간 분석
- **보조정리(lemma)**: `MinTotalWaitingTime`의 실행 시간은 **O(n²)**이다.
- 증명: 외부 for 루프는 `i`가 1부터 n까지 n번 반복하고, 각 `i`마다 내부 for 루프도 `j`가 1부터 n까지 n번 반복한다.
- 따라서 O(n) × O(n) = **O(n²)**이며, 그 외 연산은 상수 시간(constant time)이므로 전체 복잡도에 영향을 주지 않는다.

### 개선된 알고리즘: 사전 정렬을 이용한 O(n log n)
- 핵심 아이디어: 매번 남은 환자 중 최소 진료 시간을 다시 찾는 대신(내부 루프), **미리 진료 시간이 증가하는 순서(increasing treatment time)로 환자를 정렬(sort)**해 두면, 이 정렬된 순서 자체가 이미 최적 배열이 된다.
- 정렬 후에는 환자 번호 i를 1부터 n까지 순서대로 하나씩 선택해 진료하고 대기 시간을 갱신하기만 하면 되므로, 최소값을 찾는 내부 for 루프(`j`)가 필요 없어진다.
- 정렬 이후 단계는 각 환자를 한 번씩만 순회하므로 **선형 시간(linear time)**이 걸린다.
- n개의 항목을 정렬하는 데는 **O(n log n)** 시간이 걸린다(정렬 알고리즘은 다음 모듈에서 다룸).
- 따라서 전체 실행 시간은 정렬 O(n log n) + 이후 처리 O(n) = **O(n log n)** (선형 시간은 n log n보다 작으므로 지배항은 n log n).

## 예시
- 의사코드 요약:
  ```
  function MinTotalWaitingTime(t[1..n], n):
      waitingTime = 0
      treated = [0] * n
      for i = 1 to n:
          tmin = +infinity
          minIndex = 0
          for j = 1 to n:
              if treated[j] == 0 and t[j] < tmin:
                  tmin = t[j]
                  minIndex = j
          waitingTime += (n - i) * tmin
          treated[minIndex] = 1
      return waitingTime
  ```
- 개선된 버전(정렬 후):
  ```
  # t가 이미 오름차순 정렬되어 있다고 가정
  function MinTotalWaitingTimeSorted(t[1..n], n):
      waitingTime = 0
      for i = 1 to n:
          waitingTime += (n - i) * t[i]
      return waitingTime
  ```
- 복잡도 비교: 기본 구현 O(n²) → 정렬 후 O(n log n)

## 요약
- 환자 대기열 최소화 알고리즘의 기본 구현은 이중 for 루프 구조로 **O(n²)** 시간이 걸린다.
- 환자들을 진료 시간이 짧은 순서로 미리 정렬해두면 최소값을 매번 다시 찾을 필요가 없어져 **O(n log n)**으로 개선된다.
- 정렬 알고리즘 자체는 다음 모듈에서 다룬다.

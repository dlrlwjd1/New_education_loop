# SortDouble Implementation

## 개요
- 앞서 설명한 doubled 부분 순환 이동 정렬을 구현하는 `SortDoubled` 절차를 다룬다.
- 입력: 문자열 S, 현재 길이 L, 길이 L 이동의 정렬된 순서 `order`, 그 클래스 번호 `class`.
- 클래스 번호를 대상으로 계수 정렬(counting sort)을 수행한다.

## 내용

### 계수 정렬을 클래스 번호에 적용
- 두 부분 순환 이동이 같을 필요충분조건은 클래스 번호가 같은 것이고, 하나가 다른 것보다 작을 필요충분조건은 클래스 번호가 작은 것이다.
- 클래스 번호는 0부터 어떤 최댓값까지의 정수이므로 계수 정렬로 정렬할 수 있는 객체다.
- 문자나 이동 자체가 아니라 **클래스 번호**를 기준으로 계수 정렬한다.

### 절차 구성
1. 보조 배열 `count`(0으로 초기화)와 결과 배열 `newOrder`(크기 = len(S))를 준비.
2. 표준 계수 정렬 준비 루프 2개: 각 클래스 번호가 나타나는 횟수를 세고 누적한다.
3. 마지막 계수 정렬 루프: 가장 큰 것부터 작은 것으로(`i`가 `len(S)-1`부터 `0`까지) 내려간다.
   - 현재 i번째 이동(둘째 반쪽)의 위치는 `order[i]`.
   - 첫째 반쪽의 시작 위치는 거기서 L만큼 반시계로 이동: `(order[i] - L + len(S)) mod len(S)`.
     - L을 빼고 len(S)를 더한 뒤 mod를 취해 0 ~ len(S)-1 범위의 음이 아닌 위치를 얻는다.
   - 이 첫째 반쪽의 클래스 번호 `cl = class[start]`를 구하고, 해당 카운터를 갱신해 `newOrder`에 위치를 저장한다.
- `newOrder`는 둘째 반쪽 기준으로 미리 정렬된 상태에서 첫째 반쪽 기준 안정 정렬을 마쳐, 결국 정렬된 길이 2L 이동의 올바른 순서를 담는다.

### SortDoubled 의사코드

```
SortDoubled(S, L, order, class):
    n = len(S)
    count = array of zeros, size n
    newOrder = array of size n
    for i from 0 to n-1:
        count[class[i]] += 1
    for j from 1 to n-1:
        count[j] += count[j-1]
    for i from n-1 down to 0:
        start = (order[i] - L + n) mod n   # 첫째 반쪽 시작 위치
        cl = class[start]
        count[cl] -= 1
        newOrder[count[cl]] = start
    return newOrder
```

- **Lemma**: SortDoubled의 실행 시간은 문자열 길이 S에 대해 선형(linear)이다. for 루프가 3개이고 각각 선형 횟수, 내부는 상수 시간이다.

## 요약
- SortDoubled는 클래스 번호를 대상으로 계수 정렬(= 안정 정렬)을 수행한다.
- 이미 정렬된 `order`(둘째 반쪽)에서 첫째 반쪽 시작 위치 `(order[i] - L + n) mod n`을 구하고, 그 클래스 번호로 재정렬한다.
- 결과 `newOrder`가 길이 2L 이동의 정렬 순서다.
- 실행 시간: 선형 O(S).

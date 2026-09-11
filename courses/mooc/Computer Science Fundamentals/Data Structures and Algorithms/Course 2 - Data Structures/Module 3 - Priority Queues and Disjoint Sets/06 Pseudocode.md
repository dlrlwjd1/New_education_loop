# Pseudocode

## 개요
- 이진 최대 힙(binary max heap)을 배열로 구현하는 전체 의사코드(pseudocode)를 제시한다.
- 배열 `H`, 배열 크기 `maxSize`, 실제 힙 크기 `size` 세 변수만으로 트리를 암묵적(implicit)으로 표현한다.

## 내용

### 상태 변수
- `H`: 힙 원소들을 저장하는 배열.
- `maxSize`: 배열의 크기이자 힙이 담을 수 있는 최대 노드 수.
- `size`: 현재 힙에 실제로 들어 있는 원소 수(항상 `size ≤ maxSize`).
- 예: 크기 9인 힙이 크기 13인 배열의 앞 9칸에 저장되고, 10번째 칸 이후 값은 의미 없는 값(garbage)이다.

### 부모/자식 인덱스 계산
- 노드 i의 부모: `Parent(i) = ⌊i/2⌋`.
- 노드 i의 왼쪽 자식: `LeftChild(i) = 2i`, 오른쪽 자식: `RightChild(i) = 2i+1`.

### SiftUp(i)
```
while i > 1 and H[Parent(i)] < H[i]:
    swap H[i] and H[Parent(i)]
    i = Parent(i)
```
- 루트가 아니고(`i > 1`) 부모보다 값이 크면 부모와 교환한 뒤, 자신의 새 위치(부모였던 자리)에서 반복한다.

### SiftDown(i)
```
maxIndex = i
l = LeftChild(i)
if l ≤ size and H[l] > H[maxIndex]:
    maxIndex = l
r = RightChild(i)
if r ≤ size and H[r] > H[maxIndex]:
    maxIndex = r
if i != maxIndex:
    swap H[i] and H[maxIndex]
    SiftDown(maxIndex)
```
- 자신과 왼쪽 자식, 오른쪽 자식 중 가장 큰 값의 인덱스를 `maxIndex`에 저장한다.
- 자신이 최대가 아니면 `maxIndex`와 교환한 뒤, 교환된 위치에서 재귀적으로(또는 while 루프로) 반복한다.

### Insert(p)
```
if size == maxSize:
    return error
size = size + 1
H[size] = p
SiftUp(size)
```
- 배열에 여유가 없으면 오류를 반환한다.
- 여유가 있으면 `size`를 늘리고 마지막 위치(완전 이진 트리의 마지막 레벨 가장 왼쪽 빈 자리)에 새 값을 넣은 뒤 `SiftUp`을 호출한다.

### ExtractMax()
```
result = H[1]
H[1] = H[size]
size = size - 1
SiftDown(1)
return result
```
- 루트 값을 `result`에 저장하고, 마지막 원소를 루트 자리로 옮긴 뒤 `size`를 줄이고 `SiftDown(1)`으로 힙 속성을 복구한다.

### Remove(i)
```
H[i] = +infinity
SiftUp(i)
ExtractMax()
```
- 제거할 원소의 값을 +무한대로 바꿔 `SiftUp`으로 루트까지 올린 뒤 `ExtractMax`로 제거한다.

### ChangePriority(i, p)
```
oldPriority = H[i]
H[i] = p
if p > oldPriority:
    SiftUp(i)
else:
    SiftDown(i)
```
- 새 값이 기존 값보다 크면 `SiftUp`, 작으면 `SiftDown`을 호출해 힙 속성을 복구한다.

## 예시
- 힙 `H`의 노드 3(값이 배열 인덱스 3에 저장)에서 왼쪽 자식 인덱스는 2×3=6이며, 예시 배열에서 그 값은 18이다.

## 요약
- 이진 최대 힙은 배열 `H`와 `size`, `maxSize` 세 변수만으로 완전 이진 트리를 암묵적으로 표현하며, 트리 부모/자식 관계는 인덱스 연산(`⌊i/2⌋`, `2i`, `2i+1`)으로 그때그때 계산한다.
- `GetMax`는 상수 시간, 그 외 `Insert`, `ExtractMax`, `Remove`, `ChangePriority`는 모두 `SiftUp`/`SiftDown`을 기반으로 O(log n) 시간에 동작한다.
- 각 연산의 의사코드는 몇 줄 안 되는 매우 간단한 코드로 구현할 수 있다.

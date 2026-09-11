# Naive Implementations of Priority Queues

## 개요
- 우선순위 큐(priority queue)를 정렬되지 않은/정렬된 배열(array)이나 리스트(list)로 순진하게(naive) 구현할 때 어떤 문제가 생기는지 살펴본다.
- 어떤 방식을 쓰든 `Insert`와 `ExtractMax` 중 하나는 선형 시간(linear time)이 걸린다는 한계를 확인한다.

## 내용

### 정렬되지 않은 배열/리스트(unsorted array or list)
- `Insert`: 새 원소를 배열이나 (양방향 연결) 리스트의 끝에 그냥 추가하면 되므로 상수 시간(constant time).
- `ExtractMax`: 최댓값을 찾으려면 전체를 훑어야(scan) 하므로 O(n), 즉 선형 시간.

### 정렬된 배열(sorted array)
- `ExtractMax`: 배열이 정렬되어 있으면 최댓값은 항상 마지막 원소이므로 상수 시간.
- `Insert`: 이진 탐색(binary search)으로 삽입 위치는 로그 시간(logarithmic time)에 찾을 수 있지만, 그 위치 오른쪽의 모든 원소를 한 칸씩 밀어야(shift) 하므로 최악의 경우 선형 시간이 걸린다.

### 정렬된 리스트(sorted list)
- `ExtractMax`: 마지막 원소가 최댓값이므로 여전히 상수 시간.
- `Insert`: 삽입할 위치를 알고 있다면 포인터 4개만 바꾸면 되므로 삽입 자체는 상수 시간이다. 그러나 리스트는 배열처럼 중간 인덱스에 바로 접근할 수 없어 이진 탐색을 쓸 수 없고, 삽입할 위치를 찾는 데(선형 탐색) 선형 시간이 걸린다. 결국 `Insert`의 전체 시간은 선형이다.

### 결론
- 배열이든 리스트든, 정렬되어 있든 아니든, `Insert`와 `ExtractMax` 두 연산 중 하나는 항상 선형 시간이 걸린다.
- 다음 강의에서 다룰 이진 힙(binary heap)을 사용하면 두 연산 모두 로그 시간에 수행할 수 있다.

## 요약
- 정렬되지 않은 배열/리스트: `Insert` O(1), `ExtractMax` O(n).
- 정렬된 배열: `Insert` O(n)(탐색은 로그지만 이동이 선형), `ExtractMax` O(1).
- 정렬된 리스트: `Insert` O(n)(위치 탐색이 선형, 실제 삽입은 상수), `ExtractMax` O(1).
- 네 가지 순진한 구현 모두 한 연산은 선형 시간이라는 공통된 병목을 가지며, 이를 해결하기 위해 이진 힙(binary heap)이 필요하다.

# Queues

## 개요
- 큐(queue)는 스택과 비슷하지만 근본적으로 다른 추상 자료형(abstract data type)으로, 가장 먼저 넣은 원소를 가장 먼저 꺼낸다. 이를 FIFO(First In First Out)라고 부른다.
- 줄을 서서 기다리는 상황(first come first serve)에 비유할 수 있으며, 가장 오래 기다린 사람이 먼저 서비스를 받는다.
- 서버가 들어오는 작업 중 가장 오래 기다린 것을 먼저 처리해야 하는 경우처럼, 순서를 보장해야 하는 상황에 유용하다.

## 내용

### 기본 연산
- Enqueue(key): 컬렉션에 key를 추가한다.
- Dequeue: 가장 먼저 추가된(가장 오래 기다린) key를 반환하며 제거한다. 스택의 Pop(가장 최근 추가된 것을 제거)과 정반대다.
- Empty: 큐가 비어있는지 확인한다.
- 스택은 LIFO(Last In First Out), 큐는 FIFO(First In First Out)로 구분된다.

### 연결 리스트를 이용한 구현
- head와 tail 포인터를 모두 가진 연결 리스트를 사용한다.
- Enqueue는 리스트의 PushBack(뒤에 추가)으로 구현한다.
- Dequeue는 리스트의 TopFront(맨 앞 원소 조회)와 PopFront(맨 앞 원소 제거)의 조합으로 구현한다 — 가장 오래 있었던(맨 앞) 원소를 꺼낸다.
- Empty는 리스트의 Empty(head가 nil인지 확인)를 그대로 사용한다.

### 배열을 이용한 구현: 순환 배열(circular array)
- 배열 끝에 추가하고 앞에서 꺼내는 방식은 단순하지만, 배열 앞에서 제거하는 것은 O(n)이 되어 버린다.
- 이를 해결하기 위해 배열을 순환 구조(circular array)로 사용하고, write 인덱스(다음 Enqueue 위치)와 read 인덱스(다음 Dequeue 위치)를 각각 추적한다.
- Enqueue: write 인덱스 위치에 값을 쓰고 write 인덱스를 증가시킨다. 배열 끝에 도달하면 다시 처음(인덱스 0)으로 순환한다.
- Dequeue: read 인덱스 위치의 값을 읽고 read 인덱스를 증가시킨다(마찬가지로 순환).
- Empty: read 인덱스와 write 인덱스가 같으면 비어있는 것이다.
- 가득 찬 상태를 구분하기 위해 배열 한 칸을 항상 비워둔다. 그렇지 않으면 큐가 가득 찬 경우(read == write)와 완전히 빈 경우(read == write)를 구분할 수 없기 때문이다. 그래서 실제로 채울 수 있는 원소 수는 배열 크기보다 하나 적다.

### 배열 vs 연결 리스트 구현 비교
- 두 방식 모두 Enqueue, Dequeue, Empty가 O(1)이다.
- 배열 구현은 미리 정한 최대 크기를 넘을 수 없어 크기가 제한적이며, 사용하지 않는 공간은 낭비된다.
- 연결 리스트 구현은 메모리가 허용하는 한 임의로 커질 수 있지만, 원소마다 포인터를 저장해야 하는 오버헤드가 있다.
- 연결 리스트로 구현할 때는 PushBack이 저렴하려면 반드시 tail 포인터가 있어야 한다.

## 예시
- 순환 배열 시나리오: 크기 5인 배열에서 Enqueue(a), Enqueue(b), Enqueue(c) 후 Dequeue를 두 번 하면 a, b가 순서대로 꺼내진다. 이후 Enqueue(d), Enqueue(e)를 하면 write 인덱스가 배열 끝(인덱스 4)에서 다시 0으로 순환한다. Enqueue(f)까지 하면 배열이 가득 차 read와 write 인덱스가 같아지려는 상태가 되므로, 추가 Enqueue(g)는 에러가 된다(빈 상태와 구분하기 위해 최소 한 칸은 비워둬야 하기 때문).
- 연산별 시간 복잡도: Enqueue O(1), Dequeue O(1), Empty O(1) — 배열(순환 배열 방식)과 연결 리스트(tail 포인터 필요) 구현 모두 동일하다.

## 요약
- 큐는 Enqueue, Dequeue, Empty 연산을 갖는 FIFO(First In First Out) 추상 자료형으로, 스택(LIFO)과 대비된다.
- 연결 리스트로 구현하면 Enqueue=PushBack, Dequeue=TopFront+PopFront로 자연스럽게 대응된다(tail 포인터 필수).
- 배열로 구현할 때는 순환 배열(circular array) 기법과 read/write 인덱스를 사용해 Enqueue와 Dequeue를 모두 O(1)로 만들 수 있으며, 이때 가득 참과 빔을 구분하기 위해 한 칸을 비워둔다.

# Singly-Linked Lists

## 개요
- 연결 리스트(linked list)는 head 포인터가 노드를 가리키고, 각 노드는 데이터(key)와 다음 노드를 가리키는 next 포인터를 갖는 구조다.
- 배열과 달리 원소들이 메모리상에서 연속되어 있지 않고, 포인터로 서로 연결되어 있다.
- tail 포인터의 유무에 따라 리스트 뒤쪽 연산의 시간 복잡도가 크게 달라진다.

## 내용

### 기본 구조와 연산
- 노드(node)는 key(값)와 next 포인터로 구성된다. 마지막 노드의 next는 nil이다.
- 주요 연산: PushFront(앞에 추가), TopFront(맨 앞 원소 조회), PopFront(맨 앞 원소 제거), PushBack/TopBack/PopBack(뒤쪽에서의 동일한 연산), Find(특정 key 탐색), Erase(특정 key 삭제), Empty(비어있는지 확인), AddBefore/AddAfter(특정 노드 앞/뒤에 삽입).
- Find와 Erase는 리스트를 처음부터 끝까지 순회하며 일치하는 key를 찾아야 하므로 O(n)이다.
- Empty는 head가 nil인지만 확인하면 되므로 O(1)이다.

### tail 포인터가 없을 때의 연산 비용
- PushFront: 새 노드를 만들고 head를 갱신하기만 하면 되므로 O(1).
- TopFront, PopFront: 첫 번째 원소를 바로 확인/제거하므로 O(1).
- PushBack, TopBack, PopBack: tail 포인터가 없으면 head부터 끝까지 순회해야 하므로 모두 O(n).

### tail 포인터를 추가했을 때의 연산 비용
- PushBack: 현재 tail의 next를 새 노드로 연결하고 tail 포인터만 갱신하면 되므로 O(1).
- TopBack: tail이 가리키는 원소를 바로 반환하므로 O(1).
- PopBack: 문제가 발생한다. tail을 이전 노드로 옮겨야 하는데, next 포인터만 있고 prev 포인터가 없어 이전 노드를 알 수 없다. 결국 head부터 순회하여 마지막에서 두 번째 노드를 찾아야 하므로 O(n)이다.

### AddBefore와 AddAfter
- AddAfter: 특정 노드 뒤에 삽입 — 새 노드를 만들어 next를 연결하기만 하면 되므로 O(1).
- AddBefore: 특정 노드 앞에 삽입 — 이전 노드를 알아야 하는데 역시 prev 포인터가 없어 head부터 순회해야 하므로 O(n).

## 예시
- PushFront 의사코드: 새 노드를 할당하고 key를 설정한 뒤, next를 기존 head로 연결하고 head를 새 노드로 갱신한다. 만약 tail이 nil이었다면(빈 리스트였다면) tail도 새 노드로 갱신한다.
- PopBack 의사코드 (tail 포인터가 있는 경우): 빈 리스트면 에러. head와 tail이 같으면(원소가 하나) head와 tail을 모두 nil로 설정. 그렇지 않으면 head부터 순회해 마지막에서 두 번째 노드(p)를 찾고, p의 next를 nil로 설정한 뒤 tail을 p로 갱신 — O(n).
- 연산별 시간 복잡도 요약표:
  - PushFront: O(1)
  - TopFront / PopFront: O(1)
  - PushBack: tail 없으면 O(n), tail 있으면 O(1)
  - TopBack: tail 없으면 O(n), tail 있으면 O(1)
  - PopBack: tail 유무와 관계없이 O(n)
  - Find / Erase: O(n)
  - Empty: O(1)
  - AddBefore: O(n)
  - AddAfter: O(1)

## 요약
- 단일 연결 리스트(singly-linked list)는 head(및 선택적으로 tail) 포인터와 next 포인터로 구성된 노드들로 이루어진다.
- 앞쪽(front) 연산은 항상 O(1)이지만, 뒤쪽(back) 연산 중 PopBack과 AddBefore는 이전 노드에 대한 정보가 없어 tail 포인터가 있어도 O(n)이다.
- 이 한계(뒤에서 제거, 앞에 삽입이 비쌈)를 해결하려면 다음 강의의 이중 연결 리스트(doubly-linked list)가 필요하다.

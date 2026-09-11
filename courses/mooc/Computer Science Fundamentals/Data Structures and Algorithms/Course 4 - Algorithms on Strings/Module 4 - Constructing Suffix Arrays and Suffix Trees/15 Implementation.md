# Implementation

## 개요
- 접미사 배열(suffix array)과 LCP 배열(LCP array)이 주어졌을 때 접미사 트리(suffix tree)를 구성하는 알고리즘의 구체적인 구현을 다룬다.
- 트리 노드에 필요한 데이터 구조와, 메인 함수 `ST-SuffixTreeFromSA`, 보조 함수 `CreateNewLeaf`, `BreakEdge`의 동작을 설명한다.

## 내용

### 접미사 트리 노드에 필요한 필드
- `parent`: 부모 노드를 가리키는 포인터. 리프에서 위로 올라가야 할 때 필요하다.
- `children`: 자식 노드들을 저장하는 맵(map)으로, 자식으로 가는 간선(edge)의 첫 글자를 키로 사용한다.
- `stringDepth`: 루트에서 이 노드까지 내려오며 모든 간선의 글자를 읽었을 때의 문자열 길이.
- `edgeStart`, `edgeEnd`: 부모로부터 이 노드로 들어오는 간선의 시작·끝 문자 위치(문자열 상의 인덱스).

### 메인 함수: ST-SuffixTreeFromSA
- 입력: 문자열 S, 접미사 배열 order, LCP 배열.
- 루트 노드를 생성한다. 자식 없음, 부모 없음, `stringDepth = 0`, 들어오는 간선이 없으므로 `edgeStart = edgeEnd = -1`.
- 변수 `lcpPrev`(직전 접미사와의 LCP 값)를 0으로 초기화하고, `curNode`를 루트로 설정한다.
- 접미사 배열의 각 접미사를 오름차순으로 순회하는 for 루프를 돈다. 각 반복에서:
  1. **위로 이동**: `curNode.stringDepth > lcpPrev`인 동안 `curNode`를 `curNode.parent`로 계속 이동한다. 루프가 끝나면 `curNode`는 `lcpPrev` 위치와 정확히 같거나 그보다 한 단계 위에 있다.
  2. **경우 1 (노드에서 정확히 일치)**: `curNode.stringDepth == lcpPrev`이면, 현재 접미사가 이 노드에서 직전 접미사와 갈라진다는 뜻이다. `CreateNewLeaf(curNode, S, suffix)`를 호출해 새 리프와 간선을 만들고, 반환된 리프를 `curNode`로 갱신한다.
  3. **경우 2 (간선 중간에서 갈라짐)**: `curNode.stringDepth`가 `lcpPrev`보다 작으면(간선 중간), 쪼갤 간선의 시작 문자는 `order[i-1] + curNode.stringDepth` 위치의 문자다. 쪼갤 지점(offset)은 `lcpPrev - curNode.stringDepth`다. `BreakEdge`로 중간 노드(midNode)를 만든 뒤, `CreateNewLeaf(midNode, S, suffix)`로 새 리프를 만들고 `curNode`를 그 리프로 갱신한다.
  4. 다음 반복을 위해 `lcpPrev = LCP[i]`로 갱신한다(마지막 반복이면 갱신하지 않는다).
- 모든 접미사 처리가 끝나면 루트 노드를 반환한다.

### 보조 함수: CreateNewLeaf
- 입력: 리프를 매달 노드(node), 문자열 S, 접미사의 시작 위치(suffix).
- 새 리프 노드를 만든다. 부모는 입력받은 node, `stringDepth = len(S) - suffix`(루트에서 이 리프까지 읽어야 하는 길이).
- 들어오는 간선: `edgeStart = suffix + node.stringDepth`, `edgeEnd = len(S) - 1`(리프이므로 문자열 끝까지).
- 이 리프를 `node`의 자식으로 등록한다. 키는 `edgeStart` 위치의 문자.
- 새로 만든 리프를 반환한다.

### 보조 함수: BreakEdge
- 입력: 간선을 쪼갤 노드(node), 문자열 S, 쪼갤 간선의 시작 위치(start), 쪼갤 지점까지의 오프셋(offset).
- 간선의 시작 문자(`startChar`)와 쪼갠 후 두 번째 반쪽의 첫 문자(`midChar`, 위치 `start + offset`)를 저장한다.
- 중간 노드(midNode)를 생성한다. 부모는 node, `stringDepth = node.stringDepth + offset`, 들어오는 간선은 `edgeStart = start`, `edgeEnd = start + offset - 1`.
- 기존에 node의 자식이었던 노드(`startChar`로 인덱싱된)를 이제 midNode의 자식(`midChar`로 인덱싱)으로 재연결한다.
- 그 자식의 부모를 midNode로 갱신하고, 들어오는 간선의 `edgeStart`를 `offset`만큼 뒤로 이동시킨다.
- node의 `startChar` 자식을 midNode로 갱신한다.
- 새로 만든 midNode를 반환한다.

## 예시
- `curNode.stringDepth == lcpPrev`인 경우: 현재 노드에서 바로 `CreateNewLeaf`를 호출해 새 간선·리프를 추가한다.
- `curNode.stringDepth < lcpPrev`인 경우(간선 중간): 쪼갤 문자 위치는 `order[i-1] + curNode.stringDepth`이고, 쪼개는 오프셋은 `lcpPrev - curNode.stringDepth`다. `BreakEdge`로 새 중간 노드를 만든 뒤 `CreateNewLeaf`로 리프를 추가한다.

## 요약
- 접미사 트리 노드는 `parent`, `children`, `stringDepth`, `edgeStart`, `edgeEnd` 다섯 필드로 구성된다.
- 접미사 배열을 오름차순으로 순회하며, 직전 접미사와의 LCP 값(`lcpPrev`)만큼 트리를 거슬러 올라간 뒤 새 리프를 추가한다.
- 갈라지는 지점이 노드와 정확히 일치하면 `CreateNewLeaf`만 호출하고, 간선 중간이면 `BreakEdge`로 중간 노드를 만든 뒤 `CreateNewLeaf`를 호출한다.
- 이 구현으로 접미사 배열과 LCP 배열로부터 접미사 트리 전체를 구성할 수 있다.

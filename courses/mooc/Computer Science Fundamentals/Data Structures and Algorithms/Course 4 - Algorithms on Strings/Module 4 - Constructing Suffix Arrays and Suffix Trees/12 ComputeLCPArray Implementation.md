# ComputeLCPArray Implementation

## 개요
- LCP 배열(LCP array)을 선형 시간에 계산하는 알고리즘의 구체적 구현을 다룬다.
- 보조 함수 두 개(LCPOfSuffixes, InvertSuffixArray)를 먼저 만들고, 이를 이용해 메인 함수 ComputeLCPArray를 구현한다.
- 이전 강의에서 설명한 "이전 LCP - 1부터 비교 시작" 아이디어를 코드로 옮긴다.

## 내용

### 보조 함수 1: LCPOfSuffixes(S, i, j, equal)
- 입력: 문자열 S, 두 접미사의 시작 위치 i, j, 그리고 앞의 equal개 문자가 같음이 보장된다는 정보.
- 반환: 두 접미사의 LCP 값.
- LCP 변수를 max(0, equal)로 초기화한다. equal에 음수(예: -1)를 넣어도 올바르게 동작하도록 0과의 최댓값을 취한다.
- 위치 i+LCP, j+LCP부터 문자를 비교하며 같으면 LCP를 1 증가시키고, 다르면 멈춰 LCP를 반환한다.

### 보조 함수 2: InvertSuffixArray(order)
- 입력: 접미사 배열 order.
- 반환: 문자열의 각 위치에서 시작하는 접미사가 접미사 배열의 어느 위치에 있는지를 담은 배열 pos.
- order와 pos는 서로 역(inverse) 관계다: order[i]가 문자열 위치를 저장하면, pos[order[i]] = i로 저장한다.
- 알고리즘에서 "문자열의 어떤 접미사 → 접미사 배열에서 그 다음 접미사"를 빠르게 찾기 위해 필요하다.

### 메인 함수: ComputeLCPArray(S, order)
- 입력: 문자열 S, 접미사 배열 order.
- 크기 |S| - 1의 LCPArray를 초기화하고, 이전 쌍의 LCP를 전달하는 변수 LCP를 0으로 초기화한다.
- InvertSuffixArray를 호출해 pos(문자열 위치 → 접미사 배열 위치)를 계산한다.
- 가장 작은 접미사 order[0]의 문자열 위치(suffix)에서 시작한다.
- 루프는 정확히 |S|번 반복하며, 이 위치를 문자열 전체에 걸쳐 이동시킨다.

### 메인 루프의 각 반복
1. suffix의 접미사 배열 내 위치를 pos에서 얻어 orderIndex에 저장한다.
2. 특수 경우: orderIndex == |S| - 1이면 이 접미사가 가장 큰 접미사이므로 대응하는 LCP 값이 없다. LCP를 0으로 재초기화하고, suffix를 (suffix + 1) mod |S|로 갱신한 뒤 다음 반복으로 넘어간다.
3. 아니면 접미사 배열에서 orderIndex 다음 위치의 order 값을 얻어 nextSuffix(다음 접미사의 문자열 위치)로 둔다.
4. LCPOfSuffixes(S, suffix, nextSuffix, LCP - 1)을 호출한다. 앞의 LCP-1개 문자는 같음이 보장되므로 이를 equal 인자로 전달한다. (첫 반복에서는 LCP-1 = -1이지만 max(0, ...) 처리로 안전하다.)
5. 반환값을 LCP에 저장하고 LCPArray[orderIndex]에도 저장한다.
6. suffix를 (suffix + 1) mod |S|로 갱신하고 다음 반복으로 넘어간다.

## 예시
- LCPOfSuffixes 초기화: `LCP = max(0, equal)` — equal이 음수여도 0 이상으로 보정.
- 비교 시작 위치: `S[i + LCP]`와 `S[j + LCP]`부터 비교(앞부분은 같음이 보장되므로 생략).
- InvertSuffixArray 핵심: 각 i에 대해 `pos[order[i]] = i` (order와 pos는 서로 역).
- 위치 갱신: `suffix = (suffix + 1) mod |S|` (문자열 끝에서 위치 0으로 되돌림).

## 요약
- LCPOfSuffixes는 equal 인자로 앞부분 비교를 건너뛰어 문자 단위 LCP를 계산한다(음수 equal 안전 처리).
- InvertSuffixArray는 문자열 위치 → 접미사 배열 위치 매핑을 만들어 다음 접미사를 O(1)에 찾게 한다.
- 메인 함수는 최소 접미사부터 문자열 전체를 순회하며 각 반복에서 LCP 값 하나를 채운다.
- 가장 큰 접미사는 다음 접미사가 없으므로 LCP를 0으로 초기화하고 건너뛴다.
- 매번 (이전 LCP - 1)을 equal로 넘겨 중복 비교를 없앰으로써 선형 시간을 달성한다.

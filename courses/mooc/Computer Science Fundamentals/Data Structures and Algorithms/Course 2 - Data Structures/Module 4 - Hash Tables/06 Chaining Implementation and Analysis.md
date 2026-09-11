# Chaining Implementation and Analysis

## 개요
- 앞선 강의에서 배운 체이닝(chaining) 기법을 의사코드로 구현하고, 시간 복잡도(time complexity)와 메모리 사용량(memory consumption)을 분석한다.
- 체이닝으로 맵(map)을 구현한다는 것은 `HasKey`, `Get`, `Set` 세 메서드를 구현하는 것이다.

## 내용

### 자료구조 가정
- `chains`는 배열이며, 각 원소는 (객체(object), 값(value)) 쌍들의 이중 연결 리스트(chain)다.
- 전화번호부 문제 관점에서는 object가 전화번호, value가 이름이다.

### HasKey(object) 구현
- `chain = chains[hash(object)]`로 대상 체인을 찾는다.
- 체인 안의 모든 (key, value) 쌍을 순회하며, key가 object와 같은 것이 있으면 `true`를 반환한다.
- 체인 전체를 순회해도 못 찾으면 `false`를 반환한다. (대응 값이 있다면 반드시 `hash(object)` 위치의 체인에 있어야 하므로, 그 체인에 없다면 맵에 없는 것이다.)

### Get(object) 구현
- 마찬가지로 `chain = chains[hash(object)]`를 찾는다.
- 체인을 순회하며 key가 object와 같은 쌍을 찾으면 그 value를 반환한다.
- 찾지 못하면 "해당 없음(N/A)"과 같은 특수 값을 반환한다.

### Set(object, value) 구현
- `chain = chains[hash(object)]`를 찾는다.
- 체인을 순회하며 key가 object와 같은 쌍을 찾으면, 그 쌍의 value를 새 값으로 덮어쓰고 함수를 종료한다.
- 끝까지 순회해도 못 찾으면, 해당 체인에 (object, value) 쌍을 새로 추가한다.

### 시간 복잡도 분석
- **정리(Lemma)**: C를 `chains`에서 가장 긴 체인의 길이라 하면, `HasKey`, `Get`, `Set` 세 함수의 실행 시간은 모두 Θ(C + 1)이다.
- 대상 체인이 비어 있지 않지만 찾는 객체가 없는 경우, 체인의 C개 항목을 모두 스캔해야 하므로 최소 C번의 연산이 필요하다(C > 0일 때 Θ(C) = Θ(C+1)).
- C = 0(체인이 비어 있음)이어도 상수 시간의 작업은 필요하므로, Θ(C)가 아니라 Θ(C+1)로 표기한다.

### 메모리 사용량 분석
- **정리(Lemma)**: n을 현재 맵에 들어 있는 서로 다른 객체의 수, m을 해시 함수의 카디널리티라 하면, 체이닝의 메모리 사용량은 Θ(n + m)이다.
- 실제 저장된 (object, value) 쌍들을 담는 데 Θ(n)이 필요하다.
- 체인들의 헤드(head)를 가리키는 배열 `chains` 자체를 위해 Θ(m)이 추가로 필요하다(일부 체인이 비어 있더라도 배열 크기만큼의 메모리는 항상 필요).
- 합쳐서 Θ(n + m).

## 요약
- 체이닝은 `HasKey`, `Get`, `Set` 세 연산 모두 대상 체인을 찾은 뒤 그 안을 선형 탐색(linear search)하는 방식으로 구현된다.
- 시간 복잡도: Θ(C + 1) (C는 가장 긴 체인의 길이).
- 메모리 사용량: Θ(n + m) (n은 저장된 객체 수, m은 해시 함수 카디널리티).
- 다음 강의에서는 해시 테이블(hash table)과 이를 이용한 집합(set) 구현을 다룬다.

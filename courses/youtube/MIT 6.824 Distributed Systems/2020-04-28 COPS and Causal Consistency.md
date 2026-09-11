# Lecture 17: COPS, Causal Consistency

## 개요
- 업로드일: 2020-04-28
- 원본: https://www.youtube.com/watch?v=fR_NB714EAI
- 강좌: MIT 6.824 Distributed Systems (Spring 2020)
- 핵심 주제: 광역 복제에서 causal consistency를 제공하는 COPS와 dependency 추적

## 내용
### 문제 설정
여러 데이터센터에 전체 데이터를 복제하면 사용자는 가까운 데이터센터에서 빠르게 읽고 쓸 수 있다. Spanner처럼 모든 쓰기를 광역 합의하면 강한 일관성을 얻지만 지연이 커지고 partition 동안 쓰기 가용성이 낮아진다.

COPS는 각 데이터센터의 로컬 작업을 빠르게 처리하고 원격 복제는 비동기로 수행한다. 그 대신 모든 쓰기의 단일 전역 순서가 아니라 **원인과 결과 관계**만 보존한다.

### Causal consistency
쓰기 B가 쓰기 A를 읽은 결과로 만들어졌다면 `A → B`라는 causal dependency가 있다. 모든 데이터센터는 B를 보이기 전에 A를 먼저 보여야 한다. 서로 인과 관계가 없는 concurrent write는 데이터센터마다 다른 순서로 보일 수 있다.

client context는 지금까지 관찰한 version을 추적한다. 새 쓰기는 context의 version을 dependency로 포함한다. 원격 데이터센터는 쓰기를 받으면 dependency가 로컬에 도착했는지 확인한 뒤 visible하게 만든다.

### Causal+와 충돌
같은 key의 concurrent write에는 결정적 conflict resolution을 적용해 replica가 같은 결과로 수렴하게 한다. 인과 순서 보장과 최종 수렴을 합쳐 causal+ consistency를 제공한다.

### Get Transaction
여러 key를 읽을 때 중간에 복제가 진행되면 인과적으로 불완전한 조합을 볼 수 있다. COPS-GT는 읽은 version들의 dependency를 확인하고 필요하면 더 최신 version을 다시 읽어 일관된 snapshot에 가까운 결과를 만든다.

## 예시
사용자가 사진 `P`를 올린 뒤 그 사진을 가리키는 앨범 항목 `A`를 만들었다면 `P → A`다. 다른 데이터센터에서 `A`를 보이기 전에 `P`가 있어야 깨진 링크를 막을 수 있다.

## 요약
- COPS는 광역 동기 합의 대신 로컬 처리와 비동기 복제로 낮은 지연과 가용성을 얻는다.
- 모든 쓰기 순서가 아니라 실제 인과 관계만 모든 replica에서 보존한다.
- client context와 dependency check가 결과를 원인보다 먼저 노출하지 않게 한다.
- 약한 모델은 빠르지만 애플리케이션이 어떤 일관성만 보장되는지 이해해야 한다.

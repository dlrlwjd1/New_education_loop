# Lecture 18: Fork Consistency, Certificate Transparency

## 개요
- 업로드일: 2020-04-30
- 원본: https://www.youtube.com/watch?v=UKdLJ7-0iFM
- 강좌: MIT 6.824 Distributed Systems (Spring 2020)
- 핵심 주제: 신뢰할 수 없는 공개 시스템, 인증서 오발급 탐지, Merkle tree 기반 append-only log

## 내용
### 공개 시스템의 신뢰 문제
닫힌 분산 시스템은 모든 replica가 프로토콜을 따른다고 가정하지만 인터넷 규모의 공개 시스템에는 모두가 신뢰하는 단일 운영자가 없다. 웹 PKI에서는 여러 인증기관(CA) 중 하나만 잘못된 인증서를 발급해도 공격자가 정상 사이트로 위장할 수 있다.

Certificate Transparency(CT)는 CA를 완전히 신뢰하는 대신 발급된 인증서를 공개 log에 기록해 잘못된 발급을 숨기기 어렵게 한다.

### Merkle tree log
log는 인증서를 leaf로 갖는 append-only Merkle tree를 유지한다. root hash와 tree size를 포함한 signed tree head(STH)가 특정 시점의 log 상태를 요약한다.

- **Inclusion proof**: 특정 인증서가 tree에 포함됐음을 `O(log n)` hash로 증명한다.
- **Consistency proof**: 새 tree가 이전 tree에 항목을 덧붙인 결과이며 과거를 바꾸지 않았음을 증명한다.
- **Monitor**: 새 항목을 감시해 수상한 인증서를 찾는다.
- **Auditor**: client가 받은 proof와 STH를 검증한다.

### Fork와 gossip
악성 log가 피해자에게만 다른 tree를 보여주는 split view를 만들 수 있다. 서로 받은 STH를 gossip해 같은 size에 다른 root가 발견되면 equivocation의 암호학적 증거가 된다. fork consistency는 서버가 client별 history를 갈라놓을 수는 있어도 나중에 다시 조용히 합칠 수 없게 한다.

## 예시
도메인 운영자는 CT monitor로 자신의 도메인에 발급된 인증서를 모두 확인한다. 알지 못하는 인증서가 보이면 CA 오발급이나 침해를 조기에 탐지할 수 있다.

## 요약
- CT는 인증서 발급을 공개 append-only log에 넣어 CA의 실수와 악의 탐지를 돕는다.
- Merkle tree는 작은 inclusion·consistency proof로 거대한 log를 검증하게 한다.
- monitor, auditor, gossip은 서로 다른 관점의 검증을 분산한다.
- 투명성 log는 악행 자체를 불가능하게 하기보다 숨기기 어렵고 증명 가능하게 만든다.

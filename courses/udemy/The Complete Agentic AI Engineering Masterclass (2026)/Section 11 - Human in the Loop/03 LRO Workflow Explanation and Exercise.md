# LRO Workflow Explanation + Exercise

## 개요
- Long-Running Operation 전체 흐름을 다시 설명하고 승인·거절 경로를 연습한다.

## 내용
### 네 단계
1. `run_async`로 초기 요청을 보내고 이벤트를 수집한다.
2. 이벤트에서 확인 요청을 찾는다.
3. 승인이 필요하면 실행을 중단하고 사람의 결정을 받는다.
4. 승인 응답과 invocation ID를 사용해 실행을 재개한다.

승인이 필요하지 않은 요청은 중단 없이 완료한다. 대량 주문을 승인하는 경우와 거절하는 경우를 각각 실행해 결과가 달라지는지 확인한다.

## 예시
```text
Ship ten containers to Rotterdam
→ approve: 주문 생성
→ reject: 주문 미처리
```

## 요약
- LRO는 중단·상태 저장·승인 매핑·재개의 결합이다.
- 각 경로를 독립적으로 테스트해야 한다.

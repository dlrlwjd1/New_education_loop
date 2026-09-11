# The Silent Failure Audit

## 개요
- Module 4의 마지막 강의. 모든 실패 유형 중 **가장 위험한 "침묵의 실패(silent failure)"**를 찾아내고 없애는 감사(audit) 기법을 다룬다.

## 내용
### 가장 위험한 실패 유형 — "조용히 실패하는 것"
- 거의 모든 소프트�어는 언젠가 버그를 만난다 — 예상치 못한 일이 발생해 무언가 깨질 수 있다.
- **최악의 실패**는 겉으로는 성공한 것처럼 보이지만 **실제로는 실패한 경우** — 즉 사용자가 실패했다는 사실 자체를 모르는 경우다.
- 이런 "침묵의 실패"는 매우 큰 위험을 내포하고 있어서, **특별히 찾아내 점검할 가치가 있다.**

### 핵심 원칙 — "실패는 반드시 보고되어야 한다"
- 테스트를 아무리 많이, 다양한 각도에서 해도 언젠가는 문제가 생길 수 있다 — 코드가 완벽해도 하드웨어, 의존하는 데이터베이스, 손상된 파일 등 **통제할 수 없는 예상치 못한 일**이 벌어질 수 있다.
- 중요한 건 **실패했을 때 그것을 반드시 알 수 있어야 한다**는 것.

### 실전 프롬프트 — 침묵의 실패 감사
```
Look through this code base and ask, what would silently fail? Find failures that would not be obvious
to the user: data not saving, stale screens, wrong calculations, missing error handling, failed network calls,
console errors, broken loading states, or corrupted state.
Add visible errors, logging, validation, or tests where needed.
```
- 목적: **사용자가 눈치채지 못한 채 실패할 수 있는 지점을 모두 찾아내고, 실패 시 명확하게 알 수 있도록(눈에 보이는 에러, 로깅, 검증 등을 추가) 수정**하는 것.
- 원한다면 "이런 식으로 사용자에게 알려줘"처럼 실패를 어떻게 처리하고 알릴지 구체적으로 지시하며 대화를 더 깊게 이어갈 수도 있다.

### 왜 이 감사가 신뢰(trust)에 결정적인가
- **"제대로 처리했다고 말했는데 사실 틀렸다"**는 것만큼 신뢰를 크게 무너뜨리는 것은 없다.
- 반대로, **"처리하려고 했지만 실패했고, 이유는 이렇다"**라고 명확히 알려주면 신뢰는 유지된다 — 실패 자체가 문제가 아니라, **실패를 숨기는 것**이 문제.
- 결론: **침묵의 실패는 신뢰를 크게 훼손하지만, 투명하게 보고되는 실패는 신뢰를 유지시킨다.**

## 예시
```
프롬프트: "Look through this code base and ask, what would silently fail? Find failures that would not
be obvious to the user: data not saving, stale screens, wrong calculations, missing error handling,
failed network calls, console errors, broken loading states, or corrupted state.
Add visible errors, logging, validation, or tests where needed."
```

## 요약
- 가장 위험한 실패는 **성공한 것처럼 보이지만 실제로는 실패한 "침묵의 실패"**다.
- 이를 막는 핵심 원칙은 **"실패는 반드시 사용자에게 보고되어야 한다"**는 것이며, 단 하나의 감사 프롬프트로 데이터 미저장, 잘못된 계산, 네트워크 실패 등 눈에 띄지 않는 실패 지점을 찾아 눈에 보이게 만들 수 있다.
- 실패 자체보다 **실패를 숨기는 것**이 신뢰를 더 크게 훼손하므로, 이 감사는 AI로 만든 애플리케이션의 신뢰도를 지키는 데 필수적인 습관이다.

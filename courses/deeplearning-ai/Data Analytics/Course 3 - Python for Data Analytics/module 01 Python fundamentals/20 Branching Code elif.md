# Branching Code: elif

## 개요
- **elif(else-if)** 로 세 개 이상의 분기를 만든다 — "다른 조건을 확인하라".
- if → elif → (elif …) → else 순으로 순차 확인하며, 각 점수는 **한 경로만** 실행한다.

## 내용

### elif 구조
- 식당 등급(A/B/C/실패) 예: 
  - `if score >= A: print("A")`
  - `elif score >= B: print("B")`
  - `elif score >= C: print("C")`
  - `else: print("failed")`
- **점진적 필터(progressive filter)**: 각 조건은 앞 조건이 거짓임을 전제. 그래서 상·하한을 둘 다 검사할 필요 없음(내림차순 패턴).
- elif는 필요한 만큼 추가 가능. `else` 는 선택(캐치올 불필요하면 if+elif만도 가능).

### 루프와 결합 — 등급 리스트 만들기
- 빈 리스트 `grades = []` → 루프 안에서 각 조건마다 `grades.append("A")` 등.
- 루프 후 `len(grades)` = scores 길이(6.7만).
- 실행됐다고 맞는 게 아님 → LLM으로 "scores·grades 첫 10개 출력" 코드 요청해 검증(첫 개는 B, 나머지 A → 약 95%가 A와 일치).

### 흐름도 (4분기)
- score≥90 → A / 아니면 score≥B → B / 아니면 score≥C → C / 아니면 failed. 루프 안이라 각 점수마다 한 경로 실행(5개면 5번, 6만 개면 6만 번).

## 예시

### elif로 등급 부여
```python
grades = []
for score in scores:
    if score >= A:
        grades.append("A")
    elif score >= B:
        grades.append("B")
    elif score >= C:
        grades.append("C")
    else:
        grades.append("failed")
```

## 요약
- **elif** 로 3개 이상 분기를 만들며, if → elif → else 순으로 확인해 한 경로만 실행한다.
- 내림차순 조건은 앞 조건이 거짓임을 전제해 **점진적 필터**로 동작한다.
- 루프+elif로 등급 리스트를 만들고 LLM으로 검증한다. 다음 강의는 여러 리스트 동시 반복이다.

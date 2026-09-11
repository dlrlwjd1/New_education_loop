# Repeating Actions: for Loops

## 개요
- **for 루프(for loop)** 는 리스트의 각 항목에 대해 코드 블록을 반복 실행한다.
- 반복되는 코드를 한 번만 작성해 리스트 크기와 무관하게 확장(5개 → 6.7만 개도 코드 변경 없음).

## 내용

### for 루프 구조
- `for score in scores:` — **score** 는 반복마다 값이 바뀌는 새 변수로, scores의 각 값을 차례로 가짐(96 → 91 → …).
- 들여쓴 블록이 항목마다 한 번씩 실행. 끝에 닿으면 위로 **되돌아가(loop)** 반복, 마지막 항목 후 종료하고 다음 코드로.
- 5개 리스트에 대한 루프 = 동일 코드 5번 복사한 것과 같음(하지만 훨씬 간결).

### 루프 + 조건 조합
- 예: 등급 판정 — `for score in scores:` 안에 `if score >= A: print("A") else: print("less than A")`.

### 카운팅 패턴 — A 개수 세기
- `total = 0` (시작) → `for score in scores:` → `if score >= A: total = total + 1` → 루프 밖에서 `print(total)`.
- `total = total + 1`: total에 1을 더해 이전 값을 덮어씀.
- 6.7만 개 중 6.3만+ (약 95%)가 A. **루프 코드 변경 없이** 5개 → 6.7만 개로 확장, 수 밀리초 실행(구글 시트는 이 크기에 버벅임).

## 예시

### for 루프와 카운팅
```python
total = 0
for score in scores:      # 각 항목 반복
    if score >= A:
        total = total + 1  # 조건 충족 시 카운트
print(total)              # 루프 밖 (들여쓰기 X)
```

## 요약
- **for 루프**는 리스트 각 항목에 코드를 반복하며, 반복 변수가 값을 차례로 가진다.
- 루프+조건으로 카운팅 등을 하며, 코드 변경 없이 대규모 데이터로 확장된다(수 밀리초).
- 다음 강의는 제어 구조에서 흔한 문제들이다.

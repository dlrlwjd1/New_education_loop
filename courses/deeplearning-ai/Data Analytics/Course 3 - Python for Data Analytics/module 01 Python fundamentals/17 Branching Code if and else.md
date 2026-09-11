# Branching Code: if & else

## 개요
- **if 문(if statement)** 은 비교 결과가 참일 때만 코드를 실행해 **분기 경로**를 만든다.
- **else** 블록으로 조건이 거짓일 때의 처리를 추가한다.

## 내용

### if 문
- 형식: `if 조건:` + **콜론(:)** + 다음 줄 **들여쓰기(indentation)**. 들여쓴 코드는 조건이 참일 때만 실행.
- 예: `if scores[0] >= A:` → `print(names[0], "got an A")`. Beverly Falafel(96)은 실행됨.
- Melrose Shrimp(79)는 조건이 거짓 → 들여쓴 블록 실행 안 됨(아무 일 없음).

### else
- 조건이 거짓일 때 실행할 별도 분기. `else:` → 거짓 시 코드.
- 이제 값과 무관하게 **둘 중 하나** 블록이 항상 실행.
- **else는 단독 불가** — 반드시 if와 함께(if 조건이 안 맞을 때를 정의).

### 실행 경로
- if/else는 **두 경로**. 예: start → (A 또는 less than A) → end. score 값에 따라 한 경로만.

## 예시

### if / else
```python
if scores[0] >= A:        # 콜론 + 들여쓰기
    print(names[0], "got an A")
else:
    print(names[0], "did not get an A")
```

## 요약
- **if 문**은 `if 조건:` + 들여쓰기로 참일 때만 실행하며 분기를 만든다.
- **else** 는 거짓일 때 실행하며 단독으로 쓸 수 없다(if 필요).
- 분기 코드는 프로그래밍의 기본이다. 다음 강의는 이 조건을 리스트 전체로 확장한다.

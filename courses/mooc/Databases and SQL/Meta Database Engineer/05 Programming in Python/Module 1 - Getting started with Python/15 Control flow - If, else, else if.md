# Control flow: If / else, else if

## 개요

- 제어 흐름(control flow)의 개념과 조건문 if / elif / else의 실행 순서
- 레스토랑 할인 시나리오로 조건 흐름을 단계적으로 확장하는 실습

## 내용

### 제어 흐름이란

- **프로그램의 명령이 실행되는 순서.** 모든 프로그램에는 결정 지점이 있고 그에 따라 다른 동작을 취한다.
- Python의 제어 흐름 두 유형:
  1. **조건문** — if, else, elif(else if)
  2. **루프** — for(조건 충족 동안 반복), while(조건이 충족될 때까지 미지의 횟수 반복)

### 조건문 키워드

- **if** — 조건이 참이면 실행
- **else** — 앞선 조건에 걸리지 않은 나머지 전부를 처리
- **elif** — "앞의 조건이 참이 아니면 이 조건을 시도" — else는 **앞의 어떤 조건도 참이 아닐 때만** 실행된다.

## 예시

레스토랑 할인 로직을 단계적으로 구축:

```python
discount1 = 10
discount2 = 20
bill_total = 210

if bill_total > 100 and bill_total < 200:
    print("bill is greater than 100")
    bill_total = bill_total - discount1
elif bill_total > 200:
    print("bill is greater than 200")
    bill_total = bill_total - discount2
else:
    print("bill is less than 100")

print("total bill " + str(bill_total))   # int → str 변환 필요
# 210 입력 시: "bill is greater than 200" → 할인 20 적용 → total bill 190
```

- 포인트:
  - print에서 숫자를 문자열과 연결하려면 **str() 변환** 필요
  - 첫 if에 `and`로 상한(200 미만)을 두지 않으면 210에도 discount1이 적용되는 버그가 생긴다 — 조건 설계가 흐름을 바꾼다.

## 요약

- 제어 흐름은 조건문(if/elif/else)과 루프(for/while)로 실행 순서를 결정한다.
- elif는 앞 조건이 거짓일 때의 추가 조건, else는 모든 조건이 거짓일 때의 기본 경로다.
- 조건 범위를 정확히 설계해야(and 결합 등) 의도한 분기가 실행된다.

# Reversing a string on Python

## 개요

- 문자열 뒤집기 두 가지 방법: 슬라이스(slice) 확장 문법과 슬라이스+재귀
- Python에는 문자열 뒤집기 내장 함수가 없어 문제 해결 능력을 시험하는 단골 과제다

## 내용

### 방법 1 — 확장 슬라이스 문법

- 형식: `문자열[start : stop : step]` — start·stop은 조작 구간의 인덱스, **step은 훑을 때의 보폭(hop)**.
- start·stop을 **비워 두면 전체 문자열** 대상이 된다.
- **step에 -1** — 왼쪽부터가 아니라 **오른쪽에서 한 인덱스씩 역방향**으로 훑는다 → 뒤집힌 문자열.
- 가장 단순한 뒤집기 방법. 같은 변수에 바로 적용해도 된다.

### 방법 2 — 슬라이스 + 재귀

- 종료 조건: 문자열 길이가 0이면 그대로 반환.
- else: `string_reverse(str[1:]) + str[0]` — **첫 문자를 건너뛴 나머지**로 자신을 재호출하고, 건너뛴 첫 문자를 **뒤에 덧붙인다**.
- 매 재귀마다 다른(짧아진) 문자열이 전달되며, 유지한 문자가 뒤로 이어 붙어 역순이 완성된다.

## 예시

```python
# 방법 1: 슬라이스
trial = "reversal"
new_trial = trial[::-1]
print(new_trial)          # lasrever

# 방법 2: 슬라이스 + 재귀
def string_reverse(str):
    if len(str) == 0:
        return str
    else:
        return string_reverse(str[1:]) + str[0]

reverse = string_reverse("reversal")
print(reverse)            # lasrever
```

## 요약

- 슬라이스 `[::-1]`이 문자열을 뒤집는 가장 간단한 방법이다.
- 재귀 버전은 첫 문자를 잘라 재호출하고 뒤에 붙이는 패턴으로 같은 결과를 만든다.
- 두 방법 모두 면접·실무에서 유용한 기본기다.

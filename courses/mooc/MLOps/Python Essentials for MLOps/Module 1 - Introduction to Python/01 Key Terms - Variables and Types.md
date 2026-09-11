# Key Terms — Variables and Types

## 개요
- "Working with Variables and Types" 레슨의 용어 정리(reading). 이후 영상들(변수 할당, 데이터 타입, 조건문, 예외 처리)에서 반복적으로 쓰이는 핵심 용어를 미리 정의한다.

## 내용

| 용어 | 정의 |
|---|---|
| Variable (변수) | 값을 저장하는 이름이 붙은 메모리 위치. 명시적 타입이 없고 재할당 가능 |
| Assignment (할당) | `=` 연산자로 변수 이름에 값을 설정하는 것 |
| f-String | `f" "` 문법으로 표현식을 문자열에 임베드하는 포맷 문자열 리터럴 |
| Integer (정수) | 소수점 없는 양/음의 정수. 수학 연산 지원 |
| Float (실수) | 소수점이 있는 숫자. 측정값이나 분수 연산에 흔히 사용 |
| Boolean (불리언) | 논리에 쓰이는 True/False 값 |
| None | 값이 할당되지 않았음을 나타냄. 기본 반환값으로 흔히 등장 |
| If | 조건이 True일 때 실행되는 조건 블록의 시작 |
| Else | 앞선 if 조건이 False였을 때 실행되는 블록 |
| Exception (예외) | 정상적인 프로그램 흐름을 방해하는 에러. 잡아서(catch) 처리 가능 |
| Try/Except | try 블록의 코드를 먼저 시도하고, 예외가 발생하면 except 블록에서 잡아 처리 |

## 예시
```python
# 변수에 값 저장
name = "John"

# 변수 재할당
name = "Jane"

# f-String으로 변수 출력
print(f"Hello {name}")
```

## 요약
- 이 모듈 전체에서 쓰일 11개 핵심 용어: 변수/할당/f-string/정수/실수/불리언/None/if/else/예외/try-except.
- 다음 영상들에서 이 용어들을 실제 코드로 하나씩 확인한다.

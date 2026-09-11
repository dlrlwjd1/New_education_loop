# User input, console output

## 개요

- input() 함수로 사용자 입력 받기, print() 함수의 다양한 출력 방식(인자·sep·end·format)
- input이 항상 문자열을 반환한다는 핵심 주의점

## 내용

### input() 함수

- 입력 소스에서 데이터를 얻는 함수. 기본적으로 콘솔(커맨드라인)을 열어 입력을 받는다.
- `input("프롬프트")` — 괄호 안 문자열이 사용자에게 안내로 표시된다.
- 값을 쓰려면 **변수에 할당**해야 한다: `num = input("Please enter a number")`
- 여러 입력은 순차적으로 처리된다 (num1 입력 → num2 입력).

### 주의 — input은 문자열을 반환한다

- `print(num1 + num2)`에 5와 4를 넣으면 **54**가 나온다 — 두 변수가 문자열이라 +가 연결로 동작하기 때문.
- 산술이 필요하면 **명시적 변환**: `int(num1) + int(num2)` → 9.
- `print(type(num1))`으로 확인하면 str 클래스임을 알 수 있다.

### print() 함수

- 임의 개수의 인자를 받는다: 쉼표로 나열(순서대로 출력), 산술식, 문자열 연결 모두 가능.
- 예약 키워드 인자:
  - **objects** — 화면에 출력할 값들
  - **sep** — 객체 사이 구분자 (예: `print("hello", "you", sep=", ")` → hello, you)
  - **end** — 끝에 출력할 것
  - **file** — 출력 대상 지정 (기본 STDOUT)
  - **flush** — 버퍼 비우기 여부(불리언)

### 문자열 치환 — format()

- 연결 대신 **format() 치환**을 쓸 수 있다: 중괄호 순서(번호 지정 가능)에 따라 변수가 대입된다. 번호를 바꾸면 출력 순서도 바뀐다.

## 예시

```python
str_1 = input("Enter your first name: ")
str_2 = input("Enter your second name: ")

print("Hello " + str_1 + " " + str_2)        # 연결
print("Hello {} {}".format(str_1, str_2))    # 치환

num_1 = int(input("Enter a number: "))
num_2 = int(input("Enter a second number: "))
print(num_1 + num_2)                          # 산술 (int 변환 필수)
```

## 요약

- input(프롬프트)으로 콘솔 입력을 받고 변수에 담아 쓴다 — 반환값은 항상 문자열이므로 산술 전 int/float 변환이 필요하다.
- print는 다중 인자·산술·연결을 지원하고 sep/end/file/flush 키워드로 형식을 제어한다.
- format() 치환은 연결보다 깔끔한 출력 조립 방법이다.

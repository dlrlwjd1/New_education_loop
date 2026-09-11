# Optional: Data Types in Python

## 개요
- 베이스 Python의 데이터 타입 — boolean, integer, float, string, list, None type — 을 다룬다 (그 외 complex, object, set, dictionary 등도 존재)
- Python 데이터 타입을 앞선 변수 유형(variable types) 강의와 연결한다: 수치형(numerical)의 이산형/연속형, 범주형(categorical)의 명목형/순서형
- 각 타입의 `type()` 확인과 평균(mean) 계산이 의미를 갖는지로 타입의 성격을 이해한다

## 내용
### 수치형 — 정수(integer)와 실수(float)
수치형(numerical)이란 평균(mean)을 냈을 때 의미가 있는 것을 말한다. 이산형(discrete)에는 정수(integer)가, 연속형(continuous)에는 실수(float)가 대응한다.

- 정수와 실수의 차이는 본질적으로 **저장 방식**이다. 정수는 이진수(binary)로 있는 그대로 저장되지만, 실수는 약간의 수학이 들어간다.
- `type(4)`, `type(0)`, `type(-3)`은 모두 정수다 — 소수점 없는 정수는 모두 int.
- 정수 리스트 `[2, 3, 4, 5]`의 평균은 3.5이고 타입은 float다. 입력이 정수여도 소수가 있는 출력은 float가 된다.
- **Python 2 vs. 3 주의**: Python 3에서 정수의 평균은 float를 주지만, Python 2에서는 int가 반환되며 내림(floor)이 된다 — 이 예에서는 3이 반환됐을 것이다.
- **float의 저장 방식**: 3/5 = 0.6은 6 × 10^-1로도 쓸 수 있다. 기계 정밀도(machine precision) 때문에 0.6000...01처럼 미세하게 다르게 나오지만 본질적으로 같다. float는 어떤 수 × 밑(base, 10이나 2, 16) 형태로 저장되고 지수(exponent)가 소수점 위치를 알려 준다.
- `type(3/5)`는 float, `math.pi`(무한 소수를 갖는 무리수)도 float, `type(4.0)`도 float — 4는 정수지만 소수점을 명시하면 float로 저장된다.
- float 리스트 `[math.pi, 3/5, 4.1]`의 평균도 float다(약 2.6...).

### 범주형 — boolean, string, None
범주형(categorical/qualitative)에는 명목형(nominal)과 순서형(ordinal)이 있다. 명목형 아래에 boolean, string, None이 있고, **순서형에 대응하는 별도 타입은 없다** — 이 타입들을 어떻게 사용하느냐가 순서 유무를 결정한다. 예컨대 small/medium/large 시각화를 만들 때는 플로팅 함수에 넣는 입력으로 순서를 지정하는 것이지 Python에 내재된 순서가 있는 게 아니다. 리스트는 인덱스(index)가 있어 순서형 정보를 담을 수 있지만 그 자체가 본질적으로 순서형인 것은 아니다.

#### Boolean
- 참/거짓 값. `True`와 `False`는 Python의 예약어(reserved word)이며 반드시 대문자로 시작해야 한다 — 소문자 `true`는 에러가 난다.
- `bool('yes')`처럼 무엇이든 boolean으로 만들 수 있다.
- **True는 1, False는 0의 값을 갖는다.**
- 참/거짓을 판별하는 문장(statement)을 만들 수 있다: `if 6 < 5: print('yes')`는 거짓이라 아무 일도 없고, `6 > 5`로 바꾸면 'yes'가 출력된다.
- boolean 리스트 `[True, 6 < 5, 1 == 3, None is None]`의 각 원소 타입은 모두 bool이며, 이 리스트의 평균은 0.5(float)다. 범주형인데 평균이 계산되는 이유는 True=1, False=0이기 때문 — 실제로는 참인 비율의 평균이다(절반이 참이므로 0.5).

#### String
- 따옴표 사이의 모든 것. Python에서는 큰따옴표·작은따옴표 모두 가능하다(다른 언어는 다를 수 있다). 강사는 여러 단어에는 큰따옴표, 한 단어에는 작은따옴표를 쓰는 편.
- "This sentence makes sense"도, 말이 안 되는 "Makes sentence sense make"도 string이다.
- `math.pi`는 float지만 `"math.pi"`처럼 따옴표 안에 넣으면 string이 된다 — Python에게 다르게 평가하라고 요청하는 것.
- string 리스트 `['dog', 'koala', 'goose']`의 평균을 구하면 에러 — dog, koala, goose의 평균이란 게 있을 수 없으니 당연하다.

#### None type
- `None`은 예약어이며 대문자 N을 써야 한다. `type(None)`은 NoneType이고, `x = None`으로 변수에 담아도 NoneType이다.
- None 다섯 개의 리스트에서 평균을 구하면 에러 — None들의 평균은 의미가 없다.

### 리스트(list)
- 리스트는 여러 타입을 함께 담을 수 있고 순서형 정보를 저장하는 데 쓸 수도 있다 — 범주형일 수도, 수치형일 수도, 아무것도 아닐 수도 있으며 사용 방식이 결정한다.
- `[4, 4.0, 'dog', None]`처럼 int, float, string, None을 담은 리스트에서 각 원소의 타입을 출력하면 각각 그대로 나오고, 이 리스트의 평균은 에러 — float와 string을 더하는 것은 의미가 없다.
- 정수만 담은 `[1, 2, 3]`은 평균이 2.0(float)으로 잘 계산된다.
- string 리스트 `['third', 'first', 'medium', 'small', 'large']`는 인덱스로 순서 정보를 쓸 수 있다. 인덱스 0을 조회하면 'third'가 나온다 — **Python 인덱스는 0부터 시작**한다.
- `sort()`를 호출하면 string 리스트는 각 문자열의 첫 글자 기준 알파벳순으로 정렬된다 — 유용할 수도, 아닐 수도 있다. 순서형 데이터의 순서를 리스트로 유지하고 있다면 데이터의 의미에 맞지 않는 정렬을 하지 않도록 주의해야 한다.

### 마무리
pandas, NumPy 같은 라이브러리에는 DataFrame, datetime 등 더 많은 데이터 타입이 있으며 코스 진행에 따라 소개된다.

## 예시
```python
import math
from statistics import mean  # 강의의 mean 계산을 표준 라이브러리로 재현

# 정수(integer)
print(type(4))      # <class 'int'>
print(type(0))      # <class 'int'>
print(type(-3))     # <class 'int'>

# 정수 리스트의 평균은 float (Python 3)
numbers = [2, 3, 4, 5]
print(mean(numbers))        # 3.5
print(type(mean(numbers)))  # <class 'float'>

# 실수(float)
print(3 / 5)         # 0.6
print(6 * 10 ** -1)  # 0.6000000000000001 (기계 정밀도)
print(type(3 / 5))   # <class 'float'>
print(type(math.pi)) # <class 'float'>
print(type(4.0))     # <class 'float'>
print(mean([math.pi, 3 / 5, 4.1]))  # 약 2.6138...

# 불리언(boolean)
print(type(True))    # <class 'bool'>
print(type(False))   # <class 'bool'>
print(type(bool('yes')))  # <class 'bool'>

if 6 < 5:
    print('yes')     # 거짓이므로 출력 없음
if 6 > 5:
    print('yes')     # 'yes' 출력

myList = [True, 6 < 5, 1 == 3, None is None]
for element in myList:
    print(type(element))     # 모두 <class 'bool'>
print(mean(myList))          # 0.5 (True=1, False=0이므로 참인 비율)

# 문자열(string)
print(type("This sentence makes sense"))   # <class 'str'>
print(type("math.pi"))                     # <class 'str'> (따옴표 안이므로)
# mean(['dog', 'koala', 'goose'])          # 에러 — 문자열의 평균은 의미 없음

# None type
print(type(None))    # <class 'NoneType'>
x = None
print(type(x))       # <class 'NoneType'>
# mean([None, None, None, None, None])     # 에러

# 리스트(list)
myList = [4, 4.0, 'dog', None]
for element in myList:
    print(type(element))    # int, float, str, NoneType
# mean(myList)              # 에러 — float와 string을 더할 수 없음

intList = [1, 2, 3]
print(mean(intList))        # 2.0

strList = ['third', 'first', 'medium', 'small', 'large']
print(strList[0])           # 'third' — 인덱스는 0부터 시작
strList.sort()
print(strList)              # 첫 글자 기준 알파벳순 정렬
```

## 요약
- 수치형: 이산형 = int(그대로 저장), 연속형 = float(가수 × 밑^지수 방식 저장, 기계 정밀도 이슈)
- Python 3에서 정수의 평균은 float, Python 2에서는 내림된 int — 버전 차이에 주의
- 범주형: boolean(True=1, False=0), string(따옴표 안의 모든 것), None(예약어, NoneType)
- boolean 리스트의 평균은 참인 비율이 되고, string·None 리스트의 평균은 에러가 난다
- 순서형에 대응하는 내재 타입은 없다 — 사용 방식이 순서를 결정하며, 리스트는 인덱스로 순서 정보를 담을 수 있다
- 리스트 `sort()`는 문자열을 알파벳순으로 정렬하므로 순서형 데이터의 의미를 깨지 않게 주의
- pandas·NumPy의 DataFrame, datetime 등 라이브러리 타입은 이후에 소개된다

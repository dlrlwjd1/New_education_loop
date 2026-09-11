# Variables and Assignments

## 개요
- Python은 강타입 언어(strongly typed language)가 아니라서, 변수에 값을 할당할 때 타입을 미리 신경 쓸 필요가 없다는 것이 이 영상의 핵심.
- 강사는 Jupyter Notebook에서 실습하며(이 코스 전체에서 Notebook을 계속 사용), 변수 할당·재할당·변수로부터 새 변수 생성·변수 복사 시 주의점·print 사용법을 다룬다.

## 내용

### 기본 할당
- 할당은 `이름 = 값` 형태 — 등호(`=`) 하나로 이름(key/name)과 값을 연결한다.
- 값의 타입(문자열, 실수, 정수 등)이 무엇이든 신경 쓸 필요 없이 그대로 할당 가능 — 이것이 Python이 "강타입이 아니다(not strongly typed)"라고 불리는 이유.
- 단, 타입 검사가 없다는 것이 오히려 문제를 일으킬 수 있다. 예: `height = "10000"`처럼 숫자를 문자열로 할당해버리면, 이후 숫자 연산을 하려 할 때 문제가 생길 수 있음(출력에서 작은따옴표로 감싸져 문자열임을 확인 가능).

### 재할당
- 변수는 언제든 재할당 가능하다 (`name = "Alfredo"` → `name = "James"`로 재할당해도 문제없음).

### print로 변수 확인
- `print(name, last_name)`처럼 콤마를 사용하면 자동으로 공백이 들어간 채 출력됨.
- 콤마 없이 `name + last_name`처럼 이어 붙이면 공백이 사라짐 — 여러 값을 print에 전달할 때는 콤마를 쓰는 것이 편리.

### 기존 변수로 새 변수 만들기
- `full_name = f"{name} {last_name}"`처럼 f-string을 이용해 기존 변수들로부터 새 변수를 구성할 수 있다.

### 변수 복사의 함정
```python
new_name = name   # 현재 name은 "James"
print(new_name)   # James
name = "Alfredo"  # name을 재할당
print(new_name)   # 여전히 James
print(name)       # Alfredo
```
- `new_name = name`은 그 시점의 값("James")을 복사해서 저장한 것이지, name과 연결된 참조가 아니다. 이후 `name`을 재할당해도 `new_name`은 영향받지 않는다 — Python 인터프리터는 대입 시점의 값을 그대로 새 변수에 고정한다.

## 예시
```python
name = "Alfredo"
last_name = "Deza"
full_name = f"{name} {last_name}"
print(full_name)   # Alfredo Deza

new_name = name
name = "James"
print(new_name, name)  # Alfredo James  (new_name은 재할당 전 값 유지)
```

## 요약
- Python은 변수 할당 시 타입을 명시하거나 신경 쓸 필요가 없다(비강타입 언어) — 하지만 타입 검사가 없다는 점이 오히려 실수를 유발할 수 있으니 주의.
- 변수는 자유롭게 재할당 가능하고, 기존 변수들을 조합해 f-string으로 새 변수를 만들 수 있다.
- `new = old` 형태의 "복사"는 그 시점의 값을 고정해서 저장하는 것이므로, 이후 원본 변수를 재할당해도 복사된 변수는 바뀌지 않는다.
- `print`에 콤마로 여러 값을 넘기면 자동으로 공백이 추가된다.

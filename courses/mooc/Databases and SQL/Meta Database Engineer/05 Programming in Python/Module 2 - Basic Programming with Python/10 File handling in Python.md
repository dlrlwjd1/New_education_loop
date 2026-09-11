# File handling in Python

## 개요

- 파일 처리의 기본: open/close 함수, 모드(r, rb, r+, w, a), 텍스트 vs 바이너리 형식, with open 구문

## 내용

### open과 close

- **open(파일명, 모드)** — 읽기·쓰기·생성에 사용. 첫 인자는 파일 이름/위치, 둘째 인자는 모드.
- **close()** — 열린 파일 연결을 닫는다 (인자 없음).

### 모드

| 모드 | 의미 |
|---|---|
| `r` | 텍스트 형식으로 열어 읽기 |
| `rb` | **바이너리** 형식으로 읽기 |
| `r+` | 읽기·쓰기 겸용 |
| `w` | 쓰기 — **기존 파일을 덮어쓴다** |
| `a` | 편집/데이터 **추가(append)** |

### 텍스트 vs 바이너리

- **텍스트** — 사람이 읽을 수 있어 친화적. Python의 **기본 형식**.
- **바이너리** — 읽을 수 없지만 훨씬 압축적이라 **성능이 좋다**. 모드에 b를 붙여 지정(rb, ab 등).

### 읽기 함수

- **readline()** — 첫 줄 하나 반환
- **readlines()** — 여러 줄을 배열로 반환

### with open — 권장 방식

- `with open(...) as 변수:` 형태 — **예외 처리에 강하고 파일을 자동으로 닫아 준다.**

## 예시

```python
# 기본 방식
file = open("test.txt", mode="r")
data = file.readline()
print(data)          # Hello there
file.close()

# 권장: with open (자동 닫힘)
with open("test.txt", mode="r") as file:
    data = file.readline()
    print(data)
```

## 요약

- open(파일, 모드)으로 열고 close()로 닫으며, 모드는 r/rb/r+/w/a로 용도를 지정한다.
- 텍스트가 기본이고 바이너리(b)는 압축적·고성능이다.
- with open은 자동 닫힘과 예외 처리 이점 때문에 선호된다.

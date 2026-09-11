# Match statement

## 개요

- 많은 조건을 검사할 때 if/elif/else의 대안이 되는 match-case 문 (Python 3.10 도입)
- HTTP 상태 코드 → 에러 메시지 예제로 if 문과 비교

## 내용

### match 문이 필요한 이유

- 조건이 몇 개면 if/elif로 충분하지만, **조건이 많아지면 코드가 크고 복잡하고 지저분**해진다.
- **match 문(Python 3.10 도입)**은 같은 기능을 더 깔끔하고 읽기 좋게 제공한다.

### 문법 요점

- `match 변수:` 로 시작하고, 각 조건은 `case 값:` — if의 등가물.
- **여러 값 결합**: 파이프(`|`)가 or의 축약 — `case 200 | 201:` (if 문에서 `or`로 쓰던 것)
- **기본(default) 케이스**: `case _:` — if 블록의 else와 같다. 아무 케이스에도 맞지 않으면 실행된다.
- 변수와의 비교를 매번 반복하지 않아도 되어 공간이 절약된다.

## 예시

```python
http_status = 501

# if 문 버전
if http_status == 200 or http_status == 201:
    print("success")
elif http_status == 400:
    print("bad request")
elif http_status == 500 or http_status == 501:
    print("server error")
else:
    print("unknown")

# match 문 버전 (동일 동작, 더 깔끔)
match http_status:
    case 200 | 201:
        print("success")
    case 400:
        print("bad request")
    case 500 | 501:
        print("server error")
    case _:
        print("unknown")
```

## 요약

- match 문은 값을 여러 조건과 비교해 처음 맞는 케이스를 실행하는 if의 깔끔한 대안이다.
- `|`로 다중 값을, `case _:`로 기본 경로를 처리한다.
- Python 3.10부터 지원되며, 이전 버전 개발자들은 별도 해법을 만들어 썼다.

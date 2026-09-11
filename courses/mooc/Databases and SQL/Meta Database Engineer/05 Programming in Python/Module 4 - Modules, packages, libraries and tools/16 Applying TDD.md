# Applying TDD

## 개요

- TDD를 실제로 적용하는 실습: 테스트 파일을 먼저 쓰고 그에 맞춰 메인 코드를 작성·반복 (학생 등록 검증 예제)

## 내용

### 프로세스

1. **기능을 염두에 두고 테스트 케이스를 먼저 작성**
2. 테스트를 통과하도록 코드 작성
3. 실패하면 코드 리팩터링 → 실패가 없을 때까지 반복

### 실습 — 학생 등록 명단 검증

- 시나리오: 시험 등록 학생 이름이 명단(단순화를 위해 DB 대신 Python 리스트)에 있는지, 그리고 **데이터 무결성**(이름 형식이 올바른지) 확인.
- 파일 구성: **test_findstring.py**(테스트, 먼저 작성) + **findstring.py**(메인 코드, 테스트에 맞춰 작성)
- 1차 사이클:
  - 테스트: `test_ispresent`에서 assert로 ispresent 함수 검증
  - 코드: findstring.py에 ispresent(person) — 이름 리스트에 있으면 True인 if-else
  - 실행: "Al"은 리스트에 있어 통과
- 2차 사이클 (요구 추가 — 이름에 숫자 금지):
  - 테스트: `test_nodigit` 추가
  - 코드: nodigit 함수 추가 (숫자 포함 검사)
  - 실행: Al은 통과, **"N7"은 숫자가 있어 실패** → 실패가 사라질 때까지 코드 수정·반복

## 예시

```python
# test_findstring.py (먼저 작성)
import pytest
import findstring

def test_ispresent():
    assert findstring.ispresent("Al") == True

def test_nodigit():
    assert findstring.nodigit("N7") == False

# findstring.py (테스트에 맞춰 작성)
def ispresent(person):
    names = ["Al", "Bea", "Cam"]
    if person in names:
        return True
    else:
        return False

def nodigit(person):
    if any(ch.isdigit() for ch in person):
        return False
    else:
        return True
```

## 요약

- TDD 적용은 테스트 파일 작성 → 대응 코드 작성 → 실행 → 실패 시 수정의 사이클이다.
- 새 요구(숫자 금지 등)가 생기면 테스트를 먼저 추가하고 코드를 따라 맞춘다.
- 실패한 테스트가 없어질 때까지 반복하면 기능이 완성된다.

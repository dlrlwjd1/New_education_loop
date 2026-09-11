# Generators (외부 읽기 자료)

## 개요
- 제너레이터(generator)를 심화 설명하는 보충 읽기 자료. `yield`를 이용한 지연 평가(lazy evaluation)의 동작 원리와, 클래스 기반 이터레이터와의 관계를 다룬다.

## 내용

**요약**: 제너레이터는 일반 함수처럼 값을 한 번에 모두 반환하는 대신 `yield` 키워드로 값을 하나씩 지연 생성(lazy production)하는 함수다. 가볍고 지연된 평가(lightweight lazy evaluation)를 가능하게 한다.

**핵심 포인트**
- 제너레이터는 `yield`로 값을 하나씩 출력하며, 매 값 사이에서 실행을 중단(suspend)했다가 재개(resume)한다.
- 제너레이터는 실행 사이의 상태(state)를 자동으로 저장한다.
- 제너레이터로 할 수 있는 모든 것은 클래스 기반 이터레이터로도 만들 수 있지만, 제너레이터가 더 간결하다.
- 제너레이터 표현식은 리스트 컴프리헨션과 비슷한 짧은 문법을 제공한다.

**생각해볼 질문(Reflection Questions)**
- 일반 함수 대신 제너레이터 함수를 언제 쓰고 싶을까?
- 제너레이터가 유용한 실제 사례는?
- 제너레이터는 실행 사이의 상태를 어떻게 저장할까?
- 제너레이터 함수의 끝에 도달하면 무슨 일이 일어날까?
- 제너레이터 함수와 일반 함수의 가장 큰 문법적 차이는?

**도전 과제(참고용 — 직접 풀어볼 것)**
- 1부터 10까지의 숫자를 생성하는 기본 제너레이터 함수 작성
- 피보나치 수열을 무한히 생성하는 제너레이터 만들기
- 제너레이터 표현식으로 1부터 100까지 제곱의 합 계산
- 리스트를 역순으로 순회하는 제너레이터 구현
- Python `random` 라이브러리와 제너레이터 패턴으로 난수 생성기 만들기

**예시 코드 (원문 수록)**
```python
def lazy_return_random_attacks():
    """Yield attacks each time"""
    import random
    attacks = {"kimura": "upper_body",
               "straight_ankle_lock": "lower_body",
               "arm_triangle": "upper_body",
               "keylock": "upper_body",
               "knee_bar": "lower_body"}
    while True:
        random_attack = random.choices(list(attacks.keys()))
        yield random_attack

attack = lazy_return_random_attacks()
print(type(attack))          # <class 'generator'>
for _ in range(6):
    print(next(attack))
```

## 요약
- 제너레이터는 `yield`로 한 번에 하나씩 값을 만들며 실행 상태를 자동 저장 — 메모리 효율적인 지연 평가의 핵심 도구.
- 도전 과제는 직접 코드로 풀어보는 것을 권장.

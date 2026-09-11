# Namespacing and scoping

## 개요

- 네임스페이스(이름→객체 매핑)와 스코프(네임스페이스에 직접 접근 가능한 코드 영역)
- LEGB 규칙에 따른 스코프 해석(scope resolution), global·nonlocal 키워드

## 내용

### 네임스페이스와 스코프

- 공식 문서 정의: **네임스페이스 = 이름에서 객체로의 매핑**, **스코프 = 그 네임스페이스에 직접 접근 가능한 프로그램의 텍스트 영역.**
- 키-값 구조의 딕셔너리가 이 매핑에 이상적인 자료 구조다. 모듈도 내부 속성들의 이름을 담는 모듈 객체를 만들므로 **모듈은 일종의 네임스페이스**다.

### LEGB 규칙 (스코프 해석 순서)

- **L**ocal(함수 안) → **E**nclosed(중첩 함수의 바깥 함수) → **G**lobal(최상위/함수 밖) → **B**uilt-in(내장 모듈 키워드)
- 같은 이름의 변수라도 스코프별로 **서로 다른 객체**다 — id() 함수로 확인하면 전역·b함수 내부·중첩 c함수 내부의 같은 이름이 모두 다른 id를 가진다.

### Python 변수 선언의 특징

- 변수는 정의 시 **암묵적으로 선언**된다(타입 선언 없음).
- **다른 언어와 달리 기본이 지역(local)** — 명시하지 않는 한 전역이 아니다.
- locals()·globals() 내장 함수로 각 스코프의 딕셔너리 내용을 확인할 수 있다.
- **전역 변수는 지양** — 프로젝트가 복잡해지면 진단이 어려워 스파게티 코드가 되고, 접근 제어·동시성·메모리 관리도 지역 변수가 낫다.

### 스코프를 바꾸는 두 키워드

- **global** — 함수 안에서 전역 변수에 접근하게 한다.
- **nonlocal** — **중첩 함수 안에서만** 사용하며, **감싸는(enclosed) 함수에 그 변수가 먼저 정의되어 있어야** 한다. 없으면 "no binding for nonlocal" 에러.

## 예시

```python
animal = "camel"            # 전역

def d():
    animal = "elephant"     # d의 지역 (enclosed)
    def e():
        nonlocal animal
        animal = "giraffe"  # d의 animal을 변경
        print("inside nested:", animal)   # giraffe
    print("before calling e:", animal)    # elephant
    e()
    print("after nested:", animal)        # giraffe (변경 유지)

d()
print("global:", animal)    # camel — 전역은 영향 없음
```

## 요약

- 네임스페이스는 이름→객체 매핑이고, 스코프 해석은 LEGB 순서를 따른다.
- Python 변수는 기본이 지역이며, 같은 이름도 스코프마다 다른 객체다.
- global은 전역 접근, nonlocal은 감싸는 함수의 변수 접근용이고, 전역 변수 남용은 스파게티 코드를 부른다.

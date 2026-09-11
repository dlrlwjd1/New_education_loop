# CALCULATE and Filter Modifiers

## 개요
- DAX의 핵심 함수 `CALCULATE`로 필터 컨텍스트를 변경하고 필터 수정 함수를 조합하는 방법을 학습한다.

## 내용

### CALCULATE
```DAX
CALCULATE(<expression>[, <filter1> [, <filter2> ...]])
```
- 식을 하나 이상의 변경된 필터 컨텍스트에서 평가한다.
- Boolean 필터는 단일 테이블의 열을 참조하며, 측정값·중첩 `CALCULATE`·테이블 반환 함수를 직접 포함할 수 없는 등의 제약이 있다.
- 복잡한 조건은 `FILTER`가 반환하는 가상 테이블을 필터 인수로 사용한다.

### 필터 수정 함수
- `REMOVEFILTERS`: 지정한 테이블이나 열의 필터를 제거한다.
- `KEEPFILTERS`: 같은 열의 기존 필터를 덮어쓰지 않고 새 조건과 교집합한다.
- `ALL`: 필터를 제거하면서 다른 함수에서 사용할 테이블 또는 열도 반환할 수 있다.
- `CROSSFILTER`: 현재 계산에서 관계의 필터 방향을 바꾼다.
- `USERELATIONSHIP`: 현재 계산에서 비활성 관계를 사용한다.

## 예시
```DAX
High-end Sales =
CALCULATE(
    SUM(Sales[Total Sales]),
    FILTER(Products, Products[Unit Price] >= 500)
)

Blue Product Sales =
CALCULATE([Total Sales], KEEPFILTERS(Products[Color] = "Blue"))

All-region Sales =
CALCULATE([Total Sales], REMOVEFILTERS(Region))
```

## 요약
- `CALCULATE`는 필터 컨텍스트를 바꾸어 같은 기본 측정값을 다양한 분석 관점에서 재사용한다.
- 기존 필터를 제거·보존·추가하는 의도를 명확히 하고 적절한 수정 함수를 선택해야 한다.


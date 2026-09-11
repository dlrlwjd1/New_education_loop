# Query execution contexts

## 개요

- Elasticsearch에서 쿼리는 두 가지 실행 컨텍스트에서 실행됩니다: query context와 filter context입니다.

## 내용

- query context에서는 관련성 점수가 계산되고, filter context에서는 단순히 문서의 일치 여부만 판단합니다.

## 예시

- `bool` 쿼리에서 must_not occurrence type은 filter context에서 실행됩니다.

## 요약

- Elasticsearch에서 쿼리의 두 가지 실행 컨텍스트와 그 차이점입니다.

- [원본 강의](https://www.udemy.com/course/elasticsearch-complete-guide/learn/lecture/36514066#overview)

# Pagination

## 개요

- Elasticsearch에서 페이지네이션을 구현하는 방법을 설명합니다.

## 내용

- `size`와 `from` 파라미터를 사용하여 페이지네이션을 구현할 수 있습니다. 총 검색 결과 페이지 수는 `hits/size`로 계산되며, 각 페이지의 오프셋은 `(page_number - 1) * size`로 계산됩니다.

## 예시

- 페이지 크기가 10이고 페이지 번호가 3이라면 `from=20`으로 설정하여 세 번째 페이지의 결과를 가져옵니다.

## 요약

- `size`와 `from` 파라미터를 사용하여 Elasticsearch에서 페이지네이션을 구현합니다.

- [원본 강의](https://www.udemy.com/course/elasticsearch-complete-guide/learn/lecture/7637514#overview)

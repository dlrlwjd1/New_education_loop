# Document counts are approximate

## 개요

- Elasticsearch에서 텀 세분화(Term Segregation)의 결과가 정확하지 않을 수 있는 이유를 설명합니다.

## 내용

- 다중 샤드로 분산된 인덱스에서 텀 세분화는 각 샤드에서 상위 텀을 가져와 최종 결과를 계산하므로 정확하지 않을 수 있습니다.

## 예시

- `product` 필드에 따라 주문을 그룹화할 때 일부 텀의 문서 수가 실제보다 낮게 표기될 수 있습니다.

## 요약

- Elasticsearch에서 텀 세분화는 다중 샤드로 분산된 인덱스에서 정확하지 않을 수 있습니다.

- [원본 강의](https://www.udemy.com/course/elasticsearch-complete-guide/learn/lecture/7756564#overview)

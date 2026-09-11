# How Elasticsearch writes data

## 개요

- Elasticsearch에서 데이터를 쓰는 과정에 대해 설명한다.

## 내용

- Write 요청은 항상 Primary shard로 라우팅되며, 해당 shard가 문서를 검증하고 복제 shard들에게 업데이트를 전달한다.

## 예시

- 새로운 문서를 인덱싱할 때, Primary shard가 문서를 검증한 후 복제 shard들에게 업데이트를 전달한다.

## 요약

- Write 요청은 Primary shard에서 시작하여 복제 shard들에게 업데이트를 전달한다.

- [원본 강의](https://www.udemy.com/course/elasticsearch-complete-guide/learn/lecture/16288144#overview)

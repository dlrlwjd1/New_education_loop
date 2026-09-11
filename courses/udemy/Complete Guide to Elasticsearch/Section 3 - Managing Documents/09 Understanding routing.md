# Understanding routing

## 개요

- Elasticsearch의 기본적인 작동 방식을 이해하고, 문서가 저장될 shard를 결정하는 데 사용되는 routing에 대해 배운다.

## 내용

- Routing은 문서가 저장될 shard를 결정하는 과정이다.

## 예시

- 새로운 문서를 인덱싱할 때, Elasticsearch는 문서의 ID를 기반으로 routing 공식을 사용하여 shard를 결정한다.

## 요약

- 기본 routing은 문서의 ID를 사용하여 shard를 결정하며, 이는 사용자에게 투명하게 작동한다.

- [원본 강의](https://www.udemy.com/course/elasticsearch-complete-guide/learn/lecture/16288134#overview)

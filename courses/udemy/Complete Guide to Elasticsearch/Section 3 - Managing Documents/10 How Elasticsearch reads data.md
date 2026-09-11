# How Elasticsearch reads data

## 개요

- Elasticsearch에서 데이터를 읽는 과정에 대해 자세히 설명한다.

## 내용

- Routing을 통해 문서가 저장된 shard를 찾고, Adaptive Replica Selection(ARS)을 사용하여 최적의 shard를 선택한다.

## 예시

- 클라이언트가 특정 ID로 문서를 검색하면, Elasticsearch는 routing 공식을 사용하여 해당 shard를 찾아 읽어온다.

## 요약

- 데이터 읽기는 routing과 ARS를 통해 효율적으로 이루어진다.

- [원본 강의](https://www.udemy.com/course/elasticsearch-complete-guide/learn/lecture/16288138#overview)

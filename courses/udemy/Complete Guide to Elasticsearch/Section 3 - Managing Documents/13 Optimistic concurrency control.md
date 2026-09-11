# Optimistic concurrency control

## 개요

- Elasticsearch에서 동시성 제어를 위한 옵티mistic concurrency control(OCO)에 대해 설명한다.

## 내용

- OCO는 문서가 수정되지 않았다면 업데이트를 실패하도록 하는 방법이다.

## 예시

- 두 사용자가 동시에 동일한 문서를 업데이트하려고 할 때, OCO를 사용하여 중복 업데이트를 방지한다.

## 요약

- OCO는 문서의 버전을 확인하여 동시성 문제를 해결한다.

- [원본 강의](https://www.udemy.com/course/elasticsearch-complete-guide/learn/lecture/16288158#overview)

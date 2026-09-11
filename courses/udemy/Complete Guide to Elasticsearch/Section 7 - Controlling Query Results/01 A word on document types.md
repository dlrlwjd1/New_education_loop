# A word on document types

## 개요

- 오래된 Elasticsearch 강의에서 보이는 매핑 타입(mapping type) 표기를 최신 API 형식으로 읽는 방법을 설명한다.

## 내용

- 매핑 타입은 이전 Elasticsearch 버전에서 사용되었지만 8.x에서 제거되는 기능이다.
- 오래된 예제의 `default`는 매핑 타입을 뜻하며, 최신 요청에서는 타입 부분을 제거해야 한다.
- 강의의 이전 표기와 최신 GitHub 예제 사이의 차이는 주로 엔드포인트 형식이다.

## 예시

이전 형식:

```http
GET /products/default/_search
```

최신 형식:

```http
GET /products/_search
```

## 요약

- 오래된 타입 포함 엔드포인트를 그대로 사용하지 말고 최신 예제를 확인한다.
- [원본 강의](https://www.udemy.com/course/elasticsearch-complete-guide/learn/lecture/10097490#overview)

# Retrieving documents by ID

## 개요
이 강의에서는 특정 ID로 문서를 조회하는 방법을 배웁니다.

## 내용
1. **문서 조회**
   - GET HTTP 메서드를 사용하여 문서를 조회합니다.
   - 인덱스 이름 뒤에 "_doc"과 문서 ID를 붙여 endpoint를 구성합니다.
   - 응답에서 "_source" 키 아래에 추가한 JSON 객체가 반환됩니다.

## 예시
1. **문서 조회**
   ```json
   GET /products/_doc/100
   ```
   응답에서 "_source" 키 아래에 "name": "Product A", "price": 19.99, "in_stock": true가 포함되어 있는지 확인합니다.

## 요약
- Elasticsearch는 GET 메서드를 사용하여 특정 ID로 문서를 조회할 수 있습니다.
- 인덱스 이름 뒤에 "_doc"과 문서 ID를 붙여서 endpoint를 구성합니다.
- 응답에서 "_source" 키 아래에 추가한 JSON 객체가 반환됩니다.

- [원본 강의](https://www.udemy.com/course/elasticsearch-complete-guide/learn/lecture/16288114#overview)

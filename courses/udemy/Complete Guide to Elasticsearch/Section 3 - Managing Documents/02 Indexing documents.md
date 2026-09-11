# Indexing documents

## 개요
이 강의에서는 인덱스에 문서를 추가하는 방법을 배웁니다. "index"라는 더 정확한 용어를 사용하지만, "add"라고도 부르는 경우가 많습니다.

## 내용
1. **문서 인덱싱**
   - POST HTTP 메서드를 사용하여 문서를 인덱스에 추가합니다.
   - 인덱스 이름 뒤에 "_doc"을 붙여 endpoint를 구성합니다.
   - 요청 본체에서 JSON 객체로 문서를 정의합니다.

2. **자동 생성된 ID**
   - 문서 ID는 자동으로 생성되며, 필요할 경우 지정할 수 있습니다.
   - "action.auto_create_index" 설정이 true일 때, 존재하지 않는 인덱스에 문서를 추가하면 인덱스가 자동으로 생성됩니다.

## 예시
1. **문서 인덱싱**
   ```json
   POST /products/_doc/100
   {
     "name": "Product A",
     "price": 19.99,
     "in_stock": true
   }
   ```
   응답에서 "_id" 키가 100으로 설정되어 있는지 확인합니다.

## 요약
- Elasticsearch는 POST 메서드를 사용하여 문서를 인덱스에 추가할 수 있습니다.
- "_doc"을 endpoint 뒤에 붙여서 문서를 인덱스에 추가합니다.
- 문서 ID는 자동으로 생성되며, 필요할 경우 지정할 수 있습니다.

- [원본 강의](https://www.udemy.com/course/elasticsearch-complete-guide/learn/lecture/16288110#overview)

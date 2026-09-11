# Updating documents

## 개요
이 강의에서는 이미 인덱스에 있는 문서를 업데이트하는 방법을 배웁니다. 특정 필드 값을 변경하거나 새로운 필드를 추가할 수 있습니다.

## 내용
1. **기존 필드 값 변경**
   - POST HTTP 메서드와 Update API를 사용하여 기존 필드 값을 변경합니다.
   - "doc" 객체 내에 변경하려는 필드 이름과 새 값이 포함됩니다.

2. **새로운 필드 추가**
   - 동일한 방식으로 새로운 필드를 추가할 수 있습니다.
   - 예를 들어, "tags"라는 배열을 포함하는 새로운 필드를 추가합니다.

## 예시
1. **기존 필드 값 변경**
   ```json
   POST /products/_update/100
   {
     "doc": {
       "in_stock": 3
     }
   }
   ```
   응답에서 "result" 키가 "updated"로 설정되어 있는지 확인합니다.

2. **새로운 필드 추가**
   ```json
   POST /products/_update/100
   {
     "doc": {
       "tags": ["new", "tag"]
     }
   }
   ```
   응답에서 "_source" 키 아래에 "tags": ["new", "tag"]가 포함되어 있는지 확인합니다.

## 요약
- Elasticsearch는 POST 메서드와 Update API를 사용하여 문서의 필드 값을 변경하거나 새로운 필드를 추가할 수 있습니다.
- "doc" 객체 내에 변경하려는 필드 이름과 새 값이 포함됩니다.

- [원본 강의](https://www.udemy.com/course/elasticsearch-complete-guide/learn/lecture/16288118#overview)

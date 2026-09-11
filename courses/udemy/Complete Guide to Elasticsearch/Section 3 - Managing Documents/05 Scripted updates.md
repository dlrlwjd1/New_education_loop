# Scripted updates

## 개요
이 강의에서는 스크립트를 사용하여 문서를 업데이트하는 방법을 배웁니다. 스크립트는 문서의 값을 변경하거나 조건에 따라 업데이트할 수 있습니다.

## 내용
1. **스크립트 업데이트**
   - POST HTTP 메서드와 Update API를 사용하여 스크립트를 실행합니다.
   - "script" 객체 내에 스크립트의 소스 코드가 포함됩니다.
   - 예를 들어, "in_stock" 필드의 값을 감소시키는 스크립트입니다.

2. **파라미터 사용**
   - 스크립트 내에서 파라미터를 정의할 수 있습니다.
   - 예를 들어, 구매한 제품 수에 따라 "in_stock" 필드의 값을 감소시킵니다.

## 예시
1. **스크립트 업데이트**
   ```json
   POST /products/_update/100
   {
     "script": {
       "source": "ctx._source.in_stock -= params.amount",
       "params": {
         "amount": 4
       }
     }
   }
   ```
   응답에서 "result" 키가 "updated"로 설정되어 있는지 확인합니다.

## 요약
- Elasticsearch는 POST 메서드와 Update API를 사용하여 스크립트를 실행하여 문서를 업데이트할 수 있습니다.
- 스크립트 내에 변경하려는 필드 값을 감소시키거나 조건에 따라 업데이트할 수 있습니다.
- 파라미터를 사용하여 스크립트의 동작을 동적으로 변경할 수 있습니다.

- [원본 강의](https://www.udemy.com/course/elasticsearch-complete-guide/learn/lecture/16288120#overview)

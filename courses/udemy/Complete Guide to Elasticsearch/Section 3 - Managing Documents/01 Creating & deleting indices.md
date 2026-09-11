# Creating & deleting indices

## 개요
이 강의에서는 이미 설정된 환경에서 클러스터에 문서를 추가하기 전에 인덱스를 생성하고 삭제하는 방법을 보여줍니다. 이전 섹션에서 "pages"라는 인덱스를 만들고 분산된 샤드를 탐색하는데 사용했지만, 이제는 더 많은 정보를 포함한 새로운 인덱스를 생성하고 기존 인덱스를 제거하는 방법을 배워보겠습니다.

## 내용
1. **인덱스 삭제**
   - Elasticsearch는 REST API를 통해 작업을 수행할 수 있습니다.
   - DELETE HTTP 메서드를 사용하여 인덱스를 삭제합니다.
   - Kibana의 Console 도구에서 슬래시(/)는 선택적입니다.

2. **인덱스 생성**
   - PUT HTTP 메서드를 사용하여 새로운 인덱스를 추가합니다.
   - 인덱스 설정을 지정하려면 JSON 객체가 필요합니다.
   - "settings"이라는 중첩된 객체 내에 샤드 수와 복제 샤드 수를 설정합니다.

## 예시
1. **인덱스 삭제**
   ```json
   DELETE /pages
   ```
   응답에서 "acknowledged" 키가 true이면 인덱스가 성공적으로 제거되었음을 나타냅니다.

2. **인덱스 생성**
   ```json
   PUT /products
   {
     "settings": {
       "number_of_shards": 2,
       "number_of_replicas": 2
     }
   }
   ```
   응답에서 "acknowledged"와 "shards_acknowledged" 키가 true이면 인덱스가 성공적으로 생성되었음을 나타냅니다.

## 요약
- Elasticsearch는 REST API를 통해 인덱스를 생성하고 삭제할 수 있습니다.
- PUT 메서드로 인덱스를 추가하고, DELETE 메서드로 인덱스를 제거합니다.
- 인덱스 설정을 지정하려면 JSON 객체가 필요하며, "settings" 내에 샤드 수와 복제 샤드 수를 설정할 수 있습니다.

- [원본 강의](https://www.udemy.com/course/elasticsearch-complete-guide/learn/lecture/16288106#overview)

# What is a Distributed Database System?

## 개요

- 분산 데이터베이스 시스템(distributed database system)의 경계를 파일 검색 시스템이나 단순 다중 처리 시스템과 비교해 설명한다.
- 지리적으로 분산된 DB와 데이터 지역성·복제의 의미를 소개한다.

## 내용

### 분산 DB의 조건

관련 있고 구조화된 데이터가 여러 네트워크 사이트의 DB에 물리적으로 분산되어야 한다. 단순히 파일 여러 개를 검색하거나, 한 서버의 디스크를 여러 프로세서가 공유하는 구성만으로는 이 강좌가 말하는 분산 DB가 아니다.

### 다중 처리 구조와 차이

shared-memory는 프로세서가 cache와 disk를 공유하고, shared-disk는 각자 cache를 가지되 disk를 공유한다. shared-nothing은 프로세서·메모리·DB를 각각 가지며 필요할 때 네트워크로 통신해 분산 DB에 더 가까운 구조를 보인다.

### 지역성과 복제

자주 사용하는 데이터는 사용자·애플리케이션과 가까운 사이트에 배치한다. 다른 사이트에 복제본을 두면 접근 지연을 줄이는 동시에 장애 시 가용성을 높일 수 있다.

## 예시

```text
Baltimore DB: Maryland 고객, Maryland 제조사
New York DB: New York 고객, Maryland 고객 복제본, New York 제조사
Chicago DB: Chicago 고객
```

New York 애플리케이션이 Maryland 고객을 자주 읽는다면 지역 복제본은 원격 왕복을 줄인다.

## 요약

- 데이터 자체와 처리 노드가 실제로 여러 사이트에 분산되어야 한다.
- 데이터 지역성은 읽기 지연과 네트워크 비용을 줄인다.
- 복제는 성능과 가용성을 높이지만 일관성 관리 비용을 만든다.

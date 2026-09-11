# Complete Guide to Elasticsearch

- **플랫폼**: Udemy
- **강사**: Bo Andersen
- **링크**: https://www.udemy.com/course/elasticsearch-complete-guide/
- **분량**: 10개 섹션 · 영상 128개 · 읽기 자료 4개 · 퀴즈 6개 · 약 13시간
- **언어**: 영어 · 한국어/영어 자동 자막
- **마지막 업데이트**: 2026년 1월
- **확인일**: 2026-07-28

## 개요

- Elasticsearch를 처음부터 배우며 검색 엔진의 내부 동작, 문서 관리, 매핑과 분석, 검색 쿼리, 집계와 검색 품질 개선을 단계적으로 다룬다.
- 개발자가 Elasticsearch 클러스터의 기능을 활용하는 데 초점을 두며, 운영 관리자를 위한 프로덕션 클러스터 운영 과정은 아니다.
- Kibana는 쿼리를 보내는 도구로 사용하지만 Logstash와 Kibana 자체의 상세 기능은 코스 범위에 포함되지 않는다.
- 수강 페이지의 전체 커리큘럼과 영상 128개의 대본을 확인했다. 기존 127개 영상에 더해, 2026-09-06 `Terms lookup mechanism`의 트랜스크립트를 확인하고 정리했다.
- 퀴즈는 응시하거나 완료 상태를 변경하지 않았다.

## 핵심 학습 흐름

1. Elasticsearch와 Elastic Stack의 역할을 이해한다.
2. 클러스터, 노드, 샤드(shard), 복제(replication)의 기본 구조를 익힌다.
3. 인덱스와 문서를 관리하고 매핑(mapping)과 분석(analysis)을 설계한다.
4. term-level 및 full-text 쿼리를 조합해 데이터를 검색한다.
5. 집계(aggregation)로 데이터를 분석하고 관련성(relevance)과 검색 품질을 개선한다.

## 코스 구성

### Section 1 — Introduction

Elasticsearch와 Elastic Stack의 역할, 코스 범위와 대표 아키텍처를 소개한다.

- [01 Introduction to the course](Section%201%20-%20Introduction/01%20Introduction%20to%20the%20course.md)
- [02 Introduction to Elasticsearch](Section%201%20-%20Introduction/02%20Introduction%20to%20Elasticsearch.md)
- [03 Overview of the Elastic Stack](Section%201%20-%20Introduction/03%20Overview%20of%20the%20Elastic%20Stack.md)
- [04 Quiz 1 - Understanding of the Elastic Stack](Section%201%20-%20Introduction/04%20Quiz%201%20-%20Understanding%20of%20the%20Elastic%20Stack.md)
- [05 Walkthrough of common architectures](Section%201%20-%20Introduction/05%20Walkthrough%20of%20common%20architectures.md)
- [06 Guidelines for the course Q&A](Section%201%20-%20Introduction/06%20Guidelines%20for%20the%20course%20Q%26A.md)

### Section 2 — Getting Started

Elasticsearch와 OpenSearch의 차이, 설치·호스팅 방식, 클러스터·샤드·복제·노드 역할을 다룬다.

- [01 Elasticsearch vs OpenSearch](Section%202%20-%20Getting%20Started/01%20Elasticsearch%20vs%20OpenSearch.md)
- [02 Overview of installation & hosting options](Section%202%20-%20Getting%20Started/02%20Overview%20of%20installation%20%26%20hosting%20options.md)
- [03 Hosting OpenSearch on Bonsai](Section%202%20-%20Getting%20Started/03%20Hosting%20OpenSearch%20on%20Bonsai.md)
- [04 Hosting Elasticsearch & Kibana on Elastic Cloud](Section%202%20-%20Getting%20Started/04%20Hosting%20Elasticsearch%20%26%20Kibana%20on%20Elastic%20Cloud.md)
- [05 Setting up Elasticsearch & Kibana on macOS & Linux](Section%202%20-%20Getting%20Started/05%20Setting%20up%20Elasticsearch%20%26%20Kibana%20on%20macOS%20%26%20Linux.md)
- [06 Setting up Elasticsearch & Kibana on Windows](Section%202%20-%20Getting%20Started/06%20Setting%20up%20Elasticsearch%20%26%20Kibana%20on%20Windows.md)
- [07 Understanding the basic architecture](Section%202%20-%20Getting%20Started/07%20Understanding%20the%20basic%20architecture.md)
- [08 Inspecting the cluster](Section%202%20-%20Getting%20Started/08%20Inspecting%20the%20cluster.md)
- [09 Sending queries with cURL](Section%202%20-%20Getting%20Started/09%20Sending%20queries%20with%20cURL.md)
- [10 Sharding and scalability](Section%202%20-%20Getting%20Started/10%20Sharding%20and%20scalability.md)
- [11 Quiz 2 - Sharding](Section%202%20-%20Getting%20Started/11%20Quiz%202%20-%20Sharding.md)
- [12 Understanding replication](Section%202%20-%20Getting%20Started/12%20Understanding%20replication.md)
- [13 Quiz 3 - Replication](Section%202%20-%20Getting%20Started/13%20Quiz%203%20-%20Replication.md)
- [14 Adding more nodes to the cluster](Section%202%20-%20Getting%20Started/14%20Adding%20more%20nodes%20to%20the%20cluster.md)
- [15 Overview of node roles](Section%202%20-%20Getting%20Started/15%20Overview%20of%20node%20roles.md)
- [16 Wrap up](Section%202%20-%20Getting%20Started/16%20Wrap%20up.md)

### Section 3 — Managing Documents

인덱스와 문서의 생성·조회·수정·삭제, 라우팅, 버전 관리, 동시성 제어와 벌크 처리를 다룬다.

- [01 Creating & deleting indices](Section%203%20-%20Managing%20Documents/01%20Creating%20%26%20deleting%20indices.md)
- [02 Indexing documents](Section%203%20-%20Managing%20Documents/02%20Indexing%20documents.md)
- [03 Retrieving documents by ID](Section%203%20-%20Managing%20Documents/03%20Retrieving%20documents%20by%20ID.md)
- [04 Updating documents](Section%203%20-%20Managing%20Documents/04%20Updating%20documents.md)
- [05 Scripted updates](Section%203%20-%20Managing%20Documents/05%20Scripted%20updates.md)
- [06 Upserts](Section%203%20-%20Managing%20Documents/06%20Upserts.md)
- [07 Replacing documents](Section%203%20-%20Managing%20Documents/07%20Replacing%20documents.md)
- [08 Deleting documents](Section%203%20-%20Managing%20Documents/08%20Deleting%20documents.md)
- [09 Understanding routing](Section%203%20-%20Managing%20Documents/09%20Understanding%20routing.md)
- [10 How Elasticsearch reads data](Section%203%20-%20Managing%20Documents/10%20How%20Elasticsearch%20reads%20data.md)
- [11 How Elasticsearch writes data](Section%203%20-%20Managing%20Documents/11%20How%20Elasticsearch%20writes%20data.md)
- [12 Understanding document versioning](Section%203%20-%20Managing%20Documents/12%20Understanding%20document%20versioning.md)
- [13 Optimistic concurrency control](Section%203%20-%20Managing%20Documents/13%20Optimistic%20concurrency%20control.md)
- [14 Update by query](Section%203%20-%20Managing%20Documents/14%20Update%20by%20query.md)
- [15 Delete by query](Section%203%20-%20Managing%20Documents/15%20Delete%20by%20query.md)
- [16 Batch processing](Section%203%20-%20Managing%20Documents/16%20Batch%20processing.md)
- [17 Importing data with cURL](Section%203%20-%20Managing%20Documents/17%20Importing%20data%20with%20cURL.md)
- [18 Wrap up](Section%203%20-%20Managing%20Documents/18%20Wrap%20up.md)

### Section 4 — Mapping & Analysis

텍스트 분석, 역색인, 매핑과 데이터 타입, 동적 매핑, 템플릿, 분석기와 형태소 처리를 다룬다.

- [01 Introduction to this section](Section%204%20-%20Mapping%20%26%20Analysis/01%20Introduction%20to%20this%20section.md)
- [02 Introduction to analysis](Section%204%20-%20Mapping%20%26%20Analysis/02%20Introduction%20to%20analysis.md)
- [03 Using the Analyze API](Section%204%20-%20Mapping%20%26%20Analysis/03%20Using%20the%20Analyze%20API.md)
- [04 Understanding inverted indices](Section%204%20-%20Mapping%20%26%20Analysis/04%20Understanding%20inverted%20indices.md)
- [05 Introduction to mapping](Section%204%20-%20Mapping%20%26%20Analysis/05%20Introduction%20to%20mapping.md)
- [06 Overview of data types](Section%204%20-%20Mapping%20%26%20Analysis/06%20Overview%20of%20data%20types.md)
- [07 How the "keyword" data type works](Section%204%20-%20Mapping%20%26%20Analysis/07%20How%20the%20'keyword'%20data%20type%20works.md)
- [08 Understanding type coercion](Section%204%20-%20Mapping%20%26%20Analysis/08%20Understanding%20type%20coercion.md)
- [09 Understanding arrays](Section%204%20-%20Mapping%20%26%20Analysis/09%20Understanding%20arrays.md)
- [10 Adding explicit mappings](Section%204%20-%20Mapping%20%26%20Analysis/10%20Adding%20explicit%20mappings.md)
- [11 Retrieving mappings](Section%204%20-%20Mapping%20%26%20Analysis/11%20Retrieving%20mappings.md)
- [12 Using dot notation in field names](Section%204%20-%20Mapping%20%26%20Analysis/12%20Using%20dot%20notation%20in%20field%20names.md)
- [13 Adding mappings to existing indices](Section%204%20-%20Mapping%20%26%20Analysis/13%20Adding%20mappings%20to%20existing%20indices.md)
- [14 How dates work in Elasticsearch](Section%204%20-%20Mapping%20%26%20Analysis/14%20How%20dates%20work%20in%20Elasticsearch.md)
- [15 How missing fields are handled](Section%204%20-%20Mapping%20%26%20Analysis/15%20How%20missing%20fields%20are%20handled.md)
- [16 Overview of mapping parameters](Section%204%20-%20Mapping%20%26%20Analysis/16%20Overview%20of%20mapping%20parameters.md)
- [17 Updating existing mappings](Section%204%20-%20Mapping%20%26%20Analysis/17%20Updating%20existing%20mappings.md)
- [18 Reindexing documents with the Reindex API](Section%204%20-%20Mapping%20%26%20Analysis/18%20Reindexing%20documents%20with%20the%20Reindex%20API.md)
- [19 Defining field aliases](Section%204%20-%20Mapping%20%26%20Analysis/19%20Defining%20field%20aliases.md)
- [20 Multi-field mappings](Section%204%20-%20Mapping%20%26%20Analysis/20%20Multi-field%20mappings.md)
- [21 Index templates](Section%204%20-%20Mapping%20%26%20Analysis/21%20Index%20templates.md)
- [22 Introduction to dynamic mapping](Section%204%20-%20Mapping%20%26%20Analysis/22%20Introduction%20to%20dynamic%20mapping.md)
- [23 Combining explicit and dynamic mapping](Section%204%20-%20Mapping%20%26%20Analysis/23%20Combining%20explicit%20and%20dynamic%20mapping.md)
- [24 Configuring dynamic mapping](Section%204%20-%20Mapping%20%26%20Analysis/24%20Configuring%20dynamic%20mapping.md)
- [25 Dynamic templates](Section%204%20-%20Mapping%20%26%20Analysis/25%20Dynamic%20templates.md)
- [26 Mapping recommendations](Section%204%20-%20Mapping%20%26%20Analysis/26%20Mapping%20recommendations.md)
- [27 Stemming & stop words](Section%204%20-%20Mapping%20%26%20Analysis/27%20Stemming%20%26%20stop%20words.md)
- [28 Analyzers and search queries](Section%204%20-%20Mapping%20%26%20Analysis/28%20Analyzers%20and%20search%20queries.md)
- [29 Built-in analyzers](Section%204%20-%20Mapping%20%26%20Analysis/29%20Built-in%20analyzers.md)
- [30 Creating custom analyzers](Section%204%20-%20Mapping%20%26%20Analysis/30%20Creating%20custom%20analyzers.md)
- [31 Adding analyzers to existing indices](Section%204%20-%20Mapping%20%26%20Analysis/31%20Adding%20analyzers%20to%20existing%20indices.md)
- [32 Updating analyzers](Section%204%20-%20Mapping%20%26%20Analysis/32%20Updating%20analyzers.md)
- [33 Wrap up](Section%204%20-%20Mapping%20%26%20Analysis/33%20Wrap%20up.md)

### Section 5 — Searching for Data

term-level 및 full-text 쿼리, 관련성 점수, 불리언 조합, 중첩 객체 검색을 다룬다.

- [01 Introduction to searching](Section%205%20-%20Searching%20for%20Data/01%20Introduction%20to%20searching.md)
- [02 Introduction to term level queries](Section%205%20-%20Searching%20for%20Data/02%20Introduction%20to%20term%20level%20queries.md)
- [03 Searching for terms](Section%205%20-%20Searching%20for%20Data/03%20Searching%20for%20terms.md)
- [04 Retrieving documents by IDs](Section%205%20-%20Searching%20for%20Data/04%20Retrieving%20documents%20by%20IDs.md)
- [05 Range searches](Section%205%20-%20Searching%20for%20Data/05%20Range%20searches.md)
- [06 Prefixes, wildcards & regular expressions](Section%205%20-%20Searching%20for%20Data/06%20Prefixes%2C%20wildcards%20%26%20regular%20expressions.md)
- [07 Querying by field existence](Section%205%20-%20Searching%20for%20Data/07%20Querying%20by%20field%20existence.md)
- [08 Quiz 4 - Term level queries](Section%205%20-%20Searching%20for%20Data/08%20Quiz%204%20-%20Term%20level%20queries.md)
- [09 Introduction to full text queries](Section%205%20-%20Searching%20for%20Data/09%20Introduction%20to%20full%20text%20queries.md)
- [10 The match query](Section%205%20-%20Searching%20for%20Data/10%20The%20match%20query.md)
- [11 Introduction to relevance scoring](Section%205%20-%20Searching%20for%20Data/11%20Introduction%20to%20relevance%20scoring.md)
- [12 Searching multiple fields](Section%205%20-%20Searching%20for%20Data/12%20Searching%20multiple%20fields.md)
- [13 Phrase searches](Section%205%20-%20Searching%20for%20Data/13%20Phrase%20searches.md)
- [14 Quiz 5 - Full text queries](Section%205%20-%20Searching%20for%20Data/14%20Quiz%205%20-%20Full%20text%20queries.md)
- [15 Leaf and compound queries](Section%205%20-%20Searching%20for%20Data/15%20Leaf%20and%20compound%20queries.md)
- [16 Querying with boolean logic](Section%205%20-%20Searching%20for%20Data/16%20Querying%20with%20boolean%20logic.md)
- [17 Query execution contexts](Section%205%20-%20Searching%20for%20Data/17%20Query%20execution%20contexts.md)
- [18 Boosting query](Section%205%20-%20Searching%20for%20Data/18%20Boosting%20query.md)
- **19 Disjunction max (dis_max)**.md)
- [20 Querying nested objects](Section%205%20-%20Searching%20for%20Data/20%20Querying%20nested%20objects.md)
- [21 Nested inner hits](Section%205%20-%20Searching%20for%20Data/21%20Nested%20inner%20hits.md)
- [22 Nested fields limitations](Section%205%20-%20Searching%20for%20Data/22%20Nested%20fields%20limitations.md)
- [23 Quiz 6 - Compound & nested queries](Section%205%20-%20Searching%20for%20Data/23%20Quiz%206%20-%20Compound%20%26%20nested%20queries.md)

### Section 6 — Joining Queries

부모-자식 관계 매핑과 조회, 다단계 관계, inner hits, terms lookup과 조인 성능 제약을 다룬다.

- [01 Introduction to this section](Section%206%20-%20Joining%20Queries/01%20Introduction%20to%20this%20section.md)
- [02 Add departments test data](Section%206%20-%20Joining%20Queries/02%20Add%20departments%20test%20data.md)
- [03 Mapping document relationships](Section%206%20-%20Joining%20Queries/03%20Mapping%20document%20relationships.md)
- [04 Adding documents](Section%206%20-%20Joining%20Queries/04%20Adding%20documents.md)
- [05 Querying by parent ID](Section%206%20-%20Joining%20Queries/05%20Querying%20by%20parent%20ID.md)
- [06 Querying child documents by parent](Section%206%20-%20Joining%20Queries/06%20Querying%20child%20documents%20by%20parent.md)
- [07 Querying parent by child documents](Section%206%20-%20Joining%20Queries/07%20Querying%20parent%20by%20child%20documents.md)
- [08 Multi-level relations](Section%206%20-%20Joining%20Queries/08%20Multi-level%20relations.md)
- [09 Parent - child inner hits](Section%206%20-%20Joining%20Queries/09%20Parent%20-%20child%20inner%20hits.md)
- [10 Terms lookup mechanism](Section%206%20-%20Joining%20Queries/10%20Terms%20lookup%20mechanism.md)
- [11 Join limitations](Section%206%20-%20Joining%20Queries/11%20Join%20limitations.md)
- [12 Join field performance considerations](Section%206%20-%20Joining%20Queries/12%20Join%20field%20performance%20considerations.md)

### Section 7 — Controlling Query Results

응답 형식, source filtering, 결과 크기·오프셋·페이지네이션·정렬을 다룬다.

- [01 A word on document types](Section%207%20-%20Controlling%20Query%20Results/01%20A%20word%20on%20document%20types.md)
- [02 Specifying the result format](Section%207%20-%20Controlling%20Query%20Results/02%20Specifying%20the%20result%20format.md)
- [03 Source filtering](Section%207%20-%20Controlling%20Query%20Results/03%20Source%20filtering.md)
- [04 Specifying the result size](Section%207%20-%20Controlling%20Query%20Results/04%20Specifying%20the%20result%20size.md)
- [05 Specifying an offset](Section%207%20-%20Controlling%20Query%20Results/05%20Specifying%20an%20offset.md)
- [06 Pagination](Section%207%20-%20Controlling%20Query%20Results/06%20Pagination.md)
- [07 Sorting results](Section%207%20-%20Controlling%20Query%20Results/07%20Sorting%20results.md)
- [08 Sorting by multi-value fields](Section%207%20-%20Controlling%20Query%20Results/08%20Sorting%20by%20multi-value%20fields.md)

### Section 8 — Aggregations

metric·bucket·nested·range·histogram·global aggregation과 근사 문서 수를 다룬다.

- [01 Introduction to aggregations](Section%208%20-%20Aggregations/01%20Introduction%20to%20aggregations.md)
- [02 Metric aggregations](Section%208%20-%20Aggregations/02%20Metric%20aggregations.md)
- [03 Introduction to bucket aggregations](Section%208%20-%20Aggregations/03%20Introduction%20to%20bucket%20aggregations.md)
- [04 Document counts are approximate](Section%208%20-%20Aggregations/04%20Document%20counts%20are%20approximate.md)
- [05 Nested aggregations](Section%208%20-%20Aggregations/05%20Nested%20aggregations.md)
- [06 Filtering out documents](Section%208%20-%20Aggregations/06%20Filtering%20out%20documents.md)
- [07 Defining bucket rules with filters](Section%208%20-%20Aggregations/07%20Defining%20bucket%20rules%20with%20filters.md)
- [08 Range aggregations](Section%208%20-%20Aggregations/08%20Range%20aggregations.md)
- [09 Histograms](Section%208%20-%20Aggregations/09%20Histograms.md)
- [10 Global aggregation](Section%208%20-%20Aggregations/10%20Global%20aggregation.md)
- [11 Missing field values](Section%208%20-%20Aggregations/11%20Missing%20field%20values.md)
- [12 Aggregating nested objects](Section%208%20-%20Aggregations/12%20Aggregating%20nested%20objects.md)

### Section 9 — Improving Search Results

근접 검색, 관련성 조정, 오타 허용, 동의어, 하이라이트와 stemming으로 검색 품질을 개선한다.

- [01 Introduction to this section](Section%209%20-%20Improving%20Search%20Results/01%20Introduction%20to%20this%20section.md)
- [02 Proximity searches](Section%209%20-%20Improving%20Search%20Results/02%20Proximity%20searches.md)
- [03 Affecting relevance scoring with proximity](Section%209%20-%20Improving%20Search%20Results/03%20Affecting%20relevance%20scoring%20with%20proximity.md)
- **04 Fuzzy match query (handling typos)**.md)
- [05 Fuzzy query](Section%209%20-%20Improving%20Search%20Results/05%20Fuzzy%20query.md)
- [06 Adding synonyms](Section%209%20-%20Improving%20Search%20Results/06%20Adding%20synonyms.md)
- [07 Adding synonyms from file](Section%209%20-%20Improving%20Search%20Results/07%20Adding%20synonyms%20from%20file.md)
- [08 Highlighting matches in fields](Section%209%20-%20Improving%20Search%20Results/08%20Highlighting%20matches%20in%20fields.md)
- [09 Stemming](Section%209%20-%20Improving%20Search%20Results/09%20Stemming.md)

### Section 10 — Conclusion

강사의 다른 강좌 할인 정보를 제공하는 보너스 자료다.

- [01 Bonus Lecture - Discounts to my other courses](Section%2010%20-%20Conclusion/01%20Bonus%20Lecture%20-%20Discounts%20to%20my%20other%20courses.md)

## 정리 상태

- 전체 138개 커리큘럼 항목을 섹션별 파일로 만들고 원본 링크를 연결했다.
- 영상 128개는 실제 대본을 바탕으로 개요·내용·예시·요약을 작성했다.
- 영상 `100. Terms lookup mechanism`은 2026-09-06 Chrome 확장에서 대본을 다시 확인해 상세 노트를 보완했다.
- 읽기 자료와 퀴즈는 실제 커리큘럼 순서에 포함했으며, 퀴즈 답안은 작성하지 않았다.

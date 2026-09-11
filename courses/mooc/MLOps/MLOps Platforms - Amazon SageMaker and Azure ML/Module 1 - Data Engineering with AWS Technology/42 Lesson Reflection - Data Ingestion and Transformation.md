# Lesson Reflection — Identifying and Implementing Data Ingestion and Transformation Solutions

## 개요
- Lesson 4 전체를 요약하는 공식 회고 자료: AWS Batch(배치), Step Functions(서버리스 조율), Glue ETL(변환), EMR/Spark(빅데이터 처리)로 데이터 워크플로를 오케스트레이션하는 방법을 다뤘다.

## 내용

### 핵심 포인트
- **AWS Batch**는 배치 컴퓨트 환경을 관리한다.
- **Step Functions**는 Lambda 워크플로를 조율한다.
- **AWS Glue**는 관리형 ETL 기능을 제공한다.
- **EMR**은 Hadoop과 Spark로 분산 처리를 다룬다.
- **Kinesis**는 스트리밍 데이터를 수집·분석한다.

### 회고 질문
1. 실시간 처리와 배치 처리 요구사항 중 어떤 서비스가 가장 적합한가?
2. Step Functions는 데이터 파이프라인 구축을 어떻게 단순화하는가?
3. 자신의 데이터에 분석을 최적화하려면 어떤 ETL 프로세스가 필요한가?
4. 자신의 사용 사례에 Hadoop이나 Spark 같은 빅데이터 플랫폼이 정당화되는가?
5. 이런 오케스트레이션된 시스템을 어떻게 테스트하고 업데이트할 것인가?

### 도전 과제
1. 배치 처리 작업을 컨테이너화해보기.
2. Step Function 워크플로에 에러 처리 추가해보기.
3. 샘플 데이터셋에 Glue 크롤러 실행해보기.
4. Kinesis Analytics로 스트리밍 데이터 분석해보기.
5. PySpark ETL 코드를 개발해 EMR에서 실행해보기.

## 요약
- Lesson 4는 Batch(배치) → Step Functions(오케스트레이션, Marco Polo 실습) → Glue(ETL) → EMR/Spark(분산 처리) → Kinesis(스트리밍)까지 데이터 수집·변환 파이프라인의 전체 스펙트럼을 다뤘으며, 이것으로 Module 1(Data Engineering with AWS Technology)이 마무리된다.

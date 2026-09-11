# Key Terms — Identifying and Implementing Data Ingestion and Transformation Solutions

## 개요
- Lesson 4 핵심 용어 정리. 데이터 수집·변환 파이프라인을 구성하는 AWS 서비스들(Batch, Lambda, Step Functions, Glue, EMR, Kinesis)을 다룬다.

## 내용

| 용어 | 설명 |
|---|---|
| **AWS Batch** | 데이터 수집 파이프라인을 위한 관리형 배치 처리 서비스. |
| **AWS Lambda** | 서버를 관리하지 않고 코드를 실행하는 서버리스 컴퓨트. |
| **AWS Step Functions** | 데이터 워크플로의 여러 구성 요소를 조율(coordinate)하는 서비스. |
| **AWS Glue** | S3 데이터를 변환하고 카탈로그화하는 서버리스 ETL 도구. |
| **Amazon EMR** | Spark, Hadoop 같은 프레임워크를 호스팅해 분산 데이터 처리를 수행. |
| **Amazon Kinesis** | 스트리밍 데이터를 수집·처리·분석하는 플랫폼. |

## 예시
```python
import json

def lambda_handler(event, context):
    # Check if name is Marco
    if event['name'] == 'Marco':
        return {'name': 'Polo'}

    return {'name': 'No'}
```

## 요약
- 이번 레슨은 배치(Batch) 처리, 서버리스 함수(Lambda), 워크플로 조율(Step Functions), ETL(Glue), 분산 처리(EMR), 스트리밍(Kinesis)까지 데이터 수집·변환 파이프라인을 구성하는 AWS 서비스 전반을 다룬다. Lambda 예시 코드는 뒤이어 나올 "Marco Polo" 파이프라인 실습의 기초가 된다.

# Key Terms — Creating Data Repositories for Machine Learning

## 개요
- Lesson 3("Creating Data Repositories for Machine Learning") 핵심 용어 정리. AWS의 주요 스토리지 서비스(S3, EFS, EBS, Storage Gateway, DataSync)를 다룬다.

## 내용

| 용어 | 설명 |
|---|---|
| **Amazon S3** | 머신러닝 데이터를 저장하기 위한 확장 가능한 객체 스토리지 서비스. |
| **Amazon EFS** | 디스크 I/O를 점진적으로 확장할 수 있는 관리형 NFS 파일 시스템. |
| **Amazon EBS** | 커스텀 디스크 I/O 성능을 설정할 수 있는 블록 스토리지 볼륨. |
| **AWS Storage Gateway** | 온프레미스 데이터를 S3와 통합하는 온프레미스 장치. |
| **AWS DataSync** | 온프레미스 시스템과 S3 사이에 데이터를 이동시키는 서비스. |

## 예시
```python
import boto3

# Create S3 client
s3 = boto3.client('s3')

# List S3 buckets
response = s3.list_buckets()
print(response['Buckets'])
```

```bash
# Sync local data directory to S3
aws s3 sync data s3://ml-data

# Copy S3 object locally
aws s3 cp s3://ml-data/data.csv .
```

```python
import boto3

# Create EFS client
efs = boto3.client('efs')
```

## 요약
- 이번 레슨은 객체 스토리지(S3), 관리형 NFS 파일 시스템(EFS), 블록 스토리지(EBS), 그리고 온프레미스 연동 서비스(Storage Gateway, DataSync)까지 머신러닝 데이터 저장을 위한 AWS 스토리지 옵션 전반을 다룬다.

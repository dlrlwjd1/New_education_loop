# Key Terms — Deploying and Operationalizing Secure Machine Learning Solutions

## 개요
- Lesson 3 핵심 용어 정리. AWS Lambda, SageMaker, 데이터 드리프트 탐지, 최소 권한 원칙(Principle of Least Privilege)을 다룬다.

## 내용

| 용어 | 설명 |
|---|---|
| **AWS Lambda** | HTTP 요청이나 파일 업로드 같은 이벤트에 반응해 코드를 실행하는 서버리스 컴퓨트 서비스. |
| **Amazon SageMaker** | 모델을 구축·학습·튜닝·배포·관리하는 완전관리형 머신러닝 서비스. |
| **Principle of Least Privilege(최소 권한 원칙)** | 보안을 개선하기 위해, ID(identity)의 접근 권한을 업무 수행에 필요한 최소한으로만 제한하는 것. |

## 예시
```python
from sklearn.metrics import accuracy_score

# Detect data drift
prod_accuracy = accuracy_score(y_true, y_pred)
if prod_accuracy < threshold:
    print('Data drift detected. Retrain model.')
```

```python
import boto3

# Allow S3 access only
policy = {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "s3:*",
            "Resource": "*"
        }
    ]
}

iam.put_role_policy(RoleName='app-role', PolicyName='s3', PolicyDocument=json.dumps(policy))
```

## 요약
- 이번 레슨은 서버리스 컴퓨트(Lambda)와 완전관리형 ML 서비스(SageMaker)를 안전하게 운영화하는 방법을 다루며, 프로덕션 정확도 저하로 데이터 드리프트를 탐지하는 방법과, IAM 정책으로 최소 권한 원칙을 적용하는 방법을 핵심으로 삼는다.

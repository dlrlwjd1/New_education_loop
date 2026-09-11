# Practical Scenario — Least Privilege for a Lambda Function

## 개요
- 최소 권한 원칙(Principle of Least Privilege)을 적용해보는 5분짜리 AI 생성 인터랙티브 성찰 활동.

## 내용

### 시나리오
- S3 버킷에 업로드된 이미지를 처리한 뒤, 그 이미지에 대한 메타데이터를 DynamoDB 테이블에 저장하는 AWS Lambda 함수를 설계 중.
- 질문: 최소 권한 원칙을 준수하려면 이 Lambda 함수에 어떤 구체적인 AWS 권한을 부여할 것이며, 왜 그 권한들로만 제한하겠는가?

### 종합 답변 (강의 개념 기반)
- **S3 권한**: 이미지를 "처리(process)"한다고 했으므로 최소한 `s3:GetObject`(이미지를 읽기 위해)가 필요. 만약 처리 결과(예: 썸네일, 리사이즈된 이미지)를 다시 S3에 저장해야 한다면 `s3:PutObject`도 추가. 버킷 전체를 나열(`s3:ListBucket`)하거나 삭제(`s3:DeleteObject`)할 권한은 이 작업에 필요하지 않으므로 부여하지 않는다.
- **DynamoDB 권한**: 메타데이터를 저장한다고 했으므로 `dynamodb:PutItem`(새 항목 추가) 정도면 충분. 만약 기존 메타데이터를 갱신해야 한다면 `dynamodb:UpdateItem`도 고려. 테이블을 삭제(`dynamodb:DeleteTable`)하거나 다른 테이블에 접근할 권한은 불필요.
- **자원 범위 제한**: `Resource` 필드를 와일드카드(`*`)가 아니라 **특정 S3 버킷 ARN**과 **특정 DynamoDB 테이블 ARN**으로 명시적으로 제한해, 이 Lambda가 다른 버킷이나 테이블에 실수로(혹은 침해당했을 때) 접근하지 못하도록 한다.
- **이유**: "Principle of Least Privilege AWS Lambda" 영상에서 설명한 대로, 이렇게 정확히 필요한 권한만 부여하면 이 마이크로서비스가 할 수 있는 일의 범위(공격 벡터)가 제한되어, 함수 코드에 취약점이 있거나 자격 증명이 유출되더라도 피해 범위가 최소화된다.

## 요약
- 이 Lambda 함수에는 특정 S3 버킷에 대한 `GetObject`(+필요시 `PutObject`)와 특정 DynamoDB 테이블에 대한 `PutItem`(+필요시 `UpdateItem`)만 부여하고, 리소스 ARN을 명시적으로 제한하는 것이 최소 권한 원칙에 부합하는 설계다.

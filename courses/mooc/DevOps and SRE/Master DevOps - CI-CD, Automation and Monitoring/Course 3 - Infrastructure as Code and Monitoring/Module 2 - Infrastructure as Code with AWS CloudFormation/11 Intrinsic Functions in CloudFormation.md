# Intrinsic Functions in CloudFormation

## 개요
- CloudFormation의 내장 함수(Intrinsic Functions) 목록과, 그중 자주 쓰이는 `Ref`·`Fn::GetAtt`·`Fn::Join`·`Fn::Sub`의 문법과 용도를 정리.

## 내용
### Intrinsic Functions란
- 템플릿 내에서 값을 동적으로 관리·할당할 수 있게 해주는 내장 함수 — 리소스·파라미터 참조, 문자열 연산, 조건 로직, 스택 간 값 가져오기(import), 데이터 인코딩 등에 사용.
- 템플릿의 특정 섹션(Resource Properties, Outputs, Metadata attributes, Update Policy attributes, Conditions)에서만 유효.

### 주요 Intrinsic Functions 개요
- **Fn::Base64** — 문자열 인코딩.
- **Fn::Cidr** — CIDR 범위 계산.
- **Condition Functions**(`Fn::If`, `Fn::Equals` 등) — 조건 로직.
- **Fn::FindInMap** — Mappings 섹션에서 값 반환.
- **Fn::GetAtt** — 리소스의 속성 값 조회.
- **Fn::GetAZs** — 가용 영역(Availability Zone) 목록 조회.
- **Fn::ImportValue** — 다른 스택의 Output 값을 가져옴.
- **Fn::Join** — 구분자(delimiter)로 값 목록을 하나의 문자열로 결합.
- **Fn::Select** — 목록에서 특정 항목 선택.
- **Fn::Split** — 문자열을 목록으로 분리.
- **Fn::Sub** — 변수를 문자열로 치환(substitution).
- **Fn::Transform** — `AWS::Include`, SAM 템플릿 등 매크로 적용.
- **Ref** — 파라미터나 리소스의 값을 반환.

### Ref 함수
- 파라미터, 리소스, 혹은 다른 Intrinsic Function의 값을 반환 — 템플릿 내 리소스 간 참조를 만들 때 주로 사용.
- 문법: `Fn::Ref: LogicalName` (YAML 축약형: `!Ref LogicalName`).

### Fn::GetAtt 함수
- 템플릿 내 리소스의 속성(attribute) 값을 반환 — ARN, Endpoint, IP 주소, DNS 이름 등을 가져올 때 사용.
- JSON: `{"Fn::GetAtt": ["LogicalName", "AttributeName"]}` (예: EC2 인스턴스의 Type 속성).
- YAML 축약형: `!GetAtt MyS3Bucket.DomainName`처럼 리소스의 임의의 속성을 조회 가능.

### Fn::Join 함수
- 여러 문자열 값을 지정한 구분자로 하나의 문자열로 연결.
- 예: S3 버킷 도메인(`mybucket.s3.amazonaws.com`)에 `https://`를 붙여 하나의 URL 문자열로 만들 때 구분자와 값 목록을 지정.

### Fn::Sub 함수
- 문자열 내 변수를 실제 값으로 치환(substitution).
- 문법: `Fn::Sub: [String, {VariableName: Value}]` (YAML 축약형 `!Sub`).
- 예: ARN을 동적으로 생성 — `arn:aws:s3:::${mybucket}`에서 `mybucket`을 실제 버킷 이름(`Ref`로 참조한 `mydemobucket`)으로 치환하면 `arn:aws:s3:::mydemobucket`이 됨. Outputs 섹션에서 버킷 이름을 직접 쓰는 대신 이런 치환식으로 ARN을 동적으로 표현할 수 있음.

## 요약
- CloudFormation의 Intrinsic Functions는 Ref(파라미터·리소스 참조), GetAtt(리소스 속성 조회), Join(문자열 결합), Sub(변수 치환) 등으로 템플릿 안에서 값을 동적으로 계산·조합할 수 있게 해주며, Resource Properties·Outputs·Conditions 등 정해진 섹션에서만 사용할 수 있다.

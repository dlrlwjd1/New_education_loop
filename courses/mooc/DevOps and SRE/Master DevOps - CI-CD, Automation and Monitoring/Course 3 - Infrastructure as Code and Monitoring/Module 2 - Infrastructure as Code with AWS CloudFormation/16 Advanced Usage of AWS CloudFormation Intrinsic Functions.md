# Advanced Usage of AWS CloudFormation Intrinsic Functions

## 개요
- 앞서 다룬 `Ref`·`Fn::GetAtt` 외에 문자열 조작, 조건, 매핑/선택, `AWS::LanguageExtensions` 기반 고급 함수까지 정리한 리딩.

## 내용
### 1. 문자열 조작 함수
- **Fn::Sub** — 문자열 내 변수를 치환. 예: `${AWS::Region}`(의사 파라미터)과 `${Environment}`(사용자 정의 파라미터)를 조합해 리소스 이름이나 설정 값을 리전·환경에 따라 동적으로 생성.
- **Fn::Join** — 값 목록을 지정한 구분자로 하나의 문자열로 연결. 예: S3 정적 웹사이트의 URL을 여러 조각(프로토콜, 버킷 이름, 도메인 등)을 이어 붙여 구성.

### 2. 조건 함수
- **Fn::If** — 조건이 참/거짓인지에 따라 값을 다르게 반환. 예: 환경에 따라 인스턴스 타입을 다르게 설정.
- **Fn::Equals / Fn::And / Fn::Or / Fn::Not** — 논리 비교·연산을 수행하며 주로 `Conditions` 섹션 안에서 사용. 예: 두 하위 조건이 모두 참일 때만 참이 되는 조건을 `Fn::And`로 정의.

### 3. 매핑·선택 함수
- **Fn::FindInMap** — 템플릿에 선언된 Mappings에서 값을 조회(예: 리전에 맞는 AMI 선택).
- **Fn::Select** — 목록(list)에서 인덱스로 특정 항목 하나를 선택. 예: 현재 리전의 가용 영역(Availability Zone) 목록에서 첫 번째 AZ를 선택.

### 4. AWS::LanguageExtensions 기반 고급 함수
- AWS는 템플릿에 **`AWS::LanguageExtensions` transform을 활성화**해야 사용할 수 있는 추가 Intrinsic Function을 제공.
- **Fn::ForEach** — 목록을 순회하며 여러 리소스나 속성을 생성. 예: 제공된 Subnet ID 목록마다 각각의 Route Table을 생성.
- **Fn::Length** — 목록의 요소 개수를 반환. 예: Queue 목록의 항목 수에 따라 지연 시간(delay seconds)을 설정.

### 5. 베스트 프랙티스
- **의사 파라미터(Pseudo Parameter) 활용** — `AWS::Region`, `AWS::AccountId` 등을 활용해 템플릿의 이식성(portability)을 높임.
- **함수 조합** — Intrinsic Function들을 조합해 더 동적이고 유연한 템플릿을 만듦.
- **템플릿 검증** — `cfn-lint` 같은 도구로 템플릿을 항상 검증해 오류를 조기에 발견.
- **템플릿 모듈화** — 큰 템플릿을 Nested Stack으로 분리해 관리 용이성을 높임.

## 요약
- CloudFormation의 고급 Intrinsic Function은 문자열 조작(Sub, Join), 조건·논리 연산(If, Equals, And, Or, Not), 매핑·선택(FindInMap, Select), 그리고 `AWS::LanguageExtensions` transform이 필요한 ForEach·Length로 나뉘며, 의사 파라미터 활용·함수 조합·cfn-lint 검증·Nested Stack을 통한 모듈화가 베스트 프랙티스로 권장된다.

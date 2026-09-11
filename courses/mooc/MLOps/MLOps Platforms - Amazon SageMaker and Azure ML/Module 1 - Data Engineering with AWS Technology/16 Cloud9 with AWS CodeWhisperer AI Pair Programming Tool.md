# Cloud9 with AWS CodeWhisperer AI Pair Programming Tool

## 개요
- **AWS Cloud9** IDE 환경을 만들고, 내장 AWS 툴킷과 **CodeWhisperer**(AI 페어 프로그래밍 도구)를 활용해 S3 버킷을 나열하는 함수를 작성해보는 9분 데모.

## 내용

### Cloud9 환경 생성
- 공식 문서(AWS Cloud9)에서 환경 구성법과 AWS 툴킷 접근법을 확인 가능.
- 리전 선택(예: North Virginia) → 새 환경 생성 → 이름·설명 지정.
- 인스턴스 크기는 문제에 맞게 선택 — 기본값(Amazon Linux 2)도 가능하지만, 이 데모에서는 16GB RAM·4 vCPU의 조금 더 큰 인스턴스를 선택.
- 생성 후 빠르게 로드되며 웰컴 화면, 페어 프로그래밍을 위한 공유 기능, 설정(gear) 탭, 코드 디버깅 아이콘, 코드 폴딩 등 파일 메뉴 기능들을 제공.

### 터미널 활용
- 모든 AWS CLI 도구가 이미 설치되어 있음. 예: `aws s3 ls --help`로 도움말 확인, `aws s3 ls | wc -l`로 버킷 개수 세기.
- 파일을 업로드해 S3와 동기화하거나 `aws s3 cp`로 버킷에 복사하는 등, 커맨드라인에서 모든 리소스를 자유롭게 다룰 수 있는 허브 역할.
- 터미널 외에도 파일 시스템, 소스 컨트롤, **AWS 툴킷** 탭에 접근 가능.

### AWS 툴킷 — 깊은 통합
- 툴킷을 통해 컨테이너 레지스트리, IoT, Lambda 등 다양한 서비스에 직접 접근·상호작용 가능.
- 예: Lambda 함수에 우클릭으로 **invoke**(페이로드 전송) 하거나 로컬로 다운로드해 실행해볼 수 있음.
- Cloud Development Kit(CDK)도 내장되어 있으며, 코드 완성 기능인 **CodeWhisperer**도 통합되어 있음.

### CodeWhisperer로 AI 페어 프로그래밍 실습
1. 가상환경 설정: `python3 -m venv venv` → 활성화 → `pip install boto3` → 포맷팅 도구 `pip install black`(AI 페어 프로그래머와 작업할 때 포맷팅 도구가 매우 유용하다고 강조).
2. `s3.py` 파일 생성 → 주석으로 의도(prompt)를 명시: `# create a function that lists AWS s3 buckets` → CodeWhisperer가 `import boto3`, `def list_buckets():` 등을 제안.
3. 제안된 코드가 완벽하지 않을 수 있어(`boto3.resource('s3')`가 `list_buckets` 속성이 없다는 오류 발생) 직접 `boto3.client('s3')`로 수정해야 정상 동작.
4. `black`으로 코드 포맷팅을 반복 적용하며 정리.

### 핵심 통찰
- AI 코드 페어 프로그래머는 사람과 마찬가지로 완벽하지 않지만, 잘하는 부분을 활용하고 외부 도구(포맷터 등)를 함께 사용하면 좋은 피드백 루프를 얻을 수 있음.
- CodeWhisperer는 당시 프리뷰(preview) 단계였으며, AWS 워크플로에 깊이 통합된 형태로 점점 발전할 것으로 예상됨.

## 예시
```bash
# 가상환경 설정
python3 -m venv venv
source venv/bin/activate
pip install boto3
pip install black
```

```python
# s3.py — CodeWhisperer 제안을 수정한 최종 형태
import boto3

def list_buckets():
    s3 = boto3.client("s3")
    response = s3.list_buckets()
    for bucket in response["Buckets"]:
        print(bucket["Name"])

list_buckets()
```

```bash
# 코드 포맷팅 및 실행
black s3.py
python s3.py
```

## 요약
- AWS Cloud9은 터미널·AWS 툴킷·CodeWhisperer가 하나로 통합된 브라우저 기반 IDE로, S3 버킷 나열 같은 간단한 스크립트도 AI 제안을 받아 작성한 뒤 직접 검증·수정(`resource` → `client`)하는 과정을 통해 실제 동작하는 코드로 다듬는 흐름을 보여준다.

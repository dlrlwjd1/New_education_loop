# AWS AI ML Services

## 개요
- **AWS Comprehend**(NLP)와 **Amazon Rekognition**(이미지 분석)을 콘솔과 boto3 SDK 양쪽에서 직접 사용해보는 4분 데모.

## 내용

### AWS Comprehend — 콘솔에서
- AWS Services → Machine Learning에서 다양한 서비스를 확인 가능.
- Comprehend 콘솔에서 "This is a great day"라는 텍스트를 입력해 내장 분석(built-in analysis) 실행 → 핵심 구문(key phrase), 언어 감지, 개인식별정보(PII) 여부, 감성 신뢰도(confidence)까지 확인 — 이 예시는 강한 긍정(strongly positive)으로 판별됨.
- CloudShell을 열어 SDK로도 동일한 작업을 수행할 수 있음.

### Amazon Rekognition — 콘솔에서
- 레이블 탐지(label detection), 얼굴 분석(facial analysis), 이미지 속 텍스트 탐지 등을 콘솔에 이미지를 드래그하는 것만으로 시도 가능.
- 예: 데스크탑의 고양이 사진을 드롭 → "cat"으로 성공적으로 식별하고 추가 레이블도 함께 제공.

### boto3로 프로그래밍 방식 호출
- **Comprehend**: 클라이언트 생성은 한 줄로 충분 — `boto3.client('comprehend')` → `detect_sentiment()` 호출로 감성 분석 수행.
- CloudShell에서 `ipython` 실행 → `import boto3` → `comprehend = boto3.client('comprehend')` → `comprehend.detect_sentiment(Text="It is a great day", LanguageCode="en")` → 응답에서 긍정 감성 확인.

### 핵심 통찰
- 콘솔에서 직접 해보는 것과 CloudShell 환경에서 SDK로 해보는 것 모두, AWS 머신러닝 서비스를 활용하는 좋은 방법.

## 예시
```python
import boto3

comprehend = boto3.client('comprehend')

text = "It is a great day"

response = comprehend.detect_sentiment(
    Text=text,
    LanguageCode='en'
)

print(response)
```

## 요약
- AWS Comprehend(NLP)와 Amazon Rekognition(이미지 분석)은 콘솔에서 텍스트/이미지를 직접 넣어보거나, CloudShell + boto3로 `detect_sentiment()` 같은 API를 한두 줄의 코드로 호출해 손쉽게 사용할 수 있는 완전관리형 AI 서비스다.

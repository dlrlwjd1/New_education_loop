# Key Terms — Getting Started with AWS Machine Learning Technology

## 개요
- Lesson 2("Getting Started with AWS Machine Learning Technology") 핵심 용어 정리. AWS의 브라우저 기반 개발 도구(CloudShell, Cloud9)와 NLP 서비스(Comprehend) 등을 다룬다.

## 내용

| 용어 | 설명 |
|---|---|
| **AWS CloudShell** | 자격 증명 없이 AWS 리소스와 도구에 접근할 수 있는 브라우저 기반 셸. 1GB 저장 공간 제공. |
| **AWS Cloud9** | AWS 툴킷이 내장된 브라우저 기반 통합 개발 환경(IDE). |
| **AWS Comprehend** | 감성 분석(sentiment analysis), 개체명 인식(entity recognition), 토픽 모델링 등을 포함하는 자연어 처리(NLP) 머신러닝 서비스. |
| **Amazon CodeCatalyst** | AWS 설명에 따르면 "개발팀이 AWS에서 애플리케이션을 빠르게 구축·배포·확장할 수 있도록 돕는 통합 소프트웨어 개발 서비스". |
| **Bash Pipelines** | 파이프(`\|`)를 사용해 여러 Bash 명령어를 연결해 데이터를 처리하는 것. |
| **Lynx** | 사이트의 텍스트를 터미널에 출력할 수 있는 커맨드라인 웹 브라우저 — 텍스트 스크래핑에 유용. |

## 예시
```python
import boto3

# Create Comprehend client
comprehend = boto3.client('comprehend')

text = "I love building AI apps on AWS"

# Call Comprehend API
sentiment = comprehend.detect_sentiment(Text=text, LanguageCode='en')

# Print sentiment
print(f"Text sentiment: {sentiment['Sentiment']}")
```

## 요약
- 이번 레슨은 AWS의 브라우저 기반 개발 환경(CloudShell, Cloud9)과 Comprehend를 이용한 NLP 감성 분석, CodeCatalyst 같은 통합 개발 서비스, Bash 파이프라인·Lynx 같은 커맨드라인 도구를 다룬다.

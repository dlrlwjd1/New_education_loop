# Summary and Highlights - Understanding the Role of Network Security

> MOOC 읽기 자료 · [원본 강의](https://www.mooc.org/learn/application-security-for-developers-devops/supplement/97ZyN/summary-and-highlights-understanding-the-role-of-network-security)

## 개요
- OSI 모델, 계층별 보안, 보안 패턴, TLS/SSL, OpenSSL까지 Module 1 중반부(네트워크 보안 관련 강의)를 정리한 공식 요약.

## 내용
- OSI 모델은 전 세계 누구나 사용할 수 있는 현재와 미래의 통신 유형을 가능하게 하는 시스템.
- OSI 모델은 데이터를 주고받기 위한 7개 계층으로 구성 — 첫 번째는 물리 계층, 그다음 데이터 링크 계층, 네트워크 계층, 전송 계층, 세션 계층, 표현 계층, 마지막으로 애플리케이션 계층.
- 통신 계층을 안전하게 지키는 것은 SSH, HTTPS, SSL/TLS(Secure Sockets Layer)를 이용해 관리하는 것이 중요.
- 애플리케이션 개발자가 애플리케이션 프로젝트에 코드를 커밋해야 할 때, 보안 코드 전달 파이프라인 계층을 안전하게 지키고 제한해야 함.
- 보안 패턴은 반복되는 보안 위협이나 이슈에 대한 재사용 가능한 해법을 나타내고 정의하는 일련의 규칙.
- TLS(Transport Layer Security)와 SSL(Secure Sockets Layer)은 네트워크 컴퓨터, 구체적으로 서버와 클라이언트 사이에 안전한 연결이나 통신을 확립하기 위한 프로토콜.
- TLS는 서버가 최신 인증서와 TLS 버전 지원을 갖추고 있을 때 효과적으로 작동.
- OpenSSL은 개인적인 것부터 상업적·전자상거래 거래까지 모든 종류의 통신에서 암호화로 안전한 통신을 보장하는, 명령줄과 소프트웨어 라이브러리를 사용하는 오픈소스 툴킷.

## 요약
- Module 1의 네트워크 보안 관련 강의는 데이터 전송을 위한 OSI 모델의 7개 계층과 그 보안(특히 통신 계층과 코드 전달 파이프라인 계층), 반복되는 위협에 대한 재사용 가능한 해법인 보안 패턴, 그리고 안전한 연결을 확립하는 TLS/SSL 프로토콜과 이를 실제로 구현하는 OpenSSL 툴킷을 요약한다.

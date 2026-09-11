# Network - Network Proxy Load Balancer

## 개요

- Network Proxy Load Balancer(NPLB)를 생성한다.
- TLS와 인증서를 이용한 암호화 전송 구성을 이해한다.
- Target Group과 분산 알고리즘을 설정한다.

## 내용

### TLS 지원

Network Proxy Load Balancer는 TLS(Transport Layer Security)를 지원한다. 도메인의 인증서를 Certificate Manager에 등록한 뒤 TLS 리스너에서 선택하면 암호화된 연결을 구성할 수 있다.

인증서 발급·등록에는 사용할 도메인이 필요하다. 강의 실습에서는 인증서가 준비되지 않아 TLS 대신 일반 연결로 분산 동작을 확인한다.

### 생성 절차

Public Network Proxy Load Balancer를 선택하고 처리 성능, VPC와 서브넷을 지정한다. 리스너 프로토콜과 포트를 정하고 Target Group에 `red`, `blue` 서버를 추가한다.

Target Group 설정에서 Round Robin, Source IP Hash, Least Connection 알고리즘 중 하나를 선택할 수 있다.

## 예시

```text
TLS 구성
→ 도메인 준비
→ Certificate Manager에 인증서 등록
→ Network Proxy Load Balancer 생성
→ TLS Listener에서 인증서 선택
→ Target Group 연결
```

## 요약

- NPLB는 프록시 방식의 네트워크 부하 분산을 제공한다.
- TLS 연결을 사용하려면 도메인과 등록된 인증서가 필요하다.
- 인증서는 Certificate Manager에서 관리한다.
- Target Group에서 백엔드 서버와 분산 알고리즘을 설정한다.
- [원본 강의](https://www.udemy.com/course/naver-cloud-boot-camp/learn/lecture/43367102#overview)

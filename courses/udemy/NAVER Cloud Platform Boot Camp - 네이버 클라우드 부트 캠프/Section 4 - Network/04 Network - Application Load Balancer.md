# Network - Application Load Balancer

## 개요

- 웹 서버용 Application Load Balancer(ALB)를 생성한다.
- 전용 서브넷, Target Group과 Health Check를 구성한다.
- 접속 정보와 분산 알고리즘을 확인한다.

## 내용

### 구성

소규모 웹 서비스는 ALB 뒤에 웹 서버를 두 대 이상 배치하고, 필요하면 Auto Scaling·Object Storage·Cloud DB를 연결한다.

외부 사용자가 접속하는 서비스이므로 Public 유형의 ALB를 선택한다. Load Balancer에는 일반 서버용이 아닌 전용 서브넷이 필요하며, 강의는 여러 가용 존에 전용 서브넷을 준비한다.

### Target Group

Target Group은 Load Balancer가 요청을 전달할 서버 집합이다.

- 대상 유형: VPC Server
- 프로토콜: HTTP
- 포트: 80
- Health Check: HTTP 80, HEAD
- 확인 간격과 실패 임계값 설정

준비한 `red`, `blue` 서버를 Target Group에 추가한다.

### 생성과 확인

ALB 리스너를 HTTP 80으로 설정하고 Target Group을 연결한다. 생성된 접속 정보로 브라우저를 열어 새로 고침할 때 `red`와 `blue`가 번갈아 나타나는지 확인한다.

도메인을 사용할 때는 DNS 레코드가 Load Balancer의 접속 정보를 가리키도록 설정한다.

### 알고리즘

분산 알고리즘은 Target Group 설정에서 변경한다. 기본값은 Round Robin이며 Source IP Hash 또는 Least Connection을 선택할 수 있다.

## 예시

```text
Public ALB
→ Load Balancer 전용 Subnet 선택
→ HTTP:80 Listener 생성
→ HTTP:80 Target Group 생성
→ Health Check 설정
→ red·blue 서버 등록
→ 접속 정보로 분산 확인
```

## 요약

- ALB는 HTTP·HTTPS 웹 요청을 여러 서버에 분산한다.
- Load Balancer 전용 서브넷을 별도로 만든다.
- Target Group에 실제 서버와 Health Check를 설정한다.
- Health Check를 통과한 서버만 요청을 받는다.
- 알고리즘은 Target Group에서 변경한다.
- [원본 강의](https://www.udemy.com/course/naver-cloud-boot-camp/learn/lecture/43367072#overview)


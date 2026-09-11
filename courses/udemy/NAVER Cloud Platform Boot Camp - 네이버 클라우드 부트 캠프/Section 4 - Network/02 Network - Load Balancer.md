# Network - Load Balancer

## 개요

- Load Balancer가 요청을 여러 서버로 분산하는 원리를 이해한다.
- Application·Network·Network Proxy Load Balancer를 비교한다.
- Round Robin, Least Connection, Source IP Hash 알고리즘을 살펴본다.

## 내용

### 역할

Load Balancer는 클라이언트 요청을 정상 상태의 여러 서버로 분배한다. 응답 시간을 줄이고 서버 자원을 고르게 사용하며, 장애 서버에는 요청을 보내지 않아 가용성을 높인다.

백엔드 서버는 운영 중에도 추가·제거할 수 있으며 Auto Scaling과 연결해 수요에 맞춰 자동 조절할 수 있다.

### 유형

| 유형 | 주요 용도 |
|---|---|
| Application Load Balancer | HTTP·HTTPS, 호스트·URL 경로 기반 라우팅 |
| Network Load Balancer | TCP 고성능 전달, 많은 동시 연결 |
| Network Proxy Load Balancer | 세션 유지와 TLS 적용 |

Application Load Balancer는 애플리케이션 계층(L7)에 가깝다. Network Load Balancer는 DSR(Direct Server Return)을 지원해 응답이 Load Balancer를 다시 거치지 않고 클라이언트로 직접 전달될 수 있다.

### 분산 알고리즘

- Round Robin: 서버를 순서대로 선택
- Least Connection: 현재 연결 수가 가장 적은 서버 선택
- Source IP Hash: 출발지 IP의 해시 결과에 따라 서버 선택

## 예시

```text
Client Requests
      │
      ▼
Load Balancer
├─ Server 1
├─ Server 2
└─ Server 3
```

## 요약

- Load Balancer는 정상 서버로만 요청을 분산해 성능과 가용성을 높인다.
- HTTP·HTTPS에는 Application Load Balancer가 적합하다.
- 많은 TCP 연결에는 Network Load Balancer를 사용할 수 있다.
- DSR은 응답 경로의 Load Balancer 부하를 줄인다.
- 서비스 특성에 맞는 분산 알고리즘을 선택한다.
- [원본 강의](https://www.udemy.com/course/naver-cloud-boot-camp/learn/lecture/43367024#overview)


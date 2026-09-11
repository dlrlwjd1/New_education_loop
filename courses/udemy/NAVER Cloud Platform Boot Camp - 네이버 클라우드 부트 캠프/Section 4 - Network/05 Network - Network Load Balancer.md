# Network - Network Load Balancer

## 개요

- TCP 기반 Network Load Balancer(NLB)를 구성한다.
- Target Group과 분산 알고리즘을 설정한다.
- DSR이 출발지 IP와 응답 경로에 미치는 영향을 확인한다.

## 내용

### NLB 생성

Public Network Load Balancer를 선택하고 이름, 처리 성능, VPC와 전용 서브넷을 지정한다. 강의 실습에서는 웹 서버의 80번 포트를 전달하기 위해 TCP 리스너와 TCP Target Group을 사용한다.

`red`, `blue` 서버를 Target Group에 등록한 뒤 Load Balancer를 생성하고 접속 정보로 분산 결과를 확인한다.

### 분산 알고리즘

Target Group 설정에서 Round Robin, Source IP Hash, Least Connection 등의 알고리즘을 선택할 수 있다.

### DSR

NLB는 DSR(Direct Server Return)을 지원한다. 요청은 Load Balancer를 통해 서버로 전달되지만 서버는 클라이언트의 출발지 IP를 알 수 있어 응답을 직접 보낼 수 있다.

```text
요청: Client → NLB → Server
응답: Client ←────── Server
```

Application Load Balancer를 경유한 요청에서는 서버가 Load Balancer 서브넷의 IP를 출발지로 볼 수 있다. 따라서 응답도 Load Balancer를 거친다.

강의에서는 서버에서 `tcpdump`로 80번 포트 트래픽을 관찰해 두 방식의 출발지 IP 차이를 확인한다.

## 예시

```bash
sudo tcpdump -n port 80
```

NLB와 ALB를 각각 통해 접속하고 출력되는 출발지 IP를 비교한다.

## 요약

- NLB는 TCP 기반의 대량·고성능 연결 처리에 적합하다.
- Target Group에 백엔드 서버와 TCP 포트를 등록한다.
- DSR에서는 서버가 클라이언트에 직접 응답할 수 있다.
- 출발지 IP 보존과 짧은 응답 경로가 처리 부하를 줄인다.
- `tcpdump`로 ALB와 NLB의 패킷 경로 차이를 확인할 수 있다.
- [원본 강의](https://www.udemy.com/course/naver-cloud-boot-camp/learn/lecture/43367086#overview)


# Traceroute

## 개요

- ping이 **닿는지 여부**를 알려 준다면, **traceroute**는 **긴 라우터 홉의 사슬 중 어디에 문제가 있는지** 알려 준다.
- 원리: **IP의 TTL 필드를 1, 2, 3…으로 조작**해 홉마다 **ICMP time-exceeded** 응답을 받아 낸다.

## 내용

### 왜 필요한가

- ping으로 한 컴퓨터에서 다른 컴퓨터에 닿을 수 있는지, 그리고 **연결의 대략적인 품질**을 알 수 있다.
- 그런데 네트워크를 가로지르는 통신, 특히 인터넷 통신은 **보통 많은 중간 노드를 거친다.**
- **긴 라우터 홉의 사슬 중 실제로 어디에 문제가 있는지 알아낼 방법**이 필요하다.

### 동작 원리 — TTL 조작

- **TTL 필드는 패킷을 전달하는 모든 라우터가 1씩 감소**시킨다.
- **TTL이 0이 되면 패킷은 폐기되고, 출발 호스트로 ICMP time-exceeded 메시지가 돌아온다.**
- traceroute는 이를 이용한다.
  1. **첫 패킷의 TTL을 1**로 설정 → **첫 번째 라우터 홉이 폐기** → time-exceeded 응답
  2. **두 번째 패킷의 TTL을 2** → 두 번째 라우터까지 도달
  3. **세 번째는 3** → 세 번째 라우터까지
  4. 계속 반복해 **마침내 목적지에 도달**할 때까지
- **각 홉마다 traceroute는 동일한 패킷 3개를 보낸다.**

### 출력

각 줄에 표시되는 것:

- **홉 번호**
- **패킷 3개 각각의 왕복 시간**
- **각 홉의 장치 IP**
- traceroute가 해석할 수 있으면 **호스트 이름**

### OS별 차이

| OS | 명령 | 기본 방식 |
|---|---|---|
| **Linux · macOS** | `traceroute` | **아주 높은 포트 번호로 UDP 패킷** 전송 |
| **Windows** | `tracert` (이름이 짧다) | **ICMP echo request** 사용 |

- 모든 플랫폼에서 traceroute는 **명령줄 플래그로 지정할 수 있는 것보다 더 많은 옵션**을 갖는다.

### 비슷한 도구 — 장시간 실행형

| 도구 | OS | 동작 |
|---|---|---|
| **mtr** | Linux · macOS | **실시간으로 동작**하며 traceroute의 현재 집계 데이터로 **출력을 계속 갱신** |
| **pathping** | Windows | **50초 동안 실행**한 뒤 **최종 집계 데이터를 한 번에** 표시 |

- 두 도구 모두 **오래 실행되는 traceroute** 역할을 해서, **시간에 따라 상황이 어떻게 변하는지 더 잘 볼 수 있다.**

## 예시

```bash
traceroute www.google.com     # Linux / macOS
tracert www.google.com        # Windows

mtr www.google.com            # 실시간 갱신
pathping www.google.com       # 50초 후 집계 출력
```

## 요약

- traceroute는 두 노드 사이의 경로와 홉별 정보를 알려 준다.
- TTL을 1부터 하나씩 늘려 홉마다 ICMP time-exceeded를 유도하는 방식이다.
- 홉당 패킷 3개를 보내며 홉 번호·왕복 시간·IP·호스트명을 출력한다.
- Linux·macOS는 UDP, Windows(tracert)는 ICMP를 기본으로 쓴다.
- 시간에 따른 변화를 보려면 mtr(실시간) 또는 pathping(50초 집계)을 쓴다.

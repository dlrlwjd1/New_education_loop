# Phase 9 — 관측과 장애 진단

- 목표: **도착점의 나머지 절반.** "접속이 안 된다"를 계층별로 좁혀 원인 한 곳까지 도달한다.
- 분량: 약 12시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 접속 실패를 만났을 때 **DNS → 연결 → TLS → HTTP → 애플리케이션** 순으로 배제해 나가는 절차를 갖고 있다
- `ping` · `traceroute` · `dig` · `curl -v` · `ss` · `tcpdump` · `nmap` 을 각각 **어느 계층을 확인하는 도구인지** 알고 순서대로 쓴다
- 지연·처리량·패킷 손실을 측정해 "느리다"를 숫자로 바꾼다
- 메트릭·로그·트레이스 셋을 한 요청 기준으로 이어 붙인다
- 분산 트레이싱으로 여러 서비스 중 어느 구간이 느린지 특정한다
- SLI를 정하고 SLO와 에러 버짓으로 "지금 고쳐야 하는가"를 판단한다

> Phase 1의 산출물(TCP 연결 해부 문서)과 Phase 2·4·5의 산출물을 여기서 다시 꺼내 쓴다.

## 9-A. 계층별 진단 도구

메인: IBM `06 Linux Commands and Shell Scripting` + Linux to ROS 2

- [ ] [07 Networking Commands.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/06%20Linux%20Commands%20and%20Shell%20Scripting/Module%202%20-%20Introduction%20to%20Linux%20Commands/07%20Networking%20Commands.md) — **이 소절의 출발점.** 어떤 명령이 있는지부터
- [ ] [17 Networking.md](../../courses/udemy/Computer%20Science%20&%20Robotics%20-%20Learn%20by%20Doing!%20Linux%20to%20ROS%202/Section%202%20-%20Linux%20Operating%20System/17%20Networking.md) — Phase 1에서 봤다면 **이번엔 진단 관점으로** 다시 읽는다
- [ ] [18 [LAB] Networking.md](../../courses/udemy/Computer%20Science%20&%20Robotics%20-%20Learn%20by%20Doing!%20Linux%20to%20ROS%202/Section%202%20-%20Linux%20Operating%20System/18%20%5BLAB%5D%20Networking.md) — 실습 랩
- [ ] [07 Hands-on Lab - Analyze HTTP Logs.md](../../courses/mooc/DevOps%20and%20SRE/Monitoring%20and%20Observability%20for%20Development%20and%20DevOps/Module%203%20-%20Methodologies%20and%20Tools%20in%20Logging/07%20Hands-on%20Lab%20-%20Analyze%20HTTP%20Logs.md) — **HTTP 접근 로그에서 이상을 찾는 실습.** 상태 코드 분포로 장애를 감지하는 감각

**도구가 무엇을 확인하는지 — The Bits and Bytes of Computer Networking, Module 6**

Phase 2에서 이 강좌를 이미 봤다면 여기서는 **진단 관점으로** 다시 읽는다. 위 리눅스 명령 목록이 "무엇이 있는가"라면, 아래는 **"그 도구가 어느 계층의 무엇을 확인하는가"** 다.

- [ ] [01 Introduction to Troubleshooting and the Future of Networking.md](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/01%20Introduction%20to%20Troubleshooting%20and%20the%20Future%20of%20Networking.md) — 오류 감지와 오류 복구의 구분. **CRC는 감지만 하고 재전송 판단은 전송 계층이 한다**
- [ ] [02 Ping - Internet Control Message Protocol.md](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/02%20Ping%20-%20Internet%20Control%20Message%20Protocol.md) — **ping이 왜 되는지의 밑바닥.** ICMP Type·Code(`destination unreachable`·`time exceeded`), 페이로드에 문제 패킷의 IP 헤더와 첫 8바이트가 담기는 이유
- [ ] [03 Traceroute.md](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/03%20Traceroute.md) — **TTL을 1씩 올려 홉마다 time-exceeded를 유도하는 원리.** Linux·macOS는 UDP, Windows `tracert`는 ICMP. 장시간 관측용 `mtr`·`pathping`
- [ ] [04 Testing Port Connectivity.md](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/04%20Testing%20Port%20Connectivity.md) — **전송 계층 확인.** `nc -z -v host port`, Windows `Test-NetConnection -Port`
- [ ] [05 Name Resolution Tools.md](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/05%20Name%20Resolution%20Tools.md) — `nslookup` 대화형에서 `server`로 질의 대상을 바꿔 **캐시 문제인지 레코드 문제인지** 가르기, `set debug`로 전체 응답 보기
- [ ] [06 Public DNS Servers.md](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/06%20Public%20DNS%20Servers.md) — **`8.8.8.8`을 진단 기준점으로 쓰는 법.** 대부분 ICMP에도 응답하므로 인터넷 연결 자체 확인에도 쓴다
- [ ] [08 Hosts Files.md](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/08%20Hosts%20Files.md) — **hosts가 DNS보다 먼저 검사된다.** "DNS는 맞는데 이 장비만 다른 곳으로 간다"의 단골 원인
- [ ] [15 Interview Role Play - Networking.md](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/15%20Interview%20Role%20Play%20-%20Networking.md) — **"네트워크가 죽었다"를 증상으로 좁혀 가는 실제 대화.** 내부/외부 사이트를 나눠 테스트하고, 복잡한 원인보다 단순한 원인(엉뚱한 Wi-Fi)을 먼저 보는 절차

> 이 소절이 끝나면 「이 단계가 끝나면」의 2번 항목(도구별로 어느 계층을 확인하는지)이 채워진다. **`dig`만은 강의에 없다** — 강의는 `nslookup` 기준이라, `dig +trace`·`dig @권한NS`는 Phase 2의 산출물 과제에서 익힌다.

## 9-B. 메트릭 · 로그 — 관측의 세 기둥 중 둘

메인: Observability Engineering, Module 1~2. **이 Phase의 메인 트랙이다.**

- [ ] [02 Scenario - Investigating Unexpected System Behaviour.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%201%20-%20Fundamentals%20of%20Observability%20and%20System%20Signals/02%20Scenario%20-%20Investigating%20Unexpected%20System%20Behaviour.md) — 이 강좌 전체를 관통하는 시나리오
- [ ] [05 Observability vs Monitoring in Modern Systems.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%201%20-%20Fundamentals%20of%20Observability%20and%20System%20Signals/05%20Observability%20vs%20Monitoring%20in%20Modern%20Systems.md) — **"알고 있는 문제를 감시하는 것"과 "모르는 문제를 캐낼 수 있는 상태"의 차이**
- [ ] [06 The Three Pillars of Observability.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%201%20-%20Fundamentals%20of%20Observability%20and%20System%20Signals/06%20The%20Three%20Pillars%20of%20Observability.md)
- [ ] [07 Demonstration - Installing Prometheus for Metrics Collection.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%201%20-%20Fundamentals%20of%20Observability%20and%20System%20Signals/07%20Demonstration%20-%20Installing%20Prometheus%20for%20Metrics%20Collection.md)
- [ ] [08 Demonstration - Configuring Node Exporter for Host Metrics.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%201%20-%20Fundamentals%20of%20Observability%20and%20System%20Signals/08%20Demonstration%20-%20Configuring%20Node%20Exporter%20for%20Host%20Metrics.md) — **호스트의 네트워크 지표가 여기서 나온다**
- [ ] [09 Metrics, Golden Signals, and Reliability Indicators.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%201%20-%20Fundamentals%20of%20Observability%20and%20System%20Signals/09%20Metrics,%20Golden%20Signals,%20and%20Reliability%20Indicators.md) — **네 가지 골든 시그널(지연·트래픽·오류·포화).** 무엇을 볼지 정하는 기준
- [ ] [12 Demonstration - PromQL Queries for Latency and Error Metrics.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%201%20-%20Fundamentals%20of%20Observability%20and%20System%20Signals/12%20Demonstration%20-%20PromQL%20Queries%20for%20Latency%20and%20Error%20Metrics.md) — **지연과 오류율을 질의로 뽑는다**
- [ ] [16 Demonstration - Using PromQL for Aggregation and Filtering.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%201%20-%20Fundamentals%20of%20Observability%20and%20System%20Signals/16%20Demonstration%20-%20Using%20PromQL%20for%20Aggregation%20and%20Filtering.md)
- [ ] [02 Demonstration - Installing Grafana and Connecting Prometheus.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%202%20-%20Visualization,%20Alerting,%20and%20Logging%20Pipelines/02%20Demonstration%20-%20Installing%20Grafana%20and%20Connecting%20Prometheus.md)
- [ ] [03 Demonstration - Creating Time-Series Dashboards in Grafana.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%202%20-%20Visualization,%20Alerting,%20and%20Logging%20Pipelines/03%20Demonstration%20-%20Creating%20Time-Series%20Dashboards%20in%20Grafana.md)
- [ ] [05 Alerting Strategies and Alert Fatigue.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%202%20-%20Visualization,%20Alerting,%20and%20Logging%20Pipelines/05%20Alerting%20Strategies%20and%20Alert%20Fatigue.md)
- [ ] [06 Demonstration - Creating Alert Rules in Prometheus.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%202%20-%20Visualization,%20Alerting,%20and%20Logging%20Pipelines/06%20Demonstration%20-%20Creating%20Alert%20Rules%20in%20Prometheus.md) — **Phase 4의 인증서 만료 감시를 여기 붙인다**
- [ ] [09 Structured Logging and Log Pipelines.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%202%20-%20Visualization,%20Alerting,%20and%20Logging%20Pipelines/09%20Structured%20Logging%20and%20Log%20Pipelines.md)
- [ ] [10 Demonstration - Installing Loki for Log Aggregation.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%202%20-%20Visualization,%20Alerting,%20and%20Logging%20Pipelines/10%20Demonstration%20-%20Installing%20Loki%20for%20Log%20Aggregation.md)
- [ ] [12 Demonstration - Querying Logs Using LogQL.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%202%20-%20Visualization,%20Alerting,%20and%20Logging%20Pipelines/12%20Demonstration%20-%20Querying%20Logs%20Using%20LogQL.md)

## 9-C. 분산 트레이싱 — 어느 구간이 느린가

메인: Observability Engineering, Module 3

- [ ] [01 Distributed Tracing Concepts and Terminology.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%203%20-%20Distributed%20Tracing%20and%20End-to-End%20Observability/01%20Distributed%20Tracing%20Concepts%20and%20Terminology.md)
- [ ] [02 Trace Context, Spans, and Service Dependencies.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%203%20-%20Distributed%20Tracing%20and%20End-to-End%20Observability/02%20Trace%20Context,%20Spans,%20and%20Service%20Dependencies.md) — **트레이스 컨텍스트가 HTTP 헤더로 전파된다는 것.** Phase 3·5의 헤더 지식이 여기서 쓰인다
- [ ] [03 Demonstration - Instrumenting an Application with OpenTelemetry SDK.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%203%20-%20Distributed%20Tracing%20and%20End-to-End%20Observability/03%20Demonstration%20-%20Instrumenting%20an%20Application%20with%20OpenTelemetry%20SDK.md)
- [ ] [04 Demonstration - Exporting Traces to Jaeger.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%203%20-%20Distributed%20Tracing%20and%20End-to-End%20Observability/04%20Demonstration%20-%20Exporting%20Traces%20to%20Jaeger.md)
- [ ] [05 Demonstration - Analyzing Request Latency Across Services in Jaeger.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%203%20-%20Distributed%20Tracing%20and%20End-to-End%20Observability/05%20Demonstration%20-%20Analyzing%20Request%20Latency%20Across%20Services%20in%20Jaeger.md) — **이 소절의 핵심 실습**
- [ ] [06 Observability Challenges in Kubernetes Environments.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%203%20-%20Distributed%20Tracing%20and%20End-to-End%20Observability/06%20Observability%20Challenges%20in%20Kubernetes%20Environments.md) — Phase 6에서 만든 클러스터가 대상
- [ ] [09 Demonstration - Tracing Requests Across Microservices in Jaeger.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%203%20-%20Distributed%20Tracing%20and%20End-to-End%20Observability/09%20Demonstration%20-%20Tracing%20Requests%20Across%20Microservices%20in%20Jaeger.md)
- [ ] [10 Correlation Strategies Across Telemetry Signals.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%203%20-%20Distributed%20Tracing%20and%20End-to-End%20Observability/10%20Correlation%20Strategies%20Across%20Telemetry%20Signals.md) — **메트릭·로그·트레이스를 한 요청으로 잇는 방법.** 9-B와 9-C를 묶는 강의

## 9-D. SLI · SLO · 에러 버짓과 사후 분석

메인: Foundations of Site Reliability Engineering Training

- [ ] [06 Demo - Creating SLIs, SLOs, and SLAs for a Sample Service.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%201%20-%20SRE%20Foundations/06%20Demo%20-%20Creating%20SLIs,%20SLOs,%20and%20SLAs%20for%20a%20Sample%20Service.md)
- [ ] [07 Understanding Error Budgets - Concepts and Benefits.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%201%20-%20SRE%20Foundations/07%20Understanding%20Error%20Budgets%20-%20Concepts%20and%20Benefits.md)
- [ ] [01 Demo - Calculating and Simulating Error Budget.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%202%20-%20Error%20Budgets%20&%20Observability/01%20Demo%20-%20Calculating%20and%20Simulating%20Error%20Budget.md) — **숫자로 계산해 본다**
- [ ] [04 Designing Effective Alerts - Multi-Level and SLO-Based Alerting.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%205%20-%20Alerting,%20Automation%20&%20RCA/04%20Designing%20Effective%20Alerts%20-%20Multi-Level%20and%20SLO-Based%20Alerting.md)
- [ ] [08 Root Cause Analysis (RCA) and Its Importance in SRE.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%205%20-%20Alerting,%20Automation%20&%20RCA/08%20Root%20Cause%20Analysis%20%28RCA%29%20and%20Its%20Importance%20in%20SRE.md) — **원인을 한 곳으로 좁히는 절차**
- [ ] [09 Root Cause Analysis in SRE - Techniques and Implementation.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%205%20-%20Alerting,%20Automation%20&%20RCA/09%20Root%20Cause%20Analysis%20in%20SRE%20-%20Techniques%20and%20Implementation.md)
- [ ] [02 Blameless Postmortem.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%203%20-%20Incident%20Management%20&%20Toil%20Reduction/02%20Blameless%20Postmortem.md)

함께 보기

- [ ] [10 Service Reliability with SLIs, SLOs, and Error Budgets.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%201%20-%20Fundamentals%20of%20Observability%20and%20System%20Signals/10%20Service%20Reliability%20with%20SLIs,%20SLOs,%20and%20Error%20Budgets.md)
- [ ] [13 Demonstration - Defining SLIs Using Prometheus Metrics.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%201%20-%20Fundamentals%20of%20Observability%20and%20System%20Signals/13%20Demonstration%20-%20Defining%20SLIs%20Using%20Prometheus%20Metrics.md) — **SLI를 실제 메트릭으로 정의한다**

## 9-E. 공백 — 처리량 · 패킷 손실 측정

저장소의 관측 강의는 **애플리케이션 지표(지연·오류율)는 잘 다루지만 네트워크 자체의 처리량과 패킷 손실을 재는 법은 없다.** "느리다"의 원인이 앱인지 네트워크인지 가르려면 이 측정이 필요하다.

**추천 강의 없음 — 산출물 과제로 대체한다.** 도구가 단순하고(`iperf3`, `mtr`) 강좌 하나를 살 만큼의 분량이 아니다.

1. **처리량** — 서버 두 대 사이에 `iperf3` 를 띄워 TCP·UDP 각각의 처리량을 잰다. 같은 AZ 안, 다른 AZ 사이, 그리고 로컬↔클라우드 세 경우를 비교한다
2. **패킷 손실과 경로** — `mtr` 로 목적지까지의 홉별 손실률과 지연을 본다. **중간 홉의 손실이 최종 홉의 손실과 다를 수 있는 이유**를 정리한다 (라우터가 ICMP를 낮은 우선순위로 처리하는 경우)
3. **지연 분해** — 같은 요청에 대해 `curl -w` 의 `time_namelookup` · `time_connect` · `time_appconnect` · `time_starttransfer` 를 뽑아, **총 지연 중 DNS·TCP·TLS·서버 처리가 각각 몇 ms인지** 분해한다. 이 한 줄짜리 명령이 이 Phase에서 가장 자주 쓰게 될 도구다

## 산출물

**"장애 진단 절차서 + 실전 3건".**

1. **절차서** — 접속 실패를 만났을 때의 배제 순서를 체크리스트로 쓴다. 각 단계에 쓰는 명령과, 그 단계가 통과/실패했을 때 각각 어디로 가는지 분기까지 적는다

   ```text
   1. dig   → 이름이 IP로 풀리는가          실패 시 → Phase 2
   2. ping / mtr → 그 IP에 패킷이 닿는가     실패 시 → 라우팅·ACG·NACL
   3. nc / nmap  → 그 포트가 열려 있는가     실패 시 → 보안그룹·서버 미기동
   4. openssl s_client → TLS가 성립하는가    실패 시 → Phase 4 (인증서·체인·버전)
   5. curl -v    → HTTP 응답이 오는가        상태 코드로 분기
   6. 트레이스   → 어느 서비스가 느린가/실패하는가
   ```

2. **실전 3건** — 자기 환경에 장애를 **일부러 심고** 위 절차로 잡는다. 각 건마다 증상 → 배제 과정 → 원인 → 조치를 기록한다. 최소 아래 셋을 서로 다른 계층에서 고른다
   - DNS 계층: A 레코드를 틀린 IP로 바꾼다
   - 네트워크 계층: ACG 인바운드에서 해당 포트를 뺀다
   - TLS 계층: 만료됐거나 도메인이 다른 인증서를 붙인다

3. **대시보드 하나** — Grafana에 골든 시그널 4개(지연 p50/p95 · 요청률 · 오류율 · 포화도)를 올린다. 여기에 **Phase 4의 인증서 만료일**을 패널 하나로 추가한다

4. **SLO 한 줄** — 자기 서비스의 SLI를 하나 정하고(예: "5초 내 200 응답 비율") SLO 값과 그에 따른 월간 에러 버짓을 분 단위로 계산해 적는다

## 다음 단계

→ [10 Phase 10 - 코드로 만드는 네트워크](10%20Phase%2010%20-%20%EC%BD%94%EB%93%9C%EB%A1%9C%20%EB%A7%8C%EB%93%9C%EB%8A%94%20%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC.md)

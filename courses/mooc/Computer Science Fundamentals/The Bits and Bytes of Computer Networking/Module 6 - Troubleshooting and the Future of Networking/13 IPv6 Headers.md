# IPv6 Headers

## 개요

- IPv6는 주소 크기만 늘린 것이 아니라 **몇 가지 개선**을 함께 도입했다.
- 가장 우아한 개선이 **IPv4보다 훨씬 단순해진 헤더**이며, 핵심 장치가 **Next Header 필드**다.

## 내용

### IPv6 헤더 필드

| 필드 | 크기 | 설명 |
|---|---|---|
| **Version** | 4비트 | **어떤 IP 버전**인지 정의. **IPv4 헤더도 정확히 같은 필드로 시작**한다 |
| **Traffic Class** | 8비트 | IP 데이터그램에 담긴 **트래픽의 종류를 정의**하며, **서로 다른 클래스의 트래픽이 서로 다른 우선순위를 받을 수 있게** 한다 |
| **Flow Label** | 20비트 | **Traffic Class와 함께** 라우터가 특정 데이터그램의 **QoS 수준을 결정**하는 데 사용 |
| **Payload Length** | 16비트 | 데이터그램의 **데이터 페이로드 구간 길이** |
| **Next Header** | — | **IPv6 고유의 개념** (아래 참조) |
| **Hop Limit** | 8비트 | **IPv4 헤더의 TTL 필드와 목적이 동일** |
| **Source Address** | **128비트** | 출발지 |
| **Destination Address** | **128비트** | 목적지 |

### Next Header — 왜 필요한가

- **IPv6 주소는 IPv4 주소의 4배 길이**다. 1과 0이 더 많다는 뜻이고, **링크를 건너 전송하는 데 시간이 더 걸린다.**
- IPv6 주소가 네트워크에 지우는 **추가 데이터 부담을 줄이기 위해, IPv6 헤더는 최대한 짧게 만들어졌다.**
- 그 방법 중 하나가 **모든 선택적 필드를 IPv6 헤더 자체에서 떼어내 추상화하는 것**이다.
- **Next Header 필드는 지금 이 헤더 바로 다음에 어떤 헤더가 오는지 정의**한다.
- 이 **추가 헤더들은 선택적**이므로 **완전한 IPv6 데이터그램에 반드시 필요한 것은 아니다.**
- **각 추가 선택 헤더도 자기만의 Next Header 필드를 갖기 때문에**, 선택적 설정이 많으면 **헤더의 사슬(chain)** 을 만들 수 있다.

### 헤더 뒤에 오는 것

- **Next Header가 다른 헤더를 지정했다면 그 헤더가 이어서 온다.**
- **아니라면 Payload Length에 지정된 길이만큼의 데이터 페이로드**가 이어진다.

## 예시

```
[IPv6 기본 헤더]
  Version | Traffic Class | Flow Label
  Payload Length | Next Header | Hop Limit
  Source Address (128b)
  Destination Address (128b)
        │
        └─ Next Header가 가리키면 →  [선택 헤더 1] ─ Next Header ─→ [선택 헤더 2] ─→ … ─→ [데이터 페이로드]
        └─ 아니면 바로 →              [데이터 페이로드]
```

## 요약

- IPv6 헤더는 IPv4보다 훨씬 단순하며 Version 필드로 시작하는 것은 같다.
- Traffic Class와 Flow Label이 함께 QoS 판단에 쓰인다.
- Hop Limit이 IPv4의 TTL과 같은 역할을 한다.
- 주소가 길어진 부담을 줄이려고 선택적 필드를 본 헤더에서 빼고, Next Header로 연결되는 선택 헤더 사슬로 처리한다.

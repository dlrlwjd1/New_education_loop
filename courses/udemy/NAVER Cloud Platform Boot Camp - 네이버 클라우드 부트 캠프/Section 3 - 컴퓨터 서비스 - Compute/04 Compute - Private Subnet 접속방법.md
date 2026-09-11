# Compute - Private Subnet 접속방법

## 개요

- 공인 IP가 없는 프라이빗 서브넷 서버에 접속하는 방법을 비교한다.
- Bastion Host, SSL VPN, IPsec VPN과 전용회선의 용도를 구분한다.

## 내용

### 직접 접속할 수 없는 이유

퍼블릭 서브넷의 서버는 인터넷 게이트웨이와 공인 IP를 통해 외부에서 직접 접속할 수 있다. 프라이빗 서브넷의 서버는 사설 IP만 가지므로 인터넷에서 바로 접근할 수 없다.

### Bastion Host

퍼블릭 서브넷에 작은 서버를 배치하고 이를 경유해 프라이빗 서버에 접속한다. 이 중간 서버를 Bastion Host라고 한다.

```text
관리자 PC
→ Public IP를 가진 Bastion Host
→ Private IP를 가진 내부 서버
```

Bastion Host에는 필요한 관리 포트만 열고 접속 가능한 출발지 IP를 제한해야 한다.

### VPN

SSL VPN 클라이언트로 VPC에 연결하면 사용자 PC가 내부 네트워크의 사설 IP에 접근할 수 있다. 연결 후에는 퍼블릭·프라이빗 서버 모두 내부 IP로 접속한다.

IPsec VPN은 회사나 개발 조직처럼 두 네트워크를 지속적으로 연결할 때 사용한다.

### 전용회선

Cloud Connect는 사내 네트워크와 클라우드를 전용회선으로 연결한다. 회선을 만들어 두면 사용량과 관계없이 비용이 발생할 수 있으므로, 기업이 지속적인 데이터 전송·백업·하이브리드 연결을 운영할 때 적합하다.

## 예시

| 방식 | 적합한 상황 |
|---|---|
| Bastion Host | 소규모 관리 접속 |
| SSL VPN | 개별 사용자의 내부 자원 접속 |
| IPsec VPN | 사내망과 VPC의 지속적 연결 |
| Cloud Connect | 안정적인 기업 전용회선 |

## 요약

- 프라이빗 VM은 인터넷에서 직접 접속할 수 없다.
- Bastion Host는 퍼블릭 서버를 중간 접속 지점으로 사용한다.
- SSL VPN은 사용자의 PC를 VPC 내부 네트워크에 연결한다.
- 지속적인 사내망 연결에는 IPsec VPN이나 전용회선을 검토한다.
- 방식별 보안 요구와 상시 비용을 함께 고려해야 한다.
- [원본 강의](https://www.udemy.com/course/naver-cloud-boot-camp/learn/lecture/43345458#overview)


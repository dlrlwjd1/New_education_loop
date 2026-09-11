# HA - High Availability

## 개요

- 고가용성(High Availability)의 목적과 장애 전환 방식을 이해한다.
- 이중화, 클러스터링, 데이터 복제와 Auto Scaling을 비교한다.

## 내용

### 고가용성

고가용성은 시스템 장애가 발생해도 애플리케이션과 서비스에 계속 접근할 수 있도록 가동 중지 시간을 최소화하는 설계다. 서버·네트워크·스토리지를 두 개 이상 구성하는 이중화·다중화가 기본이다.

Active 장비에서 장애를 감지하면 서비스 운영권을 Standby 장비로 넘겨 서비스를 이어간다. 데이터베이스의 Active-Standby 구성에서는 가상 IP(Virtual IP) 또는 제품 내부의 장애 전환 메커니즘을 사용한다.

### 데이터 복제

데이터를 여러 존(zone)이나 리전(region)에 계속 복제하면 한 위치에 장애가 생겼을 때 다른 위치에서 서비스를 재개할 수 있다.

### 클러스터링

클러스터링은 여러 서버나 컴퓨팅 자원을 하나의 논리적 단위처럼 동작하게 한다. 성능, 확장성과 워크로드 분산이 목적이며 Active-Standby 또는 Active-Active로 구성할 수 있다.

### Auto Scaling

Auto Scaling은 정책에 따라 VM 수를 자동 조절한다.

- 부하 증가: VM을 추가하는 scale-out
- 부하 감소: VM을 제거하는 scale-in

추가된 VM을 Load Balancer에 자동 등록하면 Active-Active 방식으로 트래픽을 분산할 수 있다.

## 예시

```text
Active-Standby
Client → Virtual IP → Active Server
                         │ 장애
                         ▼
                    Standby Server

Active-Active
Client → Load Balancer → Server 1
                       └→ Server 2
```

## 요약

- HA는 장애가 발생해도 서비스 중단을 최소화하는 설계다.
- 서버·네트워크·스토리지의 이중화와 데이터 복제를 활용한다.
- Active-Standby는 장애 시 운영권을 대기 장비로 이전한다.
- 클러스터링과 Load Balancer는 여러 서버가 함께 처리하도록 한다.
- Auto Scaling은 수요에 따라 VM 수를 자동으로 늘리고 줄인다.
- [원본 강의](https://www.udemy.com/course/naver-cloud-boot-camp/learn/lecture/43366996#overview)


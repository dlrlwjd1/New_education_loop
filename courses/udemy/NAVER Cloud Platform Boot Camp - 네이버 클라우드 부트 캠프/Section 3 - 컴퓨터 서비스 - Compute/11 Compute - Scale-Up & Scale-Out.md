# Compute - Scale-Up & Scale-Out

## 개요

- 트래픽 증가에 대응하는 수직·수평 확장 방식을 비교한다.
- Auto Scaling과 Load Balancer를 이용한 자동 분산 구조를 이해한다.

## 내용

### Scale-up

Scale-up은 기존 서버의 CPU·메모리·디스크를 늘리는 수직 확장(vertical scaling)이다. 서버 한 대의 처리 능력은 좋아지지만 요청이 한 서버에 집중되는 구조 자체는 유지된다.

서버 스펙 변경을 위해 서비스를 내리고 VM을 정지한 후 사양을 변경하고 다시 부팅해야 한다.

### Scale-out

Scale-out은 같은 역할의 서버 수를 늘리는 수평 확장(horizontal scaling)이다. 여러 서버가 요청을 나누어 처리하므로 부하를 분산할 수 있고, 한 서버에 장애가 발생해도 다른 서버가 서비스를 계속 제공할 수 있다.

Load Balancer가 요청을 여러 인스턴스에 분배한다. Auto Scaling은 모니터링 조건이나 일정에 따라 서버 수를 늘리고(scale-out) 줄이며(scale-in), 새 서버를 Load Balancer에 연결할 수 있다.

### 비교

| 항목 | Scale-up | Scale-out |
|---|---|---|
| 확장 단위 | 한 서버의 사양 | 서버 대수 |
| 방식 | 수직 확장 | 수평 확장 |
| 작업 | CPU·메모리 증설 | VM 추가·제거 |
| 부하 분산 | 구조적으로 동일 | 여러 서버에 분산 |
| 가용성 | 단일 서버 의존 | 서버 장애 영향 감소 |

## 예시

```text
Load Balancer
├─ VM 1
├─ VM 2
└─ VM 3

부하 증가 → Auto Scaling이 VM 추가
부하 감소 → 최소 용량까지 VM 제거
```

## 요약

- Scale-up은 서버 한 대의 성능을 높인다.
- Scale-out은 서버 수를 늘려 트래픽과 장애 영향을 분산한다.
- Auto Scaling은 모니터링 조건·시간에 따라 서버 수를 자동 조절한다.
- Load Balancer는 여러 서버로 요청을 분배한다.
- 최소·최대·기대 용량을 설정해 확장 범위를 제한할 수 있다.
- [원본 강의](https://www.udemy.com/course/naver-cloud-boot-camp/learn/lecture/43345560#overview)

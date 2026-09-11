# Compute 서비스

## 개요

- NAVER Cloud Platform의 Compute 상품과 서버 타입을 살펴본다.
- 서버 정지 시 과금 범위와 기본 모니터링·보안 기능을 이해한다.
- 용도에 맞는 서버 이미지와 CPU·메모리 구성을 선택한다.

## 내용

### Compute의 기본 특징

콘솔에서 이미지와 사양을 선택하면 가상 서버를 빠르게 생성할 수 있다. 기본 모니터링과 보안 강화 설정(security hardening)이 제공되며, 확장 모니터링에서는 CPU·네트워크·메모리·디스크 변화를 더 세밀하게 확인할 수 있다.

서버를 정지하면 시간제 서버의 CPU와 메모리 비용을 줄일 수 있지만, 할당된 디스크는 반납할 때까지 계속 과금된다.

### 주요 상품

- 일반 가상 서버(VM)
- SSD 서버
- GPU 서버
- Bare Metal 서버
- Auto Scaling
- Cloud Functions
- Application Server Launcher

Application Server Launcher는 데이터베이스, 웹 서버, 애플리케이션 등이 미리 설치된 이미지로 서버를 만드는 서비스다.

### 서버 타입 선택

| 타입 | 적합한 용도 |
|---|---|
| Standard | 일반 웹 서버·데이터베이스 |
| High CPU | 연산 중심 작업·게임 서버 |
| High Memory | 메모리 중심 데이터베이스·대규모 서비스 |
| CPU Intensive | 고성능 연산 |

OS 이미지와 함께 MySQL, Hadoop, MongoDB, MS SQL Server, PostgreSQL, Redis, Apache 등 애플리케이션이 포함된 이미지도 선택할 수 있다. 이미지 목록은 계속 변경되므로 서버 생성 시점에 다시 확인한다.

## 예시

```text
일반 웹 서비스 → Standard
연산 중심 작업 → High CPU
대용량 인메모리 처리 → High Memory
물리 서버 전용 성능 → Bare Metal
부하에 따른 자동 증설 → Auto Scaling
```

## 요약

- Compute 서비스는 VM부터 GPU·Bare Metal·서버리스까지 여러 실행 환경을 제공한다.
- 서버 타입은 CPU와 메모리 요구량에 맞춰 선택한다.
- 서버 정지 시에도 디스크 비용은 계속 발생할 수 있다.
- 사전 구성 이미지로 설치 시간을 줄일 수 있다.
- 서버를 만들기 전에 최신 이미지와 상품 조건을 확인한다.
- [원본 강의](https://www.udemy.com/course/naver-cloud-boot-camp/learn/lecture/43345440#overview)


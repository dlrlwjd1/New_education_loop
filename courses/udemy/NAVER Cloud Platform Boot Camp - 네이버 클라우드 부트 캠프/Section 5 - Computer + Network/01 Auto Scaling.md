# Auto Scaling

## 개요

- 조건에 따라 VM 수를 자동으로 늘리고 줄이는 Auto Scaling을 이해한다.
- Launch Configuration과 Auto Scaling Group의 역할을 구분한다.
- 모니터링·일정·수동 방식의 용량 조절을 비교한다.

## 내용

### Launch Configuration

Launch Configuration은 새 VM을 어떤 구성으로 만들지 정의한다.

- 원본 OS 또는 사용자 서버 이미지
- CPU·메모리·디스크 사양
- 인증 키
- 초기화 스크립트

애플리케이션과 설정이 준비된 사용자 이미지를 사용하면 동일한 서버를 자동으로 반복 생성할 수 있다.

### Auto Scaling Group

Auto Scaling Group은 Launch Configuration으로 생성할 서버 수와 네트워크·Load Balancer 연결을 관리한다. 최소·최대·기대 용량을 지정해 확장 범위를 제한한다.

새 서버는 지정된 Target Group에 자동 등록되고, scale-in으로 제거될 때 Target Group에서도 빠진다.

### 동작 조건

- 모니터링 기반: CPU·메모리 등의 임계값에 따라 동작
- 스케줄 기반: 특정 요일·시간에 서버 수 변경
- 수동 조절: 관리자가 직접 기대 용량 변경

강의 시점에는 지원 가능한 부팅 디스크 크기와 Configuration·Group 수에 제한이 있다고 설명하므로 실제 구축 전 최신 제한 사항을 확인해야 한다.

## 예시

```text
CPU 사용률 상승
→ Monitoring Trigger 발생
→ Scale-out Policy 실행
→ 사용자 이미지로 VM 생성
→ Load Balancer Target Group 등록

CPU 사용률 하락
→ Scale-in Policy 실행
→ VM 반납
→ Target Group에서 제거
```

## 요약

- Launch Configuration은 새 VM의 원본과 사양을 정의한다.
- Auto Scaling Group은 서버 수와 네트워크 연결을 관리한다.
- 모니터링 조건이나 일정으로 scale-out·scale-in을 자동화한다.
- 사용자 이미지와 초기화 스크립트로 동일한 애플리케이션 환경을 만든다.
- 실제 사용 전 최신 서비스 제한을 확인한다.
- [원본 강의](https://www.udemy.com/course/naver-cloud-boot-camp/learn/lecture/43367126#overview)


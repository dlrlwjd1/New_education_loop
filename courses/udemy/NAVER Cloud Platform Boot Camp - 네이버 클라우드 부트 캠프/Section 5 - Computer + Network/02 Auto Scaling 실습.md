# Auto Scaling 실습

## 개요

- Application Load Balancer와 Auto Scaling Group을 연결한다.
- Cloud Insight의 CPU 이벤트로 scale-out·scale-in을 실행한다.
- 부하 도구로 정책과 Target Group 자동 등록을 검증한다.

## 내용

### Load Balancer 준비

HTTP 80 Target Group을 만들고 기존 `red` 서버를 등록한다. Health Check는 HTTP 80과 HEAD 메서드를 사용한다. Public Application Load Balancer를 생성해 Target Group에 연결한다.

### Launch Configuration

`red` 서버에서 만든 사용자 이미지를 선택하고 CPU·메모리·디스크, 인증 키를 지정해 Launch Configuration을 만든다.

### Auto Scaling Group

Launch Configuration, VPC·서브넷, 최소·최대·기대 용량, 상세 모니터링, Health Check 보류 시간, Load Balancer Target Group과 ACG를 지정한다. Scale-out과 scale-in 정책도 각각 만든다.

### Cloud Insight 이벤트

강의 실습은 다음 두 이벤트를 만든다.

- CPU 사용률이 20% 이상으로 1분간 지속: scale-out
- CPU 사용률이 19% 이하: scale-in

이벤트 기준은 CPU 외에도 정상 호스트 수, 동시 세션, 초당 연결 수, 인바운드·아웃바운드 트래픽 등을 사용할 수 있다.

### 부하 테스트

Linux 서버에 `stress`를 설치하고 CPU 부하를 발생시킨다.

```bash
sudo apt update
sudo apt install -y stress
stress --cpu 2 --timeout 60s
```

Cloud Insight에서 CPU 사용률과 이벤트를 확인하고, 새 VM이 만들어져 Target Group에 등록되는지 관찰한다. 부하가 끝나고 사용률이 낮아지면 VM이 줄어들고 Target Group에서도 제거되는지 확인한다.

## 예시

```text
ALB·Target Group 생성
→ Launch Configuration 생성
→ Auto Scaling Group 생성
→ Scale-out·Scale-in Policy 생성
→ Cloud Insight Event Rule 연결
→ CPU 부하 발생
→ VM 증가·감소와 Target Group 상태 확인
```

## 요약

- Auto Scaling은 Load Balancer·Target Group과 함께 구성한다.
- Cloud Insight 이벤트가 Scaling Policy를 실행한다.
- 새 VM은 Target Group에 자동 등록된다.
- 부하가 줄면 VM과 Target 등록도 자동으로 제거된다.
- CPU뿐 아니라 연결 수와 트래픽도 Scaling 기준으로 사용할 수 있다.
- [원본 강의](https://www.udemy.com/course/naver-cloud-boot-camp/learn/lecture/43367156#overview)


# Auto Scaling 삭제하기

## 개요

- Auto Scaling 실습으로 생성된 VM과 관련 설정을 안전한 순서로 삭제한다.
- 남은 리소스로 인한 불필요한 과금을 방지한다.

## 내용

### 용량을 0으로 변경

Auto Scaling Group의 최소·최대·기대 용량을 모두 `0`으로 변경한다. Group이 관리 중인 VM을 반납할 때까지 기다리고 서버 수가 실제로 0인지 확인한다.

### 관련 리소스 삭제

VM 반납이 완료된 후 다음 설정을 삭제한다.

1. Auto Scaling Group
2. Launch Configuration
3. Cloud Insight 이벤트·모니터링 설정
4. 더 이상 사용하지 않는 Target Group과 Load Balancer

## 예시

```text
min = 0
max = 0
desired = 0
→ 자동 생성 VM 반납 확인
→ Auto Scaling Group 삭제
→ Launch Configuration 삭제
→ Cloud Insight Rule 삭제
→ Load Balancer·Target Group 삭제
```

## 요약

- Group을 바로 지우기 전에 모든 용량 값을 0으로 만든다.
- 관리 중인 VM이 전부 반납되었는지 확인한다.
- Launch Configuration과 Cloud Insight 규칙도 함께 정리한다.
- 사용하지 않는 Load Balancer와 Target Group을 삭제해 과금을 막는다.
- [원본 강의](https://www.udemy.com/course/naver-cloud-boot-camp/learn/lecture/43367170#overview)


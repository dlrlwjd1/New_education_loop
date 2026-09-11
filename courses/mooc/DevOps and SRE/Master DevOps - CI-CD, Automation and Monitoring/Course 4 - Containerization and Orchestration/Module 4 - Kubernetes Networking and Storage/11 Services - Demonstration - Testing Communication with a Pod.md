# Services - Demonstration - Testing Communication with a Pod

## 개요
- BusyBox Pod에서 ClusterIP Service 이름으로 `wget` 요청을 보내 실제로 Nginx Pod 2개에 라운드 로빈으로 트래픽이 분산되는 것을 검증.

## 내용
### ClusterIP Service 확인
```bash
kubectl get svc nginx-clusterip
```
- 서비스 IP, 포트(80) 확인 — **외부 IP는 없음**(ClusterIP 타입이므로 외부에서 접근 불가).
- Service Port와 Target Port는 같을 수도 다를 수도 있음(이 예시에서는 둘 다 80).

### 테스트용 BusyBox Pod 생성
```bash
kubectl run testpod -it --image=busybox --rm -- /bin/sh
```
- **BusyBox** — Google이 만든 초경량 OS로, `wget`/`curl`/`ping` 등 연결 테스트용 명령을 실행하기 위한 용도(프로덕션 용도 없음).
- **`-it`** — 인터랙티브 셸로 진입. **`--rm`** — 셸에서 나가면(exit) 자동으로 Pod가 삭제됨.
```bash
kubectl get pod   # testpod가 실행 중임을 확인
```

### Service 이름으로 연결 테스트
```bash
wget -qO- http://nginx-clusterip
```
- BusyBox 컨테이너 안에서 **Pod IP가 아니라 Service 이름**(`nginx-clusterip`)으로 요청을 보냄.
- 결과: **"Welcome to nginx!"** 응답 확인 — Service가 요청을 자동으로 Nginx Pod 2개 중 하나로 라우팅한 것.

### 라우팅이 동작하는 원리
- Service의 `selector`(예: `app: nginx`)와 두 Nginx Pod의 레이블(`app: nginx`)이 일치하기 때문에, Service가 어디로 트래픽을 보내야 할지 알고 있음.
- 트래픽은 **라운드 로빈(Round-robin)** 방식으로 두 Pod에 균등하게 분산 — 첫 요청은 Pod1, 두 번째는 Pod2, 세 번째는 다시 Pod1... 이런 식으로 순환.
- 명령을 여러 번 반복 실행해도 매번 정상 응답("Welcome to nginx!")을 받아 부하 분산이 정상 동작함을 재확인.

### Pod 종료
```bash
exit   # BusyBox 셸에서 나가면 --rm 옵션 때문에 Pod가 자동 삭제됨
kubectl get pod   # testpod가 사라진 것을 확인
```

## 요약
- BusyBox 테스트 Pod에서 `wget`으로 Pod IP가 아닌 **Service 이름**(`nginx-clusterip`)을 호출하면, Selector와 레이블이 일치하는 두 Nginx Pod에 라운드 로빈 방식으로 트래픽이 자동 분산되는 것을 확인할 수 있으며, `--rm` 옵션 덕분에 테스트가 끝나고 셸을 종료하면 Pod가 자동으로 정리된다.

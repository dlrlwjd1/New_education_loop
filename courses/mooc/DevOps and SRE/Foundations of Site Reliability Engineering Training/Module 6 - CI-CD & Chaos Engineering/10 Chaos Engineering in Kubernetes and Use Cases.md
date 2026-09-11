# Chaos Engineering in Kubernetes and Use Cases (쿠버네티스 카오스 엔지니어링과 사례)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 6: CI/CD & Chaos Engineering

## 개요
- **Kubernetes**에서의 카오스 엔지니어링, 실험 유형·전용 도구, 성공 사례, 흔한 함정을 다룬다.

## 내용

### Kubernetes 카오스 엔지니어링
- Kubernetes의 **선언적(declarative) 특성**은 통제된 실패 실험에 이상적. 단, 다양한 장애 모드를 신중히 테스트해야 함.
- 파드·노드에 실패를 주입.

### 흔한 Kubernetes 카오스 실험
- 파드/노드 실패, **네트워크 파티션(network partition)**, 리소스 제약, **API 서버 불가용**, **etcd 실패**.

### Kubernetes 전용 도구
- **Litmus Chaos, Chaos Mesh, kube-monkey, PowerfulSeal, chaoskube**.

### 사례 — 금융 서비스 회사
- 과제: 피크 거래 시간의 잦은 장애 → 큰 재정 손실·고객 불만.
- 접근: **스테이징 환경의 단순 실험부터** 시작 → 점진적으로 프로덕션. DB 페일오버·네트워크 파티션·의존성 장애 테스트에 집중.
- 결과: **미발견 취약점 23개 식별**, 프로덕션 인시던트 **70% 감소**, MTTR **시간 → 분** 단축, 개발자 확신 증가, 분당 장애 비용 수백만 절감.

### 흔한 함정 (pitfalls)
- 가설 생략, 부족한 모니터링, **처음부터 과도한 카오스**(작게 시작해야), 학습 실패, 문화적 측면 무시(전원 참여·buy-in 필요).

## 요약
- Kubernetes는 선언적 특성으로 카오스 실험에 적합, **파드·노드·네트워크·API 서버·etcd** 대상 실험(Litmus·Chaos Mesh·kube-monkey 등).
- 금융 사례: 스테이징→프로덕션 점진 적용으로 취약점 23개 발견, 인시던트 70%↓, MTTR 시간→분.
- 함정: **가설 생략·모니터링 부족·과도한 시작·학습 실패·문화 무시**.

# Scenario - Understanding DevOps

## 개요
- 가상의 회사 Technova 사례를 통해 Waterfall 기반 개발·운영 분리 조직에서 발생하는 문제와 DevOps가 이를 어떻게 해결하는지 설명.

## 내용
### Technova의 문제 상황
- 개발자: 요구사항이 바뀌어도 최초 지시서(initial instructions)대로만 작업 — Waterfall 특유의 경직성
- 운영 엔지니어: "내 시스템에서는 코드가 안 돌아간다" — 로컬에서만 동작 확인, 프로덕션 환경 불일치
- 고객은 업데이트를 기다리지만 경직된 프로세스·부실한 협업으로 딜리버리가 지연됨

### 전통적 개발의 사일로(silo) 구조
1. Requirement Gathering — 기술팀과 분리되어 진행
2. Development — 테스터·운영 참여 없이 코드 작성
3. Testing — 원래 목표에 대한 이해 없이 뒤늦게 진행
4. Deployment — 운영팀이 별도로 처리 → 환경 불일치(environment mismatch)
5. Monitoring — 최소한의 반응형(reactive) 모니터링
6. Feedback — 너무 늦게 도착해 조치가 어려움

### 개발자 vs 운영 관점의 pain point
- 개발자: 배포까지 긴 대기 시간, 협업 부족으로 인한 기대치 불일치, 오래된/보류된 코드 재작업 부담
- 운영: 새 코드의 버그·충돌 속에서도 안정성 유지, 비효율적 인프라 도구, 로깅·협업 부재로 인한 진단 어려움, 서버 증가에 따른 관리 부담

### DevOps가 해결하는 방식
- Continuous Integration — 커밋 즉시 자동 빌드·테스트로 빠른 피드백
- CI/CD 파이프라인 — 테스트·빌드·배포 자동화로 개발자는 코드 작성에 집중
- Git — 공유 저장소 기반 버전 관리·협업, 충돌 없는 동시 작업
- 컨테이너화(containerization) — 개발=프로덕션 환경 일치, 가동 시간(uptime) 향상
- Nagios 같은 모니터링 도구 — 문제 발생 시 즉시 알림, 빠른 대응
- Configuration Management — 인프라 프로비저닝·유지 자동화로 수동 오류 감소

## 요약
- 전통적 모델은 개발·운영 간 단절로 지연·오해·고객 불만을 낳지만, DevOps는 사람·프로세스·도구를 정렬해 더 빠르고 안정적인 소프트웨어 딜리버리를 가능하게 한다.

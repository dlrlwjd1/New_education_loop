# 데브옵스(DevOps) 학습 로드맵 — CI/CD와 쿠버네티스 배포

**이 저장소에 이미 정리된 강의 자료만으로** 코드 푸시 하나로 테스트·빌드·쿠버네티스 배포까지 자동으로 도는 파이프라인을 직접 만들 수 있는 수준까지 가는 순서를 정리했다.

- 작성일: 2026-08-06
- 대상: 애플리케이션 개발 경험은 있으나 배포·인프라는 손으로 하거나 남에게 맡겨 온 상태
- 원칙: 새 강의를 사거나 외부 자료를 찾지 않고, [`courses/`](../../courses/) 안에 이미 정리된 노트로 완주한다.
- 도착점: **`git push` → 테스트 → 이미지 빌드 → 쿠버네티스 롤아웃**이 사람 손 없이 도는 상태

## 로드맵 구조

| 단계 | 주제 | 핵심 산출물 | 분량(대략) | 파일 |
|---|---|---|---|---|
| Phase 1 | DevOps 개념과 리눅스 기초 | DevOps 단계별 현황 진단표 | 5~6시간 | [01 Phase 1](01%20Phase%201%20-%20DevOps%20%EA%B0%9C%EB%85%90%EA%B3%BC%20%EB%A6%AC%EB%88%85%EC%8A%A4%20%EA%B8%B0%EC%B4%88.md) |
| Phase 2 | Git과 협업 워크플로 | 팀 브랜치 전략 문서 | 6~7시간 | [02 Phase 2](02%20Phase%202%20-%20Git%EA%B3%BC%20%ED%98%91%EC%97%85%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C.md) |
| Phase 3 | 빌드 자동화와 CI | PR마다 도는 CI 파이프라인 | 10~12시간 | [03 Phase 3](03%20Phase%203%20-%20%EB%B9%8C%EB%93%9C%20%EC%9E%90%EB%8F%99%ED%99%94%EC%99%80%20CI.md) |
| Phase 4 | 컨테이너 — Docker | 앱 Dockerfile + Compose 로컬 스택 | 12~14시간 | [04 Phase 4](04%20Phase%204%20-%20%EC%BB%A8%ED%85%8C%EC%9D%B4%EB%84%88%20Docker.md) |
| Phase 5 | 쿠버네티스 기초 | Deployment로 뜬 앱 + 롤링 업데이트/롤백 | 8~10시간 | [05 Phase 5](05%20Phase%205%20-%20%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4%20%EA%B8%B0%EC%B4%88.md) |
| Phase 6 | 쿠버네티스 네트워킹·스토리지·설정 | Ingress로 외부 노출 + ConfigMap/Secret 분리 | 10~12시간 | [06 Phase 6](06%20Phase%206%20-%20%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4%20%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%82%B9%20%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80%20%EC%84%A4%EC%A0%95.md) |
| Phase 7 | 쿠버네티스 배포 실전 | **push → 자동 배포 파이프라인** | 8~10시간 | [07 Phase 7](07%20Phase%207%20-%20%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4%20%EB%B0%B0%ED%8F%AC%20%EC%8B%A4%EC%A0%84.md) |
| Phase 8 | CD 파이프라인과 GitOps | 배포 전략 선택 근거 + GitOps 구성 | 5~6시간 | [08 Phase 8](08%20Phase%208%20-%20CD%20%ED%8C%8C%EC%9D%B4%ED%94%84%EB%9D%BC%EC%9D%B8%EA%B3%BC%20GitOps.md) |
| Phase 9 | IaC와 구성 관리 | Terraform으로 만든 클러스터 인프라 | 12~14시간 | [09 Phase 9](09%20Phase%209%20-%20IaC%EC%99%80%20%EA%B5%AC%EC%84%B1%20%EA%B4%80%EB%A6%AC.md) |
| Phase 10 | 테스트와 보안 게이트 | 통과 못 하면 배포가 막히는 관문 | 8~10시간 | [10 Phase 10](10%20Phase%2010%20-%20%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%99%80%20%EB%B3%B4%EC%95%88%20%EA%B2%8C%EC%9D%B4%ED%8A%B8.md) |

부속 문서

- [00 강의 자료 인덱스](00%20%EA%B0%95%EC%9D%98%20%EC%9E%90%EB%A3%8C%20%EC%9D%B8%EB%8D%B1%EC%8A%A4.md) — 저장소 안의 DevOps 관련 자료 **전체 목록**
- [11 부록 - 클라우드 기초](11%20%EB%B6%80%EB%A1%9D%20-%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EA%B8%B0%EC%B4%88.md) — 클라우드 개념이 처음일 때만 보는 자료
- [12 부록 - 도구 선택과 치트시트](12%20%EB%B6%80%EB%A1%9D%20-%20%EB%8F%84%EA%B5%AC%20%EC%84%A0%ED%83%9D%EA%B3%BC%20%EC%B9%98%ED%8A%B8%EC%8B%9C%ED%8A%B8.md) — "Jenkins냐 GitHub Actions냐" 같은 선택 지점의 역인덱스

## 뼈대가 되는 세 강좌

1. **[Master DevOps - CI-CD, Automation and Monitoring](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/)** (MOOC · 4강좌 · 약 440개 강의)
   → Git·Jenkins·Ansible·Terraform·Docker·쿠버네티스를 도구별로 깊게. **이 로드맵의 메인 트랙이다.** 강의 하나가 짧고 데모(demonstration)가 촘촘하다.
2. **[IBM DevOps and Software Engineering](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/)** (MOOC · 15강좌)
   → 같은 주제를 개념 중심으로 짧게. **GitHub Actions·Tekton·GitOps·OpenShift는 메인 트랙에 없고 여기만 있다.**
3. **[Microservices with Node JS and React](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/)** (Udemy · 26섹션)
   → **처음부터 끝까지 하나의 실제 앱을 쿠버네티스에 올려 자동 배포까지 만드는 유일한 자료다.** Phase 7의 중심.

세 강좌가 겹치는 구간이 많으므로, 각 Phase 문서에서 "메인"과 "함께 보기"로 짝지어 두었다.

## 추천 진행 방식

- **주 5시간 기준 약 18주** 코스다. 분량이 크다. 아래 "빠른 경로"를 먼저 읽는다.
- 강의 하나를 볼 때마다 `study` 스킬로 Q&A 학습을 하면 정리본이 자동 생성된다. (`.claude/skills/study/SKILL.md`)
- **Phase 4부터는 반드시 직접 명령을 치면서 본다.** Docker와 쿠버네티스는 읽어서 되는 게 없다. 로컬에 Docker Desktop과 minikube(또는 kind)를 깔고 시작한다.
- Phase가 끝날 때마다 **하나의 같은 앱**에 계속 얹는다. 아무 CRUD 앱이면 된다. Phase 7에서 그 앱이 자동 배포되면 로드맵의 목적이 달성된다.

## 빠른 경로 — 목표가 "쿠버네티스 자동 배포" 하나라면

전체 완주가 부담이면 이 순서만 한다. 약 6주.

1. [Phase 1](01%20Phase%201%20-%20DevOps%20%EA%B0%9C%EB%85%90%EA%B3%BC%20%EB%A6%AC%EB%88%85%EC%8A%A4%20%EA%B8%B0%EC%B4%88.md) 의 1-A, 1-B만 (개념과 파이프라인 전체 그림)
2. [Phase 4](04%20Phase%204%20-%20%EC%BB%A8%ED%85%8C%EC%9D%B4%EB%84%88%20Docker.md) 의 4-A ~ 4-D (Docker 기초와 Dockerfile)
3. [Phase 5](05%20Phase%205%20-%20%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4%20%EA%B8%B0%EC%B4%88.md) **전체**
4. [Phase 6](06%20Phase%206%20-%20%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4%20%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%82%B9%20%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80%20%EC%84%A4%EC%A0%95.md) 의 6-A, 6-B, 6-E (Service·Ingress·ConfigMap/Secret)
5. [Phase 7](07%20Phase%207%20-%20%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4%20%EB%B0%B0%ED%8F%AC%20%EC%8B%A4%EC%A0%84.md) **전체**
6. [Phase 3](03%20Phase%203%20-%20%EB%B9%8C%EB%93%9C%20%EC%9E%90%EB%8F%99%ED%99%94%EC%99%80%20CI.md) 의 3-D (GitHub Actions) — Phase 7에서 이미 쓰게 되므로 뒤로 미룰 수 있다

Terraform·Ansible(Phase 9)과 Jenkins(Phase 3-C)는 이 경로에서 빠진다. **클러스터를 직접 만들어야 하는 상황이 오면** Phase 9로 돌아온다.

## 이 로드맵에 없는 것 — 모니터링과 운영

Prometheus·Grafana·로그·트레이싱·장애 대응은 **배포한 다음의 일**이라 별도 로드맵으로 분리했다.

→ **개발운영 로드맵**

단, 두 로드맵이 만나는 지점이 두 곳 있다.

- [Master DevOps / Course 3 / Module 3 - Monitoring with Prometheus and Grafana](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%203%20-%20Monitoring%20with%20Prometheus%20and%20Grafana/) — CI/CD 파이프라인 자체를 모니터링하는 부분
- [Master DevOps / Course 4 / Module 4 / 43~55](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/) — 쿠버네티스 클러스터 메트릭 수집

이 로드맵의 Phase 6에서 위 두 개를 "이 정도만 알고 넘어간다" 수준으로 짚고, 깊이는 운영 로드맵에서 다룬다.

## 진행 현황

| Phase | 상태 | 완료일 |
|---|---|---|
| Phase 1 | 미시작 | — |
| Phase 2 | 미시작 | — |
| Phase 3 | 미시작 | — |
| Phase 4 | 미시작 | — |
| Phase 5 | 미시작 | — |
| Phase 6 | 미시작 | — |
| Phase 7 | 미시작 | — |
| Phase 8 | 미시작 | — |
| Phase 9 | 미시작 | — |
| Phase 10 | 미시작 | — |

## 주의 사항

- **각 Phase 문서의 체크리스트가 이 로드맵이 다루는 코스들의 진행 기록 원본이다.** 별도의 코스 단위 진행 기록 파일은 두지 않는다.
- Master DevOps 강좌의 Terraform·CloudFormation 실습은 **AWS 계정에 실제 리소스를 만든다.** 실습 후 반드시 `terraform destroy`나 스택 삭제로 정리한다. 요금이 발생한다.
- [`IBM DevOps and Software Engineering/03 Introduction to Agile Development and Scrum/`](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/) 의 노트 일부는 자동 번역 품질이 낮다. 이 로드맵은 해당 강좌를 쓰지 않지만, 스프린트 계획이 필요하면 [PM 로드맵의 Phase 4](../PM%20로드맵/04%20Phase%204%20-%20실행%20애자일과%20스프린트.md)를 본다.

# Implementing Jenkins Pipelines as Code

## 개요
- Pipeline as Code의 개념·이점, Declarative vs Scripted 비교, Jenkinsfile 핵심 구성요소, 베스트 프랙티스를 정리한 리딩.

## 내용
### Pipeline as Code란
- 전통적으로 Jenkins Job은 GUI로 설정했지만, 이는 버전 관리·재현성·확장성에 한계가 있었다.
- Pipeline as Code는 전체 CI/CD 프로세스를 **Jenkinsfile**이라는 텍스트 파일로 정의해 프로젝트 소스 코드 저장소에 함께 커밋한다.

### 이점
1. **버전 관리 통합** — 애플리케이션 코드와 같은 저장소에 저장되어 빌드 프로세스 변경도 추적·리뷰·롤백 가능
2. **환경 간 일관성** — 코드로 정의되어 환경별 차이로 인한 문제 감소
3. **협업 향상** — 일반적인 코드 리뷰 관행으로 파이프라인 설정도 협업 가능
4. **확장성·재사용성** — 코드로 정의된 파이프라인은 모듈화·재사용 가능

### Declarative vs Scripted Pipeline
- **Declarative** — 더 구조화되고 접근하기 쉬운 문법, 프로그래밍 경험이 적어도 사용 가능. 일반적으로 권장.
- **Scripted** — Groovy 기반, 복잡한 로직이 필요한 파이프라인에 유리하지만 학습 곡선이 가파르고 숙련자에게 권장.

### Jenkinsfile의 핵심 구성요소
- **Agent** — 파이프라인이 실행될 위치(임의의 agent, 특정 라벨, Docker 컨테이너 등)
- **Stages** — Build, Test, Deploy 같은 작업 순서 정의, 각 stage는 여러 step 포함
- **Steps** — stage 내 개별 작업(셸 명령 실행, 스크립트 호출, 도구 연동 등)
- **Post** — 파이프라인 실행 후 동작(알림 전송, 리소스 정리 등)

### Pipeline as Code 베스트 프랙티스
1. **Declarative 문법 사용** — 단순성·유지보수성을 위해 우선 권장
2. **파이프라인 모듈화** — Shared Libraries로 복잡한 파이프라인을 재사용 가능한 작은 단위로 분리
3. **파라미터화** — 여러 환경/설정에 유연하게 대응
4. **에러 핸들링** — try-catch, post-build actions로 실패를 우아하게 처리하고 리소스 정리
5. **민감 정보 보안** — Jenkinsfile에 자격 증명 하드코딩 금지, Credentials Plugin 활용
6. **버전 관리 통합** — Jenkinsfile을 프로젝트 저장소에 저장해 버전 관리·리뷰·협업 가능
7. **병렬 Stage 활용** — `parallel` 지시어로 독립적인 stage를 동시 실행해 전체 실행 시간 단축
8. **모니터링·리포팅** — 파이프라인 성능·테스트 커버리지·빌드 상태를 리포팅 도구로 추적

## 요약
- Pipeline as Code는 CI/CD 프로세스를 Jenkinsfile로 코드화해 버전 관리·협업·확장성을 크게 개선하며, Declarative 문법과 모듈화·파라미터화·에러 핸들링·보안·병렬 실행 같은 베스트 프랙티스를 함께 적용하는 것이 현대 Jenkins 파이프라인 운영의 핵심이다.

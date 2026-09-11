# Enhancing the CI-CD Pipelines - Enhancing Build Processes

## 개요
- 빌드 속도 개선, 테스트 자동화 강화, 파이프라인 확장(Scaling) 방법을 설명.

## 내용
### 빌드 프로세스 개선 방법
1. **병렬 빌드(Parallel Build)** — CPU 코어 수에 따라 한계가 있으므로, 병렬 빌드를 많이 돌리려면 고사양 서버가 필요
2. **Master-Agent 구성** — 여러 서버(agent)에 job을 동시에 분배해 병렬 실행
3. **증분 빌드(Incremental Build)** — 코드를 점진적으로, 자주 빌드
4. **의존성 캐싱(Caching Dependencies)** — 매번 Maven/Gradle/Ant 의존성을 다시 다운로드하면 리소스가 낭비되므로, 캐시를 활성화해 다음 빌드부터는 캐시에서 바로 가져오게 함
5. **Docker 컨테이너 활용** — 여러 컨테이너로 빌드 프로세스를 병렬 실행

### 테스트 개선
- 통합·배포는 자동화됐지만 테스트가 수동이면 전체 CI/CD가 느려진다 — 효과적인 자동화 테스트 스크립트 작성 필요.
- 병렬 테스트 실행, 회귀 테스트(regression test), 코드 커버리지 확인, **fail-fast 전략** 적용, 환경에 충분한 리소스 할당 등으로 테스트 자동화를 개선.

### 파이프라인 확장(Scaling)
- 스케일링은 파이프라인이 더 많은 트래픽·큰 코드베이스를 느려짐 없이 처리하게 하는 것 — Jenkins 서버에 더 많은 리소스를 할당해 여러 프로젝트를 동시에 처리 가능하게 함.
- **Horizontal Scaling** — 클라우드에서 Jenkins가 설치된 새 VM을 자동으로 추가 프로비저닝(Auto Scaler)
- **Vertical Scaling** — 기존 서버의 자원(CPU/메모리)을 늘림
- **동적 프로비저닝(Dynamic Provisioning)** — 클라우드에서 Jenkins Agent를 필요 시 자동 생성
- **로드 밸런싱** — HAProxy 같은 로드밸런서로 Active-Passive Jenkins 환경 구성 — Active 서버가 안 되면 Passive 서버가 활성화되어 요청 처리
- **오토 스케일링** — 동적 프로비저닝을 통해서만 가능

## 요약
- CI/CD 파이프라인은 병렬 빌드·Master-Agent 구성·의존성 캐싱·Docker 컨테이너로 빌드 속도를 높이고, 자동화 테스트(병렬 실행·fail-fast)로 테스트 병목을 줄이며, Horizontal/Vertical Scaling과 로드밸런싱·오토스케일링으로 대규모 트래픽에 대응하도록 확장할 수 있다.

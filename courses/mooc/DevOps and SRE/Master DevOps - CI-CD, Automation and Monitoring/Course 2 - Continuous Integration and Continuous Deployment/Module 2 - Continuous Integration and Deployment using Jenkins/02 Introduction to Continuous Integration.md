# Introduction to Continuous Integration

## 개요
- Continuous Integration(CI)의 정의와 전통적 통합과의 비교, 중요성, 대표 도구를 설명.

## 내용
### Continuous Integration이란
- **Integration**은 코드를 자주 컴파일·테스트·패키징하며 빌드하는 과정.
- **Continuous**는 오래 기다리지 않고 코드를 작성하는 즉시 자주 통합하는 것을 의미.
- 수동으로 반복하면 시간이 오래 걸리므로 **자동화 도구**를 사용해 팀원이 버전 관리(Git, GitHub, GitLab, Bitbucket 등)에 커밋할 때마다 컴파일·테스트·빌드를 자동 수행한다.
- Maven 같은 빌드 도구 자체는 GitHub에서 코드를 가져오는 기능이 없다 — 이를 위해 CI 도구(Jenkins 등)가 필요하다.

### 전통적 통합 vs Continuous Integration
- 전통적 통합: 며칠간 코드를 쌓아두고 한 번에 빌드 → 파일 충돌, 라이브러리 불일치, 취약점 위험 증가 (통합 간격이 클수록 리스크·충돌 증가)
- CI: 작은 기능 단위로 자주(하루에도 여러 번) 통합 → 간격이 작을수록 충돌·리스크 감소

### CI의 중요성
1. **조기 이슈 발견** — SDLC 후반에 이슈를 발견할수록 비용·리스크가 크므로, 조기 발견이 수정 비용을 낮춘다.
2. **품질 향상** — 매번 새로 작성한 코드를 이전 코드와 지속적으로 통합·테스트하므로 전체 코드 품질이 개선된다.
3. **생산성 향상** — 자동화로 사람의 실수가 줄어 생산성과 팀 협업이 함께 향상된다.

### 대표 CI 도구
- **Jenkins** — 오픈소스, 가장 인기 있는 통합 도구
- GitLab CI(유료), Codeship, Travis, Bamboo(사실상 단종), Team City, GitHub Actions(오픈소스)
- 클라우드 제공자: AWS CodePipeline, Azure Pipelines(유료)

### Jenkins가 더 인기 있는 이유
- 오픈소스라 누구나 무료로 바로 다운로드해 사용 가능 (GitLab CI, Bamboo, Travis 등은 유료이거나 비싸다).
- Capital One, AT&T, JPMorgan, Comcast, Cisco, Lockheed 등 대기업들이 실제로 Jenkins를 사용.

## 요약
- CI는 자동화 도구를 이용해 코드를 자주 작은 단위로 통합·테스트함으로써 이슈를 조기에 발견하고 품질·생산성을 높이며, 오픈소스라는 강점 덕분에 Jenkins가 업계에서 가장 널리 쓰이는 CI 도구다.

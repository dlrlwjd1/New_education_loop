# Plugin Management in Jenkins

## 개요
- Jenkins 플러그인의 역할, 종류, 베스트 프랙티스, 자주 쓰이는 플러그인 목록을 설명.

## 내용
### 플러그인이란
- Jenkins 아키텍처를 확장하는 작은 확장 도구/기능. Jenkins는 플러그인 없이는 불완전하다.
- 약 1900개 이상의 플러그인이 있으며, SonarQube, Slack, Git, Maven, Docker, Ansible, Python, AWS/Azure 등 다양한 도구와의 통합을 가능하게 한다.
- 기본(base) Jenkins에 플러그인을 더해 자신의 DevOps 요구에 맞는 커스터마이징된 플랫폼을 만들 수 있다.

### 플러그인 종류
- **빌드 관련** — Maven, Gradle
- **배포 관련** — Docker, Ansible, AWS
- **파이프라인 관련** — Build Pipeline(기본 포함), Blue Ocean
- **버전 관리 관련** — Git/GitHub(기본 포함), GitLab, Mercurial, TFS, Subversion
- **테스트 관련** — JUnit, TestNG
- **모니터링 관련** — Prometheus, Grafana

### 베스트 프랙티스
1. 플러그인을 설치한 뒤에는 **정기적으로 업그레이드**할 것 (다운로드만 하고 방치하는 경우가 흔함)
2. 필요한 플러그인만 사용하고, 필요하면 스크립트를 직접 작성해 플러그인 사용을 최소화(일부 조직은 플러그인 사용 자체를 제한하기도 함)
3. Jenkins 서버 백업 전용 플러그인(Thin Backup 등)을 활용해 정기 백업
4. 새 플러그인은 반드시 테스트 후 사용, 필요하면 직접 커스텀 플러그인 제작 가능

### 자주 쓰이는 플러그인
- Git plugin, Maven plugin, Kubernetes plugin, Docker plugin, Credential Store plugin, Pipeline plugin, JUnit plugin
- 이 중 일부(Git, Pipeline 등)는 Jenkins에 기본 포함되어 있고, Kubernetes·Credential·Docker 플러그인 등은 별도 설치가 필요하다.

## 요약
- Jenkins 플러그인은 빌드·배포·파이프라인·버전관리·테스트·모니터링 등 전 영역에서 Jenkins 기능을 확장하며, 필요한 만큼만 설치해 정기적으로 업그레이드하고 백업하는 것이 안정적인 운영의 핵심이다.

# Why Linux for DevOps?

## 개요
- 운영체제(OS)의 기본 개념과 Linux가 DevOps 환경에서 지배적으로 쓰이는 이유, 배포판(distro) 선택 기준을 설명.

## 내용
### 운영체제 비교
- **Windows** — 사용자 친화적, GUI 중심, 폭넓은 소프트웨어 호환성 (비즈니스 환경에 익숙)
- **macOS/iOS** — 안정적·보안 우수, 커스터마이징은 제한적
- **Linux** — 오픈소스, 고도로 커스터마이징 가능, 경량 — 대부분의 서버·컨테이너·클라우드 플랫폼이 이 위에서 동작
- **Chrome OS** — 웹 중심 작업용, DevOps와는 관련성 낮음

### Linux 개요
- 1991년 Linus Torvalds가 만든 Unix 기반 오픈소스 OS. 무료·안정적·강력하며 스마트폰부터 슈퍼컴퓨터까지 구동한다.
- 세계 top 500 슈퍼컴퓨터의 100%가 Linux 기반.

### Linux의 계층 구조
1. Hardware — CPU, 메모리, 스토리지, 디바이스
2. Kernel — OS의 핵심(brain), 하드웨어·메모리·프로세스·디바이스 드라이버 직접 관리
3. Shell — 사용자가 명령어로 시스템과 상호작용하는 계층
4. Utilities/Applications — 파일 편집, 디렉터리 탐색, 서비스 관리 등 실제 작업 수행

### Linux가 DevOps에 적합한 이유
- **오픈소스** — 무료, 폭넓은 지원, 커널까지 깊이 커스터마이징 가능 → 자동화·스크립트·커스텀 환경에 이상적
- **DevOps 도구와의 궁합** — Shell Scripting, Ansible, Jenkins, Cron jobs 등과 매끄럽게 연동
- **강력한 권한 모델** — 서버·프로덕션 환경에 본질적으로 안전
- **경량성** — 최소 리소스로 실행 가능 → 컨테이너·클라우드 서버·VM에 이상적 (Docker 대부분이 Linux 기반, Kubernetes도 Linux 환경에서 가장 잘 동작)

### Linux 배포판(Distro)
- **Debian 계열** — Ubuntu, Debian, Linux Mint (안정성·사용 편의성)
- **Red Hat 계열** — RHEL, CentOS, Fedora (엔터프라이즈·프로덕션 환경에서 많이 사용)
- **Arch 계열** — Arch Linux, Manjaro (완전한 제어, 롤링 업데이트, 숙련자 선호)
- **독립 배포판** — Gentoo, Solus (고급 사용자용, 처음부터 빌드)

### 배포판 선택 가이드
- 입문자: Ubuntu, Linux Mint (설치 쉽고 커뮤니티 지원 좋음)
- 커맨드라인에 익숙한 경우: Debian, Fedora
- 내부 구조까지 파고들고 싶다면: Arch, Gentoo
- 개인용: GUI가 있는 Ubuntu Desktop, Mint
- DevOps/서버 작업: Ubuntu Server, CentOS, Debian (CLI 중심, 경량)

## 요약
- Linux는 오픈소스·경량·강력한 권한 모델 덕분에 DevOps 인프라의 사실상 표준 OS이며, 목적(학습용/서버용)에 맞는 배포판을 고르는 것이 중요하다.

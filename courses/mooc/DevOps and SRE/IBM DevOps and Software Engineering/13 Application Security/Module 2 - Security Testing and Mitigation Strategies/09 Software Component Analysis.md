# Software Component Analysis

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/application-security-for-developers-devops/lecture/kR9QZ/software-component-analysis)

## 개요
- 애플리케이션에 사용된 오픈소스 구성 요소·의존성을 파악하는 **SCA(Software Component Analysis)**의 특징, 4가지 목표, 산업 표준, 그리고 대표 SCA 도구들을 정리.

## 내용
### SCA란
- 오픈소스 소프트웨어 사용이 대부분 분야에서 확대되면서 구성 요소를 그 어느 때보다 추적해야 함 — 오픈소스 개발의 잠재적 이슈와 취약점으로부터 비즈니스를 안전하게 지키는 것이 점점 더 중요해지고 있음.
- SCA는 애플리케이션에서 어떤 오픈소스 구성 요소와 의존성이 사용되는지 판단하는 과정 — 소프트웨어 개발 워크플로우 전반에 SCA 도구를 사용해 임포트한 라이브러리나 의존성이 코드에 보안 위험이나 법적 컴플라이언스 문제를 일으키지 않도록 보장 가능. SCA 도구를 소프트웨어 개발 워크플로우에 적절히 통합하는 것은 코드의 보안과 무결성을 높이는 큰 걸음.

### SCA의 주요 특징
- SCA는 코드에 연결된 모든 의존성을 찾음 — 인지하지 못했을 수 있는 것들까지 포함. 예: Flask를 임포트하면 필요하지 않을 수 있는 의존성을 필요로 하고 설치할 수 있음. 취약하지 않은 버전을 사용하고 있더라도, Flask가 사용하는 의존성 중 하나가 취약할 수 있음.
- 기업에서 일한다면, 사용하는 라이브러리가 **GNU General Public License(GPL 라이선스)**를 포함하지 않는지 확인해야 함 — GPL 라이선스 라이브러리를 링크하면 소스 코드를 공개해야 할 수 있음. 오픈소스 환경이라면 문제가 없지만, 제품의 소스 코드를 공개하고 싶지 않다면 곤란한 상황에 처함 — 모든 기밀 정보를 넘겨주게 됨.
- 전반적으로 SCA는 개발자에게 사용하는 오픈소스 구성 요소의 잠재적 보안 결함에 대한 가시성과 통제력을 제공.

### SCA의 4가지 목표
1. 모든 오픈소스 구성 요소를 발견하고 추적해야 함.
2. 위험을 줄이기 위해 오픈소스 라이선스 컴플라이언스를 추적해야 함.
3. 오픈소스 취약점을 식별해야 함.
4. 상황과 요구사항에 따라 다양한 스캔을 실행해야 함.

### 소프트웨어 구성 요소 식별을 위한 3가지 산업 노력
- **NIST CPE Dictionary** — 제품의 CPE(Common Platform Enumeration)를 위한 중앙화된 데이터베이스.
- **SWID Tags(Software Identification Tags)** — 상업용 소프트웨어를 기술하는 표준.
- **Package URL 명세** — 예: `scheme:type/namespace/name@version?qualifiers#subpath` 형태의 문자열.

### 소프트웨어 구성 요소 검증 표준
- **OWASP Software Component Verification Standard** — 소프트웨어 공급망 내 위험을 줄이기 위한 지속 가능한 프레임워크를 구축하는 커뮤니티 지원 노력.
- **SLSA(Supply-chain Levels for Software Artifacts, "살사"로 발음)** — 표준과 통제를 구현해 무결성을 향상시키고 변조를 방지하는 보안 프레임워크를 제공.

### 인기 있는 SCA 도구 4가지
- **GitHub SCA** — GitHub.com 사용 중 의존성 패키지와 취약점을 확인.
- **Dependency-Check**(OWASP) — 프로젝트 의존성 내 취약점 확인.
- **Dependency-Track**(OWASP) — 소프트웨어 공급망 내 위험 식별.
- **Snyk** — 코드베이스를 분석해 보안, 코드 품질, 라이선싱을 평가.

## 요약
- SCA는 애플리케이션의 오픈소스 구성 요소와 의존성을 발견해 보안·라이선스 컴플라이언스 위험을 관리하기 위한 과정으로, 코드에 연결된 모든 의존성(GPL 라이선스 여부 포함)을 찾아 소스 코드 공개 위험을 방지하는 데 도움을 주며, NIST CPE·SWID·Package URL 같은 산업 식별 표준과 OWASP Software Component Verification Standard·SLSA 같은 검증 표준을 따르고, GitHub SCA·OWASP Dependency-Check/Dependency-Track·Snyk 같은 도구로 오픈소스 구성 요소를 발견·추적·검증할 수 있다.

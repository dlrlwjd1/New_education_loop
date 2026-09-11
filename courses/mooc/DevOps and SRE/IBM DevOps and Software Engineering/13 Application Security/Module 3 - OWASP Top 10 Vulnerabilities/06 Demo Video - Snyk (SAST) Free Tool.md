# Demo Video: Snyk (SAST) Free Tool

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/application-security-for-developers-devops/lecture/DNweH/demo-video-snyk-sast-free-tool)

## 개요
- 오픈소스 SAST(Static Application Security Testing) 도구 **Snyk**로 GitHub 저장소를 스캔해 취약점을 찾아내고 결과를 해석하는 과정을 실제 데모로 시연.

## 내용
### Snyk 개요
- Snyk는 개발자 보안 플랫폼을 제공하는 오픈소스 정적 애플리케이션 보안 테스트(SAST) 도구.
- 개발 도구, 워크플로우, 자동화 파이프라인에 직접 통합함으로써 팀이 코드·의존성·컨테이너·인프라 내 보안 취약점을 식별·우선순위화·해결하기 쉽게 만들어줌.
- 모든 개발자의 도구 상자에 보안 지식을 더해주며, 시장을 선도하는 애플리케이션과 보안 인텔리전스가 이를 뒷받침.

### 데모 절차
1. **계정 생성** — GitHub 저장소의 소프트웨어 프로젝트를 스캔하려면 먼저 Snyk 계정이 필요. snyk.io에 로그인해 무료 계정 생성.
2. **GitHub 연동** — GitHub를 선택하고 Next step 진행. 세 번째 단계에서 Configure, Automation Settings, Authenticate 항목을 모두 체크하고 Authenticate GitHub 클릭 — Snyk와 GitHub가 성공적으로 연결됨.
3. **저장소 가져오기** — Snyk는 GitHub 저장소 내 취약점을 스캔. 스캔할 저장소가 없다면 저장소를 가져와(import) 취약점을 분석 가능 — Monitor a public repository 클릭 후 `GitHub teacher/GitHub-slideshow`를 입력하고 Add repo, 이어서 Import One repository 클릭.
4. **결과 확인** — 임포트 작업이 완료되면(다소 시간이 걸릴 수 있음) 스캔된 프로젝트 항목 앞의 `>` 기호를 클릭 — 예시에서는 `Gemfile.lock` 파일 안에서 27개의 취약점 이슈가 발견됨. Ruby 프로젝트의 `Gemfile.lock`은 Python 프로젝트의 `requirements.txt`에 해당하며, 프로젝트가 의존하는 모든 패키지 이름을 담고 있음 — 이 중 일부 패키지에 알려진 취약점이 있으면 애플리케이션도 취약해짐.
5. **세부 확인** — 프로젝트의 `Gemfile.lock` 파일을 클릭해 개요를 확인. 아래로 스크롤하면 이슈 목록이 보이고, 오른쪽 패널에서 취약점의 심각도 점수, 수정 가능성(fixability), 익스플로잇 성숙도(exploit maturity), 상태를 확인 가능.
6. **재테스트와 수정** — Retest Now 링크를 클릭하면 Snyk가 동일한 취약점에 대해 재테스트를 수행. 유료 버전에서는 클릭 한 번으로 취약점을 수정 가능. Dependencies를 클릭하면 프로젝트의 소프트웨어 의존성 목록을 확인할 수 있음. Projects를 클릭하면 프로필 페이지로 돌아감.

## 요약
- Snyk는 개발자 보안을 위한 오픈소스 SAST 플랫폼으로, GitHub 계정과 연동해 저장소를 임포트하면 `Gemfile.lock` 같은 의존성 파일 내 취약점을 스캔해 심각도·수정 가능성·상태를 보여주고, 재테스트와 (유료 버전에서의) 자동 수정 기능을 통해 팀이 취약점을 식별·우선순위화·해결하도록 돕는다.

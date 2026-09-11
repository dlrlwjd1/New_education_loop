# DevOps Stages - Continuous Integration and Testing

## 개요
- 버전 관리 다음 단계인 Continuous Integration(CI)과 Continuous Testing을 도구와 함께 설명.

## 내용
### Continuous Integration (CI)
- 개발자가 스프린트/프로젝트 종료를 기다리지 않고 작은 변경을 매일(또는 매시간) 공유 저장소에 통합해 문제를 조기에 발견한다.
- **자동 빌드·테스트**: 커밋할 때마다 자동으로 빌드하고 기본 테스트 스위트를 실행 — 구문 오류, 깨진 의존성을 즉시 포착
- **잦은 커밋·머지**: 작은 브랜치나 feature flag를 활용한 메인 브랜치 직접 커밋으로 하루에도 여러 번 통합
- **즉각적인 피드백**: 빌드/테스트 실패를 바로 알 수 있어 기억이 생생할 때 수정 가능

#### CI 도구
- **GitLab CI** — 저장소 관리에 내장, 파이프라인을 코드로 정의
- **Codeship** — 단순함 중심, 클라우드 제공자와 쉽게 연동 (스타트업에 적합)
- **Jenkins** — 대표적인 오픈소스 CI 도구, 수천 개 플러그인으로 빌드·보안 스캔·문서 생성·Kubernetes 배포까지 자동화
- **Bamboo** — Atlassian 제품, Jira·Bitbucket과 긴밀히 연동
- **Travis CI** — 오픈소스 프로젝트에 인기, 퍼블릭 저장소 무료 빌드
- **TeamCity** — JetBrains 제품, 복잡한 다중 파이프라인 관리에 강함

### Continuous Testing
- 코드가 통합되는 즉시 자동화된 테스트가 트리거되어 기능·성능·보안을 검증한다.

#### 테스트 도구
- **Selenium** — 브라우저 기반 테스트 자동화(클릭, 입력, 탐색 등 실사용자 행동 시뮬레이션)
- **Appium** — 모바일(Android/iOS) 테스트 자동화, 여러 기기 모델에서 동일 테스트 실행
- **JUnit** — Java 단위 테스트 프레임워크, 개별 클래스·메서드 검증
- **Cucumber** — BDD(Behavior-Driven Development) 지원, 자연어로 테스트 작성 가능 (예: "Given a user is logged in, When they click order, Then the order should be placed")
- **Postman** — API 테스트 자동화, 백엔드가 올바른 데이터를 반환하고 부하 상황에서도 성능을 유지하는지 검증

## 예시
- Cucumber 테스트 문장: `Given a user is logged in, When they click order, Then the order should be placed successfully.`

## 요약
- CI는 작고 잦은 통합과 즉각적 피드백으로 통합 지옥(merge chaos)을 방지하고, Continuous Testing은 그 통합 직후 자동으로 기능·성능·보안을 검증해 신뢰할 수 있는 DevOps 파이프라인의 기반을 만든다.

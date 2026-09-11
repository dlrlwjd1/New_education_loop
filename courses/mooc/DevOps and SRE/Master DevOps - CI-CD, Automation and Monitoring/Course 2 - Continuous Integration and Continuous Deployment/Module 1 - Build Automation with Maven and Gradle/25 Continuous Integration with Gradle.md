# Continuous Integration with Gradle

## 개요
- Gradle을 Jenkins, Travis, CircleCI 등 CI 도구와 통합하는 방법과 베스트 프랙티스를 설명.

## 내용
### Continuous Integration의 가치
- 개발자가 커밋한 최신 코드를 자동으로 가져와 하루에도 여러 번 빌드.
- 빠른 피드백(커밋 즉시 테스트·오류 알림), 통합 이슈 감소(자주 통합할수록 리스크·비용이 줄어듦).

### Jenkins와 통합
1. Jenkins에 **Gradle 플러그인** 설치
2. **Configure Tool** 섹션에서 Gradle 도구·버전 설정
3. Freestyle Job 또는 Pipeline Job을 만들어 Gradle task 정의
4. Post-build action으로 리포트를 트렌드 리포트로 변환하거나 Slack/이메일 알림 추가

### Travis와 통합
- `.travis.yml` 파일에 Gradle 세부사항과 가져올 코드를 정의
- Travis 대시보드를 GitHub 저장소와 연동 → 코드 가져오기 → Gradle 명령으로 자동 빌드 → 결과를 GitHub에 다시 반영

### CircleCI와 통합
- CircleCI에 컴파일·테스트·패키징 Gradle 명령을 추가
- `ci.gradle` 파일을 만들어 빌드 프로세스 전용 설정 추가

### 베스트 프랙티스
- 파이프라인 단계(stage)를 중복 작성하지 않기
- 스크립트를 직접 작성하기보다 Gradle 명령어 사용
- 최신·전용 플러그인과 라이브러리 사용
- Task별로 세밀한 설정 적용
- 의존성 검증(validate)하기

### 이점
- 대규모 프로젝트를 증분 방식으로 통합해 수동 작업 크게 감소
- 반복 테스트로 코드 품질 향상
- 여러 팀원이 버전 관리 도구에서 협업하고, CI 도구가 이를 가져와 자동으로 빌드

## 요약
- Gradle은 Jenkins(플러그인 설치+Job 설정), Travis(`.travis.yml`), CircleCI(`ci.gradle`) 등 주요 CI 도구와 매끄럽게 통합되며, 중복 없는 단계 구성과 최신 플러그인 사용 같은 베스트 프랙티스를 지키면 대규모 프로젝트에서도 빠르고 품질 높은 통합이 가능하다.

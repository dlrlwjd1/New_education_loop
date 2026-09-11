# Final Submission Checklist

> MOOC 실습 자료(Ungraded Plugin) · [원본 강의](https://www.mooc.org/learn/devops-capstone-project/ungradedWidget/3Daa2/final-submission-checklist)

## 개요
- DevOps 캡스톤 프로젝트를 제출하기 전, **Option 1: AI 채점 제출**과 **Option 2: 동료 채점 제출** 중 하나를 선택해 필요한 모든 GitHub URL·스크린샷·출력 파일을 준비했는지 확인하는 최종 체크리스트.

## 내용
### Option 1: AI 채점 제출(AI Graded Submission)
- 모든 필수 GitHub URL, 스크린샷, 출력 파일을 업로드해야 함 — 각 URL은 올바른 저장소 파일을 가리키고, 각 스크린샷은 요구된 보드 상태나 스토리 이동을 명확히 보여주며, 각 출력 파일은 예상된 터미널·cURL 결과를 담아야 함. AI 채점기가 이 산출물들을 기반으로 자동 평가.
- 주요 제출 항목(배점):
  - README.md의 공개 GitHub URL — 프로젝트명과 빌드 성공 후 배지 포함 (2점)
  - user-story.md의 공개 GitHub URL — 사용자 스토리 템플릿 (1점)
  - `planning-userstories-done`, `planning-productbacklog-done`, `planning-labels-done`, `planning-kanban-done` 스크린샷 — Agile 계획 각 단계 (각 1점)
  - setup.cfg의 공개 GitHub URL — nosetests/coverage/Flake8/Pylint 설정 (1점)
  - `rest-techdebt-done`, `read-accounts`, `list-accounts`, `update-accounts`, `delete-accounts` 스크린샷 — 각 스토리의 Done 이동 (각 1점)
  - `rest-create-done`, `rest-list-done`, `rest-read-done`, `rest-update-done`, `rest-delete-done` — 각 CRUD 기능의 cURL 명령과 출력 (각 2점)
  - `sprint2-plan` 스크린샷 (1점), `ci-workflow-done` GitHub Actions 실행 로그 (2점), `ci-kanban-done` 스크린샷 (1점), ci-build.yaml의 공개 URL (4점)
  - `__init__.py`의 공개 URL — Talisman 보안 헤더 설정 (1점), `security-headers-done` nosetests 전체 출력 (1점), `security-kanban-done` 스크린샷 (1점)
  - `sprint3-plan` 스크린샷 (1점), `kube-app-output` JSON 출력(포트 8080) (1점), `kube-docker-done`·`kube-kubernetes-done` 스크린샷 (각 1점)
  - Dockerfile의 공개 URL (2점), `kube-images` Docker 이미지 목록 출력 (2점), `kube-deploy-accounts` Kubernetes 배포 상세 (2점)
  - `pipelinerun.txt` — Tekton 파이프라인 전체 로그 (5점), `cd-pipeline-done` 스크린샷 (1점)

### Option 2: 동료 채점 제출(Peer Graded Submission)
- 스크린샷·파일·URL만 업로드하면 되며, Task 1~5로 그룹화됨 — 각 스크린샷이 올바른 보드 상태, 스토리 위치, 설정 파일, 출력을 명확히 보여주는지 확인.
- **Task 1(Agile 계획)**: 저장소 생성, 스토리 템플릿, 사용자 스토리, 백로그, 라벨, 칸반 스크린샷 (a~f, 각 1점).
- **Task 2(TDD RESTful 서비스)**: setup.cfg, 기술 부채 스토리, Read/List/Update/Delete 스토리 완료, 각 API의 cURL 요청·응답 (a~k, 각 1~2점).
- **Task 3(CI/보안)**: Sprint 2 계획, CI 워크플로우 성공, CI 배지, CI 스토리 완료, ci-build.yaml URL, 보안 코드·헤더·스토리 완료 (a~e, i~k, 1~4점).
- **Task 4(Kubernetes 배포)**: Sprint 3 계획, 앱 출력, Docker 컨테이너화 스토리, Dockerfile URL, 이미지 목록, Kubernetes 배포 상세, 배포 스토리 완료 (a~g, 1~2점).
- **Task 5(CD 파이프라인)**: Tekton 파이프라인 전체 로그(5점), CD 파이프라인 스토리 완료와 자동 배포 검증(1점).

## 요약
- 이 체크리스트는 지금까지의 모든 모듈(Agile 계획 → TDD 서비스 개발 → CI/보안 → Kubernetes 배포 → CD 파이프라인)에서 저장한 스크린샷·URL·출력 파일을 Option 1(AI 채점, 세분화된 항목별 URL·파일 제출)과 Option 2(동료 채점, Task별 스크린샷 묶음 제출) 중 하나의 형식으로 최종 정리해 제출하도록 안내한다.

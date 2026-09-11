# Getting Started with Git and GitHub

## 개요
- Git의 로컬 이력과 GitHub 협업 프로젝트 관리 흐름을 실습한다.

## 내용
- repository, working tree, staging area, commit과 branch를 구분하고 작은 논리 단위로 이력을 남긴다.
- clone·add·commit·status·log·branch·merge·pull·push로 일상 워크플로를 수행한다.
- fork와 pull request로 변경을 제안하고 issue, review, project board로 논의와 추적을 연결한다.
- 충돌은 양쪽 의도를 이해해 해결하고 비밀·생성 파일은 커밋하지 않는다.

## 예시
```bash
git clone URL
git switch -c fix/healthcheck
git add . && git commit -m "Fix health check timeout"
git push -u origin fix/healthcheck
```

## 요약
- 4개 모듈은 Git/GitHub 기초, 명령·프로젝트, 최종 프로젝트, Windows 선택 과정이다.

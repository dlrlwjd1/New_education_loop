# Module 5 Summary

> MOOC 읽기 자료 · [원본 강의](https://www.mooc.org/learn/devops-capstone-project/supplement/mFxSe/module-5-summary)

## 개요
- Module 5(자동화된 CD 파이프라인 구축)에서 배운 핵심 내용을 정리한 공식 요약.

## 내용
- 스프린트 작업을 시작하기 전에 관련 스토리를 스스로에게 배정하는 것이 필수적.
- 모든 작업은 새 브랜치를 만들어 진행하고, 테스트를 마친 뒤 완료되면 main 브랜치에 병합하는 것이 필수적.
- 배포 자동화의 다음 단계로 넘어가기 전에 모든 테스트 케이스가 통과해야 함이 필수적.
- 파이프라인이 사용할 워크스페이스를 만드는 것이 필수적.
- 파이프라인 실행 시 가장 먼저 실행되는 clone task는 Tekton Catalog의 `git-clone` task가 필요.
- GitHub 계정 정보는 `GITHUB_ACCOUNT` 환경변수를 통해 YAML 파일에 전달되므로, 파이프라인 실행 전 이를 갱신하는 것이 필수적.
- 파이프라인 YAML 파일은 파이프라인 실행 시 첫 번째로 실행될 clone task 정의를 포함.
- clone task 다음으로 lint task를 만들어야 하며, 코드를 린트하려면 flake8이 필요하므로 이를 설치하는 것이 필수적.
- 린팅은 코드의 구문·스타일 문제를 점검.
- 랩 환경은 일시적이고 만료 기간이 짧으므로, 로컬에서 이뤄진 모든 변경 사항은 커밋하고 브랜치에 푸시해야 나중에 언제든 다시 가져올 수 있음.
- Tekton Hub에는 nosetests용 task가 없으므로, 파이프라인에 단위 테스트를 포함하려면 직접 task를 작성해야 함.
- 애플리케이션이 Kubernetes에서 PostgreSQL을 데이터베이스로 사용하므로, 해당 서비스가 사용 가능한 상태여야 하는 것이 필수적.
- Docker 이미지를 OpenShift 클러스터에 배포하는 것이 cd-pipeline 실행의 마지막 task.
- 완료되면 스토리를 Done 컬럼으로 옮겨야 함.

## 요약
- Module 5는 브랜치 기반 작업과 테스트 통과 확인, 파이프라인 워크스페이스 생성, Tekton Catalog의 `git-clone` task와 직접 작성한 nose 단위 테스트 task, flake8 린팅, PostgreSQL 서비스 가용성, 그리고 OpenShift 배포로 마무리되는 cd-pipeline의 전체 구성 요소를 요약한다.

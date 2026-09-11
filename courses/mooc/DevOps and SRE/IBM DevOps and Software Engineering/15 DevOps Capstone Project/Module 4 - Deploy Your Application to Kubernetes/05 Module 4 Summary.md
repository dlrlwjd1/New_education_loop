# Module 4 Summary

> MOOC 읽기 자료 · [원본 강의](https://www.mooc.org/learn/devops-capstone-project/supplement/z1rKI/module-4-summary)

## 개요
- Module 4(Kubernetes 배포)에서 배운 핵심 내용을 정리한 공식 요약.

## 내용
- 스프린트 작업을 시작하기 전에 관련 스토리를 스스로에게 배정하는 것이 필수적.
- 특정 작업을 위한 코드 변경은 main 브랜치에 직접 하지 않고 새로 만든 브랜치에서 해야, main 브랜치에 있는 테스트되고 작동하는 코드가 방해받지 않음.
- Dockerfile 없이는 Docker 이미지를 만드는 다음 단계로 넘어갈 수 없음.
- 마이크로서비스의 Docker 이미지를 Kubernetes에 배포하는 방법.
- 이미지에 태그를 붙여 IBM Cloud 컨테이너 레지스트리에 푸시하는 것은 필수 — 배포 중에는 컨테이너 레지스트리에서 그 태그로 이미지를 가져오게 됨.
- 랩 환경은 일시적이고 짧은 만료 기간을 가지므로, 모든 로컬 변경 사항은 커밋하고 브랜치에 푸시한 뒤 pull request로 main 브랜치에 병합해야 나중에 언제든 다시 가져올 수 있음.
- 애플리케이션이 Kubernetes에서 PostgreSQL을 데이터베이스로 사용하므로, 제공되는 Kubernetes 매니페스트로 먼저 postgres를 배포하는 것이 필수적.

## 요약
- Module 4는 브랜치 기반 작업, Dockerfile 작성과 이미지 빌드, IBM Cloud 컨테이너 레지스트리로의 태그·푸시, 일시적 랩 환경에서의 pull request를 통한 변경 사항 보존, 그리고 PostgreSQL을 먼저 배포한 뒤 마이크로서비스를 Kubernetes에 배포하는 전체 과정을 요약한다.

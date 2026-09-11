# Course Introduction

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/continuous-integration-and-continuous-delivery-ci-cd/lecture/HjVWC/course-introduction)

## 개요
- IBM Research의 John Rofrano가 소개하는 코스 오리엔테이션 — CI/CD 자동화 파이프라인을 만드는 스킬을 다루며, 코스의 전체 구성(CI → CD/Tekton → OpenShift Pipelines·GitOps)을 미리 설명.

## 내용
### CI/CD가 필요한 배경
- 2009년 Velocity 콘퍼런스에서 John Allspaw와 Paul Hammond가 발표한 유명한 강연 "10+ Deploys per Day: Dev and Ops Cooperation at Flickr" 이후, 기업들은 더 빠르고 더 신뢰할 수 있게 배포하는 방법을 고민해왔음.
- 오늘날 일부 기업은 하루에도 수백 번씩 여러 개발/테스트/프로덕션 환경에 변경 사항을 배포함 — 이를 가능하게 하는 것이 **DevOps 사고방식**이며, DevOps의 핵심 원칙 중 하나가 **소프트웨어 배포 자동화**.
- 다만 배포 횟수 자체는 중요한 게 아님 — 목표는 **비즈니스에 필요한 속도로 배포**하는 것이며, 그 배포는 신뢰할 수 있고 반복 가능해야 하고, 이를 위해 자동화가 필요함. 이것이 CI/CD가 등장하는 지점.

### CI/CD의 핵심 지표 — 평균 리드 타임(Mean Lead Time)
- CI/CD는 결국 **평균 리드 타임**(아이디어에서 프로덕션까지 걸리는 시간)에 관한 것이며, 이는 **릴리스 빈도**(얼마나 자주 변경을 전달할 수 있는가)에 의해 제한됨.

### 코스 구성 미리보기
- **지속적 통합(Continuous Integration, CI)**: 일련의 테스트를 통과한 후 모든 개발자의 변경 사항을 지속적으로 메인 브랜치에 통합해, 잠재적으로 배포 가능한 코드를 만드는 과정. 소셜 코딩(social coding)의 이점과 Git Feature Branch 워크플로우를 배우고, 인기 있는 CI 도구들을 개괄한 뒤 **GitHub Actions**로 CI 파이프라인을 만드는 법을 깊이 다룸.
- **지속적 전달(Continuous Delivery, CD)**: 모든 변경 사항을 프로덕션과 유사한 환경에 전달함으로써 코드가 언제든 신속하고 안전하게 프로덕션에 배포될 수 있도록 보장하는 소프트웨어 개발 규율 — 즉 메인 브랜치는 항상 배포 준비가 되어 있어야 함. CD의 이점과 인기 있는 CD 도구를 개괄한 뒤, **Tekton**을 사용해 파이프라인을 작업 단위(task by task)로 구축하는 법을 깊이 다룸 — Tekton으로 Kubernetes 클러스터 안에서 직접 배포를 자동화할 수 있으며, 실습에서는 파이프라인을 **OpenShift**에 배포.
- **DevOps와 GitOps with OpenShift 모듈**: **OpenShift Pipelines** 기능을 배우고 활용 — OpenShift 개발자 관점(perspective) 안에서 CI/CD 워크플로우를 정의·관리하는 직관적인 UI를 제공. 코드를 한 줄도 쓰지 않고 실제 파이프라인을 작성하는 법을 배움 — OpenShift Pipelines는 캔버스에서 작업과 파이프라인을 만드는 동안 백그라운드에서 Tekton 코드를 자동으로 생성해 이 과정을 단순화함. 마지막으로 실습에서는 앞서 Tekton으로 직접 만들었던 파이프라인을 OpenShift Pipelines UI만으로 재구성.

### 학습 방식
- 영상을 보고, 실습에 몰입하고, 퀴즈를 풀고, 포럼에서 동료들과 교류할 것을 권장 — 소프트웨어 엔지니어링은 팀 스포츠이며 협업이 장려됨.

## 요약
- 이 코스는 매번 배포할 때마다 반복 가능하고 재현 가능한 소프트웨어 전달을 달성하기 위해, CI(GitHub Actions 기반 브랜치 워크플로우와 자동 통합)와 CD(Tekton 기반 파이프라인 구축과 Kubernetes/OpenShift 배포), 그리고 OpenShift Pipelines UI를 활용한 코드 없는(no-code) CI/CD·GitOps 구성까지 단계적으로 다룬다.

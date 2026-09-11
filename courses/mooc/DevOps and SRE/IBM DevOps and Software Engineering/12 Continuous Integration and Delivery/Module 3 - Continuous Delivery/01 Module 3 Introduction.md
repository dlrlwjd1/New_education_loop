# Module 3 - Continuous Delivery

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/continuous-integration-and-continuous-delivery-ci-cd/lecture/zithR/module-3-continuous-delivery)

## 개요
- Module 3의 도입부 — CD의 목표·이점·핵심 원칙·모범 사례부터 시작해, Tekton을 이용한 실제 파이프라인 구축과 OpenShift 배포까지 이번 모듈에서 다룰 전체 여정을 안내.

## 내용
- CD(Continuous Delivery)의 목표, 이점, 핵심 원칙, 모범 사례를 탐구하는 것으로 시작.
- CI/CD 파이프라인의 요구사항과, 밀접하게 관련된 프로세스인 Continuous Delivery와 Continuous Deployment의 차이를 다룸.
- 인기 있는 CD 도구들을 배우고 기능과 이점을 비교·대조해 자신에게 맞는 최적의 도구를 고르는 법을 배움.
- 이후 Kubernetes 클러스터 안에서 바로 실행되는 클라우드 네이티브 CD 도구인 **Tekton**을 심층적으로 탐구 — Event, Trigger, Pipeline, Task, Step이라는 핵심 구성 요소와 이들이 어떻게 함께 작동해 완전한 CD 파이프라인을 만드는지 알아봄.
- 아래에서 위로: Tekton Task로부터 파이프라인을 구축하고, 파이프라인에 파라미터를 전달하고 트리거를 만들며, GitHub·GitLab 같은 선호하는 버전 관리 시스템으로 만든 웹훅으로부터 파이프라인 실행을 시작하는 법, 그리고 카탈로그에 필요한 것이 없을 때 자신만의 커스텀 Task를 작성하는 법을 배움.
- 마지막으로 CD 파이프라인의 마지막 단계로 컨테이너 이미지를 빌드해 OpenShift에 배포하는 법을 배움.
- 실습에서는 영상에서 배운 모든 것을 구현 — 저장소를 클론하고, 품질 검사와 단위 테스트를 수행하고, 이미지를 빌드해 Kubernetes에 배포하는 완전히 작동하는 CD 파이프라인을 만드는 과정을 단계별로 진행. 최종적으로 자신의 프로젝트에 그대로 사용하거나 수정해서 쓸 수 있는 완전히 작동하는 파이프라인을 갖게 됨.

## 요약
- Module 3은 CD의 개념·원칙·도구 비교로 시작해 Tekton의 Event·Trigger·Pipeline·Task·Step 구조를 심화하고, Task 작성부터 트리거·웹훅 연동, 컨테이너 이미지 빌드와 OpenShift 배포까지 이어지는 완전한 CD 파이프라인 구축 실습으로 마무리된다.

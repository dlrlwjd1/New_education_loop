# Summary & Highlights: Implementing Pipelines with Tekton

> MOOC 읽기 자료 · [원본 강의](https://www.mooc.org/learn/continuous-integration-and-continuous-delivery-ci-cd/supplement/2hVzI/summary-highlights-implementing-pipelines-with-tekton)

## 개요
- Module 3의 Tekton 관련 강의(개념/물리적 구성 요소, 파이프라인 구축, 트리거, 카탈로그, 커스텀 Task, 이미지 빌드·배포) 전체를 정리한 공식 요약.

## 내용
- Tekton의 개념적 구성 요소는 Event, Trigger, Pipeline, Task, Step.
- Tekton의 물리적 구성 요소는 Kubernetes CRD(Custom Resource Definition).
- Task를 참조하고 필요한 파라미터를 전달함으로써 Tekton 파이프라인을 만들 수 있음.
- EventListener는 외부 이벤트를 수신 대기하고, TriggerBinding은 그 이벤트에 반응해 파라미터를 바인딩하며, TriggerTemplate은 그 파라미터를 파이프라인에 전달하는 PipelineRun을 생성.
- Tekton Catalog에는 CI/CD 파이프라인에 사용할 수 있는 재사용 가능한 Task들이 담겨 있음.
- PipelineRun은 워크스페이스를 PersistentVolumeClaim에 매핑해야 함.
- Task 안에서 기존 쉘 스크립트를 사용할 수 있고, Task에 설정 정보를 전달하기 위해 환경 변수를 정의할 수 있음.
- 병렬 Task 이후에 어떤 Task를 실행하려면 `runAfter` 필드에 그 병렬 Task들을 모두 지정해야 함.
- 명령이나 YAML 매니페스트를 이용해 애플리케이션을 환경에 배포할 수 있음.

## 요약
- Module 3의 Tekton 부분은 Event·Trigger·Pipeline·Task·Step이라는 개념과 이를 구현하는 Kubernetes CRD, EventListener→TriggerBinding→TriggerTemplate→PipelineRun으로 이어지는 트리거 흐름, Tekton Catalog의 재사용 가능한 Task 활용, 워크스페이스의 PVC 매핑, 기존 스크립트와 환경 변수를 활용한 커스텀 Task 작성, `runAfter`를 이용한 병렬/순차 실행 제어, 그리고 명령 또는 매니페스트 기반의 배포까지 Tekton으로 완전한 CD 파이프라인을 구축하는 데 필요한 모든 요소를 요약한다.

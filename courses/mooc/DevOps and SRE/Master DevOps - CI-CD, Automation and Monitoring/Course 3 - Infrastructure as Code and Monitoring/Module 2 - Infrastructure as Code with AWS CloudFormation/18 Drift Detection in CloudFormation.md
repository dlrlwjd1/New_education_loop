# Drift Detection in CloudFormation

## 개요
- CloudFormation Drift Detection의 정의, 발생 원인, 수행 범위, 상태 코드, 해결 방법을 정리.

## 내용
### Drift Detection이란
- 실제 AWS 리소스의 구성과 CloudFormation 템플릿에 정의된 기대 구성 사이의 차이를 식별하는 프로세스.
- **발생 원인**: 누군가 AWS 콘솔, CLI, SDK 등 CloudFormation 외부의 자동화 스크립트를 통해 리소스를 직접 수정했을 때 발생.

### 수행 범위
- **전체 스택(Entire Stack)** — 스택 내 모든 리소스에 대해 drift 여부를 확인해 스택 전체의 일관성을 보장.
- **개별 리소스(Individual Resource)** — 특정 리소스만 drift 여부를 확인해 집중적인 디버깅에 활용.

### Drift 상태 코드
- **전체 스택 상태**
  - `IN_SYNC` — 모든 리소스가 템플릿과 일치.
  - `DRIFTED` — 하나 이상의 리소스가 변경됨.
  - `NOT_CHECKED` — 해당 스택에 대해 아직 drift detection이 실행되지 않음.
- **리소스별 상태**
  - `IN_SYNC` — 리소스가 템플릿과 정확히 일치.
  - `MODIFIED` — 리소스는 존재하지만 일부 속성/설정이 수동으로 변경됨(예: EC2 인스턴스 타입 변경 감지).
  - `DELETED` — 템플릿에는 정의돼 있지만 리소스가 더 이상 존재하지 않음.
  - `NOT_CHECKED` — 해당 리소스에 대해 detection이 실행되지 않아 상태를 알 수 없음.

### 수행 방법
1. CloudFormation 콘솔에서 스택을 선택하고 **Detect drift**를 클릭하거나 CLI 명령으로 실행.
2. 결과를 검토 — `IN_SYNC`, `MODIFIED`, `DELETED` 등의 상태와 함께 리소스별 변경 내용을 확인.

### Drift 해결 방법
1. **템플릿 재적용(Reapply the template)** — 템플릿의 내용을 클라우드에 다시 적용해 실제 리소스를 템플릿에 맞춤.
2. **템플릿 업데이트** — 반대로 클라우드의 현재 설정에 맞게 템플릿을 업데이트.
3. **Drift 수용(Accept)** — 변경이 의도된 것이라면 drift를 그대로 받아들일 수 있으나, 이 경우 CloudFormation 자체에는 그 사실이 기록되지 않으므로 별도로 추적·관리해야 함.

## 요약
- Drift Detection은 CloudFormation 외부에서 이루어진 수동 변경을 전체 스택 또는 개별 리소스 단위로 탐지해 IN_SYNC/MODIFIED/DELETED/NOT_CHECKED 상태로 보여주며, 발견된 drift는 템플릿 재적용·템플릿 업데이트·수용(별도 추적 필요) 중 하나로 해결한다.

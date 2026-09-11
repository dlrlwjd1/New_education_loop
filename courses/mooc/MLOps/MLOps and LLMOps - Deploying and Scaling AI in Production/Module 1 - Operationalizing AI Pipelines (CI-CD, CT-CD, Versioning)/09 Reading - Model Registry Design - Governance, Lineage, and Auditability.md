# "Model Registry Design: Governance, Lineage, and Auditability"

## 개요
- 앞선 3개 영상([06 Semantic Versioning](06%20Semantic%20Versioning%20for%20Models%2C%20Prompts%2C%20and%20Datasets.md), [07 Model Registries](07%20Model%20Registries%20-%20MLflow%2C%20W%26B%2C%20and%20Custom%20Systems.md), [08 Rollbacks and Lineage Tracking](08%20Rollbacks%20and%20Lineage%20Tracking%20for%20Experiment%20Safety.md))의 핵심 내용을 요약하는 리딩(30분). 각 단락에 외부 사이트로 연결되는 "Read more" 링크 포함, 새로운 핵심 내용은 크지 않음.

## 내용

### 시맨틱 버저닝 요약
- `major.minor.patch` 관례를 모델·프롬프트·데이터셋까지 확장 — 메이저는 breaking change(새 아키텍처/학습 패러다임), 마이너는 동일 작업에서의 성능 개선, 패치는 버그 수정이나 사소한 프롬프트 조정.
- 모델 가중치, 프롬프트 템플릿, 평가 데이터셋, 설정 파일 등 **모든 아티팩트에 일관된 버저닝**을 적용하면 재현성과 감사 요건을 지원하는 완전한 계보(lineage) 기록이 만들어짐.

### 모델 레지스트리 요약
- MLflow와 Weights & Biases 같은 모델 레지스트리는 생애주기 전반에서 모델 아티팩트를 저장·버전 관리·관리하는 중앙화된 저장소 역할.
- 두 플랫폼 모두 등록된 모델을 학습 데이터, 하이퍼파라미터, 평가 지표, 소스 코드 커밋에 연결하는 **완전한 계보 추적**을 제공.
- MLflow는 폭넓은 프레임워크 지원을 갖춘 오픈소스 셀프 호스팅 옵션, W&B는 더 풍부한 시각화·협업 기능을 갖춘 관리형 플랫폼 — 선택은 인프라 선호도와 팀 워크플로에 따라 달라짐.

### 롤백·계보 추적 요약
- 롤백과 계보 추적은 프로덕션 ML 시스템의 핵심 안전 메커니즘.
- 새로 배포된 모델의 성능이 저하되면 팀은 즉시 이전에 검증된 버전으로 되돌릴 수 있어야 하며, 이를 위해서는 레지스트리가 각 모델 버전과 그 메타데이터의 **불변 스냅샷(immutable snapshot)**을 유지해야 함.
- 계보 추적은 프로덕션의 각 예측을 그것을 만든 특정 모델 버전, 학습 데이터, 파이프라인 설정으로 연결해, 문제 발생 시 근본 원인 분석(root-cause analysis)을 가능하게 함.

## 요약
- 이 리딩은 시맨틱 버저닝(모델/프롬프트/데이터셋 전체 적용), 모델 레지스트리(MLflow vs W&B 선택 기준), 롤백·계보 추적(불변 스냅샷과 근본 원인 분석)이라는 앞선 3개 영상의 핵심 개념을 재확인하며, 세 요소가 함께 작동해야 신뢰할 수 있는 ML 릴리스 거버넌스가 완성됨을 강조한다.

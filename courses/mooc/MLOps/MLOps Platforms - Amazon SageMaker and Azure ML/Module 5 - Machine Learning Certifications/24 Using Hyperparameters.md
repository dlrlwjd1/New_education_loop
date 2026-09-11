# Using Hyperparameters

## 개요
- Azure ML Python SDK v1 노트북 예시로, `AutoMLConfig`의 핵심 하이퍼파라미터 튜닝 설정값들을 설명하는 3분 데모.

## 내용

### 노트북 기본 흐름
- pandas와 Azure SDK v1 임포트 → 데이터를 pandas로 가져와 정제 → 워크스페이스 구성 → 데이터를 학습/테스트로 분할 — 여기까지는 전통적인 머신러닝 모델과 동일.

### AutoML 학습 설정 — 주목해야 할 항목들
- **iteration timeout(분)**: 각 반복(iteration)에 소요되는 시간 — 하이퍼파라미터를 찾기 위해 컴퓨트를 얼마나 오래 실행할지 결정.
- **experiment timeout**: 모든 반복(즉 여러 하이퍼파라미터 튜닝 작업)을 통틀어 소요될 수 있는 최대 시간.
- **조기 종료(early stopping)**: 충분히 좋은 점수를 얻으면 그 시점에서 멈추고 해당 하이퍼파라미터 세트를 사용.
- **최적화 지표(metric)**: 이 튜토리얼에서는 **experiment correlation**을 사용 — 이 지표를 기준으로 자동 실행에서 가장 잘 맞는 모델을 선택.
- **featurization**: `auto`로 설정하면 결측 데이터 처리와 텍스트/숫자 변환을 자동으로 처리.
- **verbosity(상세도)**: 코드에서 얼마나 많은 계측(instrumentation)을 보고 싶은지.
- **cross validation 포함 여부**: 선택 가능한 하이퍼파라미터 중 하나.

### 실행과 결과 확인
- 이 모든 AutoML 설정을 하나의 딕셔너리로 모아 학습 작업(training job)에 전달·구성.
- 학습 작업을 실행하면 **실험(experiment)**으로 표시되며, 완료 후 실험 탭으로 돌아가 최적 모델을 확인 가능.

### 핵심 통찰
- 하이퍼파라미터 튜닝의 상당 부분은 수작업으로 하기엔 지루하고 시간이 많이 드는 일 — SDK를 통해 이를 호출하면 Azure가 직접 최적의 하이퍼파라미터를 탐색해 실험 탭에 결과를 보여주며, 그중 올바른 실험 실행(run)을 선택해 해당 모델을 배포할 수 있음.

## 예시
```python
# AutoML 설정 (개념 구조)
automl_settings = {
    "iteration_timeout_minutes": 10,
    "experiment_timeout_minutes": 60,
    "enable_early_stopping": True,
    "primary_metric": 'spearman_correlation',
    "featurization": 'auto',
    "verbosity": logging.INFO,
    "n_cross_validations": 5
}

automl_config = AutoMLConfig(task='regression',
                              training_data=train_data,
                              label_column_name='rating',
                              **automl_settings)

experiment = Experiment(ws, "automl-experiment")
run = experiment.submit(automl_config)
```

## 요약
- Azure AutoML의 하이퍼파라미터 설정(iteration/experiment timeout, early stopping, 최적화 지표, featurization, cross validation)을 딕셔너리로 구성해 SDK로 제출하면, 수작업 튜닝 없이도 Azure가 자동으로 최적 모델을 탐색해 실험 탭에서 확인·배포할 수 있다.

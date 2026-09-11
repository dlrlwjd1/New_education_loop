# Demo: Upgrading Model Versions with BentoML Serving

## 개요
- v1과 v2 두 모델을 **동일한 BentoML 서비스** 안에서 각각 별도의 엔드포인트(`/predict_house_price_v1`, `/predict_house_price_v2`)로 동시에 서빙해, 실시간 트래픽을 두 모델 사이에서 점진적으로 전환할 수 있게 하는 4분 데모.

## 내용

### 문제 상황: 두 모델을 어떻게 전환할까
- 이전 데모에서 v1, v2 두 모델을 각각 만들었지만, 실제 서비스에서는 실시간 트래픽이 들어오는 상황에서 두 모델을 즉시 전면 교체(swap)할 수 없음.
- 이는 마이크로서비스의 **블루-그린 배포(blue-green deployment)**와 유사한 문제 — BentoML에서는 이를 쉽게 해결 가능.

### 재설계된 아키텍처
- v1 모델로 가는 요청은 **v1 엔드포인트**로, v2 모델로 가는 요청은 **v2 엔드포인트**로 라우팅 — 단, 두 엔드포인트 모두 **동일한 BentoML 서빙 서비스**에 속함.

### 구현 (`model_service_v3.py`)
- 기존 BentoML 서비스 중지(Ctrl+C).
- 새 파일 `model_service_v3.py`: **두 모델(v1, v2)을 모두 참조** → 각각 러너(runner) 생성 → 두 개의 엔드포인트(라우트) 생성: `predict_house_price_v1`, `predict_house_price_v2`.
- 즉, v1과 v2의 서빙 코드를 **하나의 BentoML 서비스로 병합** — 장점: 두 엔드포인트가 같은 서비스에서 서빙되므로 사용 사례에 따라 트래픽을 쉽게 라우팅 가능.
- `bentoml serve model_service_v3.py` 실행 후 엔드포인트 새로고침 → 이전에는 하나의 엔드포인트만 있었지만, 이제는 **v1과 v2 두 엔드포인트**가 모두 표시됨.

### 테스트
- curl 명령으로 `predict_house_price_v1`과 `predict_house_price_v2` 각각에 요청 → 각각 다른 예측 결과를 정상적으로 수신.
- **핵심 포인트**: ML 모델의 엔드포인트(라우트)를 준비할 때 라우팅 구조를 신중하게 설계해야 함.

### 한계와 실제 프로덕션 고려사항
- 이 데모는 매우 기본적인 형태(단순히 v1/v2 엔드포인트를 나눈 것)이며, 실제 프로덕션에서는 이 방식이 충분하지 않을 수 있음 — 예를 들어 **모델 레이블링(labeling)**을 사용하거나, 두 모델을 **완전히 별도의 서비스로 배포**한 뒤 트래픽을 라우팅하는 방식이 필요할 수 있음.
- 모델이 크고 트래픽이 많으며 실시간 문제를 해결할수록, 이런 추가 인프라 투자가 정당화됨.

## 예시
```python
# model_service_v3.py (개념 구조) — 두 모델을 하나의 서비스로 병합
import bentoml
from bentoml.io import JSON

model_v1_ref = bentoml.sklearn.get("house_price_model_v1:latest")
model_v2_ref = bentoml.sklearn.get("house_price_model_v2:latest")

runner_v1 = model_v1_ref.to_runner()
runner_v2 = model_v2_ref.to_runner()

svc = bentoml.Service("house_price_service_v3", runners=[runner_v1, runner_v2])

@svc.api(input=JSON(), output=JSON(), route="predict_house_price_v1")
def predict_v1(input_data):
    result = runner_v1.predict.run(input_data)
    return {"predicted_price": result.tolist()}

@svc.api(input=JSON(), output=JSON(), route="predict_house_price_v2")
def predict_v2(input_data):
    result = runner_v2.predict.run(input_data)
    return {"predicted_price": result.tolist()}
```

```bash
bentoml serve model_service_v3.py --reload

# v1, v2 각각 호출
curl -X POST http://localhost:3000/predict_house_price_v1 -H "Content-Type: application/json" -d '{...}'
curl -X POST http://localhost:3000/predict_house_price_v2 -H "Content-Type: application/json" -d '{...}'
```

## 요약
- 이 데모는 v1·v2 두 모델을 하나의 BentoML 서비스(`model_service_v3.py`) 안에 각각 독립된 엔드포인트로 병합해, 실시간 트래픽을 끊김 없이 두 모델 버전 사이에서 라우팅할 수 있음을 보여주며, 이는 마이크로서비스의 블루-그린 배포와 유사한 개념이지만 실제 대규모 프로덕션에서는 모델 레이블링이나 완전히 분리된 서비스 배포 같은 더 정교한 인프라가 필요할 수 있음을 지적한다.

# Demo: Upgrade Python Flask App to Connect to BentoML for Online Serving

## 개요
- Flask 웹 앱을 만들어 BentoML의 `/predict` 엔드포인트와 연결하고, 청구 담당자가 CSV 파일을 업로드해 예측 결과를 받아보는 전체 프로젝트의 마무리 데모(6분). 캡스톤 프로젝트의 최종 아키텍처를 되짚어보며 마무리.

## 내용

### Flask 앱 구성
- 새 터미널 필요 — BentoML 서빙도 동시에 실행 중이어야 하므로 별도 터미널에서 Flask 앱 실행.
- 새 파일 `flaskapp.py` 생성 — 목표: **엔드포인트**를 만들어 BentoML의 `/predict` 엔드포인트로 **POST 요청**을 보내는 것. 요청에는 CSV 파일과 청구 ID 등 필요한 데이터가 포함됨.
- 응답 결과는 `results.html`(HTML 템플릿, UI 꾸미기 용도 — 실제 조직에서는 프론트엔드 엔지니어가 담당)로 렌더링.

### 실행 및 디버깅
- `python3 flaskapp.py` 실행 → **포트 5005**에서 서비스 시작 → 브라우저 접속 → 간단한 UI(청구 CSV 파일을 드래그 앤 드롭하는 화면).
- CSV 파일을 드래그 앤 드롭하자 오류 발생 → 디버깅: `results.html` 템플릿을 찾을 수 없다는 오류 → Flask 코드에서 렌더링 대상 파일명이 `result.html`로 되어 있었으나 실제 템플릿 파일명은 `results.html`(오타로 인한 `s` 누락) → 코드에서 오타 수정 후 새로고침 → 정상 동작.

### 결과 확인
- 백그라운드 동작 원리: Flask 앱이 BentoML의 `/predict` 엔드포인트를 호출 → 해당 엔드포인트에 있는 ML 모델(Isolation Forest)이 청구 금액, 서비스 수, 환자 나이, 제공자 ID, 마지막 청구 이후 경과일을 입력받아 예측 수행.
- **예측값 해석**: `-1` = 추가 조사(investigation)가 필요한 청구, `1` = 문제 없는(정상) 청구.
- 화면에는 각 청구 건별 예측 결과가 나열됨 → 청구 담당자는 `-1`로 표시된 청구만 골라 조사하면 되고, 나머지는 바로 승인 가능 — 예: 청구 ID `1010`이 `-1`로 나와 조사 대상으로 지정됨.
- 이 데모는 단순화된 데이터를 사용했지만, 실제로는 훨씬 많은 피처와 데이터가 있을 수 있으며, 그런 대규모 데이터를 사람이 수작업으로 검토하기는 매우 어려움 — 바로 이 지점에서 ML 모델이 유용하게 쓰임.

### 전체 아키텍처 재정리
1. 사용자가 포털을 통해 청구 제출 → 다수의 청구 건 누적.
2. BentoML로 서빙되는 ML 모델이 예측 수행(청구 업로드 UI를 통해 연결).
3. 승인(approved)된 청구는 즉시 지급.
4. `-1`(재검토 필요) 예측을 받은 청구는 **청구 재조사 부서**로 전달 → 추가 서류 요청 → 서류 제출 후 승인.
5. 모델은 과거의 다양한 청구 데이터를 담은 **데이터 레이크**에 기반해 학습·운영됨.
- 이 과정을 통해 코스 전체에서 다룬 도구들(모델 개발, MLflow, BentoML, Flask)을 하나의 실제 아키텍처로 통합해 완성함.

## 예시
```python
# flaskapp.py (개념 구조)
from flask import Flask, request, render_template
import requests

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def upload_claims():
    if request.method == "POST":
        file = request.files["claims_csv"]
        response = requests.post(
            "http://localhost:3000/predict",
            files={"file": file}
        )
        predictions = response.json()
        return render_template("results.html", predictions=predictions)
    return render_template("upload.html")

if __name__ == "__main__":
    app.run(port=5005)
```

```bash
python3 flaskapp.py
# http://localhost:5005 에서 CSV 업로드 UI 확인
```

## 요약
- 이 데모는 Flask 앱(`flaskapp.py`, 포트 5005)을 만들어 BentoML `/predict` 엔드포인트와 연결하고, 청구 CSV 업로드 → Isolation Forest 예측(`-1`=조사 필요, `1`=정상) → 결과 화면 렌더링까지의 전체 흐름을 시연하며, 사용자 제출 → ML 예측 → 승인/재조사 분기 → 데이터 레이크 기반 학습이라는 캡스톤 프로젝트의 전체 아키텍처를 완성한다.

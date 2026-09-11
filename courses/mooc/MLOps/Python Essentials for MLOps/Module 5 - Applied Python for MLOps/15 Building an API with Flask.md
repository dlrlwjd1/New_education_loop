# Building an API with Flask

## 개요
- Flask로 **실제 머신러닝 모델(ONNX 런타임 기반 RoBERTa 감성분석 모델)을 서빙하는 API**를 만드는 실습. `request.json`으로 요청 본문을 읽고, `jsonify`로 JSON 응답을 반환하며, `curl`로 API를 테스트하는 전체 흐름을 다룬다.

## 내용

### ONNX 런타임과 모델 로딩
- 이 예제는 **ONNX**(다른 프레임워크에서 만든 모델도 다룰 수 있는 런타임)를 사용 — 앱이 시작될 때 즉시 세션(session)을 생성해야 한다.
- **ONNX 방식은 모델 파일이 실제로 로컬 파일 시스템에 있어야 한다** (예시에서는 약 500MB 바이너리 파일) — Hugging Face의 동적 다운로드 방식과 대조되는 지점.

### 라우트 정의 — POST 전용
- `@app.route("/predict", methods=["POST"])`처럼 **`methods`를 지정해 POST 요청만 허용**한다.

### 요청 데이터 읽기 — `request.json`
- Flask에서 들어오는 요청 데이터를 다루려면 `from flask import request`로 임포트해야 한다.
- **`request.json`으로 이미 파싱된 JSON 본문에 접근** — 리스트 형태로 온다고 가정하고 `request.json[0]`처럼 첫 항목을 꺼내 쓴다.
- 강사는 이 API가 **입력 형식을 명확히 문서화하지 않은 점을 스스로 지적** — 실제로는 요청이 어디서 어떤 형태로 오는지 문서화가 필요하다고 짚음.

### 응답 반환 — `jsonify`
- Flask의 `jsonify` 헬퍼로 결과를 JSON 형태로 응답한다 (예: 감성이 긍정인지 여부를 `{"positive": true/false}`처럼 반환).

### 실행과 curl로 테스트
```bash
curl -X POST -H "Content-Type: application/json" \
  --data '["Flask is a very useful framework"]' \
  http://localhost:5000/predict
```
- `-X POST`: POST 요청 전송.
- `-H "Content-Type: application/json"`: 헤더로 요청 본문이 JSON임을 알림.
- `--data`: 실제 요청 본문(배열 형태의 JSON 문자열).
- 응답으로 `{"positive": true}` 또는 `false`가 돌아온다.

## 예시
```python
from flask import Flask, request, jsonify
import onnxruntime as ort

app = Flask(__name__)
session = ort.InferenceSession("roberta-sequence-classification.onnx")

@app.route("/predict", methods=["POST"])
def predict():
    text = request.json[0]
    positive = run_inference(session, text)   # 실제 추론 로직
    return jsonify({"positive": positive})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
```

## 요약
- ONNX 같은 런타임을 쓸 때는 모델 파일이 로컬에 있어야 하며, `methods=["POST"]`로 라우트를 제한하고 `request.json`으로 요청 본문을 읽는다.
- `jsonify`로 JSON 응답을 반환하고, `curl -X POST -H ... --data ...`로 API를 커맨드라인에서 바로 테스트할 수 있다.

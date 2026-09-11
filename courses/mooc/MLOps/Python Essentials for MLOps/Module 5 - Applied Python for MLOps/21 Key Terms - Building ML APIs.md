# Key Terms — Building Machine Learning APIs

## 개요
- "Building Machine Learning APIs" 레슨의 용어 정리(reading, 코스 구성상 Automation with Python 과제 뒤에 배치됨). FastAPI/Flask/Transformers/Onyx(ONNX)/OpenAPI의 정의와 기본 코드 예시를 정리한다.

## 내용

| 용어 | 정의 |
|---|---|
| FastAPI | API를 만드는 Python 웹 프레임워크 |
| Flask | 가벼운 Python 웹 프레임워크 |
| Transformers | NLP 작업을 위한 Hugging Face 라이브러리 |
| Onyx (ONNX) | 고성능 추론을 위한 ML 모델 서버 |
| OpenAPI | API 문서화를 위한 명세(specification) |

## 예시
```python
# FastAPI
from fastapi import FastAPI
app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello World"}

# Flask
from flask import Flask
app = Flask(__name__)

@app.route("/")
def home():
    return "Home Page"

if __name__ == "__main__":
    app.run()

# Transformers
from transformers import pipeline
classifier = pipeline("sentiment-analysis")
result = classifier("I love this course")

# ONNX
import onnxruntime as rt
sess = rt.InferenceSession("model.onnx")
input_name = sess.get_inputs()[0].name
res = sess.run(None, {input_name: x})

# OpenAPI 커스터마이징
from fastapi import FastAPI
from fastapi.openapi.utils import get_openapi

app = FastAPI()

def custom_openapi():
    return get_openapi(title="Custom title", version="2.5.0", description="Custom description")

app.openapi = custom_openapi
```

## 요약
- FastAPI/Flask로 API 서버를 만들고, Transformers(동적 로드)나 ONNX(로컬 파일 필요)로 모델을 서빙하며, OpenAPI 명세로 문서를 자동/커스텀 생성할 수 있다.

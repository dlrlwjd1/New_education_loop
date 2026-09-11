# What is Hugging Face?

## 개요
- Hugging Face를 **"머신러닝의 GitHub"**에 비유하며, 웹사이트(모델/데이터셋/스페이스/문서)와 Python 라이브러리(`transformers`) 양쪽에서 실제로 살펴보는 5분 개괄 영상.

## 내용

### Hugging Face = 플랫폼
- 사람들이 종종 놓치는 점: **Hugging Face는 단순 라이브러리가 아니라 플랫폼**이다 — 메인 웹사이트에 **Models, Datasets, Spaces, Docs** 탭이 있음.
- 강사 본인의 계정에 로그인하면 아직 모델·데이터셋이 없는 빈 프로필을 확인 가능 — "GitHub이 소프트웨어 엔지니어링을 위한 협업 공간이라면, Hugging Face는 머신러닝을 위한 협업 공간"이라는 비유.
- 계정 생성 시 **Hub Python 클라이언트 라이브러리**로 프로그래매틱 접근도 가능 — 특정 이름과 목적(모델/데이터셋/스페이스)을 가진 리포지토리를 라이브러리로 직접 생성 가능.

### PyPI에서 확인하는 `transformers` 라이브러리
- PyPI(pip이 패키지를 찾는 곳)에서 **`transformers`**(버전 4.22.2 확인) 검색 → 익숙한 Hugging Face 로고 확인 — **Hugging Face가 직접 제공하는 오픈소스 툴링**이라는 것을 재확인.
- `transformers`는 **텍스트, 비전, 오디오**를 다루는 라이브러리이며 다양한 데모가 제공됨.

### 모델 페이지 탐색 — GPT-2
- 웹사이트에서 **GPT2** 검색 → PyTorch, TensorFlow, TFLite 등 여러 프레임워크 지원 확인.
- **모델 카드(Model Card)**: 모델을 시연·설명하는 정보 제공.
- **배포 옵션**: 호스팅된 추론 API로 실시간 추론 가능, 엔드포인트, **SageMaker와의 직접 연동**까지 지원.
- **호스팅된 추론 API(Hosted Inference API)**를 직접 실행해 GPT-2가 텍스트를 완성하는 것을 확인.
- Spaces를 통해 GPT-2 모델을 재활용·파인튜닝해 다른 용도로 응용한 다양한 커뮤니티 사례들도 확인 가능.

### `transformers` 라이브러리로 4줄 코드에 텍스트 생성
- 모델 페이지의 예제 코드: `pipeline`을 이용한 텍스트 생성(text generation) — GPT-2를 사용.
- **임포트 문까지 포함해 4줄의 Python 코드**만으로 강력한 텍스트 생성 결과를 얻을 수 있음.

## 예시
```python
# transformers pipeline으로 4줄 텍스트 생성 (개념)
from transformers import pipeline

generator = pipeline("text-generation", model="gpt2")
print(generator("Hello, I'm a language model,"))
```

## 요약
- Hugging Face는 **GitHub의 머신러닝 버전**에 가까운 플랫폼으로, 웹사이트(Models/Datasets/Spaces/Docs)와 오픈소스 라이브러리(`transformers`) 양쪽에서 모델 호스팅·데이터셋 관리·추론·파인튜닝·협업을 아우른다.
- GPT-2 모델 페이지 하나만으로도 모델 카드, 호스팅 추론 API, SageMaker 연동, 커뮤니티 파인튜닝 사례까지 확인할 수 있으며, `transformers`의 `pipeline` API로는 단 몇 줄의 코드로 강력한 결과를 얻을 수 있다는 것이 이 영상의 핵심 메시지.

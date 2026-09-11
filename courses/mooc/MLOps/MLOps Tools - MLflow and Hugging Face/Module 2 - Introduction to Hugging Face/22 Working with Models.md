# Working with Models

## 개요
- Noah Gift가 Hugging Face 모델 생태계의 **전체 워크플로 지도**(사용/다운로드/업로드/파인튜닝)를 개괄한 뒤, GitHub Codespaces에서 **위키피디아 페이지를 요약하는 Click CLI 도구**를 실제로 만들고 실행하는 9분 실습.

## 내용

### 모델 생태계 전체 그림
- **① 사용(Use)**: Hugging Face 웹사이트에서 수십만 개 모델 중 하나를 찾아 **Spaces 앱**으로 바로 플레이. 단, 기본적으로 GPU가 제공되지 않으므로, **GitHub Codespaces처럼 GPU 접근이 가능한 워크스페이스**를 쓰면 훨씬 빠름. CLI 도구나 FastAPI/Gradio 앱에도 GPU를 통합할 수 있음.
- **② 다운로드(Download)**: 모델을 로컬로 받을 때는 **리비전(revision)을 고정(pin)**하는 것이 좋음 — 같은 버전을 반복해서 얻을 수 있고, 5GB급 대형 모델을 매번 다시 받지 않아도 됨.
- **③ 업로드(Upload)**: 웹 인터페이스로 직접 파일을 올려 Hugging Face 생태계에 넣을 수 있음.
- **④ 파인튜닝(Fine-tune)**: GPU 환경(예: GitHub Codespaces)에서 파인튜닝한 뒤, 개선된 모델을 다시 Hugging Face 리포지토리로 푸시.

### 모델 웹 인터페이스에서 먼저 플레이해보기
- **다운로드 수·좋아요 수** 기준으로 모델을 탐색하는 것을 권장 — 예시로 **Google Pegasus** 모델의 요약 데모를 "Compute" 버튼으로 바로 실행.
- 권장 순서: **웹 인터페이스에서 먼저 플레이 → 커뮤니티 활동 확인 → 관련 Codespace 예제 확인 → 로컬 코드로 확장**.

### GitHub Codespaces에서 CLI 도구 구축 — 위키피디아 요약기
- 사용 라이브러리: **Click**(CLI), **BeautifulSoup**, **Wikipedia**, **newspaper**.
- `main --help`로 사용 가능한 서브커맨드(`encode`, `summarize` 등) 확인.
- 핵심 코드 흐름:
  ```python
  import wikipedia
  page = wikipedia.page(page_title)  # 위키피디아 텍스트 가져오기
  # tokenizer로 데이터 준비 → Hugging Face 모델에 전달
  ```
  - `wikipedia.page()`로 텍스트를 가져온 뒤, 토크나이저로 전처리해 Hugging Face 모델에 넣고, Click 커맨드(`summarize`)로 감싸 **기본 모델을 지정하되 필요시 다른 모델로 교체 가능**하게 구성.
- 실행 예: `python main.py summarize --wikipedia-page "Python programming"` → 위키피디아의 "Python programming" 페이지 텍스트를 가져와 요약 결과 출력.

### 모델을 로컬에 저장해 빠르게 재사용하기
```python
from transformers import pipeline

model = pipeline("summarization", model="<model-name>", revision="<revision>")
model.save_pretrained("./local_model_dir")
```
- 다운로드 시 출력되는 **리비전 번호**를 지정해 저장하면, 압축을 풀어 로컬에 영구 보관 가능.
- 저장된 모델을 다시 로드(`load_model.py`)해 텍스트 파일(GitHub 이슈 주소 등)을 요약 — **디스크에 이미 있는 사전학습 모델**을 쓰기 때문에 실행이 매우 빠름(GPU + 로컬 디스크 조합 덕분).

### 모델 업로드하기
- 예시로 `noahgift/Python-MLOps-Cookbook` 리포지토리의 **`model.joblib`** 파일을 다운로드 → 자신의 프로필의 **Models** 섹션에서 "새 모델 → 파일 업로드"로 그대로 재업로드 — Hugging Face가 자동으로 **joblib 모델**임을 인식.

## 예시
```bash
python main.py summarize --wikipedia-page "Python programming"
```

```python
# 로컬에 모델 저장 후 빠르게 재사용
from transformers import pipeline
model = pipeline("summarization", model="google/pegasus-xsum")
model.save_pretrained("./local_pegasus")

# load_model.py
model = pipeline("summarization", model="./local_pegasus")
with open("issue.txt") as f:
    print(model(f.read()))
```

## 요약
- Hugging Face 모델 작업은 **사용(웹/Spaces) → 다운로드(리비전 고정) → 업로드(웹 UI) → 파인튜닝(GPU 환경) → 재업로드**라는 순환 워크플로로 이해할 수 있으며, 어떤 문제를 풀고 있는지에 따라 이 중 필요한 단계를 골라 쓰면 된다.
- 위키피디아 텍스트를 가져와 Hugging Face 모델로 요약하는 Click CLI 예제는 "라이브러리(Wikipedia+transformers) + 얇은 CLI 래퍼"라는 이 전체 커리큘럼에서 반복된 패턴을 다시 보여준다.

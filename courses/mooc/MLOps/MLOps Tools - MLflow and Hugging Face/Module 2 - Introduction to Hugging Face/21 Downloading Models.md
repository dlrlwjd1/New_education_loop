# Downloading Models

## 개요
- Jupyter Notebook에서 **모델을 받아오는 세 가지 방법**(파이프라인의 동적 다운로드, `hf_hub_download`로 특정 파일만 받기, Git LFS로 전체 리포지토리 클론)을 비교하는 7분 실습.

## 내용

### 방법 1 — `pipeline`으로 동적 다운로드 (가장 일반적)
```python
from transformers import pipeline
summarizer = pipeline(
    "summarization",
    model="t5-small",
    truncation=True,
    framework="tf",
)
```
- 실행 시 백그라운드에서 모델이 자동으로 로컬에 다운로드됨 — 어디에 저장되는지 신경 쓸 필요 없이 파이프라인이 추상화해서 처리.
- **모델을 바꿔 끼우는 실험**: `t5-small`을 `bert-base-uncased`(요약에는 부적합한 모델)로 바꿔보면 511MB짜리 TF 모델(`.h5`)을 다운로드하면서 결국 에러 발생 — "요약에 맞는 모델이 아니기 때문"이라고 설명하며 다시 `t5-small`로 복귀.
- 이미 한 번 다운로드된 모델은 **재실행 시 다운로드 과정 없이 캐시에서 즉시 로드**.
- `mlflow_text.txt`(MLflow 정의를 담은 긴 텍스트) 파일로 실제 요약 실행 → "이 쿠키커터 템플릿을 사용해 스트림라이닝하고 데이터 팀이 모델 구현에 더 집중할 수 있게 한다" 같은 한 줄 요약 결과 확인.
- **왜 동적 로딩을 선호하는가**: 컨테이너를 빌드할 때 모델이 매우 크면(수 GB) 컨테이너 자체에 모델을 포함시키고 싶지 않은 경우가 많음 — 그래서 실행 시점에 동적으로 받아오는 방식이 유리.

### 방법 2 — `hf_hub_download()`로 특정 파일 하나만 받기
```python
from huggingface_hub import hf_hub_download

path = hf_hub_download(repo_id="t5-small", filename="tf_model.h5")
```
- 리포지토리 ID(예: `t5-small`)와 **파일명**(리포지토리의 Files 탭에서 확인 가능한 파일 중 아무거나, 예: `pytorch_model.bin` 또는 `tf_model.h5`)을 지정.
- 실행 결과는 로컬 **캐시 경로**(Path) — 약 240MB 파일 다운로드 확인. 이후 같은 파일을 다시 요청하면 **0.1초 만에 캐시에서 즉시 반환**.

### 방법 3 — Git으로 리포지토리 통째로 클론
```bash
git lfs install
git clone https://huggingface.co/bert-base-uncased
```
- Hugging Face 공식 문서의 "다운로드" 가이드를 참고 — **Git LFS 설치**가 선행되어야 함.
- 모델 리포지토리는 결국 Git 리포지토리이므로, 모델 페이지의 Files 탭에서 확인한 URL로 그대로 클론 가능(기여(contribute)도 가능한 구조).

## 예시
```python
# 방법 1: 파이프라인 동적 다운로드
from transformers import pipeline
summarizer = pipeline("summarization", model="t5-small", truncation=True, framework="tf")
summarizer(open("mlflow_text.txt").read())

# 방법 2: 특정 파일만 다운로드 (캐시됨)
from huggingface_hub import hf_hub_download
path = hf_hub_download(repo_id="t5-small", filename="tf_model.h5")
```

```bash
# 방법 3: Git으로 전체 리포지토리 클론
git lfs install
git clone https://huggingface.co/bert-base-uncased
```

## 요약
- 모델을 받아오는 방법은 **① `pipeline`의 자동/동적 다운로드(가장 일반적, 컨테이너를 가볍게 유지하는 데 유리) ② `hf_hub_download()`로 특정 파일만 캐시에 받기 ③ Git(+LFS)으로 리포지토리 전체 클론** 세 가지가 있으며, 상황에 따라 적절한 방식을 선택하면 된다.
- 한 번 받은 모델/파일은 로컬 캐시에 저장되어 이후 요청 시 즉시(0.1초) 반환된다는 것이 Hugging Face 라이브러리의 실용적인 특징이다.

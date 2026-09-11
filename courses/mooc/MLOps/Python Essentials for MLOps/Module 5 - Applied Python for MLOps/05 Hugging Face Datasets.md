# Hugging Face Datasets

## 개요
- Hugging Face `datasets` 라이브러리로 **Hugging Face Hub(데이터셋 버전의 GitHub)에서 데이터셋을 동적으로 로드**하는 법을 다룬다. 로드된 데이터셋의 구조(train/validation/test 분할), 캐싱 동작, Pandas로의 변환까지 실습으로 확인한다.

## 내용

### Hugging Face Hub — "데이터셋의 GitHub"
- GitHub이 프로그래머를 위한 코드 공유 플랫폼이라면, **Hugging Face Hub은 데이터셋과 머신러닝 모델을 공유하는 플랫폼**이다.
- 슬래시(`/`)가 없는 이름은 Hugging Face 자체에서 제공하는 데이터셋, 슬래시가 있으면 특정 사용자가 업로드한 데이터셋.

### 데이터셋 목록 확인과 로드
- `list_datasets()`로 이용 가능한 데이터셋 목록을 확인할 수 있다 (예시 기준 약 9,000개).
- `load_dataset("movie_rationales")`처럼 **이름만으로 데이터셋을 로드**한다.

### 캐싱 — 반복 다운로드 방지
- 한 번 로드한 데이터셋은 `~/.cache/huggingface`에 캐싱된다 — **다시 실행하면 즉시(0초) 로드**된다. 대용량 데이터셋에서 특히 유용.

### 로드된 데이터셋의 구조 — train/validation/test
- `load_dataset()`의 결과는 Pandas DataFrame이 아니라 **딕셔너리와 비슷한 구조**로, `train`/`validation`/`test` 세 키를 가진다 — **이미 분할되어 제공**된다는 것이 핵심.
- 각 분할(split)은 몇 개의 행(row)을 가졌는지 미리보기로 확인 가능 (예: train 1,600개, validation 1,200개, test 199개).
- 모든 분할이 동일한 피처(feature) 구조(review, label, evidences 등)를 공유한다.

### Pandas로 변환
- 특정 분할(`dataset["train"]`)을 `.to_pandas()`로 변환하면 익숙한 DataFrame으로 다룰 수 있다 — `.head()`, `.describe()` 등 이전 모듈에서 배운 Pandas 연산을 그대로 적용 가능.

### 왜 이렇게 로드하는가
- 대용량 데이터셋을 GitHub 저장소에 통째로 포함시키는 데는 제약(용량 제한)이 있다.
- **동적 로딩으로 저장소 부담을 다른 곳(Hugging Face Hub)에 넘기고**, 리포지토리에는 포함시키지 않으면서도 큰 데이터셋을 자유롭게 다룰 수 있다.

## 예시
```python
from datasets import load_dataset, list_datasets

all_datasets = list_datasets()
print(len(all_datasets))          # 약 9,000개

dataset = load_dataset("movie_rationales")
print(dataset)                     # {'train': ..., 'validation': ..., 'test': ...}
print(len(dataset["train"]))        # 1600

df = dataset["train"].to_pandas()
df.head(20)
df.describe()
```

## 요약
- Hugging Face `datasets`는 이름만으로 데이터셋을 동적으로 로드하며, 로드 결과는 train/validation/test로 이미 분할된 구조를 가진다.
- 캐싱 덕분에 재실행 시 즉시 로드되며, `.to_pandas()`로 익숙한 DataFrame 워크플로에 바로 연결할 수 있다.

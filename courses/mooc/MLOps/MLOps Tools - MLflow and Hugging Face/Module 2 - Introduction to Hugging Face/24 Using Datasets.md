# Using Datasets

## 개요
- 앞선 단순 CSV 업로드를 넘어, **분할(train/test/validation split)**, **커스텀 로더 파일(`*.py`)**, **데이터셋 정보(features/citation)**를 갖춘 좀 더 정교한 데이터셋 구조를 다루는 10분 심화 실습.

## 내용

### 분할(Splits)이 있는 데이터셋
- 같은 와인 평점 데이터를 이번엔 여러 **분할 파일**(`train.csv`, `test.csv`, `validation.csv`)과 함께 업로드 — Dataset Preview에서 **test/validation** 분할을 선택해 확인 가능.
- `train`은 전체 데이터(약 2,000~3,000행 이상), `test`는 일부(약 200행)만 포함 — API로 조회 시 지정하지 않으면 기본으로 `test` 분할이 반환되는 경우가 있다는 점 유의.
- **대용량 CSV(예: 13MB)에는 LFS 아이콘**이 붙으며, CLI로 이런 파일을 다룰 때는 **`git lfs install`** 후 pre-commit/pre-push 훅이 활성화되어 있어야 함 — 안 하면 문제 발생.

### 커스텀 로더 파일 (`wine_ratings.py`)
- Hugging Face가 제공하는 **템플릿 로더 파일** 구조를 그대로 활용 — 데이터셋 메타데이터(작성자, 생성 연도, 설명, 홈페이지, 버전)와 **`features`**(컬럼명·타입 정의: `name`, `region`은 문자열, `rating`은 `float`)를 명시.
- **`split_generators`**: `train`/`validation`/`test` 각각에 대해 어떤 분할을 API로 제공할지 정의 — 이 템플릿 덕분에 문법을 매번 외울 필요 없이 참고 가능.
- **`generate_examples`**: 데이터셋에서 예제를 생성하는 로직.

### 원격 데이터를 가리키는 로더 — `blimp` 데이터셋 사례
- 파일 자체가 리포지토리에 없고 **더미(dummy) 데이터**만 있는 경우도 있음 — 실제 데이터는 **GitHub 등 외부 URL**에서 다운로드하도록 `blimp.py` 로더 파일의 `download_url`에 정의되어 있음.
- 즉, 데이터셋이 Hugging Face에 직접 호스팅되지 않고 **외부 소스를 가리키는 방식**도 가능하다는 것을 실제 예시로 확인.

### 데이터셋 카드와 `dataset_infos` 파일
- **README(데이터셋 카드)**는 다른 사용자를 위한 문서화 — 이번 예제는 정보가 충분히 채워지지 않았다고 지적(모범 사례가 아님을 인정).
- **`dataset_infos.json`**(선택적)은 설명·인용(citation) 등 로더 파일에서 파생된 정보를 담음.

### `datasets` 라이브러리로 분할별 사용
```python
from datasets import load_dataset
dataset = load_dataset("alfredodeza/wine-ratings")  # 캐시되어 있으면 즉시 로드
```
- 반환된 **DatasetDict**는 `train`(약 32,000행, 전체 데이터), `test`(200행), `validation`(200행) 세 분할을 모두 포함 — features는 `name`, `region`, `variety`, `rating`.
- **특정 분할만 선택**: `dataset["test"]` → `.to_pandas()`로 변환 → `df.describe()`로 통계 확인(예: 이 데이터셋의 평점은 최대 99까지, 일반적으로 85~100 범위).
- Git으로 전체 리포지토리를 클론할 수도 있지만, 대용량 파일을 전부 받고 싶지 않다면 `datasets` 라이브러리로 필요한 분할만 받는 것이 유리.

## 예시
```python
# wine_ratings.py 로더 (개념 구조)
class WineRatingsConfig(datasets.BuilderConfig):
    pass

class WineRatings(datasets.GeneratorBasedBuilder):
    def _info(self):
        return datasets.DatasetInfo(
            features=datasets.Features({
                "name": datasets.Value("string"),
                "region": datasets.Value("string"),
                "variety": datasets.Value("string"),
                "rating": datasets.Value("float"),
            })
        )

    def _split_generators(self, dl_manager):
        return [
            datasets.SplitGenerator(name=datasets.Split.TRAIN, gen_kwargs={"filepath": "train.csv"}),
            datasets.SplitGenerator(name=datasets.Split.TEST, gen_kwargs={"filepath": "test.csv"}),
            datasets.SplitGenerator(name=datasets.Split.VALIDATION, gen_kwargs={"filepath": "validation.csv"}),
        ]
```

```python
from datasets import load_dataset
dataset = load_dataset("alfredodeza/wine-ratings")
df = dataset["test"].to_pandas()
df.describe()
```

## 요약
- Hugging Face 데이터셋은 단순 CSV 업로드를 넘어, **커스텀 로더 파일(`*.py`)**로 train/test/validation 분할과 컬럼 스키마(features)를 명시적으로 정의할 수 있으며, 데이터가 외부 URL에 있어도(`blimp` 사례) 로더로 연결할 수 있다.
- `load_dataset()`으로 받은 `DatasetDict`에서 원하는 분할만 골라 `.to_pandas()`로 변환하면, 대용량 데이터를 전부 클론하지 않고도 필요한 부분만 효율적으로 활용할 수 있다.

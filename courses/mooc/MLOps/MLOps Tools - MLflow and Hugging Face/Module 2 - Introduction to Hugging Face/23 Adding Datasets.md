# Adding Datasets

## 개요
- 웹 UI로 **CSV 파일을 업로드해 새 데이터셋 리포지토리를 만들고**, 이를 다시 `datasets` 라이브러리로 Jupyter에서 불러와 pandas DataFrame으로 변환하는 6분 실습.

## 내용

### 데이터셋 리포지토리 생성 (웹 UI)
- 로그인 후 프로필 → **"Add new dataset"** → 데이터셋 리포지토리 생성(내부적으로는 여전히 Git 리포지토리) — 이름(`temporary-dataset`), 라이선스(예: Apache) 지정. CLI로도 동일하게 가능.
- 생성 직후엔 **Dataset Preview**가 비어있는 상태.

### CSV 파일 업로드
- Files 탭 → **"Upload files"** → `test.csv`(약 81KB, 와인 평점 데이터) 드래그 앤 드롭 → 기본 커밋 메시지로 커밋.
- 업로드 후 데이터셋 페이지를 새로고침하면 **Dataset Preview**가 채워지고, **API 사용 예시**(curl로 전체 데이터셋 또는 특정 분할(split) 조회)도 함께 제공됨.
- 컬럼 타입 자동 감지 확인: `name`, `region`, `rating`(`float64`로 감지) 등 — "와인과 평점에 관한 데이터셋"이라고 설명.

### `datasets` 라이브러리로 불러오기 (Jupyter)
```python
from datasets import load_dataset
dataset = load_dataset("alfredodeza/temporary-dataset")
```
- **정확한 리포지토리 이름(계정명/데이터셋명)을 정확히 맞춰야** 로드 가능 — 강사도 실습 중 이름을 헷갈려 재확인하는 과정을 그대로 보여줌.
- 처음 로드 시 다운로드 후 **캐시**되며, 결과는 **DatasetDict**(예: `test` 분할 키를 가짐).
- **pandas 변환**: `dataset["test"].to_pandas()`로 데이터프레임 생성(처음엔 `as_pandas`로 잘못 시도했다가 **`to_pandas`**가 맞는 메서드임을 확인하는 실전 디버깅 과정 포함).

## 예시
```python
from datasets import load_dataset

dataset = load_dataset("alfredodeza/temporary-dataset")
df = dataset["test"].to_pandas()
df.head()
```

```bash
# API로 데이터셋 조회 (데이터셋 페이지에서 제공되는 curl 예시)
curl https://datasets-server.huggingface.co/rows?dataset=alfredodeza/temporary-dataset&config=default&split=test
```

## 요약
- 데이터셋 추가는 웹 UI에서 CSV를 드래그 앤 드롭으로 업로드하는 것만으로 충분하며(Git/CLI로도 가능), 업로드 즉시 Dataset Preview와 REST API 접근이 자동으로 제공된다.
- `datasets.load_dataset("계정명/데이터셋명")`으로 불러온 뒤 `.to_pandas()`로 변환하면 곧바로 pandas 워크플로에 연결할 수 있다는 것이 핵심 흐름.

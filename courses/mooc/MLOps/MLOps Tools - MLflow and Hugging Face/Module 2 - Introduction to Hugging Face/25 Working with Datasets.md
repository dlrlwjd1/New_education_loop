# Working with Datasets

## 개요
- Noah Gift가 이번엔 **자신의 NBA 데이터셋**을 업로드하고, `datasets` 라이브러리와 IPython으로 대화식으로 탐색하는 6분 실습. 큰 공개 데이터셋(Wikipedia, GLUE) 탐색부터 자기 데이터 업로드까지 다룬다.

## 내용

### 원자재(raw material)로서의 데이터셋 탐색
- Hugging Face Datasets 페이지에서 인기 데이터셋 필터링 — **Wikipedia** 데이터셋: 모든 언어의 정제된(cleaned up) 문서를 담은 덤프(dump) — 특정 날짜 기준 데이터를 통째로 받아 원하는 용도로 가공 가능.
- **GLUE**(유명한 벤치마크 데이터셋): Dataset Viewer에서 **분할(split)** — validation, test 등 —을 선택해 원하는 서브셋만 파인튜닝 작업에 활용 가능. "이게 바로 ML을 위해 설계된 원자재(raw material)라는 게 느껴지는 지점"이라고 설명.

### 자신의 데이터셋 업로드 — NBA 데이터셋
- 프로필 → "New dataset" → 이름(`nba-dataset`) 지정 → **Files → Add file → Upload files**로 로컬(5년 전 캡스톤 프로젝트에서 쓴 데이터)에서 파일 업로드 — 업로드 즉시 프로젝트에서 바로 사용 가능.
- 이미 업로드해둔 동일 데이터셋(`social-power-nba`)의 데이터셋 카드에서 **API 호출(curl) 예시**를 그대로 복사해 워크스페이스에서 실행 — 정상적으로 curl 응답 확인. **Dataset Viewer**로 통계도 확인 가능.

### `datasets` 라이브러리로 다운로드 및 탐색
```python
from datasets import load_dataset
import pprint

dataset = load_dataset("<organization>/social-power-nba")
pprint.pprint(dataset["train"].features)
pprint.pprint(dataset["train"][0])
```
- `python download_data.py`(강사가 작성한 `hugging-face/download_data.py`) 실행 → Hugging Face에서 데이터셋을 가져와 **첫 번째 레코드**(선수 정보)를 출력.

### IPython으로 대화식 탐색 — 인덱스로 레코드 넘나들기
- 데이터셋을 변수에 로드해두면 인덱스를 바꿔가며 레코드를 하나씩 확인 가능 — 예: `dataset["train"][1]`로 다음 선수(Anthony Davis) 확인, `[2]`로 세 번째 선수 확인.
- 데이터셋과 상호작용하는 두 가지 좋은 방법: **① IPython/Python 스크립트로 대화식 탐색, ② Click 같은 라이브러리로 커맨드라인 도구화**.
- 또는 그냥 데이터셋 카드의 **curl API 호출**을 복사해 실행하는 방법도 있음 — 상황에 맞게 선택.

## 예시
```python
# 데이터셋 다운로드 및 레코드 확인
from datasets import load_dataset
import pprint

dataset = load_dataset("noahgift/social-power-nba")
pprint.pprint(dataset["train"].features)
pprint.pprint(dataset["train"][0])   # 첫 번째 선수
pprint.pprint(dataset["train"][1])   # 두 번째 선수 (Anthony Davis)
```

```bash
# 데이터셋 카드에서 제공하는 curl API 호출 예시
curl https://datasets-server.huggingface.co/rows?dataset=noahgift/social-power-nba&config=default&split=train
```

## 요약
- Wikipedia나 GLUE 같은 대형 공개 데이터셋은 분할(split) 단위로 필요한 만큼만 가져올 수 있는 "ML을 위한 원자재"이며, 자신의 데이터(NBA 데이터셋)도 웹 UI로 손쉽게 업로드해 즉시 같은 방식으로 활용할 수 있다.
- `load_dataset()` + 인덱싱으로 레코드를 대화식으로 탐색하거나, CLI 도구로 감싸거나, 데이터셋 카드의 curl 예시를 그대로 쓰는 등 여러 상호작용 방식이 가능하다는 것이 이 레슨의 핵심.

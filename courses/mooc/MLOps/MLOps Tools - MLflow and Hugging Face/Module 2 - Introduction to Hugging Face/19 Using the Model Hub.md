# Using the Model Hub

## 개요
- Models/Datasets/Spaces 필터링 기능을 실제로 조작하며 Hub 전체를 다시 한번 종합적으로 훑는 7분 영상. "Hugging Face Hub란 이 모든 컴포넌트가 함께 동작하는 원스톱 숍"이라는 정의로 마무리한다.

## 내용

### Models — 다중 필터로 원하는 모델 찾기
- Models 페이지의 필터 카테고리: **Tasks, Libraries, Datasets, Languages**.
- 실습: **Languages → Spanish** 선택 → **Tasks → Summarization** 추가 선택 → 스페인어 요약 모델만 필터링됨(예: `bert2bert_shared-spanish-finetuned-summarization`). 필터를 X로 해제하면 다시 전체 목록으로 복귀.
- 모델 카드(Model Card)는 GitHub 리포지토리의 README처럼 **사용자가 직접 의미 있게 작성**해야 하는 문서.
- **Hosted Inference API**에서 직접 "Compute" 버튼으로 요약을 실행 — 같은 텍스트라면 **캐시되어 즉시 응답**되는 것을 확인.
- **배포 옵션**: Amazon SageMaker 또는 자신의 계정에서 Inference API 사용. `transformers` 라이브러리용 **복사-붙여넣기 코드 스니펫**도 제공되어 바로 추론 코드에 활용 가능.
- 모델 리포지토리를 클론하려면 **Git LFS**가 활성화되어 있어야 함(반복 강조되는 포인트).

### Datasets — 프리뷰와 분할(splits)
- 예시로 **text-generation** 태스크에서 **wikitext** 데이터셋 탐색.
- **Dataset Preview** 기능으로 **test/training/validation 분할(split)**을 바로 확인 가능 — Python `datasets` 라이브러리로 어떤 분할을 쓸지 선택하고 서브셋도 만들 수 있음(추후 실습에서 다룸).
- "Go to dataset viewer"로 실제 데이터를 살펴볼 수 있고, `raw-v1` 같은 서로 다른 서브셋도 존재.
- Files 탭에서 **커밋 히스토리**(GitHub과 동일한 방식), `README`, `dataset_infos.json`(설명·인용(citation)·지원 언어·소스 데이터셋 정보 포함), 데이터셋 로딩용 Python 스크립트(클래스 상속 구조 사용)까지 확인 가능.

### Spaces — 다시 한번 재확인
- 예시로 **`vendi_score`** 같은 음악 관련 인터랙티브 Space를 언급 — Gradio로 손쉽게 구성 가능하다는 점 재확인.

### 핵심 통찰 — "Hugging Face Hub"의 정의
- Hugging Face Hub란 결국 **Models + Datasets + Spaces**가 함께 동작하는 하나의 원스톱 플랫폼 — 데모, 상호작용, 기여, 재사용을 모두 이곳에서 할 수 있다는 것.

## 예시
```text
# Model Hub 필터 조합 예시
Languages: Spanish
Tasks: Summarization
→ bert2bert_shared-spanish-finetuned-summarization 등 필터링 결과 확인
```

## 요약
- Model Hub는 Tasks/Libraries/Datasets/Languages 다중 필터로 원하는 모델을 정밀하게 찾을 수 있고, Dataset Hub는 프리뷰와 test/train/validation 분할을 미리 확인할 수 있어 실전 활용 전에 데이터 구조를 파악하기 좋다.
- Hugging Face Hub는 결국 Models·Datasets·Spaces가 하나로 통합된 협업 플랫폼이라는 것이 이 레슨 전체를 관통하는 정의다.

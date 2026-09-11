# Getting Started with the Topic Modeling Case Study (hands-on)

## 개요
- 형식: 읽기 자료 + 실습 (약 2시간)
- 핵심: 영화 리뷰 데이터로 토픽 모델링을 수행해 **도메인 특화 특징 공학**을 해 본다.

## 내용

### 준비물
두 개의 zip 중 하나를 받는다.

| 파일 | 용도 |
|---|---|
| `Topic-Modeling-Case-Study-Local.zip` | 로컬 Jupyter 서버에서 열 데이터와 노트북 |
| `Topic-Modeling-Case-Study-WS.zip` | **Watson Studio**에서 수행할 파일들 |

> **중요** — Watson Studio용 zip을 받을 때 파일명이 정확히 `Topic-Modeling-Case-Study-WS.zip`인지 확인한다. 브라우저가 자동 생성한 토큰 문자열이 이름 앞에 붙으면 **Watson Studio 업로드가 차단된다.** 필요하면 이름을 고친다. Watson Studio용은 **압축을 풀지 않고 그대로 업로드**한다.

필요한 파일:
- `topic-modeling-case-study.ipynb`
- `movie_reviews` 데이터셋 (WS 버전은 `.csv`, 로컬 버전은 `.txt` 파일 묶음)

노트북이 코드 조각과 지시를 제공한다. **해답 노트북을 보기 전에 스스로 먼저 풀어 보기를 강력히 권한다.**

### 이 사례 연구의 지도 원칙
> 토픽 모델링은 흔히 쓰이는 차원 축소의 한 형태다. 시각화 도구로 결과를 탐색할 때의 강한 기대는 **도메인과 관련된 특징을 식별해내는 것**이다. 이 통찰은 다시 새 특징으로 변환되어, 직접 쓰이거나 특징 행렬에 덧붙여진다.
>
> 이 사례 연구에서 토픽 모델링을 쓰는 목적은 **도메인 특화 특징 공학을 가능하게 하는 것**이다.

### 데이터
벤치마크 데이터셋 **movie reviews** (Maas et al., 2011 — 감정 분석용 단어 벡터 학습 논문의 데이터).

### 필요한 사전 작업

NLTK 패키지를 사용한다. 노트북 안에서든 그 전에든 아래를 먼저 실행해야 한다.

```python
import nltk
nltk.download('all')
```

토픽 시각화에는 **`pyLDAvis`** 를 쓴다. Jupyter 노트북에 직접 통합되며, LDAvis 프로젝트(Sievert & Shirley, 2014)에 기반한다.

```bash
pip install pyldavis
```

### 참고
IBM Watson Natural Language Understanding, Natural Language Classifier, Watson Discovery는 여러 사용 사례를 위한 **사전 학습 모델**을 사용하며, 특정 지식 도메인에 맞춰 커스텀 학습도 가능하다.

## 요약
- 목표는 토픽 모델링 자체가 아니라 **그 결과를 새 특징으로 바꾸는 것**이다.
- 데이터는 movie reviews 벤치마크, 도구는 NLTK + `pyLDAvis`.
- Watson Studio용 zip은 **파일명 앞 토큰 문자열을 지워야** 업로드된다.
- 해답 노트북 전에 직접 풀어 볼 것.

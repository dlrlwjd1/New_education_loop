# 06 Bleu Score

## 개요
- **(선택 영상)** **BLEU 점수**: 정답 번역이 여러 개일 때 기계 번역 품질을 자동 평가하는 단일 숫자 지표. (BLEU = Bilingual Evaluation Understudy)

---

## 내용

### 아이디어
- 기계 번역 출력이 **사람 참조(reference) 번역 중 하나에 가까우면** 높은 점수.
- 사람 평가를 대신(understudy)하는 대체 지표.

### Modified Precision (수정 정밀도)
- 단순 정밀도(출력 단어가 참조에 있는 비율)는 "the the the..." 같은 출력에 속음.
- **수정 정밀도**: 각 단어에 **참조에서 나타난 최대 횟수까지만** 크레딧.
  - 예: "the"가 참조1에 2번 → 출력에서 최대 2번만 인정.

### n-gram으로 확장
- **unigram P₁** (단어), **bigram P₂** (단어 쌍), trigram P₃, ... :
  ```
  Pₙ = Σ_{n-gram} count_clip / Σ_{n-gram} count
  ```
- 출력이 참조와 완전히 같으면 모든 Pₙ = 1.

### 최종 BLEU
```
BLEU = BP · exp( (1/4) Σ_{n=1}^{4} log Pₙ )
```
- **BP (brevity penalty, 간결성 벌점)**: 너무 짧은 번역은 정밀도가 쉽게 높아지므로 벌점.
  - 출력이 참조보다 길면 BP=1, 짧으면 <1.

### 용도
- 기계 번역·이미지 캡셔닝 등 **텍스트 생성** 평가의 단일 숫자 지표 → 분야 발전 가속.
- **음성 인식엔 안 씀**(정답이 대체로 하나). 오픈소스 구현 사용 권장.

---

## 요약
- BLEU = 수정 정밀도(n-gram)의 로그 평균 × brevity penalty.
- 정답이 여러 개인 텍스트 생성(번역·캡셔닝)의 자동 단일 지표.

## 다음 주제
- 어텐션 모델 직관 (Attention Model Intuition)

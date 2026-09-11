# 12 Improving Your Model Performance

## 개요
- Week 1의 개념(직교화, dev/test, 인간 수준=Bayes 대리, avoidable bias/variance)을 종합한 **성능 개선 지침**.

---

## 내용

### 지도학습의 두 가지 가정
1. **훈련 세트를 잘 맞춘다** → avoidable bias가 낮다.
2. **훈련 성능이 dev/test로 일반화된다** → variance가 낮다.

### 진단
- **Avoidable bias** = 훈련 오류 − Bayes(인간) 오류.
- **Variance** = dev 오류 − 훈련 오류.

### 처방 (직교화)
**Avoidable bias 감소:**
- 더 큰 모델(bigger network)
- 더 오래 훈련
- 더 나은 옵티마이저 (Momentum, RMSprop, Adam)
- 더 나은 네트워크 구조/하이퍼파라미터 (RNN, CNN 등)

**Variance 감소:**
- 더 많은 데이터
- 정규화 (L2, dropout, 데이터 증강)
- 더 나은 네트워크 구조/하이퍼파라미터 탐색

---

## 요약
- 훈련 오류 − Bayes = avoidable bias → 큰 모델/더 오래/더 나은 옵티마이저·구조.
- dev − 훈련 = variance → 더 많은 데이터/정규화/구조 탐색.
- 이 진단·처방을 체계적으로 적용하면 대다수 ML 팀보다 효율적.

## Week 1 마무리
- ML 전략, 직교화, 단일 지표, dev/test 설정, 인간 수준·avoidable bias 학습 완료.

## 다음 주제
- Week 2: 오류 분석, 데이터 불일치, 전이/멀티태스크 학습, end-to-end 딥러닝

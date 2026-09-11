# Feature Engineering Concepts

## 개요
- NBA 박스스코어 데이터를 예시로, 기존 피처를 재활용·변환해 새로운 피처(그리고 예측용 레이블)를 만드는 전통적인 피처 엔지니어링 문제를 설명하는 1분 영상.

## 내용

### 기존 피처를 새 피처로 변환하기
- 예시 데이터: NBA 박스스코어에 시즌 총 승수(total wins) 컬럼이 있음.
- 이 기존 피처를 **재목적화(repurpose)**해 새로운 피처로 변환 가능: 승수가 특정 **임계값(threshold)**을 넘는지 여부를 판단.
  - 예: 시즌 경기 수에 따라 50승이면 "위닝 시즌(winning season)" → 새 컬럼 "winning and losing record"에 `1` 부여.
  - 35승이면 `0` 부여.

### 새 피처를 레이블로 활용해 예측하기
- 이렇게 만든 새 피처("winning and losing record")를 이제 **예측하고자 하는 레이블**로 사용할 수 있음.
- 예: 팀의 평균 득점(points per game average)을 사용해 해당 시즌이 승리 기록(winning record)일지 패배 기록(losing record)일지 예측하는 모델을 만들 수 있음.

### 핵심 통찰
- 이 사례에서 핵심 아이디어는, **기존 피처를 재사용하거나 여러 피처를 결합**함으로써 새로운 피처를 만들고, 이를 머신러닝 예측 시스템에 활용할 수 있다는 것.

## 예시
```python
# 개념 구조
df['winning_record'] = (df['total_wins'] >= 50).astype(int)

# 새 피처(winning_record)를 레이블로 삼아, 평균 득점(points_per_game)으로 예측
X = df[['points_per_game']]
y = df['winning_record']
```

## 요약
- 피처 엔지니어링의 핵심은 기존 피처(예: 시즌 총 승수)를 임계값 기반으로 변환하거나 여러 피처를 결합해 새로운 피처(예: 승리/패배 기록)를 만들고, 이를 새로운 예측 타깃으로 활용하는 것이다.

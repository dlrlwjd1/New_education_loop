# Models that Naturally Handle Imbalance

## 개요
- 형식: 읽기 자료 (약 2분)
- 핵심: 모델별 불균형 **민감도 순위**와, 샘플링 대신 쓸 수 있는 `class_weight` 인자.

## 내용

### 모델별 민감도

| 민감도 | 모델 |
|---|---|
| **매우 민감** | 신경망(neural networks) |
| 비교적 강함 | 서포트 벡터 머신(SVM) |
| 어느 정도 강함 | 트리 기반 방법(tree-based methods) |

### class_weight — 샘플링 없이 대응하는 방법
> 가능하다면 불균형 클래스를 다룰 때 **`class_weight` 인자를 사용해야 한다.**

이것은 [08 Class Imbalance](08%20Class%20Imbalance.md)에서 언급한 두 방향 중 **"비용 함수를 조정한다"** 에 해당한다. 데이터를 늘리거나 버리지 않고 오류의 가중치를 바꾼다.

## 예시

```python
clf_3 = SVC(kernel='linear',
            class_weight='balanced',
            probability=True)
```

`class_weight='balanced'`는 클래스 빈도의 역수로 가중치를 자동 설정한다.

## 요약
- 신경망은 불균형에 취약하고, SVM과 트리 기반은 상대적으로 강하다.
- 샘플링만이 답이 아니다. `class_weight='balanced'` 한 줄로 비용 함수 쪽에서 대응할 수 있다.
- 모델 선택 자체가 불균형 대응 전략의 일부다.

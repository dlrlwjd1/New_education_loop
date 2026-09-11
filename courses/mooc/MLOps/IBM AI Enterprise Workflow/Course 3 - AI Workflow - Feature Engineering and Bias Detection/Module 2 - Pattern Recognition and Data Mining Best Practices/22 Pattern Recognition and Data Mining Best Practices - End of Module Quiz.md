# Pattern Recognition and Data Mining Best Practices - End of Module Quiz

## 개요
- 형식: 채점 과제 (Staff Graded, 약 12분)
- 대상: Module 2 전체 — 이 강좌의 마지막 항목

## 상태

**내용 미확인.** 채점 대상 과제이며, 강의 자료 API로 문항을 가져올 수 없어 본문을 정리하지 못했다. 임의로 문항을 만들지 않는다.

## 준비 — Module 2 핵심 점검

**편향과 AI Fairness 360**
- **보호 속성**을 먼저 지정해야 하는 이유 → [03](03%20Introduction%20to%20360%20%28hands-on%29.md)
- AIF360이 제공하는 두 종류(지표 / 완화 알고리즘)
- **재가중(re-weighting)** 이 데이터 전처리 단계에서 작동한다는 점
- 모델이 데이터의 모든 구별 특징을 쓸 수 있다는 사실과 그에 따르는 책임 → [02](02%20ai360%20-%20Through%20the%20Eyes%20of%20our%20Working%20Example.md)

**이상치**
- 이상치 탐지 vs **신규성 탐지** (학습 데이터에 이상치가 있다고 가정하는가) → [07](07%20Outlier%20Detection.md)
- 첫 원칙이 제거가 아니라 **체계적 식별·추적**이라는 점 → [05](05%20Introduction%20to%20Outliers.md)
- **시각화는 t-SNE, 탐지 입력은 PCA** — 근거는 투영 안정성
- 알고리즘 3종의 원리: **Isolation Forest / Elliptic Envelope / OneClassSVM** → [21](21%20Pattern%20Recognition%20and%20Data%20Mining%20Best%20Practices%20-%20Summary%20Review.md)
- Elliptic Envelope의 고차원(N<P) 취약성
- **재샘플링 → 이상치 탐지 전환에 정해진 비율 규칙이 없다** → [08](08%20Outliers.md)

**비지도 학습**
- **교차 검증이 불가능**하다는 제약 → [12](12%20An%20Overview%20of%20Unsupervised%20Learning.md)
- 군집 알고리즘을 **유사도 측정 방식**으로 분류 → [13](13%20Clustering.md)
- k-평균(관성은 유효한 척도가 아니다) / 계층적(k 불필요·덴드로그램) / 스펙트럼(그래프 적용) / GMM(확률적·스케일링 불필요) → [14](14%20Unsupervised%20Learning.md)
- **모든 것을 이기는 군집 방법은 없다**
- 실루엣 −1 / 0 / 1 해석과, **평가 지표 3종이 모두 볼록 군집에 유리하다**는 공통 약점 → [15](15%20Clustering%20Evaluation.md)
- **관성·엘보 방법을 권하지 않는 이유**
- 군집 개수의 답이 여러 개일 수 있다는 점 (대륙/국가/도시)

**이 강좌의 큰 그림**
- 두 사례 연구(토픽 모델링·클러스터링)의 공통 목적이 **비지도 학습으로 새 특징을 만드는 것**이라는 점

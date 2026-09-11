# Dimension Reduction

## 개요
- 형식: 영상 (약 13분) — 이 모듈에서 가장 긴 강의
- 핵심: Fashion MNIST로 **PCA와 t-SNE를 실제로 적용**하고, 파이프라인에서 그리드 서치로 주성분 개수까지 튜닝한다.

## 내용

### 차원 축소의 세 갈래
비정형 텍스트, 헬스케어 기술, 센서·IoT에서 나오는 고차원 데이터는 특징이 수천 개인 경우가 많다. **관측치보다 특징이 더 많은 경우도 드물지 않다.**

기법은 크게 세 범주로 나뉜다.

| 범주 | 설명 |
|---|---|
| **특징 부분집합 선택** (feature subsetting) | 특징을 골라낸다 |
| **행렬 분해** (matrix decomposition) | PCA·NMF·SVD 등 |
| **매니폴드 학습** (manifold learning) | t-SNE 등 |

### 특징 부분집합 선택 — 특징 공학의 한 형태
| 방법 | 용도 |
|---|---|
| AIC / BIC (Akaike·Bayesian 정보 기준) | 최적 **선형 모델** 선택 |
| **LASSO 회귀** | 변수 선택 + 정규화(regularization) |
| 신경망 | 상위 레이어 출력이나 **비지도 오토인코더**로 특징 추출 |
| `SelectKBest` | 기본은 ANOVA. 다른 추정기도 선택 가능 |
| **분산 임계값** (variance thresholding) | 특징 공간이 아주 클 때 (예: 인간 유전체 전체) 유용 |

분산 임계값의 장점: 데이터셋 전반에 **일정한 임계값**을 보장하면서, 의미 있는 정보를 버리거나 압축하지 않는다.

### 실습 데이터 — Fashion MNIST
AAVAiL의 과제 맥락: 영상 피드가 실제로 뉴스 피드인지 확인하는 서비스가 필요하다. 결국 영상에서 프레임을 샘플링해 객체를 식별하고, 다른 것 같으면 검토 플래그를 다는 서비스를 만들어야 한다.

이 과제의 벤치마크로 **Fashion MNIST**를 쓴다.

- 원래 MNIST는 손글씨 숫자이고 "신경망의 hello world"다
- 여러 연구자가 **Fashion MNIST가 그것을 대체해야 한다**는 타당한 주장을 했다
- 이미지는 28×28 = **총 784 픽셀**
- 클래스: 티셔츠, 바지, 풀오버, 드레스, 코트, 샌들 등

### 전처리
1. **정규화** — 각 픽셀 값(0~255)을 1의 분수로 스케일링
2. **처음 5개 클래스만** 부분집합으로 (시연 편의)
3. 각 이미지를 **784차원 벡터로 평탄화(flatten)**

결과: 학습 데이터 30,000장, 각 784 특징. 5개 클래스에 각 6,000개씩 **균등 분포**.

### 고전 기법을 기준선으로 두라 — 이 강의의 태도
> 신경망이 요즘 주목을 많이 받지만 **튜닝·유지·배포가 매우 어렵다.** 여기서 쓰는 고전적 머신러닝 기법은 여전히 매우 유효하고 효과적이며, **딥러닝 솔루션을 탐색할지 결정할 때 기준선(baseline)이 되어야 한다.**

또 하나의 습관: **데이터를 스크롤해 라벨이 타당한지 확인하는 것은 늘 좋은 생각이다.** 이 데이터는 표준화된 방식으로 촬영되어 그 작업이 이미 되어 있지만, 아니라면 검증 단계가 더 필요하다.

### PCA
PCA는 특징이 많은 데이터셋을 **분산을 최대한 설명하는 직교(orthogonal) 성분**으로 분해한다. scikit-learn에서는 `decomposition` 하위 모듈의 transformer 객체로 구현되어 있다.

2D 산점도 결과 — 클래스가 대체로 식별된다.
- 티셔츠는 가운데
- 드레스와 바지는 **약간 겹친다**
- **코트와 풀오버는 상당히 겹친다** → 이 모델로 구분하기 더 어렵다는 신호

3D로 투영하면 분리가 더 뚜렷해지고 풀오버와 코트 구분이 조금 쉬워진다.

**누적 설명 분산(cumulative explained variance) 플롯** — 주성분 개수를 정할 때 아주 흔히 쓰는 그림이다.

### 파이프라인 + 그리드 서치
PCA를 파이프라인에 넣고 파라미터 그리드 딕셔너리로 그리드 서치를 안내한다.

주의점 두 가지:
- 이 설정은 **모든 데이터셋에 통하지 않는다.** 새 응용마다 튜닝해야 하고, 파이프라인의 다른 부분이 바뀌면 재튜닝이 필요할 수도 있다
- 딕셔너리의 각 키는 **이중 밑줄(`__`)** 을 갖고, 위 파이프라인의 키와 일치해야 한다

탐색 결과: **PCA 성분 25개**, SVM C=1.0, gamma=0.1이 최적.

성능: F1 점수는 괜찮은 수준.
- **바지가 가장 구분하기 쉽다**
- **풀오버와 코트가 가장 낮다** — 앞서 그래프에서 본 것과 일치
- 특징 25개만으로 나쁘지 않은 성능. 전체 데이터셋에서는 주성분을 더 허용하지 않으면 성능이 떨어질 것

### 다른 행렬 분해 기법들
- 희소 행렬(sparse matrix) 전용 변형, 배치 처리용, **온라인 학습용** 변형도 있다
- **NMF와 LDA**는 특히 토픽 모델링 맥락에서 유용하다
- SVD와 인자 분석(factor analysis)은 PCA와 밀접하다. 사실 **여기서 쓴 PCA 구현은 내부적으로 SVD다**

### 매니폴드 학습과 t-SNE
PCA와 독립성분분석(ICA)은 데이터의 **특정 선형 투영**을 얻는 알고리즘이다. 단서가 있다 — **비선형 구조를 찾아내지 못한다.**

매니폴드 학습은 PCA 같은 선형 기법을 일반화해 **비선형 구조에 더 민감하게** 만든다.

**t-SNE (t-distributed stochastic neighbor embedding)** 의 동작:
1. 데이터 점 사이의 유사도를 **결합 확률(joint probability)** 로 변환
2. 저차원 임베딩의 결합 확률과 고차원 데이터의 결합 확률 사이의 **쿨백-라이블러(KL) 거리를 최소화**

t-SNE의 성질과 주의점:

| 성질 | 함의 |
|---|---|
| 비용 함수가 **볼록(convex)하지 않다** | **항상 같은 결과가 나오지 않는다** |
| 쌍별(pair-wise) 연산을 한다 | **파이프라인에 자주 쓰이지 않는다** (최근 알고리즘 개선 논문들이 나와 바뀔 수도 있다) |
| KL 발산 최적화가 느리다 | 시간이 걸린다 |
| 파라미터 5개가 임베딩 결과에 영향 | 주로 만질 것은 **perplexity** |

**권장 절차**: t-SNE 전에 다른 차원 축소를 먼저 적용해 **50차원 정도까지 줄인다.** 밀집 데이터는 PCA, 희소 데이터는 truncated SVD를 쓴다.

**perplexity 값**: 데이터셋이 커지면 큰 perplexity가 필요하다. 통상 범위는 **5~50**.

Fashion MNIST의 t-SNE 결과 — 2D 투영이 고차원 데이터를 다르게 표현한다. 눈에 띄는 차이는 **바지가 매우 뚜렷하게 분리**된다는 점이다.

## 예시

```python
## Fashion MNIST 적재
from tensorflow import keras
(train_images, train_labels), (test_images, test_labels) = \
    keras.datasets.fashion_mnist.load_data()

## 정규화 후 5개 클래스만, 784차원으로 평탄화
train_images = train_images / 255.0
test_images  = test_images  / 255.0
keep = np.arange(5)
mask = np.isin(train_labels, keep)
X = train_images[mask].reshape(-1, 28 * 28)
y = train_labels[mask]
```

```python
## PCA를 파이프라인에 넣고 그리드 서치
from sklearn.decomposition import PCA
from sklearn.svm import SVC
from sklearn.pipeline import Pipeline
from sklearn.model_selection import GridSearchCV

pipe = Pipeline([('pca', PCA()), ('svm', SVC())])

## 키에 이중 밑줄 — 위 파이프라인 이름과 일치해야 한다
param_grid = {'pca__n_components': [15, 25, 50],
              'svm__C':     [0.1, 1.0, 10.0],
              'svm__gamma': [0.01, 0.1, 1.0]}

grid = GridSearchCV(pipe, param_grid, cv=5)
grid.fit(X, y)
print(grid.best_params_)   # 강의 결과: pca__n_components=25, svm__C=1.0, svm__gamma=0.1
```

```python
## t-SNE는 PCA로 먼저 줄인 뒤 적용한다
from sklearn.manifold import TSNE

X_50 = PCA(n_components=50).fit_transform(X)     # 밀집 데이터는 PCA
X_2d = TSNE(n_components=2, perplexity=30).fit_transform(X_50)
```

> 위 코드는 강의에서 설명한 절차를 실행 가능한 형태로 옮긴 것이다. 강의 슬라이드의 원본 코드와 변수명·값이 다를 수 있다.

## 요약
- 차원 축소는 **특징 부분집합 선택 / 행렬 분해 / 매니폴드 학습** 세 갈래다.
- 파이프라인 그리드 서치의 키는 **`단계이름__파라미터`** 형태여야 한다.
- 784차원을 **PCA 25성분**으로 줄여도 쓸 만한 F1이 나왔다. 겹치는 클래스(풀오버·코트)는 2D 시각화에서 미리 예측되었다 — **시각화가 성능을 예고한다.**
- **PCA는 선형 구조만 잡는다.** 비선형 구조는 t-SNE 같은 매니폴드 학습이 필요하다.
- t-SNE 실무 규칙: ① 비볼록이라 결과가 매번 다르다 ② 파이프라인에 잘 안 쓴다 ③ **PCA로 50차원까지 먼저 줄인 뒤 적용** ④ perplexity 5~50.
- 신경망보다 고전 기법을 **기준선으로 먼저** 세운다.

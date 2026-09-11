# Geoffrey Hinton Interview

## 개요
- Andrew Ng가 진행하는 딥러닝 영웅(heroes of deep learning) 인터뷰 시리즈의 첫 번째 편
- 인터뷰 대상: **Geoffrey Hinton** — "딥러닝의 대부(godfather of deep learning)"로 불리는 인물
- 내용: Hinton의 개인 연구사(history), 그가 만든 핵심 아이디어들, 뇌(brain)와 backprop의 관계, 그리고 딥러닝 입문자를 위한 커리어 조언

## 내용

### 입문 계기와 학문적 여정
- 고등학교 시절(약 1966년) 친구가 "뇌는 홀로그램(hologram)을 사용한다"고 말한 것이 출발점 — 홀로그램은 반을 잘라도 전체 상이 남듯, 기억이 뇌 전체에 **분산(distributed)** 저장될 수 있다는 발상 (Lashley의 쥐 뇌 실험과 연결)
- 학문 경로: 생리학·물리학(Cambridge) → 철학 → 심리학 → (잠시 목수) → AI (Edinburgh, Longuet-Higgins 지도)
- 당시 지도교수는 신경망을 버리고 기호주의 AI(symbolic AI)로 옮겨간 상태였지만, Hinton은 자기 신념대로 신경망 연구를 고수
- 영국에서 직장을 못 구해 California(Sloan Fellowship)로 이동 → 영국에서 "어리석다" 취급받던 신경망이 California(Don Norman, David Rumelhart)에서는 긍정적으로 받아들여짐

### 역전파(Backpropagation)의 확산
- 1982년경 David Rumelhart, Ron Williams와 함께 backprop 알고리즘 개발 (주로 Rumelhart의 아이디어)
- 미분에 연쇄법칙(chain rule)을 쓰는 것 자체는 새롭지 않았고 — Paul Werbos 등 여러 사람이 먼저 발명했으나 주목받지 못함
- **1986년 Nature 논문**이 수용의 전환점(inflection). 가족 관계(family tree) 단어 triple("Mary has mother Victoria")로 학습 → 앞 두 단어로 마지막 단어 예측
- 학습 후 단어 표현(작은 벡터)에서 국적·세대·가계 분파 같은 **의미 특징(features)**이 드러남 → **초기 워드 임베딩(word embeddings)**
- 의의: 개념을 "특징의 묶음"으로 보는 심리학 관점과, "다른 개념과의 관계(graph/semantic net)"로 보는 AI 관점을 통합 — 그래프 표현 ↔ 특징 벡터를 오가며 일반화(generalize) 가능함을 보임
- 1980년대 후반~90년대 초: 컴퓨터 속도 약 100배 향상(Lisp machine 0.1 메가플롭 미만 → 약 10 메가플롭), Bengio가 실제 영어 텍스트로 임베딩 적용

### Hinton이 가장 자랑스러워하는 연구들
- **Boltzmann machine** (Terry Sejnowski와 함께): 일부 노드만 관찰 가능한 큰 밀집 신경망에서 숨은 표현(hidden representation)을 학습하는 매우 단순한 알고리즘. 각 시냅스가 직접 연결된 두 뉴런 정보만 알면 되어 뇌에 구현 가능해 보임. wake/sleep 두 단계
  - 너무 느려 한동안 호기심거리였으나 → 단순화하여 **Restricted Boltzmann Machine(RBM)** 도출, 실전에서 효과적 (Netflix 대회 우승작의 한 요소)
- **Deep Belief Net** (~2007): RBM을 한 층씩 쌓아 학습(학습한 특징을 다시 데이터로 취급). Yee-Whye Teh가 전체를 하나의 모델로 정리 — 위에는 RBM, 아래는 sigmoid belief net(Radford Neal). 단일 forward pass로 빠른 근사 추론(inference) 가능, 층을 추가할 때마다 변분 경계(variational bound)가 개선됨
- **변분법(Variational methods)** (Radford Neal과): EM 알고리즘에서 완벽한 E-step 없이 근사 E-step만으로 동작함을 보임. 1993년 van Camp와의 논문은 최초의 변분 베이즈(variational Bayes) 논문 — 진짜 사후분포를 가우시안으로 근사

### ReLU와 수학
- ReLU(rectified linear unit)가 로지스틱 유닛 스택과 거의 정확히 등가임을 RBM 연구로 보임 → ReLU 확산에 기여
- 이 경우는 수학이 아이디어 발전에 실제로 중요했던 사례: Boltzmann machine의 모든 수식이 ReLU에서도 성립함을 등가성으로 증명
- 2014년 Google: ReLU + 항등 행렬(identity matrix) 초기화로 300개 은닉층 네트워크도 효율적 학습 가능함을 시연 → 후의 **residual network**와 같은 발상이었으나 더 밀고 나가지 못한 것을 후회

### Backprop과 뇌(Brain)
- 신경과학자들이 "backprop은 생물학적으로 그럴듯하지 않다"고 보는 것은 어리석다는 입장 — backprop이 좋은 알고리즘이라면 진화가 구현 방법을 찾아냈을 것
- 뇌는 정확한 backprop은 아니어도 그에 가까운 무언가를 가졌을 것
- 관련 아이디어들: recirculation 알고리즘(1987, McClelland와) — 정보를 루프로 돌려 변화를 없애는 autoencoder 학습. 후에 신경과학의 **spike-time-dependent plasticity(STDP)**가 같은 알고리즘의 역방향임을 발견
- 2007년: RBM 스택을 학습한 뒤 reconstruction error가 판별(discriminative) 성능의 미분값을 알려줌 → 뇌가 backprop을 구현하는 방식일 수 있음

### 다중 시간 스케일과 Fast Weights
- 대학원 첫 해(1973)부터의 주제: **fast weights** — 빠르게 적응하고 빠르게 감쇠해 단기 기억(short-term memory)을 담는 가중치
- 재귀 호출(recursion)에서 뉴런·가중치를 재사용할 때, "하던 작업"의 기억을 fast weights에 저장했다가 활동 상태를 복원
- 1973년 미발표 모델 → 약 40년 후 Jimmy Ba와 NIPS 논문(2015/2016)

### Capsules (캡슐)
- "내가 믿는 아이디어를 아무도 안 믿고 논문은 거절당하는" 익숙한 상태로 복귀했지만 계속 밀고 나가는 중
- **핵심 1 — 다차원 개체 표현**: 특정 영역에 한 종류의 특징이 최대 하나만 있다고 가정하면, 뉴런 묶음의 활동으로 그 특징의 여러 속성(x·y 좌표, 방향, 속도, 색, 밝기 등)을 표현 가능. 이 부분집합을 **capsule**이라 부름 (일반 뉴런은 스칼라 속성 하나만 가짐)
- **핵심 2 — routing by agreement(합의에 의한 라우팅)**: 예) 입(mouth) 캡슐과 코(nose) 캡슐이 각각 "얼굴(face)"의 파라미터를 투표 → 공간 관계가 맞으면 일치(agreement). 고차원 공간에서 우연한 일치는 매우 드물므로, 일치하면 옳다고 가정
- 기대 효과: 제한된 데이터로 더 잘 일반화, 시점 변화(viewpoint) 대응, 분할(segmentation)에 강함, 통계적 효율 향상. 여전히 지도학습(supervised)으로 학습하되 forward pass에 작은 반복(iteration)이 들어가고 그 반복까지 backprop으로 판별 학습

### AI 패러다임에 대한 견해
- 비지도학습(unsupervised learning)이 장기적으로 결정적이라 믿지만 — 현실적으로 지난 10년 성과는 레이블을 쓰는 **지도/판별 학습**에서 나옴. 비지도학습은 아직 제대로 하는 법을 모름
- 새로운 비지도 아이디어로 VAE(re-parameterization trick), **GAN(생성적 적대 신경망)**을 높이 평가 — GAN을 최근 딥러닝의 가장 큰 새 아이디어로 봄
- slow features 비판: 변하지 않는 특징이 아니라 **예측 가능하게 변하는** 특징을 찾아야 함. 일반 원리 — 측정값에 비선형 변환을 거듭 적용해 "동작이 선형이 되는" 상태 벡터 표현을 찾는 것 (예: 픽셀→좌표 변환 후 행렬 곱으로 시점 변경, 다시 픽셀로)
- AI 패러다임 전환: 초기엔 지능 = 기호 표현(symbolic expression)·추론이라 믿었으나, 지금은 **생각 = 신경 활동의 큰 벡터(big vector)**라는 관점. "생각이 언어(단어 문자열)여야 한다는 발상은, 공간 장면 이해가 픽셀이어야 한다는 발상만큼 어리석다"

## 예시 / 핵심 일화
- **1986 Nature 가족관계 실험**: triple로 학습한 모델이 단어 벡터에서 국적·세대 등 의미 특징을 자동 학습 → 워드 임베딩의 효시
- **routing by agreement 비유**: 입·코 캡슐이 같은 "얼굴" 파라미터에 투표해 일치하면 하나로 묶음
- **Yee-Whye Teh 일화**: "안 될 것 같다"고 말하기 전에 좋은 학생은 이미 그 가정을 알아채고 다르게 해석해 동작시킴 → 항상 프로그래밍을 멈추지 말라는 교훈

## 딥러닝 입문자를 위한 조언 (Career Advice)
- **문헌은 적당히 읽어라**: 너무 많이 읽지 말고, 모두가 잘못하고 있다고 느끼는 지점을 포착해 옳게 고치는 방향으로 — 창의적 연구자에게 유효
- **직관을 믿어라**: "직관이 좋으면 따르면 성공하고, 직관이 나쁘면 무엇을 해도 안 된다 — 그러니 어차피 직관을 믿는 게 낫다"
- **모두가 헛소리라 하면 오히려 좋은 신호일 수 있다** (단, 틀렸을 가능성도 있음). 예: 변분법 초기에 전문가들이 "취했거나 멍청하다"고 평가
- **논문을 재현(replicate)하라**: 동작에 필요한 온갖 작은 트릭을 알게 됨
- **프로그래밍을 멈추지 마라**: 실패의 원인은 사소하지만 결정적인 선택인 경우가 많음
- **신념이 비슷한 지도교수를 찾아라**: 지도교수가 깊이 관심 갖는 주제를 하면 좋은 조언과 시간을 많이 받음
- **PhD vs 기업**: 현재는 딥러닝을 가르칠 학계 인력이 부족(일시적). 컴퓨터를 "프로그래밍"하는 대신 "보여주고(showing) 스스로 알아내게" 하는 패러다임 전환이 진행 중이라, 당분간 대기업(예: Google brain residents)이 훈련을 상당 부분 담당

## 요약
- Hinton은 backprop, Boltzmann machine/RBM, deep belief net, 변분법, fast weights, capsules 등 딥러닝의 핵심 아이디어를 다수 창안
- 1986 Nature 논문이 backprop 수용의 전환점이자 초기 워드 임베딩의 출발
- 뇌는 backprop에 가까운 무언가를 구현했을 것이며, RBM 스택의 reconstruction error로 미분을 얻는 방식이 그 후보
- 현재 가장 흥미로워하는 연구는 **capsules**와 **routing by agreement**, 그리고 장기적으로 **비지도학습**
- 패러다임 핵심: 생각은 기호 표현이 아니라 **신경 활동의 큰 벡터**
- 입문 조언: 문헌은 적당히, **직관을 믿고**, 논문을 재현하고, 프로그래밍을 멈추지 말 것

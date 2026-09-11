# Mathematics for Machine Learning: Linear Algebra

MOOC · **Imperial College London** · 강사 **David Dye**(모듈 1~4) · **Sam Cooper**(모듈 5) · A. Freddie Page
[강좌 페이지](https://www.mooc.org/learn/linear-algebra-machine-learning) · 5모듈 19시간 · 초급 · 과제 15개 · 평점 4.6 (12,609개 리뷰) · 478,711명 수강

**`Mathematics for Machine Learning` 전문과정의 1번째 코스**다. 2번째가 [Multivariate Calculus](../Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/README.md)(18h), 3번째가 PCA(21h)이며 **셋 다 MOOC Plus 포함**이다.

- 수강·정리일: **2026-09-04**
- 수강 목적: [인공지능융합공학부 로드맵](../../../../study-progress/%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%EC%9C%B5%ED%95%A9%EA%B3%B5%ED%95%99%EB%B6%80%20%EB%A1%9C%EB%93%9C%EB%A7%B5/README.md)의 **선형대수 공백**을 메우기 위해. 강남대 인공지능전공 **인공지능수학(2학년 1학기)** 에 대응한다
- MOOC Plus 포함 강좌

## 이 강좌의 성격 ⭐

> **"고전적 교육 방식은 직관을 세우는 데 큰 강조를 두지 않은 채 손으로 수많은 예제를 푸는 것을 중심으로 한다. 그러나 이제 컴퓨터가 계산의 거의 전부를 대신한다."** — Sam Cooper, [08 Summary](Module%205%20-%20Eigenvalues%20and%20Eigenvectors%20-%20Application%20to%20Data%20Problems/08%20Summary.md)

**계산 숙련보다 개념과 기하학적 직관**을 목표로 한다. 강좌 자체가 **"고유 문제를 손으로 푸는 연습은 시간을 잘 쓰는 것이 아니다"** 라고 명시한다.

⚠️ **대학원 선형대수의 토대가 아니다.** ML에 응용이 없는 주제(외적 등)는 다루지 않는다.

## 강좌를 관통하는 두 문제

1. **사과와 바나나 가격 발견** — 연립방정식 → [행렬](Module%203%20-%20Matrices%20in%20Linear%20Algebra%20-%20Objects%20that%20operate%20on%20Vectors/01%20Matrices,%20vectors,%20and%20solving%20simultaneous%20equation%20problems.md) → [가우스 소거법](Module%203%20-%20Matrices%20in%20Linear%20Algebra%20-%20Objects%20that%20operate%20on%20Vectors/05%20Solving%20the%20apples%20and%20bananas%20problem%20-%20Gaussian%20elimination.md)
2. **키 분포에 함수 맞추기** — 파라미터 공간의 벡터 → [Multivariate Calculus](../Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/README.md)로 이어진다

## 강의 목록

### [Module 1 - Introduction to Linear Algebra and to Mathematics for Machine Learning](Module%201%20-%20Introduction%20to%20Linear%20Algebra%20and%20to%20Mathematics%20for%20Machine%20Learning/) (2시간)

| # | 강의 |
|---|---|
| 1 | [01 Introduction - Solving data science challenges with mathematics](Module%201%20-%20Introduction%20to%20Linear%20Algebra%20and%20to%20Mathematics%20for%20Machine%20Learning/01%20Introduction%20-%20Solving%20data%20science%20challenges%20with%20mathematics.md) |
| 2 | [02 Motivations for linear algebra](Module%201%20-%20Introduction%20to%20Linear%20Algebra%20and%20to%20Mathematics%20for%20Machine%20Learning/02%20Motivations%20for%20linear%20algebra.md) — 사과·바나나 + 데이터 피팅 |
| 3 | ⭐ [03 Getting a handle on vectors](Module%201%20-%20Introduction%20to%20Linear%20Algebra%20and%20to%20Mathematics%20for%20Machine%20Learning/03%20Getting%20a%20handle%20on%20vectors.md) — **벡터는 목록이다** |
| 4 | [04 Operations with vectors](Module%201%20-%20Introduction%20to%20Linear%20Algebra%20and%20to%20Mathematics%20for%20Machine%20Learning/04%20Operations%20with%20vectors.md) — 덧셈과 스칼라 곱 |
| 5 | [05 Summary](Module%201%20-%20Introduction%20to%20Linear%20Algebra%20and%20to%20Mathematics%20for%20Machine%20Learning/05%20Summary.md) |

### [Module 2 - Vectors are objects that move around space](Module%202%20-%20Vectors%20are%20objects%20that%20move%20around%20space/) (2시간)

| # | 강의 |
|---|---|
| 1 | [01 Introduction to module 2 - Vectors](Module%202%20-%20Vectors%20are%20objects%20that%20move%20around%20space/01%20Introduction%20to%20module%202%20-%20Vectors.md) |
| 2 | ⭐ [02 Modulus & inner product](Module%202%20-%20Vectors%20are%20objects%20that%20move%20around%20space/02%20Modulus%20&%20inner%20product.md) — 내적의 세 성질, `r·r = \|r\|²` |
| 3 | ⭐ [03 Cosine & dot product](Module%202%20-%20Vectors%20are%20objects%20that%20move%20around%20space/03%20Cosine%20&%20dot%20product.md) — `r·s = \|r\|\|s\|cos θ` |
| 4 | [04 Projection](Module%202%20-%20Vectors%20are%20objects%20that%20move%20around%20space/04%20Projection.md) — 스칼라·벡터 투영 |
| 5 | ⭐ [05 Changing basis](Module%202%20-%20Vectors%20are%20objects%20that%20move%20around%20space/05%20Changing%20basis.md) — 투영으로 기저 바꾸기 |
| 6 | [06 Basis, vector space, and linear independence](Module%202%20-%20Vectors%20are%20objects%20that%20move%20around%20space/06%20Basis,%20vector%20space,%20and%20linear%20independence.md) |
| 7 | [07 Applications of changing basis](Module%202%20-%20Vectors%20are%20objects%20that%20move%20around%20space/07%20Applications%20of%20changing%20basis.md) — 노이즈 분리·신경망 특징 추출 |
| 8 | [08 Summary](Module%202%20-%20Vectors%20are%20objects%20that%20move%20around%20space/08%20Summary.md) |

### [Module 3 - Matrices in Linear Algebra - Objects that operate on Vectors](Module%203%20-%20Matrices%20in%20Linear%20Algebra%20-%20Objects%20that%20operate%20on%20Vectors/) (3시간)

| # | 강의 |
|---|---|
| 1 | ⭐ [01 Matrices, vectors, and solving simultaneous equation problems](Module%203%20-%20Matrices%20in%20Linear%20Algebra%20-%20Objects%20that%20operate%20on%20Vectors/01%20Matrices,%20vectors,%20and%20solving%20simultaneous%20equation%20problems.md) |
| 2 | ⭐ [02 How matrices transform space](Module%203%20-%20Matrices%20in%20Linear%20Algebra%20-%20Objects%20that%20operate%20on%20Vectors/02%20How%20matrices%20transform%20space.md) — **행렬의 열 = 기저 벡터가 가는 곳** |
| 3 | [03 Types of matrix transformation](Module%203%20-%20Matrices%20in%20Linear%20Algebra%20-%20Objects%20that%20operate%20on%20Vectors/03%20Types%20of%20matrix%20transformation.md) — 항등·스케일·거울·전단·회전 |
| 4 | [04 Composition or combination of matrix transformations](Module%203%20-%20Matrices%20in%20Linear%20Algebra%20-%20Objects%20that%20operate%20on%20Vectors/04%20Composition%20or%20combination%20of%20matrix%20transformations.md) — ⚠️ 교환법칙 불성립 |
| 5 | ⭐ [05 Solving the apples and bananas problem - Gaussian elimination](Module%203%20-%20Matrices%20in%20Linear%20Algebra%20-%20Objects%20that%20operate%20on%20Vectors/05%20Solving%20the%20apples%20and%20bananas%20problem%20-%20Gaussian%20elimination.md) |
| 6 | [06 Going from Gaussian elimination to finding the inverse matrix](Module%203%20-%20Matrices%20in%20Linear%20Algebra%20-%20Objects%20that%20operate%20on%20Vectors/06%20Going%20from%20Gaussian%20elimination%20to%20finding%20the%20inverse%20matrix.md) |
| 7 | ⭐⭐ [07 Determinants and inverses](Module%203%20-%20Matrices%20in%20Linear%20Algebra%20-%20Objects%20that%20operate%20on%20Vectors/07%20Determinants%20and%20inverses.md) — **det=0 ⇔ 역행렬 없음** |
| 8 | [08 Summary](Module%203%20-%20Matrices%20in%20Linear%20Algebra%20-%20Objects%20that%20operate%20on%20Vectors/08%20Summary.md) |

### [Module 4 - Matrices make linear mappings](Module%204%20-%20Matrices%20make%20linear%20mappings/) (7시간)

| # | 강의 |
|---|---|
| 1 | ⭐ [01 Introduction - Einstein summation convention and the symmetry of the dot product](Module%204%20-%20Matrices%20make%20linear%20mappings/01%20Introduction%20-%20Einstein%20summation%20convention%20and%20the%20symmetry%20of%20the%20dot%20product.md) — **내적 = 행렬 곱셈** |
| 2 | ⭐ [02 Matrices changing basis](Module%204%20-%20Matrices%20make%20linear%20mappings/02%20Matrices%20changing%20basis.md) — 판다 곰 비유 |
| 3 | ⭐⭐ [03 Doing a transformation in a changed basis](Module%204%20-%20Matrices%20make%20linear%20mappings/03%20Doing%20a%20transformation%20in%20a%20changed%20basis.md) — **`B⁻¹RB`** |
| 4 | ⭐⭐ [04 Orthogonal matrices](Module%204%20-%20Matrices%20make%20linear%20mappings/04%20Orthogonal%20matrices.md) — **`A⁻¹ = Aᵀ`** |
| 5 | ⭐ [05 The Gram-Schmidt process](Module%204%20-%20Matrices%20make%20linear%20mappings/05%20The%20Gram-Schmidt%20process.md) |
| 6 | [06 Example - Reflecting in a plane](Module%204%20-%20Matrices%20make%20linear%20mappings/06%20Example%20-%20Reflecting%20in%20a%20plane.md) — 이 강좌 최장 강의 |

### [Module 5 - Eigenvalues and Eigenvectors - Application to Data Problems](Module%205%20-%20Eigenvalues%20and%20Eigenvectors%20-%20Application%20to%20Data%20Problems/) (4시간)

| # | 강의 |
|---|---|
| 1 | [01 Welcome to module 5](Module%205%20-%20Eigenvalues%20and%20Eigenvectors%20-%20Application%20to%20Data%20Problems/01%20Welcome%20to%20module%205.md) |
| 2 | ⭐⭐ [02 What are eigenvalues and eigenvectors](Module%205%20-%20Eigenvalues%20and%20Eigenvectors%20-%20Application%20to%20Data%20Problems/02%20What%20are%20eigenvalues%20and%20eigenvectors.md) — 기하학적 정의 |
| 3 | [03 Special eigen-cases](Module%205%20-%20Eigenvalues%20and%20Eigenvectors%20-%20Application%20to%20Data%20Problems/03%20Special%20eigen-cases.md) — **3D 회전의 고유벡터 = 회전축** |
| 4 | ⭐ [04 Calculating eigenvectors](Module%205%20-%20Eigenvalues%20and%20Eigenvectors%20-%20Application%20to%20Data%20Problems/04%20Calculating%20eigenvectors.md) — 특성 다항식 |
| 5 | ⭐⭐ [05 Changing to the eigenbasis](Module%205%20-%20Eigenvalues%20and%20Eigenvectors%20-%20Application%20to%20Data%20Problems/05%20Changing%20to%20the%20eigenbasis.md) — **대각화 `Tⁿ = CDⁿC⁻¹`** |
| 6 | [06 Eigenbasis example](Module%205%20-%20Eigenvalues%20and%20Eigenvectors%20-%20Application%20to%20Data%20Problems/06%20Eigenbasis%20example.md) |
| 7 | ⭐⭐ [07 Introduction to PageRank](Module%205%20-%20Eigenvalues%20and%20Eigenvectors%20-%20Application%20to%20Data%20Problems/07%20Introduction%20to%20PageRank.md) — **`r = Lr` 은 고유 문제** |
| 8 | [08 Summary](Module%205%20-%20Eigenvalues%20and%20Eigenvectors%20-%20Application%20to%20Data%20Problems/08%20Summary.md) |
| 9 | [09 Wrap up of this linear algebra course](Module%205%20-%20Eigenvalues%20and%20Eigenvectors%20-%20Application%20to%20Data%20Problems/09%20Wrap%20up%20of%20this%20linear%20algebra%20course.md) |

## 정리본이 없는 항목

**행정 안내 읽기 자료 5건** — `About Imperial College & the team` · `How to be successful in this course` · `Grading policy` · `Additional readings & helpful references` · `Did you like the course? Let us know!`

**평가 항목 15건** — 연습문제와 채점 과제. **파이썬 프로그래밍 과제 2건**(그람-슈미트, PageRank)이 핵심이다.

## 핵심 개념 한눈에 보기

| 개념 | 식 | 정리본 |
|---|---|---|
| 벡터의 크기 | `\|r\| = √(Σrᵢ²)` | [M2-02](Module%202%20-%20Vectors%20are%20objects%20that%20move%20around%20space/02%20Modulus%20&%20inner%20product.md) |
| **내적** | `r·s = Σrᵢsᵢ = \|r\|\|s\|cos θ` | [M2-03](Module%202%20-%20Vectors%20are%20objects%20that%20move%20around%20space/03%20Cosine%20&%20dot%20product.md) |
| 스칼라 투영 | `(r·s)/\|r\|` | [M2-04](Module%202%20-%20Vectors%20are%20objects%20that%20move%20around%20space/04%20Projection.md) |
| 벡터 투영 | `((r·s)/(r·r))·r` | 〃 |
| **선형독립** | `b₃ = a₁b₁ + a₂b₂` 를 만족하는 수가 없으면 독립 | [M2-06](Module%202%20-%20Vectors%20are%20objects%20that%20move%20around%20space/06%20Basis,%20vector%20space,%20and%20linear%20independence.md) |
| **행렬의 열** | **각 기저 벡터가 가는 곳** | [M3-02](Module%203%20-%20Matrices%20in%20Linear%20Algebra%20-%20Objects%20that%20operate%20on%20Vectors/02%20How%20matrices%20transform%20space.md) |
| 회전 행렬 | `[[cos θ, −sin θ], [sin θ, cos θ]]` | [M3-03](Module%203%20-%20Matrices%20in%20Linear%20Algebra%20-%20Objects%20that%20operate%20on%20Vectors/03%20Types%20of%20matrix%20transformation.md) |
| 행렬 곱 | ⚠️ **교환 불가**, 결합 가능 | [M3-04](Module%203%20-%20Matrices%20in%20Linear%20Algebra%20-%20Objects%20that%20operate%20on%20Vectors/04%20Composition%20or%20combination%20of%20matrix%20transformations.md) |
| **행렬식** | `det = ad − bc` = **공간이 커지는 배율** | [M3-07](Module%203%20-%20Matrices%20in%20Linear%20Algebra%20-%20Objects%20that%20operate%20on%20Vectors/07%20Determinants%20and%20inverses.md) |
| 2×2 역행렬 | `(1/det)·[[d, −b], [−c, a]]` | 〃 |
| **det = 0** | **선형종속 ⇔ 역행렬 없음 ⇔ 정보 손실** | 〃 |
| 아인슈타인 규약 | `(AB)ᵢₖ = aᵢⱼbⱼₖ` | [M4-01](Module%204%20-%20Matrices%20make%20linear%20mappings/01%20Introduction%20-%20Einstein%20summation%20convention%20and%20the%20symmetry%20of%20the%20dot%20product.md) |
| **낯선 기저에서의 변환** | **`B⁻¹ R B`** | [M4-03](Module%204%20-%20Matrices%20make%20linear%20mappings/03%20Doing%20a%20transformation%20in%20a%20changed%20basis.md) |
| **직교행렬** | `AᵀA = I` → **`A⁻¹ = Aᵀ`**, `det = ±1` | [M4-04](Module%204%20-%20Matrices%20make%20linear%20mappings/04%20Orthogonal%20matrices.md) |
| 그람-슈미트 | `uₖ = vₖ − Σ(vₖ·eᵢ)eᵢ`, `eₖ = uₖ/\|uₖ\|` | [M4-05](Module%204%20-%20Matrices%20make%20linear%20mappings/05%20The%20Gram-Schmidt%20process.md) |
| **고유 문제** | `Ax = λx` → `det(A − λI) = 0` | [M5-04](Module%205%20-%20Eigenvalues%20and%20Eigenvectors%20-%20Application%20to%20Data%20Problems/04%20Calculating%20eigenvectors.md) |
| **대각화** | **`Tⁿ = C Dⁿ C⁻¹`** | [M5-05](Module%205%20-%20Eigenvalues%20and%20Eigenvectors%20-%20Application%20to%20Data%20Problems/05%20Changing%20to%20the%20eigenbasis.md) |
| **PageRank** | `r = Lr` (**λ=1 고유벡터**), 거듭제곱 법 | [M5-07](Module%205%20-%20Eigenvalues%20and%20Eigenvectors%20-%20Application%20to%20Data%20Problems/07%20Introduction%20to%20PageRank.md) |

## 이 강좌의 특징

- **비유가 기억에 남는다** — 사과·바나나(연립방정식), **판다 곰의 세계**(기저 변환), **미루기 대장 팻**(PageRank).
- **모듈 4가 7시간으로 가장 무겁다.** 기저 변환과 직교행렬이 몰려 있고, 강사도 **"꽤 힘든 작업이었다"** 고 인정한다.
- **모듈 5에서 강사가 Sam Cooper로 바뀐다.** 고유 문제를 **기하학 먼저, 수식 나중**으로 가르치며, 이 접근이 [Multivariate Calculus](../Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/README.md)로 이어진다.
- ⚠️ **정리본은 영어 자막 전문을 근거로 작성했다.** 행렬·수식은 자막에서 말로 읽은 것을 복원한 것이라 **슬라이드의 정확한 표기와 다를 수 있다.** 특히 [M4-06 Reflecting in a plane](Module%204%20-%20Matrices%20make%20linear%20mappings/06%20Example%20-%20Reflecting%20in%20a%20plane.md)의 마지막 계산 단계는 판서에 의존해 **절차만 적었다.** 막히면 **원본 강의 링크로 영상을 보는 편이 빠르다.**

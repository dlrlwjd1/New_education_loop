# Introduction to Computer Vision and Image Processing

MOOC · **IBM** · 강사 **Aije Egwaikhide** · **Joseph Santarcangelo**
[강좌 페이지](https://www.mooc.org/learn/introduction-computer-vision-watson-opencv) · 6모듈 약 24시간 · 중급 · 과제 10개 · 평점 4.3 (1,439개 리뷰) · 108,134명 수강

**`IBM AI Developer Professional Certificate`의 한 강좌**다. ⚠️ **이 강좌에 등록하면 해당 Professional Certificate에도 함께 등록된다.**

- 수강·정리일: **2026-09-04**
- 수강 목적: [인공지능융합공학부 로드맵](../../../../study-progress/%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%EC%9C%B5%ED%95%A9%EA%B3%B5%ED%95%99%EB%B6%80%20%EB%A1%9C%EB%93%9C%EB%A7%B5/README.md)의 **전통 영상처리·OpenCV 공백**을 메우기 위해. 강남대 인공지능전공 **컴퓨터비전(3학년 1학기)** 에 대응한다
- MOOC Plus 포함 강좌
- 선수 지식: **파이썬 기초 + 고등학교 수준 수학.** 머신러닝·컴퓨터비전 사전 경험 불필요

## ⚠️ 영상은 26개뿐이다 — 나머지는 실습 랩

강좌 시간은 24시간이지만 **영상 강의는 26개**고, 나머지 대부분이 **JupyterLab 실습 랩**이다. 그래서 **이 정리본만 읽으면 개념은 잡히지만 손은 안 익는다.** 코드를 직접 돌려 보고 싶다면 강좌의 랩을 함께 해야 한다.

| 모듈 | 시간 | 영상 |
|---|---|---|
| M1 Introduction to Computer Vision | 1h | 5 |
| ⭐ **M2 Image Processing with OpenCV and Pillow** | **8h** | 6 |
| M3 Machine Learning Image Classification | 5h | 8 |
| M4 Neural Networks and Deep Learning | 4h | 4 |
| M5 Object Detection | 2h | 2 |
| M6 Project Case: Traffic Sign Classification | 4h | 1 |

## 이 강좌의 성격 ⭐

**"픽셀에서 CNN까지"를 한 강좌로 훑는다.** 저장소의 다른 자료와의 관계는 이렇다.

| 모듈 | 저장소에서의 위치 |
|---|---|
| ⭐⭐ **M2 영상처리** | **이 강좌에서만 있는 부분.** 히스토그램·임계화·아핀 변환·합성곱·Sobel·중간값 필터 — **저장소의 다른 어느 강좌도 이걸 정면으로 다루지 않는다** |
| M3 ML 분류 | KNN·로지스틱·SVM·HOG. IBM Data Science `09 Machine Learning with Python`과 일부 겹치지만 **HOG는 여기만 있다** |
| M4 신경망·CNN | ⚠️ **[Deep Learning Specialization](../../../deeplearning-ai/Deep%20Learning%20Specialization/README.md)** 이 훨씬 깊게 다룬다. 여기는 요약 수준 |
| M5 객체 탐지 | ⭐ **Haar cascade(Viola-Jones)는 여기만 있다.** 딥러닝 탐지는 DLS Course 4 참조 |

⭐ **강좌 전체를 관통하는 서사** — **HOG가 사람이 정한 Sobel 커널을 쓴다 → CNN은 그 커널을 학습한다.** M2의 합성곱이 M3의 HOG로, 다시 M4의 CNN으로 이어진다.

## 강의 목록

### [Module 1 - Introduction to Computer Vision](Module%201%20-%20Introduction%20to%20Computer%20Vision/) (1시간)

| # | 강의 |
|---|---|
| 1 | [01 Course Introduction](Module%201%20-%20Introduction%20to%20Computer%20Vision/01%20Course%20Introduction.md) |
| 2 | ⭐ [02 Introduction to Computer Vision](Module%201%20-%20Introduction%20to%20Computer%20Vision/02%20Introduction%20to%20Computer%20Vision.md) — **컴퓨터에게 보는 능력을 주는 것**, ADNOC·Knockri 사례 |
| 3 | ⭐ [03 Applications of Computer Vision](Module%201%20-%20Introduction%20to%20Computer%20Vision/03%20Applications%20of%20Computer%20Vision.md) — **분류기를 이어 붙이는 설계**(송전탑 녹 점검) |
| 4 | [04 Recent Research in Computer Vision](Module%201%20-%20Introduction%20to%20Computer%20Vision/04%20Recent%20Research%20in%20Computer%20Vision.md) |
| 5 | ⭐ [05 Brainstorming Your Own Applications](Module%201%20-%20Introduction%20to%20Computer%20Vision/05%20Brainstorming%20Your%20Own%20Applications.md) — **해법이 아니라 문제에서 시작한다** |

### [Module 2 - Image Processing with OpenCV and Pillow](Module%202%20-%20Image%20Processing%20with%20OpenCV%20and%20Pillow/) (8시간) — ⭐ 공백을 메우는 본체

| # | 강의 |
|---|---|
| 1 | ⭐⭐ [01 What Is A Digital Image](Module%202%20-%20Image%20Processing%20with%20OpenCV%20and%20Pillow/01%20What%20Is%20A%20Digital%20Image.md) — **숫자의 배열**, ⚠️ **PIL은 RGB · OpenCV는 BGR** |
| 2 | ⭐ [02 Manipulating Images](Module%202%20-%20Image%20Processing%20with%20OpenCV%20and%20Pillow/02%20Manipulating%20Images.md) — ⚠️ **copy의 함정**, flip·rotate |
| 3 | [03 Manipulating Images One Pixel At a Time](Module%202%20-%20Image%20Processing%20with%20OpenCV%20and%20Pillow/03%20Manipulating%20Images%20One%20Pixel%20At%20a%20Time.md) — 자르기·도형·텍스트·겹치기 |
| 4 | ⭐⭐ [04 Pixel Transformations](Module%202%20-%20Image%20Processing%20with%20OpenCV%20and%20Pillow/04%20Pixel%20Transformations.md) — **히스토그램 · 밝기/대비 · 평활화 · 임계화** |
| 5 | ⭐ [05 Geometric Operations](Module%202%20-%20Image%20Processing%20with%20OpenCV%20and%20Pillow/05%20Geometric%20Operations.md) — **아핀 변환**, 보간 |
| 6 | ⭐⭐ [06 Spatial Operations in Image Processing](Module%202%20-%20Image%20Processing%20with%20OpenCV%20and%20Pillow/06%20Spatial%20Operations%20in%20Image%20Processing.md) — **합성곱 · Sobel 에지 검출 · 중간값 필터** |

### [Module 3 - Machine Learning Image Classification](Module%203%20-%20Machine%20Learning%20Image%20Classification/) (5시간)

| # | 강의 |
|---|---|
| 1 | ⭐ [01 Introduction to Image Classification](Module%203%20-%20Machine%20Learning%20Image%20Classification/01%20Introduction%20to%20Image%20Classification.md) — ⚠️ **다섯 가지 어려움** |
| 2 | ⭐ [02 Image Classification with KNN](Module%203%20-%20Machine%20Learning%20Image%20Classification/02%20Image%20Classification%20with%20KNN.md) — **훈련/검증/테스트**와 하이퍼파라미터 |
| 3 | ⭐⭐ [03 Linear Classifiers](Module%203%20-%20Machine%20Learning%20Image%20Classification/03%20Linear%20Classifiers.md) — **결정 경계 · 시그모이드** |
| 4 | ⭐⭐ [04 Logistic Regression Training - Gradient Descent](Module%203%20-%20Machine%20Learning%20Image%20Classification/04%20Logistic%20Regression%20Training%20-%20Gradient%20Descent.md) — **교차 엔트로피 · 경사하강 · 학습률** |
| 5 | [05 Mini-Batch Gradient Descent](Module%203%20-%20Machine%20Learning%20Image%20Classification/05%20Mini-Batch%20Gradient%20Descent.md) — epoch·batch·iteration |
| 6 | ⭐ [06 SoftMax and Multi-Class Classification](Module%203%20-%20Machine%20Learning%20Image%20Classification/06%20SoftMax%20and%20Multi-Class%20Classification.md) — **클래스마다 평면 하나 + argmax** |
| 7 | ⭐⭐ [07 Support Vector Machines SVM](Module%203%20-%20Machine%20Learning%20Image%20Classification/07%20Support%20Vector%20Machines%20SVM.md) — **커널 · 최대 마진**, ⚠️ **γ와 과적합** |
| 8 | ⭐⭐ [08 Image Features](Module%203%20-%20Machine%20Learning%20Image%20Classification/08%20Image%20Features.md) — ⚠️ **픽셀을 그대로 쓰면 안 되는 이유**, **HOG** |

### [Module 4 - Neural Networks and Deep Learning for Image Classification](Module%204%20-%20Neural%20Networks%20and%20Deep%20Learning%20for%20Image%20Classification/) (4시간)

| # | 강의 |
|---|---|
| 1 | ⭐⭐ [01 Neural Networks](Module%204%20-%20Neural%20Networks%20and%20Deep%20Learning%20for%20Image%20Classification/01%20Neural%20Networks.md) — **시그모이드 두 개를 빼면 상자 함수** |
| 2 | ⭐⭐ [02 Fully Connected Neural Network Architecture](Module%204%20-%20Neural%20Networks%20and%20Deep%20Learning%20for%20Image%20Classification/02%20Fully%20Connected%20Neural%20Network%20Architecture.md) — ⚠️ **기울기 소실**, ReLU |
| 3 | ⭐⭐ [03 Convolutional Networks](Module%204%20-%20Neural%20Networks%20and%20Deep%20Learning%20for%20Image%20Classification/03%20Convolutional%20Networks.md) — **학습되는 커널 · 수용 영역 · 풀링** |
| 4 | ⭐⭐ [04 CNN Architectures](Module%204%20-%20Neural%20Networks%20and%20Deep%20Learning%20for%20Image%20Classification/04%20CNN%20Architectures.md) — **LeNet·AlexNet·VGG·ResNet · 전이 학습** |

### [Module 5 - Object Detection](Module%205%20-%20Object%20Detection/) (2시간)

| # | 강의 |
|---|---|
| 1 | ⭐⭐ [01 Object Detection](Module%205%20-%20Object%20Detection/01%20Object%20Detection.md) — **슬라이딩 윈도우 · 바운딩 박스 · 점수** |
| 2 | ⭐⭐ [02 Object Detection with Haar Cascade Classifier](Module%205%20-%20Object%20Detection/02%20Object%20Detection%20with%20Haar%20Cascade%20Classifier.md) — **적분 이미지 · AdaBoost · 캐스케이드** |

### [Module 6 - Project Case - Traffic Sign Classification](Module%206%20-%20Project%20Case%20-%20Traffic%20Sign%20Classification/) (4시간)

| # | 강의 |
|---|---|
| 1 | [01 Course Wrap-Up](Module%206%20-%20Project%20Case%20-%20Traffic%20Sign%20Classification/01%20Course%20Wrap-Up.md) — 강좌 정리와 최종 프로젝트 안내 |

## 정리본이 없는 항목

**실습 랩(JupyterLab)** — 강좌 시간의 대부분. 이미지 로드·표시·자르기·회전, 클라우드 이미지 저장/전송, 히스토그램과 강도 변환, 임계화 분할, KNN·SVM 분류, HOG 특징 추출, 신경망 구축(ReLU vs 시그모이드), **ResNet 전이 학습**, 하이퍼파라미터 튜닝, **Haar cascade 차량 탐지**, ⭐ **Faster R-CNN 다중 객체 탐지**.

⚠️ **Faster R-CNN은 랩에만 있고 영상 강의에는 나오지 않는다.**

**읽기 자료** — `Course Overview`, `Articles`, 모듈별 `Module Summary`, `Reading: Training a Neural Network with Momentum and Data Augmentation`, `Object Detection with Deep Learning`, `Project Overview`, `Final Project Submission Guidelines`, `Course Summary: Podcast`.

**평가 항목** — 연습·채점 퀴즈, **동료 평가 최종 프로젝트**(전이 학습 정지 표지판 탐지기).

## 핵심 개념 한눈에 보기

| 개념 | 요점 | 정리본 |
|---|---|---|
| **디지털 이미지** | **0~255 강도값의 배열.** 컬러는 채널이 쌓인 큐브 | [M2-01](Module%202%20-%20Image%20Processing%20with%20OpenCV%20and%20Pillow/01%20What%20Is%20A%20Digital%20Image.md) |
| ⚠️ **PIL vs OpenCV** | **RGB vs BGR** | 〃 |
| ⚠️ **copy** | `A = img`는 같은 메모리. **`img.copy()`** | [M2-02](Module%202%20-%20Image%20Processing%20with%20OpenCV%20and%20Pillow/02%20Manipulating%20Images.md) |
| **히스토그램** | `cv2.calcHist` — 강도값의 발생 횟수 | [M2-04](Module%202%20-%20Image%20Processing%20with%20OpenCV%20and%20Pillow/04%20Pixel%20Transformations.md) |
| **밝기·대비** | `α·image + β` — **α=대비, β=밝기.** `convertScaleAbs` | 〃 |
| **네거티브** | `s = 255 − r` | 〃 |
| **히스토그램 평활화** | `cv2.equalizeHist` | 〃 |
| ⭐ **임계화(분할)** | `cv2.threshold(..., THRESH_BINARY)`, **`THRESH_OTSU`가 임계값 자동 선택** | 〃 |
| **아핀 변환** | `M = [[A,0,Tx],[0,D,Ty]]` → `cv2.warpAffine` | [M2-05](Module%202%20-%20Image%20Processing%20with%20OpenCV%20and%20Pillow/05%20Geometric%20Operations.md) |
| **회전 행렬** | `cv2.getRotationMatrix2D(center, angle, scale)` | 〃 |
| ⭐ **보간** | 늘리면 빈칸이 생긴다 → 최근접 이웃 등 | 〃 |
| ⭐⭐ **합성곱** | `cv2.filter2D` — **커널이 하는 일을 정한다** | [M2-06](Module%202%20-%20Image%20Processing%20with%20OpenCV%20and%20Pillow/06%20Spatial%20Operations%20in%20Image%20Processing.md) |
| ⚠️ **평활 필터** | 잡음↓ 하지만 **에지도 흐려진다(트레이드오프)** | 〃 |
| ⭐⭐ **Sobel 에지 검출** | `GaussianBlur` → `Sobel(dx,dy)` → `convertScaleAbs` → `addWeighted` | 〃 |
| **중간값 필터** | 잡음 제거·에지 유지, ⚠️ 형태 왜곡 | 〃 |
| **KNN** | K개 최근접 이웃 다수결. ⚠️ **느리고 실무용 아님** | [M3-02](Module%203%20-%20Machine%20Learning%20Image%20Classification/02%20Image%20Classification%20with%20KNN.md) |
| **선형 분류기** | `z = w·x + b`, **결정 경계 = z가 0인 선** | [M3-03](Module%203%20-%20Machine%20Learning%20Image%20Classification/03%20Linear%20Classifiers.md) |
| **시그모이드** | `σ(z) = 1/(1+e^(−z))` — 확률을 준다 | 〃 |
| ⭐⭐ **경사하강** | `b ← b − η·∂cost/∂b` | [M3-04](Module%203%20-%20Machine%20Learning%20Image%20Classification/04%20Logistic%20Regression%20Training%20-%20Gradient%20Descent.md) |
| **교차 엔트로피** | 분류 오차와 달리 **곡선이 매끄럽다** | 〃 |
| **반복 횟수** | **훈련 예제 수 ÷ 배치 크기** | [M3-05](Module%203%20-%20Machine%20Learning%20Image%20Classification/05%20Mini-Batch%20Gradient%20Descent.md) |
| **softmax** | **클래스마다 평면 하나 + argmax** | [M3-06](Module%203%20-%20Machine%20Learning%20Image%20Classification/06%20SoftMax%20and%20Multi-Class%20Classification.md) |
| ⭐ **서포트 벡터** | **초평면에 가장 가까운 예시. 그것만 중요하다** | [M3-07](Module%203%20-%20Machine%20Learning%20Image%20Classification/07%20Support%20Vector%20Machines%20SVM.md) |
| ⚠️ **γ와 과적합** | **γ가 클수록 패턴이 아니라 점에 맞춰진다** | 〃 |
| ⭐⭐ **HOG** | **회색조 → Sobel 크기·각도 → 셀별 방향 히스토그램 → 블록 정규화 → SVM** | [M3-08](Module%203%20-%20Machine%20Learning%20Image%20Classification/08%20Image%20Features.md) |
| ⭐ **전통 파이프라인** | **특징 추출 → 커널 → 선형 분류** | 〃 |
| ⭐⭐ **신경망의 직관** | **시그모이드 두 개를 빼면 상자 함수** | [M4-01](Module%204%20-%20Neural%20Networks%20and%20Deep%20Learning%20for%20Image%20Classification/01%20Neural%20Networks.md) |
| ⭐ **은닉층 = 커널** | **은닉층이 SVM의 커널을 대체한다** | [M4-02](Module%204%20-%20Neural%20Networks%20and%20Deep%20Learning%20for%20Image%20Classification/02%20Fully%20Connected%20Neural%20Network%20Architecture.md) |
| ⚠️ **기울기 소실** | 깊을수록 그래디언트가 작아진다 → **ReLU** | 〃 |
| ⭐⭐ **CNN의 커널** | **HOG는 Sobel 커널을 고정, CNN은 커널을 학습한다** | [M4-03](Module%204%20-%20Neural%20Networks%20and%20Deep%20Learning%20for%20Image%20Classification/03%20Convolutional%20Networks.md) |
| **수용 영역** | **층을 더하는 편이 커널을 키우는 것보다 파라미터가 적다** | 〃 |
| ⭐ **풀링** | 파라미터↓, 수용 영역↑, **작은 이동에 강해진다** | 〃 |
| **VGG의 통찰** | **큰 커널 → 3×3 스택.** 같은 수용 영역, 적은 파라미터 | [M4-04](Module%204%20-%20Neural%20Networks%20and%20Deep%20Learning%20for%20Image%20Classification/04%20CNN%20Architectures.md) |
| **ResNet** | **스킵 연결로 그래디언트가 층을 우회** | 〃 |
| ⭐ **전이 학습** | **사전 훈련 CNN = 특징 생성기.** softmax 층만 교체·훈련 | 〃 |
| **바운딩 박스** | `(좌상단, 우하단)` 또는 `(우하단, w, h)` | [M5-01](Module%205%20-%20Object%20Detection/01%20Object%20Detection.md) |
| ⭐ **점수** | **0~1 신뢰도.** 임계로 겹치는 오탐을 거른다 | 〃 |
| ⭐⭐ **Haar cascade** | **적분 이미지 → AdaBoost(18만→6천) → 캐스케이드(빨리 버린다)** | [M5-02](Module%205%20-%20Object%20Detection/02%20Object%20Detection%20with%20Haar%20Cascade%20Classifier.md) |

## 이 강좌의 특징

- ⭐⭐ **Module 2가 이 강좌의 존재 이유**다. 8시간짜리로 가장 무겁고, **저장소의 다른 어느 자료도 다루지 않는 전통 영상처리**를 담는다.
- ⭐ **HOG → CNN의 연결이 강좌를 관통한다.** [M3-08](Module%203%20-%20Machine%20Learning%20Image%20Classification/08%20Image%20Features.md)에서 **사람이 고른 Sobel 커널**로 HOG를 만들고, [M4-03](Module%204%20-%20Neural%20Networks%20and%20Deep%20Learning%20for%20Image%20Classification/03%20Convolutional%20Networks.md)에서 **그 커널을 학습시키면 CNN이 된다**고 설명한다. 이 서사가 이 강좌의 가장 좋은 부분이다.
- ⚠️ **M4는 요약 수준이다.** 신경망·CNN을 제대로 배우려면 [Deep Learning Specialization](../../../deeplearning-ai/Deep%20Learning%20Specialization/README.md)의 Course 1·2·4로 간다.
- ⚠️ **정리본은 영어 자막 전문을 근거로 작성했다.** 코드와 수식은 자막에서 말로 읽은 것을 복원한 것이라 **랩 노트북의 정확한 코드와 다를 수 있다.** 특히 [M2-03의 crop 좌표 변수](Module%202%20-%20Image%20Processing%20with%20OpenCV%20and%20Pillow/03%20Manipulating%20Images%20One%20Pixel%20At%20a%20Time.md)는 자막 설명 자체가 헷갈리게 되어 있어 그대로 옮기고 주의를 표시해 두었다. 또 [M1-04](Module%201%20-%20Introduction%20to%20Computer%20Vision/04%20Recent%20Research%20in%20Computer%20Vision.md)는 데모 영상이라 자막 뒷부분이 배경음악 가사이며, **설명이 있는 부분만** 정리했다.

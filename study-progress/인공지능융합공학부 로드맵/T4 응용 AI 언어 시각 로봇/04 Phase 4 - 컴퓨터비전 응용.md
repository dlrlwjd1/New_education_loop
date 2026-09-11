# T4 Phase 4 — 컴퓨터비전 응용

> 학부 교과 **컴퓨터비전응용(3학년 2학기, 이론실습병행 3학점)** · 선이수 = 컴퓨터비전
> 교과목해설: "이미지 및 비디오 분석, 객체 탐지, 이미지 분할, 딥러닝 기반 비전 모델 등을 배우며, 실제 데이터와 문제를 통해 컴퓨터 비전 시스템을 구축하고 평가하는 방법을 익힌다"

- 목표: "이 사진에 무엇이 있는가"를 넘어 **"어디에 있는가"** 까지 답하는 모델을 만든다.
- 분량: 약 16시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 분류·위치추정·객체 탐지·의미 분할의 차이를 출력 형태로 구분한다
- 바운딩 박스와 IoU를 계산하고 비최대 억제(NMS)가 무엇을 하는지 설명한다
- YOLO 계열의 한 번에 예측하는 방식과 영역 제안 방식(R-CNN)의 차이를 안다
- U-Net 구조가 왜 분할에 맞는지 설명한다
- 얼굴 인식을 **분류가 아닌 유사도 문제**로 푸는 이유(원샷 학습·샴 네트워크·트리플렛 손실)를 말한다
- 객체 탐지 모델의 성능을 mAP로 평가한다

## 4-A. 객체 탐지

메인: Deep Learning Specialization, `04 Convolutional Neural Networks` week 3. **이 Phase의 본체다**

- [ ] [01 Object Localization.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week3%20Object%20Detection/01%20Object%20Localization.md)
- [ ] [02 Landmark Detection.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week3%20Object%20Detection/02%20Landmark%20Detection.md)
- [ ] [03 Object Detection.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week3%20Object%20Detection/03%20Object%20Detection.md)
- [ ] [04 Convolutional Implementation of Sliding Windows.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week3%20Object%20Detection/04%20Convolutional%20Implementation%20of%20Sliding%20Windows.md)
- [ ] [05 Bounding Box Predictions.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week3%20Object%20Detection/05%20Bounding%20Box%20Predictions.md)
- [ ] [06 Intersection Over Union.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week3%20Object%20Detection/06%20Intersection%20Over%20Union.md)
- [ ] [07 Non-max Suppression.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week3%20Object%20Detection/07%20Non-max%20Suppression.md)
- [ ] [08 Anchor Boxes.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week3%20Object%20Detection/08%20Anchor%20Boxes.md)
- [ ] [09 YOLO Algorithm.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week3%20Object%20Detection/09%20YOLO%20Algorithm.md)
- [ ] [10 Region Proposals.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week3%20Object%20Detection/10%20Region%20Proposals.md)
- [ ] [11 Semantic Segmentation with U-Net.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week3%20Object%20Detection/11%20Semantic%20Segmentation%20with%20U-Net.md)
- [ ] [12 Transpose Convolutions.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week3%20Object%20Detection/12%20Transpose%20Convolutions.md)
- [ ] [13 U-Net Architecture Intuition.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week3%20Object%20Detection/13%20U-Net%20Architecture%20Intuition.md)
- [ ] [14 U-Net Architecture.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week3%20Object%20Detection/14%20U-Net%20Architecture.md)

## 4-B. 얼굴 인식과 신경망 스타일 전이

week 4

- [ ] [01 What is Face Recognition.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week4%20Face%20Recognition%20and%20Neural%20Style%20Transfer/01%20What%20is%20Face%20Recognition.md)
- [ ] [02 One Shot Learning.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week4%20Face%20Recognition%20and%20Neural%20Style%20Transfer/02%20One%20Shot%20Learning.md)
- [ ] [03 Siamese Network.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week4%20Face%20Recognition%20and%20Neural%20Style%20Transfer/03%20Siamese%20Network.md)
- [ ] [04 Triplet Loss.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week4%20Face%20Recognition%20and%20Neural%20Style%20Transfer/04%20Triplet%20Loss.md)
- [ ] [05 Face Verification and Binary Classification.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week4%20Face%20Recognition%20and%20Neural%20Style%20Transfer/05%20Face%20Verification%20and%20Binary%20Classification.md)
- [ ] [06 What is Neural Style Transfer.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week4%20Face%20Recognition%20and%20Neural%20Style%20Transfer/06%20What%20is%20Neural%20Style%20Transfer.md)
- [ ] [07 What are Deep ConvNets Learning.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week4%20Face%20Recognition%20and%20Neural%20Style%20Transfer/07%20What%20are%20Deep%20ConvNets%20Learning.md)
- [ ] [08 Cost Function.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week4%20Face%20Recognition%20and%20Neural%20Style%20Transfer/08%20Cost%20Function.md)
- [ ] [09 Content Cost Function.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week4%20Face%20Recognition%20and%20Neural%20Style%20Transfer/09%20Content%20Cost%20Function.md)
- [ ] [10 Style Cost Function.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week4%20Face%20Recognition%20and%20Neural%20Style%20Transfer/10%20Style%20Cost%20Function.md)
- [ ] [11 1D and 3D Generalizations.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week4%20Face%20Recognition%20and%20Neural%20Style%20Transfer/11%201D%20and%203D%20Generalizations.md)

## 4-C. 이미지 분할 — 보강 필요

week 3에 U-Net이 포함돼 있지만, **의미 분할(semantic segmentation)을 정면으로 다루는 자료는 저장소에서 이것뿐이다.** [Phase 3 3-E](03%20Phase%203%20-%20%EC%BB%B4%ED%93%A8%ED%84%B0%EB%B9%84%EC%A0%84.md#3-e-전통-영상-처리--저장소에-없음)의 IBM 강좌 Module 5(Object Detection)가 보조로 쓸 만하다.

원격탐사 쪽의 분할·분류 관점 (선택)

- [ ] [05 Hands-On Learning - Inspect a GeoTIFF Before Analysis.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%201%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Read%20and%20Understand%20Raster%20Data/05%20Hands-On%20Learning%20-%20Inspect%20a%20GeoTIFF%20Before%20Analysis.md)
- [ ] **03 Hands-on Learning - Evaluate Classification Results for Flood Detection.md**
- [ ] [03 Remote Sensing Analysis.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%2013%20-%20Project%20Module%20-%20Remote%20Sensing%20Analysis/03%20Remote%20Sensing%20Analysis.md)
- [ ] [02 Why Clip Rasters Before Analysis.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%202%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Clip%20Rasters%20to%20Your%20Area%20of%20Interest/02%20Why%20Clip%20Rasters%20Before%20Analysis.md)
- [ ] [05 Validating and Preparing Raster Data for Analysis.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%203%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Stack%20Bands%20for%20Multiband%20Analysis/05%20Validating%20and%20Preparing%20Raster%20Data%20for%20Analysis.md)
- [ ] [03 Hands-on Learning - Select the Correct Imagery Product for NDVI Analysis.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%209%20-%20Start%20Remote%20Sensing%20-%20Preparing%20Satellite%20Imagery%20for%20Analysis/03%20Hands-on%20Learning%20-%20Select%20the%20Correct%20Imagery%20Product%20for%20NDVI%20Analysis.md)

## 산출물

객체 탐지 데모 하나.

1. 사전학습 탐지 모델(YOLO 등)을 가져다 내 이미지 데이터에 파인튜닝
2. IoU 임계값을 바꿔 가며 정밀도-재현율 곡선과 mAP 변화 기록
3. NMS를 껐을 때 어떤 출력이 나오는지 스크린샷으로 남기고 설명
4. 실패 사례 10장 — 작은 객체 / 겹친 객체 / 특이한 각도 중 어디서 무너지는지

## 다음 단계

→ [05 Phase 5 - 지능형 로봇 시스템](05%20Phase%205%20-%20%EC%A7%80%EB%8A%A5%ED%98%95%20%EB%A1%9C%EB%B4%87%20%EC%8B%9C%EC%8A%A4%ED%85%9C.md)

# T4 Phase 3 — 컴퓨터비전

> 학부 교과 **컴퓨터비전(3학년 1학기, 이론실습병행 3학점)** · 선이수 = 신경망
> 교과목해설: "이미지와 영상 데이터를 컴퓨터가 인식하고 분석하는 원리를 학습하며, 영상 처리, 객체 인식, 특징 추출, 딥러닝 기반 비전 기술 등의 기초 내용을 다룬다. 또한 이를 기반으로 얼굴 인식, 자율주행, 의료 영상 분석 등 다양한 AI 기반 서비스에 어떻게 활용될 수 있는지 학습한다"

- 목표: 이미지가 숫자 배열이라는 데서 출발해, CNN이 왜 이미지에 잘 맞는지 구조로 설명한다.
- 상태: **저장소 자료로 완주 가능하다 ✅** 딥러닝 기반 비전은 Deep Learning Specialization이, **전통 영상 처리(필터링·특징 추출·OpenCV)는 2026-09-04에 확보한 IBM 강좌**가 덮는다.
- 분량: 약 42시간 (저장소 18시간 + 컴퓨터비전 강좌 24시간)
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 합성곱(convolution)이 이미지에 무엇을 하는지 필터 하나를 손으로 적용해 보인다
- 패딩·스트라이드·풀링이 출력 크기에 미치는 영향을 계산한다
- 완전연결층 대신 CNN을 쓰는 이유를 파라미터 수와 위치 불변성으로 설명한다
- LeNet·AlexNet·VGG·ResNet·Inception의 차이와 각각이 해결한 문제를 말한다
- **잔차 연결(residual)이 왜 깊은 망을 학습 가능하게 하는지** 설명한다
- 전이학습으로 적은 데이터에서 이미지 분류기를 만든다
- 데이터 증강(augmentation)을 상황에 맞게 고른다

## 3-A. CNN의 기초

메인: Deep Learning Specialization, `04 Convolutional Neural Networks` week 1

- [ ] [01 Computer Vision.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week1%20Foundations%20of%20CNN/01%20Computer%20Vision.md)
- [ ] [02 Edge Detection Example.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week1%20Foundations%20of%20CNN/02%20Edge%20Detection%20Example.md)
- [ ] [03 More Edge Detection.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week1%20Foundations%20of%20CNN/03%20More%20Edge%20Detection.md)
- [ ] [04 Padding.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week1%20Foundations%20of%20CNN/04%20Padding.md)
- [ ] [05 Strided Convolutions.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week1%20Foundations%20of%20CNN/05%20Strided%20Convolutions.md)
- [ ] [06 Convolutions Over Volume.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week1%20Foundations%20of%20CNN/06%20Convolutions%20Over%20Volume.md)
- [ ] [07 One Layer of a Convolutional Network.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week1%20Foundations%20of%20CNN/07%20One%20Layer%20of%20a%20Convolutional%20Network.md)
- [ ] [08 Simple Convolutional Network Example.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week1%20Foundations%20of%20CNN/08%20Simple%20Convolutional%20Network%20Example.md)
- [ ] [09 Pooling Layers.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week1%20Foundations%20of%20CNN/09%20Pooling%20Layers.md)
- [ ] [10 CNN Example.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week1%20Foundations%20of%20CNN/10%20CNN%20Example.md)
- [ ] [11 Why Convolutions.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week1%20Foundations%20of%20CNN/11%20Why%20Convolutions.md)

## 3-B. 대표 CNN 구조와 전이학습

week 2 — 사례 연구. **ResNet과 전이학습이 이 절의 핵심이다**

- [ ] [01 Why Look at Case Studies.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week2%20Deep%20Convolutional%20Models%20Case%20Studies/01%20Why%20Look%20at%20Case%20Studies.md)
- [ ] [02 Classic Networks.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week2%20Deep%20Convolutional%20Models%20Case%20Studies/02%20Classic%20Networks.md)
- [ ] [03 ResNets.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week2%20Deep%20Convolutional%20Models%20Case%20Studies/03%20ResNets.md)
- [ ] [04 Why ResNets Work.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week2%20Deep%20Convolutional%20Models%20Case%20Studies/04%20Why%20ResNets%20Work.md)
- [ ] [05 Networks in Networks and 1x1 Convolutions.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week2%20Deep%20Convolutional%20Models%20Case%20Studies/05%20Networks%20in%20Networks%20and%201x1%20Convolutions.md)
- [ ] [06 Inception Network Motivation.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week2%20Deep%20Convolutional%20Models%20Case%20Studies/06%20Inception%20Network%20Motivation.md)
- [ ] [07 Inception Network.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week2%20Deep%20Convolutional%20Models%20Case%20Studies/07%20Inception%20Network.md)
- [ ] [08 MobileNet.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week2%20Deep%20Convolutional%20Models%20Case%20Studies/08%20MobileNet.md)
- [ ] [09 MobileNet Architecture.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week2%20Deep%20Convolutional%20Models%20Case%20Studies/09%20MobileNet%20Architecture.md)
- [ ] [10 EfficientNet.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week2%20Deep%20Convolutional%20Models%20Case%20Studies/10%20EfficientNet.md)
- [ ] [11 Using Open-Source Implementation.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week2%20Deep%20Convolutional%20Models%20Case%20Studies/11%20Using%20Open-Source%20Implementation.md)
- [ ] [12 Transfer Learning.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week2%20Deep%20Convolutional%20Models%20Case%20Studies/12%20Transfer%20Learning.md)
- [ ] [13 Data Augmentation.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week2%20Deep%20Convolutional%20Models%20Case%20Studies/13%20Data%20Augmentation.md)
- [ ] [14 State of Computer Vision.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/04%20Convolutional%20Neural%20Networks/week2%20Deep%20Convolutional%20Models%20Case%20Studies/14%20State%20of%20Computer%20Vision.md)

## 3-C. 작은 장치 위의 비전

함께 보기: Introduction to Embedded Machine Learning Module 3 (오디오 예제지만 **특징 추출 → 분류**의 흐름이 비전과 같다. 모델 경량화 관점도 여기서 나온다)

- [ ] [01 Introduction to Audio Classification.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%203%20-%20Audio%20classification%20and%20Keyword%20Spotting/01%20Introduction%20to%20Audio%20Classification.md)
- [ ] [02 Audio Data Capture.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%203%20-%20Audio%20classification%20and%20Keyword%20Spotting/02%20Audio%20Data%20Capture.md)
- [ ] [03 Audio Feature Extraction.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%203%20-%20Audio%20classification%20and%20Keyword%20Spotting/03%20Audio%20Feature%20Extraction.md)
- [ ] [04 Introduction to Convolutional Neural Networks.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%203%20-%20Audio%20classification%20and%20Keyword%20Spotting/04%20Introduction%20to%20Convolutional%20Neural%20Networks.md)
- [ ] [05 Modifying the Neural Network.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%203%20-%20Audio%20classification%20and%20Keyword%20Spotting/05%20Modifying%20the%20Neural%20Network.md)
- [ ] [06 Deploy Keyword Spotting System.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%203%20-%20Audio%20classification%20and%20Keyword%20Spotting/06%20Deploy%20Keyword%20Spotting%20System.md)
- [ ] [07 Implementation Strategies.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%203%20-%20Audio%20classification%20and%20Keyword%20Spotting/07%20Implementation%20Strategies.md)
- [ ] [08 Sensor Fusion.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%203%20-%20Audio%20classification%20and%20Keyword%20Spotting/08%20Sensor%20Fusion.md)
- [ ] [09 Conclusion.md](../../../courses/mooc/Others/Introduction%20to%20Embedded%20Machine%20Learning/Module%203%20-%20Audio%20classification%20and%20Keyword%20Spotting/09%20Conclusion.md)

## 3-D. 영상 데이터를 다루는 다른 문맥

함께 보기 (선택): Raster Processing & Remote Sensing — 위성·항공 영상을 픽셀 배열로 다루는 강좌. **밴드·해상도·정규화 같은 "이미지 이전 단계"** 를 다른 각도에서 본다

- [ ] [01 Why Raster Metadata Is the First Thing Professionals Check.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%201%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Read%20and%20Understand%20Raster%20Data/01%20Why%20Raster%20Metadata%20Is%20the%20First%20Thing%20Professionals%20Check.md)
- [ ] [02 Key Raster Metadata Fields You Must Understand.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%201%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Read%20and%20Understand%20Raster%20Data/02%20Key%20Raster%20Metadata%20Fields%20You%20Must%20Understand.md)
- [ ] [03 Thinking in Rasters - From Images to Structured Data.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%201%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Read%20and%20Understand%20Raster%20Data/03%20Thinking%20in%20Rasters%20-%20From%20Images%20to%20Structured%20Data.md)
- [ ] [04 Reading GeoTIFF Metadata Using Rasterio.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%201%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Read%20and%20Understand%20Raster%20Data/04%20Reading%20GeoTIFF%20Metadata%20Using%20Rasterio.md)
- [ ] [05 Hands-On Learning - Inspect a GeoTIFF Before Analysis.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%201%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Read%20and%20Understand%20Raster%20Data/05%20Hands-On%20Learning%20-%20Inspect%20a%20GeoTIFF%20Before%20Analysis.md)
- [ ] **01 What You’re Seeing and Why It Looks 'Noisy”.md**
- [ ] **02 Your Flood Response Brief.md**
- [ ] **03 Speckle Filtering - What It Improves, What It Can Destroy, and How to Choose.md**
- [ ] **04 Filtering With Intent - Applying a Speckle Filter and Reading the Difference.md**
- [ ] **05 Hands-on Learning - Apply Speckle Filtering to SAR Flood Imagery.md**
- [ ] **06 Would You Trust This SAR View Yet.md**
- [ ] **01 Change Detection That Means Something - Comparing Before and After.md**
- [ ] **02 Interpreting Multispectral Change - What Counts as Evidence and What Counts as Noise.md**
- [ ] **03 Hands-on Learning - Detect Flood-Extent Change After a Storm Using a Multispectral Stack.md**
- [ ] **04 Explain Your Change Map Like a Professional.md**
- [ ] **05 Practice Quiz - What Does This Change Signal Actually Mean.md**
- [ ] **01 Accuracy Isn’t Optional - How to Know If Your Map Is Trustworthy.md**
- [ ] **02 Beginner Accuracy Evaluation - Confusion Matrix Thinking Without the Overwhelm.md**
- [ ] **03 Hands-on Learning - Evaluate Classification Results for Flood Detection.md**
- [ ] **04 Would You Send This to the Response Team.md**
- [ ] **05 Graded Assessment - Flood Extent Evidence - Process, Detect, Evaluate.md**
- [ ] [01 Why This Project Matters.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%2013%20-%20Project%20Module%20-%20Remote%20Sensing%20Analysis/01%20Why%20This%20Project%20Matters.md)
- [ ] [02 Project Requirements.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%2013%20-%20Project%20Module%20-%20Remote%20Sensing%20Analysis/02%20Project%20Requirements.md)
- [ ] [03 Remote Sensing Analysis.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%2013%20-%20Project%20Module%20-%20Remote%20Sensing%20Analysis/03%20Remote%20Sensing%20Analysis.md)
- [ ] [01 How Analysts Decide What Part of a Raster to Use.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%202%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Clip%20Rasters%20to%20Your%20Area%20of%20Interest/01%20How%20Analysts%20Decide%20What%20Part%20of%20a%20Raster%20to%20Use.md)
- [ ] [02 Why Clip Rasters Before Analysis.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%202%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Clip%20Rasters%20to%20Your%20Area%20of%20Interest/02%20Why%20Clip%20Rasters%20Before%20Analysis.md)
- [ ] [03 Bounding Boxes, Windows, and Spatial Extent.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%202%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Clip%20Rasters%20to%20Your%20Area%20of%20Interest/03%20Bounding%20Boxes,%20Windows,%20and%20Spatial%20Extent.md)
- [ ] [04 Hands-On Learning - Prepare a Study-Area Raster for NDVI.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%202%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Clip%20Rasters%20to%20Your%20Area%20of%20Interest/04%20Hands-On%20Learning%20-%20Prepare%20a%20Study-Area%20Raster%20for%20NDVI.md)
- [ ] [01 Why NDVI Depends on Correct Band Stacking.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%203%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Stack%20Bands%20for%20Multiband%20Analysis/01%20Why%20NDVI%20Depends%20on%20Correct%20Band%20Stacking.md)
- [ ] [02 Understanding Raster Array Shapes and Band Order.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%203%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Stack%20Bands%20for%20Multiband%20Analysis/02%20Understanding%20Raster%20Array%20Shapes%20and%20Band%20Order.md)
- [ ] [03 Stacking Raster Bands with NumPy and Rasterio.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%203%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Stack%20Bands%20for%20Multiband%20Analysis/03%20Stacking%20Raster%20Bands%20with%20NumPy%20and%20Rasterio.md)
- [ ] [04 Hands-On Learning - Create a Multiband Raster Ready for NDVI.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%203%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Stack%20Bands%20for%20Multiband%20Analysis/04%20Hands-On%20Learning%20-%20Create%20a%20Multiband%20Raster%20Ready%20for%20NDVI.md)
- [ ] [05 Validating and Preparing Raster Data for Analysis.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%203%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Stack%20Bands%20for%20Multiband%20Analysis/05%20Validating%20and%20Preparing%20Raster%20Data%20for%20Analysis.md)
- [ ] [01 Why Inspection Comes First.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%204%20-%20Master%20GDAL%20CLI%20-%20Understanding%20Raster%20Data%20with%20GDAL/01%20Why%20Inspection%20Comes%20First.md)
- [ ] [02 Key Raster Concepts You’ll See in gdalinfo Output.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%204%20-%20Master%20GDAL%20CLI%20-%20Understanding%20Raster%20Data%20with%20GDAL/02%20Key%20Raster%20Concepts%20You%E2%80%99ll%20See%20in%20gdalinfo%20Output.md)
- [ ] [03 Exploring Raster Structure with gdalinfo.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%204%20-%20Master%20GDAL%20CLI%20-%20Understanding%20Raster%20Data%20with%20GDAL/03%20Exploring%20Raster%20Structure%20with%20gdalinfo.md)
- [ ] [04 Hands-On Learning - Raster Inspection Checklist.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%204%20-%20Master%20GDAL%20CLI%20-%20Understanding%20Raster%20Data%20with%20GDAL/04%20Hands-On%20Learning%20-%20Raster%20Inspection%20Checklist.md)
- [ ] [01 How gdalwarp Reprojects Raster Data.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%205%20-%20Master%20GDAL%20CLI%20-%20Reprojecting%20Raster%20Data%20with%20gdalwarp/01%20How%20gdalwarp%20Reprojects%20Raster%20Data.md)
- [ ] [02 Reprojection Pitfalls and Best Practices for Elevation Data.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%205%20-%20Master%20GDAL%20CLI%20-%20Reprojecting%20Raster%20Data%20with%20gdalwarp/02%20Reprojection%20Pitfalls%20and%20Best%20Practices%20for%20Elevation%20Data.md)
- [ ] [03 Hands-On Learning - Reproject a DEM Using gdalwarp.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%205%20-%20Master%20GDAL%20CLI%20-%20Reprojecting%20Raster%20Data%20with%20gdalwarp/03%20Hands-On%20Learning%20-%20Reproject%20a%20DEM%20Using%20gdalwarp.md)
- [ ] [01 Translating GeoTIFFs to COGs with gdal_translate.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%206%20-%20Master%20GDAL%20CLI%20-%20Creating%20Cloud-Optimized%20GeoTIFFs/01%20Translating%20GeoTIFFs%20to%20COGs%20with%20gdal_translate.md)
- [ ] [02 Translating GeoTIFF to Cloud-Optimized GeoTIFF - Beyond File Conversion.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%206%20-%20Master%20GDAL%20CLI%20-%20Creating%20Cloud-Optimized%20GeoTIFFs/02%20Translating%20GeoTIFF%20to%20Cloud-Optimized%20GeoTIFF%20-%20Beyond%20File%20Conversion.md)
- [ ] [03 Translating and Validating Cloud-Optimized GeoTIFFs for Performance.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%206%20-%20Master%20GDAL%20CLI%20-%20Creating%20Cloud-Optimized%20GeoTIFFs/03%20Translating%20and%20Validating%20Cloud-Optimized%20GeoTIFFs%20for%20Performance.md)
- [ ] [04 Hands-On Learning - Convert a Reprojected DEM to COG.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%206%20-%20Master%20GDAL%20CLI%20-%20Creating%20Cloud-Optimized%20GeoTIFFs/04%20Hands-On%20Learning%20-%20Convert%20a%20Reprojected%20DEM%20to%20COG.md)
- [ ] [05 Graded Assessment - Professional Raster Processing and Cloud Optimization with GDAL CLI.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%206%20-%20Master%20GDAL%20CLI%20-%20Creating%20Cloud-Optimized%20GeoTIFFs/05%20Graded%20Assessment%20-%20Professional%20Raster%20Processing%20and%20Cloud%20Optimization%20with%20GDAL%20CLI.md)
- [ ] [01 Why Sensors Matter.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%207%20-%20Start%20Remote%20Sensing%20-%20Landsat%20vs.%20Sentinel/01%20Why%20Sensors%20Matter.md)
- [ ] [02 Landsat and Sentinel Basics.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%207%20-%20Start%20Remote%20Sensing%20-%20Landsat%20vs.%20Sentinel/02%20Landsat%20and%20Sentinel%20Basics.md)
- [ ] [03 Comparing Landsat and Sentinel.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%207%20-%20Start%20Remote%20Sensing%20-%20Landsat%20vs.%20Sentinel/03%20Comparing%20Landsat%20and%20Sentinel.md)
- [ ] [04 Hands-on Learning - Match the Sensor to the Scenario.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%207%20-%20Start%20Remote%20Sensing%20-%20Landsat%20vs.%20Sentinel/04%20Hands-on%20Learning%20-%20Match%20the%20Sensor%20to%20the%20Scenario.md)
- [ ] [05 Defending Your Sensor Choice.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%207%20-%20Start%20Remote%20Sensing%20-%20Landsat%20vs.%20Sentinel/05%20Defending%20Your%20Sensor%20Choice.md)
- [ ] [01 Understanding Spectral Bands.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%208%20-%20Start%20Remote%20Sensing%20-%20Calculating%20NDVI%20from%20Satellite%20Bands/01%20Understanding%20Spectral%20Bands.md)
- [ ] [02 Calculating NDVI.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%208%20-%20Start%20Remote%20Sensing%20-%20Calculating%20NDVI%20from%20Satellite%20Bands/02%20Calculating%20NDVI.md)
- [ ] [03 Hands-on Learning - Calculate and Interpret NDVI from Satellite Bands.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%208%20-%20Start%20Remote%20Sensing%20-%20Calculating%20NDVI%20from%20Satellite%20Bands/03%20Hands-on%20Learning%20-%20Calculate%20and%20Interpret%20NDVI%20from%20Satellite%20Bands.md)
- [ ] [04 Reflecting on NDVI Calculation and Interpretation.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%208%20-%20Start%20Remote%20Sensing%20-%20Calculating%20NDVI%20from%20Satellite%20Bands/04%20Reflecting%20on%20NDVI%20Calculation%20and%20Interpretation.md)
- [ ] [01 Atmospheric Effects Explained.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%209%20-%20Start%20Remote%20Sensing%20-%20Preparing%20Satellite%20Imagery%20for%20Analysis/01%20Atmospheric%20Effects%20Explained.md)
- [ ] [02 TOA vs Surface Reflectance.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%209%20-%20Start%20Remote%20Sensing%20-%20Preparing%20Satellite%20Imagery%20for%20Analysis/02%20TOA%20vs%20Surface%20Reflectance.md)
- [ ] [03 Hands-on Learning - Select the Correct Imagery Product for NDVI Analysis.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%209%20-%20Start%20Remote%20Sensing%20-%20Preparing%20Satellite%20Imagery%20for%20Analysis/03%20Hands-on%20Learning%20-%20Select%20the%20Correct%20Imagery%20Product%20for%20NDVI%20Analysis.md)
- [ ] [04 Reflecting on Imagery Readiness for NDVI.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%209%20-%20Start%20Remote%20Sensing%20-%20Preparing%20Satellite%20Imagery%20for%20Analysis/04%20Reflecting%20on%20Imagery%20Readiness%20for%20NDVI.md)
- [ ] [05 Selecting the Right Dataset for Long-Term Forest Monitoring.md](../../../courses/mooc/Geospatial/Raster%20Processing%20&%20Remote%20Sensing/Module%209%20-%20Start%20Remote%20Sensing%20-%20Preparing%20Satellite%20Imagery%20for%20Analysis/05%20Selecting%20the%20Right%20Dataset%20for%20Long-Term%20Forest%20Monitoring.md)

## 3-E. 전통 영상 처리 — Introduction to Computer Vision and Image Processing (2026-09-04 확보)

학부 교과목해설의 "영상 처리, 특징 추출"에 해당하는 고전 영역(가우시안 블러·에지 검출·히스토그램·임계화)이 저장소에 없었다. 딥러닝만으로도 Phase 4까지 갈 수 있지만 **전처리 단계에서 막히는 일이 자주 생긴다.** **2026-09-04에 MOOC 강좌를 수강·정리해 이 공백을 메웠다.**

메인: [Introduction to Computer Vision and Image Processing](../../../courses/mooc/Computer%20Vision/Introduction%20to%20Computer%20Vision%20and%20Image%20Processing/README.md) (IBM · 6모듈 24시간 · MOOC Plus 포함)

> ⭐ **Module 2(8시간)가 정확히 이 공백을 메운다** — 히스토그램·강도 변환·임계화·아핀 변환·합성곱·Sobel·중간값 필터.
>
> ⭐ **HOG → CNN의 연결이 이 강좌의 백미다.** Module 3의 HOG가 **사람이 고른 Sobel 커널**을 쓰고, Module 4의 CNN은 **그 커널을 학습한다**고 설명한다.
>
> ⚠️ **Module 4(신경망·CNN)는 요약 수준이다.** 이 Phase의 다른 절에 있는 Deep Learning Specialization이 훨씬 깊다. **중복이므로 시간이 없으면 M1·M2·M3·M5만 봐도 된다.**
>
> ⚠️ **영상은 26개뿐이고 24시간의 대부분이 실습 랩(JupyterLab)이다.** 정리본만 읽으면 개념은 잡히지만 손은 안 익는다. **Faster R-CNN은 랩에만 있고 영상 강의에 없다.**

Module 1 - Introduction to Computer Vision

- [ ] [01 Course Introduction.md](../../../courses/mooc/Computer%20Vision/Introduction%20to%20Computer%20Vision%20and%20Image%20Processing/Module%201%20-%20Introduction%20to%20Computer%20Vision/01%20Course%20Introduction.md)
- [ ] [02 Introduction to Computer Vision.md](../../../courses/mooc/Computer%20Vision/Introduction%20to%20Computer%20Vision%20and%20Image%20Processing/Module%201%20-%20Introduction%20to%20Computer%20Vision/02%20Introduction%20to%20Computer%20Vision.md) — 컴퓨터에게 보는 능력을 주는 것
- [ ] [03 Applications of Computer Vision.md](../../../courses/mooc/Computer%20Vision/Introduction%20to%20Computer%20Vision%20and%20Image%20Processing/Module%201%20-%20Introduction%20to%20Computer%20Vision/03%20Applications%20of%20Computer%20Vision.md) — 분류기를 이어 붙이는 설계(송전탑 녹 점검)
- [ ] [04 Recent Research in Computer Vision.md](../../../courses/mooc/Computer%20Vision/Introduction%20to%20Computer%20Vision%20and%20Image%20Processing/Module%201%20-%20Introduction%20to%20Computer%20Vision/04%20Recent%20Research%20in%20Computer%20Vision.md)
- [ ] [05 Brainstorming Your Own Applications.md](../../../courses/mooc/Computer%20Vision/Introduction%20to%20Computer%20Vision%20and%20Image%20Processing/Module%201%20-%20Introduction%20to%20Computer%20Vision/05%20Brainstorming%20Your%20Own%20Applications.md) — 해법이 아니라 문제에서 시작한다

Module 2 - Image Processing with OpenCV and Pillow

- [ ] [01 What Is A Digital Image.md](../../../courses/mooc/Computer%20Vision/Introduction%20to%20Computer%20Vision%20and%20Image%20Processing/Module%202%20-%20Image%20Processing%20with%20OpenCV%20and%20Pillow/01%20What%20Is%20A%20Digital%20Image.md) — **숫자의 배열**, ⚠️ PIL은 RGB · OpenCV는 BGR
- [ ] [02 Manipulating Images.md](../../../courses/mooc/Computer%20Vision/Introduction%20to%20Computer%20Vision%20and%20Image%20Processing/Module%202%20-%20Image%20Processing%20with%20OpenCV%20and%20Pillow/02%20Manipulating%20Images.md) — ⚠️ copy의 함정, flip·rotate
- [ ] [03 Manipulating Images One Pixel At a Time.md](../../../courses/mooc/Computer%20Vision/Introduction%20to%20Computer%20Vision%20and%20Image%20Processing/Module%202%20-%20Image%20Processing%20with%20OpenCV%20and%20Pillow/03%20Manipulating%20Images%20One%20Pixel%20At%20a%20Time.md) — 자르기·도형·텍스트·겹치기
- [ ] [04 Pixel Transformations.md](../../../courses/mooc/Computer%20Vision/Introduction%20to%20Computer%20Vision%20and%20Image%20Processing/Module%202%20-%20Image%20Processing%20with%20OpenCV%20and%20Pillow/04%20Pixel%20Transformations.md) — **히스토그램 · 밝기/대비 · 평활화 · 임계화 분할**
- [ ] [05 Geometric Operations.md](../../../courses/mooc/Computer%20Vision/Introduction%20to%20Computer%20Vision%20and%20Image%20Processing/Module%202%20-%20Image%20Processing%20with%20OpenCV%20and%20Pillow/05%20Geometric%20Operations.md) — **아핀 변환**, 보간
- [ ] [06 Spatial Operations in Image Processing.md](../../../courses/mooc/Computer%20Vision/Introduction%20to%20Computer%20Vision%20and%20Image%20Processing/Module%202%20-%20Image%20Processing%20with%20OpenCV%20and%20Pillow/06%20Spatial%20Operations%20in%20Image%20Processing.md) — **합성곱 · Sobel 에지 검출 · 중간값 필터**

Module 3 - Machine Learning Image Classification

- [ ] [01 Introduction to Image Classification.md](../../../courses/mooc/Computer%20Vision/Introduction%20to%20Computer%20Vision%20and%20Image%20Processing/Module%203%20-%20Machine%20Learning%20Image%20Classification/01%20Introduction%20to%20Image%20Classification.md) — ⚠️ 이미지 분류의 다섯 가지 어려움
- [ ] [02 Image Classification with KNN.md](../../../courses/mooc/Computer%20Vision/Introduction%20to%20Computer%20Vision%20and%20Image%20Processing/Module%203%20-%20Machine%20Learning%20Image%20Classification/02%20Image%20Classification%20with%20KNN.md) — 훈련/검증/테스트와 하이퍼파라미터
- [ ] [03 Linear Classifiers.md](../../../courses/mooc/Computer%20Vision/Introduction%20to%20Computer%20Vision%20and%20Image%20Processing/Module%203%20-%20Machine%20Learning%20Image%20Classification/03%20Linear%20Classifiers.md) — 결정 경계 · 시그모이드
- [ ] [04 Logistic Regression Training - Gradient Descent.md](../../../courses/mooc/Computer%20Vision/Introduction%20to%20Computer%20Vision%20and%20Image%20Processing/Module%203%20-%20Machine%20Learning%20Image%20Classification/04%20Logistic%20Regression%20Training%20-%20Gradient%20Descent.md) — 교차 엔트로피 · 경사하강 · 학습률
- [ ] [05 Mini-Batch Gradient Descent.md](../../../courses/mooc/Computer%20Vision/Introduction%20to%20Computer%20Vision%20and%20Image%20Processing/Module%203%20-%20Machine%20Learning%20Image%20Classification/05%20Mini-Batch%20Gradient%20Descent.md) — epoch · batch · iteration
- [ ] [06 SoftMax and Multi-Class Classification.md](../../../courses/mooc/Computer%20Vision/Introduction%20to%20Computer%20Vision%20and%20Image%20Processing/Module%203%20-%20Machine%20Learning%20Image%20Classification/06%20SoftMax%20and%20Multi-Class%20Classification.md) — 클래스마다 평면 하나 + argmax
- [ ] [07 Support Vector Machines SVM.md](../../../courses/mooc/Computer%20Vision/Introduction%20to%20Computer%20Vision%20and%20Image%20Processing/Module%203%20-%20Machine%20Learning%20Image%20Classification/07%20Support%20Vector%20Machines%20SVM.md) — 커널 · 최대 마진, ⚠️ γ와 과적합
- [ ] [08 Image Features.md](../../../courses/mooc/Computer%20Vision/Introduction%20to%20Computer%20Vision%20and%20Image%20Processing/Module%203%20-%20Machine%20Learning%20Image%20Classification/08%20Image%20Features.md) — ⚠️ 픽셀을 그대로 쓰면 안 되는 이유, **HOG**

Module 4 - Neural Networks and Deep Learning for Image Classification

- [ ] [01 Neural Networks.md](../../../courses/mooc/Computer%20Vision/Introduction%20to%20Computer%20Vision%20and%20Image%20Processing/Module%204%20-%20Neural%20Networks%20and%20Deep%20Learning%20for%20Image%20Classification/01%20Neural%20Networks.md) — 시그모이드 두 개를 빼면 상자 함수
- [ ] [02 Fully Connected Neural Network Architecture.md](../../../courses/mooc/Computer%20Vision/Introduction%20to%20Computer%20Vision%20and%20Image%20Processing/Module%204%20-%20Neural%20Networks%20and%20Deep%20Learning%20for%20Image%20Classification/02%20Fully%20Connected%20Neural%20Network%20Architecture.md) — ⚠️ 기울기 소실, ReLU
- [ ] [03 Convolutional Networks.md](../../../courses/mooc/Computer%20Vision/Introduction%20to%20Computer%20Vision%20and%20Image%20Processing/Module%204%20-%20Neural%20Networks%20and%20Deep%20Learning%20for%20Image%20Classification/03%20Convolutional%20Networks.md) — **학습되는 커널** · 수용 영역 · 풀링
- [ ] [04 CNN Architectures.md](../../../courses/mooc/Computer%20Vision/Introduction%20to%20Computer%20Vision%20and%20Image%20Processing/Module%204%20-%20Neural%20Networks%20and%20Deep%20Learning%20for%20Image%20Classification/04%20CNN%20Architectures.md) — LeNet·AlexNet·VGG·ResNet · 전이 학습

Module 5 - Object Detection

- [ ] [01 Object Detection.md](../../../courses/mooc/Computer%20Vision/Introduction%20to%20Computer%20Vision%20and%20Image%20Processing/Module%205%20-%20Object%20Detection/01%20Object%20Detection.md) — 슬라이딩 윈도우 · 바운딩 박스 · 점수
- [ ] [02 Object Detection with Haar Cascade Classifier.md](../../../courses/mooc/Computer%20Vision/Introduction%20to%20Computer%20Vision%20and%20Image%20Processing/Module%205%20-%20Object%20Detection/02%20Object%20Detection%20with%20Haar%20Cascade%20Classifier.md) — **적분 이미지 · AdaBoost · 캐스케이드**

Module 6 - Project Case - Traffic Sign Classification

- [ ] [01 Course Wrap-Up.md](../../../courses/mooc/Computer%20Vision/Introduction%20to%20Computer%20Vision%20and%20Image%20Processing/Module%206%20-%20Project%20Case%20-%20Traffic%20Sign%20Classification/01%20Course%20Wrap-Up.md) — 강좌 정리와 최종 프로젝트

## 산출물

이미지 분류 모델 하나.

1. 밑바닥 CNN과 전이학습(ResNet 등 사전학습 모델) 두 버전을 만들고 성능·학습 시간 비교
2. 데이터 증강을 켰을 때와 껐을 때의 검증 성능 곡선
3. 틀린 예측 20장을 실제로 **눈으로 보고** 유형을 분류 — [T3 Phase 4](../T3%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D%EA%B3%BC%20%EB%94%A5%EB%9F%AC%EB%8B%9D/04%20Phase%204%20-%20%EA%B8%B0%EA%B3%84%ED%95%99%EC%8A%B5%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8.md)의 오류 분석을 그대로 적용한다
4. 합성곱 필터 하나를 시각화해 무엇을 잡아내는지 설명

## 다음 단계

→ [04 Phase 4 - 컴퓨터비전 응용](04%20Phase%204%20-%20%EC%BB%B4%ED%93%A8%ED%84%B0%EB%B9%84%EC%A0%84%20%EC%9D%91%EC%9A%A9.md)

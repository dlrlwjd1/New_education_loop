# Raster Processing & Remote Sensing

**Course URL:** [mooc.org/learn/raster-processing-and-remote-sensing](https://www.mooc.org/learn/raster-processing-and-remote-sensing)

MOOC 초급 강좌. Rasterio로 GeoTIFF 메타데이터를 검증하고 관심 영역을 클리핑하며 밴드를 쌓는 법, GDAL CLI로 래스터를 검사·재투영하고 COG로 게시하는 법, Landsat·Sentinel·NDVI·대기 보정과 SAR speckle filtering·변화 탐지·분류 정확도 평가를 13개 모듈에 걸쳐 다룬다.

## 수집 범위

- 전체 커리큘럼: 13모듈 59항목
- 실제 내용 정리: 영상 14개 + 읽기 14개 = 28개
- 상태만 기록: 대화형 활동 13개 + 과제·퀴즈 18개 = 31개
- 대화형 활동은 학습자 응답에 따라 달라지고, 과제·퀴즈는 학업 정직성 보호 대상이므로 답을 임의로 만들지 않았다.

## 모듈별 강의 목록

### Module 1 — Decode Rasters with Rasterio: Read and Understand Raster Data

- [01 Why Raster Metadata Is the First Thing Professionals Check](Module%201%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Read%20and%20Understand%20Raster%20Data/01%20Why%20Raster%20Metadata%20Is%20the%20First%20Thing%20Professionals%20Check.md) — 대화형 활동, 상태 기록
- [02 Key Raster Metadata Fields You Must Understand](Module%201%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Read%20and%20Understand%20Raster%20Data/02%20Key%20Raster%20Metadata%20Fields%20You%20Must%20Understand.md) — 읽기, 내용 정리
- [03 Thinking in Rasters: From Images to Structured Data](Module%201%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Read%20and%20Understand%20Raster%20Data/03%20Thinking%20in%20Rasters%20-%20From%20Images%20to%20Structured%20Data.md) — 영상, 내용 정리
- [04 Reading GeoTIFF Metadata Using Rasterio](Module%201%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Read%20and%20Understand%20Raster%20Data/04%20Reading%20GeoTIFF%20Metadata%20Using%20Rasterio.md) — 영상, 내용 정리
- [05 Hands-On Learning: Inspect a GeoTIFF Before Analysis](Module%201%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Read%20and%20Understand%20Raster%20Data/05%20Hands-On%20Learning%20-%20Inspect%20a%20GeoTIFF%20Before%20Analysis.md) — 과제, 상태 기록
### Module 2 — Decode Rasters with Rasterio: Clip Rasters to Your Area of Interest

- [01 How Analysts Decide What Part of a Raster to Use](Module%202%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Clip%20Rasters%20to%20Your%20Area%20of%20Interest/01%20How%20Analysts%20Decide%20What%20Part%20of%20a%20Raster%20to%20Use.md) — 대화형 활동, 상태 기록
- [02 Why Clip Rasters Before Analysis](Module%202%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Clip%20Rasters%20to%20Your%20Area%20of%20Interest/02%20Why%20Clip%20Rasters%20Before%20Analysis.md) — 영상, 내용 정리
- [03 Bounding Boxes, Windows, and Spatial Extent](Module%202%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Clip%20Rasters%20to%20Your%20Area%20of%20Interest/03%20Bounding%20Boxes%2C%20Windows%2C%20and%20Spatial%20Extent.md) — 읽기, 내용 정리
- [04 Hands-On Learning: Prepare a Study-Area Raster for NDVI](Module%202%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Clip%20Rasters%20to%20Your%20Area%20of%20Interest/04%20Hands-On%20Learning%20-%20Prepare%20a%20Study-Area%20Raster%20for%20NDVI.md) — 과제, 상태 기록
### Module 3 — Decode Rasters with Rasterio: Stack Bands for Multiband Analysis

- [01 Why NDVI Depends on Correct Band Stacking](Module%203%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Stack%20Bands%20for%20Multiband%20Analysis/01%20Why%20NDVI%20Depends%20on%20Correct%20Band%20Stacking.md) — 대화형 활동, 상태 기록
- [02 Understanding Raster Array Shapes and Band Order](Module%203%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Stack%20Bands%20for%20Multiband%20Analysis/02%20Understanding%20Raster%20Array%20Shapes%20and%20Band%20Order.md) — 읽기, 내용 정리
- [03 Stacking Raster Bands with NumPy and Rasterio](Module%203%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Stack%20Bands%20for%20Multiband%20Analysis/03%20Stacking%20Raster%20Bands%20with%20NumPy%20and%20Rasterio.md) — 영상, 내용 정리
- [04 Hands-On Learning: Create a Multiband Raster Ready for NDVI](Module%203%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Stack%20Bands%20for%20Multiband%20Analysis/04%20Hands-On%20Learning%20-%20Create%20a%20Multiband%20Raster%20Ready%20for%20NDVI.md) — 과제, 상태 기록
- [05 Validating and Preparing Raster Data for Analysis](Module%203%20-%20Decode%20Rasters%20with%20Rasterio%20-%20Stack%20Bands%20for%20Multiband%20Analysis/05%20Validating%20and%20Preparing%20Raster%20Data%20for%20Analysis.md) — 과제, 상태 기록
### Module 4 — Master GDAL CLI: Understanding Raster Data with GDAL

- [01 Why Inspection Comes First](Module%204%20-%20Master%20GDAL%20CLI%20-%20Understanding%20Raster%20Data%20with%20GDAL/01%20Why%20Inspection%20Comes%20First.md) — 대화형 활동, 상태 기록
- [02 Key Raster Concepts You’ll See in gdalinfo Output](Module%204%20-%20Master%20GDAL%20CLI%20-%20Understanding%20Raster%20Data%20with%20GDAL/02%20Key%20Raster%20Concepts%20You%E2%80%99ll%20See%20in%20gdalinfo%20Output.md) — 읽기, 내용 정리
- [03 Exploring Raster Structure with gdalinfo](Module%204%20-%20Master%20GDAL%20CLI%20-%20Understanding%20Raster%20Data%20with%20GDAL/03%20Exploring%20Raster%20Structure%20with%20gdalinfo.md) — 영상, 내용 정리
- [04 Hands-On Learning: Raster Inspection Checklist](Module%204%20-%20Master%20GDAL%20CLI%20-%20Understanding%20Raster%20Data%20with%20GDAL/04%20Hands-On%20Learning%20-%20Raster%20Inspection%20Checklist.md) — 과제, 상태 기록
### Module 5 — Master GDAL CLI: Reprojecting Raster Data with gdalwarp

- [01 How gdalwarp Reprojects Raster Data](Module%205%20-%20Master%20GDAL%20CLI%20-%20Reprojecting%20Raster%20Data%20with%20gdalwarp/01%20How%20gdalwarp%20Reprojects%20Raster%20Data.md) — 영상, 내용 정리
- [02 Reprojection Pitfalls and Best Practices for Elevation Data](Module%205%20-%20Master%20GDAL%20CLI%20-%20Reprojecting%20Raster%20Data%20with%20gdalwarp/02%20Reprojection%20Pitfalls%20and%20Best%20Practices%20for%20Elevation%20Data.md) — 읽기, 내용 정리
- [03 Hands-On Learning: Reproject a DEM Using gdalwarp](Module%205%20-%20Master%20GDAL%20CLI%20-%20Reprojecting%20Raster%20Data%20with%20gdalwarp/03%20Hands-On%20Learning%20-%20Reproject%20a%20DEM%20Using%20gdalwarp.md) — 과제, 상태 기록
### Module 6 — Master GDAL CLI: Creating Cloud-Optimized GeoTIFFs

- [01 Translating GeoTIFFs to COGs with gdal_translate](Module%206%20-%20Master%20GDAL%20CLI%20-%20Creating%20Cloud-Optimized%20GeoTIFFs/01%20Translating%20GeoTIFFs%20to%20COGs%20with%20gdal_translate.md) — 영상, 내용 정리
- [02 Translating GeoTIFF to Cloud-Optimized GeoTIFF: Beyond File Conversion](Module%206%20-%20Master%20GDAL%20CLI%20-%20Creating%20Cloud-Optimized%20GeoTIFFs/02%20Translating%20GeoTIFF%20to%20Cloud-Optimized%20GeoTIFF%20-%20Beyond%20File%20Conversion.md) — 대화형 활동, 상태 기록
- [03 Translating and Validating Cloud-Optimized GeoTIFFs for Performance](Module%206%20-%20Master%20GDAL%20CLI%20-%20Creating%20Cloud-Optimized%20GeoTIFFs/03%20Translating%20and%20Validating%20Cloud-Optimized%20GeoTIFFs%20for%20Performance.md) — 읽기, 내용 정리
- [04 Hands-On Learning: Convert a Reprojected DEM to COG](Module%206%20-%20Master%20GDAL%20CLI%20-%20Creating%20Cloud-Optimized%20GeoTIFFs/04%20Hands-On%20Learning%20-%20Convert%20a%20Reprojected%20DEM%20to%20COG.md) — 과제, 상태 기록
- [05 Graded Assessment: Professional Raster Processing and Cloud Optimization with GDAL CLI](Module%206%20-%20Master%20GDAL%20CLI%20-%20Creating%20Cloud-Optimized%20GeoTIFFs/05%20Graded%20Assessment%20-%20Professional%20Raster%20Processing%20and%20Cloud%20Optimization%20with%20GDAL%20CLI.md) — 과제, 상태 기록
### Module 7 — Start Remote Sensing: Landsat vs. Sentinel

- [01 Why Sensors Matter](Module%207%20-%20Start%20Remote%20Sensing%20-%20Landsat%20vs.%20Sentinel/01%20Why%20Sensors%20Matter.md) — 대화형 활동, 상태 기록
- [02 Landsat and Sentinel Basics](Module%207%20-%20Start%20Remote%20Sensing%20-%20Landsat%20vs.%20Sentinel/02%20Landsat%20and%20Sentinel%20Basics.md) — 읽기, 내용 정리
- [03 Comparing Landsat and Sentinel](Module%207%20-%20Start%20Remote%20Sensing%20-%20Landsat%20vs.%20Sentinel/03%20Comparing%20Landsat%20and%20Sentinel.md) — 영상, 내용 정리
- [04 Hands-on Learning: Match the Sensor to the Scenario](Module%207%20-%20Start%20Remote%20Sensing%20-%20Landsat%20vs.%20Sentinel/04%20Hands-on%20Learning%20-%20Match%20the%20Sensor%20to%20the%20Scenario.md) — 과제, 상태 기록
- [05 Defending Your Sensor Choice](Module%207%20-%20Start%20Remote%20Sensing%20-%20Landsat%20vs.%20Sentinel/05%20Defending%20Your%20Sensor%20Choice.md) — 대화형 활동, 상태 기록
### Module 8 — Start Remote Sensing: Calculating NDVI from Satellite Bands

- [01 Understanding Spectral Bands](Module%208%20-%20Start%20Remote%20Sensing%20-%20Calculating%20NDVI%20from%20Satellite%20Bands/01%20Understanding%20Spectral%20Bands.md) — 읽기, 내용 정리
- [02 Calculating NDVI](Module%208%20-%20Start%20Remote%20Sensing%20-%20Calculating%20NDVI%20from%20Satellite%20Bands/02%20Calculating%20NDVI.md) — 영상, 내용 정리
- [03 Hands-on Learning: Calculate and Interpret NDVI from Satellite Bands](Module%208%20-%20Start%20Remote%20Sensing%20-%20Calculating%20NDVI%20from%20Satellite%20Bands/03%20Hands-on%20Learning%20-%20Calculate%20and%20Interpret%20NDVI%20from%20Satellite%20Bands.md) — 과제, 상태 기록
- [04 Reflecting on NDVI Calculation and Interpretation](Module%208%20-%20Start%20Remote%20Sensing%20-%20Calculating%20NDVI%20from%20Satellite%20Bands/04%20Reflecting%20on%20NDVI%20Calculation%20and%20Interpretation.md) — 대화형 활동, 상태 기록
### Module 9 — Start Remote Sensing: Preparing Satellite Imagery for Analysis

- [01 Atmospheric Effects Explained](Module%209%20-%20Start%20Remote%20Sensing%20-%20Preparing%20Satellite%20Imagery%20for%20Analysis/01%20Atmospheric%20Effects%20Explained.md) — 읽기, 내용 정리
- [02 TOA vs Surface Reflectance](Module%209%20-%20Start%20Remote%20Sensing%20-%20Preparing%20Satellite%20Imagery%20for%20Analysis/02%20TOA%20vs%20Surface%20Reflectance.md) — 영상, 내용 정리
- [03 Hands-on Learning: Select the Correct Imagery Product for NDVI Analysis](Module%209%20-%20Start%20Remote%20Sensing%20-%20Preparing%20Satellite%20Imagery%20for%20Analysis/03%20Hands-on%20Learning%20-%20Select%20the%20Correct%20Imagery%20Product%20for%20NDVI%20Analysis.md) — 과제, 상태 기록
- [04 Reflecting on Imagery Readiness for NDVI](Module%209%20-%20Start%20Remote%20Sensing%20-%20Preparing%20Satellite%20Imagery%20for%20Analysis/04%20Reflecting%20on%20Imagery%20Readiness%20for%20NDVI.md) — 대화형 활동, 상태 기록
- [05 Selecting the Right Dataset for Long-Term Forest Monitoring](Module%209%20-%20Start%20Remote%20Sensing%20-%20Preparing%20Satellite%20Imagery%20for%20Analysis/05%20Selecting%20the%20Right%20Dataset%20for%20Long-Term%20Forest%20Monitoring.md) — 과제, 상태 기록
### Module 10 — Process SAR & Multispectral: Make SAR Usable: Speckle Filtering for Interpretation

- [01 What You’re Seeing and Why It Looks "Noisy”](Module%2010%20-%20Process%20SAR%20%26%20Multispectral%20-%20Make%20SAR%20Usable%20-%20Speckle%20Filtering%20for%20Interpretation/01%20What%20You%E2%80%99re%20Seeing%20and%20Why%20It%20Looks%20%27Noisy%E2%80%9D.md) — 영상, 내용 정리
- [02 Your Flood Response Brief](Module%2010%20-%20Process%20SAR%20%26%20Multispectral%20-%20Make%20SAR%20Usable%20-%20Speckle%20Filtering%20for%20Interpretation/02%20Your%20Flood%20Response%20Brief.md) — 대화형 활동, 상태 기록
- [03 Speckle Filtering: What It Improves, What It Can Destroy, and How to Choose](Module%2010%20-%20Process%20SAR%20%26%20Multispectral%20-%20Make%20SAR%20Usable%20-%20Speckle%20Filtering%20for%20Interpretation/03%20Speckle%20Filtering%20-%20What%20It%20Improves%2C%20What%20It%20Can%20Destroy%2C%20and%20How%20to%20Choose.md) — 읽기, 내용 정리
- [04 Filtering With Intent: Applying a Speckle Filter and Reading the Difference](Module%2010%20-%20Process%20SAR%20%26%20Multispectral%20-%20Make%20SAR%20Usable%20-%20Speckle%20Filtering%20for%20Interpretation/04%20Filtering%20With%20Intent%20-%20Applying%20a%20Speckle%20Filter%20and%20Reading%20the%20Difference.md) — 영상, 내용 정리
- [05 Hands-on Learning: Apply Speckle Filtering to SAR Flood Imagery](Module%2010%20-%20Process%20SAR%20%26%20Multispectral%20-%20Make%20SAR%20Usable%20-%20Speckle%20Filtering%20for%20Interpretation/05%20Hands-on%20Learning%20-%20Apply%20Speckle%20Filtering%20to%20SAR%20Flood%20Imagery.md) — 과제, 상태 기록
- [06 Would You Trust This SAR View Yet?](Module%2010%20-%20Process%20SAR%20%26%20Multispectral%20-%20Make%20SAR%20Usable%20-%20Speckle%20Filtering%20for%20Interpretation/06%20Would%20You%20Trust%20This%20SAR%20View%20Yet.md) — 대화형 활동, 상태 기록
### Module 11 — Process SAR & Multispectral: Detect Flood-Extent Change With Multispectral Stacks

- [01 Change Detection That Means Something: Comparing Before and After](Module%2011%20-%20Process%20SAR%20%26%20Multispectral%20-%20Detect%20Flood-Extent%20Change%20With%20Multispectral%20Stacks/01%20Change%20Detection%20That%20Means%20Something%20-%20Comparing%20Before%20and%20After.md) — 영상, 내용 정리
- [02 Interpreting Multispectral Change: What Counts as Evidence and What Counts as Noise](Module%2011%20-%20Process%20SAR%20%26%20Multispectral%20-%20Detect%20Flood-Extent%20Change%20With%20Multispectral%20Stacks/02%20Interpreting%20Multispectral%20Change%20-%20What%20Counts%20as%20Evidence%20and%20What%20Counts%20as%20Noise.md) — 읽기, 내용 정리
- [03 Hands-on Learning: Detect Flood-Extent Change After a Storm Using a Multispectral Stack](Module%2011%20-%20Process%20SAR%20%26%20Multispectral%20-%20Detect%20Flood-Extent%20Change%20With%20Multispectral%20Stacks/03%20Hands-on%20Learning%20-%20Detect%20Flood-Extent%20Change%20After%20a%20Storm%20Using%20a%20Multispectral%20Stack.md) — 과제, 상태 기록
- [04 Explain Your Change Map Like a Professional](Module%2011%20-%20Process%20SAR%20%26%20Multispectral%20-%20Detect%20Flood-Extent%20Change%20With%20Multispectral%20Stacks/04%20Explain%20Your%20Change%20Map%20Like%20a%20Professional.md) — 대화형 활동, 상태 기록
- [05 Practice Quiz: What Does This Change Signal Actually Mean?](Module%2011%20-%20Process%20SAR%20%26%20Multispectral%20-%20Detect%20Flood-Extent%20Change%20With%20Multispectral%20Stacks/05%20Practice%20Quiz%20-%20What%20Does%20This%20Change%20Signal%20Actually%20Mean.md) — 과제, 상태 기록
### Module 12 — Process SAR & Multispectral: Evaluate Classification Accuracy Before You Share Results

- [01 Accuracy Isn’t Optional: How to Know If Your Map Is Trustworthy](Module%2012%20-%20Process%20SAR%20%26%20Multispectral%20-%20Evaluate%20Classification%20Accuracy%20Before%20You%20Share%20Results/01%20Accuracy%20Isn%E2%80%99t%20Optional%20-%20How%20to%20Know%20If%20Your%20Map%20Is%20Trustworthy.md) — 영상, 내용 정리
- [02 Beginner Accuracy Evaluation: Confusion Matrix Thinking Without the Overwhelm](Module%2012%20-%20Process%20SAR%20%26%20Multispectral%20-%20Evaluate%20Classification%20Accuracy%20Before%20You%20Share%20Results/02%20Beginner%20Accuracy%20Evaluation%20-%20Confusion%20Matrix%20Thinking%20Without%20the%20Overwhelm.md) — 읽기, 내용 정리
- [03 Hands-on Learning: Evaluate Classification Results for Flood Detection](Module%2012%20-%20Process%20SAR%20%26%20Multispectral%20-%20Evaluate%20Classification%20Accuracy%20Before%20You%20Share%20Results/03%20Hands-on%20Learning%20-%20Evaluate%20Classification%20Results%20for%20Flood%20Detection.md) — 과제, 상태 기록
- [04 Would You Send This to the Response Team?](Module%2012%20-%20Process%20SAR%20%26%20Multispectral%20-%20Evaluate%20Classification%20Accuracy%20Before%20You%20Share%20Results/04%20Would%20You%20Send%20This%20to%20the%20Response%20Team.md) — 대화형 활동, 상태 기록
- [05 Graded Assessment: Flood Extent Evidence: Process, Detect, Evaluate](Module%2012%20-%20Process%20SAR%20%26%20Multispectral%20-%20Evaluate%20Classification%20Accuracy%20Before%20You%20Share%20Results/05%20Graded%20Assessment%20-%20Flood%20Extent%20Evidence%20-%20Process%2C%20Detect%2C%20Evaluate.md) — 과제, 상태 기록
### Module 13 — Project Module: Remote Sensing Analysis

- [01 Why This Project Matters](Module%2013%20-%20Project%20Module%20-%20Remote%20Sensing%20Analysis/01%20Why%20This%20Project%20Matters.md) — 읽기, 내용 정리
- [02 Project Requirements](Module%2013%20-%20Project%20Module%20-%20Remote%20Sensing%20Analysis/02%20Project%20Requirements.md) — 읽기, 내용 정리
- [03 Remote Sensing Analysis](Module%2013%20-%20Project%20Module%20-%20Remote%20Sensing%20Analysis/03%20Remote%20Sensing%20Analysis.md) — 과제, 상태 기록

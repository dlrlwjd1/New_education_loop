# Why Clip Rasters Before Analysis

## 개요
- 유형: MOOC 영상
- 원본: [Why Clip Rasters Before Analysis](https://www.mooc.org/learn/raster-processing-and-remote-sensing/lecture/Rz9jU/why-clip-rasters-before-analysis)
- 관심 영역(AOI)만 남기도록 래스터를 클리핑하는 이유를 성능·관련성·설명 가능성 관점에서 설명한다.

## 내용
- 큰 래스터 전체를 처리하지 않아 메모리와 실행 시간이 줄어든다.
- 연구 대상 밖 픽셀이 통계와 시각 해석에 섞이는 것을 막는다.
- 클리핑은 픽셀 값이나 CRS를 바꾸는 작업이 아니라 사용할 공간 범위를 제한하는 작업이다.

## 예시
농경지 NDVI를 계산하기 전에 필지 또는 유역 경계로 잘라 도로·산림·미사용 토지를 제외한다.

## 요약
- 도구를 실행하기 전에 입력 데이터와 분석 가정을 검증한다.
- 결과가 그럴듯하게 보이는 것보다 공간적·분석적 의미를 설명할 수 있는지가 중요하다.

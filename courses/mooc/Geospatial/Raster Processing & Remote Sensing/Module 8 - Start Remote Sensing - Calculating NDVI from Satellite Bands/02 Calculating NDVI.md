# Calculating NDVI

## 개요
- 유형: MOOC 영상
- 원본: [Calculating NDVI](https://www.mooc.org/learn/raster-processing-and-remote-sensing/lecture/CBGB0/calculating-ndvi)
- Red와 NIR 반사도로 정규식생지수(NDVI)를 계산하고 값의 방향을 해석한다.

## 내용
- 공식은 `(NIR - Red) / (NIR + Red)`이다.
- 합으로 나누는 정규화 때문에 결과는 대체로 -1에서 1 사이가 되어 영상 간 비교가 쉬워진다.
- 높은 양수는 일반적으로 활발한 식생, 0 부근은 비식생 표면, 음수는 물 등과 연결되지만 맥락이 필요하다.

## 예시
NIR=0.6, Red=0.2이면 NDVI는 `(0.6-0.2)/(0.6+0.2)=0.5`다.

## 요약
- 도구를 실행하기 전에 입력 데이터와 분석 가정을 검증한다.
- 결과가 그럴듯하게 보이는 것보다 공간적·분석적 의미를 설명할 수 있는지가 중요하다.

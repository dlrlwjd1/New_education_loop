# Beginner Accuracy Evaluation: Confusion Matrix Thinking Without the Overwhelm

## 개요
- 유형: MOOC 읽기
- 원본: [Beginner Accuracy Evaluation: Confusion Matrix Thinking Without the Overwhelm](https://www.mooc.org/learn/raster-processing-and-remote-sensing/supplement/v2oxR/beginner-accuracy-evaluation-confusion-matrix-thinking-without-the-overwhelm)
- confusion matrix를 실제 클래스와 예측 클래스의 교차표로 읽고 전체 정확도의 한계를 이해한다.

## 내용
- 대각선은 맞춘 사례, 비대각선은 클래스 간 혼동을 보여 준다.
- 불균형 자료에서는 다수 클래스가 전체 정확도를 높여도 중요한 침수 클래스를 놓칠 수 있다.
- 사용 목적에 따라 false positive와 false negative 중 어느 오류가 더 위험한지 먼저 정한다.

## 예시
침수 대응에서는 놓친 침수(false negative)가 자원 배치에 미칠 위험을 별도로 점검한다.

## 요약
- 도구를 실행하기 전에 입력 데이터와 분석 가정을 검증한다.
- 결과가 그럴듯하게 보이는 것보다 공간적·분석적 의미를 설명할 수 있는지가 중요하다.

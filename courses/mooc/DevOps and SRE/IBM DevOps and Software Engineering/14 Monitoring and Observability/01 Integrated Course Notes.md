# Monitoring and Observability for Development and DevOps

## 개요
- 애플리케이션 모니터링, logging 방법론과 관측성 개념을 운영 문제 해결에 연결한다.

## 내용
- metrics는 추세와 경보, logs는 사건 세부, traces는 분산 요청 경로를 보여준다. 세 신호를 공통 timestamp·service·correlation ID로 연결한다.
- SLI는 측정값, SLO는 목표, error budget은 신뢰성과 변경 속도의 의사결정 기준이다.
- Prometheus 방식 지표와 Grafana dashboard는 사용자 증상 중심으로 구성하고 경보에는 실행 가능한 runbook을 연결한다.
- 구조화 로그, 적절한 level, 보존·민감정보 정책을 적용하고 장애 시 탐지–진단–완화–학습 흐름을 따른다.

## 예시
```text
request_id=abc service=checkout status=500 latency_ms=842
```

## 요약
- 5개 모듈은 모니터링 입문, 시스템·기법, logging, observability, 최종 프로젝트다.
- 이 강좌는 IBM DevOps and Software Engineering 전문과정의 14번째 하위 강좌이자, `DevOps and SRE` 카테고리 최상위의 독립 코스이기도 하다(동일한 MOOC 강좌).
- 실제 강의 목록 기준 5개 모듈, 63개 항목(영상·리딩·핸즈온랩·치트시트·용어집) 전체 정리본은 [Monitoring and Observability 강좌](../../Monitoring%20and%20Observability%20for%20Development%20and%20DevOps/README.md)에 있다.

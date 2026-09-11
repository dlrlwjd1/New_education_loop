# Inspecting a Hugging Face Dataset on Azure

## 개요
- 앞서 Azure에 등록한 와인 데이터셋을 **Explore/Profile** 탭으로 탐색적 분석(EDA)해보는 2분 짧은 실습.

## 내용

### Explore 탭 — pandas의 `.head()`와 유사한 미리보기
- Azure ML Studio의 데이터 자산 페이지에서 **Explore**를 클릭하면 pandas의 `head()`처럼 데이터 일부를 간단히 미리 볼 수 있음.

### Profile 탭 — 자동 통계 요약
- **Profile** 탭에서는 컬럼별 자동 통계를 확인 가능:
  - `region`: Napa Valley, Oregon, Tuscany 등 지역 분포.
  - `rating`: **85~100 범위**에서 분포 — 3,200개 행 중 **97~99점 범위는 단 88개**뿐이며, 100점은 전혀 없음.
  - `variety`, `notes`(텍스트/문자열 컬럼이라 통계상 특별한 내용 없음) 등도 함께 확인.
- 아무 코드도 실행하지 않고 **업로드만으로 즉시 이런 정보를 얻을 수 있다**는 것이 유용한 점.

### Python SDK로 접근 및 버전 관리
- 데이터 자산 페이지의 **"Consume"** 탭에서 Python SDK로 이 데이터셋을 불러오는 코드 스니펫 확인 가능.
- 데이터를 덮어쓰지 않고 **새 버전(new version)**을 만들고 싶다면, 앞서 한 것과 동일한 업로드 프로세스를 다시 거치면 됨(SDK로도 동일하게 가능).

## 요약
- Azure ML Studio의 **Explore(미리보기)**와 **Profile(자동 통계)** 탭은 코드를 작성하지 않고도 업로드된 Hugging Face 데이터셋의 분포·범위를 빠르게 파악할 수 있게 해주며, 필요시 Python SDK로 프로그래매틱하게 접근하거나 새 버전을 업로드할 수도 있다.

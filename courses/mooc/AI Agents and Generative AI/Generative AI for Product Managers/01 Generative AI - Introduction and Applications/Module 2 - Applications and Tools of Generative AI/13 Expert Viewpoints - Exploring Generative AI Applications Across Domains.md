# 13 Expert Viewpoints: Exploring Generative AI Applications Across Domains (전문가 관점 — 도메인별 응용)

## 개요
- 교육(education)·의료(healthcare)·금융(finance) 세 도메인을 중심으로 생성형 AI의 실제 응용 사례를 전문가가 설명하는 영상
- [01 Applications of Generative AI](01%20Applications%20of%20Generative%20AI.md)에서 다룬 산업별 개괄을 더 구체적인 프로젝트 사례로 심화

## 내용

### 교육(Education) — Skills Network의 실제 도입 사례
- 과제·퀴즈를 채점하는 도구를 이미 도입 — 학습자가 틀렸을 때 **피드백까지 자동 제공**
- 방법은 단순: "다음 루브릭(rubric)으로 채점해줘. 틀린 부분이 있으면 학습자가 실수에서 배울 수 있도록 문단으로 설명해줘"라는 프롬프트만으로 구현 — 생성형 AI 덕분에 "거의 공짜로" 얻어지는 기능
- **개인 튜터 "Ty"**: 학습자가 랩에서 막혔을 때 에러 메시지를 붙여넣으면 버그 원인·해결 아이디어를 제공하는 생성형 AI 조교
  - 게시판에 질문 올리고 며칠~몇 주씩 기다리는 대신, **양방향(two-way) 실시간 소통**이 가능해짐
  - 수만 명이 수강하는 대규모 강좌에서 제한된 강사·조교 인력으로는 불가능했던 첨삭·리뷰 제공을 가능하게 함

### 의료(Healthcare/Medical) — 신약 개발과 진단
- **의료 영상 생성(medical image generation)**: 합성 이미지 데이터를 만들어 의료 영상용 머신러닝 모델을 더 강력하게 구축·훈련·검증
- **신약 개발(drug discovery)**: 원하는 특성을 가진 분자 구조(molecular structure)를 생성해 연구 과정을 크게 가속화
- **맞춤형 의료(personalized medicine)**: 아미노산·단백질·게놈 패턴을 생성형 AI로 분석해 증상에 맞는 맞춤 치료 정보 생성
- **대표 프로젝트**:
  - **DeepMind** — 아미노산 서열로부터 단백질의 3D 구조 예측
  - **유방암 진단** — GAN으로 합성 데이터를 생성해 더 강력한 CNN(합성곱 신경망)을 구축, 유방암을 더 효율적으로 탐지
  - **In Silico Medicine** — 생성형 AI로 새로운 신약 후보 물질을 식별, 초기 발견 단계 가속화. 의료 영상 해상도 향상·이상 탐지로 진단 정확도 개선
  - **NVIDIA × King's College London** — 프라이버시 문제 없이 방사선 전문의 훈련용 합성 뇌 MRI 스캔 생성

### 금융(Finance) — 사기 탐지부터 트레이딩까지
- **사기 탐지(fraud detection)**: 거래 내역에서 수상한 패턴을 감지하는 "탐지기" 역할
- **트레이딩 지원**: 시장 데이터를 대량 분석해 트레이더의 스마트한 의사결정을 지원
- **고객 응대**: 온라인 챗봇을 구동해 고객 문의·거래 지원
- **대표 사례**:
  - **JP Morgan (COIN)** — 법률 문서를 순식간에 이해·처리해 시간과 비용 절감
  - **Goldman Sachs** — 시장 움직임을 예측해 트레이더에게 우위 제공

## 요약
- 생성형 AI는 **거의 모든 산업**에 응용 가능하지만, 이 영상은 특히 교육·의료·금융 3개 도메인의 **실제 도입 사례**를 통해 추상적 개념을 구체화함
- 교육: 채점·피드백 자동화 + 개인 튜터("Ty")로 확장성(scalability) 문제 해결
- 의료: 합성 데이터·이미지로 신약 개발과 진단 정확도를 가속화 (DeepMind, In Silico Medicine, NVIDIA×King's College 등)
- 금융: 사기 탐지·트레이딩 지원·고객 응대에서 실무 도입 (JP Morgan, Goldman Sachs)
- [12 Expert Viewpoints - Leveraging Generative AI Tools](12%20Expert%20Viewpoints%20-%20Leveraging%20Generative%20AI%20Tools.md)가 "어떤 도구가 좋은가"였다면, 이 영상은 "그 도구들이 실제로 어떤 문제를 해결하고 있는가"에 초점

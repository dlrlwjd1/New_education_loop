# Stream Real-Time Geo

**Course URL:** [mooc.org/learn/stream-real-time-geo](https://www.mooc.org/learn/stream-real-time-geo)

MOOC / ansrsource instructors. 차량 추적(fleet-tracking) 대시보드라는 하나의 현실적인 시나리오를 중심으로, MQTT로 실시간 GPS 메시지를 수집하고, Leaflet.js로 그 스트림을 살아있는 인터랙티브 지도로 시각화하고, 장치부터 대시보드까지 엔드투엔드 지연시간(latency)을 측정·최적화하는 방법을 다루는 실시간 지오스페이셜 파이프라인 코스임. "Geospatial Visualization, Cloud & Real-Time Pipelines" 스페셜라이제이션의 6번째 코스(Course 6 of 7). Practice Assignment(Hands-On Learning/Practice Quiz)와 Graded Assignment는 학업 정직성 정책에 따라 건너뜀.

## 모듈 구성
- **Module 1 - Start the Stream: Ingest GPS Data via MQTT** — 코스 전체 로드맵 소개, 실시간 지오스페이셜 시스템이 왜 중요한지 다루는 대화형 실습, 브라우저 기반 HiveMQ MQTT 클라이언트로 토픽·페이로드를 발행·구독하는 워크스루, 발행자-브로커-구독자로 이루어진 MQTT의 발행-구독 패턴
- **Module 2 - See It Move: Mapping Real-Time GPS Tracks** — Leaflet로 라이브 지도를 초기화하고 GPS 스트림을 마커·폴리라인으로 번역하는 방법, 라이브 지도 UI의 핵심 구성 요소(컨테이너·타일 레이어·마커·흔적·줌/팬), 여러 차량을 떨림 없이 매끄럽게 업데이트하는 기법, 실제로 신뢰받는 지도 설계를 다루는 대화형 실습
- [Module 3 - Optimize for Speed - Measuring Latency in Real-Time Pipelines](Module%203%20-%20Optimize%20for%20Speed%20-%20Measuring%20Latency%20in%20Real-Time%20Pipelines/) — 발행·수신·렌더링 타임스탬프로 엔드투엔드 지연시간을 측정하는 방법, 지연시간·처리량·지터의 차이와 파이프라인 각 단계에서 지연이 누적되는 방식, QoS·스로틀링·렌더링 최적화 같은 선택적 최적화 기법, 코스 마무리

## 진행 상황
- [x] Module 1 — Start the Stream: Ingest GPS Data via MQTT
- [x] Module 2 — See It Move: Mapping Real-Time GPS Tracks
- [x] Module 3 — Optimize for Speed: Measuring Latency in Real-Time Pipelines

## 강의 목록

<!-- course-inventory:start -->
### Module 1 - Start the Stream: Ingest GPS Data via MQTT

- **01.Welcome to Stream Real-Time Geo**
- **02.Thinking in Real Time: Why Streaming Geo Systems Matter (Dialogue)**
- **03.Set Up the Stream (Browser-Only): MQTT + Live GPS Messages (Reading)**
- **04.From Devices to Dashboards: What Is MQTT**

### Module 2 - See It Move: Mapping Real-Time GPS Tracks

- **01.Real-Time Maps: From Data to Dynamic Dashboards**
- **02.Anatomy of a Live Map UI: Leaflet Essentials (Reading)**
- **03.Dynamic Maps in Action: Real-Time Updates with Leaflet**
- **04.Designing for the Real World: Maps that Work (Dialogue)**

### Module 3 - Optimize for Speed - Measuring Latency in Real-Time Pipelines

- [01.From Device to Dashboard: Measuring Latency End-to-End](Module%203%20-%20Optimize%20for%20Speed%20-%20Measuring%20Latency%20in%20Real-Time%20Pipelines/01.From%20Device%20to%20Dashboard%20-%20Measuring%20Latency%20End-to-End.md)
- [02.What is Latency Understanding Pipeline Delays (Reading)](Module%203%20-%20Optimize%20for%20Speed%20-%20Measuring%20Latency%20in%20Real-Time%20Pipelines/02.What%20is%20Latency%20Understanding%20Pipeline%20Delays%20%28Reading%29.md)
- [03.How Much Latency Is Too Much (Dialogue)](Module%203%20-%20Optimize%20for%20Speed%20-%20Measuring%20Latency%20in%20Real-Time%20Pipelines/03.How%20Much%20Latency%20Is%20Too%20Much%20%28Dialogue%29.md)
- [04.Optimization Techniques for Real-Time Streaming (Optional) (Reading)](Module%203%20-%20Optimize%20for%20Speed%20-%20Measuring%20Latency%20in%20Real-Time%20Pipelines/04.Optimization%20Techniques%20for%20Real-Time%20Streaming%20%28Optional%29%20%28Reading%29.md)
- [05.Congratulations and Your Continuous Learning Journey](Module%203%20-%20Optimize%20for%20Speed%20-%20Measuring%20Latency%20in%20Real-Time%20Pipelines/05.Congratulations%20and%20Your%20Continuous%20Learning%20Journey.md)

<!-- course-inventory:end -->

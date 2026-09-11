# Turn ChatGPT into a Competitive Intelligence Engine

## 개요
- ChatGPT를 PM 실무에 쓰는 두 번째 데모 — **경쟁사 분석(competitor analysis)**
- 경쟁사 조사는 중요하지만 **지루하고 시간 소모적(tedious & time-consuming)**이며 시간당 가치가 낮음
- LLM으로 **빠른 스냅샷(quick snapshot)**을 얻어 출발점(jump start)으로 삼는다
- 주의: 항상 백미러(rear-view mirror)로 경쟁사만 보며 운전하지 말 것 — 가끔 지형(lay of the land)을 파악하는 용도

## 내용

### 시작 프롬프트 (전략적 인사이트 요구)
- "나는 프로젝트 관리 도구를 만드는 B2B SaaS 회사의 PM이다. **Asana**의 작업 의존성(task dependencies) 접근을 분석하라. 공개 정보 기반으로:
  - 그들이 푸는 문제는?
  - 그들의 독특한 접근(unique approach)은?
  - 우리가 파고들 수 있는 빈틈(gaps)은?
  - 배울 점은?
  - **기능 목록이 아니라 전략적 인사이트(strategic insights)**에 집중"
- 붙여넣으며 실시간 수정: 회사를 **Monday.com**으로 변경, "가능하면 시각화(visual)하고, **실행 가능한(actionable) 인사이트**에 크게 무게를 둬라"

### 일반 채팅 vs 심층 모드
- 그냥 일반 채팅(regular chat)만 사용 → 약 10~20초 소요
- **딥 리서치(deep research)**나 **에이전트 모드(agent mode)**를 켜면 수 분이 걸림 — 때론 유용하지만 빠른 스냅샷엔 일반 채팅으로 충분

### 응답에서 얻은 것 (Asana 분석)
- **푸는 문제**: 교차 기능 타이밍(cross-functional timing)을 명확히 — 누가 누구에게 막혀 있는지(who's blocked by whom), 파급 효과(knock-on effects)로 일정을 현실적으로 유지
- **독특한 접근**: 타임라인 우선(timeline-first) 의존성
- **빈틈(gaps)**: 의존성 자동화 한계, 프로젝트 간(inter-project) 의존성, AI 구체성 부족

### 심화 질문 — 파괴적 기능 도출
- "다음 분기에 딱 하나의 기능으로 Asana를 완전히 무너뜨린다면?"
  → **"AI 영향 시뮬레이션이 있는 교차 프로젝트 자동 리플(ripple) 의존성"**
  - 프로젝트 전반을 잇는 시스템 전역 의존성 그래프 + 상위 작업 변경 시 날짜·담당자·리스크 점수 자동 파급
  - Asana 한계: 의존성이 프로젝트 경계에서 멈춤, 포트폴리오 롤업은 실시간이 아님, 변경 시 수동 재계획 필요

### 밸류 맵(Value Map) 만들기
- "나(Monday.com)와 경쟁하는 경쟁사 3개를 더 주고, **밸류 맵 형태의 표**로 만들어라. 사용자가 얻는 여러 혜택(benefits)과 각 경쟁사(우리 회사 포함)의 점수를 표시"
  → Asana, ClickUp, Smartsheet 포함, 사용자가 원하는 혜택(행) × 각 회사의 대응 점수(열)
- 밸류 맵 = 처음 해보는 사람에게 좋은 시각화 방법

### 강점/약점 명확화
- "Monday.com이 어디서 최고이고 어디서 가장 약한지 명확히 해줘"
  → 명확한 우위 / 경쟁력 있음 / 뒤처짐(behind)으로 색상 표시
  - **강점(core moat)**: 사용성(ease of use), 커스터마이징, 워크플로, 성능
  - **약점**: AI 어시스턴트 / 예측 인사이트(predictive insights) — Asana에 뒤처짐

## 예시
- 경쟁사의 문제·접근법·시장 빈틈을 공개 정보로 분석하게 한 뒤 자사와 세 경쟁사를 혜택별 밸류 맵 표로 비교한다.

## 요약
- ChatGPT로 상위 경쟁사를 **빠르게 티어다운(teardown)** — 잘하는 것, 못하는 것, 파고들 빈틈 파악
- 흐름: 전략 인사이트 요청 → 심화(파괴적 기능 1개) → **밸류 맵 표** → 강점/약점 색상 매핑
- 빠른 스냅샷엔 일반 채팅으로 충분, 더 깊이가 필요할 땐 딥 리서치/에이전트 모드
- 결과물은 근시일 로드맵(near-term roadmap)에서 경쟁 우위를 노릴 출발점

# 11 Lab: Naive Prompting and Persona Pattern (실습 — 나이브 프롬프팅 vs 페르소나 패턴)

## 개요
- **나이브(가장 단순한) 프롬프트**와 **페르소나 패턴(persona pattern)**을 직접 비교해, 프롬프트에 몇 단어만 추가해도 결과가 얼마나 달라지는지 체감하는 20분 실습

### 학습 목표
- 나이브 프롬프트와 페르소나 기반 프롬프트를 만들어 결과 품질·의도 부합도 차이 관찰
- 일관성·톤·작업 관련성 측면에서 나이브 vs 페르소나 프롬프트의 효과를 분석

## 내용

### The Naive Approach (나이브 접근)
- 나이브 프롬프트: `What is the best way to get fit?` → 괜찮지만 다소 일반적인(generic) 조언
- 페르소나 추가: `Acting as a fitness expert, tell me the best way to get fit.` → **PROMPT INSTRUCTIONS 필드를 쓰지 않고도** 프롬프트 자체에 페르소나를 넣을 수 있음 → 더 상세하고 알찬 답변
- PROMPT INSTRUCTIONS 필드에 페르소나를 넣고, 답변 형식(불릿 포인트, 표 등)까지 지정하는 방식으로 확장 가능

### Taking It a Step Further — 3단계 프롬프트 구조
PROMPT INSTRUCTIONS에 다음 3요소를 결합:
1. **페르소나 지정**: "당신은 최신 연구 데이터에 정통한 피트니스 전문가 역할을 할 것이다"
2. **한정자(qualifier)**: "연구 기반(research-based)"이라는 조건 추가
3. **응답 형식 지정**: 단계별 상세 지침을 원한다고 명시

→ 실제 질의("초보자를 위한 체중 감량+근력 강화 헬스 프로그램을 만들어줘")에 훨씬 더 상세하고 구조화된(8주 프로그램, 점진적 과부하 원칙 등) 답변 획득
- **한계**: 그래도 여전히 "일반적인 초보자"를 위한 것 — 성별·나이·가동성 이슈 등 개인화 요소는 반영되지 않음 (프롬프트에 없는 정보는 모델이 알 수 없음)

### When the Persona Is Someone Famous (유명인 페르소나)
- 나이브 프롬프트: `Give me a list of 10 article titles to promote my new book about dog training.` → 무난하지만 평범한 제목 목록
- 유명 마케터 페르소나 적용: `Acting as marketing expert Seth Godin, give me a list of 10 article titles...` → **Seth Godin의 마케팅 철학(Purple Cow, Tribes, The Dip, Permission Marketing 등)이 반영된 훨씬 독창적이고 흥미로운 제목**
- 핵심 교훈: **몇 단어만 추가해도(페르소나 지정) 프롬프트 엔지니어링의 힘을 실감할 수 있다**

## 요약
- 이 랩은 [10 Best Practices for Prompt Creation](10%20Best%20Practices%20for%20Prompt%20Creation.md)의 "역할극/페르소나 패턴"을 직접 체험 — **같은 질문이라도 페르소나를 지정하는 것만으로 결과의 깊이와 스타일이 극적으로 달라짐**
- 페르소나 패턴은 (1) 역할 지정 (2) 한정자/조건 (3) 응답 형식 지정의 3요소로 구조화하면 더 강력해짐
- 유명인 페르소나(예: Seth Godin)를 지정하면 그 인물 특유의 사고 프레임워크까지 응답에 반영되는 것을 확인 — 다음 모듈에서 배울 더 정교한 프롬프트 기법들의 출발점이 되는 실습

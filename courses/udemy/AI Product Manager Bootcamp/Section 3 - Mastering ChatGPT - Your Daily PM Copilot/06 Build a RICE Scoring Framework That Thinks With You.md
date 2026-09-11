# Build a RICE Scoring Framework That Thinks With You

## 개요
- 마지막 비직관적 활용 — **프레임워크 기반으로 빌드 결정(build decisions) 평가**
- 사용한 프레임워크: **RICE** = **Reach(도달) × Impact(임팩트) × Confidence(확신) ÷ Effort(노력)**
- 핵심 교훈: **구체적 컨텍스트(specific context)를 줄수록 프롬프트 결과가 무한히 좋아진다** — 이 데모에서 명확히 드러남

## 내용

### 사용한 프롬프트
"RICE 프레임워크(Reach, Impact, Confidence, Effort)로 이 기능 아이디어들을 평가하도록 도와줘:
- 5개 기능 목록 제공
- 각 기능에 대해 Reach/Impact/Confidence/Effort를 **명확히 묻는 질문(clarifying questions)**을 해서 RICE 점수 계산
- 비교 표(comparison table) 생성
- 이유와 함께 **상위 3개 우선순위 추천**
- 실용적이고 실행 가능하게(practical and actionable)"

### ChatGPT의 진행 방식
1. 먼저 각 지표를 **내 컨텍스트에 맞게 정의**하고 추정치를 물음:
   - Reach: 분기당 몇 명의 사용자에게 영향?
   - Impact: 핵심 지표를 얼마나 움직이나? (3~1 스케일 등)
   - Confidence: Reach·Impact 추정에 얼마나 확신하나? (%)
   - Effort: 빌드에 드는 총 person-months
2. 사용자가 5개 기능에 추정치 입력 (강사는 즉석에서 임의값 사용 — 실제로는 실제 추정치를 넣어야 함):
   - 다크 모드, 대량 작업(bulk actions), 모바일 앱, 고급 검색/필터, Excel/CSV 내보내기
3. **RICE 공식 = Reach × Impact × Confidence ÷ Effort**로 점수 산출 → 비교 표
4. 상위 3개 추천: **① 모바일 앱**(막대한 도달 + 전략적 중요성, 높은 노력에도 지배적) ② 다크 모드 등

### 이전 데모와 결합 — CFO 정렬용 요약
- "이번 주 회의적인 CFO와 이 기능 옵션들을 리뷰한다. RICE 점수 기반으로 **방향 정렬용 간단 요약**을 만들어줘"
- 결과의 강점 — CFO의 사고 틀(ROI·경제적 수익)에 맞춰 정렬:
  - 모바일 앱 = 최고 ROI 동력, 단순 UI 개선이 아닌 **전략적 성장(strategic growth)**
  - 다크 모드 = 저비용 성과(low-cost win), 인게이지먼트 개선
  - 내보내기 = 검증 후 다음 단계, 지금은 우선순위 낮춤(deprioritize)
  - 결론: **인지된 사용성이 아니라 경제적 수익을 극대화하는 기능에 먼저 투자** 권고

## 예시
- 다섯 기능의 Reach·Impact·Confidence·Effort를 입력해 RICE 표를 만들고, 상위 세 기능의 추천 이유를 CFO 관점으로 다시 요약한다.

## 요약
- ChatGPT로 기능들을 **RICE(Reach×Impact×Confidence÷Effort)**로 점수화하고 비교 표·우선순위 추천을 얻음
- **구체적 컨텍스트를 넣을수록 결과가 좋아진다** — 임의값이 아닌 실제 추정치를 넣어야 함
- 데모 결합: RICE 결과를 앞서 배운 **CFO 롤플레잉**과 연결해 이해관계자 정렬용 요약 생성
- 코스 후반에 최고의 제품 리더들의 프레임워크를 더 정교하게 다루는 도구를 소개 예정

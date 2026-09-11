# Demonstration: Ethical Screening using Sola Security

## 개요
- Sola를 AI 콘텐츠를 위한 "스마트 체크포인트(smart checkpoint)"로 활용해 위험한 명령어와 비밀(secrets)을 잡아내고, 공정하고 투명한 표현을 유도하며, GDPR·CCPA 친화적 선택으로 이끄는 과정을 시연한다.
- 이 데모의 초점은 윤리적 AI(ethical AI), 투명성(transparency), 컴플라이언스(compliance)다.
- 전체 흐름: 위험·공정성 스니펫(snippet) 작성 → 투명성 노트 생성 → NIST·ISO 참조가 포함된 GDPR·CCPA 체크리스트 작성 → 이 흐름을 재사용 가능한 앱으로 저장.

## 내용

### 시작 — 문제가 섞인 초안 분석
홈 화면의 "무엇을 보호해 드릴까요?(what can I help you secure today?)" 프롬프트를 클릭한다. 정상 텍스트에 몇 가지 문제가 섞인 짧은 초안을 붙여넣어 Sola가 윤리·위험·컴플라이언스를 분석하도록 한다. 주목할 하이라이트는 다음과 같다.

- 국가(country)와 나이(age)를 둘러싼 공정성 위험(fairness risks)
- 위험한 명령어 패턴(risky command patterns)
- 가짜 키 패턴(fake key patterns)
- 외부 링크(external links)

이는 윤리·안전·프라이버시 논의의 틀을 잡아준다.

### 편향 및 공정성 검토
평이한 언어로 편향·공정성 검토를 명시적으로 요청한다.

> 프롬프트: "편향 및 공정성 검토를 실행하라. 잠재적 차별적 영향(disparate impact), 민감 속성(sensitive attributes), 불공정한 결과를 줄일 방법을 식별하라. 완화 단계와 검토자 체크리스트(reviewer checklist)를 제공하라."

민감 속성, 신규 계정에 대한 과잉 필터링(over-filtering) 위험, 검토자 체크리스트에 관한 노트가 나온다. 이는 윤리적 설계(ethical design)에 정렬된다 — 위험을 명시하고, 완화책을 제안하며, 검토자에게 반복 가능한 체크리스트를 준다.

### 투명성 및 책임성 노트 생성
티켓(ticket)에 붙여넣을 수 있는 투명성·책임성 노트를 생성한다.

> 프롬프트: "투명성 노트를 작성하라. 목적(purpose), 데이터 입력(data inputs), 한계(limitations), 알려진 위험(known risks), 휴먼 인 더 루프(human-in-the-loop) 지점, 에스컬레이션 연락처(escalation contacts)를 포함하라."

의도, 한계, 에스컬레이션을 문서화하는 방식에 주목한다. 이는 책임성(accountability)을 뒷받침하고 결정 경로(decision path)를 감사하는 데 도움이 된다.

### GDPR·CCPA 준비 체크리스트
같은 스니펫에 대한 GDPR·CCPA 체크리스트를 생성한다.

> 프롬프트: "이 정책에 대한 GDPR·CCPA 준비 체크리스트를 작성하라. 법적 근거 또는 동의(lawful basis or consent), 목적 제한(purpose limitation), 데이터 최소화(data minimization), 보존(retention), 사용자 권리 처리(user rights handling), DPIA 트리거(DPIA triggers)를 제시하라."

동의 또는 다른 법적 근거, 최소화, 보존, 사용자 권리 같은 항목을 짚어준다. 이는 제품팀에 구체적인 컴플라이언스 할 일 목록(to-do list)을 준다.

### NIST·ISO 프레임워크 참조 매핑
거버넌스를 위한 프레임워크 참조를 추가한다.

> 프롬프트: "통제 항목을 NIST AI RMF 카테고리와 ISO 스타일 거버넌스 포인트에 매핑하라. 짧고 실행 가능하게 유지하라."

거버넌스, 데이터 관리(data management), 측정(measurement), 위험 통제(risk controls) 관련 카테고리를 호출한다. 이는 윤리와 컴플라이언스를 인식 가능한 통제 언어(control language)로 번역하는 데 도움이 된다.

### 안전한 재작성 — 가드레일 적용
위험한 초안을 가드레일이 적용된 안전한 버전으로 재작성한다.

> 프롬프트: "위험한 명령어와 키를 제거하고, 국가·나이 같은 민감 속성과 결정 로직을 피하도록 정책을 재작성하라. 허용/비허용 텍스트 예시와 함께 가드레일 규칙을 추가하라."

정리된 정책 언어(cleaned policy language)와 예시가 포함된 명시적 가드레일 두 가지를 확인한다. 이는 명확성을 높이고 우발적 오용(accidental misuse)을 줄인다.

### 관리자용 요약과 앱 저장
- **한 문단 관리자 요약(manager summary)**: 티켓이나 변경 로그(change log)에 붙여넣을 수 있는 한 문단 요약을 생성한다. 발견된 윤리·공정성 위험, 투명성 노트, GDPR·CCPA 조치 항목, NIST·ISO 참조, 다음 단계(next steps)를 담아 간결한 감사 노트를 제공한다.
- **재사용 가능한 앱으로 저장**: Apps → My Apps → New App에서 구성한다. 이름을 "ethics and compliance review"로 지정하고, "Continue without data source"를 클릭하면 다음 버튼이 활성화된다. 입력(검토할 콘텐츠와 단계)을 추가한 뒤 Save/Publish를 클릭한다. 이제 이 앱은 매번 동일한 점검을 실행하여 공정성 노트, 투명성 문서, 컴플라이언스 과제, 요약을 한 번에 산출한다.

## 예시
- 국가·나이 기반 공정성 위험과 가짜 키·위험 명령어가 섞인 초안을 붙여넣어 Sola가 윤리·위험·컴플라이언스를 한 번에 분석하는 시나리오.
- "ethics and compliance review" 앱 저장 흐름: Apps → My Apps → New App → 이름 지정 → Continue without data source → 입력 추가 → Save/Publish.

## 요약
- Sola로 윤리·공정성, 투명성·책임성, 컴플라이언스 요구사항을 하나의 반복 가능한(repeatable) 흐름으로 연결하는 실습이다.
- 흐름: 문제 섞인 초안 분석 → 편향·공정성 검토(차별적 영향·민감 속성·검토자 체크리스트) → 투명성 노트(목적·한계·에스컬레이션) → GDPR·CCPA 체크리스트(동의·최소화·보존·사용자 권리·DPIA) → NIST·ISO 매핑 → 가드레일 적용 안전 재작성 → 관리자 요약.
- 각 단계는 윤리적 설계, 책임성, 규제 준수라는 앞선 강의 개념을 실무 프롬프트로 구현한다.
- 최종적으로 워크플로를 "ethics and compliance review" 앱으로 저장해 누구나 동일한 점검을 일관되게 실행할 수 있다.

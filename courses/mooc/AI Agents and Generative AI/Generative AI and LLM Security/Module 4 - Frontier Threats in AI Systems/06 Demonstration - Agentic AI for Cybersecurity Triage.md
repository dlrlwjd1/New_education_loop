# Demonstration: Agentic AI for Cybersecurity Triage

## 개요

- 에이전트형(agentic) AI를 사이버 보안 트리아지(triage)에 적용하는 실습 데모다.
- 비유: 경보(alert)를 읽고 적절한 도구를 골라 다음 조치를 추천하는, 단계별 지시를 기다리지 않는 온콜(on-call) 주니어 분석가.
- 경보를 검사하고, 간단한 점검(check)을 호출하며, 명확한 조치(action)와 짧은 요약을 출력하는 작은 에이전트 루프(agent loop)를 만든다.
- Google Colab에서 Hugging Face 트랜스포머(transformers)로 진행한다.

## 내용

### 시나리오와 목표

- Iron Shield Networks는 로그인 이상(login anomaly), 의심스러운 URL, 엔드포인트 스크립트를 보는 24x7 보안 관제 센터(SOC)를 운영한다.
- 원하는 것: 경보를 읽고, 어떤 도구(지표 추출, 평판 점검, 명령 위험 점검)를 쓸지 결정하고, 조치를 제안하며, 경영진용 짧은 요약을 만드는 에이전트형 AI.
- 목표: 아주 작은 에이전트 루프를 구축한다. 경보를 분석하고, 몇 개의 도구를 호출하며, block·isolate·raise a ticket 같은 조치를 추천하고, 케이스나 리포트에 붙일 수 있는 짧은 근거(justification)를 생성한다.

### 환경 준비

- 트랜스포머 스택과 sentencepiece를 설치하고, 정규식(regular expression) 유틸리티, `time`, `json`, Hugging Face `pipeline`을 임포트한다.
- `torch`로 GPU 사용 가능 여부를 감지한다. 변수 `df`는 GPU가 있으면 0, 없으면 -1로 설정한다.
- 선택한 디바이스로 Google **FLAN-T5 small** 인스트럭션 튜닝(instruction-tuned) 모델 파이프라인을 만든다.
- `device`를 출력하면 CPU 또는 GPU가 표시된다. 오류 없이 끝나면 언어 모델이 로드되어, 경보 유형 분류·심각도·근거 작성에 쓸 짧고 구조화된 답을 생성할 준비가 된 것이다.

### 도구(tools) 정의

에이전트가 사용할 도구를 정의하는 셀이다.

- **패턴 컴파일**:
  - `IPv4`: 표준 점 4자리(dotted quad) IP 주소.
  - `URL`: HTTP/HTTPS 링크.
  - `Hash`: MD5/SHA1/SHA256 형태의 문자열.
  - `CMD_RISK`: `kill | ... get | ... rm -rf`, PowerShell 인코딩 입력, base64 디코드 같은 위험한 셸 실행 패턴.
- **시뮬레이션 평판 테이블** `known_bad`: 고위험으로 취급해야 할 IP 주소 1개, 도메인 1개, 파일 해시 1개를 담은 작은 로컬 집합. 실제 시스템이라면 평판 서비스나 위협 인텔리전스(threat intel) 피드를 호출하지만, 여기서는 로컬로 단순화한다.
- **도구 함수**:
  - `extract_IOCs(text)`: 고유한 IP·URL·해시(IOC, 침해 지표)를 찾아 리스트로 반환.
  - `reputation(items)`: URL을 호스트로 정규화한 뒤 `known_bad`와 매칭. 히트(hit)를 반환해 에이전트가 차단 이유를 설명하게 한다.
  - `command_risk`: 위험한 명령 체인 패턴이 있으면 true 반환.
- **티켓 로그**: 메모리 상의 `tickets` 리스트와, ID·이유·심각도·타임스탬프를 기록하는 헬퍼 `open_ticket`.

### 분류와 에이전트 루프

- `classify_llm`: 모델에게 보안 분석가(SOC analyst)처럼 행동하도록 요청하는 함수.
  - 프롬프트가 유형을 `login`, `URL`, `endpoint`, `other` 중에서, 심각도를 `low`, `medium`, `high` 중에서 고르게 한다.
  - `type=값`, `severity=값`, 약 10단어의 `why`를 정확히 반환하도록 지시.
  - 파이프라인 실행 후 정규식으로 세 필드를 파싱하고, 실패 시 합리적 기본값으로 대체(fallback).
- `agent(alert_id, alert_text)`: 에이전트 함수.
  1. `classify_llm`으로 초기 유형·심각도·간단한 이유를 얻는다.
  2. 도구 실행: IOC 추출 → IP·URL·해시를 평판 테이블과 대조 → 위험 명령 패턴 점검.
  3. 결과에 따라 조치 목록 구성:
     - 평판 히트가 있으면 `block_indicators` 추가.
     - 위험 명령이 있으면 `isolate_endpoint` 추가.
     - 주요 유형이거나 히트가 있으면 `create_ticket` 추가(요청 시 `open_ticket` 호출).
  4. 유형·심각도, 평판 히트 수, 위험 명령 여부를 담은 프롬프트로 모델에게 조치를 정당화하는 두 문장을 작성하게 한다.
  - 반환 딕셔너리: ID, 유형, 심각도, why, 추출 지표, 평판 매치, 명령 위험 플래그, 선택 조치, 근거 텍스트.

## 예시

- 5개 데모 경보를 각각 에이전트에 통과시킨 결과:
  - **A001**: IP가 known-bad → block + ticket.
  - **A002**: URL의 도메인이 known-bad → block + ticket.
  - **A003**: 히트 없음 → 조치 없음(no action).
  - **A004**: 파일 해시가 known-bad → block + ticket.
- 경보별 출력에는 ID, 모델이 판단한 유형·심각도, 선택 조치(block indicators / isolate endpoint / create ticket), 평판 히트, 추출된 IP·URL·해시, 명령 위험 플래그, 짧은 근거가 포함된다.

## 요약

- 에이전트형 트리아지 데모는 경보를 읽고 도구를 선택해 다음 조치를 추천하는 작은 에이전트 루프를 구축한다.
- 구성: FLAN-T5 small LLM(유형 분류·심각도·근거 작성) + 규칙 기반 도구(IOC 추출, 평판 점검, 명령 위험 점검) + 티켓 로그.
- 에이전트는 분류 → 도구 실행 → 조치 목록 구성(block/isolate/ticket) → 근거 생성 순서로 동작한다.
- 평판 히트(known-bad IP·도메인·해시)나 위험 명령이 있으면 차단·격리·티켓을 자동 제안하고, 히트가 없으면 조치하지 않는다.

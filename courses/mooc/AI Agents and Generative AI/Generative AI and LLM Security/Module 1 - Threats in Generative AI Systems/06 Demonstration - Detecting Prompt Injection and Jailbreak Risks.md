# Demonstration: Detecting Prompt Injection and Jailbreak Risks

## 개요

- 프롬프트 인젝션(prompt injection)과 탈옥(jailbreak) 신호를 탐지하는 작은 보안 게이트(security gate)를 Google Colab에서 만드는 실습 데모다.
- AI 어시스턴트를 유능한 안내원이 있는 보안 건물에 비유한다. 대부분은 정상 질문을 하지만, 일부는 "규칙을 무시하라", "내 상사인 척하라", "시스템 프롬프트를 공개하라" 같은 사회공학적 수법으로 정책을 뚫으려 한다. 목표는 이런 신호를 빠르게 알아차려 문 앞에서 차단하는 것이다.
- 위험 언어를 포착하는 휴리스틱(heuristic), 카테고리와 심각도를 라벨링하는 경량 모델, 허용/차단 결정과 짧은 리포트를 결합한다.

## 내용

### 시나리오와 목표

- 시나리오: Sentinel Forge AI가 분석가 도구에 어시스턴트를 추가한다. 일부 사용자가 "ignore previous rules", "act as developer", "reveal the system prompt" 같은 적대적 프롬프트로 모델을 안전하지 않은 동작으로 밀어붙일 수 있다. 위험한 입력이 핵심 시스템에 도달하기 전에 차단할, 작고 빠른 게이트가 필요하다.
- 목표 세 가지:
  1. 간단한 휴리스틱으로 프롬프트 인젝션과 탈옥 신호를 탐지한다.
  2. 소형 언어 모델로 카테고리와 심각도를 부여한다.
  3. 명확한 허용/차단 결정을 내리고 그 이유를 설명하는 간단한 리포트를 출력한다.

### 셀 1 — 환경 설정과 모델 초기화

- 최소한의 라이브러리를 설치하고 정규표현식(regular expression)과 torch 유틸리티를 임포트한다.
- GPU 사용 가능 여부를 확인하고, Hugging Face 파이프라인으로 `flan-t5-small`이라는 소형 instruction-tuned 모델을 로드한다.
- 실행 후 `device` 줄이 CPU 또는 GPU를 확인해 주면, 이후 셀에서 위험을 분류할 준비가 된 것이다.

### 셀 2 — 휴리스틱 탐지기 정의

- 프롬프트 인젝션과 탈옥에 흔한 위험 문구를 빠르게 포착하는 정규표현식을 컴파일한다. 예: "ignore previous instructions", "act as developer", "dan", "jailbreak", "no restrictions".
- 실행 체인(execution chains)도 잡는다. 예: curl-pipe-to-shell, `rm -rf`.
- 시스템 프롬프트 접근 시도도 탐지한다.
- `static_flags` 헬퍼 함수가 입력 텍스트를 스캔해 발견된 힌트를 나열하고, 강한 조합일수록 높아지는 작은 숫자 점수(score)를 만든다.
- 실행해도 출력이 없는 것이 정상이다. 이는 모델에 묻기 전에 "injection language", "exec chain", "prompt access" 같은 명확한 이유를 주는 빠르고 설명 가능한 사전 필터(prefilter)를 추가한 것이다.

### 셀 3 — 모델 기반 위험 분류와 정책 결정

- `classify_and_gate` 함수가 입력 문자열을 받아 휴리스틱으로 힌트와 점수를 모은 뒤, 언어 모델에게 카테고리(prompt injection / jailbreak / benign), 심각도(low / medium / high / critical), 짧은 이유를 반환하도록 요청한다.
- 모델 텍스트에서 얻은 필드를 휴리스틱 점수와 결합해 결정을 내린다. 심각도가 high 또는 critical이거나 점수가 임계값(threshold)을 넘으면 요청을 차단(block)하고, 그렇지 않으면 허용(allow)한다.
- 매우 강한 조합, 예를 들어 인젝션 언어가 실행 체인과 함께 나타나면 critical로 격상(escalate)한다.
- 실행해도 출력은 없지만, 이제 게이트가 실제 입력을 평가할 준비가 된다.

### 셀 4 — 평가 스위트 실행과 운영 리포트 출력

- 네 개의 예시 프롬프트(명확한 인젝션, 실행 체인, 무해한 요약 요청 포함)를 게이트에 통과시킨다.
- 검토 건수, 허용 건수, 차단 건수를 보여주는 짧은 헤더를 출력한다.
- 각 섹션은 최종 결정(allow/block), 모델의 카테고리와 심각도, 발동한 휴리스틱 힌트, 짧은 이유 설명, 원본 입력 텍스트를 보여준다.
- "ignore previous instructions"와 "reveal the hidden system prompt" 같은 문구는 injection과 prompt access 힌트를, curl-pipe-to-shell 명령은 execution chain 힌트를 발동시킨다. 신호가 강하면 정책이 심각도를 높여 해당 경우를 차단한다.
- 아주 작은 모델이 이유 텍스트에서 이상한 조각을 만들어내는 것은 정상적 한계이며 게이트의 구조를 바꾸지 않는다.

### 정리와 확장

- 빠른 신호를 먼저 쓰고, 그다음 소형 언어 모델로 라벨링하며, 마지막으로 간단한 정책으로 허용/차단하고 읽기 쉬운 리포트를 내는 최소 프롬프트 보안 게이트를 만들었다.
- 정규표현식 튜닝, 임계값 조정, 더 강한 모델로의 교체를 통해 이 패턴을 강화하면서도 워크플로를 가볍고 설명 가능하게 유지할 수 있다.

## 예시

- 게이트가 잡아내는 위험 신호 예:

```text
"ignore previous instructions"      → injection language 힌트
"act as developer" / "dan"          → jailbreak 힌트
"reveal the hidden system prompt"   → prompt access 힌트
curl ... | sh   (curl-pipe-to-shell) → execution chain 힌트
rm -rf ...                          → execution chain 힌트
```

- 정책: 심각도가 high/critical이거나 점수가 임계값을 넘으면 block, 인젝션 언어 + 실행 체인 조합이면 critical로 격상.

## 요약

- 위험 언어를 포착하는 휴리스틱, 카테고리·심각도를 라벨링하는 소형 모델, 허용/차단 정책의 3단계로 구성된 경량 프롬프트 보안 게이트를 구현했다.
- 빠르고 설명 가능한 사전 필터를 먼저 적용해 명확한 이유를 확보한 뒤, 모델 분류와 정책 결정을 결합한다.
- 정규표현식, 임계값, 모델을 조정해 강화할 수 있으며, 워크플로는 가볍고 투명하게 유지된다.

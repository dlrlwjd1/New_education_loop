# 에이전트 하니스(Agentic Harness)란 무엇인가? (What is an Agentic Harness?)

## 개요
- **핵심 개념 요약**: 비즈니스 실무에 배치할 AI 에이전트의 완성도를 높이기 위해, 대화의 맥락 유지력, 도구 선택 및 매개변수 생성의 정확성, 상태 라우팅 안정성을 자동 모니터링하고 시뮬레이션 테스트하는 프레임워크인 **'에이전트 하니스(Agentic Harness)'**의 구조적 필요성과 활용 방안을 학습합니다.
- **업로드일**: 2026-07-16
- **YouTube 링크**: [Watch Video](https://www.youtube.com/watch?v=W9BX0jyzd2k)

## 내용
### 1. 에이전트 하니스(Agentic Harness)의 정의
- 전통적인 소프트웨어 테스트의 **Harness**가 코드 모듈을 끼워서 테스트하기 위한 가상의 입출력 어댑터를 뜻하는 것처럼, 에이전트 하니스는 에이전트를 내부에 밀밀히 장착하여 사전에 시뮬레이션 입력을 흘려보내고 에이전트의 판단 결과(Tool Call, State transition 등)를 검증하는 테스트 베드(Testbed)입니다.

### 2. 왜 일반적인 LLM 평가(Eval)로는 부족한가?
- 에이전트는 상태(State)와 도구(Tools)가 엮여 동적으로 가동되기 때문에, 단순 텍스트 답변 유사도 평가(BLEU, ROUGE 등)만으로는 가치를 검증할 수 없습니다.
- "2단계에서 올바른 SQL 데이터베이스 조회 도구를 호출했는가?", "환율 계산 도구에 USD에서 KRW로 파라미터를 똑바로 넘겼는가?" 등의 행동 유효성을 입증해야 합니다.

### 3. 하니스를 사용한 자율 테스트 워크플로
1. **Mock Environment**: 가짜 API 및 목업(Mock) 데이터베이스 환경을 하니스 하단에 바인딩합니다.
2. **Deterministic Inputs**: 준비된 100가지 시나리오의 질문(Test suite)을 에이전트에 통과시킵니다.
3. **Execution Trace Auditing**: 호출 로그와 상태 변화를 가로채어 기대 결과와 불일치하는 '비정상 경로'를 추적합니다.

## 예시
아래 파이썬 코드는 에이전트에 특정 과업 지시를 주고, 에이전트가 올바른 도구를 올바른 매개변수로 호출하여 적법하게 상태를 변경했는지를 프로그램 레벨에서 자동 어설션(Assertion) 검증해 보는 미니 에이전트 하니스 모형 예제입니다.

```python
# 에이전트를 결합하여 테스트하는 테스트 하니스 예제
class AgenticHarness:
    def __init__(self, agent_to_test):
        self.agent = agent_to_test
        self.call_history = []

    def mock_tool_dispatcher(self, tool_name: str, args: dict) -> str:
        # 호출된 도구 이력을 캡처 및 기록
        self.call_history.append({"tool": tool_name, "args": args})
        # 목업(Mock) 실행 데이터 리턴
        if tool_name == "retrieve_invoice":
            return "invoice_content: id_9981"
        return "default_mock"

    def run_scenario(self, prompt: str):
        # 모의 환경에서 에이전트를 구동
        print(f"[Harness Test] Input Prompt: {prompt}")
        response = self.agent.run(prompt, mock_handler=self.mock_tool_dispatcher)
        return response

# 모의 테스트 구동 및 검증
def test_invoice_pipeline():
    from google_cloud_adk import Agent
    test_agent = Agent(name="InvoiceAgent", instructions="retrieve_invoice 도구를 써서 고지서 내용을 읽으세요.")
    
    harness = AgenticHarness(test_agent)
    harness.run_scenario("9981번 고지서 내용을 조회해 줘.")
    
    # Assertions (하니스를 통한 자동 판단 요건 체크)
    # 1. 에이전트가 retrieve_invoice 도구를 호출했는가?
    assert len(harness.call_history) > 0, "도구 호출이 발생하지 않았습니다!"
    
    first_call = harness.call_history[0]
    assert first_call["tool"] == "retrieve_invoice", f"엉뚱한 도구를 불렀습니다: {first_call['tool']}"
    
    # 2. 인자로 9981이라는 값이 올바르게 파싱되어 들어왔는가?
    assert "9981" in str(first_call["args"]), "고지서 번호 인자 유실 오류!"
    print("[Harness Result] TEST PASSED SUCCESSFULLY.")

test_invoice_pipeline()
```

## 요약
- 실무 배포 전 에이전트의 완성도를 담보하는 열쇠는 **'행동 궤적 추적(Execution Trace Auditing)'**과 자동 검증 파이프라인을 지원하는 에이전트 하니스 프레임워크의 도입에 있습니다.
- 하니스를 설계할 때는 외부 API와 데이터베이스 입력을 격리하기 위해 완벽히 모의 처리된 Mock 레이어를 주입하여 재현 가능한 테스트 스위트를 빌드해야 합니다.
- 지속 통합/지속 배포(CI/CD) 과정에 에이전트 하니스를 통합하면, 시스템 인스트럭션 업데이트나 모델 버전 교체 시 발생할 수 있는 에이전트의 기능 역행(Regression) 현상을 사전에 방지할 수 있습니다.

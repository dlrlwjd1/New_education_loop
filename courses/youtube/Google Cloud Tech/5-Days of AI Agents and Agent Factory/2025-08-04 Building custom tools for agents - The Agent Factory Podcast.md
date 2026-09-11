# 에이전트를 위한 맞춤형 도구 구축 | Agent Factory 팟캐스트 (Building custom tools for agents | The Agent Factory Podcast)

## 개요
- **핵심 개념 요약**: LLM 에이전트의 실행력을 무한히 확장하는 '맞춤형 도구(Custom Tools)' 설계에 관한 Agent Factory 팟캐스트의 핵심 토론을 다룹니다. 도구의 세부 명세(JSON Schema) 작성 팁 및 기업 인프라 보안을 고려한 안전한 실행 격리 방안을 배웁니다.
- **업로드일**: 2025-08-04
- **YouTube 링크**: [Watch Video](https://www.youtube.com/watch?v=NiLb5DK4_rU)

## 내용
### 1. 맞춤형 도구(Custom Tools)의 본질
- 에이전트가 단순 추론에 머무르지 않고 실제 가치를 창출하려면 비즈니스 고유의 데이터베이스 조회, 메일 발송, 파일 포맷 변환 등의 작업을 수행할 커스텀 도구가 필수적입니다.
- 도구는 LLM에게 입력받을 인자(Arguments)와 그에 따른 실행 함수(Python/JS 등)로 구현됩니다.

### 2. LLM이 이해하기 좋은 도구 스키마 정의
- LLM은 함수 코드를 직접 읽지 않고 함수명과 설명(Description), 그리고 인자 이름과 설명으로 구성된 스키마 정보를 기반으로 도구 사용 여부를 결정합니다.
- 지침과 독스트링(Docstring)이 모호하면 에이전트가 엉뚱한 값으로 도구를 호출(Parameter hallucination)하게 됩니다.

### 3. 도구 실행의 보안 및 안정성
- 에이전트가 터미널 명령어 실행이나 로컬 파일 삭제 같은 고위험 도구를 사용할 때는 격리된 가상 환경(Sandbox)에서 가동해야 하며, 필요시 Human-in-the-loop(인간 승인 절차)를 결합해야 합니다.

## 예시
아래 파이썬 코드는 에이전트에 맞춤형 도구를 등록할 때, LLM이 오인 없이 정확한 인자 값을 채워 넣을 수 있도록 독스트링을 정교하게 다듬어 설계한 예제입니다.

```python
from google_cloud_adk import Agent

# 1. 완벽한 스키마 주석(Docstring)이 포함된 커스텀 도구 정의
def calculate_compound_interest(principal: float, rate: float, years: int) -> float:
    """
    원금과 연이율을 입력받아 복리 이자를 계산하여 최종 예상 자산을 반환합니다.
    
    Args:
        principal (float): 투자할 초기 원금 (단위: USD). 예: 1000.0
        rate (float): 연간 이자율을 소수점으로 표현한 값. 예: 0.05 (5% 의미)
        years (int): 투자 기간 (단위: 년). 예: 10
        
    Returns:
        float: 복리가 계산된 최종 누적 평가 자금 (USD).
    """
    total = principal * ((1 + rate) ** years)
    return round(total, 2)

# 2. 에이전트에 도구 탑재
finance_agent = Agent(
    name="FinancialPlanner",
    instructions="금융 관련 문의에 답변하는 전문가입니다. 복리 계산 도구를 활용하여 정밀하게 컨설팅하세요.",
    tools=[calculate_compound_interest]
)

# LLM은 위 calculate_compound_interest의 독스트링을 읽고 
# 'user: 1000달러를 5% 연이율로 10년 묵히면 얼마가 돼?'에 대해 인자를 알아서 쪼개어 호출합니다.
```

## 요약
- 맞춤형 도구 설계의 핵심은 **"정확하고 구체적인 지침 독스트링 작성"**에 있습니다.
- LLM에 도구 호출에 필요한 데이터 타입과 비즈니스 제약을 상세히 인지시키는 스키마 최적화가 에이전트 신뢰도를 결정합니다.
- 권한이 필요한 민감한 작업을 처리하는 도구는 반드시 샌드박싱 및 사후 감사 로그를 남기는 통제 정책 하에 구동되어야 합니다.

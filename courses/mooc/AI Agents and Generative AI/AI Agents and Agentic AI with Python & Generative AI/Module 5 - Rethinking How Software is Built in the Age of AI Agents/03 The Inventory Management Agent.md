# The Inventory Management Agent — 단순한 도구 + 똑똑한 에이전트

## 개요
- [02 Rethinking How We Teach Innovation](02%20Rethinking%20How%20We%20Teach%20Innovation.md)에서 소개된 아들의 재고 관리 시스템을 **실제 코드로 구현**하며, "모든 시나리오를 처리하는 복잡한 코드"가 아니라 **"명확한 목표 + 단순한 도구 + 에이전트의 지능"**으로 소프트웨어를 만드는 새로운 접근법을 보여준다.

## 내용

### 소프트웨어 아키텍처 재고 — 복잡한 로직 대신 단순한 도구
- 전통적 소프트웨어 개발: 모든 가능한 시나리오를 처리하는 복잡한 코드를 작성.
- 새로운 접근법: 시스템을 **단순한 도구들로 쪼개고, 복잡성은 에이전트가 처리**하게 한다.

```python
# Simple tools that focus on data operations
@register_tool(description="Save an item to inventory")
def save_item(action_context: ActionContext,
              item_name: str,
              description: str,
              condition: str,
              estimated_value: float) -> dict:
    """Save a single item to the inventory database."""
    inventory = action_context.get("inventory_db")
    item_id = str(uuid.uuid4())

    item = {
        "id": item_id,
        "name": item_name,
        "description": description,
        "condition": condition,
        "estimated_value": estimated_value,
        "added_date": datetime.now().isoformat()
    }

    inventory[item_id] = item
    return {"item_id": item_id}


@register_tool(description="Get all inventory items")
def get_inventory(action_context: ActionContext) -> List[dict]:
    """Retrieve all items in the inventory."""
    inventory = action_context.get("inventory_db")
    return list(inventory.values())


@register_tool(description="Get specific inventory item")
def get_item(action_context: ActionContext, item_id: str) -> dict:
    """Retrieve a specific inventory item."""
    inventory = action_context.get("inventory_db")
    return inventory.get(item_id)
```
- 이 도구들은 **기본적인 CRUD 작업만 처리**할 뿐, 지능은 에이전트의 목표(goals)와 system 프롬프트에서 나온다.
- `action_context`라는 파라미터가 처음 등장 — [01 Keeping Agent Tools Up to Date](../Module%204%20-%20Agent%20Tool%20Management/01%20Keeping%20Agent%20Tools%20Up%20to%20Date%20with%20Python%20Decorators.md)에서 언급했던 "건너뛰는 특수 파라미터"에 해당하며, 도구가 인벤토리 DB 같은 공유 상태에 접근하는 통로 역할을 한다.

### 목표와 시스템 프롬프트 — 지능이 담기는 곳
```python
# Define the agent's goals
goals = [
    Goal(
        name="inventory_management",
        description="""Maintain an accurate inventory of items including:
        - Detailed descriptions
        - Condition assessment
        - Value estimates
        - Historical tracking"""
    )
]

# Create the agent with clear instructions
agent = Agent(
    goals=goals,
    agent_language=JSONAgentLanguage(),
    action_registry=registry,
    capabilities=[
        SystemPromptCapability("""You are an expert inventory manager.
        When shown items:
        1. Identify the item type and key features
        2. Assess condition from visual cues
        3. Estimate market value based on condition and features
        4. Maintain organized records with consistent descriptions

        Always be thorough in descriptions and conservative in value estimates.""")
    ]
)
```
- 도구는 단순하지만(저장/조회), **아이템 식별·상태 평가·가치 추정 같은 판단은 system 프롬프트를 통해 LLM에게 위임**된다.

### 실제 사용 예시
```python
result = agent.run("""I have a pair of Air Jordan basketball shoes.
                     They're red with the Jumpman logo, showing some wear
                     and slight discoloration.""")

# Agent might respond:
"""I'll help you add those shoes to inventory.

First, let me analyze the item details you've provided:
- Item: Air Jordan Basketball Shoes
- Color: Red
- Notable Features: Jumpman logo
- Condition: Used with visible wear and discoloration

Based on these details and current market values, I'll create an inventory entry.

Action: save_item
{
    "item_name": "Air Jordan Basketball Shoes",
    "description": "Red colorway with iconic Jumpman logo",
    "condition": "Used - visible wear and slight discoloration",
    "estimated_value": 85.00
}

The shoes have been added to inventory. Would you like to add any additional items?"""
```
- 사용자는 **자연어**로 아이템을 설명하기만 하면 되고, 에이전트가 알아서 식별·상태 평가·가치 추정을 수행한 뒤 구조화된 `save_item` 호출로 이어간다.

### 확장 아이디어 — 이미지 처리 (향후 확장)
```python
@register_tool(description="Analyze an image and describe what you see")
def process_inventory_image(action_context: ActionContext,
                            image_path: str) -> str:
    """
    Look at an image and describe the item, including type, condition, and notable features.
    Returns a natural language description.
    """
    with open(image_path, "rb") as image_file:
        image_data = base64.b64encode(image_file.read()).decode("utf-8")

    response = completion(
        model="gpt-4o",
        messages=[
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": """Please describe this item for inventory purposes.
                        Include details about:
                        - What the item is
                        - Its key features
                        - The condition it's in
                        - Any visible wear or damage
                        - Anything notable about it"""
                    },
                    {
                        "type": "image",
                        "image_url": {
                            "url": f"data:image/jpeg;base64,{image_data}"
                        }
                    }
                ]
            }
        ],
        max_tokens=1000
    )

    return response
```
- 이미지를 base64로 인코딩해 멀티모달 메시지(`type: "image"`)로 LLM에 전달 — [01 Build the Impossible](01%20Build%20the%20Impossible%20with%20AI%20Agents.md)에서 말한 "더 풍부한 입력(사진 등)"의 실제 구현.

### 이 접근법이 통하는 이유
- **단순한 도구, 복잡한 이해**: 도구는 기본 연산만 처리하고, LLM이 정교한 분석과 의사결정을 제공.
- **자연스러운 상호작용**: 사용자가 구조화된 폼을 채우는 대신 자연어나 사진으로 아이템을 설명.
- **유연한 지능**: 에이전트가 설명에서 아이템을 식별하고, 제공된 세부사항으로 상태를 평가하고, 시장 지식으로 가치를 추정하고, 일관된 기록 형식을 유지.
- **쉬운 확장**: system 프롬프트 갱신, 단순한 도구 추가, 목표 개선만으로 새로운 능력을 추가 가능.

### 실세계 응용
- 이 패턴은 재고 관리를 넘어선다: 정책 준수 확인([02](02%20Rethinking%20How%20We%20Teach%20Innovation.md)의 출장 경비 예시), 문서 처리 시스템, 고객 서비스 애플리케이션, 데이터 분석 도구 등.
- 핵심은 항상 같다: **명확한 목표와 지시 정의 → 단순하고 초점이 맞춰진 도구 제공 → 복잡성 처리와 적응은 에이전트의 지능에 맡기기.**

## 요약
- 미래의 소프트웨어 개발은 **모든 엣지 케이스를 코드로 작성하는 것이 아니라**, AI 에이전트가 복잡성을 처리할 수 있는 올바른 프레임워크(단순하고 신뢰할 수 있는 도구 + 명확한 목표)를 제공하는 것에 관한 것이다.
- 재고 관리 에이전트는 이 철학을 보여주는 구체적 예시: `save_item`/`get_inventory`/`get_item` 같은 단순 CRUD 도구 + 상세한 system 프롬프트(전문 재고 관리자 페르소나) 조합만으로, 아이템 식별·상태 평가·가치 추정까지 수행하는 시스템이 완성된다.

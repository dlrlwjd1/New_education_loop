# Improving SQL Generation with Reflection

## 개요

이 lab에서는 자연어 질문을 SQL query로 변환하는 agentic workflow에 Reflection을 적용합니다.

핵심 목표:
- LLM으로 자연어 질문을 SQL로 변환
- 생성된 SQL을 실행해 실제 결과 확인
- SQL 텍스트만 보고 Reflection하는 방식의 한계 이해
- 실행 결과를 external feedback으로 제공해 SQL을 더 정확하게 개선
- schema 추출, SQL 생성, 실행, 평가, refinement를 하나의 workflow로 자동화

## 내용

### Lab 목표

이 lab의 목표는 Reflection pattern이 SQL generation workflow의 신뢰도를 어떻게 높이는지 확인하는 것입니다.

Agent는 다음을 수행합니다.

1. 자연어 질문을 SQL query로 변환
2. 생성된 SQL을 실행
3. 중간 결과를 검토
4. 오류나 gap을 찾음
5. SQL을 refinement
6. 최종 답변에 더 적합한 query를 제출

핵심은 agent가 첫 번째 SQL 결과에 바로 멈추지 않고, 실행 결과를 보고 스스로 개선한다는 점입니다.

### 환경 설정

Lab에서는 다음 라이브러리를 사용합니다.

```python
import json
import utils
import pandas as pd
from dotenv import load_dotenv

_ = load_dotenv()
```

역할:
- `json`: LLM이 반환한 structured JSON parsing
- `pandas`: SQL 실행 결과를 DataFrame으로 처리
- `dotenv`: API key 등 환경 변수 로드
- `utils`: database 생성, schema 조회, SQL 실행, HTML 출력 helper

### AISuite Client

이 course lab에서는 `aisuite`를 사용해 여러 provider의 LLM을 통합 인터페이스로 호출합니다.

```python
import aisuite as ai

client = ai.Client()
```

`aisuite`를 사용하면 provider별 설정 차이를 줄이고, `openai:gpt-4.1`, `openai:gpt-4o`, `openai:gpt-3.5-turbo` 같은 모델을 같은 방식으로 호출할 수 있습니다.

### Database 설정

Lab에서는 로컬 SQLite database인 `products.db`를 생성합니다.

```python
utils.create_transactions_db()
utils.print_html(utils.get_schema("products.db"))
```

테이블 이름은 `transactions`입니다.

각 row는 상품의 현재 상태가 아니라 하나의 event를 나타냅니다.

Event 종류:
- `insert`
- `restock`
- `sale`
- `price_update`

Schema 주요 필드:

| Column | 설명 |
|--------|------|
| `id` | event ID |
| `product_id` | 상품 ID |
| `product_name` | 상품 이름 |
| `brand` | 브랜드 |
| `category` | 카테고리 |
| `color` | 색상 |
| `action` | event 타입 |
| `qty_delta` | 재고 변화량 |
| `unit_price` | 해당 시점 가격 |
| `notes` | 메모 |
| `ts` | event timestamp |

중요한 점:
- 판매는 `qty_delta`가 음수
- 입고나 재고 보충은 `qty_delta`가 양수
- 매출, 재고, 최신 가격은 event history를 aggregation해서 계산해야 함

## SQL Generator

### 자연어를 SQL로 변환

`generate_sql` 함수는 사용자 질문과 schema를 받아 SQLite query를 생성합니다.

```python
def generate_sql(question: str, schema: str, model: str) -> str:
    prompt = f"""
    You are a SQL assistant. Given the schema and the user's question, write a SQL query for SQLite.

    Schema:
    {schema}

    User question:
    {question}

    Respond with the SQL only.
    """
    response = client.chat.completions.create(
        model=model,
        messages=[{"role": "user", "content": prompt}],
        temperature=0,
    )
    return response.choices[0].message.content.strip()
```

예시 질문:

```text
Which color of product has the highest total sales?
```

이 질문은 색상별 총매출을 계산하고, 가장 높은 색상을 찾아야 합니다.

### V1 SQL 실행

생성된 SQL을 실행합니다.

```python
df_sql_V1 = utils.execute_sql(sql_V1, db_path="products.db")
utils.print_html(df_sql_V1, title="Output of SQL Query V1")
```

V1 query는 SQL 문법상 유효할 수 있지만, 결과가 질문 의도와 맞지 않을 수 있습니다.

Lab의 주요 실패 사례:
- 판매 event의 `qty_delta`는 음수
- V1 SQL이 `SUM(qty_delta * unit_price)`처럼 계산
- 결과 `total_sales`가 음수로 나옴

문제:
> 총매출은 의미상 양수여야 하는데, 판매 수량이 음수로 저장되어 있어 매출 계산이 음수로 왜곡됨

이것은 syntax error가 아니라 semantic error입니다.

## Reflection으로 SQL 개선

### 첫 번째 시도: SQL 텍스트만 검토

`refine_sql` 함수는 원래 질문, SQL query, schema만 보고 query를 검토합니다.

```python
def refine_sql(
    question: str,
    sql_query: str,
    schema: str,
    model: str,
) -> tuple[str, str]:
    prompt = f"""
You are a SQL reviewer and refiner.

User asked:
{question}

Original SQL:
{sql_query}

Table Schema:
{schema}

Step 1: Briefly evaluate if the SQL OUTPUT fully answers the user's question.
Step 2: If improvement is needed, provide a refined SQL query for SQLite.
If the original SQL is already correct, return it unchanged.

Return STRICT JSON with two fields:
{{
  "feedback": "<1-3 sentences explaining the gap or confirming correctness>",
  "refined_sql": "<final SQL to run>"
}}
"""
    response = client.chat.completions.create(
        model=model,
        messages=[{"role": "user", "content": prompt}],
        temperature=0,
    )

    content = response.choices[0].message.content
    try:
        obj = json.loads(content)
        feedback = str(obj.get("feedback", "")).strip()
        refined_sql = str(obj.get("refined_sql", sql_query)).strip()
        if not refined_sql:
            refined_sql = sql_query
    except Exception:
        feedback = content.strip()
        refined_sql = sql_query

    return feedback, refined_sql
```

이 방식의 한계:
- SQL 구조만 보면 query가 그럴듯해 보일 수 있음
- 실제 결과가 음수라는 문제를 놓칠 수 있음
- schema의 의미, 특히 `qty_delta` 부호 규칙을 완전히 반영하지 못할 수 있음

즉, SQL 텍스트만 보는 reflection은 subtle semantic issue를 잡지 못할 수 있습니다.

### External Feedback이 필요한 이유

V1 query의 실제 실행 결과를 보면 `total_sales`가 음수로 나옵니다.

이 실행 결과는 LLM에게 새로운 정보를 제공합니다.

```text
SQL text alone looked plausible.
Execution output revealed a negative sales value.
```

이처럼 실제 query output은 external feedback입니다.

External feedback으로 잡을 수 있는 문제:
- 음수 매출
- 빠진 filter
- 잘못된 grouping
- aggregation 오류
- 질문 의도와 다른 결과 shape

## External Feedback 기반 Refinement

### 실행 결과를 함께 제공하는 Reflection

`refine_sql_external_feedback` 함수는 SQL 실행 결과 DataFrame을 prompt에 포함합니다.

```python
def refine_sql_external_feedback(
    question: str,
    sql_query: str,
    df_feedback: pd.DataFrame,
    schema: str,
    model: str,
) -> tuple[str, str]:
    prompt = f"""
    You are a SQL reviewer and refiner.

    User asked:
    {question}

    Original SQL:
    {sql_query}

    SQL Output:
    {df_feedback.to_markdown(index=False)}

    Table Schema:
    {schema}

    Step 1: Briefly evaluate if the SQL output answers the user's question.
    Step 2: If the SQL could be improved, provide a refined SQL query.
    If the original SQL is already correct, return it unchanged.

    Return a strict JSON object with two fields:
    - "feedback": brief evaluation and suggestions
    - "refined_sql": the final SQL to run
    """

    response = client.chat.completions.create(
        model=model,
        messages=[{"role": "user", "content": prompt}],
        temperature=1.0,
    )

    content = response.choices[0].message.content
    try:
        obj = json.loads(content)
        feedback = str(obj.get("feedback", "")).strip()
        refined_sql = str(obj.get("refined_sql", sql_query)).strip()
        if not refined_sql:
            refined_sql = sql_query
    except Exception:
        feedback = content.strip()
        refined_sql = sql_query

    return feedback, refined_sql
```

핵심 차이:
- SQL query만 보지 않음
- 실제 output을 함께 봄
- query가 질문에 답하는지 결과 기준으로 판단함

### Negative Total Sales 수정

판매 event는 `qty_delta < 0`이므로 총매출을 계산할 때는 부호를 뒤집거나 절댓값을 사용해야 합니다.

가능한 수정:

```sql
SUM(ABS(qty_delta) * unit_price)
```

또는 sale만 대상으로 한다면:

```sql
SUM(-qty_delta * unit_price)
```

중요한 조건:
- `action = 'sale'`인 row만 매출 계산에 포함
- `qty_delta`의 음수 부호를 양수 판매 수량으로 변환
- 색상별로 grouping
- 총매출 기준 내림차순 정렬
- 가장 높은 색상 하나 선택

## End-to-End Workflow

### 전체 SQL Workflow 자동화

`run_sql_workflow`는 schema 추출부터 V2 실행까지 자동화합니다.

```python
def run_sql_workflow(
    db_path: str,
    question: str,
    model_generation: str = "openai:gpt-4.1",
    model_evaluation: str = "openai:gpt-4.1",
):
    schema = utils.get_schema(db_path)
    utils.print_html(schema, title="Step 1 — Extract Database Schema")

    sql_v1 = generate_sql(question, schema, model_generation)
    utils.print_html(sql_v1, title="Step 2 — Generate SQL (V1)")

    df_v1 = utils.execute_sql(sql_v1, db_path)
    utils.print_html(df_v1, title="Step 3 — Execute V1")

    feedback, sql_v2 = refine_sql_external_feedback(
        question=question,
        sql_query=sql_v1,
        df_feedback=df_v1,
        schema=schema,
        model=model_evaluation,
    )
    utils.print_html(feedback, title="Step 4 — Reflect on V1")
    utils.print_html(sql_v2, title="Step 4 — Refined SQL (V2)")

    df_v2 = utils.execute_sql(sql_v2, db_path)
    utils.print_html(df_v2, title="Step 5 — Execute V2")
```

Workflow 단계:
1. Database schema 추출
2. 자연어 질문으로부터 V1 SQL 생성
3. V1 SQL 실행
4. 실행 결과를 external feedback으로 제공
5. Reflection으로 V2 SQL 생성
6. V2 SQL 실행
7. 최종 결과 확인

### 모델 실험

Lab에서는 여러 모델 조합을 실험할 수 있습니다.

예:
- `openai:gpt-4o`
- `openai:gpt-4.1`
- `openai:gpt-4.1-mini`
- `openai:gpt-3.5-turbo`

```python
run_sql_workflow(
    "products.db",
    "Which color of product has the highest total sales?",
    model_generation="openai:gpt-4.1",
    model_evaluation="openai:gpt-4.1"
)
```

`openai:gpt-4.1`은 self-reflection task에서 좋은 결과를 주는 경우가 많습니다.

LLM은 stochastic하므로 실행마다 결과가 조금씩 달라질 수 있습니다. 따라서 generation model과 evaluation/reflection model의 조합을 바꿔가며 실험하는 것이 좋습니다.

## 예시

### 실패한 V1의 의미

질문:

```text
Which color of product has the highest total sales?
```

V1 결과:

```text
total_sales = -190571.46
```

해석:
- SQL은 실행됨
- 결과도 하나의 색상과 total sales를 반환함
- 하지만 total sales가 음수라 의미적으로 잘못됨

Root cause:
- 판매 수량이 `qty_delta`에 음수로 저장됨
- query가 부호 변환 없이 `qty_delta * unit_price`를 합산함

### External Feedback 후 V2

V2는 판매 수량의 부호 문제를 반영합니다.

예상되는 query 형태:

```sql
SELECT
    color,
    SUM(ABS(qty_delta) * unit_price) AS total_sales
FROM transactions
WHERE action = 'sale'
GROUP BY color
ORDER BY total_sales DESC
LIMIT 1;
```

이제 출력은 양수 매출을 반환하며, 질문에 더 정확히 답합니다.

## 요약

- LLM은 자연어 질문을 SQL로 변환할 수 있지만 첫 번째 query가 항상 의미적으로 맞지는 않음
- SQL 문법이 맞아도 business logic이나 schema semantics를 잘못 해석할 수 있음
- `qty_delta`처럼 도메인 의미가 있는 column은 실행 결과를 봐야 오류가 드러날 수 있음
- SQL 텍스트만 검토하는 Reflection은 subtle issue를 놓칠 수 있음
- Query 실행 결과를 external feedback으로 제공하면 더 정확한 refinement가 가능함
- End-to-end workflow는 schema 추출, V1 생성, V1 실행, feedback 기반 reflection, V2 실행으로 구성됨
- Reflection + execution feedback은 agentic SQL workflow를 더 신뢰 가능하게 만듦
- 모델 조합을 바꿔가며 generation과 evaluation 성능을 비교하는 것이 좋음

## 다음 주제

Module 03에서는 Tool Use를 통해 LLM이 다양한 함수와 도구를 체계적으로 호출하는 방법을 다룹니다.

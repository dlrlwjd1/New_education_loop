# 컨텍스트 엔지니어링 완벽 가이드: 모든 AI 개발자가 알아야 할 핵심 지식 (Context engineering explained: What every AI developer should know)

## 개요
- **핵심 개념 요약**: LLM의 응답 품질과 작업 성공률을 극대화하기 위해 에이전트에 들어가는 다양한 배경 데이터와 도구 명세를 효율적으로 가공 및 관리하는 **컨텍스트 엔지니어링(Context Engineering)**의 이론과 설계 방법론을 종합 학습합니다.
- **업로드일**: 2026-07-15
- **YouTube 링크**: [Watch Video](https://www.youtube.com/watch?v=BBPQYtR7oUk)

## 내용
### 1. 프롬프트 엔지니어링과 컨텍스트 엔지니어링의 차이
- **프롬프트 엔지니어링**: LLM에 전달하는 자연어 명령조(Instructions)를 더 잘 설계하는 휴리스틱한 작업입니다.
- **컨텍스트 엔지니어링**: 명령조뿐만 아니라 에이전트의 현재 상태(State), 대화 세션 이력(Memory), 외부 정보 소스(RAG/Vector DB), 사용 가능한 도구들의 JSON 스키마(Tools Definition) 등 LLM에 입력되는 전체 Context Window를 정형화하고 최적화하여 합성(Synthesize)하는 고도화된 엔지니어링 방법론입니다.

### 2. 컨텍스트 구성 시의 주의점: Lost in the Middle 현상
- LLM은 주어진 컨텍스트의 앞부분(시작)과 뒷부분(끝) 정보에 높은 가중치를 두어 집중하며, 중간에 있는 정보는 망각하거나 중요치 않게 여기는 경향이 있습니다.
- 따라서 가장 중요도가 높은 시스템 지침이나 검색 문서 조각은 컨텍스트의 핵심 영역(주로 맨 뒤)에 배치해야 합니다.

### 3. 컨텍스트 엔지니어링 실무 기법
- **정밀한 구조화 (XML/JSON)**: 데이터의 경계를 명확하게 지어주기 위해 XML 태그(`<rules>`, `<user_info>`, `<context>`)나 JSON 데이터 구조를 사용하여 콘텍스트를 구획화합니다.
- **동적 토큰 가치 평가 (Dynamic Token Pruning)**: 사용 가능한 토큰 한계를 넘지 않도록 관련성이 낮은 대화 내역이나 RAG 검색 결과를 가치 평가 점수에 따라 우선순위가 떨어지는 것부터 실시간 제거합니다.

## 예시
아래 파이썬 코드는 에이전트에 입력될 컨텍스트를 구조화된 XML 태그로 합성하고, 중요도에 따라 최적의 배치를 처리하는 컨텍스트 빌더(Context Builder)의 예시 구현입니다.

```python
class ContextBuilder:
    def __init__(self):
        self.instructions = "당신은 구글 클라우드 기술 전문 에이전트입니다."
        self.retrieved_docs = []
        self.chat_history = []

    def add_document(self, text: str, relevance_score: float):
        self.retrieved_docs.append({"text": text, "score": relevance_score})

    def add_history(self, role: str, content: str):
        self.chat_history.append(f"{role.upper()}: {content}")

    def build_context(self) -> str:
        # 1. 획득된 텍스트 중 유사도(Score)가 높은 문서들만 정렬하여 합성
        sorted_docs = sorted(self.retrieved_docs, key=lambda x: x["score"], reverse=True)
        # Lost in the middle 현상을 고려해 가장 유용한 문서를 컨텍스트의 양 끝단에 가깝게 배치 가능
        docs_str = "\n".join([f"<doc score='{d['score']}'>{d['text']}</doc>" for d in sorted_docs])

        # 2. 구조적인 XML 포맷으로 통합 콘텍스트 합성
        context = f"""<system_instructions>
{self.instructions}
</system_instructions>

<reference_knowledge>
{docs_str}
</reference_knowledge>

<conversation_history>
{"\n".join(self.chat_history)}
</conversation_history>

<instruction_reminder>
위 지침과 참고 지식을 엄격히 준수하여 사용자의 마지막 요청에 친절히 대답하세요.
</instruction_reminder>"""
        return context

# 사용 예시
builder = ContextBuilder()
builder.add_document("Cloud Run은 서버리스 컨테이너 구동 인프라입니다.", 0.95)
builder.add_document("Artifact Registry는 도커 컨테이너 레포지토리입니다.", 0.82)
builder.add_history("user", "Cloud Run이 뭐야?")

final_prompt = builder.build_context()
print(final_prompt)
```

## 요약
- 컨텍스트 엔지니어링은 LLM의 입력을 정적 텍스트가 아닌, 런타임 중에 동적으로 조립 및 필터링해야 하는 **'소프트웨어 아키텍처적 데이터'**로 바라봅니다.
- XML/JSON 등의 세밀한 가두리 방식을 통해 LLM의 탈선(Hallucination)을 막고 의사결정률을 대폭 제고합니다.
- 토큰이 커질수록 주의력 저하(Lost in the middle) 현상이 빈번히 발생하므로, 문맥 배치와 정밀한 프루닝(Pruning) 기법을 함께 조합해야 합니다.

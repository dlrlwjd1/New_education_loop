# Never Trust An LLM

## 개요
- 영상: [Never Trust An LLM](https://www.youtube.com/watch?v=9VNG0h4pLh0)
- 채널: Matt Pocock
- 업로드일: 2026-03-27
- 길이: 14:00
- 핵심 주제: LLM은 자주 hallucination을 만들기 때문에 절대 암묵적으로 믿으면 안 된다. 특히 training data에 의존하는 extrinsic knowledge보다, 사용자가 제공하거나 tool로 가져온 intrinsic context에 기반하게 해야 한다.

## 내용

### 1. LLM은 그럴듯하게 거짓말한다
Matt는 LLM을 좋아하고 적극적으로 쓰지만, 동시에 절대 그대로 믿지 않는다고 말한다. 문제는 LLM의 답변이 매우 자연스럽고 자신감 있어 보이기 때문에 비전문가가 쉽게 믿는다는 점이다.

### 2. Intrinsic hallucination과 extrinsic hallucination
영상은 hallucination을 두 종류로 나눈다.

Intrinsic hallucination은 사용자가 현재 conversation에 제공한 정보를 잘못 처리하는 것이다. 예를 들어 사용자가 "내 고양이 이름은 Bandit"이라고 말했는데, 모델이 나중에 다른 이름을 말하면 intrinsic hallucination이다.

Extrinsic hallucination은 모델이 training data나 parametric memory에 의존하다가 틀리는 것이다. 사용자가 정보를 주지 않았는데 package, 법, 기관, 사실 등을 지어내는 경우가 여기에 해당한다.

### 3. Fabricated entity는 개발자에게 특히 위험하다
LLM은 존재하지 않는 package를 추천할 수 있다. 이는 단순 실수가 아니라 supply chain attack으로 이어질 수 있다.

공격자는 LLM이 자주 hallucinate하는 package 이름을 실제 package registry에 등록해 악성 코드를 퍼뜨릴 수 있다. 개발자가 "LLM이 추천했으니 있겠지"라고 설치하면 위험해진다.

### 4. Contextual inconsistency도 발생한다
정보를 context에 넣어도 LLM이 이를 무시하거나 모순된 답을 할 수 있다. 영상에서는 Air Canada chatbot의 bereavement policy 사건을 예로 든다.

즉, "context를 줬으니 무조건 안전하다"도 아니다. 다만 extrinsic knowledge에만 의존하는 것보다는 훨씬 낫다.

### 5. LLM의 지식은 압축된 저해상도 기억에 가깝다
Matt는 training을 거대한 데이터셋을 작은 모델로 압축하는 과정에 비유한다. 압축하면 세부 정보가 손실된다.

LLM은 세상의 정보를 완전한 DB처럼 저장한 것이 아니라, 저해상도 압축 이미지처럼 갖고 있다. 그래서 어떤 큰 윤곽은 맞출 수 있지만, 구체 사실에서는 자신 있게 틀릴 수 있다.

### 6. Benchmark는 guessing을 보상한다
LLM이 모를 때 "모르겠다"고 답하는 것보다 추측하는 것이 benchmark에서 유리할 때가 많다. OpenAI의 "Why Language Models Hallucinate" 논문 취지를 빌려, Matt는 모델이 guessing over uncertainty를 보상받는다고 설명한다.

똑똑함과 겸손함 사이의 균형이 어렵고, 현재 모델은 많은 상황에서 너무 자신감 있게 답한다.

### 7. 해결책은 "Use your search tool"
Matt가 제안하는 실용적 프롬프트는 "Use your search tool"이다.

검색 도구를 쓰게 하면 최신 문서나 웹페이지를 context window로 가져오고, 모델은 그 intrinsic information을 바탕으로 답할 수 있다. 이는 training data에만 의존하는 것보다 안전하다.

### 8. 중요한 것은 직접 원문을 읽어야 한다
검색을 시켜도 contextual inconsistency 가능성은 남는다. 법률, 의료, 생명과 관련된 결정처럼 중요한 영역에서는 모델 답변만 믿지 말고 사용자가 직접 source document를 읽어야 한다.

Coding에서도 마찬가지다. LLM이 code를 읽고도 잘못 해석할 수 있으므로, 중요한 판단은 개발자가 확인해야 한다.

## 예시

### 위험한 질문
```text
Is there a package that does X?
```

더 나은 질문:
```text
Use your search tool. Find primary sources for packages that do X.
Show the package repository and installation source.
```

### 신뢰도 기준
| 정보 유형 | 상대적 신뢰도 | 주의점 |
| --- | --- | --- |
| Training data 기반 답변 | 낮음 | 지어낼 수 있음 |
| Search/tool로 가져온 context | 중간 | 그래도 misread 가능 |
| 사용자가 직접 원문 확인 | 높음 | 중요한 결정에는 필요 |

## 요약
- LLM은 factual error, fabricated entity, contextual inconsistency를 만들 수 있다.
- Extrinsic knowledge에 의존하는 답변은 특히 위험하다.
- Package hallucination은 supply chain attack으로 이어질 수 있다.
- LLM은 압축된 저해상도 지식과 benchmark 인센티브 때문에 모를 때도 추측한다.
- "Use your search tool"로 source를 context에 넣게 해야 한다.
- 고위험 판단은 반드시 사람이 원문을 직접 확인해야 한다.

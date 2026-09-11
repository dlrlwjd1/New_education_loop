# The Golden Age of AI Engineering

## 개요
- 원본: https://www.youtube.com/watch?v=pMggiOb18tc
- 채널: AI Engineer
- 발표자: Alexander Embiricos, Romain Huet, Peter Steinberger, OpenAI
- 핵심 주제: AI engineering은 사라지는 직업이 아니라, 문제 정의와 agent loop 설계 중심으로 확장되는 역할이라는 주장

## 내용
### 엔지니어링의 중심이 코드 작성에서 문제 해결로 이동
발표자는 "AI가 코드를 대신 쓰면 엔지니어가 사라진다"는 관점을 반박한다. 엔지니어링은 원래 코드 자체가 아니라 과학, 디자인, 판단, 상상력을 결합해 사람들이 쓸 수 있는 것을 만드는 일이라는 것이다.

모델이 더 빠르게 출시되고, agent가 빌드와 테스트까지 수행하면서 개발의 체감은 크게 바뀌었다. 단순 완성, 인라인 예측, 명령 기반 수정, 자체 테스트, 장기 목표 수행으로 흐름이 확장되었다.

### Codex를 하나의 폐쇄 제품이 아닌 계층형 생태계로 설명
OpenAI는 Codex를 모델, Responses API, 오픈소스 harness, Agent MD, app server, plugin, app layer 같은 여러 계층으로 설명한다. 중요한 점은 OpenAI 내부 제품과 개발자에게 제공하는 primitive를 분리하지 않고, 같은 기반 위에서 만든다는 주장이다.

예를 들어 장기 작업을 위한 context compaction처럼 Codex 내부에 필요한 기능을 API primitive로 내려 개발자도 사용할 수 있게 한다는 방향을 제시한다.

### agent의 역할은 코딩 전후까지 확장된다
agent는 코드 작성뿐 아니라, 무엇을 만들지 결정하기 전의 조사와 프로토타이핑, 그리고 만든 뒤의 리뷰와 배포까지 다룰 수 있다. 그래서 중요한 것은 agent에게 작업 자체뿐 아니라 작업의 이유와 완료 후 검증 루프까지 연결하는 것이다.

### Peter Steinberger의 agent 운영 방식 변화
Peter는 초기에는 여러 터미널에서 agent를 직접 관리했지만, 지금은 장기 실행 manager agent가 worker agent를 만들고 조율하는 방식으로 전환했다고 설명한다. 핵심 변화는 persistent context, delegation, triggers다.

이 흐름에서 인간은 inner execution loop를 계속 지켜보는 사람이 아니라, 방향을 정하고 결과물을 검토하는 outer loop의 의사결정자가 된다.

## 예시
### manager-worker agent loop
- issue나 이벤트가 발생하면 manager agent가 깨어난다.
- 프로젝트 목표, 노트, 비전과 비교해 처리 가치가 있는지 판단한다.
- worker agent를 만들고, 구현과 테스트를 맡긴다.
- 다른 agent가 리뷰를 수행한다.
- 인간에게는 PR, 원본 issue, diff, 영상, 실행 빌드 같은 검토 가능한 산출물이 전달된다.

### 엔지니어의 새 병목
- 이전 병목: token
- 다음 병목: compute
- 현재 병목: attention

agent가 많아질수록 중요한 능력은 "직접 지켜보기"가 아니라 "어디에 주의를 쓸지 선택하기"가 된다.

## 요약
- AI engineering의 가치는 코드 작성량이 아니라 문제를 정의하고 agent loop를 설계하는 능력에서 나온다.
- Codex는 모델, API, harness, app server, plugin으로 이어지는 확장 가능한 stack으로 제시된다.
- 장기 실행 manager agent와 worker agent 구조가 새로운 개발 운영 방식으로 부상한다.
- 미래의 개발 환경은 많은 터미널을 감시하는 방식이 아니라, 더 좋은 loop를 설계하는 방식으로 이동한다.

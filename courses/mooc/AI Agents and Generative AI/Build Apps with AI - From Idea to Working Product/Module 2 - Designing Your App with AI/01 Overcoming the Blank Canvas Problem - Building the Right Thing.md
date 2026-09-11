# Overcoming the Blank Canvas Problem: Building the Right Thing

## 개요
- Module 2의 첫 강의. "AI로 뭐든 만들 수 있다"는 걸 깨달은 뒤 부딪히는 진짜 어려움 — **"거대한 백지(blank canvas), 무엇부터 만들어야 할지 모르겠다"**는 문제를 해결하는 기법을 다룬다.

## 내용
### 왜 "무엇을 만들지 정하는 것"이 어려운가
- 무언가를 만드는 데는 항상 **비용(투자)**이 따른다 — 그림을 그리기 시작하면 시간을 투자하게 되고, 완성하면 걸어둘 곳을 찾아야 하고, 마음에 안 들면 처분해야 하는 것처럼.
- AI로 무언가를 빠르고 재미있게 만들 수 있다 해도, **"만든다는 것 자체가 투자"**라는 점은 변하지 않는다. 그래서 **"제대로 된 것을 요청하는 것"**이 중요하다.

### 무엇을 만들지 찾는 기법 — "숨겨진 워크플로 패턴(Hidden Workflow Pattern)"
- 아이디어의 출발점: **내 파일들 속에 이미 남아있는 "내가 실제로 해온 작업의 역사"**를 활용하는 것.
- **플라톤의 동굴(Plato's Cave) 비유**: 동굴에 갇힌 죄수들은 등 뒤의 불빛 앞을 지나가는 실체를 직접 보지 못하고, 벽에 비친 **그림자(shadow)**만 보고 무슨 일이 일어나는지 추론한다.
- 마찬가지로, **내 파일들은 AI에게 "벽에 비친 그림자"와 같다** — AI는 내가 실제로 한 작업을 직접 본 게 아니라, 파일이라는 그림자를 통해 **다른 각도에서 내 작업 방식을 추론**한다. 이 "다른 관점"이 오히려 흥미로운 발견으로 이어질 수 있다.

### 실전 프롬프트 — Hidden Workflow Pattern
```
Read through everything in this folder. Reconstruct the workflow I must be running to produce and use these files.
Then propose three tools:
1. One that automates the workflow.
2. One that re-imagines it.
3. One that makes the current process feel embarrassing.
```
- 사용법: 매일 쓰는 다양한 작업물(work products)이 담긴 폴더를 하나 만들어서 AI에게 보여준다.
- 세 번째 요청("현재 방식이 부끄럽게 느껴지도록 만드는 도구")이 특히 흥미로운 이유: 정말 좋은 새 도구를 접하면 "예전엔 어떻게 이렇게 했지?"라는 부끄러움이 드는 경험을 유도하기 위함.

### 이 기법의 목적 — "대신 생각하게 하는 것이 아니라, 생각에 정보를 더하는 것"
- 이 방법의 목표는 **AI가 아이디어를 제시해 내 사고를 풍부하게 하는 것(inform your thinking)**이지, **AI가 내 생각을 대신하게 하는 것(replace your thinking)**이 아니다.
- 기계가 생각할 수 있다고 해서 우리가 생각하는 일을 그만둬야 한다는 뜻은 아니다 — 다만 브레인스토밍의 훌륭한 보조 도구로 활용하는 것.

### 실전 워크플로
1. 매일 사용/생성하는 다양한 작업물을 폴더에 모은다.
2. 위 프롬프트로 AI에게 보여주고 워크플로 재구성 + 3가지 도구 제안을 받는다.
3. 제안받은 아이디어들을 **섞고, 조합하고, 단순화**한다.
4. 최종적으로 **요구사항 문서(requirements document)**를 만들고 실제로 빌드를 시작한다.

## 예시
```
프롬프트: "Read through everything in this folder. Reconstruct the workflow I must be running to produce
and use these files. Then propose three tools: one that automates the workflow, one that re-imagines it,
and one that makes the current process feel embarrassing."
```

## 요약
- "AI로 무엇이든 만들 수 있다"는 자유는 동시에 "무엇을 만들지 모르겠다"는 백지 문제를 낳는다 — 모든 빌드에는 투자(비용)가 따르기 때문에 신중해야 한다.
- **숨겨진 워크플로 패턴**: 내 작업물이 담긴 폴더를 AI에게 보여주고 "플라톤 동굴의 그림자"처럼 내 워크플로를 추론해 자동화/재구상/기존 방식을 부끄럽게 만들 도구를 제안받는 기법.
- 목표는 AI가 대신 결정하는 것이 아니라, **아이디어를 제공해 사람의 사고를 풍부하게 하는 것**이며, 최종적으로 요구사항 문서를 만들어 빌드로 이어간다.

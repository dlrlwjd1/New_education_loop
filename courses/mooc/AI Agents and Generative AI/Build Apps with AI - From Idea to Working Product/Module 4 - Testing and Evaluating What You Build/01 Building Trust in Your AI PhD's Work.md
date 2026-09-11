# Building Trust in Your AI PhD's Work

## 개요
- Module 4의 첫 강의. "AI가 만든 게 정말 맞는지 어떻게 알지?"라는 질문에 답하는, **AI 스스로 자기 작업을 점검하게 만드는 3가지 핵심 대화 기법**을 다룬다.

## 내용
### 신뢰의 문제 — "사람 개발자를 고용해도 마찬가지다"
- 사람 개발자를 고용해도 그가 정확히 만들었는지 바로 알 수 없다 — **신뢰는 구축해야 하는 것**이며, AI도 다르지 않다.
- 가장 기본적인 신뢰 구축 방법: 만들어진 것을 직접 써보고 원하는 대로 동작하는지 확인하는 것.
- 시스템이 복잡할수록 검증에 더 많은 노력이 필요하다.

### 왜 신뢰가 중요한가 — "신뢰가 없으면 마이크로매니징으로 후퇴한다"
- 신뢰가 없으면 매 단계를 어깨너머로 지켜보게 되고, 이는 **시간 낭비**로 이어진다. (Module 1에서 배운 "큰 프로젝트로 맡기기" 원칙과 직결)
- 이 강좌의 목표는 **"How(어떻게 만들지)"에 시간을 덜 쓰고, "무엇을 원하는지, 이게 원하는 품질인지"에 더 많은 시간을 쓰는 것.**

### 핵심 기법 1 — "네 작업을 스스로 검증해라(Check its own work)"
```
Before I open this, I want you to test it thoroughly. Think deeply about what is most important to test
based on what I've asked you to build and why. Write a test suite for all the core components,
run the tests and fix any failures. Check your own work before handing it to me.
```
- 효과: AI가 이미 테스트를 작성했더라도 **더 많은 테스트를 추가로 작성**하게 되고, 테스트가 없었다면 처음부터 작성하게 만든다.
- **테스트 스위트(test suite)**는 테스트를 자동화하는 수단이며, 이후 AI가 수정 작업을 할 때도 **기존 기능을 깨뜨리지 않도록** 돕는 안전망 역할을 한다.
- 활용 팁: 소프트웨어를 만들 때뿐 아니라, **"폴더를 정리해줘" 같은 비-코딩 작업 후에도 "새 대화를 시작해서" "이 폴더가 제대로 정리됐는지 확인해줘"**라고 요청할 수 있다 — **새 대화는 마치 "다른 사람이 검토하는 것"**과 같은 효과를 낸다.

### 핵심 기법 2 — "지름길 없나 확인해라(No shortcuts)"
```
Before I try this out, go through the code and check for any shortcuts, mock data, placeholders or
unfinished connections that need to be corrected before I use it for real. Tell me what you find and fix it.
```
- 왜 필요한가: AI가 작업을 "빨리 마무리"하려고 **지름길(shortcut)**을 쓰거나, 앞서 배운 "mock(가짜 데이터)"으로 대충 만들어놓고 그럴듯하게 보이게 할 수 있다.
- 겉보기엔 제대로 동작하는 것처럼 보이지만, 속을 들여다보면 **진짜 코드가 아니라 가짜(faked)**일 수 있다 — 이를 찾아내 고치도록 요청하는 것.

### 핵심 기법 3 — "요청한 요구사항과 테스트를 서로 연결해라(Closing the loop)"
```
Look back at everything I asked you to build, create a list of the top five requirements that matter most
to the user and how a user would experience each one. Check what tests we have for each one.
If there are gaps, fill them in, present the results in a table.
```
- 목적: AI가 **"내가 요청한 것"과 "실제로 테스트된 것"을 서로 연결해서 보여주게** 만드는 것.
- 결과가 표(table) 형태로 제시되면, 요청한 것 중 **테스트가 빠진(gap) 항목**을 바로 발견할 수 있다.
- 이를 통해 "이 부분은 테스트가 거의 없는 것 같은데, 더 테스트해줘" 같은 후속 요청도 가능해짐.
- 핵심 가치: 단순히 신뢰를 주는 것을 넘어, **AI가 요구사항 자체를 제대로 파악하고 있는지**도 확인할 수 있다.

### 빌드가 끝난 후 항상 물어야 할 3가지 질문
1. **"테스트했어? 네 작업을 스스로 검증하고, 견고한 테스트를 작성해서 실행하고 오류를 고쳐줘."**
2. **"지름길을 썼어? 가짜(mock)이거나 진짜가 아닌 부분이 있으면 찾아서 고쳐줘."**
3. **"이게 내가 요청한 요구사항과 어떻게 매핑돼? 각 항목에 대해 테스트를 작성했는지 보여주고, 실제로 검증했다는 걸 증명해줘."**

### 이 기법들의 한계와 목적
- 이 세 가지 기법이 **버그가 전혀 없음을 보장하지는 않는다.**
- 하지만 AI가 **스스로 자기 작업을 성찰하고, 실제로 시도해보고, 스스로 버그를 발견**하게 만드는 데 크게 기여한다.
- 궁극적 목표: **사용자가 직접 버튼을 눌러보며 문제를 찾는 데 시간을 쓰는 대신, AI가 스스로 자신의 실수를 찾아내는 데 더 많은 시간을 쓰게 만드는 것.**

## 예시
```
1) 자체 검증: "Before I open this, test it thoroughly... Write a test suite, run the tests and fix any failures."
2) 지름길 점검: "Go through the code and check for any shortcuts, mock data, placeholders, or unfinished connections."
3) 요구사항-테스트 매핑: "Create a list of the top five requirements... Check what tests we have for each one.
   If there are gaps, fill them in, present the results in a table."
```

## 요약
- AI가 만든 결과물을 신뢰하는 과정은 사람 개발자를 신뢰하는 과정과 다르지 않으며, **직접 검증하는 습관**이 필요하다.
- 빌드가 끝날 때마다 **(1) 자체 테스트 검증, (2) 지름길/가짜 데이터 점검, (3) 요구사항-테스트 매핑 확인**이라는 세 가지 후속 질문을 던지는 것이 AI 작업 신뢰도를 크게 높인다.
- 목표는 버그를 100% 없애는 것이 아니라, **AI가 스스로 자기 실수를 찾아내게 하여 사용자의 시간을 절약**하는 것이다.

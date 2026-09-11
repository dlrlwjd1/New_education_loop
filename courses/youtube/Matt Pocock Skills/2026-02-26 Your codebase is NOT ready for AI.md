# Your codebase is NOT ready for AI

## 개요
- 영상: [Your codebase is NOT ready for AI (here's how to fix it)](https://www.youtube.com/watch?v=uC44zFz7JSM)
- 채널: Matt Pocock
- 업로드일: 2026-02-26
- 길이: 8:50
- 핵심 주제: AI output의 품질은 prompt보다 codebase 구조에 더 크게 좌우된다. AI는 매번 새로 들어오는 new starter처럼 codebase를 탐색하므로, file system과 module boundary가 mental map을 반영해야 한다.

## 내용

### 1. Codebase가 prompt보다 중요하다
Matt는 AI output에 가장 큰 영향을 주는 것은 prompt나 `agents.md`가 아니라 codebase 자체라고 말한다.

Codebase가 나쁘면 AI는 다음 문제를 겪는다.

- feedback을 빠르게 받지 못한다.
- 어떤 파일을 봐야 하는지 찾기 어렵다.
- test 방법을 알기 어렵다.
- 사람이 AI가 만든 변경을 계속 patch하느라 cognitive burnout을 겪는다.

### 2. AI는 당신의 mental map을 모른다
개발자는 codebase 안의 feature group과 module 관계를 머릿속에 갖고 있다. 하지만 AI는 새 session마다 기억 없이 들어온다.

파일 시스템이 이 mental map을 반영하지 않으면 AI는 흩어진 파일과 import graph만 보고 구조를 추측해야 한다.

### 3. Deep module이 AI 친화적이다
해결책은 deep module이다. Deep module은 많은 구현을 단순한 interface 뒤에 숨긴다.

AI는 먼저 interface를 보고 module의 역할을 이해할 수 있다. 필요한 경우에만 implementation 안으로 들어간다. 이것이 progressive disclosure of complexity다.

### 4. Gray-box module로 위임 범위를 만든다
Matt는 AI가 module 내부 구현을 맡을 수 있지만, 사람은 interface와 boundary에 taste를 적용해야 한다고 본다.

테스트가 좋다면 사람은 module 내부를 매번 자세히 볼 필요가 없다. Interface와 behavior가 유지되는지만 확인하면 된다. 이를 gray-box module처럼 설명한다.

### 5. 좋은 구조는 cognitive burnout을 줄인다
많은 작은 shallow module이 얽힌 codebase는 사람도 AI도 관리하기 어렵다.

몇 개의 큰 deep module과 명확한 interface가 있으면, 개발자는 "이 기능은 authentication service", "이 기능은 video editor service"처럼 큰 덩어리만 머릿속에 두면 된다.

### 6. 테스트와 feedback loop는 필수다
AI는 new starter와 비슷하다. 좋은 new starter가 안전하게 기여하려면 테스트와 feedback loop가 필요하다.

PRD, issue, implementation planning 단계부터 어떤 module과 interface를 바꾸는지, 어떤 테스트로 확인할지 생각해야 한다.

## 예시

### AI 친화적 codebase 원칙
```text
- file system이 domain/module map을 반영한다.
- public interface가 명확하다.
- implementation detail은 module 내부에 숨긴다.
- module boundary에서 test한다.
- agent가 source of truth를 쉽게 찾을 수 있다.
```

### 나쁜 구조
```text
many tiny shallow modules
  -> tangled imports
  -> unclear ownership
  -> hard exploration
  -> weak tests
  -> poor AI output
```

## 요약
- AI coding 품질은 prompt보다 codebase 구조에 크게 좌우된다.
- AI는 매번 기억 없는 new starter처럼 codebase에 들어온다.
- File system과 module boundary가 개발자의 mental map을 반영해야 한다.
- Deep module은 simple interface 뒤에 complexity를 숨겨 AI가 탐색하기 쉽게 한다.
- 사람은 interface와 boundary에 taste를 적용하고, AI는 module 내부 구현을 맡길 수 있다.
- 좋은 테스트와 feedback loop가 없으면 AI 변경은 위험해진다.

# Testing Your Build with Real Data

## 개요
- AI(혹은 사람)가 스스로 작성한 테스트의 가장 큰 약점 — **"현실 세계의 지저분한 데이터"를 반영하지 못한다**는 문제를 해결하기 위해, **실제 데이터로 테스트하는 방법**을 다루는 강의.

## 내용
### 왜 자체 작성 테스트만으로는 부족한가
- 소프트웨어 테스트의 가장 어려운 부분은 **실제 세계의 데이터와 경험**을 반영하는 것 — 지저분한 실제 청구서, 항목이 불분명한 신용카드 명세서, 중요한 정보가 빠진 사진 등 온갖 예외(edge case)가 실제 업무를 어렵게 만든다.
- AI든 사람이든 스스로 작성한 테스트는 **이런 현실의 지저분함을 이해하지 못하는 경우가 많아서** 충분히 좋지 못할 수 있다.

### 핵심 기법 1 — "실제 입력 파일 + 기대 결과 메모"를 모은 폴더 만들기
- 방법: 실제로 다뤄야 하는 **지저분하고 힘든 사례들**을 폴더에 모은다 (쉬운 사례 몇 개도 좋지만, 특히 **처리하기 골치 아픈 사례들**을 많이 포함).
- 각 파일에 대해 **"이 파일들은 이런 문제가 있지만 그래도 처리할 수 있어야 한다"**, **"내가 기대하는 결과는 이거다"**라는 메모(notes)를 함께 작성 — 통계적 검증, 기본적인 계산 검산 등도 포함 가능.
- 정리는 엄격할 필요 없음 — 하위 폴더로 나눠도 되고 자유롭게 구성 가능.

### 프롬프트 — 실제 데이터로 테스트 요청하기
```
In this folder, there are real input files and a notes file where I've written down in plain language
how I would sanity check the output from my experience. Please read everything. Then build and run tests
that pass every check I described. Use the real files as test inputs. Do not invent synthetic data.
```
- 실전 예: "이 폴더에는 지난 몇 년간 받은 40개의 실제 벤더 청구서와, 내가 매달 이 청구서들을 처리하며 얻은 경험을 바탕으로 추출이 제대로 됐는지 검증하는 방법을 적어둔 'expectations' 파일이 있어. 모두 읽고, 내가 설명한 모든 체크를 통과하는 테스트를 만들고 실행해줘."
- 결과: AI가 실제 데이터를 읽고 테스트를 만들어 실행하며, 처리해야 할 엣지 케이스들을 스스로 식별하고 고침.

### 핵심 기법 2 — AI에게 "도전 과제(challenge)"를 직접 상상하게 만들기
- 한 단계 더 나아가, **실제 입력들을 보고 AI 스스로 "흥미로운 테스트 시나리오"를 상상하게** 만들 수 있다.
- 프롬프트:
  ```
  Please go through every file in this folder of real inputs. For each one, analyze it from multiple angles
  and write a notes file describing what makes this case interesting, what the correct output should be,
  and what to check. Save each input and its notes as a challenge subfolder.
  ```
- 결과 예: "캐나다 달러(CAD)로 표기된 청구서 2건 발견 — 통화 기호가 CAD이고 금액이 USD 환산액과 다름. 체크 노트: 통화가 제대로 감지되고, 금액이 조용히 USD로 잘못 처리되지 않는지 검증할 것."
- 이렇게 AI가 만든 **"챌린지 라이브러리(challenge library)"**를 다시 활용해 실제 테스트를 빌드·실행하게 할 수 있다:
  ```
  In the challenges folder, there are subfolders, each containing a real input and a notes file describing
  what to check and what correct looks like for that test case. Please create each folder as a test case,
  build and run a test for each one based on its notes, and then report what passes, what fails, and why.
  ```

### 중요한 주의사항 — "AI가 만든 챌린지/노트도 사람이 검토해야 한다"
- AI가 노트를 작성했더라도, **검증(validation)과 체크 자체가 가장 중요한 부분이므로 반드시 사람이 최소한 샘플 점검(spot check)**을 해야 한다.
- 만들어진 챌린지들이 말이 되는지, 너무 복잡하게 만들지는 않았는지 검토하고 피드백을 줘야 한다.

### 이 접근법의 목적 — "시간을 아이디어에, 검증은 AI에게"
- 궁극적 목표: 사용자가 매번 어깨너머로 테스트 과정을 감독하는 대신, **원하는 것과 집중할 부분에 대해 대화하고, 실제 데이터를 기반으로 한 신뢰할 수 있는 프로세스를 구축**하는 것.
- 신뢰를 쌓는 가장 좋은 방법 중 하나는, **AI가 실제로 나의 진짜 데이터를 가지고 내가 원하는 것을 달성했다는 것을 확인하는 것**이다.

## 예시
```
1) 실제 데이터 폴더 + 기대 메모로 테스트:
"In this folder, there are real input files and a notes file... Please read everything.
Then build and run tests that pass every check I described. Use the real files as test inputs.
Do not invent synthetic data."

2) AI가 스스로 챌린지 상상:
"For each file, analyze it from multiple angles and write a notes file describing what makes this case
interesting, what the correct output should be, and what to check. Save each as a challenge subfolder."

3) 챌린지 기반 테스트 실행:
"Create each folder as a test case, build and run a test for each one based on its notes,
and report what passes, what fails, and why."
```

## 요약
- AI가 스스로 작성하는 테스트는 현실 세계의 지저분함을 반영하지 못할 수 있으므로, **실제 입력 데이터와 기대 결과 메모를 모은 폴더**로 테스트하는 것이 훨씬 신뢰도 높은 검증 방법이다.
- 한발 더 나아가, AI에게 실제 입력들을 분석시켜 **스스로 흥미로운 테스트 시나리오(챌린지)를 상상하고 노트를 작성**하게 한 뒤, 그것을 테스트 케이스로 활용할 수 있다.
- AI가 만든 챌린지/노트도 사람이 최소한 샘플 검토는 해야 하며, 궁극적 목표는 사용자가 검증 과정을 직접 감독하는 대신 **실제 데이터 기반의 신뢰할 수 있는 프로세스**를 구축해 시간을 아끼는 것이다.

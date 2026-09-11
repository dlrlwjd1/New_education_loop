# Day 1 - Wire Up crew.py and main.py to Run a CrewAI Debate

## 개요
- 토론 YAML을 crew.py·main.py에 연결하고 trace로 문맥 전달을 확인한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821139#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### crew.py 연결
`@agent` 함수는 debater·judge 설정을, `@task` 함수는 propose·oppose·decide 설정을 참조한다. Python에서 사용하는 이름과 YAML 키가 정확히 일치해야 한다. 오타는 알아보기 어려운 오류로 이어질 수 있다.

### 입력과 실행
`main.py`에서 사용자가 입력한 motion을 inputs 사전에 넣고 Crew의 kickoff에 전달한다. 프로젝트 폴더에서 CrewAI를 실행하면 찬성·반대·판정 과제가 차례로 진행된다.

### trace와 파일 확인
judge가 실제로 앞선 논증을 받았는지 trace의 LLM 입력 메시지를 펼쳐 확인한다. 영상에서는 찬반 논증이 판정 과제의 context에 포함된 것을 확인한다. output 폴더의 제안·반대·판정 Markdown도 살펴본다. 판정은 해당 논증의 설득력 비교이며 객관적 정답 확정이 아니다.

## 예시
```text
사용자 motion → kickoff(inputs=...)
→ propose → oppose → decide
→ trace의 판정 입력에 두 논증이 포함됐는지 확인
→ output의 결과 파일 확인
```

## 요약
- YAML 키와 Python 연결 이름을 맞춘다.
- 문맥 전달은 추정하지 말고 실제 trace로 확인한다.

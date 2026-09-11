# Exercise: Extend the Function Calling Agent

## 개요
- 선택적(optional) 연습 과제 — [09](09%20An%20Agent%20Loop%20with%20Function%20Calling.md)/[10](10%20Try%20Out%20an%20Agent%20Loop%20with%20Function%20Calling.md)의 Function Calling 에이전트를 직접 확장해보는 실습.

## 내용
- 현재 에이전트는 노트북 안에서 할 수 있는 일이 많지 않다. **디렉토리 내용을 나열(list)할 수 있는 도구를 추가**해 에이전트를 확장해볼 것.
- 그런 다음, 텍스트 정보가 담긴 파일 몇 개를 특정 디렉토리에 넣어두고, 에이전트에게 다음과 같이 요청해본다:
  > "read all the files in \<디렉토리 경로\> and tell me what they are"
- 시작용 노트북: https://colab.research.google.com/drive/16TU03Dgubcuo6OPCL0mOWuLJ8cxpgL2V?usp=sharing (복사해서 사용)

## 요약
- `list_files`/`read_file`/`terminate` 3개 도구로 시작된 에이전트에 **디렉토리 목록 조회 도구를 새로 추가**해보고, 여러 파일을 한 번에 읽어 요약하게 하는 복합 작업을 직접 시켜보는 확장 연습.
- 이 과정에서 [05 Agent Tools in Python](05%20Agent%20Tools%20in%20Python.md)에서 배운 JSON Schema 도구 정의와 [09](09%20An%20Agent%20Loop%20with%20Function%20Calling.md)의 `tool_functions` 레지스트리 패턴을 실전으로 적용해보게 된다.

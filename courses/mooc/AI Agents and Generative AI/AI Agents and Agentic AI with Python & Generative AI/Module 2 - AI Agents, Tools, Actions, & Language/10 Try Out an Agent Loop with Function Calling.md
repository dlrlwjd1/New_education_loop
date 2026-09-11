# Try Out an Agent Loop with Function Calling

## 개요
- [09 An Agent Loop with Function Calling](09%20An%20Agent%20Loop%20with%20Function%20Calling.md)에서 본 완전한 Agent Loop(Function Calling 버전)를 직접 실행해보는 실습(Reading).

## 내용
- 노트북: https://colab.research.google.com/drive/16TU03Dgubcuo6OPCL0mOWuLJ8cxpgL2V?usp=sharing
- 노트북의 두 번째 블록을 실행하면 어떤 작업을 할지 입력하라는 프롬프트가 뜬다.
- 예: **"tell me the files in the current directory"**라고 입력하면 적절한 도구를 선택해 실행한다.
- 무엇이 되고 안 되는지 자유롭게 실험해볼 것.

## 요약
- [09](09%20An%20Agent%20Loop%20with%20Function%20Calling.md)에서 구현한 `list_files`/`read_file`/`terminate` 3개 도구 + Function Calling 기반 Agent Loop 전체를 직접 Colab에서 실행하며 동작을 확인하는 핸즈온 실습.

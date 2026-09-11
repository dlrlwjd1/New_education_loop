# Try Out the Customer Service Agent

## 개요
- [09](09%20Programmatic%20Prompting%20for%20Agents%20III.md)에서 본 "고객 서비스 에이전트" 예시(system 메시지로 행동을 고정한 에이전트)를 실제 코드로 직접 실행해보는 실습(Reading).

## 내용
- 노트북: https://colab.research.google.com/drive/1Jln3bwiJnTBNAnC-iTQxkaoXOOpY1vgE?usp=sharing
- 이 활동은 **간단한 고객 서비스 에이전트가 코드로 어떻게 구현되는지** 탐색하는 것이 목적. 노트북을 실행하며 입력이 어떻게 처리되고 응답이 어떻게 생성되는지 관찰해, 개념을 실제 동작하는 예제와 연결한다.

### 할 일 (What you'll do)
- 제공된 Google Colab 노트북 열고 실행
- 사용자 입력을 바탕으로 응답을 생성하는 예제 코드 검토
- 입력이 어떻게 수집되어 모델에 전달되는지 관찰
- 응답이 어떻게 생성되고 출력되는지 확인
- 원한다면 노트북을 조금씩 수정해보며 탐색

### 집중해서 볼 포인트 (Suggested focus)
- 코드에서 사용자 입력이 어떻게 캡처되는지
- 모델에 보내지기 전에 `messages`가 어떻게 구성되는지
- 응답이 어떻게 반환되고 출력되는지

### 팁
- 노트북이 보기 전용(view-only)으로 열리면 **"Copy to Drive"**로 복사한 뒤 실행/수정한다.

## 요약
- [09](09%20Programmatic%20Prompting%20for%20Agents%20III.md)의 "무조건 컴퓨터를 껐다 켜라"는 고객 서비스 에이전트 개념을 실제 Colab 코드로 직접 실행하며, system 메시지가 사용자 입력과 무관하게 행동을 어떻게 고정하는지 눈으로 확인하는 핸즈온 실습.

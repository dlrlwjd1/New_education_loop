# Day 5 - Refactor the Digital Twin Agent into Python Modules and Run It

## 개요
- 실험용 노트북을 네 개의 Python 모듈로 나누고 독립 앱으로 실행한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49771335#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 실험에서 모듈로 이동
노트북에서는 프롬프트·도구를 빠르게 변경하며 결과를 시험한다. 동작이 안정되면 책임별로 모듈을 나누어 배포할 앱으로 정리한다. 코드를 한 파일에 넣어도 실행은 가능하지만 역할을 나누면 관리가 쉬워진다.

### 네 모듈의 책임
`context.py`는 PDF·소개문을 읽고 시스템 프롬프트를 만든다. `tools.py`는 알림 함수, 두 도구, 스키마와 호출 처리를 모은다. `styles.py`는 스타일 상수와 예시 질문을 정의한다. `app.py`는 이들을 가져와 모델 클라이언트, 채팅 루프, Gradio 실행을 연결한다.

### 명시적인 도구 매핑
앞선 `globals()` 조회를 허용된 함수만 포함한 `tool_map`으로 바꾼다. 이름으로 함수를 찾는 구조는 유지하되 실행 가능한 대상을 제한한다.

### 실행과 확인
`twin` 폴더에서 `uv run app.py`로 실행한다. 스타일과 예시 질문을 자신의 용도에 맞게 고친 뒤 경력 응답과 연락처 알림을 다시 시험한다. 강사는 모듈별 단위 테스트도 보강할 수 있다고 안내하지만 영상에서 직접 작성하지는 않는다.

## 예시
```bash
cd 1_foundations/twin
uv run app.py
```

위 명령은 수업 저장소 루트에서 시작한다.

```text
context.py ─┐
tools.py ───┼─→ app.py → Gradio UI
styles.py ──┘
```

## 요약
- 컨텍스트·도구·표현·실행의 책임을 분리한다.
- 배포용 도구 조회는 명시적인 매핑으로 제한한다.
- 리팩터링 후에도 실제 도구 동작을 다시 확인한다.

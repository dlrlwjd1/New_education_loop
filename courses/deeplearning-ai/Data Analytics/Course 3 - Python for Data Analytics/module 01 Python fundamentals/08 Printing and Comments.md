# Printing and Comments

## 개요
- **print 문(print statement)** 으로 화면에 정보를 표시하고, 레이블(문자열)과 값을 함께 출력할 수 있다.
- **주석(comment)** 은 `#`로 시작하며, 컴퓨터가 무시하는 사람용 메모다.

## 내용

### print 문
- Jupyter는 기본적으로 셀의 **마지막 값**만 표시. **print**로 명시적 출력 가능.
- 콤마로 여러 정보 구분 → **레이블 추가**. 예: `print("Total library visits:", visits)` → 문자열 레이블 + float 결과가 한 줄에 공백으로 구분되어 출력.
- 마지막 값 의존보다 **print 사용이 권장** — 서식이 낫고 한 셀에 여러 개 가능.

### 흔한 오류와 LLM
- 닫는 괄호 누락 등은 흔한 오류 → **SyntaxError**. 사람에겐 뜻이 통해도 컴퓨터는 불가.
- 먼저 스스로 읽고 고치되, 막히면 **LLM에 오류 전체를 복사해 질문**(챗 창에서 Shift+Enter로 줄바꿈). print 오타·공백 등 사소한 것도 오류를 냄 — 코딩의 정상적 부분.

### 주석 (comment)
- `#`로 시작. 컴퓨터는 `#` 이후 그 줄 나머지를 **완전히 무시**하고 다음 줄로.
- 줄 처음이나 끝(코드 뒤)에 올 수 있고, 코드 줄 사이에도 가능. 예: `# visits from 2023 only`, `visits  # dollars`.
- 아무리 주석을 추가해도 출력은 동일. practice/graded 랩과 영상 전반에 등장.

## 예시

### print와 주석
```python
# 2023년 방문 수만
print("Total library visits:", 3.8 * 17479)
print("Income per visit:", income / total)   # dollars
```

## 요약
- **print(레이블, 값)** 으로 서식 있는 출력을 만들며, 마지막 값 의존보다 권장된다.
- 괄호 누락 등 오류는 흔하며, **LLM에 오류를 복사해 질문**해 해결할 수 있다.
- **주석(`#`)** 은 사람용 메모로 컴퓨터가 무시한다. 다음 강의는 **변수(variables)** 로 정보 저장이다.

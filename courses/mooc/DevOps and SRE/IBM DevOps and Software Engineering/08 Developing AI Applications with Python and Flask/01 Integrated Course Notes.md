# Developing AI Applications with Python and Flask

## 개요
- Python 코드 품질·패키징과 Flask 배포를 익혀 AI 서비스 호출 애플리케이션을 만든다.

## 내용
- 함수·모듈을 책임별로 나누고 style, static analysis, unit test와 예외 처리로 품질을 높인다.
- 패키지는 명시적 공개 API와 의존성 메타데이터를 가지며 재현 가능한 환경에서 설치되게 한다.
- Flask route는 입력을 검증하고 서비스 계층을 호출해 일관된 JSON/HTML 응답과 상태 코드를 반환한다.
- 외부 AI 서비스 실패에는 timeout, 오류 변환과 관측 가능한 로그를 적용하고 비밀 키는 환경 변수로 관리한다.

## 예시
```python
@app.post('/analyze')
def analyze():
    text = request.get_json()['text']
    return jsonify(service.analyze(text))
```

## 요약
- 3개 모듈은 Python 실천·패키징, Flask 배포, AI 애플리케이션 프로젝트다.

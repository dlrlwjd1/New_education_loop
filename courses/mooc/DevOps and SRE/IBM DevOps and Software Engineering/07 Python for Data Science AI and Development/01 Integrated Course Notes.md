# Python for Data Science, AI & Development

## 개요
- Python 기초, 자료구조, 함수·객체, 데이터 파일·라이브러리, API·웹 수집을 익힌다.

## 내용
- 기본 타입, 표현식, 조건·반복, 함수와 예외로 프로그램 흐름을 구성한다.
- list, tuple, dict, set은 순서·변경 가능성·키 조회 요구에 맞게 선택한다.
- 파일과 pandas DataFrame을 읽고 NumPy 배열 연산으로 데이터를 처리한다.
- HTTP API의 JSON 응답을 검증해 사용하고 웹 수집은 이용 조건, 속도 제한과 페이지 구조 변화를 고려한다.

## 예시
```python
import requests
response = requests.get(url, timeout=10)
response.raise_for_status()
payload = response.json()
```

## 요약
- 5개 모듈은 Python 기초, 자료구조, 프로그래밍, 데이터, API·수집으로 구성된다.

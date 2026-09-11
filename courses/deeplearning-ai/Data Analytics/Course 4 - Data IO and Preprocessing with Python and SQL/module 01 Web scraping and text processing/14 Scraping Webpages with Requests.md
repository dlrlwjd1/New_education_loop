# Scraping Webpages with Requests

## 개요
- 표가 아닌 복잡한 웹페이지는 **requests**(페이지 가져오기)와 **Beautiful Soup**(파싱) 두 모듈로 스크래핑한다.
- **requests.get(URL)** 으로 GET 요청을 보내고 응답의 상태·내용을 확인한다.

## 내용

### pd.read_html의 한계
- 표 없는 사이트(예: 천문 이벤트 캘린더)에 `pd.read_html` → **ValueError: No tables found**. 표가 있어야만 작동.

### requests로 페이지 가져오기
- `import requests, from bs4 import BeautifulSoup`. (pandas가 자동으로 하던 **요청+파싱**을 이제 직접 분리 수행)
- `response = requests.get(url)` — GET 요청(정보 요청).
- **response.status_code**(속성, 괄호 X): **200**이면 성공.
- **response.content**(속성): 서버가 보낸 원시 내용 = 페이지 소스(View Source)와 동일. `<!DOCTYPE html>` 로 시작 = **HTML 문서**.
- (긴 출력은 LLM에 "처음 1000자만 표시" 요청)

## 예시

### requests로 스크래핑
```python
import requests
from bs4 import BeautifulSoup
response = requests.get(url)
response.status_code   # 속성, 200이면 성공
response.content       # 원시 HTML
```

## 요약
- 표 없는 페이지는 **requests.get(URL)** 로 가져오고, **.status_code**(200=성공)·**.content**(원시 HTML)를 확인한다.
- pandas가 하던 요청+파싱을 requests(요청)와 Beautiful Soup(파싱)으로 분리한다.
- 다음 강의는 **HTML** 구조 이해다.

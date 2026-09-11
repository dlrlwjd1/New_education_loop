# Parsing HTML with Beautiful Soup

## 개요
- **Beautiful Soup** 으로 HTML을 파싱한다: **find_all**(모든 일치 요소), **find**(첫 요소), **.text**(내부 텍스트).
- 계획한 구조를 루프로 순회하며 데이터를 추출해 데이터프레임으로 만든다.

## 내용

### 파싱 준비
- `soup = BeautifulSoup(response.content)` — response.content를 파싱. print하면 정돈된 HTML.

### 구현
- `event_list = []`.
- **soup.find_all("li", class_=True)** — 클래스 있는 모든 li. (**class_** 밑줄 — class는 Python 예약어).
- 루프 `for event in ...`:
  - `date = event.find("span", class_="date-text")`.
  - `title = event.find("span", class_="title-text")`.
  - `desc = event.find("p")` (클래스 없음).
  - **.text** 로 텍스트만 추출(HTML 태그 제거): `date.text` 등.
  - `event_row = [date.text, title.text, desc.text]`, `event_list.append(event_row)`.
- `df = pd.DataFrame(event_list)` — 데이터프레임 생성.

### LLM 활용
- 계획(주석)을 LLM에 주면 코드를 작성해줌("이 주석대로 soup 변수로 데이터프레임 생성"). 세부 암기 불필요 — **계획·해석**이 중요.

## 예시

### Beautiful Soup 파싱
```python
soup = BeautifulSoup(response.content)
event_list = []
for event in soup.find_all("li", class_=True):
    date = event.find("span", class_="date-text").text
    title = event.find("span", class_="title-text").text
    desc = event.find("p").text
    event_list.append([date, title, desc])
df = pd.DataFrame(event_list)
```

## 요약
- **Beautiful Soup**: `BeautifulSoup(response.content)` → **find_all(태그, class_=)**·**find**·**.text** 로 데이터 추출.
- 루프로 요소를 순회해 리스트를 모으고 **pd.DataFrame**으로 만든다(class_는 밑줄 주의).
- 계획을 LLM에 주면 코드를 생성한다. 다음 강의는 만든 데이터프레임 정리다.

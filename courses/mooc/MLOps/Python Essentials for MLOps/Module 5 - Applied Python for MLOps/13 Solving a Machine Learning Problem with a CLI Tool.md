# Solving a Machine Learning Problem with a CLI Tool

## 개요
- 지금까지 배운 것(Click, Hugging Face, 패키징)을 종합해, **URL이나 로컬 파일의 텍스트를 요약하는 실전 CLI 도구(`summarize`)**를 만드는 실습. 웹 스크래핑(BeautifulSoup)과 Hugging Face의 T5 요약 모델을 CLI에 결합하는 전체 흐름을 보여준다.

## 내용

### 의존성 구성
- `transformers`(Hugging Face), `click`(CLI 프레임워크), `tensorflow`(모델 추론 백엔드), `beautifulsoup4`(HTML 파싱, `bs4`)를 설치.

### 두 가지 입력 지원 — URL 또는 파일
- CLI 명령이 `--url` 또는 `--file` 옵션을 받아, **둘 중 어느 쪽이 주어졌는지에 따라 다르게 처리**한다.
- `extract_from_url()`: 주어진 URL에 요청을 보내고, BeautifulSoup으로 **모든 `<p>`(문단) 태그를 찾아 텍스트를 추출**한다.
- 파일이 주어지면 그냥 파일 내용을 읽는다.

### 텍스트 처리 — T5 요약 모델
- `process()` 함수가 실제 머신러닝 작업을 담당 — **T5-small 모델**을 `pipeline("summarization", max_length=180)`으로 인스턴스화해서 텍스트를 요약한다.

### 패키징과 실행
- `python setup.py develop`으로 도구와 의존성을 설치하면 `summarize` 명령을 바로 쓸 수 있다.
- `summarize --url <URL>`: 웹 페이지의 문단 텍스트를 추출해 요약.
- `summarize --file <경로>`: 로컬 텍스트 파일(예: MLOps 위키백과 설명)을 요약.
- 두 경우 모두 GPU가 없는 환경에서는 TensorFlow의 경고 메시지가 많이 나올 수 있음(무시해도 무방).

### 개선 여지
- 강사는 이 도구가 **기초 지식을 보여주기 위한 것**이며, 실전에서는 다음과 같은 개선이 필요하다고 언급:
  - Summarizer 설정을 더 정교하게(패딩, 시퀀스 길이 등) 다듬을 것.
  - 웹 스크래핑을 "모든 `<p>` 태그"가 아니라 더 정교한 선택자로 다듬을 것.

## 예시
```python
import click
from transformers import pipeline
import requests
from bs4 import BeautifulSoup

def extract_from_url(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    paragraphs = soup.find_all("p")
    return " ".join(p.get_text() for p in paragraphs)

def process(text):
    summarizer = pipeline("summarization", model="t5-small", max_length=180)
    return summarizer(text)

@click.command()
@click.option("--url", default=None)
@click.option("--file", default=None)
def main(url, file):
    if url:
        text = extract_from_url(url)
    else:
        with open(file) as f:
            text = f.read()
    result = process(text)
    click.echo(result)

if __name__ == "__main__":
    main()
```
```bash
python setup.py develop
summarize --url https://learn.microsoft.com/azure/machine-learning/concept-model-management-and-deployment
summarize --file examples/mlops_wikipedia.txt
```

## 요약
- Click(CLI) + Hugging Face(요약 모델) + BeautifulSoup(웹 스크래핑) + Setuptools(패키징)을 조합하면, URL이나 파일의 텍스트를 요약하는 실전 머신러닝 CLI 도구를 만들 수 있다.
- 이 예시는 기초를 보여주는 용도이며, 실전에서는 모델 설정과 스크래핑 로직을 더 견고하게 다듬어야 한다.

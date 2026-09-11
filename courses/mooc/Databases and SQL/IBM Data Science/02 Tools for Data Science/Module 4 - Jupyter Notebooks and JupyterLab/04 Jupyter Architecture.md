# Jupyter Architecture

## 개요
- 강좌: Tools for Data Science
- 모듈:  Jupyter Notebooks and JupyterLab
- 재생 시간: 2분
- [MOOC 원본 강의](https://www.mooc.org/learn/open-source-tools-for-data-science/lecture/DiWtJ/jupyter-architecture)
- 이 비디오를 시청하고 나면 기본 Jupyter 아키텍처를 설명하고 파일 형식 변환을 위한 Jupyter 아키텍처를 설명할 수 있습니다.
- Jupyter 아키텍처는 커널과 클라이언트를 사용하는 2프로세스 모델을 구현합니다.

## 내용
### 핵심 내용
- 이 비디오를 시청하고 나면 기본 Jupyter 아키텍처를 설명하고 파일 형식 변환을 위한 Jupyter 아키텍처를 설명할 수 있습니다.
- Jupyter 아키텍처는 커널과 클라이언트를 사용하는 2프로세스 모델을 구현합니다.
- Jupyter 아키텍처는 NB 변환 도구를 사용하여 파일을 다른 형식으로 변환합니다.
- 예를 들어 노트북 파일을 HTML 파일로 변환하려는 경우 먼저 전처리기가 노트북을 수정하면 익스포터가 노트북을 새 파일 형식으로 변환합니다.
- 이 비디오에서는 Jupyter가 커널과 클라이언트를 사용하여 2프로세스 모델을 구현한다는 것을 배웠습니다.
- 그리고 Jupyter 아키텍처는 NB 변환 도구를 사용하여 파일을 다른 형식으로 변환합니다.

### 한국어 Transcript

“주피터 아키텍처”에 오신 것을 환영합니다. 이 비디오를 시청하고 나면 기본 Jupyter 아키텍처를 설명하고 파일 형식 변환을 위한 Jupyter 아키텍처를 설명할 수 있습니다. Jupyter 아키텍처는 커널과 클라이언트를 사용하는 2프로세스 모델을 구현합니다. 클라이언트는 사용자가 커널에 코드를 전송할 수 있는 기능을 제공하는 인터페이스입니다. Jupyter 노트북의 브라우저입니다.

커널은 코드를 실행하고 결과를 클라이언트에 반환하여 표시합니다. Jupyter 노트북은 코드, 메타데이터, 콘텐츠 및 출력을 나타냅니다. 노트북을 저장하면 브라우저에서 노트북 서버로 전송됩니다. ipynb (dot i PI NB로 발음) 인 JSON 파일로 저장합니다. 노트북 서버는 노트북을 저장하고 로드하는 역할을 합니다.

그리고 커널은 사용자가 노트북을 실행할 때 노트북에 포함된 코드 셀을 실행합니다. Jupyter 아키텍처는 NB 변환 도구를 사용하여 파일을 다른 형식으로 변환합니다. 예를 들어 노트북 파일을 HTML 파일로 변환하려는 경우 먼저 전처리기가 노트북을 수정하면 익스포터가 노트북을 새 파일 형식으로 변환합니다. 마지막으로 포스트 프로세서가 내보낸 파일을 처리하여 최종 출력을 제공합니다. 변환 후 파일의 URL을 입력하면 HTML 파일이 표시됩니다.

이 비디오에서는 Jupyter가 커널과 클라이언트를 사용하여 2프로세스 모델을 구현한다는 것을 배웠습니다. 노트북 서버는 노트북의 저장 및 로드를 담당합니다. 커널은 노트북에 포함된 코드 셀을 실행합니다. 그리고 Jupyter 아키텍처는 NB 변환 도구를 사용하여 파일을 다른 형식으로 변환합니다.

## 예시
- 클라이언트는 사용자가 커널에 코드를 전송할 수 있는 기능을 제공하는 인터페이스입니다.
- 커널은 코드를 실행하고 결과를 클라이언트에 반환하여 표시합니다.
- Jupyter 노트북은 코드, 메타데이터, 콘텐츠 및 출력을 나타냅니다.
- 그리고 커널은 사용자가 노트북을 실행할 때 노트북에 포함된 코드 셀을 실행합니다.

## 요약
- 예를 들어 노트북 파일을 HTML 파일로 변환하려는 경우 먼저 전처리기가 노트북을 수정하면 익스포터가 노트북을 새 파일 형식으로 변환합니다.
- 이 비디오에서는 Jupyter가 커널과 클라이언트를 사용하여 2프로세스 모델을 구현한다는 것을 배웠습니다.
- 그리고 Jupyter 아키텍처는 NB 변환 도구를 사용하여 파일을 다른 형식으로 변환합니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to “Jupyter Architecture.” After watching this video, you will be able to describe the basic Jupyter architecture, and explain Jupyter architecture for conversion of a file format. Jupyter architecture implements a two-process model with a kernel and a client. The client is the interface offering the user the ability to send code to the kernel. It is the browser in a Jupyter Notebook. The kernel executes the code and returns the result to the client for display.

Jupyter Notebooks represent your code, metadata, contents, and outputs. When you save the Notebook, it is sent from your browser to the Notebook server. It saves the notebook file on a disk as a JSON file with a . ipynb (pronounced as dot i PI NB) extension. The Notebook server is responsible for saving and loading the notebooks.

And the kernel executes the cells of code contained in the Notebook when the user runs them. The Jupyter architecture uses the NB convert tool to convert files to other formats. For example, if we want to convert a notebook file into an HTML file, the notebook is first modified by a preprocessor, then an exporter converts the notebook to the new file format. Finally, a postprocessor will work on the exported file to give the final output. After conversion, on giving the url of the file, the HTML file displays.

In this video, you learned that: Jupyter implements a two-process model with a kernel and a client. The Notebook server is responsible for saving and loading the notebooks. The kernel executes the cells of code contained in the Notebook. And the Jupyter architecture uses the NB convert tool to convert files to other formats.

</details>

#  Additional Cloud Based Jupyter Environments

## 개요
- 강좌: Tools for Data Science
- 모듈:  Jupyter Notebooks and JupyterLab
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/open-source-tools-for-data-science/lecture/FNvFr/additional-cloud-based-jupyter-environments)
- 이 비디오를 시청하면 클라우드 기반 Jupyter 환경과 해당 데이터 과학 기능을 설명하고, 클라우드 기반 Jupyter 환경을 탐색하고, 클라우드 기반 환경의 도구를 식별할 수 있습니다.
- 컴퓨팅 노트북은 코드, 계산 출력, 설명 텍스트 및 멀티미디어 리소스를 단일 문서에 결합합니다.

## 내용
### 핵심 내용
- 이 비디오를 시청하면 클라우드 기반 Jupyter 환경과 해당 데이터 과학 기능을 설명하고, 클라우드 기반 Jupyter 환경을 탐색하고, 클라우드 기반 환경의 도구를 식별할 수 있습니다.
- 컴퓨팅 노트북은 코드, 계산 출력, 설명 텍스트 및 멀티미디어 리소스를 단일 문서에 결합합니다.
- Jupyter 노트북을 만들고 수정하는 데 널리 사용되는 클라우드 기반 환경으로는 JupyterLite, Google Colaboratory 등이 있습니다.
- 사용하는 Jupyter 환경 유형에 따라 다른 커널을 확인할 수 있습니다.
- 이 비디오에서는 다음과 같은 내용을 배웠습니다.
- 주피터 추가 오픈 소스 환경으로는 주피터 랩, 주피터 라이트, VS 코드, 구글 콜라보레이터 등이 있습니다.

### 한국어 Transcript

“추가 클라우드 기반 Jupyter 환경”에 오신 것을 환영합니다. 이 비디오를 시청하면 클라우드 기반 Jupyter 환경과 해당 데이터 과학 기능을 설명하고, 클라우드 기반 Jupyter 환경을 탐색하고, 클라우드 기반 환경의 도구를 식별할 수 있습니다. 컴퓨팅 노트북은 코드, 계산 출력, 설명 텍스트 및 멀티미디어 리소스를 단일 문서에 결합합니다. Jupyter 노트북은 수십 개의 프로그래밍 언어를 지원하므로 널리 사용되는 컴퓨팅 노트북 유형입니다. Jupyter 노트북을 만들고 수정하는 데 널리 사용되는 클라우드 기반 환경으로는 JupyterLite, Google Colaboratory 등이 있습니다.

JupyterLite는 전적으로 브라우저에서 실행되는 JupyterLab 구성 요소로 구축된 가벼운 도구입니다. 주피터 라이트는 전용 주피터 서버가 필요하지 않습니다. 웹 서버만 있으면 되므로 JupyerLite를 정적 웹 사이트로 배포할 수 있습니다. Altair, Plotly 및 ipywidgets와 같은 많은 시각화 라이브러리를 지원하므로 대화형 그래픽 및 시각화를 만드는 데에도 사용할 수 있습니다. JupyterLite는 JupyterLab의 배포판이므로 최신 개선 사항과 기능이 포함되어 있습니다.

JupyterLite를 실행하려면 브라우저를 열고 URL 필드에 jupyter. org/try-jupyter/lab을 입력합니다. 다음으로, 파이썬 (Pyodide) 을 클릭합니다. 다음은 주피터라이트 노트북의 모습입니다. 우리는 커널이 파이썬 파이오다이드라는 것을 알기 때문에 이것이 JupyterLite 노트북이라는 것을 압니다.

이 커널을 사용하면 브라우저에서 Python 패키지를 설치하고 실행할 수 있습니다. 사용하는 Jupyter 환경 유형에 따라 다른 커널을 확인할 수 있습니다. 클라우드 기반 주피터 환경에서는 파이썬 파이오다이드와 파이썬 파이오라이트가 일반적인 커널입니다. 주피터 라이트의 기본 커널은 파이오라이트입니다. 파이오라이트는 파이오다이드에 기반한 파이썬 커널입니다.

Pyolite는 백그라운드에서 실행되므로 집중적인 계산을 빠르게 실행할 수 있습니다. 다른 커널도 JupyterLite와 함께 사용할 수 있습니다. Google 콜라보레이션 (또는 'Google Colab') 은 전적으로 클라우드에서 실행되는 무료 Jupyter 노트북 환경입니다. 구글 콜랩 주피터 노트북은 브라우저에서 실행되며, 구글 콜랩 프로젝트는 구글 드라이브와 깃허브에 저장됩니다. 설정 및 설치 없이 노트북을 업로드하고 공유할 수 있습니다.

GitHub에서 프로젝트를 복제하고 GoogleColab에서 실행할 수도 있습니다. scikit-learn 및 matplotlib와 같은 대부분의 머신러닝 및 시각화 라이브러리는 사전 설치되어 있습니다. GoogleCollab을 사용하면 많은 설정이나 준비 없이 다양한 인기 데이터 과학 애플리케이션을 '즉석', 즉 빠르게 개발할 수 있습니다. Colab 노트북을 열려면 Google 드라이브를 열고 새로 만들기를 클릭하고 GoogleColab을 탐색하려면 Google 드라이브 메뉴에서 더보기를 선택합니다. 그런 다음 Google 콜라보레이션을 선택합니다.

노트북에서 코드 섹션에 코드를 작성한 다음 코드를 실행하려면 실행 아이콘을 클릭합니다. 코드 또는 텍스트 셀을 더 추가하려면 +코드 및 +텍스트를 클릭해야 합니다. 여기서는 텍스트 셀을 사용하여 리치 텍스트를 작성하거나 이러한 셀을 마크다운 셀로 설정할 수 있습니다. 이 비디오에서는 다음과 같은 내용을 배웠습니다. Jupyter는 수십 개의 프로그래밍 언어를 지원하기 때문에 널리 사용되는 컴퓨터 노트북 도구입니다.

아나콘다 내비게이터 GUI는 여러 애플리케이션을 실행할 수 있습니다. 주피터 추가 오픈 소스 환경으로는 주피터 랩, 주피터 라이트, VS 코드, 구글 콜라보레이터 등이 있습니다. 주피터 라이트는 브라우저 기반 도구입니다.

## 예시
- 컴퓨팅 노트북은 코드, 계산 출력, 설명 텍스트 및 멀티미디어 리소스를 단일 문서에 결합합니다.
- 노트북에서 코드 섹션에 코드를 작성한 다음 코드를 실행하려면 실행 아이콘을 클릭합니다.
- 코드 또는 텍스트 셀을 더 추가하려면 +코드 및 +텍스트를 클릭해야 합니다.
- 주피터 추가 오픈 소스 환경으로는 주피터 랩, 주피터 라이트, VS 코드, 구글 콜라보레이터 등이 있습니다.

## 요약
- 사용하는 Jupyter 환경 유형에 따라 다른 커널을 확인할 수 있습니다.
- 이 비디오에서는 다음과 같은 내용을 배웠습니다.
- 주피터 추가 오픈 소스 환경으로는 주피터 랩, 주피터 라이트, VS 코드, 구글 콜라보레이터 등이 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to “Additional Cloud-Based Jupyter Environments”.​ After watching this video, you will be able to:​ describe cloud-based Jupyter environments and their data science features​, navigate cloud-based Jupyter environments, and​ identify tools in cloud-based environments.​ Computational notebooks combine code, computational output, explanatory text, and multimedia resources in a single document. ​ Jupyter notebook is a popular type of computational notebook because it supports dozens of programming languages. ​ Popular cloud-based environments used to create and modify Jupyter notebooks include:​ JupyterLite, and​ GoogleColaboratory​.​ JupyterLite is a lightweight tool built from JupyterLab components ​that executes entirely in the browser.​ JupyterLite does not require a dedicated Jupyter server. ​ Only a web server is required, which means ​we can deploy JupyerLite as a static website.​ We can also use it to create interactive graphics and visualizations because it supports many visualization libraries like Altair, Plotly, and ipywidgets​. Since JupyterLite is a distribution of JupyterLab, ​it includes the latest improvements and features.​ To launch JupyterLite, open a browser and type jupyter.

org/try-jupyter/lab in the URL field. Then press Enter.​ JupyterLite will appear.​ Next, click Python(Pyodide). ​​ Here is a view of a JupyterLite notebook. We know this is a JupyterLite notebook because ​we see the kernel is Python Pyodide. ​ This kernel allows installing and running Python packages in a browser.

You will notice different kernels depending on the type of Jupyter environment you use. For cloud-based Jupyter environments, Python Pyodide and Python Pyolite are common kernels. ​ The default kernel for JupyterLite is​ Pyolite. ​ Pyolite is a Python kernel based on Pyodide. Pyolite runs in the background, so that intensive computations can execute quickly.

​ Other kernels can also be used with JupyterLite.​ Google Colaboratory (or 'GoogleColab') is a free Jupyter notebook environment that runs entirely in the cloud.​ GoogleColab Jupyter notebooks execute on a browser, and GoogleColab projects are stored on Google Drive and GitHub. ​ You can upload and share notebooks without setup and installation.​ You can also clone projects from GitHub and execute them in GoogleColab.​ Most machine learning and visualization libraries are pre-installed, like scikit-learn and matplotlib.​ With GoogleCollab, you can develop many trending data science applications “on the fly”, which is to say, quickly without a lot of setup or preparation.​ To open the Colab notebook, open Google Drive, and​ click New​​ To explore GoogleColab,​ from the Google Drive menu, select More. ​Then select Google Colaboratory.​​ The GoogleColab notebook will appear.​ In the notebook, write the code ​in the code section, and then to execute the code,​ click the Run icon.​ To add more Code or Text cells, you need to click ​+Code and​ +Text. ​ Here, text cells are used to write rich text, or you can set these cells as Markdown cells.​ In this video, you learned that:​ Jupyter is a popular computational notebook tool because it supports dozens of programming languages.​ The Anaconda Navigator GUI can launch multiple applications.​ Additional open-source Jupyter environments include the following: JupyterLab, JupyterLite, VS Code, and Google Colaboratory. ​ JupyterLite is a browser-based tool.​

</details>

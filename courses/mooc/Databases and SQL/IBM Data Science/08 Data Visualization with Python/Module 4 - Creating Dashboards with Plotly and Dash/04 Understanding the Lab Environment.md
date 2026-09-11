# Understanding the Lab Environment

## 개요
- 강좌: Data Visualization with Python
- 모듈:  Creating Dashboards with Plotly and Dash
- 재생 시간: 8분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-data-visualization/lecture/ipVxO/understanding-the-lab-environment)
- 이 비디오를 시청하고 나면 Skills Network labs 클라우드 IDE 환경을 설명하고, 대시보드 구성 요소로 선 그래프를 생성하여 비행 시간 데이터를 분석하고, Dash 애플리케이션의 레이아웃을 만들고, 애플리케이션을 실행하고 시작하는 단계를 나열할 수 있습니다.
- 이 활동에는 스킬 네트워크 랩, SN 랩, 클라우드 IDE 환경을 사용할 예정입니다.

## 내용
### 핵심 내용
- 이 비디오를 시청하고 나면 Skills Network labs 클라우드 IDE 환경을 설명하고, 대시보드 구성 요소로 선 그래프를 생성하여 비행 시간 데이터를 분석하고, Dash 애플리케이션의 레이아웃을 만들고, 애플리케이션을 실행하고 시작하는 단계를 나열할 수 있습니다.
- 이 활동에는 스킬 네트워크 랩, SN 랩, 클라우드 IDE 환경을 사용할 예정입니다.
- 월별 평균 항공사 지연시간, 월별 평균 기상 지연, 월별 평균 전국 항공 시스템 지연시간, 월별 평균 보안 지연 시간, 해당 연도의 보고 항공사별 월별 평균 항공기 지연 시간 등에 대한 대시보드 구성 요소가 포함된 다섯 개의 선 그래프를 만들게 됩니다.
- input 태그라고 하는 첫 번째 HTML 분할 내에서 입력 구성 요소를 다양한 속성으로 사용자 지정할 수 있습니다.
- graph 함수 구성 요소에 제공된 ID로 출력 구성 요소 ID 매개 변수를 업데이트하고 구성 요소 속성을 다음과 같이 그림으로 설정합니다.
- 그런 다음 입력 구성 요소 ID 매개 변수를 ID로 업데이트하고 속성을 값으로 설정합니다.

### 한국어 Transcript

실험실 환경 이해에 오신 것을 환영합니다. 이 비디오를 시청하고 나면 Skills Network labs 클라우드 IDE 환경을 설명하고, 대시보드 구성 요소로 선 그래프를 생성하여 비행 시간 데이터를 분석하고, Dash 애플리케이션의 레이아웃을 만들고, 애플리케이션을 실행하고 시작하는 단계를 나열할 수 있습니다. 이 활동에는 스킬 네트워크 랩, SN 랩, 클라우드 IDE 환경을 사용할 예정입니다. Skills Network labs 클라우드 IDE는 웹 브라우저에서 교육 과정 및 프로젝트 관련 실습을 완료할 수 있는 실습 환경을 제공합니다. 데스크톱 또는 클라우드에서 실행할 수 있는 오픈 소스 IDE 플랫폼을 활용합니다.

랩을 열면 화면이 양면으로 표시됩니다. 왼쪽에는 통합 개발 환경인 IDE가 있습니다 . 여기서 터미널 사용, 코드 작성 등 다음 작업을 완료할 수 있습니다. 이 IDE 창을 좀 더 자세히 살펴보겠습니다. 상단에는 새 파일 생성, 터미널 하위 메뉴 저장, 실행 및 디버깅 등을 도와주는 하위 메뉴로 구성된 핵심 메뉴가 있습니다.

왼쪽에는 애플리케이션 실행 옵션을 찾을 수 있는 프로젝트별 메뉴가 있습니다. 새 터미널을 열려면 코어 메뉴에서 터미널을 클릭한 다음 새 터미널을 클릭합니다. 제시간에 항공사 신고 항공사와 협력할 거예요 데이터 자산 거래소의 실적 데이터 세트 소스에는 미국 교통 통계국에 보고된 약 2억 개의 미국 국내 항공편에 대한 세부 정보가 포함되어 있습니다. 여기에는 시간, 날짜, 출발 공항, 도착 공항, 항공편 지연 기간, 지연 원인과 관련된 정보 등 각 항공편에 대한 필수 세부 정보가 포함됩니다. 항공편 지연과 대시보드를 분석하게 됩니다.

월별 평균 항공사 지연시간, 월별 평균 기상 지연, 월별 평균 전국 항공 시스템 지연시간, 월별 평균 보안 지연 시간, 해당 연도의 보고 항공사별 월별 평균 항공기 지연 시간 등에 대한 대시보드 구성 요소가 포함된 다섯 개의 선 그래프를 만들게 됩니다. 먼저 터미널에서 지침에 설명된 대로 필요한 패키지를 모두 설치하고 PIP 명령을 복사합니다. 둘째, 터미널에 붙여넣은 다음 Shift+Enter를 눌러 실행합니다. 세 가지 PIP 명령 모두에 대해 이 작업을 하나씩 수행하십시오. 이제 새 스크립트 파일을 만들어 코드를 작성해 보겠습니다.

먼저, 코어 메뉴 막대에서 파일을 클릭한 다음 새 파일을 클릭합니다. 둘째, 화면에 팝업 프롬프트가 나타납니다. 여기에서 지침에 표시된 대로 이 파일의 이름인 flight_delay. py 를 입력하고 “확인”을 클릭합니다. IDE에서 파일이 준비되고 열립니다.

먼저 라이브러리를 가져와서 데이터세트를 스크립트 파일로 가져와야 합니다. 첫째, 화면의 지침 측면에 필요한 모든 라이브러리가 나와 있습니다. 또한, 판다와 함께 데이터세트를 가져올 때 언급한 코드는 airline_data가 pd. 둘째, 복사해서 스크립트 파일에 붙여넣으세요. 이제 앱의 레이아웃을 디자인할 차례입니다.

먼저 대시 함수를 호출하여 대시 앱을 만들어 보겠습니다. 둘째, HTML을 사용하여 레이아웃 분할을 추가하려면 div 함수 및 입력 구성 요소와 함께 레이아웃 분할 내에 dcc. input 함수 태그를 활용할 수 있습니다. 셋째, 디스플레이를 두 개의 외부 분할에 대한 플럭스로 사용하여 그래프를 연속으로 나란히 표시하는 것입니다. 네, 지침에서 코드를 오른쪽 또는 복사하여 이전 코드 아래의 스크립트 파일에 붙여넣습니다.

이제 뼈대를 만들었으니 구성 요소를 포함시켜 보겠습니다. h1 함수에 문자열로 표시되며 텍스트에 스타일을 지정할 수 있습니다. input 태그라고 하는 첫 번째 HTML 분할 내에서 입력 구성 요소를 다양한 속성으로 사용자 지정할 수 있습니다. 예를 들어 ID를 입력 연도로 지정하고, 값을 2010으로 설정하고, 유형을 숫자로 지정하고, 높이 및 글꼴 크기와 같은 스타일 속성을 사용자 지정할 수도 있습니다. 그 중 하나는 이 다이얼 매개 변수를 활용하면 분할에 다양한 그래프를 적극적으로 추가할 수 있다는 것입니다.

디스플레이를 플렉스로 지정하여 두 개의 플롯을 연속으로 나란히 배치합니다. graph 태그를 사용하고 각 플롯에 ID를 지정하십시오. 사용자가 입력한 연도에 대해 항공사 데이터를 계산하고 차트와 도표를 작성해야 합니다. 먼저, 이 함수를 compute_info라고 부르겠습니다. 데이터세트와 입력 연도를 인수로 전달하면 함수는 해당 연도의 모든 평균 지연을 반환해야 합니다.

둘째, 이 함수 내에서 해당 월의 데이터 세트와 신고 항공사 기능을 그룹화하여 구체적인 지연 시간을 집계합니다. 모든 지연을 개별 도표로 계산할 수 있습니다. 하지만 가장 좋은 방법은 함수를 만드는 것입니다. 사용자가 입력한 연도 값을 기반으로 대시보드를 실시간으로 업데이트해야 하므로 이제 콜백 함수를 만들어 보겠습니다. 먼저 콜백 데코레이터를 만들어 보겠습니다.

먼저, 생성한 5개 구성 요소 모두에 대해 dcc. graph 함수 구성 요소에 제공된 ID로 출력 구성 요소 ID 매개 변수를 업데이트하고 구성 요소 속성을 다음과 같이 그림으로 설정합니다. 그런 다음 입력 구성 요소 ID 매개 변수를 ID로 업데이트하고 속성을 값으로 설정합니다. 그런 다음 제공된 입력을 사용하여 계산을 수행하는 콜백 함수를 만듭니다. 넷째, 이 함수에서 그래프를 만들고 이를 출력값으로 반환합니다.

다섯 번째, 마지막으로 앱에서 run. 일곱째, 이 응용 프로그램을 실행하려면 터미널에서 python3flight-delay. 첫째, 애플리케이션을 실행한 후 포트 번호를 받게 됩니다. 스킬 네트워크 도구 상자를 클릭합니다. 그런 다음 애플리케이션 시작을 클릭합니다.

넷째, 애플리케이션 포트 상자에 포트 번호 (이 경우 8050) 를 입력합니다. 다섯 번 누른 다음 애플리케이션을 클릭합니다. 여섯, 출력은 다음과 같아야 합니다. 이 비디오에서는 비행 지연 시간 통계에 대한 대시 프레임워크를 사용하여 대시보드를 개발한 실습을 살펴보았습니다.

## 예시
- Skills Network labs 클라우드 IDE는 웹 브라우저에서 교육 과정 및 프로젝트 관련 실습을 완료할 수 있는 실습 환경을 제공합니다.
- 여기서 터미널 사용, 코드 작성 등 다음 작업을 완료할 수 있습니다.
- 먼저 터미널에서 지침에 설명된 대로 필요한 패키지를 모두 설치하고 PIP 명령을 복사합니다.
- 세 가지 PIP 명령 모두에 대해 이 작업을 하나씩 수행하십시오.

## 요약
- input 태그라고 하는 첫 번째 HTML 분할 내에서 입력 구성 요소를 다양한 속성으로 사용자 지정할 수 있습니다.
- graph 함수 구성 요소에 제공된 ID로 출력 구성 요소 ID 매개 변수를 업데이트하고 구성 요소 속성을 다음과 같이 그림으로 설정합니다.
- 그런 다음 입력 구성 요소 ID 매개 변수를 ID로 업데이트하고 속성을 값으로 설정합니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Understanding the lab environment. After watching this video, you'll be able to describe the Skills Network labs cloud IDE environment, analyze flight on time data by creating line graphs with dashboard components, create the layout of the Dash application, list the steps to run and launch the application. We'll be using the Skills Network labs, SN labs, cloud IDE environment for this activity. Skills Network labs cloud IDE provides a hand-on environment in your web browser for completing course and project-related labs. It utilizes there an open source IDE platform that can run on a desktop or the Cloud.

When you open the lab, the screen will have two sides. On the right side, you'll see the labs instructions. On the left side is the Integrated Development Environment, IDE, where you'll complete the following; use terminal, write code, and so on. Let's have a closer look at this IDE window. At the top, there is a core menu that comprises of sub menus to help you create new files, save, run, and debug a terminal sub menu and so on.

On the left side is a project-specific menu where you can find options to launch your application. To open a new terminal, click the terminal in the core menu and then click new terminal. Here, we have completed it. Great, let's start with the lab. We will work on the airline reporting carrier on time.

The performance dataset source from the data asset exchange encompasses details on nearly 200 million domestic US flights reported to the United States Bureau of Transportation Statistics. It includes essential details about each flight, such as the time, date, departure airport, arrival airport, duration of flight delay, and information pertaining to the cause of the delay. You will analyze flight delays and a dashboard. You'll be creating five line graphs with dashboard components for monthly average carrier delay, monthly average weather delay, monthly average national air system delay, monthly average security delay, monthly average late aircraft delay by reporting airline for the given year. One, in the terminal, install all the required packages as mentioned in the instructions, copy the PIP commands.

Two, paste it into the terminal and then press Shift plus Enter to execute them. Do this for all three PIP commands one by one. It will take a while. Let's now create a new script file to write the code. One, click file in the core menu bar and then click New File.

Two, a pop out prompt will appear on the screen. Here, mention the name of this file as indicated in the instructions, flight_delay. py and click "Okay". The file is ready and open in the IDE. First we need to import the libraries and pull the dataset into the script file.

One, the instruction side of the screen mentions all the required libraries. Additionally, the code mentioned to fetch the dataset with pandas is airline_data equals pd. Two, copy and paste them into the script file. Three, as shown here. Now it's time to design the layout of the app.

One, we will first create the dash app by calling the dash function, app equals dash. Two, to add a layout division using HTML, you can utilize the dcc. input function tag inside the layout division along with the div function and input components. Three, using the display as flux for two outer divisions to get graphs side-by-side in a row. Four, right or copy the code from the instructions and paste it into the script file below the previous code.

Now that we have the skeleton, let's include the components. One, the title will go in the html. H1 function as a string, and you can style the text. Two, inside the first HTML division, which we refer to as the dcc. input tag, the input component can be customized with various attributes.

For instance, you can assign the ID as input year, set the value as 2010, specify the type as number, and even customize the style attributes such as height and font size. One, when utilizing this dial parameter, you can actively add different graphs to the divisions. We assign display as flex to place two plots side-by-side in a row. graph tag for including the plot and give each plot an ID. For the year input by user, we need to compute the airline data and make charts and plots.

One, let's call this function compute_info. Pass the dataset and the input year as arguments, the function should return all the average delays for that year. Two, within this function, we will aggregate the specific delay by grouping the dataset for the month and the reporting airlines features. You can compute all the delays as individual plots. But best practice would be to create a function.

As we need our dashboard to update in real time based on the year value input by the user, we will now create a callback function. First, we will create a callback decorator. One, update the output component ID parameter with the IDs provided in the dcc. graph function component for all five components we created and set the component property as a figure, like this. Two, and then update the input component ID parameter with the ID and set the property as value.

Three, then create a callback function that uses the input provided to perform the computation. Four, create a graph in this function and return it as an output. Five, lastly, call the run. server function on the app. Seven, to run this application, use the command python3flight-delay.

One, you will get the port number after you run the application. Two, now you need to launch it. Click the Skills Network Toolbox. Three, then click the Launch Application. Four, enter the port number, in this case 8050 in the application port box.

Five, and then click your application. Six, the output should look like this. In this video, we have walked through the lab where you developed a dashboard with dash framework on flight delay time statistics.

</details>

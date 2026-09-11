# Make Dashboards Interactive

## 개요
- 강좌: Data Visualization with Python
- 모듈:  Creating Dashboards with Plotly and Dash
- 재생 시간: 6분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-data-visualization/lecture/8Np77/make-dashboards-interactive)
- 이 비디오를 시청하고 나면 콜백 함수를 설명하고 콜백을 사용하여 핵심 구성 요소와 HTML 구성 요소를 연결하는 방법을 결정할 수 있습니다.
- 콜백 함수는 입력 구성 요소의 속성이 변경될 때마다 Dash에서 자동으로 호출하는 Python 함수입니다.

## 내용
### 핵심 내용
- 이 비디오를 시청하고 나면 콜백 함수를 설명하고 콜백을 사용하여 핵심 구성 요소와 HTML 구성 요소를 연결하는 방법을 결정할 수 있습니다.
- 콜백 함수는 입력 구성 요소의 속성이 변경될 때마다 Dash에서 자동으로 호출하는 Python 함수입니다.
- 기본적으로 입력 컴포넌트 값이 변경될 때마다 데코레이터가 래핑한 콜백 함수가 호출되고, 이어서 애플리케이션 레이아웃의 출력 컴포넌트 하위 컴포넌트가 업데이트됩니다.
- 이 비디오에서는 콜백 함수가 입력 구성요소의 속성이 변경될 때마다 Dash가 자동으로 호출하는 python 함수라는 것을 배웠습니다.
- at app 콜백 데코레이터는 Dash에게 콜백 함수를 호출하도록 알리기 위해 콜백 함수를 장식합니다.
- 입력 컴포넌트 값이 변경될 때마다 콜백 함수는 입력 구성요소와 출력 구성요소를 매개변수로 취하고 연산을 수행하여 출력 성분에 대해 원하는 결과를 반환합니다.

### 한국어 Transcript

[음악] 대화형 대시보드 만들기에 오신 것을 환영합니다. 이 비디오를 시청하고 나면 콜백 함수를 설명하고 콜백을 사용하여 핵심 구성 요소와 HTML 구성 요소를 연결하는 방법을 결정할 수 있습니다. 콜백을 사용하여 Core와 html 컴포넌트를 연결하는 방법을 알아보겠습니다. 콜백 함수는 입력 구성 요소의 속성이 변경될 때마다 Dash에서 자동으로 호출하는 Python 함수입니다. callback 데코레이터로 장식되어 있습니다.

그렇다면 이 데코레이터는 대쉬에게 무엇을 알려줄까요? 기본적으로 입력 컴포넌트 값이 변경될 때마다 데코레이터가 래핑한 콜백 함수가 호출되고, 이어서 애플리케이션 레이아웃의 출력 컴포넌트 하위 컴포넌트가 업데이트됩니다. 콜백 함수 스켈레톤을 살펴보겠습니다. 먼저, 출력 구성요소에 대해 원하는 결과를 반환하는 연산을 수행하는 함수를 생성합니다. callback 데코레이터로 콜백 함수를 장식합니다.

여기에는 두 개의 파라미터가 필요합니다. 하나의 출력값은 콜백 함수에서 반환된 결과를 구성 요소 ID로 설정합니다. 이 설정된 입력값은 콜백 함수에 구성 요소 ID로 제공됩니다. 여기서 입력과 출력을 원하는 속성에 연결합니다. 항공사 데이터를 사용한 예제를 통해 이를 실제로 살펴보겠습니다.

여기의 사례를 사용하여 제공된 입력 연도의 상위 10개 항공사를 추출하십시오. 입력 연도를 기준으로 한 비행 횟수 측면에서 산출량은 달라질 수 있습니다. 먼저 앞서 살펴본 것처럼 필요한 패키지를 가져와서 Pandas Dash 코어 및 html 구성 요소를 가져옵니다. 여기에 새로 추가된 항목은 대시 종속성입니다. Dash 종속 항목에서 콜백 함수에서 사용할 입력과 출력을 가져오고 있습니다.

항공사 데이터를 Pandas 데이터 프레임으로 읽습니다. 앱 시작 시 데이터 프레임을 로드하고 콜백 함수 내에서 읽을 수 있습니다. 컴포넌트를 추가하여 Dash 애플리케이션 레이아웃 설계를 시작하겠습니다. 먼저 html 제목 구성 요소 H1을 사용하여 Dash 앱에 제목을 제공하고 스타일 매개변수를 사용하여 스타일을 지정합니다. Dash () 에 html 분할 및 TextInput 핵심 구성 요소를 추가하고 있습니다.

응용 프로그램의 입력과 출력은 단순히 특정 구성 요소의 속성입니다. 이 예제에서 입력값은 input-yr id를 가진 구성 요소의 value 속성입니다. 콜백 함수에서 이 값을 업데이트할 것입니다. 마지막으로 그래프 코어 컴포넌트가 있는 디비전을 추가하겠습니다. 핵심 구성요소에는 id 형식의 바 플롯이 있으며, 콜백 함수 내에서 이 값을 업데이트할 예정입니다.

콜백 데코레이터 앱을 추가하겠습니다. 콜백에 입력되는 콜백은 id input-yr 및 속성값을 갖는 컴포넌트가 됩니다. 콜백에 대한 출력은 컴포넌트 ID, 바 플롯 및 속성 그림이 됩니다. Component_ID 및 component_property 키워드는 선택 사항이며 명확성을 제공합니다. 다음으로 콜백 함수 get_graph를 정의합니다.

연도를 사용하여 데이터 및 애플리케이션 레이아웃 그래프 업데이트에서 필요한 정보를 추출합니다. 마지막으로 애플리케이션을 실행해 보겠습니다. 연도가 업데이트되면 그래프도 동시에 업데이트됩니다. 두 번째 예는 두 개의 입력이 포함된 콜백입니다. 몇 가지 변경 사항을 제외하면 입력 콜백 1개와 비슷합니다.

컴포넌트 ID input-ab로 텍스트를 하나 더 입력하는 디비전을 추가하겠습니다. 그런 다음 구성 요소 ID input-ab인 새 입력을 목록 내 데코레이터에 추가합니다. 다음으로 콜백 함수 get_graph를 정의하겠습니다. 여기에는 입력된 연도와 입력된 상태가 입력 매개변수로 사용됩니다. 계산을 통해 정보가 추출되고 그래프와 함께 애플리케이션 레이아웃이 업데이트됩니다.

최초 입력 연도는 2010년이고 주는 앨라배마 주 (Al) 입니다. 연도와 주가 업데이트되면서 그래프가 동시에 업데이트되는 것을 확인할 수 있습니다. 이 비디오에서는 콜백 함수가 입력 구성요소의 속성이 변경될 때마다 Dash가 자동으로 호출하는 python 함수라는 것을 배웠습니다. at app 콜백 데코레이터는 Dash에게 콜백 함수를 호출하도록 알리기 위해 콜백 함수를 장식합니다. 입력 컴포넌트 값이 변경될 때마다 콜백 함수는 입력 구성요소와 출력 구성요소를 매개변수로 취하고 연산을 수행하여 출력 성분에 대해 원하는 결과를 반환합니다.

## 예시
- 여기의 사례를 사용하여 제공된 입력 연도의 상위 10개 항공사를 추출하십시오.

## 요약
- 이 비디오에서는 콜백 함수가 입력 구성요소의 속성이 변경될 때마다 Dash가 자동으로 호출하는 python 함수라는 것을 배웠습니다.
- at app 콜백 데코레이터는 Dash에게 콜백 함수를 호출하도록 알리기 위해 콜백 함수를 장식합니다.
- 입력 컴포넌트 값이 변경될 때마다 콜백 함수는 입력 구성요소와 출력 구성요소를 매개변수로 취하고 연산을 수행하여 출력 성분에 대해 원하는 결과를 반환합니다.

<details>
<summary>영문 Transcript 원문</summary>

[MUSIC] Welcome to Make Dashboards Interactive. After watching this video, you'll be able to describe the Callback function, determine how to connect core and HTML components using Callbacks. Let us understand how to connect Core and html components using Callbacks. A callback function is a Python function that is automatically called by Dash whenever an input component's property changes. callback function is decorated with @app.

So what does this decorator tell Dash? Basically, whenever there's a change in the input component value, the callback function wrapped by the decorator is called followed by the update to the output component children in the application layout. Let's look at the callback function skeleton. First, create a function that will perform operations to return the desired result for the output component. Decorate the callback function with @APP.

This takes two parameters. One output, this sets results returned from the callback function to a component id. Two input, this set input is provided to the callback function to a component id. From here, we connect input and output to a desired property. We will see this in action with an example using the airline data.

Use the case here to extract the top ten airline carriers in the provided input year. In terms of the number of flights based on the input year, the output will change. First, we import the required packages as seen before, we'll import pandas Dash core and html components. The new entry here is Dash dependencies. From Dash dependencies, we're importing input and output that we will use in the callback function.

We read the airline data into the Pandas data frame. We load our data frame at the start of the app and it can be read inside the callback function. We will start designing the Dash application layout by adding components. First, we'll provide the title to the Dash app using the html heading component H1 and style it using the style parameter. Next, we're adding an html division and textInput core component in dash.

The inputs and outputs of the application are simply the properties of a particular component. In this example, our input is the value property of the component that has the id input-yr. By default, the value has 2010. We will update this value in our callback function. Lastly, we will add a division with a graph core component.

The core component has bar plot as id, which we will update inside the callback function. Note the component IDs. We will add a callback decorator app. callback input to the callback will be the component with id input-yr and property value. Output to the callback will be the component id, bar-plot and property figure.

Component_id and component_property keywords are optional and provide clarity. Next, we will define the callback function get_graph. The entered year will be the input. Using the year, we extract the required information from data and the application layout graph updates. Lastly, we will run the application.

This is the output of the code our initial input year is 2010. As the year is updated, the graph is getting updated in parallel. The second example is a callback with two inputs. It's similar to one input callback except for a few changes. We will add a division with one more text input with the component id input-ab.

Then add the new input with component id input-ab to the decorator inside a list. Next we'll define callback function get_graph. This takes the entered year and the entered state as input parameters. Computation extracts the information and the application layout updates with the graph. This is the output of the code.

Our initial input year is 2010 and the state is Al, which is Alabama. As the year and state update, you'll observe that the graph gets updated in parallel. In this video, you learned that a callback function is a python function that is automatically called by Dash whenever an input component's property changes. The at app callback decorator decorates the callback function in order to tell Dash to call it. Whenever there's a change in the input component value.

The callback function takes input and output components as parameters and performs operations to return the desired result for the output component.

</details>

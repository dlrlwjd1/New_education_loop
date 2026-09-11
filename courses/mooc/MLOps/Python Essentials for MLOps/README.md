# Python Essentials for MLOps

**Course URL:** [mooc.org/learn/python-essentials-mlops-duke](https://www.mooc.org/learn/python-essentials-mlops-duke)

MOOC / Duke University. "MLOps | Machine Learning Operations" 스페셜라이제이션의 첫 번째 코스(Course 1 of 4)로, MLOps 엔지니어가 매일 쓰는 Python 기초 도구를 5개 모듈로 다룸. 변수·자료구조부터 함수/클래스, Pytest를 이용한 테스트, Pandas/NumPy를 이용한 데이터 처리, 마지막으로 HTTP API와 CLI 도구로 ML 모델을 노출하는 실전 응용까지 진행.

## 모듈 구성
- [Module 1 - Introduction to Python](Module%201%20-%20Introduction%20to%20Python/) — 변수 할당과 재할당, 문자열/정수/실수/불리언/None 타입, if/elif/else와 truthy·falsy 평가, try/except 예외 처리, 리스트·딕셔너리·튜플·세트 생성과 순회, append/insert/extend로 데이터 추가, slicing·pop·remove·get으로 데이터 추출. Practice Quiz/Graded Assignment/Discussion Prompt는 학업 정직성 정책에 따라 건너뜀
- [Module 2 - Python Functions and Classes](Module%202%20-%20Python%20Functions%20and%20Classes/) — 함수 정의와 반환값, 위치/키워드/가변 인자, 제너레이터, 클래스와 생성자(`__init__`)·메서드·클래스 속성 vs 인스턴스 속성·상속, 모듈과 임포트, `if __name__ == "__main__"` 스크립트 관례, venv/pip으로 가상환경과 의존성 관리. Practice Quiz/Graded Assignment는 학업 정직성 정책에 따라 건너뜀
- [Module 3 - Testing in Python](Module%203%20-%20Testing%20in%20Python/) — 테스트의 필요성, `unittest` vs pytest, 파일/함수/클래스 이름 규칙, plain assert 리포팅, 테스트 클래스의 setup/teardown, `@pytest.mark.parametrize`, 테스트 실패 출력 읽는 법, PDB 디버깅, `-x`/`--collect-only`/`pytest-xdist`, `tmpdir` 픽스처. Practice Quiz/Graded Assignment는 학업 정직성 정책에 따라 건너뜀
- [Module 4 - Introduction to Pandas and NumPy](Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/) — DataFrame 생성·로딩(URL/CSV/JSON)·내보내기, `.describe()`/`.info()`/`.groupby()` 탐색적 분석, `.query()` 조건 필터링과 문자열 조작, `.apply()`로 함수 적용, Pandas 시각화, NumPy 배열 생성·reshape/flatten·조건 필터링·스태킹/분할. Practice Quiz/Graded Assignment는 학업 정직성 정책에 따라 건너뜀
- [Module 5 - Applied Python for MLOps](Module%205%20-%20Applied%20Python%20for%20MLOps/) — Azure CLI/ML SDK, Hugging Face Transformers·Datasets, Azure Open Datasets, `sys.argv`/`argparse`/`click`으로 CLI 도구 만들기, `setup.py`(install_requires/entry_points)로 패키징, Flask/FastAPI로 ML 모델 API 구축, HTTP 상태 코드·메서드 모범 사례. Practice Quiz/Graded Assignment는 학업 정직성 정책에 따라 건너뜀

## 진행 상황
- [x] Module 1 — Introduction to Python
- [x] Module 2 — Python Functions and Classes
- [x] Module 3 — Testing in Python
- [x] Module 4 — Introduction to Pandas and NumPy
- [x] Module 5 — Applied Python for MLOps

## 강의 목록

<!-- course-inventory:start -->
### Module 1 - Introduction to Python

- [01 Key Terms - Variables and Types](Module%201%20-%20Introduction%20to%20Python/01%20Key%20Terms%20-%20Variables%20and%20Types.md)
- [02 Variables and Assignments](Module%201%20-%20Introduction%20to%20Python/02%20Variables%20and%20Assignments.md)
- [03 Working with Different Data Types](Module%201%20-%20Introduction%20to%20Python/03%20Working%20with%20Different%20Data%20Types.md)
- [04 Conditionals and Evaluations](Module%201%20-%20Introduction%20to%20Python/04%20Conditionals%20and%20Evaluations.md)
- [05 Catching and Handling Exceptions](Module%201%20-%20Introduction%20to%20Python/05%20Catching%20and%20Handling%20Exceptions.md)
- [06 Variables and Types Lab](Module%201%20-%20Introduction%20to%20Python/06%20Variables%20and%20Types%20Lab.md)
- [07 Key Terms - Python Data Structures](Module%201%20-%20Introduction%20to%20Python/07%20Key%20Terms%20-%20Python%20Data%20Structures.md)
- [08 Introduction to Lists](Module%201%20-%20Introduction%20to%20Python/08%20Introduction%20to%20Lists.md)
- [09 Creating and Iterating Over Lists](Module%201%20-%20Introduction%20to%20Python/09%20Creating%20and%20Iterating%20Over%20Lists.md)
- [10 Introduction to Dictionaries](Module%201%20-%20Introduction%20to%20Python/10%20Introduction%20to%20Dictionaries.md)
- [11 Creating and Iterating Over Dictionaries](Module%201%20-%20Introduction%20to%20Python/11%20Creating%20and%20Iterating%20Over%20Dictionaries.md)
- [12 Other Data Structures - Tuples and Sets](Module%201%20-%20Introduction%20to%20Python/12%20Other%20Data%20Structures%20-%20Tuples%20and%20Sets.md)
- [13 Minimal Python Book - Storing Data](Module%201%20-%20Introduction%20to%20Python/13%20Minimal%20Python%20Book%20-%20Storing%20Data.md)
- [14 Data Structures Lab](Module%201%20-%20Introduction%20to%20Python/14%20Data%20Structures%20Lab.md)
- [15 Key Terms - Adding and Extracting Data](Module%201%20-%20Introduction%20to%20Python/15%20Key%20Terms%20-%20Adding%20and%20Extracting%20Data.md)
- [16 Adding Data to Lists](Module%201%20-%20Introduction%20to%20Python/16%20Adding%20Data%20to%20Lists.md)
- [17 Extracting Data from Lists](Module%201%20-%20Introduction%20to%20Python/17%20Extracting%20Data%20from%20Lists.md)
- [18 Extracting Data from Dictionaries](Module%201%20-%20Introduction%20to%20Python/18%20Extracting%20Data%20from%20Dictionaries.md)
- [19 Adding and Extracting Data Lab & Sandbox](Module%201%20-%20Introduction%20to%20Python/19%20Adding%20and%20Extracting%20Data%20Lab%20%26%20Sandbox.md)
- [20 Week 1 Final Graded Quiz - Python Basics](Module%201%20-%20Introduction%20to%20Python/20%20Week%201%20Final%20Graded%20Quiz%20-%20Python%20Basics.md)

### Module 2 - Python Functions and Classes

- [01 Key Terms - Functions](Module%202%20-%20Python%20Functions%20and%20Classes/01%20Key%20Terms%20-%20Functions.md)
- [02 Function Structure and Values](Module%202%20-%20Python%20Functions%20and%20Classes/02%20Function%20Structure%20and%20Values.md)
- [03 Function Arguments](Module%202%20-%20Python%20Functions%20and%20Classes/03%20Function%20Arguments.md)
- [04 Variable and Keyword Arguments](Module%202%20-%20Python%20Functions%20and%20Classes/04%20Variable%20and%20Keyword%20Arguments.md)
- [05 Functions Lab](Module%202%20-%20Python%20Functions%20and%20Classes/05%20Functions%20Lab.md)
- [06 Minimal Python Book - Create Functions](Module%202%20-%20Python%20Functions%20and%20Classes/06%20Minimal%20Python%20Book%20-%20Create%20Functions.md)
- [07 Generators](Module%202%20-%20Python%20Functions%20and%20Classes/07%20Generators.md)
- [08 Python Functions Sandbox](Module%202%20-%20Python%20Functions%20and%20Classes/08%20Python%20Functions%20Sandbox.md)
- [09 Key Terms - Classes](Module%202%20-%20Python%20Functions%20and%20Classes/09%20Key%20Terms%20-%20Classes.md)
- [10 Introduction to Classes](Module%202%20-%20Python%20Functions%20and%20Classes/10%20Introduction%20to%20Classes.md)
- [11 Using a Constructor](Module%202%20-%20Python%20Functions%20and%20Classes/11%20Using%20a%20Constructor.md)
- [12 Adding Methods](Module%202%20-%20Python%20Functions%20and%20Classes/12%20Adding%20Methods.md)
- [13 Class Inheritance](Module%202%20-%20Python%20Functions%20and%20Classes/13%20Class%20Inheritance.md)
- [14 Inheritance (외부 읽기 자료)](Module%202%20-%20Python%20Functions%20and%20Classes/14%20Inheritance%20%28%EC%99%B8%EB%B6%80%20%EC%9D%BD%EA%B8%B0%20%EC%9E%90%EB%A3%8C%29.md)
- [15 Python Classes Lab](Module%202%20-%20Python%20Functions%20and%20Classes/15%20Python%20Classes%20Lab.md)
- [16 Ungraded Lab Sandbox Key Terms](Module%202%20-%20Python%20Functions%20and%20Classes/16%20Ungraded%20Lab%20Sandbox%20Key%20Terms.md)
- [17 Python Classes Sandbox](Module%202%20-%20Python%20Functions%20and%20Classes/17%20Python%20Classes%20Sandbox.md)
- [18 Key Terms - Modules](Module%202%20-%20Python%20Functions%20and%20Classes/18%20Key%20Terms%20-%20Modules.md)
- [19 Introduction to Python Modules](Module%202%20-%20Python%20Functions%20and%20Classes/19%20Introduction%20to%20Python%20Modules.md)
- [20 Working with Imports](Module%202%20-%20Python%20Functions%20and%20Classes/20%20Working%20with%20Imports.md)
- [21 Working with Python Scripts](Module%202%20-%20Python%20Functions%20and%20Classes/21%20Working%20with%20Python%20Scripts.md)
- [22 Virtual Environments and Dependencies](Module%202%20-%20Python%20Functions%20and%20Classes/22%20Virtual%20Environments%20and%20Dependencies.md)
- [23 Python Modules Lab](Module%202%20-%20Python%20Functions%20and%20Classes/23%20Python%20Modules%20Lab.md)
- [24 Python for Beginners Learning Path](Module%202%20-%20Python%20Functions%20and%20Classes/24%20Python%20for%20Beginners%20Learning%20Path.md)
- [25 Understanding 3rd Party Packaging](Module%202%20-%20Python%20Functions%20and%20Classes/25%20Understanding%203rd%20Party%20Packaging.md)
- [26 Python Functions and Classes (Graded Assignment)](Module%202%20-%20Python%20Functions%20and%20Classes/26%20Python%20Functions%20and%20Classes%20%28Graded%20Assignment%29.md)

### Module 3 - Testing in Python

- [01 Key Terms - Testing](Module%203%20-%20Testing%20in%20Python/01%20Key%20Terms%20-%20Testing.md)
- [02 Motivations for Testing in Python](Module%203%20-%20Testing%20in%20Python/02%20Motivations%20for%20Testing%20in%20Python.md)
- [03 Testing Conventions](Module%203%20-%20Testing%20in%20Python/03%20Testing%20Conventions.md)
- [04 Testing with pytest](Module%203%20-%20Testing%20in%20Python/04%20Testing%20with%20pytest.md)
- [05 Testing Conventions Lab](Module%203%20-%20Testing%20in%20Python/05%20Testing%20Conventions%20Lab.md)
- [06 Key Terms - Writing Useful Tests](Module%203%20-%20Testing%20in%20Python/06%20Key%20Terms%20-%20Writing%20Useful%20Tests.md)
- [07 Using Plain Asserts in pytest](Module%203%20-%20Testing%20in%20Python/07%20Using%20Plain%20Asserts%20in%20pytest.md)
- [08 Writing Test Classes](Module%203%20-%20Testing%20in%20Python/08%20Writing%20Test%20Classes.md)
- [09 Test Classes vs Test Functions](Module%203%20-%20Testing%20in%20Python/09%20Test%20Classes%20vs%20Test%20Functions.md)
- [10 Parameterizing Tests](Module%203%20-%20Testing%20in%20Python/10%20Parameterizing%20Tests.md)
- [11 Testing with Pytest Lab](Module%203%20-%20Testing%20in%20Python/11%20Testing%20with%20Pytest%20Lab.md)
- [12 Key Terms - Testing Failures](Module%203%20-%20Testing%20in%20Python/12%20Key%20Terms%20-%20Testing%20Failures.md)
- [13 Test Failure Output](Module%203%20-%20Testing%20in%20Python/13%20Test%20Failure%20Output.md)
- [14 Python Debugging with PDB](Module%203%20-%20Testing%20in%20Python/14%20Python%20Debugging%20with%20PDB.md)
- [15 Other pytest Runner Options](Module%203%20-%20Testing%20in%20Python/15%20Other%20pytest%20Runner%20Options.md)
- [16 pytest Fixtures](Module%203%20-%20Testing%20in%20Python/16%20pytest%20Fixtures.md)
- [17 Test Failures Lab](Module%203%20-%20Testing%20in%20Python/17%20Test%20Failures%20Lab.md)
- [18 Python Testing (Graded Assignment)](Module%203%20-%20Testing%20in%20Python/18%20Python%20Testing%20%28Graded%20Assignment%29.md)

### Module 4 - Introduction to Pandas and NumPy

- [01 Key Terms - Pandas](Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/01%20Key%20Terms%20-%20Pandas.md)
- [02 Introduction to Pandas](Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/02%20Introduction%20to%20Pandas.md)
- [03 Loading Data into Pandas](Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/03%20Loading%20Data%20into%20Pandas.md)
- [04 Writing Data from Pandas DataFrames](Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/04%20Writing%20Data%20from%20Pandas%20DataFrames.md)
- [05 Exploratory Analysis with Pandas](Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/05%20Exploratory%20Analysis%20with%20Pandas.md)
- [06 Introduction to Pandas Lab](Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/06%20Introduction%20to%20Pandas%20Lab.md)
- [07 Key Terms - DataFrames](Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/07%20Key%20Terms%20-%20DataFrames.md)
- [08 Common DataFrame Operations](Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/08%20Common%20DataFrame%20Operations.md)
- [09 Manipulating Text in DataFrames](Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/09%20Manipulating%20Text%20in%20DataFrames.md)
- [10 Applying Functions with Pandas](Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/10%20Applying%20Functions%20with%20Pandas.md)
- [11 Visualizing Data with Pandas](Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/11%20Visualizing%20Data%20with%20Pandas.md)
- [12 Pandas DataFrames Lab](Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/12%20Pandas%20DataFrames%20Lab.md)
- [13 Key Terms - NumPy](Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/13%20Key%20Terms%20-%20NumPy.md)
- [14 Introduction to NumPy Arrays](Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/14%20Introduction%20to%20NumPy%20Arrays.md)
- [15 Common NumPy Array Operations](Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/15%20Common%20NumPy%20Array%20Operations.md)
- [16 More NumPy Array Operations](Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/16%20More%20NumPy%20Array%20Operations.md)
- [17 NumPy Lab](Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/17%20NumPy%20Lab.md)
- [18 Pandas and NumPy (Graded Assignment)](Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/18%20Pandas%20and%20NumPy%20%28Graded%20Assignment%29.md)

### Module 5 - Applied Python for MLOps

- [01 Key Terms - APIs and SDKs](Module%205%20-%20Applied%20Python%20for%20MLOps/01%20Key%20Terms%20-%20APIs%20and%20SDKs.md)
- [02 Installing Azure Command-Line Interface (CLI)](Module%205%20-%20Applied%20Python%20for%20MLOps/02%20Installing%20Azure%20Command-Line%20Interface%20%28CLI%29.md)
- [03 AzureML Studio with Python](Module%205%20-%20Applied%20Python%20for%20MLOps/03%20AzureML%20Studio%20with%20Python.md)
- [04 Hugging Face Transformers](Module%205%20-%20Applied%20Python%20for%20MLOps/04%20Hugging%20Face%20Transformers.md)
- [05 Hugging Face Datasets](Module%205%20-%20Applied%20Python%20for%20MLOps/05%20Hugging%20Face%20Datasets.md)
- [06 Azure Open Datasets](Module%205%20-%20Applied%20Python%20for%20MLOps/06%20Azure%20Open%20Datasets.md)
- [07 Key Terms - CLI Tools](Module%205%20-%20Applied%20Python%20for%20MLOps/07%20Key%20Terms%20-%20CLI%20Tools.md)
- [08 Creating a Single File Script](Module%205%20-%20Applied%20Python%20for%20MLOps/08%20Creating%20a%20Single%20File%20Script.md)
- [09 Using the ArgParse Framework](Module%205%20-%20Applied%20Python%20for%20MLOps/09%20Using%20the%20ArgParse%20Framework.md)
- [10 Declaring Dependencies](Module%205%20-%20Applied%20Python%20for%20MLOps/10%20Declaring%20Dependencies.md)
- [11 Using the Click Framework](Module%205%20-%20Applied%20Python%20for%20MLOps/11%20Using%20the%20Click%20Framework.md)
- [12 Packaging your Project](Module%205%20-%20Applied%20Python%20for%20MLOps/12%20Packaging%20your%20Project.md)
- [13 Solving a Machine Learning Problem with a CLI Tool](Module%205%20-%20Applied%20Python%20for%20MLOps/13%20Solving%20a%20Machine%20Learning%20Problem%20with%20a%20CLI%20Tool.md)
- [14 Introduction to Flask Framework](Module%205%20-%20Applied%20Python%20for%20MLOps/14%20Introduction%20to%20Flask%20Framework.md)
- [15 Building an API with Flask](Module%205%20-%20Applied%20Python%20for%20MLOps/15%20Building%20an%20API%20with%20Flask.md)
- [16 Introduction to the FastAPI Framework](Module%205%20-%20Applied%20Python%20for%20MLOps/16%20Introduction%20to%20the%20FastAPI%20Framework.md)
- [17 Building an API with FastAPI](Module%205%20-%20Applied%20Python%20for%20MLOps/17%20Building%20an%20API%20with%20FastAPI.md)
- [18 Python API Best Practices](Module%205%20-%20Applied%20Python%20for%20MLOps/18%20Python%20API%20Best%20Practices.md)
- [19 MLOps CLI Lab](Module%205%20-%20Applied%20Python%20for%20MLOps/19%20MLOps%20CLI%20Lab.md)
- [20 Automation with Python (Graded Assignment)](Module%205%20-%20Applied%20Python%20for%20MLOps/20%20Automation%20with%20Python%20%28Graded%20Assignment%29.md)
- [21 Key Terms - Building ML APIs](Module%205%20-%20Applied%20Python%20for%20MLOps/21%20Key%20Terms%20-%20Building%20ML%20APIs.md)
- [22 External Lab - GPU Powered MLOps Template](Module%205%20-%20Applied%20Python%20for%20MLOps/22%20External%20Lab%20-%20GPU%20Powered%20MLOps%20Template.md)
- [23 Next Steps](Module%205%20-%20Applied%20Python%20for%20MLOps/23%20Next%20Steps.md)
- [24 Final Sandboxes (Linux Desktop, Jupyter, VSCode)](Module%205%20-%20Applied%20Python%20for%20MLOps/24%20Final%20Sandboxes%20%28Linux%20Desktop%2C%20Jupyter%2C%20VSCode%29.md)

<!-- course-inventory:end -->

# T1 Phase 1 — 파이썬 프로그래밍 기초

> 학부 교과 **컴퓨터프로그래밍(1학년 1학기, 실습 3학점) · 파이썬응용(1학년 2학기, 이론실습병행 3학점)**
> 교과목해설: "파이썬 응용을 위한 활용 프로그램 이해 및 실습"

- 목표: 남이 쓴 파이썬 코드를 읽고 고칠 수 있고, 외부 데이터를 받아 처리하는 스크립트를 처음부터 끝까지 혼자 쓴다.
- 분량: 약 20시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 리스트·딕셔너리·튜플·집합 중 어떤 것을 쓸지 상황을 보고 고른다
- 함수와 클래스로 코드를 나누고, 왜 나눴는지 설명한다
- 파일과 REST API에서 데이터를 읽어 pandas DataFrame으로 만든다
- 실패하는 테스트를 먼저 쓰고 통과시키는 흐름을 한 번은 직접 해 본다
- 예외를 잡아 프로그램이 죽지 않게 만든다

> **환경**: 파이썬 3.10+ 와 Jupyter. 저장소의 **Deep Learning Specialization lab** 에 이미 venv가 잡혀 있으니 그대로 써도 된다.

## 1-A. 파이썬 한 바퀴

메인: IBM Data Science, `04 Python for Data Science, AI & Development`

Module 1 — 기초 문법과 타입

- [ ] [01 Course Introduction.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/04%20Python%20for%20Data%20Science,%20AI%20&%20Development/Module%201%20-%20Python%20Basics/01%20Course%20Introduction.md)
- [ ] [02 Introduction to Python.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/04%20Python%20for%20Data%20Science,%20AI%20&%20Development/Module%201%20-%20Python%20Basics/02%20Introduction%20to%20Python.md)
- [ ] [03 Getting Started with Jupyter.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/04%20Python%20for%20Data%20Science,%20AI%20&%20Development/Module%201%20-%20Python%20Basics/03%20Getting%20Started%20with%20Jupyter.md)
- [ ] [04 Types.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/04%20Python%20for%20Data%20Science,%20AI%20&%20Development/Module%201%20-%20Python%20Basics/04%20Types.md)
- [ ] [05 Expressions and Variables.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/04%20Python%20for%20Data%20Science,%20AI%20&%20Development/Module%201%20-%20Python%20Basics/05%20Expressions%20and%20Variables.md)
- [ ] [06 String Operations.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/04%20Python%20for%20Data%20Science,%20AI%20&%20Development/Module%201%20-%20Python%20Basics/06%20String%20Operations.md)

Module 2 — 자료구조

- [ ] [01 Lists and Tuples.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/04%20Python%20for%20Data%20Science,%20AI%20&%20Development/Module%202%20-%20Python%20Data%20Structures/01%20Lists%20and%20Tuples.md)
- [ ] [02 Dictionaries.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/04%20Python%20for%20Data%20Science,%20AI%20&%20Development/Module%202%20-%20Python%20Data%20Structures/02%20Dictionaries.md)
- [ ] [03 Sets.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/04%20Python%20for%20Data%20Science,%20AI%20&%20Development/Module%202%20-%20Python%20Data%20Structures/03%20Sets.md)

Module 3 — 조건·반복·함수·클래스

- [ ] [01 Conditions and Branching.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/04%20Python%20for%20Data%20Science,%20AI%20&%20Development/Module%203%20-%20Python%20Programming%20Fundamentals/01%20Conditions%20and%20Branching.md)
- [ ] [02 Loops.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/04%20Python%20for%20Data%20Science,%20AI%20&%20Development/Module%203%20-%20Python%20Programming%20Fundamentals/02%20Loops.md)
- [ ] [03 Functions.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/04%20Python%20for%20Data%20Science,%20AI%20&%20Development/Module%203%20-%20Python%20Programming%20Fundamentals/03%20Functions.md)
- [ ] [04 Exception Handling.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/04%20Python%20for%20Data%20Science,%20AI%20&%20Development/Module%203%20-%20Python%20Programming%20Fundamentals/04%20Exception%20Handling.md)
- [ ] [05 Objects and Classes.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/04%20Python%20for%20Data%20Science,%20AI%20&%20Development/Module%203%20-%20Python%20Programming%20Fundamentals/05%20Objects%20and%20Classes.md)

## 1-B. 파일·데이터·API

메인: IBM Data Science, `04 Python for Data Science` Module 4~5

Module 4 — 파일 입출력과 pandas·NumPy

- [ ] [01 Reading Files with Open.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/04%20Python%20for%20Data%20Science,%20AI%20&%20Development/Module%204%20-%20Working%20with%20Data%20in%20Python/01%20Reading%20Files%20with%20Open.md)
- [ ] [02 Writing Files with Open.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/04%20Python%20for%20Data%20Science,%20AI%20&%20Development/Module%204%20-%20Working%20with%20Data%20in%20Python/02%20Writing%20Files%20with%20Open.md)
- [ ] [03 Pandas - Loading Data.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/04%20Python%20for%20Data%20Science,%20AI%20&%20Development/Module%204%20-%20Working%20with%20Data%20in%20Python/03%20Pandas%20-%20Loading%20Data.md)
- [ ] [04 Pandas - Working with and Saving Data.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/04%20Python%20for%20Data%20Science,%20AI%20&%20Development/Module%204%20-%20Working%20with%20Data%20in%20Python/04%20Pandas%20-%20Working%20with%20and%20Saving%20Data.md)
- [ ] [05 One Dimensional Numpy.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/04%20Python%20for%20Data%20Science,%20AI%20&%20Development/Module%204%20-%20Working%20with%20Data%20in%20Python/05%20One%20Dimensional%20Numpy.md)
- [ ] [06 Two Dimensional Numpy.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/04%20Python%20for%20Data%20Science,%20AI%20&%20Development/Module%204%20-%20Working%20with%20Data%20in%20Python/06%20Two%20Dimensional%20Numpy.md)

Module 5 — API 호출과 웹 스크래핑

- [ ] [01 Application Program Interface.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/04%20Python%20for%20Data%20Science,%20AI%20&%20Development/Module%205%20-%20APIs%20and%20Data%20Collection/01%20Application%20Program%20Interface.md)
- [ ] [02 REST APIs & HTTP Requests - Part 1.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/04%20Python%20for%20Data%20Science,%20AI%20&%20Development/Module%205%20-%20APIs%20and%20Data%20Collection/02%20REST%20APIs%20&%20HTTP%20Requests%20-%20Part%201.md)
- [ ] [03 REST APIs & HTTP Requests - Part 2.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/04%20Python%20for%20Data%20Science,%20AI%20&%20Development/Module%205%20-%20APIs%20and%20Data%20Collection/03%20REST%20APIs%20&%20HTTP%20Requests%20-%20Part%202.md)
- [ ] [04 (Optional) HTML for Web Scraping.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/04%20Python%20for%20Data%20Science,%20AI%20&%20Development/Module%205%20-%20APIs%20and%20Data%20Collection/04%20%28Optional%29%20HTML%20for%20Web%20Scraping.md)
- [ ] [05 (Optional) Web Scraping.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/04%20Python%20for%20Data%20Science,%20AI%20&%20Development/Module%205%20-%20APIs%20and%20Data%20Collection/05%20%28Optional%29%20Web%20Scraping.md)
- [ ] [06 Working with Different File Formats.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/04%20Python%20for%20Data%20Science,%20AI%20&%20Development/Module%205%20-%20APIs%20and%20Data%20Collection/06%20Working%20with%20Different%20File%20Formats.md)

## 1-C. 함수·클래스·테스트 다시 보기

함께 보기: Python Essentials for MLOps (같은 문법을 **엔지니어링 관점**에서 다시 본다. 특히 Module 3의 테스트는 IBM 쪽에 없는 내용이다)

- [ ] [01 Key Terms - Variables and Types.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%201%20-%20Introduction%20to%20Python/01%20Key%20Terms%20-%20Variables%20and%20Types.md)
- [ ] [02 Variables and Assignments.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%201%20-%20Introduction%20to%20Python/02%20Variables%20and%20Assignments.md)
- [ ] [03 Working with Different Data Types.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%201%20-%20Introduction%20to%20Python/03%20Working%20with%20Different%20Data%20Types.md)
- [ ] [04 Conditionals and Evaluations.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%201%20-%20Introduction%20to%20Python/04%20Conditionals%20and%20Evaluations.md)
- [ ] [05 Catching and Handling Exceptions.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%201%20-%20Introduction%20to%20Python/05%20Catching%20and%20Handling%20Exceptions.md)
- [ ] [06 Variables and Types Lab.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%201%20-%20Introduction%20to%20Python/06%20Variables%20and%20Types%20Lab.md)
- [ ] [07 Key Terms - Python Data Structures.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%201%20-%20Introduction%20to%20Python/07%20Key%20Terms%20-%20Python%20Data%20Structures.md)
- [ ] [08 Introduction to Lists.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%201%20-%20Introduction%20to%20Python/08%20Introduction%20to%20Lists.md)
- [ ] [09 Creating and Iterating Over Lists.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%201%20-%20Introduction%20to%20Python/09%20Creating%20and%20Iterating%20Over%20Lists.md)
- [ ] [10 Introduction to Dictionaries.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%201%20-%20Introduction%20to%20Python/10%20Introduction%20to%20Dictionaries.md)
- [ ] [11 Creating and Iterating Over Dictionaries.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%201%20-%20Introduction%20to%20Python/11%20Creating%20and%20Iterating%20Over%20Dictionaries.md)
- [ ] [12 Other Data Structures - Tuples and Sets.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%201%20-%20Introduction%20to%20Python/12%20Other%20Data%20Structures%20-%20Tuples%20and%20Sets.md)
- [ ] [13 Minimal Python Book - Storing Data.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%201%20-%20Introduction%20to%20Python/13%20Minimal%20Python%20Book%20-%20Storing%20Data.md)
- [ ] [14 Data Structures Lab.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%201%20-%20Introduction%20to%20Python/14%20Data%20Structures%20Lab.md)
- [ ] [15 Key Terms - Adding and Extracting Data.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%201%20-%20Introduction%20to%20Python/15%20Key%20Terms%20-%20Adding%20and%20Extracting%20Data.md)
- [ ] [16 Adding Data to Lists.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%201%20-%20Introduction%20to%20Python/16%20Adding%20Data%20to%20Lists.md)
- [ ] [17 Extracting Data from Lists.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%201%20-%20Introduction%20to%20Python/17%20Extracting%20Data%20from%20Lists.md)
- [ ] [18 Extracting Data from Dictionaries.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%201%20-%20Introduction%20to%20Python/18%20Extracting%20Data%20from%20Dictionaries.md)
- [ ] [19 Adding and Extracting Data Lab & Sandbox.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%201%20-%20Introduction%20to%20Python/19%20Adding%20and%20Extracting%20Data%20Lab%20&%20Sandbox.md)
- [ ] [20 Week 1 Final Graded Quiz - Python Basics.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%201%20-%20Introduction%20to%20Python/20%20Week%201%20Final%20Graded%20Quiz%20-%20Python%20Basics.md)
- [ ] [01 Key Terms - Functions.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%202%20-%20Python%20Functions%20and%20Classes/01%20Key%20Terms%20-%20Functions.md)
- [ ] [02 Function Structure and Values.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%202%20-%20Python%20Functions%20and%20Classes/02%20Function%20Structure%20and%20Values.md)
- [ ] [03 Function Arguments.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%202%20-%20Python%20Functions%20and%20Classes/03%20Function%20Arguments.md)
- [ ] [04 Variable and Keyword Arguments.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%202%20-%20Python%20Functions%20and%20Classes/04%20Variable%20and%20Keyword%20Arguments.md)
- [ ] [05 Functions Lab.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%202%20-%20Python%20Functions%20and%20Classes/05%20Functions%20Lab.md)
- [ ] [06 Minimal Python Book - Create Functions.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%202%20-%20Python%20Functions%20and%20Classes/06%20Minimal%20Python%20Book%20-%20Create%20Functions.md)
- [ ] [07 Generators.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%202%20-%20Python%20Functions%20and%20Classes/07%20Generators.md)
- [ ] [08 Python Functions Sandbox.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%202%20-%20Python%20Functions%20and%20Classes/08%20Python%20Functions%20Sandbox.md)
- [ ] [09 Key Terms - Classes.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%202%20-%20Python%20Functions%20and%20Classes/09%20Key%20Terms%20-%20Classes.md)
- [ ] [10 Introduction to Classes.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%202%20-%20Python%20Functions%20and%20Classes/10%20Introduction%20to%20Classes.md)
- [ ] [11 Using a Constructor.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%202%20-%20Python%20Functions%20and%20Classes/11%20Using%20a%20Constructor.md)
- [ ] [12 Adding Methods.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%202%20-%20Python%20Functions%20and%20Classes/12%20Adding%20Methods.md)
- [ ] [13 Class Inheritance.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%202%20-%20Python%20Functions%20and%20Classes/13%20Class%20Inheritance.md)
- [ ] [14 Inheritance (외부 읽기 자료).md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%202%20-%20Python%20Functions%20and%20Classes/14%20Inheritance%20%28%EC%99%B8%EB%B6%80%20%EC%9D%BD%EA%B8%B0%20%EC%9E%90%EB%A3%8C%29.md)
- [ ] [15 Python Classes Lab.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%202%20-%20Python%20Functions%20and%20Classes/15%20Python%20Classes%20Lab.md)
- [ ] [16 Ungraded Lab Sandbox Key Terms.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%202%20-%20Python%20Functions%20and%20Classes/16%20Ungraded%20Lab%20Sandbox%20Key%20Terms.md)
- [ ] [17 Python Classes Sandbox.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%202%20-%20Python%20Functions%20and%20Classes/17%20Python%20Classes%20Sandbox.md)
- [ ] [18 Key Terms - Modules.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%202%20-%20Python%20Functions%20and%20Classes/18%20Key%20Terms%20-%20Modules.md)
- [ ] [19 Introduction to Python Modules.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%202%20-%20Python%20Functions%20and%20Classes/19%20Introduction%20to%20Python%20Modules.md)
- [ ] [20 Working with Imports.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%202%20-%20Python%20Functions%20and%20Classes/20%20Working%20with%20Imports.md)
- [ ] [21 Working with Python Scripts.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%202%20-%20Python%20Functions%20and%20Classes/21%20Working%20with%20Python%20Scripts.md)
- [ ] [22 Virtual Environments and Dependencies.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%202%20-%20Python%20Functions%20and%20Classes/22%20Virtual%20Environments%20and%20Dependencies.md)
- [ ] [23 Python Modules Lab.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%202%20-%20Python%20Functions%20and%20Classes/23%20Python%20Modules%20Lab.md)
- [ ] [24 Python for Beginners Learning Path.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%202%20-%20Python%20Functions%20and%20Classes/24%20Python%20for%20Beginners%20Learning%20Path.md)
- [ ] [25 Understanding 3rd Party Packaging.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%202%20-%20Python%20Functions%20and%20Classes/25%20Understanding%203rd%20Party%20Packaging.md)
- [ ] [26 Python Functions and Classes (Graded Assignment).md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%202%20-%20Python%20Functions%20and%20Classes/26%20Python%20Functions%20and%20Classes%20%28Graded%20Assignment%29.md)
- [ ] [01 Key Terms - Testing.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%203%20-%20Testing%20in%20Python/01%20Key%20Terms%20-%20Testing.md)
- [ ] [02 Motivations for Testing in Python.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%203%20-%20Testing%20in%20Python/02%20Motivations%20for%20Testing%20in%20Python.md)
- [ ] [03 Testing Conventions.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%203%20-%20Testing%20in%20Python/03%20Testing%20Conventions.md)
- [ ] [04 Testing with pytest.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%203%20-%20Testing%20in%20Python/04%20Testing%20with%20pytest.md)
- [ ] [05 Testing Conventions Lab.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%203%20-%20Testing%20in%20Python/05%20Testing%20Conventions%20Lab.md)
- [ ] [06 Key Terms - Writing Useful Tests.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%203%20-%20Testing%20in%20Python/06%20Key%20Terms%20-%20Writing%20Useful%20Tests.md)
- [ ] [07 Using Plain Asserts in pytest.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%203%20-%20Testing%20in%20Python/07%20Using%20Plain%20Asserts%20in%20pytest.md)
- [ ] [08 Writing Test Classes.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%203%20-%20Testing%20in%20Python/08%20Writing%20Test%20Classes.md)
- [ ] [09 Test Classes vs Test Functions.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%203%20-%20Testing%20in%20Python/09%20Test%20Classes%20vs%20Test%20Functions.md)
- [ ] [10 Parameterizing Tests.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%203%20-%20Testing%20in%20Python/10%20Parameterizing%20Tests.md)
- [ ] [11 Testing with Pytest Lab.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%203%20-%20Testing%20in%20Python/11%20Testing%20with%20Pytest%20Lab.md)
- [ ] [12 Key Terms - Testing Failures.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%203%20-%20Testing%20in%20Python/12%20Key%20Terms%20-%20Testing%20Failures.md)
- [ ] [13 Test Failure Output.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%203%20-%20Testing%20in%20Python/13%20Test%20Failure%20Output.md)
- [ ] [14 Python Debugging with PDB.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%203%20-%20Testing%20in%20Python/14%20Python%20Debugging%20with%20PDB.md)
- [ ] [15 Other pytest Runner Options.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%203%20-%20Testing%20in%20Python/15%20Other%20pytest%20Runner%20Options.md)
- [ ] [16 pytest Fixtures.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%203%20-%20Testing%20in%20Python/16%20pytest%20Fixtures.md)
- [ ] [17 Test Failures Lab.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%203%20-%20Testing%20in%20Python/17%20Test%20Failures%20Lab.md)
- [ ] [18 Python Testing (Graded Assignment).md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%203%20-%20Testing%20in%20Python/18%20Python%20Testing%20%28Graded%20Assignment%29.md)
- [ ] [01 Key Terms - Pandas.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/01%20Key%20Terms%20-%20Pandas.md)
- [ ] [02 Introduction to Pandas.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/02%20Introduction%20to%20Pandas.md)
- [ ] [03 Loading Data into Pandas.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/03%20Loading%20Data%20into%20Pandas.md)
- [ ] [04 Writing Data from Pandas DataFrames.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/04%20Writing%20Data%20from%20Pandas%20DataFrames.md)
- [ ] [05 Exploratory Analysis with Pandas.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/05%20Exploratory%20Analysis%20with%20Pandas.md)
- [ ] [06 Introduction to Pandas Lab.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/06%20Introduction%20to%20Pandas%20Lab.md)
- [ ] [07 Key Terms - DataFrames.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/07%20Key%20Terms%20-%20DataFrames.md)
- [ ] [08 Common DataFrame Operations.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/08%20Common%20DataFrame%20Operations.md)
- [ ] [09 Manipulating Text in DataFrames.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/09%20Manipulating%20Text%20in%20DataFrames.md)
- [ ] [10 Applying Functions with Pandas.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/10%20Applying%20Functions%20with%20Pandas.md)
- [ ] [11 Visualizing Data with Pandas.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/11%20Visualizing%20Data%20with%20Pandas.md)
- [ ] [12 Pandas DataFrames Lab.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/12%20Pandas%20DataFrames%20Lab.md)
- [ ] [13 Key Terms - NumPy.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/13%20Key%20Terms%20-%20NumPy.md)
- [ ] [14 Introduction to NumPy Arrays.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/14%20Introduction%20to%20NumPy%20Arrays.md)
- [ ] [15 Common NumPy Array Operations.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/15%20Common%20NumPy%20Array%20Operations.md)
- [ ] [16 More NumPy Array Operations.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/16%20More%20NumPy%20Array%20Operations.md)
- [ ] [17 NumPy Lab.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/17%20NumPy%20Lab.md)
- [ ] [18 Pandas and NumPy (Graded Assignment).md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%204%20-%20Introduction%20to%20Pandas%20and%20NumPy/18%20Pandas%20and%20NumPy%20%28Graded%20Assignment%29.md)
- [ ] [01 Key Terms - APIs and SDKs.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%205%20-%20Applied%20Python%20for%20MLOps/01%20Key%20Terms%20-%20APIs%20and%20SDKs.md)
- [ ] [02 Installing Azure Command-Line Interface (CLI).md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%205%20-%20Applied%20Python%20for%20MLOps/02%20Installing%20Azure%20Command-Line%20Interface%20%28CLI%29.md)
- [ ] [03 AzureML Studio with Python.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%205%20-%20Applied%20Python%20for%20MLOps/03%20AzureML%20Studio%20with%20Python.md)
- [ ] [04 Hugging Face Transformers.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%205%20-%20Applied%20Python%20for%20MLOps/04%20Hugging%20Face%20Transformers.md)
- [ ] [05 Hugging Face Datasets.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%205%20-%20Applied%20Python%20for%20MLOps/05%20Hugging%20Face%20Datasets.md)
- [ ] [06 Azure Open Datasets.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%205%20-%20Applied%20Python%20for%20MLOps/06%20Azure%20Open%20Datasets.md)
- [ ] [07 Key Terms - CLI Tools.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%205%20-%20Applied%20Python%20for%20MLOps/07%20Key%20Terms%20-%20CLI%20Tools.md)
- [ ] [08 Creating a Single File Script.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%205%20-%20Applied%20Python%20for%20MLOps/08%20Creating%20a%20Single%20File%20Script.md)
- [ ] [09 Using the ArgParse Framework.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%205%20-%20Applied%20Python%20for%20MLOps/09%20Using%20the%20ArgParse%20Framework.md)
- [ ] [10 Declaring Dependencies.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%205%20-%20Applied%20Python%20for%20MLOps/10%20Declaring%20Dependencies.md)
- [ ] [11 Using the Click Framework.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%205%20-%20Applied%20Python%20for%20MLOps/11%20Using%20the%20Click%20Framework.md)
- [ ] [12 Packaging your Project.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%205%20-%20Applied%20Python%20for%20MLOps/12%20Packaging%20your%20Project.md)
- [ ] [13 Solving a Machine Learning Problem with a CLI Tool.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%205%20-%20Applied%20Python%20for%20MLOps/13%20Solving%20a%20Machine%20Learning%20Problem%20with%20a%20CLI%20Tool.md)
- [ ] [14 Introduction to Flask Framework.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%205%20-%20Applied%20Python%20for%20MLOps/14%20Introduction%20to%20Flask%20Framework.md)
- [ ] [15 Building an API with Flask.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%205%20-%20Applied%20Python%20for%20MLOps/15%20Building%20an%20API%20with%20Flask.md)
- [ ] [16 Introduction to the FastAPI Framework.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%205%20-%20Applied%20Python%20for%20MLOps/16%20Introduction%20to%20the%20FastAPI%20Framework.md)
- [ ] [17 Building an API with FastAPI.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%205%20-%20Applied%20Python%20for%20MLOps/17%20Building%20an%20API%20with%20FastAPI.md)
- [ ] [18 Python API Best Practices.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%205%20-%20Applied%20Python%20for%20MLOps/18%20Python%20API%20Best%20Practices.md)
- [ ] [19 MLOps CLI Lab.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%205%20-%20Applied%20Python%20for%20MLOps/19%20MLOps%20CLI%20Lab.md)
- [ ] [20 Automation with Python (Graded Assignment).md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%205%20-%20Applied%20Python%20for%20MLOps/20%20Automation%20with%20Python%20%28Graded%20Assignment%29.md)
- [ ] [21 Key Terms - Building ML APIs.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%205%20-%20Applied%20Python%20for%20MLOps/21%20Key%20Terms%20-%20Building%20ML%20APIs.md)
- [ ] [22 External Lab - GPU Powered MLOps Template.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%205%20-%20Applied%20Python%20for%20MLOps/22%20External%20Lab%20-%20GPU%20Powered%20MLOps%20Template.md)
- [ ] [23 Next Steps.md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%205%20-%20Applied%20Python%20for%20MLOps/23%20Next%20Steps.md)
- [ ] [24 Final Sandboxes (Linux Desktop, Jupyter, VSCode).md](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/Module%205%20-%20Applied%20Python%20for%20MLOps/24%20Final%20Sandboxes%20%28Linux%20Desktop,%20Jupyter,%20VSCode%29.md)

## 1-D. 데이터 분석 문맥의 파이썬

함께 보기: Data Analytics Course 3 (선택 — 위 두 강좌를 다 봤다면 훑고 넘어가도 된다)

- [ ] [01 Welcome to Course 3.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2001%20Python%20fundamentals/01%20Welcome%20to%20Course%203.md)
- [ ] [02 Module 1 Introduction.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2001%20Python%20fundamentals/02%20Module%201%20Introduction.md)
- [ ] [03 Computer Programming.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2001%20Python%20fundamentals/03%20Computer%20Programming.md)
- [ ] [04 Navigating the Jupyter Notebook Environment.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2001%20Python%20fundamentals/04%20Navigating%20the%20Jupyter%20Notebook%20Environment.md)
- [ ] [05 Input, Processing, Output.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2001%20Python%20fundamentals/05%20Input,%20Processing,%20Output.md)
- [ ] [06 Python or a Spreadsheet.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2001%20Python%20fundamentals/06%20Python%20or%20a%20Spreadsheet.md)
- [ ] [07 Types and Expressions.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2001%20Python%20fundamentals/07%20Types%20and%20Expressions.md)
- [ ] [08 Printing and Comments.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2001%20Python%20fundamentals/08%20Printing%20and%20Comments.md)
- [ ] [09 Storing Information Variables.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2001%20Python%20fundamentals/09%20Storing%20Information%20Variables.md)
- [ ] [10 Debugging with Variables.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2001%20Python%20fundamentals/10%20Debugging%20with%20Variables.md)
- [ ] [11 Creating Lists.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2001%20Python%20fundamentals/11%20Creating%20Lists.md)
- [ ] [12 List Operations.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2001%20Python%20fundamentals/12%20List%20Operations.md)
- [ ] [13 Taking Action Calling Functions.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2001%20Python%20fundamentals/13%20Taking%20Action%20Calling%20Functions.md)
- [ ] [14 State.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2001%20Python%20fundamentals/14%20State.md)
- [ ] [15 Control Flow.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2001%20Python%20fundamentals/15%20Control%20Flow.md)
- [ ] [16 Comparison.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2001%20Python%20fundamentals/16%20Comparison.md)
- [ ] [17 Branching Code if and else.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2001%20Python%20fundamentals/17%20Branching%20Code%20if%20and%20else.md)
- [ ] [18 Repeating Actions for Loops.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2001%20Python%20fundamentals/18%20Repeating%20Actions%20for%20Loops.md)
- [ ] [19 Indentation.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2001%20Python%20fundamentals/19%20Indentation.md)
- [ ] [20 Branching Code elif.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2001%20Python%20fundamentals/20%20Branching%20Code%20elif.md)
- [ ] [21 Repeating Actions range.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2001%20Python%20fundamentals/21%20Repeating%20Actions%20range.md)
- [ ] [22 Execution Order.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2001%20Python%20fundamentals/22%20Execution%20Order.md)
- [ ] [23 Your First Graded Lab.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2001%20Python%20fundamentals/23%20Your%20First%20Graded%20Lab.md)
- [ ] [01 Module 2 Introduction.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2002%20Data%20structures%20and%20descriptive%20statistics/01%20Module%202%20Introduction.md)
- [ ] [02 Beyond Lists.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2002%20Data%20structures%20and%20descriptive%20statistics/02%20Beyond%20Lists.md)
- [ ] [03 Importing Modules.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2002%20Data%20structures%20and%20descriptive%20statistics/03%20Importing%20Modules.md)
- [ ] [04 Pandas.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2002%20Data%20structures%20and%20descriptive%20statistics/04%20Pandas.md)
- [ ] [05 Reading CSV into Python.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2002%20Data%20structures%20and%20descriptive%20statistics/05%20Reading%20CSV%20into%20Python.md)
- [ ] [06 DataFrames.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2002%20Data%20structures%20and%20descriptive%20statistics/06%20DataFrames.md)
- [ ] [07 Attributes and Methods.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2002%20Data%20structures%20and%20descriptive%20statistics/07%20Attributes%20and%20Methods.md)
- [ ] [08 Selecting Columns.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2002%20Data%20structures%20and%20descriptive%20statistics/08%20Selecting%20Columns.md)
- [ ] [09 Counts, Sums, and Histograms.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2002%20Data%20structures%20and%20descriptive%20statistics/09%20Counts,%20Sums,%20and%20Histograms.md)
- [ ] [10 Sorting.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2002%20Data%20structures%20and%20descriptive%20statistics/10%20Sorting.md)
- [ ] [11 Sorting by Multiple Columns.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2002%20Data%20structures%20and%20descriptive%20statistics/11%20Sorting%20by%20Multiple%20Columns.md)
- [ ] [12 Filtering.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2002%20Data%20structures%20and%20descriptive%20statistics/12%20Filtering.md)
- [ ] [13 Filtering by Multiple Conditions.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2002%20Data%20structures%20and%20descriptive%20statistics/13%20Filtering%20by%20Multiple%20Conditions.md)
- [ ] [14 Selecting Rows.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2002%20Data%20structures%20and%20descriptive%20statistics/14%20Selecting%20Rows.md)
- [ ] [15 Central Tendency, Variability, and Skewness.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2002%20Data%20structures%20and%20descriptive%20statistics/15%20Central%20Tendency,%20Variability,%20and%20Skewness.md)
- [ ] [16 Categorical Data.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2002%20Data%20structures%20and%20descriptive%20statistics/16%20Categorical%20Data.md)
- [ ] [17 Correlation.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2002%20Data%20structures%20and%20descriptive%20statistics/17%20Correlation.md)
- [ ] [18 Segmentation by One Feature.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2002%20Data%20structures%20and%20descriptive%20statistics/18%20Segmentation%20by%20One%20Feature.md)
- [ ] [19 Segmentation by Multiple Features.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2002%20Data%20structures%20and%20descriptive%20statistics/19%20Segmentation%20by%20Multiple%20Features.md)

## 산출물

공공데이터포털이나 GitHub API에서 데이터를 받아 정제한 뒤 CSV로 저장하는 스크립트 하나. 조건은 셋이다.

1. 함수 3개 이상으로 나뉘어 있고, 각 함수가 하는 일이 이름만 봐도 보인다
2. 네트워크 실패·빈 응답을 예외로 처리한다
3. 함수 하나 이상에 pytest 테스트가 붙어 있다

## 다음 단계

→ [02 Phase 2 - 자료구조와 알고리즘](02%20Phase%202%20-%20%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98.md)

# T5 Phase 1 — 웹 개발 기초와 자바스크립트

> 학부 교과 **인공지능웹개발기초(2학년 1학기, 3학점)** + **자바스크립트(2학년 1학기, 3학점)**
> 교과목해설(웹개발기초): "HTML, CSS, JavaScript 등을 학습하여 기초적인 웹 개발을 가능하게 한다. 이를 기반으로 AI 기반 애플리케이션을 만들고 배포하는 데 어떻게 활용될 수 있는지 학습한다"
> 교과목해설(자바스크립트): "변수, 조건문, 반복문, 함수 등 자바스크립트의 기초 문법과 웹 페이지 동작 원리를 학습… 또한 이벤트 처리와 DOM 조작 등을 익히고, 이를 기반으로 다양한 웹 서비스와 AI 기반 애플리케이션 제작 및 배포에 어떻게 활용될 수 있는지 학습"

- 목표: 모델 API를 호출해 결과를 보여 주는 화면을 처음부터 만든다.
- 분량: 약 34시간
- 마지막 학습일: (미학습)

> **두 과목이 한 Phase다.** 강남대 커리큘럼은 웹개발기초와 자바스크립트를 같은 학기(2-1)에 별도 과목으로 두는데, 교과목해설을 보면 범위가 크게 겹친다. 여기서는 하나로 묶고 대신 분량을 크게 잡았다.

## 이 단계가 끝나면 할 수 있어야 하는 것

- 시맨틱 HTML로 문서 구조를 짜고 접근성을 고려한다
- CSS 박스 모델·Flexbox·Grid로 레이아웃을 만든다
- 변수·함수·배열/객체·비동기(Promise·async/await)를 쓴다
- DOM을 조작하고 이벤트를 처리한다
- `fetch`로 REST API를 호출하고 응답을 화면에 렌더링한다
- React 컴포넌트·props·state·훅(hook)으로 화면을 구성한다
- Git으로 버전을 관리하고 협업 흐름을 안다

## 1-A. 웹의 기본과 HTML·CSS

메인: Meta Front-End Developer, `01 Introduction to Front-End Development`

- [ ] [01 Introduction to the Program.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%201%20-%20Get%20started%20with%20web%20development/01%20Introduction%20to%20the%20Program.md)
- [ ] [02 Introduction to the course.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%201%20-%20Get%20started%20with%20web%20development/02%20Introduction%20to%20the%20course.md)
- [ ] [03 Front-end, back-end and full-stack developer roles.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%201%20-%20Get%20started%20with%20web%20development/03%20Front-end,%20back-end%20and%20full-stack%20developer%20roles.md)
- [ ] [04 A day in the life of a front-end developer.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%201%20-%20Get%20started%20with%20web%20development/04%20A%20day%20in%20the%20life%20of%20a%20front-end%20developer.md)
- [ ] [05 How the internet works.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%201%20-%20Get%20started%20with%20web%20development/05%20How%20the%20internet%20works.md)
- [ ] [06 What is a web server and how does it work.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%201%20-%20Get%20started%20with%20web%20development/06%20What%20is%20a%20web%20server%20and%20how%20does%20it%20work.md)
- [ ] [07 What are websites and webpages.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%201%20-%20Get%20started%20with%20web%20development/07%20What%20are%20websites%20and%20webpages.md)
- [ ] [08 What is a web browser and how does it work.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%201%20-%20Get%20started%20with%20web%20development/08%20What%20is%20a%20web%20browser%20and%20how%20does%20it%20work.md)
- [ ] [09 Web hosting.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%201%20-%20Get%20started%20with%20web%20development/09%20Web%20hosting.md)
- [ ] [10 Introduction to Internet Protocols.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%201%20-%20Get%20started%20with%20web%20development/10%20Introduction%20to%20Internet%20Protocols.md)
- [ ] [11 Introduction to HTTP.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%201%20-%20Get%20started%20with%20web%20development/11%20Introduction%20to%20HTTP.md)
- [ ] [12 Intro to HTML, CSS and Javascript.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%201%20-%20Get%20started%20with%20web%20development/12%20Intro%20to%20HTML,%20CSS%20and%20Javascript.md)
- [ ] [13 Webpages, Websites and Web Apps.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%201%20-%20Get%20started%20with%20web%20development/13%20Webpages,%20Websites%20and%20Web%20Apps.md)
- [ ] [14 Developer tools.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%201%20-%20Get%20started%20with%20web%20development/14%20Developer%20tools.md)
- [ ] [15 Frameworks and libraries.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%201%20-%20Get%20started%20with%20web%20development/15%20Frameworks%20and%20libraries.md)
- [ ] [16 APIs and services.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%201%20-%20Get%20started%20with%20web%20development/16%20APIs%20and%20services.md)
- [ ] [17 What is a an IDE.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%201%20-%20Get%20started%20with%20web%20development/17%20What%20is%20a%20an%20IDE.md)
- [ ] [18 Module Summary - Get started with Web Development.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%201%20-%20Get%20started%20with%20web%20development/18%20Module%20Summary%20-%20Get%20started%20with%20Web%20Development.md)
- [ ] [01 What is Hyper Text Markup Language.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%202%20-%20Introduction%20to%20HTML%20and%20CSS/01%20What%20is%20Hyper%20Text%20Markup%20Language.md)
- [ ] [02 HTML documents.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%202%20-%20Introduction%20to%20HTML%20and%20CSS/02%20HTML%20documents.md)
- [ ] [03 Linking documents.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%202%20-%20Introduction%20to%20HTML%20and%20CSS/03%20Linking%20documents.md)
- [ ] [04 Adding images to a webpage with HTML.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%202%20-%20Introduction%20to%20HTML%20and%20CSS/04%20Adding%20images%20to%20a%20webpage%20with%20HTML.md)
- [ ] [05 Use HTML to work with data in tables.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%202%20-%20Introduction%20to%20HTML%20and%20CSS/05%20Use%20HTML%20to%20work%20with%20data%20in%20tables.md)
- [ ] [06 What are forms.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%202%20-%20Introduction%20to%20HTML%20and%20CSS/06%20What%20are%20forms.md)
- [ ] [07 Introduction to the DOM.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%202%20-%20Introduction%20to%20HTML%20and%20CSS/07%20Introduction%20to%20the%20DOM.md)
- [ ] [08 Web accessibility.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%202%20-%20Introduction%20to%20HTML%20and%20CSS/08%20Web%20accessibility.md)
- [ ] [09 Selecting and styling.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%202%20-%20Introduction%20to%20HTML%20and%20CSS/09%20Selecting%20and%20styling.md)
- [ ] [10 Box model introduction.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%202%20-%20Introduction%20to%20HTML%20and%20CSS/10%20Box%20model%20introduction.md)
- [ ] [11 Document flow - Block vs. In-line.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%202%20-%20Introduction%20to%20HTML%20and%20CSS/11%20Document%20flow%20-%20Block%20vs.%20In-line.md)
- [ ] [12 Module Summary - Introduction to HTML and CSS.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%202%20-%20Introduction%20to%20HTML%20and%20CSS/12%20Module%20Summary%20-%20Introduction%20to%20HTML%20and%20CSS.md)
- [ ] [01 Working with libraries.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%203%20-%20UI%20Frameworks/01%20Working%20with%20libraries.md)
- [ ] [02 Introduction to responsive design.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%203%20-%20UI%20Frameworks/02%20Introduction%20to%20responsive%20design.md)
- [ ] [03 Getting started with Bootstrap.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%203%20-%20UI%20Frameworks/03%20Getting%20started%20with%20Bootstrap.md)
- [ ] [04 Using Bootstrap styles.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%203%20-%20UI%20Frameworks/04%20Using%20Bootstrap%20styles.md)
- [ ] [05 Bootstrap grid.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%203%20-%20UI%20Frameworks/05%20Bootstrap%20grid.md)
- [ ] [06 Bootstrap components.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%203%20-%20UI%20Frameworks/06%20Bootstrap%20components.md)
- [ ] [07 Static and dynamic content.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%203%20-%20UI%20Frameworks/07%20Static%20and%20dynamic%20content.md)
- [ ] [08 Single page applications.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%203%20-%20UI%20Frameworks/08%20Single%20page%20applications.md)
- [ ] [09 What is React.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%203%20-%20UI%20Frameworks/09%20What%20is%20React.md)
- [ ] [10 How React works.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%203%20-%20UI%20Frameworks/10%20How%20React%20works.md)
- [ ] [11 Component hierarchy.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%203%20-%20UI%20Frameworks/11%20Component%20hierarchy.md)
- [ ] [12 Module Summary - UI Frameworks.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%203%20-%20UI%20Frameworks/12%20Module%20Summary%20-%20UI%20Frameworks.md)
- [ ] [01 Course 1 Recap - Introduction to Web Development.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%204%20-%20End-of-Course%20Graded%20Assessment/01%20Course%201%20Recap%20-%20Introduction%20to%20Web%20Development.md)
- [ ] [02 Congratulations, you have completed Introduction to Web Development.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/01%20Introduction%20to%20Front-End%20Development/Module%204%20-%20End-of-Course%20Graded%20Assessment/02%20Congratulations,%20you%20have%20completed%20Introduction%20to%20Web%20Development.md)

## 1-B. 자바스크립트

메인: Meta Front-End Developer, `02 Programming with JavaScript`. **학부 "자바스크립트" 과목에 그대로 대응한다**

- [ ] [01 Introduction to programming with JavaScript.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%201%20-%20Introduction%20to%20Javascript/01%20Introduction%20to%20programming%20with%20JavaScript.md)
- [ ] [02 How is JavaScript used in the real world.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%201%20-%20Introduction%20to%20Javascript/02%20How%20is%20JavaScript%20used%20in%20the%20real%20world.md)
- [ ] [03 Setting up VS code (Optional).md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%201%20-%20Introduction%20to%20Javascript/03%20Setting%20up%20VS%20code%20%28Optional%29.md)
- [ ] [04 Introduction to programming.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%201%20-%20Introduction%20to%20Javascript/04%20Introduction%20to%20programming.md)
- [ ] [05 Why JavaScript.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%201%20-%20Introduction%20to%20Javascript/05%20Why%20JavaScript.md)
- [ ] [06 Programming in JavaScript.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%201%20-%20Introduction%20to%20Javascript/06%20Programming%20in%20JavaScript.md)
- [ ] [07 Variables.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%201%20-%20Introduction%20to%20Javascript/07%20Variables.md)
- [ ] [08 Data types.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%201%20-%20Introduction%20to%20Javascript/08%20Data%20types.md)
- [ ] [09 Operators.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%201%20-%20Introduction%20to%20Javascript/09%20Operators.md)
- [ ] [10 Numbers.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%201%20-%20Introduction%20to%20Javascript/10%20Numbers.md)
- [ ] [11 Strings.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%201%20-%20Introduction%20to%20Javascript/11%20Strings.md)
- [ ] [12 Booleans.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%201%20-%20Introduction%20to%20Javascript/12%20Booleans.md)
- [ ] [13 Writing statements.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%201%20-%20Introduction%20to%20Javascript/13%20Writing%20statements.md)
- [ ] [14 Working with conditional statements.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%201%20-%20Introduction%20to%20Javascript/14%20Working%20with%20conditional%20statements.md)
- [ ] [15 Looping constructs.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%201%20-%20Introduction%20to%20Javascript/15%20Looping%20constructs.md)
- [ ] [16 For loop.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%201%20-%20Introduction%20to%20Javascript/16%20For%20loop.md)
- [ ] [17 While loop.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%201%20-%20Introduction%20to%20Javascript/17%20While%20loop.md)
- [ ] [18 Nested loops.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%201%20-%20Introduction%20to%20Javascript/18%20Nested%20loops.md)
- [ ] [19 Module summary - Introduction to JavaScript.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%201%20-%20Introduction%20to%20Javascript/19%20Module%20summary%20-%20Introduction%20to%20JavaScript.md)
- [ ] [01 Functions.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%202%20-%20The%20Building%20Blocks%20of%20a%20Program/01%20Functions.md)
- [ ] [02 Storing data in arrays.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%202%20-%20The%20Building%20Blocks%20of%20a%20Program/02%20Storing%20data%20in%20arrays.md)
- [ ] [03 Introduction to objects.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%202%20-%20The%20Building%20Blocks%20of%20a%20Program/03%20Introduction%20to%20objects.md)
- [ ] [04 Math object.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%202%20-%20The%20Building%20Blocks%20of%20a%20Program/04%20Math%20object.md)
- [ ] [05 A closer look at strings.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%202%20-%20The%20Building%20Blocks%20of%20a%20Program/05%20A%20closer%20look%20at%20strings.md)
- [ ] [06 Typeof.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%202%20-%20The%20Building%20Blocks%20of%20a%20Program/06%20Typeof.md)
- [ ] [07 Bugs and errors.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%202%20-%20The%20Building%20Blocks%20of%20a%20Program/07%20Bugs%20and%20errors.md)
- [ ] [08 Try catch blocks.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%202%20-%20The%20Building%20Blocks%20of%20a%20Program/08%20Try%20catch%20blocks.md)
- [ ] [09 Undefined, null and empty values.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%202%20-%20The%20Building%20Blocks%20of%20a%20Program/09%20Undefined,%20null%20and%20empty%20values.md)
- [ ] [10 Module summary - The building blocks of a program.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%202%20-%20The%20Building%20Blocks%20of%20a%20Program/10%20Module%20summary%20-%20The%20building%20blocks%20of%20a%20program.md)
- [ ] [01 Introduction to functional programming.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%203%20-%20Programming%20Paradigms/01%20Introduction%20to%20functional%20programming.md)
- [ ] [02 Function calling and recursion.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%203%20-%20Programming%20Paradigms/02%20Function%20calling%20and%20recursion.md)
- [ ] [03 Introduction to scope.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%203%20-%20Programming%20Paradigms/03%20Introduction%20to%20scope.md)
- [ ] [04 Scoping with var, let and const.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%203%20-%20Programming%20Paradigms/04%20Scoping%20with%20var,%20let%20and%20const.md)
- [ ] [05 Comparing var, let and const.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%203%20-%20Programming%20Paradigms/05%20Comparing%20var,%20let%20and%20const.md)
- [ ] [06 Introduction to object-oriented programming.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%203%20-%20Programming%20Paradigms/06%20Introduction%20to%20object-oriented%20programming.md)
- [ ] [07 Classes.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%203%20-%20Programming%20Paradigms/07%20Classes.md)
- [ ] [08 Inheritance.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%203%20-%20Programming%20Paradigms/08%20Inheritance.md)
- [ ] [09 De-structuring arrays and objects.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%203%20-%20Programming%20Paradigms/09%20De-structuring%20arrays%20and%20objects.md)
- [ ] [10 For- of loops and objects.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%203%20-%20Programming%20Paradigms/10%20For-%20of%20loops%20and%20objects.md)
- [ ] [11 Working with template literals.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%203%20-%20Programming%20Paradigms/11%20Working%20with%20template%20literals.md)
- [ ] [12 Data Structures.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%203%20-%20Programming%20Paradigms/12%20Data%20Structures.md)
- [ ] [13 Spread operator.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%203%20-%20Programming%20Paradigms/13%20Spread%20operator.md)
- [ ] [14 Rest operator.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%203%20-%20Programming%20Paradigms/14%20Rest%20operator.md)
- [ ] [15 JavaScript modules.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%203%20-%20Programming%20Paradigms/15%20JavaScript%20modules.md)
- [ ] [16 JavaScript DOM manipulation.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%203%20-%20Programming%20Paradigms/16%20JavaScript%20DOM%20manipulation.md)
- [ ] [17 JavaScript selectors.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%203%20-%20Programming%20Paradigms/17%20JavaScript%20selectors.md)
- [ ] [18 Event handling.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%203%20-%20Programming%20Paradigms/18%20Event%20handling.md)
- [ ] [19 JavaScript object notation - JSON.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%203%20-%20Programming%20Paradigms/19%20JavaScript%20object%20notation%20-%20JSON.md)
- [ ] [20 Module summary - Programming Paradigms.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%203%20-%20Programming%20Paradigms/20%20Module%20summary%20-%20Programming%20Paradigms.md)
- [ ] [01 Other JavaScript environments - node & NPM.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%204%20-%20Testing/01%20Other%20JavaScript%20environments%20-%20node%20&%20NPM.md)
- [ ] [02 What is testing.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%204%20-%20Testing/02%20What%20is%20testing.md)
- [ ] [03 Types of testing.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%204%20-%20Testing/03%20Types%20of%20testing.md)
- [ ] [04 Introduction to Jest.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%204%20-%20Testing/04%20Introduction%20to%20Jest.md)
- [ ] [05 Writing tests with Jest.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%204%20-%20Testing/05%20Writing%20tests%20with%20Jest.md)
- [ ] [06 TDD (Test-Driven Development).md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%204%20-%20Testing/06%20TDD%20%28Test-Driven%20Development%29.md)
- [ ] [07 Module summary - Testing.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%204%20-%20Testing/07%20Module%20summary%20-%20Testing.md)
- [ ] [01 Recap Programming with JavaScript.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%205%20-%20End-of-Course%20Graded%20Assessment/01%20Recap%20Programming%20with%20JavaScript.md)
- [ ] [02 Congratulations on completing the course Programming with JavaScript.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/02%20Programming%20with%20JavaScript/Module%205%20-%20End-of-Course%20Graded%20Assessment/02%20Congratulations%20on%20completing%20the%20course%20Programming%20with%20JavaScript.md)

## 1-C. 버전 관리

메인: Meta Front-End Developer, `03 Version Control`



## 1-D. HTML·CSS 심화

- [ ] [01 Introduction to the Program.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%201%20-%20HTML%20in%20depth/01%20Introduction%20to%20the%20Program.md)
- [ ] [02 Introduction to HTML and CSS in depth.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%201%20-%20HTML%20in%20depth/02%20Introduction%20to%20HTML%20and%20CSS%20in%20depth.md)
- [ ] [03 How are HTML and CSS used in the real world.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%201%20-%20HTML%20in%20depth/03%20How%20are%20HTML%20and%20CSS%20used%20in%20the%20real%20world.md)
- [ ] [04 Recap - What you know about HTML and CSS.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%201%20-%20HTML%20in%20depth/04%20Recap%20-%20What%20you%20know%20about%20HTML%20and%20CSS.md)
- [ ] [05 Semantic tags and why we need them.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%201%20-%20HTML%20in%20depth/05%20Semantic%20tags%20and%20why%20we%20need%20them.md)
- [ ] [06 Semantic tags in action.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%201%20-%20HTML%20in%20depth/06%20Semantic%20tags%20in%20action.md)
- [ ] [07 Metadata.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%201%20-%20HTML%20in%20depth/07%20Metadata.md)
- [ ] [08 Bare bones layout.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%201%20-%20HTML%20in%20depth/08%20Bare%20bones%20layout.md)
- [ ] [09 UX with meta tags.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%201%20-%20HTML%20in%20depth/09%20UX%20with%20meta%20tags.md)
- [ ] [10 Setting up a social media card.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%201%20-%20HTML%20in%20depth/10%20Setting%20up%20a%20social%20media%20card.md)
- [ ] [11 Forms and validation.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%201%20-%20HTML%20in%20depth/11%20Forms%20and%20validation.md)
- [ ] [12 Creating a form.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%201%20-%20HTML%20in%20depth/12%20Creating%20a%20form.md)
- [ ] [13 Making the most of client-side validation.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%201%20-%20HTML%20in%20depth/13%20Making%20the%20most%20of%20client-side%20validation.md)
- [ ] [14 Radio buttons.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%201%20-%20HTML%20in%20depth/14%20Radio%20buttons.md)
- [ ] [15 Using interactive form elements.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%201%20-%20HTML%20in%20depth/15%20Using%20interactive%20form%20elements.md)
- [ ] [16 Form submission.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%201%20-%20HTML%20in%20depth/16%20Form%20submission.md)
- [ ] [17 Browser differences.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%201%20-%20HTML%20in%20depth/17%20Browser%20differences.md)
- [ ] [18 Video and audio.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%201%20-%20HTML%20in%20depth/18%20Video%20and%20audio.md)
- [ ] [19 Embedded players.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%201%20-%20HTML%20in%20depth/19%20Embedded%20players.md)
- [ ] [20 iFrames.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%201%20-%20HTML%20in%20depth/20%20iFrames.md)
- [ ] [21 iFrame as a picture.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%201%20-%20HTML%20in%20depth/21%20iFrame%20as%20a%20picture.md)
- [ ] [22 The canvas element.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%201%20-%20HTML%20in%20depth/22%20The%20canvas%20element.md)
- [ ] [23 Module summary - HTML deep dive.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%201%20-%20HTML%20in%20depth/23%20Module%20summary%20-%20HTML%20deep%20dive.md)
- [ ] [01 CSS web layout.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%202%20-%20Interactive%20CSS/01%20CSS%20web%20layout.md)
- [ ] [02 Basic flexbox.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%202%20-%20Interactive%20CSS/02%20Basic%20flexbox.md)
- [ ] [03 Flex charts.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%202%20-%20Interactive%20CSS/03%20Flex%20charts.md)
- [ ] [04 CSS grids.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%202%20-%20Interactive%20CSS/04%20CSS%20grids.md)
- [ ] [05 Grid showcase.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%202%20-%20Interactive%20CSS/05%20Grid%20showcase.md)
- [ ] [06 Case study - How Meta creates responsive builds.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%202%20-%20Interactive%20CSS/06%20Case%20study%20-%20How%20Meta%20creates%20responsive%20builds.md)
- [ ] [07 Widely used selectors.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%202%20-%20Interactive%20CSS/07%20Widely%20used%20selectors.md)
- [ ] [08 Combination selectors.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%202%20-%20Interactive%20CSS/08%20Combination%20selectors.md)
- [ ] [09 Pseudo-classes.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%202%20-%20Interactive%20CSS/09%20Pseudo-classes.md)
- [ ] [10 Practical use of pseudo.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%202%20-%20Interactive%20CSS/10%20Practical%20use%20of%20pseudo.md)
- [ ] [11 What is an effect.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%202%20-%20Interactive%20CSS/11%20What%20is%20an%20effect.md)
- [ ] [12 Text effects.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%202%20-%20Interactive%20CSS/12%20Text%20effects.md)
- [ ] [13 CSS Transforms and transitions.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%202%20-%20Interactive%20CSS/13%20CSS%20Transforms%20and%20transitions.md)
- [ ] [14 CSS animation.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%202%20-%20Interactive%20CSS/14%20CSS%20animation.md)
- [ ] [15 Animation examples.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%202%20-%20Interactive%20CSS/15%20Animation%20examples.md)
- [ ] [16 Common errors.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%202%20-%20Interactive%20CSS/16%20Common%20errors.md)
- [ ] [17 Handling errors.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%202%20-%20Interactive%20CSS/17%20Handling%20errors.md)
- [ ] [18 Debugging tools.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%202%20-%20Interactive%20CSS/18%20Debugging%20tools.md)
- [ ] [19 Browser-specific CSS.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%202%20-%20Interactive%20CSS/19%20Browser-specific%20CSS.md)
- [ ] [20 UI testing.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%202%20-%20Interactive%20CSS/20%20UI%20testing.md)
- [ ] [21 Case study - How Meta performs front-end testing.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%202%20-%20Interactive%20CSS/21%20Case%20study%20-%20How%20Meta%20performs%20front-end%20testing.md)
- [ ] [22 Module summary - Interactive CSS.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%202%20-%20Interactive%20CSS/22%20Module%20summary%20-%20Interactive%20CSS.md)
- [ ] [01 Course recap.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%203%20-%20Graded%20Assessment/01%20Course%20recap.md)
- [ ] [02 Selecting the subject and working out the layout.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%203%20-%20Graded%20Assessment/02%20Selecting%20the%20subject%20and%20working%20out%20the%20layout.md)
- [ ] [03 Positioning the elements, creating placeholders.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%203%20-%20Graded%20Assessment/03%20Positioning%20the%20elements,%20creating%20placeholders.md)
- [ ] [04 Planning the user experience.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%203%20-%20Graded%20Assessment/04%20Planning%20the%20user%20experience.md)
- [ ] [06 Congratulations, you have completed HTMLS and CSS in depth!.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/04%20HTML%20and%20CSS%20in%20depth/Module%203%20-%20Graded%20Assessment/06%20Congratulations,%20you%20have%20completed%20HTMLS%20and%20CSS%20in%20depth!.md)

## 1-E. React

메인: Meta Front-End Developer, `05 React Basics`

- [ ] [01 Introduction to the course - React Basics.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%201%20-%20React%20Components/01%20Introduction%20to%20the%20course%20-%20React%20Basics.md)
- [ ] [02 How is React used in the real world.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%201%20-%20React%20Components/02%20How%20is%20React%20used%20in%20the%20real%20world.md)
- [ ] [03 Why React.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%201%20-%20React%20Components/03%20Why%20React.md)
- [ ] [04 React.js overview.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%201%20-%20React%20Components/04%20React.js%20overview.md)
- [ ] [05 Introduction to functional components.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%201%20-%20React%20Components/05%20Introduction%20to%20functional%20components.md)
- [ ] [06 Creating React components.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%201%20-%20React%20Components/06%20Creating%20React%20components.md)
- [ ] [07 The React project structure.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%201%20-%20React%20Components/07%20The%20React%20project%20structure.md)
- [ ] [08 Importing components.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%201%20-%20React%20Components/08%20Importing%20components.md)
- [ ] [09 Principles of components - Props.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%201%20-%20React%20Components/09%20Principles%20of%20components%20-%20Props.md)
- [ ] [10 Using props in components.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%201%20-%20React%20Components/10%20Using%20props%20in%20components.md)
- [ ] [11 Introducing JSX.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%201%20-%20React%20Components/11%20Introducing%20JSX.md)
- [ ] [12 Practical styling.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%201%20-%20React%20Components/12%20Practical%20styling.md)
- [ ] [13 Embedded JSX expressions.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%201%20-%20React%20Components/13%20Embedded%20JSX%20expressions.md)
- [ ] [14 Embedding in attributes.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%201%20-%20React%20Components/14%20Embedding%20in%20attributes.md)
- [ ] [15 Module summary - React Components.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%201%20-%20React%20Components/15%20Module%20summary%20-%20React%20Components.md)
- [ ] [01 Types of events.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%202%20-%20Data%20and%20State/01%20Types%20of%20events.md)
- [ ] [02 Common event handling.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%202%20-%20Data%20and%20State/02%20Common%20event%20handling.md)
- [ ] [03 Syntax for handlers.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%202%20-%20Data%20and%20State/03%20Syntax%20for%20handlers.md)
- [ ] [04 User events.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%202%20-%20Data%20and%20State/04%20User%20events.md)
- [ ] [05 Parent-child data flow.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%202%20-%20Data%20and%20State/05%20Parent-child%20data%20flow.md)
- [ ] [06 Children and data.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%202%20-%20Data%20and%20State/06%20Children%20and%20data.md)
- [ ] [07 What is state.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%202%20-%20Data%20and%20State/07%20What%20is%20state.md)
- [ ] [08 Observing state.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%202%20-%20Data%20and%20State/08%20Observing%20state.md)
- [ ] [09 What are hooks.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%202%20-%20Data%20and%20State/09%20What%20are%20hooks.md)
- [ ] [10 Managing state.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%202%20-%20Data%20and%20State/10%20Managing%20state.md)
- [ ] [11 React state management.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%202%20-%20Data%20and%20State/11%20React%20state%20management.md)
- [ ] [12 Stateful vs. stateless.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%202%20-%20Data%20and%20State/12%20Stateful%20vs.%20stateless.md)
- [ ] [13 Module summary - Data and state.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%202%20-%20Data%20and%20State/13%20Module%20summary%20-%20Data%20and%20state.md)
- [ ] [01 Basic types of navigation.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%203%20-%20Navigation,%20Updating%20and%20Assets%20in%20React.js/01%20Basic%20types%20of%20navigation.md)
- [ ] [02 The navbar.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%203%20-%20Navigation,%20Updating%20and%20Assets%20in%20React.js/02%20The%20navbar.md)
- [ ] [03 Conditional rendering.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%203%20-%20Navigation,%20Updating%20and%20Assets%20in%20React.js/03%20Conditional%20rendering.md)
- [ ] [04 Single view conditional updates.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%203%20-%20Navigation,%20Updating%20and%20Assets%20in%20React.js/04%20Single%20view%20conditional%20updates.md)
- [ ] [05 What is an asset and where does it live.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%203%20-%20Navigation,%20Updating%20and%20Assets%20in%20React.js/05%20What%20is%20an%20asset%20and%20where%20does%20it%20live.md)
- [ ] [06 Using embedded assets.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%203%20-%20Navigation,%20Updating%20and%20Assets%20in%20React.js/06%20Using%20embedded%20assets.md)
- [ ] [07 Audio and video.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%203%20-%20Navigation,%20Updating%20and%20Assets%20in%20React.js/07%20Audio%20and%20video.md)
- [ ] [08 Create an audio - video component.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%203%20-%20Navigation,%20Updating%20and%20Assets%20in%20React.js/08%20Create%20an%20audio%20-%20video%20component.md)
- [ ] [09 Module summary - navigation, updating and assets in React.js.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%203%20-%20Navigation,%20Updating%20and%20Assets%20in%20React.js/09%20Module%20summary%20-%20navigation,%20updating%20and%20assets%20in%20React.js.md)
- [ ] [01 Course recap - React Basics.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%204%20-%20Your%20first%20React%20app/01%20Course%20recap%20-%20React%20Basics.md)
- [ ] [03 Congratulations, you completed React Basics!.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/05%20React%20Basics/Module%204%20-%20Your%20first%20React%20app/03%20Congratulations,%20you%20completed%20React%20Basics!.md)

`06 Advanced React` — 훅과 테스트. **[Phase 3(앱 개발)](03%20Phase%203%20-%20%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%EC%95%B1%20%EA%B0%9C%EB%B0%9C.md)의 React Native가 이 위에 선다**

- [ ] [01 Introduction to the course.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%201%20-%20Components/01%20Introduction%20to%20the%20course.md)
- [ ] [02 React and your career opportunites.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%201%20-%20Components/02%20React%20and%20your%20career%20opportunites.md)
- [ ] [03 Setting up VS code (Optional).md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%201%20-%20Components/03%20Setting%20up%20VS%20code%20%28Optional%29.md)
- [ ] [04 Grid layouts.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%201%20-%20Components/04%20Grid%20layouts.md)
- [ ] [05 Transforming lists in JavaScript.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%201%20-%20Components/05%20Transforming%20lists%20in%20JavaScript.md)
- [ ] [06 Render a simple list component.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%201%20-%20Components/06%20Render%20a%20simple%20list%20component.md)
- [ ] [07 What are Keys in React.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%201%20-%20Components/07%20What%20are%20Keys%20in%20React.md)
- [ ] [08 Using Keys Within List Components.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%201%20-%20Components/08%20Using%20Keys%20Within%20List%20Components.md)
- [ ] [09 What are controlled components.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%201%20-%20Components/09%20What%20are%20controlled%20components.md)
- [ ] [10 Creating a Form component in React.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%201%20-%20Components/10%20Creating%20a%20Form%20component%20in%20React.md)
- [ ] [11 Create a Controlled Form Component.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%201%20-%20Components/11%20Create%20a%20Controlled%20Form%20Component.md)
- [ ] [12 What you know about Props and State.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%201%20-%20Components/12%20What%20you%20know%20about%20Props%20and%20State.md)
- [ ] [13 What is Context, and why is it used.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%201%20-%20Components/13%20What%20is%20Context,%20and%20why%20is%20it%20used.md)
- [ ] [14 Module summary - Components.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%201%20-%20Components/14%20Module%20summary%20-%20Components.md)
- [ ] [01 Working with React hooks.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%202%20-%20React%20Hooks%20and%20Custom%20Hooks/01%20Working%20with%20React%20hooks.md)
- [ ] [02 Revising useState hook.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%202%20-%20React%20Hooks%20and%20Custom%20Hooks/02%20Revising%20useState%20hook.md)
- [ ] [03 Using the useState hook.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%202%20-%20React%20Hooks%20and%20Custom%20Hooks/03%20Using%20the%20useState%20hook.md)
- [ ] [04 What are side effects.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%202%20-%20React%20Hooks%20and%20Custom%20Hooks/04%20What%20are%20side%20effects.md)
- [ ] [05 Using the useEffect hook.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%202%20-%20React%20Hooks%20and%20Custom%20Hooks/05%20Using%20the%20useEffect%20hook.md)
- [ ] [06 What are the rules of hooks.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%202%20-%20React%20Hooks%20and%20Custom%20Hooks/06%20What%20are%20the%20rules%20of%20hooks.md)
- [ ] [07 What you need to know before fetching data.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%202%20-%20React%20Hooks%20and%20Custom%20Hooks/07%20What%20you%20need%20to%20know%20before%20fetching%20data.md)
- [ ] [08 Fetching data – Putting it all together.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%202%20-%20React%20Hooks%20and%20Custom%20Hooks/08%20Fetching%20data%20%E2%80%93%20Putting%20it%20all%20together.md)
- [ ] [09 APIs.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%202%20-%20React%20Hooks%20and%20Custom%20Hooks/09%20APIs.md)
- [ ] [10 What is useReducer and how it differs from useState.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%202%20-%20React%20Hooks%20and%20Custom%20Hooks/10%20What%20is%20useReducer%20and%20how%20it%20differs%20from%20useState.md)
- [ ] [11 useRef to access underlying DOM.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%202%20-%20React%20Hooks%20and%20Custom%20Hooks/11%20useRef%20to%20access%20underlying%20DOM.md)
- [ ] [12 Module summary - React Hooks and Custom Hooks.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%202%20-%20React%20Hooks%20and%20Custom%20Hooks/12%20Module%20summary%20-%20React%20Hooks%20and%20Custom%20Hooks.md)
- [ ] [01 JSX, Components and Elements.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%203%20-%20JSX%20and%20testing/01%20JSX,%20Components%20and%20Elements.md)
- [ ] [02 The importance of performance to software development.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%203%20-%20JSX%20and%20testing/02%20The%20importance%20of%20performance%20to%20software%20development.md)
- [ ] [03 Component composition with children.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%203%20-%20JSX%20and%20testing/03%20Component%20composition%20with%20children.md)
- [ ] [04 Manipulating children dynamically in JSX.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%203%20-%20JSX%20and%20testing/04%20Manipulating%20children%20dynamically%20in%20JSX.md)
- [ ] [05 Spread Attributes.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%203%20-%20JSX%20and%20testing/05%20Spread%20Attributes.md)
- [ ] [06 Cross-cutting concerns in React.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%203%20-%20JSX%20and%20testing/06%20Cross-cutting%20concerns%20in%20React.md)
- [ ] [07 Create a HOC for cursor position.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%203%20-%20JSX%20and%20testing/07%20Create%20a%20HOC%20for%20cursor%20position.md)
- [ ] [08 Render props.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%203%20-%20JSX%20and%20testing/08%20Render%20props.md)
- [ ] [09 Why React Testing Library.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%203%20-%20JSX%20and%20testing/09%20Why%20React%20Testing%20Library.md)
- [ ] [10 Writing the first test for your form.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%203%20-%20JSX%20and%20testing/10%20Writing%20the%20first%20test%20for%20your%20form.md)
- [ ] [11 Style guides.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%203%20-%20JSX%20and%20testing/11%20Style%20guides.md)
- [ ] [12 Module summary - JSX and Testing.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%203%20-%20JSX%20and%20testing/12%20Module%20summary%20-%20JSX%20and%20Testing.md)
- [ ] [01 Course recap - Advanced React.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%204%20-%20Final%20project/01%20Course%20recap%20-%20Advanced%20React.md)
- [ ] [03 Congratulations, you have completed Advanced React!.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/06%20Advanced%20React/Module%204%20-%20Final%20project/03%20Congratulations,%20you%20have%20completed%20Advanced%20React!.md)

## 1-F. UX/UI 기본 (선택)



> 화면 설계를 제대로 하고 싶다면 **UI UX 로드맵**과 **와이어프레임 로드맵**이 따로 있다.

## 1-G. 종합 — 캡스톤 형식

- [ ] [01 Introduction to the course.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/08%20Front-End%20Developer%20Capstone/Module%201%20-%20Starting%20the%20project/01%20Introduction%20to%20the%20course.md)
- [ ] [02 Setting up the project.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/08%20Front-End%20Developer%20Capstone/Module%201%20-%20Starting%20the%20project/02%20Setting%20up%20the%20project.md)
- [ ] [03 Planning the UX and UI.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/08%20Front-End%20Developer%20Capstone/Module%201%20-%20Starting%20the%20project/03%20Planning%20the%20UX%20and%20UI.md)
- [ ] [04 Module summary - Starting the project.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/08%20Front-End%20Developer%20Capstone/Module%201%20-%20Starting%20the%20project/04%20Module%20summary%20-%20Starting%20the%20project.md)
- [ ] [01 Setting up a semantic HTML document.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/08%20Front-End%20Developer%20Capstone/Module%202%20-%20Project%20foundations/01%20Setting%20up%20a%20semantic%20HTML%20document.md)
- [ ] [02 Styling elements.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/08%20Front-End%20Developer%20Capstone/Module%202%20-%20Project%20foundations/02%20Styling%20elements.md)
- [ ] [03 Project components.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/08%20Front-End%20Developer%20Capstone/Module%202%20-%20Project%20foundations/03%20Project%20components.md)
- [ ] [04 Module summary - Project foundations.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/08%20Front-End%20Developer%20Capstone/Module%202%20-%20Project%20foundations/04%20Module%20summary%20-%20Project%20foundations.md)
- [ ] [01 Customer table bookings.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/08%20Front-End%20Developer%20Capstone/Module%203%20-%20Project%20functionality/01%20Customer%20table%20bookings.md)
- [ ] [02 Querying a table booking API.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/08%20Front-End%20Developer%20Capstone/Module%203%20-%20Project%20functionality/02%20Querying%20a%20table%20booking%20API.md)
- [ ] [03 The importance of UX.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/08%20Front-End%20Developer%20Capstone/Module%203%20-%20Project%20functionality/03%20The%20importance%20of%20UX.md)
- [ ] [04 Module summary - Project functionality.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/08%20Front-End%20Developer%20Capstone/Module%203%20-%20Project%20functionality/04%20Module%20summary%20-%20Project%20functionality.md)
- [ ] [01 Course recap - Capstone Project.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/08%20Front-End%20Developer%20Capstone/Module%204%20-%20Project%20Assessment/01%20Course%20recap%20-%20Capstone%20Project.md)
- [ ] [02 Congratulations, you have completed the Capstone Project!.md](../../../courses/mooc/Web%20and%20APIs/Meta%20Front-End%20Developer/08%20Front-End%20Developer%20Capstone/Module%204%20-%20Project%20Assessment/02%20Congratulations,%20you%20have%20completed%20the%20Capstone%20Project!.md)

## 산출물

**모델 API를 호출하는 단일 페이지 웹 앱.** 백엔드는 아직 없어도 된다 — 공개 API나 Hugging Face Inference API를 붙인다.

1. 사용자 입력 → API 호출 → 결과 렌더링의 전 과정
2. 로딩 상태와 에러 상태를 화면에 표현 (**빈 상태·로딩·에러 세 가지를 다 그린다**)
3. React 컴포넌트로 분리하고, 상태를 어디에 둘지 결정한 이유를 README에 한 문단
4. Git 커밋 이력이 의미 단위로 남아 있을 것

## 다음 단계

→ [02 Phase 2 - 서버 프로그래밍](02%20Phase%202%20-%20%EC%84%9C%EB%B2%84%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D.md)

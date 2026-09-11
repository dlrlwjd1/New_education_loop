# T6 Phase 5 — 캡스톤 디자인 (AI)

> 학부 교과 **캡스톤디자인(AI) I(4학년 1학기) · II(4학년 2학기)**, 각 실습 3학점
> 교과목해설: "인공지능 전공에서 배운 교과목들과 그들의 상관관계를 바탕으로 실제적인 프로젝트 수행 능력을 배양하는 데 중점을 둔다. 학생들은 팀 프로젝트를 통해 문제를 정의하고, AI 기술을 적용하여 해결책을 제시하며, 실질적인 결과물을 도출한다"

- 목표: **이 로드맵의 도착점.** 직접 학습시킨 모델을 붙인 웹·모바일 AI 서비스를 클라우드에 배포하고 운영한다.
- 상태: **강의로 배우는 단계가 아니다.** 앞의 모든 트랙에서 만든 조각을 하나로 합치는 산출물 과제다.
- 분량: 두 학기 프로젝트 (강의 참고 자료 약 10시간)
- 마지막 학습일: (미학습)

## 시작하기 전 체크

아래가 모두 있어야 캡스톤이 굴러간다. 하나라도 비어 있으면 그 Phase로 돌아간다.

| 필요한 것 | 어디서 만들었나 |
|---|---|
| 학습시킨 모델 하나 | [T3 Phase 4](../T3%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D%EA%B3%BC%20%EB%94%A5%EB%9F%AC%EB%8B%9D/04%20Phase%204%20-%20%EA%B8%B0%EA%B3%84%ED%95%99%EC%8A%B5%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8.md) 또는 [T4](../T4%20%EC%9D%91%EC%9A%A9%20AI%20%EC%96%B8%EC%96%B4%20%EC%8B%9C%EA%B0%81%20%EB%A1%9C%EB%B4%87/README.md) |
| API 서버 | [T5 Phase 2](../T5%20AI%20%EC%84%9C%EB%B9%84%EC%8A%A4%20%EA%B0%9C%EB%B0%9C%EA%B3%BC%20%EC%9D%B8%ED%94%84%EB%9D%BC/02%20Phase%202%20-%20%EC%84%9C%EB%B2%84%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D.md) |
| 웹 또는 앱 화면 | [T5 Phase 1](../T5%20AI%20%EC%84%9C%EB%B9%84%EC%8A%A4%20%EA%B0%9C%EB%B0%9C%EA%B3%BC%20%EC%9D%B8%ED%94%84%EB%9D%BC/01%20Phase%201%20-%20%EC%9B%B9%20%EA%B0%9C%EB%B0%9C%20%EA%B8%B0%EC%B4%88%EC%99%80%20%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8.md) · [Phase 3](../T5%20AI%20%EC%84%9C%EB%B9%84%EC%8A%A4%20%EA%B0%9C%EB%B0%9C%EA%B3%BC%20%EC%9D%B8%ED%94%84%EB%9D%BC/03%20Phase%203%20-%20%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%EC%95%B1%20%EA%B0%9C%EB%B0%9C.md) |
| 클라우드 배포 경험 | [T5 Phase 5](../T5%20AI%20%EC%84%9C%EB%B9%84%EC%8A%A4%20%EA%B0%9C%EB%B0%9C%EA%B3%BC%20%EC%9D%B8%ED%94%84%EB%9D%BC/05%20Phase%205%20-%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20AI%20%EC%9D%91%EC%9A%A9.md) |
| 기획서(PRD) | [Phase 1](01%20Phase%201%20-%20%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%EC%84%9C%EB%B9%84%EC%8A%A4%20%EA%B8%B0%ED%9A%8D.md) |
| 위험 평가 | [Phase 4](04%20Phase%204%20-%20%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%ED%8A%B9%EB%A1%A0%20%EC%9C%A4%EB%A6%AC%EC%99%80%20%EC%B5%9C%EC%8B%A0%20%EB%8F%99%ED%96%A5.md) |

## 캡스톤 I (4-1) — 만든다

1. **주제 확정과 팀 역할 분담** — [Phase 1](01%20Phase%201%20-%20%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%EC%84%9C%EB%B9%84%EC%8A%A4%20%EA%B8%B0%ED%9A%8D.md)의 PRD를 팀 버전으로 다시 쓴다
2. **데이터 확보 계획** — 어디서 얼마나, 라이선스는, 개인정보는
3. **베이스라인** — 가장 단순한 방법으로 먼저 만든다. 규칙 기반이어도 좋다. **여기서 성능 하한선이 정해진다**
4. **모델 개선** — [T3 Phase 4](../T3%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D%EA%B3%BC%20%EB%94%A5%EB%9F%AC%EB%8B%9D/04%20Phase%204%20-%20%EA%B8%B0%EA%B3%84%ED%95%99%EC%8A%B5%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8.md)의 오류 분석 루프를 그대로 돌린다
5. **서비스 연결** — 모델을 API로, API를 화면으로
6. **중간 발표** — 데모가 실제로 도는 상태로

## 캡스톤 II (4-2) — 운영하고 증명한다

1. **배포와 안정화** — 클라우드에 올리고 도메인·TLS를 건다
2. **사용자 테스트** — 최소 10명. **막힌 지점을 전부 기록한다**
3. **운영 지표** — 요청 수·지연시간·오류율·모델 성능을 볼 수 있게
4. **위험 대응** — [Phase 4](04%20Phase%204%20-%20%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%ED%8A%B9%EB%A1%A0%20%EC%9C%A4%EB%A6%AC%EC%99%80%20%EC%B5%9C%EC%8B%A0%20%EB%8F%99%ED%96%A5.md)의 평가 보고서에서 나온 항목을 실제로 막는다
5. **최종 발표와 문서** — 코드·README·시연 영상·발표 자료

## 참고할 캡스톤 형식 강의

강의로 배우는 단계는 아니지만, **"캡스톤을 어떻게 진행하고 무엇을 제출하는가"** 의 형식을 보고 싶을 때 아래를 참고한다.

데이터 사이언스 캡스톤 — 수집부터 발표까지의 표준 흐름

- [ ] [01 Project Scenario and Overview.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/10%20Applied%20Data%20Science%20Capstone/Module%201%20-%20Introduction/01%20Project%20Scenario%20and%20Overview.md)
- [ ] [02 Data Collection Overview.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/10%20Applied%20Data%20Science%20Capstone/Module%201%20-%20Introduction/02%20Data%20Collection%20Overview.md)
- [ ] [03 Data Wrangling Overview.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/10%20Applied%20Data%20Science%20Capstone/Module%201%20-%20Introduction/03%20Data%20Wrangling%20Overview.md)
- [ ] [01 Exploratory Data Analysis Overview.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/10%20Applied%20Data%20Science%20Capstone/Module%202%20-%20Exploratory%20Data%20Analysis%20%28EDA%29/01%20Exploratory%20Data%20Analysis%20Overview.md)
- [ ] [01 Interactive Visual Analytics and Dashboards.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/10%20Applied%20Data%20Science%20Capstone/Module%203%20-%20Interactive%20Visual%20Analytics%20and%20Dashboard/01%20Interactive%20Visual%20Analytics%20and%20Dashboards.md)
- [ ] [01 Predictive Analysis Overview.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/10%20Applied%20Data%20Science%20Capstone/Module%204%20-%20Predictive%20Analysis%20%28Classification%29/01%20Predictive%20Analysis%20Overview.md)
- [ ] [01 Elements Of A Successful Data Findings Report.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/10%20Applied%20Data%20Science%20Capstone/Module%205%20-%20Present%20Your%20Data-Driven%20Insights/01%20Elements%20Of%20A%20Successful%20Data%20Findings%20Report.md)
- [ ] [02 Best Practices For Presenting Your Findings.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/10%20Applied%20Data%20Science%20Capstone/Module%205%20-%20Present%20Your%20Data-Driven%20Insights/02%20Best%20Practices%20For%20Presenting%20Your%20Findings.md)

프론트엔드 캡스톤 — 프로젝트 착수·기반·기능·평가의 4단계

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

백엔드 캡스톤

- [ ] [01 Context Setting.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/05%20Capstone%20Project%20Using%20Node.js/Module%201%20-%20Capstone%20Project%20using%20Node.js/01%20Context%20Setting.md)
- [ ] [02 Project Brief.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/05%20Capstone%20Project%20Using%20Node.js/Module%201%20-%20Capstone%20Project%20using%20Node.js/02%20Project%20Brief.md) — **Meal Drop 캡스톤 요구사항과 설계 접근법**

로봇 캡스톤 (로봇 주제일 때)

- [ ] [01 Introduction to the Capstone Project - Mobile Manipulation.md](../../../courses/mooc/Robotics/Modern%20Robotics%20-%20Mechanics,%20Planning,%20and%20Control/Course%206%20-%20Capstone%20Project,%20Mobile%20Manipulation/Module%201%20-%20Introduction%20to%20the%20Capstone%20Project,%20and%20Milestone%201/01%20Introduction%20to%20the%20Capstone%20Project%20-%20Mobile%20Manipulation.md)
- [ ] [02 Video Summary of the Capstone Project.md](../../../courses/mooc/Robotics/Modern%20Robotics%20-%20Mechanics,%20Planning,%20and%20Control/Course%206%20-%20Capstone%20Project,%20Mobile%20Manipulation/Module%201%20-%20Introduction%20to%20the%20Capstone%20Project,%20and%20Milestone%201/02%20Video%20Summary%20of%20the%20Capstone%20Project.md)
- [ ] [03 (Optional Review) Omnidirectional Wheeled Mobile Robots (Chapter 13.2, Part 1 of 2).md](../../../courses/mooc/Robotics/Modern%20Robotics%20-%20Mechanics,%20Planning,%20and%20Control/Course%206%20-%20Capstone%20Project,%20Mobile%20Manipulation/Module%201%20-%20Introduction%20to%20the%20Capstone%20Project,%20and%20Milestone%201/03%20%28Optional%20Review%29%20Omnidirectional%20Wheeled%20Mobile%20Robots%20%28Chapter%2013.2,%20Part%201%20of%202%29.md)
- [ ] [04 (Optional Review) Omnidirectional Wheeled Mobile Robots (Chapter 13.2, Part 2 of 2).md](../../../courses/mooc/Robotics/Modern%20Robotics%20-%20Mechanics,%20Planning,%20and%20Control/Course%206%20-%20Capstone%20Project,%20Mobile%20Manipulation/Module%201%20-%20Introduction%20to%20the%20Capstone%20Project,%20and%20Milestone%201/04%20%28Optional%20Review%29%20Omnidirectional%20Wheeled%20Mobile%20Robots%20%28Chapter%2013.2,%20Part%202%20of%202%29.md)
- [ ] [05 (Optional Review) Odometry (Chapter 13.4).md](../../../courses/mooc/Robotics/Modern%20Robotics%20-%20Mechanics,%20Planning,%20and%20Control/Course%206%20-%20Capstone%20Project,%20Mobile%20Manipulation/Module%201%20-%20Introduction%20to%20the%20Capstone%20Project,%20and%20Milestone%201/05%20%28Optional%20Review%29%20Odometry%20%28Chapter%2013.4%29.md)
- [ ] [01 Milestone 2 - Reference Trajectory Generation.md](../../../courses/mooc/Robotics/Modern%20Robotics%20-%20Mechanics,%20Planning,%20and%20Control/Course%206%20-%20Capstone%20Project,%20Mobile%20Manipulation/Module%202%20-%20Milestone%202%20-%20Reference%20Trajectory%20Generation/01%20Milestone%202%20-%20Reference%20Trajectory%20Generation.md)
- [ ] [02 (Optional Review) Point-to-Point Trajectories (Chapters 9.1 and 9.2, Part 1 of 2).md](../../../courses/mooc/Robotics/Modern%20Robotics%20-%20Mechanics,%20Planning,%20and%20Control/Course%206%20-%20Capstone%20Project,%20Mobile%20Manipulation/Module%202%20-%20Milestone%202%20-%20Reference%20Trajectory%20Generation/02%20%28Optional%20Review%29%20Point-to-Point%20Trajectories%20%28Chapters%209.1%20and%209.2,%20Part%201%20of%202%29.md)
- [ ] [03 (Optional Review) Point-to-Point Trajectories (Chapters 9.1 and 9.2, Part 2 of 2).md](../../../courses/mooc/Robotics/Modern%20Robotics%20-%20Mechanics,%20Planning,%20and%20Control/Course%206%20-%20Capstone%20Project,%20Mobile%20Manipulation/Module%202%20-%20Milestone%202%20-%20Reference%20Trajectory%20Generation/03%20%28Optional%20Review%29%20Point-to-Point%20Trajectories%20%28Chapters%209.1%20and%209.2,%20Part%202%20of%202%29.md)
- [ ] [01 (Optional Review) Product of Exponentials Formula in the End-Effector Frame (Chapter 4.1.2).md](../../../courses/mooc/Robotics/Modern%20Robotics%20-%20Mechanics,%20Planning,%20and%20Control/Course%206%20-%20Capstone%20Project,%20Mobile%20Manipulation/Module%203%20-%20Milestone%203%20-%20Feedforward%20Control/01%20%28Optional%20Review%29%20Product%20of%20Exponentials%20Formula%20in%20the%20End-Effector%20Frame%20%28Chapter%204.1.2%29.md)
- [ ] [02 (Optional Review) Body Jacobian (Chapter 5.1.2).md](../../../courses/mooc/Robotics/Modern%20Robotics%20-%20Mechanics,%20Planning,%20and%20Control/Course%206%20-%20Capstone%20Project,%20Mobile%20Manipulation/Module%203%20-%20Milestone%203%20-%20Feedforward%20Control/02%20%28Optional%20Review%29%20Body%20Jacobian%20%28Chapter%205.1.2%29.md)
- [ ] [03 (Optional Review) Motion Control with Velocity Inputs (Chapter 11.3, Part 3 of 3).md](../../../courses/mooc/Robotics/Modern%20Robotics%20-%20Mechanics,%20Planning,%20and%20Control/Course%206%20-%20Capstone%20Project,%20Mobile%20Manipulation/Module%203%20-%20Milestone%203%20-%20Feedforward%20Control/03%20%28Optional%20Review%29%20Motion%20Control%20with%20Velocity%20Inputs%20%28Chapter%2011.3,%20Part%203%20of%203%29.md)
- [ ] [04 (Optional Review) Mobile Manipulation (Chapter 13.5).md](../../../courses/mooc/Robotics/Modern%20Robotics%20-%20Mechanics,%20Planning,%20and%20Control/Course%206%20-%20Capstone%20Project,%20Mobile%20Manipulation/Module%203%20-%20Milestone%203%20-%20Feedforward%20Control/04%20%28Optional%20Review%29%20Mobile%20Manipulation%20%28Chapter%2013.5%29.md)
- [ ] [01 Completing the Project and Your Submission.md](../../../courses/mooc/Robotics/Modern%20Robotics%20-%20Mechanics,%20Planning,%20and%20Control/Course%206%20-%20Capstone%20Project,%20Mobile%20Manipulation/Module%204%20-%20Completing%20the%20Project%20and%20Your%20Submission/01%20Completing%20the%20Project%20and%20Your%20Submission.md)

## 발표를 위한 데이터 스토리텔링

함께 보기: Data Analytics, `Course 5 - Data Storytelling` module 01·03. **결과를 어떻게 보여 주는가**가 캡스톤 점수의 큰 부분이다

- [ ] [01 Welcome to Course 5.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2001%20Communicating%20insights/01%20Welcome%20to%20Course%205.md)
- [ ] [02 Module 1 Introduction.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2001%20Communicating%20insights/02%20Module%201%20Introduction.md)
- [ ] [03 From Technical Skills to Business Value.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2001%20Communicating%20insights/03%20From%20Technical%20Skills%20to%20Business%20Value.md)
- [ ] [04 Data Storytelling.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2001%20Communicating%20insights/04%20Data%20Storytelling.md)
- [ ] [05 Crafting a Narrative.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2001%20Communicating%20insights/05%20Crafting%20a%20Narrative.md)
- [ ] [06 Identifying Your Main Conclusion.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2001%20Communicating%20insights/06%20Identifying%20Your%20Main%20Conclusion.md)
- [ ] [07 Choosing Supporting Evidence.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2001%20Communicating%20insights/07%20Choosing%20Supporting%20Evidence.md)
- [ ] [08 Ordering Evidence.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2001%20Communicating%20insights/08%20Ordering%20Evidence.md)
- [ ] [09 Designing Your Report.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2001%20Communicating%20insights/09%20Designing%20Your%20Report.md)
- [ ] [10 Getting Feedback on Your Report.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2001%20Communicating%20insights/10%20Getting%20Feedback%20on%20Your%20Report.md)
- [ ] [11 Creating a Memo.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2001%20Communicating%20insights/11%20Creating%20a%20Memo.md)
- [ ] [12 Creating a Notebook.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2001%20Communicating%20insights/12%20Creating%20a%20Notebook.md)
- [ ] [13 Creating a Slide Deck.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2001%20Communicating%20insights/13%20Creating%20a%20Slide%20Deck.md)
- [ ] [14 Creating Appendices.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2001%20Communicating%20insights/14%20Creating%20Appendices.md)

- [ ] [01 Module 3 Introduction.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2003%20Dashboards%20and%20stories/01%20Module%203%20Introduction.md)
- [ ] [02 Introduction to Dashboards.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2003%20Dashboards%20and%20stories/02%20Introduction%20to%20Dashboards.md)
- [ ] [03 Components of a Dashboard.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2003%20Dashboards%20and%20stories/03%20Components%20of%20a%20Dashboard.md)
- [ ] [04 Selecting Insights for a Dashboard.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2003%20Dashboards%20and%20stories/04%20Selecting%20Insights%20for%20a%20Dashboard.md)
- [ ] [05 Dashboards The Good and The Better.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2003%20Dashboards%20and%20stories/05%20Dashboards%20The%20Good%20and%20The%20Better.md)
- [ ] [06 Creating a Dashboard in Tableau.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2003%20Dashboards%20and%20stories/06%20Creating%20a%20Dashboard%20in%20Tableau.md)
- [ ] [07 Layout Design.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2003%20Dashboards%20and%20stories/07%20Layout%20Design.md)
- [ ] [08 Actions.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2003%20Dashboards%20and%20stories/08%20Actions.md)
- [ ] [09 Publishing a Dashboard.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2003%20Dashboards%20and%20stories/09%20Publishing%20a%20Dashboard.md)
- [ ] [10 Gaining Adoption for Your Dashboard.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2003%20Dashboards%20and%20stories/10%20Gaining%20Adoption%20for%20Your%20Dashboard.md)
- [ ] [11 Creating a Linear Story.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2003%20Dashboards%20and%20stories/11%20Creating%20a%20Linear%20Story.md)
- [ ] [12 Creating a Nonlinear Story.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2003%20Dashboards%20and%20stories/12%20Creating%20a%20Nonlinear%20Story.md)

## 산출물 — 이 로드맵의 도착점

**직접 학습시킨 모델을 붙인 AI 서비스가 클라우드에서 돌고, 남이 쓸 수 있다.** 구체적으로:

1. 공개 URL — 누구나 접속해 핵심 기능 한 바퀴를 돌 수 있다
2. 모델 — 남의 API를 부르는 것이 아니라 **내가 학습시키거나 파인튜닝한 모델**이 하나 이상
3. 저장소 — README에 아키텍처 그림, 실행 방법, 성능 지표
4. 운영 기록 — 배포 후 최소 4주간의 지표와, 그동안 고친 것들
5. 회고 한 페이지 — **다시 만든다면 무엇을 다르게 할 것인가**

## 다음 단계

→ [06 Phase 6 - 현장실습과 졸업종합평가](06%20Phase%206%20-%20%ED%98%84%EC%9E%A5%EC%8B%A4%EC%8A%B5%EA%B3%BC%20%EC%A1%B8%EC%97%85%EC%A2%85%ED%95%A9%ED%8F%89%EA%B0%80.md)

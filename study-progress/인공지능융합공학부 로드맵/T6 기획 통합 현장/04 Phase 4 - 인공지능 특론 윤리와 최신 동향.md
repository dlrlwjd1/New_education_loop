# T6 Phase 4 — 인공지능 특론 (윤리와 최신 동향)

> 학부 교과 **인공지능특론 I(4학년 1학기) · 인공지능특론 II(4학년 2학기)**, 각 이론실습병행 3학점
> 교과목해설: "인공지능의 최신 주제와 기술을 심층적으로 다룬다. **인공지능 윤리에 대한 학습과 토론을 진행하며**, 최신 연구 동향과 혁신적인 기술에 대해 공부하고 프로젝트를 수행한다"
>
> ※ 교육과정표에는 인공지능특론 I(4-1)·II(4-2)로 나뉘어 있으나, 교과목해설 페이지에는 **두 학기 모두 "인공지능특론 Ⅰ"로 같은 설명이 실려 있다.** II의 별도 설명은 확인하지 못했다.

- 목표: 내가 만든 서비스가 **누구에게 어떻게 해를 끼칠 수 있는지** 구조적으로 점검한다.
- 분량: 약 23시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 알고리즘 편향이 어디서 들어오는지 데이터·모델·배포 단계별로 짚는다
- 공정성 지표들이 서로 충돌한다는 것을 알고, 무엇을 고를지 판단한다
- 설명 가능한 AI(XAI)가 필요한 상황과 그 한계를 말한다
- LLM 특유의 위협(프롬프트 인젝션·데이터 유출·모델 탈취)을 열거하고 대응을 설계한다
- AI 규제(EU AI Act 등)와 국내 규정의 요구를 개발 요구사항으로 번역한다
- 최신 연구 동향을 스스로 따라가는 경로를 갖는다

## 4-A. AI 거버넌스와 공정성

메인: AI Strategy and Governance (MOOC)

- [ ] [01 Intro to AI Strategy.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%201%20-%20Economics%20of%20AI/01%20Intro%20to%20AI%20Strategy.md)
- [ ] [02 AI- Driven Business Transformation.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%201%20-%20Economics%20of%20AI/02%20AI-%20Driven%20Business%20Transformation.md)
- [ ] [03 Developing a Portfolio.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%201%20-%20Economics%20of%20AI/03%20Developing%20a%20Portfolio.md)
- [ ] [04 Lowering Barriers for AI Use.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%201%20-%20Economics%20of%20AI/04%20Lowering%20Barriers%20for%20AI%20Use.md)
- [ ] [05 Economics of AI - Software.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%201%20-%20Economics%20of%20AI/05%20Economics%20of%20AI%20-%20Software.md)
- [ ] [06 Economics of AI - Skills.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%201%20-%20Economics%20of%20AI/06%20Economics%20of%20AI%20-%20Skills.md)
- [ ] [07 Economics of AI - Compute.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%201%20-%20Economics%20of%20AI/07%20Economics%20of%20AI%20-%20Compute.md)
- [ ] [08 Economics of AI - Data.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%201%20-%20Economics%20of%20AI/08%20Economics%20of%20AI%20-%20Data.md)
- [ ] [09 Economics of AI - AutoML.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%201%20-%20Economics%20of%20AI/09%20Economics%20of%20AI%20-%20AutoML.md)
- [ ] [10 Economics of AI - Auto ML Hubris.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%201%20-%20Economics%20of%20AI/10%20Economics%20of%20AI%20-%20Auto%20ML%20Hubris.md)
- [ ] [11 Economics of AI - Competitive Implications.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%201%20-%20Economics%20of%20AI/11%20Economics%20of%20AI%20-%20Competitive%20Implications.md)
- [ ] [12 Interview with Apoorv Saxena.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%201%20-%20Economics%20of%20AI/12%20Interview%20with%20Apoorv%20Saxena.md)
- [ ] [13 AI in the Organization Structure.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%201%20-%20Economics%20of%20AI/13%20AI%20in%20the%20Organization%20Structure.md)
- [ ] [14 Interview With Barkha Saxena.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%201%20-%20Economics%20of%20AI/14%20Interview%20With%20Barkha%20Saxena.md)
- [ ] [01 Is AI and Data Analytics Suited for Innovation.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%202%20-%20AI%20Innovation/01%20Is%20AI%20and%20Data%20Analytics%20Suited%20for%20Innovation.md)
- [ ] [02 AI and Process Innovation.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%202%20-%20AI%20Innovation/02%20AI%20and%20Process%20Innovation.md)
- [ ] [03 Product Innovation.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%202%20-%20AI%20Innovation/03%20Product%20Innovation.md)
- [ ] [04 Different Types of Product Innovation.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%202%20-%20AI%20Innovation/04%20Different%20Types%20of%20Product%20Innovation.md)
- [ ] [05 Organization Factors.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%202%20-%20AI%20Innovation/05%20Organization%20Factors.md)
- [ ] [06 Dispersion of Employees.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%202%20-%20AI%20Innovation/06%20Dispersion%20of%20Employees.md)
- [ ] [07 Managerial Practice.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%202%20-%20AI%20Innovation/07%20Managerial%20Practice.md)
- [ ] [08 AI and Drug Example.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%202%20-%20AI%20Innovation/08%20AI%20and%20Drug%20Example.md)
- [ ] [01 Risks with AI.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%203%20-%20Algorithmic%20Bias%20and%20Fairness/01%20Risks%20with%20AI.md)
- [ ] [02 Algorithmic Bias and Fairness.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%203%20-%20Algorithmic%20Bias%20and%20Fairness/02%20Algorithmic%20Bias%20and%20Fairness.md)
- [ ] [03 Manipulation.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%203%20-%20Algorithmic%20Bias%20and%20Fairness/03%20Manipulation.md)
- [ ] [04 Data Protection.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%203%20-%20Algorithmic%20Bias%20and%20Fairness/04%20Data%20Protection.md)
- [ ] [05 Interview with Yogesh Mudgal.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%203%20-%20Algorithmic%20Bias%20and%20Fairness/05%20Interview%20with%20Yogesh%20Mudgal.md)
- [ ] [01 AI Governance.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%204%20-%20AI%20Governance%20and%20Explainable%20AI/01%20AI%20Governance.md)
- [ ] [02 AI Ethics Principles.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%204%20-%20AI%20Governance%20and%20Explainable%20AI/02%20AI%20Ethics%20Principles.md)
- [ ] [03 Explainable AI - What is Explainable AI.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%204%20-%20AI%20Governance%20and%20Explainable%20AI/03%20Explainable%20AI%20-%20What%20is%20Explainable%20AI.md)
- [ ] [04 Explainable AI - Examples of When Explainability is Important.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%204%20-%20AI%20Governance%20and%20Explainable%20AI/04%20Explainable%20AI%20-%20Examples%20of%20When%20Explainability%20is%20Important.md)
- [ ] [05 Explainable AI - Tradeoffs Between Interpretability and Performance.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%204%20-%20AI%20Governance%20and%20Explainable%20AI/05%20Explainable%20AI%20-%20Tradeoffs%20Between%20Interpretability%20and%20Performance.md)
- [ ] [06 Explainable AI - Approaches to Explainable AI.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%204%20-%20AI%20Governance%20and%20Explainable%20AI/06%20Explainable%20AI%20-%20Approaches%20to%20Explainable%20AI.md)
- [ ] [07 Explainability and the Law.md](../../../courses/mooc/AI%20Strategy%20and%20Business/AI%20Strategy%20and%20Governance/Module%204%20-%20AI%20Governance%20and%20Explainable%20AI/07%20Explainability%20and%20the%20Law.md)

## 4-B. 책임 있는 AI 실무

메인: MLOps and Responsible AI Practices, Module 4

- [ ] [01 Module 4 Introduction - From a Working Model to a Trustworthy System.md](../../../courses/mooc/MLOps/MLOps%20and%20Responsible%20AI%20Practices/Module%204%20-%20Ethical%20AI%20and%20Responsible%20AI%20Practices/01%20Module%204%20Introduction%20-%20From%20a%20Working%20Model%20to%20a%20Trustworthy%20System.md)
- [ ] [02 Why Ethics Matter in AI.md](../../../courses/mooc/MLOps/MLOps%20and%20Responsible%20AI%20Practices/Module%204%20-%20Ethical%20AI%20and%20Responsible%20AI%20Practices/02%20Why%20Ethics%20Matter%20in%20AI.md)
- [ ] [03 Guidelines for Ethical AI.md](../../../courses/mooc/MLOps/MLOps%20and%20Responsible%20AI%20Practices/Module%204%20-%20Ethical%20AI%20and%20Responsible%20AI%20Practices/03%20Guidelines%20for%20Ethical%20AI.md)
- [ ] [04 Introducing the Azure Responsible AI Dashboard.md](../../../courses/mooc/MLOps/MLOps%20and%20Responsible%20AI%20Practices/Module%204%20-%20Ethical%20AI%20and%20Responsible%20AI%20Practices/04%20Introducing%20the%20Azure%20Responsible%20AI%20Dashboard.md)
- [ ] [05 Implementing Ethics in AI.md](../../../courses/mooc/MLOps/MLOps%20and%20Responsible%20AI%20Practices/Module%204%20-%20Ethical%20AI%20and%20Responsible%20AI%20Practices/05%20Implementing%20Ethics%20in%20AI.md)
- [ ] [06 Integrating Microsoft's Responsible AI Practices and AETHER Guidelines.md](../../../courses/mooc/MLOps/MLOps%20and%20Responsible%20AI%20Practices/Module%204%20-%20Ethical%20AI%20and%20Responsible%20AI%20Practices/06%20Integrating%20Microsoft's%20Responsible%20AI%20Practices%20and%20AETHER%20Guidelines.md)
- [ ] [07 Implementing Responsible AI with Microsoft Guidelines.md](../../../courses/mooc/MLOps/MLOps%20and%20Responsible%20AI%20Practices/Module%204%20-%20Ethical%20AI%20and%20Responsible%20AI%20Practices/07%20Implementing%20Responsible%20AI%20with%20Microsoft%20Guidelines.md)
- [ ] [08 Responsible AI Implementation.md](../../../courses/mooc/MLOps/MLOps%20and%20Responsible%20AI%20Practices/Module%204%20-%20Ethical%20AI%20and%20Responsible%20AI%20Practices/08%20Responsible%20AI%20Implementation.md)
- [ ] [09 Integrating Responsible AI into Your MLOps Pipeline.md](../../../courses/mooc/MLOps/MLOps%20and%20Responsible%20AI%20Practices/Module%204%20-%20Ethical%20AI%20and%20Responsible%20AI%20Practices/09%20Integrating%20Responsible%20AI%20into%20Your%20MLOps%20Pipeline.md)
- [ ] [10 Module 4 Summary - From Ethical Principles to an Integrated Pipeline.md](../../../courses/mooc/MLOps/MLOps%20and%20Responsible%20AI%20Practices/Module%204%20-%20Ethical%20AI%20and%20Responsible%20AI%20Practices/10%20Module%204%20Summary%20-%20From%20Ethical%20Principles%20to%20an%20Integrated%20Pipeline.md)
- [ ] [11 Course Summary - Integrating MLOps and Ethics for Production AI.md](../../../courses/mooc/MLOps/MLOps%20and%20Responsible%20AI%20Practices/Module%204%20-%20Ethical%20AI%20and%20Responsible%20AI%20Practices/11%20Course%20Summary%20-%20Integrating%20MLOps%20and%20Ethics%20for%20Production%20AI.md)

## 4-C. 생성형 AI 보안

메인: Generative AI and LLM Security. **[Phase 3](03%20Phase%203%20-%20%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%EC%84%9C%EB%B9%84%EC%8A%A4%20%EA%B0%9C%EB%B0%9C%20II.md)에서 만든 에이전트에 그대로 적용된다**

- [ ] [01 Specialization Introduction.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%201%20-%20Threats%20in%20Generative%20AI%20Systems/01%20Specialization%20Introduction.md)
- [ ] [02 Course Introduction.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%201%20-%20Threats%20in%20Generative%20AI%20Systems/02%20Course%20Introduction.md)
- [ ] [03 Common Attack Vectors in Generative AI Systems.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%201%20-%20Threats%20in%20Generative%20AI%20Systems/03%20Common%20Attack%20Vectors%20in%20Generative%20AI%20Systems.md)
- [ ] [04 Prompt Injection Attack.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%201%20-%20Threats%20in%20Generative%20AI%20Systems/04%20Prompt%20Injection%20Attack.md)
- [ ] [05 AI Jailbreak Attack.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%201%20-%20Threats%20in%20Generative%20AI%20Systems/05%20AI%20Jailbreak%20Attack.md)
- [ ] [06 Demonstration - Detecting Prompt Injection and Jailbreak Risks.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%201%20-%20Threats%20in%20Generative%20AI%20Systems/06%20Demonstration%20-%20Detecting%20Prompt%20Injection%20and%20Jailbreak%20Risks.md)
- [ ] [07 Model Theft and Extraction Attacks.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%201%20-%20Threats%20in%20Generative%20AI%20Systems/07%20Model%20Theft%20and%20Extraction%20Attacks.md)
- [ ] [08 Mitigation Strategies for GenAI Risks.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%201%20-%20Threats%20in%20Generative%20AI%20Systems/08%20Mitigation%20Strategies%20for%20GenAI%20Risks.md)
- [ ] [09 LLM-Specific Threats and Risks.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%201%20-%20Threats%20in%20Generative%20AI%20Systems/09%20LLM-Specific%20Threats%20and%20Risks.md)
- [ ] [10 Aligning LLM Output to Security Objectives.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%201%20-%20Threats%20in%20Generative%20AI%20Systems/10%20Aligning%20LLM%20Output%20to%20Security%20Objectives.md)
- [ ] [11 Guardrails and Safety Mechanisms for LLMs.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%201%20-%20Threats%20in%20Generative%20AI%20Systems/11%20Guardrails%20and%20Safety%20Mechanisms%20for%20LLMs.md)
- [ ] [12 Understanding LLM APIs and Their Types.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%201%20-%20Threats%20in%20Generative%20AI%20Systems/12%20Understanding%20LLM%20APIs%20and%20Their%20Types.md)
- [ ] [13 Demonstration - LLM Integration with Gemini API.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%201%20-%20Threats%20in%20Generative%20AI%20Systems/13%20Demonstration%20-%20LLM%20Integration%20with%20Gemini%20API.md)
- [ ] [01 The Importance of Secure Data in AI Development.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%202%20-%20AI%20Lifecycle%20Security/01%20The%20Importance%20of%20Secure%20Data%20in%20AI%20Development.md)
- [ ] [02 Data Poisoning and Detection Techniques.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%202%20-%20AI%20Lifecycle%20Security/02%20Data%20Poisoning%20and%20Detection%20Techniques.md)
- [ ] [03 Best Practices for Securing AI Data Pipelines.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%202%20-%20AI%20Lifecycle%20Security/03%20Best%20Practices%20for%20Securing%20AI%20Data%20Pipelines.md)
- [ ] [04 Demonstration - Securing AI Data Against Poisoning Risks.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%202%20-%20AI%20Lifecycle%20Security/04%20Demonstration%20-%20Securing%20AI%20Data%20Against%20Poisoning%20Risks.md)
- [ ] [05 Model Provenance and Lineage Tracking.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%202%20-%20AI%20Lifecycle%20Security/05%20Model%20Provenance%20and%20Lineage%20Tracking.md)
- [ ] [06 Dependency Scanning and Third-Party Model Risks.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%202%20-%20AI%20Lifecycle%20Security/06%20Dependency%20Scanning%20and%20Third-Party%20Model%20Risks.md)
- [ ] [07 Secure Model Distribution and Verification Techniques.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%202%20-%20AI%20Lifecycle%20Security/07%20Secure%20Model%20Distribution%20and%20Verification%20Techniques.md)
- [ ] [08 Artifact Signing and Model Integrity Checks.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%202%20-%20AI%20Lifecycle%20Security/08%20Artifact%20Signing%20and%20Model%20Integrity%20Checks.md)
- [ ] [09 Secure Storage and Key Management for AI Artifacts.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%202%20-%20AI%20Lifecycle%20Security/09%20Secure%20Storage%20and%20Key%20Management%20for%20AI%20Artifacts.md)
- [ ] [10 Monitoring for Tampering in Pre-Post-Deployment.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%202%20-%20AI%20Lifecycle%20Security/10%20Monitoring%20for%20Tampering%20in%20Pre-Post-Deployment.md)
- [ ] [11 Demonstration - Tracking Model Provenance and Scanning Dependencies.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%202%20-%20AI%20Lifecycle%20Security/11%20Demonstration%20-%20Tracking%20Model%20Provenance%20and%20Scanning%20Dependencies.md)
- [ ] [01 Bias, Fairness, and Ethical Design in AI Systems.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%203%20-%20AI%20Ethics%20and%20Regulatory%20Compliance/01%20Bias,%20Fairness,%20and%20Ethical%20Design%20in%20AI%20Systems.md)
- [ ] [02 Transparency and Accountability in GenAI Systems.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%203%20-%20AI%20Ethics%20and%20Regulatory%20Compliance/02%20Transparency%20and%20Accountability%20in%20GenAI%20Systems.md)
- [ ] [03 Ethical Challenges in Generative Models.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%203%20-%20AI%20Ethics%20and%20Regulatory%20Compliance/03%20Ethical%20Challenges%20in%20Generative%20Models.md)
- [ ] [04 GDPR, CCPA, and AI Compliance Requirements.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%203%20-%20AI%20Ethics%20and%20Regulatory%20Compliance/04%20GDPR,%20CCPA,%20and%20AI%20Compliance%20Requirements.md)
- [ ] [05 Understanding NIST and ISO AI Risk Frameworks.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%203%20-%20AI%20Ethics%20and%20Regulatory%20Compliance/05%20Understanding%20NIST%20and%20ISO%20AI%20Risk%20Frameworks.md)
- [ ] [06 AI Auditing and Legal Considerations.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%203%20-%20AI%20Ethics%20and%20Regulatory%20Compliance/06%20AI%20Auditing%20and%20Legal%20Considerations.md)
- [ ] [07 Demonstration - Exploring Sola Security Features.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%203%20-%20AI%20Ethics%20and%20Regulatory%20Compliance/07%20Demonstration%20-%20Exploring%20Sola%20Security%20Features.md)
- [ ] [08 Demonstration - Ethical Screening using Sola Security.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%203%20-%20AI%20Ethics%20and%20Regulatory%20Compliance/08%20Demonstration%20-%20Ethical%20Screening%20using%20Sola%20Security.md)
- [ ] [01 Introduction to Multimodal AI.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%204%20-%20Frontier%20Threats%20in%20AI%20Systems/01%20Introduction%20to%20Multimodal%20AI.md)
- [ ] [02 Security Threats to Multimodal AI.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%204%20-%20Frontier%20Threats%20in%20AI%20Systems/02%20Security%20Threats%20to%20Multimodal%20AI.md)
- [ ] [03 Demonstration - Multimodal AI for Email Threat Detection.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%204%20-%20Frontier%20Threats%20in%20AI%20Systems/03%20Demonstration%20-%20Multimodal%20AI%20for%20Email%20Threat%20Detection.md)
- [ ] [04 What is Agentic AI.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%204%20-%20Frontier%20Threats%20in%20AI%20Systems/04%20What%20is%20Agentic%20AI.md)
- [ ] [05 Agentic AI in Cybersecuriy.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%204%20-%20Frontier%20Threats%20in%20AI%20Systems/05%20Agentic%20AI%20in%20Cybersecuriy.md)
- [ ] [06 Demonstration - Agentic AI for Cybersecurity Triage.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%204%20-%20Frontier%20Threats%20in%20AI%20Systems/06%20Demonstration%20-%20Agentic%20AI%20for%20Cybersecurity%20Triage.md)
- [ ] [01 Course Summary.md](../../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%205%20-%20Course%20Wrap-Up%20and%20Assessment/01%20Course%20Summary.md)

> 보안을 더 파고들 생각이면 **보안 로드맵**의 `11 부록 - AI 앱 보안과 진단 자동화`가 이어진다.

## 4-D. AI와 사회 — 토론 재료

함께 보기: Generative AI for Everyone week 3

- [ ] [01 Generative AI in business.md](../../../courses/deeplearning-ai/Generative%20AI%20for%20Everyone/week%2003%20Generative%20AI%20in%20Business%20and%20Society/Generative%20AI%20and%20business/01%20Generative%20AI%20in%20business.md)
- [ ] [02 Tasks, not jobs.md](../../../courses/deeplearning-ai/Generative%20AI%20for%20Everyone/week%2003%20Generative%20AI%20in%20Business%20and%20Society/Generative%20AI%20and%20business/02%20Tasks,%20not%20jobs.md)
- [ ] [03 Job task analysis examples.md](../../../courses/deeplearning-ai/Generative%20AI%20for%20Everyone/week%2003%20Generative%20AI%20in%20Business%20and%20Society/Generative%20AI%20and%20business/03%20Job%20task%20analysis%20examples.md)
- [ ] [04 AI and business value.md](../../../courses/deeplearning-ai/Generative%20AI%20for%20Everyone/week%2003%20Generative%20AI%20in%20Business%20and%20Society/Generative%20AI%20and%20business/04%20AI%20and%20business%20value.md)
- [ ] [05 Teams to build generative AI software.md](../../../courses/deeplearning-ai/Generative%20AI%20for%20Everyone/week%2003%20Generative%20AI%20in%20Business%20and%20Society/Generative%20AI%20and%20business/05%20Teams%20to%20build%20generative%20AI%20software.md)
- [ ] [06 Generative AI and jobs.md](../../../courses/deeplearning-ai/Generative%20AI%20for%20Everyone/week%2003%20Generative%20AI%20in%20Business%20and%20Society/Generative%20AI%20and%20business/06%20Generative%20AI%20and%20jobs.md)
- [ ] [07 Generative AI and business quiz.md](../../../courses/deeplearning-ai/Generative%20AI%20for%20Everyone/week%2003%20Generative%20AI%20in%20Business%20and%20Society/Generative%20AI%20and%20business/07%20Generative%20AI%20and%20business%20quiz.md)
- [ ] [01 Concerns about AI.md](../../../courses/deeplearning-ai/Generative%20AI%20for%20Everyone/week%2003%20Generative%20AI%20in%20Business%20and%20Society/Generative%20AI%20and%20society/01%20Concerns%20about%20AI.md)
- [ ] [02 AGI.md](../../../courses/deeplearning-ai/Generative%20AI%20for%20Everyone/week%2003%20Generative%20AI%20in%20Business%20and%20Society/Generative%20AI%20and%20society/02%20AGI.md)
- [ ] [03 Responsible AI.md](../../../courses/deeplearning-ai/Generative%20AI%20for%20Everyone/week%2003%20Generative%20AI%20in%20Business%20and%20Society/Generative%20AI%20and%20society/03%20Responsible%20AI.md)
- [ ] [04 Generative AI and society quiz.md](../../../courses/deeplearning-ai/Generative%20AI%20for%20Everyone/week%2003%20Generative%20AI%20in%20Business%20and%20Society/Generative%20AI%20and%20society/04%20Generative%20AI%20and%20society%20quiz.md)
- [ ] [05 Course summary.md](../../../courses/deeplearning-ai/Generative%20AI%20for%20Everyone/week%2003%20Generative%20AI%20in%20Business%20and%20Society/Generative%20AI%20and%20society/05%20Course%20summary.md)
- [ ] [06 Building a more intelligent world.md](../../../courses/deeplearning-ai/Generative%20AI%20for%20Everyone/week%2003%20Generative%20AI%20in%20Business%20and%20Society/Generative%20AI%20and%20society/06%20Building%20a%20more%20intelligent%20world.md)
- [ ] [Week 3 resources.md](../../../courses/deeplearning-ai/Generative%20AI%20for%20Everyone/week%2003%20Generative%20AI%20in%20Business%20and%20Society/Week%203%20resources.md)

## 4-E. 최신 동향을 따라가는 경로 (강의 없음)

교과목해설의 "최신 연구 동향"은 강의로 채울 수 없다. 습관으로 만든다.

- 저장소의 [courses/youtube/AI Engineer](../../../courses/youtube/AI%20Engineer) · [courses/youtube/Andrej Karpathy](../../../courses/youtube/Andrej%20Karpathy) · [courses/youtube/Google Cloud Tech](../../../courses/youtube/Google%20Cloud%20Tech) 폴더에 이미 이런 성격의 노트가 쌓여 있다
- 새 영상·논문을 볼 때 `study` 스킬로 정리본을 남기면 이 폴더가 계속 자란다
- **한 학기에 논문 4편**을 목표로 잡는다. 읽은 뒤 한 페이지 요약 — 문제 / 기존 방법의 한계 / 제안 / 한계

## 산출물

**내 서비스의 위험 평가 보고서.** [Phase 3](03%20Phase%203%20-%20%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%EC%84%9C%EB%B9%84%EC%8A%A4%20%EA%B0%9C%EB%B0%9C%20II.md)의 v2를 대상으로 한다.

1. 데이터·모델·배포 단계별 편향 유입 경로 점검표
2. LLM 위협 목록과 각각에 대한 현재 방어 수준 (있음/부분/없음)
3. 프롬프트 인젝션을 **실제로 시도한 기록** — 성공했다면 어떻게 막았는지
4. 개인정보 처리 흐름도 — 어떤 데이터가 어디로 가고 얼마나 남는지
5. "이 서비스를 공개하면 안 되는 조건" 세 가지

## 다음 단계

→ [05 Phase 5 - 캡스톤 디자인 AI](05%20Phase%205%20-%20%EC%BA%A1%EC%8A%A4%ED%86%A4%20%EB%94%94%EC%9E%90%EC%9D%B8%20AI.md)

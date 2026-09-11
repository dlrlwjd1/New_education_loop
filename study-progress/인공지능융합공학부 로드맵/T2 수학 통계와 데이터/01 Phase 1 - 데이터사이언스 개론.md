# T2 Phase 1 — 데이터사이언스 개론

> 학부 교과 **데이터사이언스개론(1학년 1학기, 전공기초 3학점)**
> 교과목해설: "데이터·정보의 수집, 처리, 분석 및 처리를 위한 지식과 기술을 연구하는 학문인 데이터사이언스를 소개한다"

- 목표: 데이터로 문제를 푸는 일이 실제로 어떤 단계를 밟는지 알고, 각 단계에 어떤 도구가 붙는지 말한다.
- 분량: 약 16시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 데이터사이언스·머신러닝·AI·빅데이터가 각각 무엇을 가리키는지 구분해 말한다
- 업무 문제를 "무엇을 예측/설명하려는가"라는 분석 문제로 바꿔 쓴다
- CRISP-DM 계열 방법론의 단계를 순서대로 대고, 각 단계에서 나오는 산출물을 안다
- Jupyter·Git·주요 파이썬 패키지가 각각 어느 단계에서 쓰이는지 배치한다
- 정형/비정형 데이터와 주요 파일 포맷(CSV·JSON·Parquet 등)의 차이를 설명한다

## 1-A. 데이터사이언스란 무엇인가

메인: IBM Data Science, `01 What is Data Science`

- [ ] [01 Course Introduction.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%201%20-%20Defining%20Data%20Science%20and%20What%20Data%20Scientists%20Do/01%20Course%20Introduction.md)
- [ ] [02 What is Data Science.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%201%20-%20Defining%20Data%20Science%20and%20What%20Data%20Scientists%20Do/02%20What%20is%20Data%20Science.md)
- [ ] [03 Fundamentals of Data Science.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%201%20-%20Defining%20Data%20Science%20and%20What%20Data%20Scientists%20Do/03%20Fundamentals%20of%20Data%20Science.md)
- [ ] [04 The Many Paths to Data Science.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%201%20-%20Defining%20Data%20Science%20and%20What%20Data%20Scientists%20Do/04%20The%20Many%20Paths%20to%20Data%20Science.md)
- [ ] [05 Advice for New Data Scientists.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%201%20-%20Defining%20Data%20Science%20and%20What%20Data%20Scientists%20Do/05%20Advice%20for%20New%20Data%20Scientists.md)
- [ ] [06 Lesson Summary - Defining Data Science.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%201%20-%20Defining%20Data%20Science%20and%20What%20Data%20Scientists%20Do/06%20Lesson%20Summary%20-%20Defining%20Data%20Science.md)
- [ ] [07 A Day in the Life of a Data Scientist.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%201%20-%20Defining%20Data%20Science%20and%20What%20Data%20Scientists%20Do/07%20A%20Day%20in%20the%20Life%20of%20a%20Data%20Scientist.md)
- [ ] [08 Data Science Skills & Big Data.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%201%20-%20Defining%20Data%20Science%20and%20What%20Data%20Scientists%20Do/08%20Data%20Science%20Skills%20&%20Big%20Data.md)
- [ ] [09 Understanding Different Types of File Formats.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%201%20-%20Defining%20Data%20Science%20and%20What%20Data%20Scientists%20Do/09%20Understanding%20Different%20Types%20of%20File%20Formats.md)
- [ ] [10 Data Science Topics and Algorithms.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%201%20-%20Defining%20Data%20Science%20and%20What%20Data%20Scientists%20Do/10%20Data%20Science%20Topics%20and%20Algorithms.md)
- [ ] [11 Lesson Summary - What Do Data Scientists Do.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%201%20-%20Defining%20Data%20Science%20and%20What%20Data%20Scientists%20Do/11%20Lesson%20Summary%20-%20What%20Do%20Data%20Scientists%20Do.md)
- [ ] [01 How Big Data is Driving Digital Transformation.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%202%20-%20Data%20Science%20Topics/01%20How%20Big%20Data%20is%20Driving%20Digital%20Transformation.md)
- [ ] [02 Introduction to Cloud.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%202%20-%20Data%20Science%20Topics/02%20Introduction%20to%20Cloud.md)
- [ ] [03 Cloud for Data Science.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%202%20-%20Data%20Science%20Topics/03%20Cloud%20for%20Data%20Science.md)
- [ ] [04 Foundations of Big Data.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%202%20-%20Data%20Science%20Topics/04%20Foundations%20of%20Big%20Data.md)
- [ ] [05 Data Science and Big Data.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%202%20-%20Data%20Science%20Topics/05%20Data%20Science%20and%20Big%20Data.md)
- [ ] [06 What is Hadoop.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%202%20-%20Data%20Science%20Topics/06%20What%20is%20Hadoop.md)
- [ ] [07 Big Data Processing Tools - Hadoop, HDFS, Hive, and Spark.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%202%20-%20Data%20Science%20Topics/07%20Big%20Data%20Processing%20Tools%20-%20Hadoop,%20HDFS,%20Hive,%20and%20Spark.md)
- [ ] [08 Lesson Summary - Big Data and Data Mining.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%202%20-%20Data%20Science%20Topics/08%20Lesson%20Summary%20-%20Big%20Data%20and%20Data%20Mining.md)
- [ ] [09 Artificial Intelligence and Data Science.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%202%20-%20Data%20Science%20Topics/09%20Artificial%20Intelligence%20and%20Data%20Science.md)
- [ ] [10 Generative AI and Data Science.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%202%20-%20Data%20Science%20Topics/10%20Generative%20AI%20and%20Data%20Science.md)
- [ ] [11 Neural Networks and Deep Learning.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%202%20-%20Data%20Science%20Topics/11%20Neural%20Networks%20and%20Deep%20Learning.md)
- [ ] [12 Applications of Machine Learning.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%202%20-%20Data%20Science%20Topics/12%20Applications%20of%20Machine%20Learning.md)
- [ ] [13 Lesson Summary - Deep Learning and Machine Learning.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%202%20-%20Data%20Science%20Topics/13%20Lesson%20Summary%20-%20Deep%20Learning%20and%20Machine%20Learning.md)
- [ ] [01 How Should Companies Get Started in Data Science.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%203%20-%20Applications%20and%20Careers%20in%20Data%20Science/01%20How%20Should%20Companies%20Get%20Started%20in%20Data%20Science.md)
- [ ] [02 Old Problems, New Data Science Solutions.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%203%20-%20Applications%20and%20Careers%20in%20Data%20Science/02%20Old%20Problems,%20New%20Data%20Science%20Solutions.md)
- [ ] [03 Applications of Data Science.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%203%20-%20Applications%20and%20Careers%20in%20Data%20Science/03%20Applications%20of%20Data%20Science.md)
- [ ] [04 How Data Science is saving lives.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%203%20-%20Applications%20and%20Careers%20in%20Data%20Science/04%20How%20Data%20Science%20is%20saving%20lives.md)
- [ ] [05 Lesson Summary - Data Science Applications Domain.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%203%20-%20Applications%20and%20Careers%20in%20Data%20Science/05%20Lesson%20Summary%20-%20Data%20Science%20Applications%20Domain.md)
- [ ] [06 How Can Someone Become a Data Scientist.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%203%20-%20Applications%20and%20Careers%20in%20Data%20Science/06%20How%20Can%20Someone%20Become%20a%20Data%20Scientist.md)
- [ ] [07 Recruiting for Data Science.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%203%20-%20Applications%20and%20Careers%20in%20Data%20Science/07%20Recruiting%20for%20Data%20Science.md)
- [ ] [08 Careers in Data Science.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%203%20-%20Applications%20and%20Careers%20in%20Data%20Science/08%20Careers%20in%20Data%20Science.md)
- [ ] [09 Importance of Mathematics and Statistics for Data Science.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%203%20-%20Applications%20and%20Careers%20in%20Data%20Science/09%20Importance%20of%20Mathematics%20and%20Statistics%20for%20Data%20Science.md)
- [ ] [10 Lesson Summary - Careers and Recruiting in Data Science.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%203%20-%20Applications%20and%20Careers%20in%20Data%20Science/10%20Lesson%20Summary%20-%20Careers%20and%20Recruiting%20in%20Data%20Science.md)
- [ ] [01 Understanding Data.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%204%20-%20Data%20literacy%20for%20Data%20Science%20%28Optional%29/01%20Understanding%20Data.md)
- [ ] [02 Data Sources.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%204%20-%20Data%20literacy%20for%20Data%20Science%20%28Optional%29/02%20Data%20Sources.md)
- [ ] [03 Viewpoints - Working with Varied Data Sources and Types.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%204%20-%20Data%20literacy%20for%20Data%20Science%20%28Optional%29/03%20Viewpoints%20-%20Working%20with%20Varied%20Data%20Sources%20and%20Types.md)
- [ ] [04 Lesson Summary - Understanding Data.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%204%20-%20Data%20literacy%20for%20Data%20Science%20%28Optional%29/04%20Lesson%20Summary%20-%20Understanding%20Data.md)
- [ ] [05 Data Collection and Organization.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%204%20-%20Data%20literacy%20for%20Data%20Science%20%28Optional%29/05%20Data%20Collection%20and%20Organization.md)
- [ ] [06 Relational Database Management System.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%204%20-%20Data%20literacy%20for%20Data%20Science%20%28Optional%29/06%20Relational%20Database%20Management%20System.md)
- [ ] [07 NoSQL.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%204%20-%20Data%20literacy%20for%20Data%20Science%20%28Optional%29/07%20NoSQL.md)
- [ ] [08 Data Marts, Data Lakes, ETL, and Data Pipelines.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%204%20-%20Data%20literacy%20for%20Data%20Science%20%28Optional%29/08%20Data%20Marts,%20Data%20Lakes,%20ETL,%20and%20Data%20Pipelines.md)
- [ ] [09 Viewpoints - Considerations for Choice of Data Repository.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%204%20-%20Data%20literacy%20for%20Data%20Science%20%28Optional%29/09%20Viewpoints%20-%20Considerations%20for%20Choice%20of%20Data%20Repository.md)
- [ ] [10 Data Integration Platforms.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%204%20-%20Data%20literacy%20for%20Data%20Science%20%28Optional%29/10%20Data%20Integration%20Platforms.md)
- [ ] [11 Lesson Summary - Welcome to Data Literacy.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/01%20What%20is%20Data%20Science/Module%204%20-%20Data%20literacy%20for%20Data%20Science%20%28Optional%29/11%20Lesson%20Summary%20-%20Welcome%20to%20Data%20Literacy.md)

## 1-B. 도구 지형도

메인: IBM Data Science, `02 Tools for Data Science`

- [ ] [01 Course Introduction.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%201%20-%20Overview%20of%20Data%20Science%20Tools/01%20Course%20Introduction.md)
- [ ] [02 Categories of Data Science Tools.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%201%20-%20Overview%20of%20Data%20Science%20Tools/02%20Categories%20of%20Data%20Science%20Tools.md)
- [ ] [03 Open Source Tools for Data Science - Part 1.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%201%20-%20Overview%20of%20Data%20Science%20Tools/03%20Open%20Source%20Tools%20for%20Data%20Science%20-%20Part%201.md)
- [ ] [04 Open Source Tools for Data Science - Part 2.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%201%20-%20Overview%20of%20Data%20Science%20Tools/04%20Open%20Source%20Tools%20for%20Data%20Science%20-%20Part%202.md)
- [ ] [05 Commercial Tools for Data Science.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%201%20-%20Overview%20of%20Data%20Science%20Tools/05%20Commercial%20Tools%20for%20Data%20Science.md)
- [ ] [06 Cloud Based Tools for Data Science.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%201%20-%20Overview%20of%20Data%20Science%20Tools/06%20Cloud%20Based%20Tools%20for%20Data%20Science.md)
- [ ] [01 Languages of Data Science.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%202%20-%20Languages%20of%20Data%20Science/01%20Languages%20of%20Data%20Science.md)
- [ ] [02 Introduction to Python.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%202%20-%20Languages%20of%20Data%20Science/02%20Introduction%20to%20Python.md)
- [ ] [03 Introduction to R Language.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%202%20-%20Languages%20of%20Data%20Science/03%20Introduction%20to%20R%20Language.md)
- [ ] [04 Introduction to SQL.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%202%20-%20Languages%20of%20Data%20Science/04%20Introduction%20to%20SQL.md)
- [ ] [05 Other Languages for Data Science.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%202%20-%20Languages%20of%20Data%20Science/05%20Other%20Languages%20for%20Data%20Science.md)
- [ ] [01 Libraries for Data Science.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%203%20-%20Packages,%20APIs,%20Data%20Sets,%20and%20Models/01%20Libraries%20for%20Data%20Science.md)
- [ ] [02 Application Programming Interfaces (APIs).md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%203%20-%20Packages,%20APIs,%20Data%20Sets,%20and%20Models/02%20Application%20Programming%20Interfaces%20%28APIs%29.md)
- [ ] [03 Data Sets - Powering Data Science.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%203%20-%20Packages,%20APIs,%20Data%20Sets,%20and%20Models/03%20Data%20Sets%20-%20Powering%20Data%20Science.md)
- [ ] [04 Machine Learning Models – Learning from Models to Make Predictions.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%203%20-%20Packages,%20APIs,%20Data%20Sets,%20and%20Models/04%20Machine%20Learning%20Models%20%E2%80%93%20Learning%20from%20Models%20to%20Make%20Predictions.md)
- [ ] [05 The Model Asset eXchange.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%203%20-%20Packages,%20APIs,%20Data%20Sets,%20and%20Models/05%20The%20Model%20Asset%20eXchange.md)
- [ ] [01 Introduction to Jupyter Notebooks.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%204%20-%20Jupyter%20Notebooks%20and%20JupyterLab/01%20Introduction%20to%20Jupyter%20Notebooks.md)
- [ ] [02 Getting Started with Jupyter.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%204%20-%20Jupyter%20Notebooks%20and%20JupyterLab/02%20Getting%20Started%20with%20Jupyter.md)
- [ ] [03 Jupyter Kernels.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%204%20-%20Jupyter%20Notebooks%20and%20JupyterLab/03%20Jupyter%20Kernels.md)
- [ ] [04 Jupyter Architecture.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%204%20-%20Jupyter%20Notebooks%20and%20JupyterLab/04%20Jupyter%20Architecture.md)
- [ ] [05 Additional Anaconda Jupyter Environments.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%204%20-%20Jupyter%20Notebooks%20and%20JupyterLab/05%20Additional%20Anaconda%20Jupyter%20Environments.md)
- [ ] [06 Additional Cloud Based Jupyter Environments.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%204%20-%20Jupyter%20Notebooks%20and%20JupyterLab/06%20Additional%20Cloud%20Based%20Jupyter%20Environments.md)
- [ ] [01 Introduction to R and RStudio.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%205%20-%20RStudio%20&%20GitHub/01%20Introduction%20to%20R%20and%20RStudio.md)
- [ ] [02 Plotting in RStudio.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%205%20-%20RStudio%20&%20GitHub/02%20Plotting%20in%20RStudio.md)
- [ ] [03 Overview of Git -GitHub.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%205%20-%20RStudio%20&%20GitHub/03%20Overview%20of%20Git%20-GitHub.md)
- [ ] [04 Introduction to GitHub.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%205%20-%20RStudio%20&%20GitHub/04%20Introduction%20to%20GitHub.md)
- [ ] [05 GitHub Repositories.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%205%20-%20RStudio%20&%20GitHub/05%20GitHub%20Repositories.md)
- [ ] [06 GitHub - Getting Started.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%205%20-%20RStudio%20&%20GitHub/06%20GitHub%20-%20Getting%20Started.md)
- [ ] [07 GitHub - Working with Branches.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/02%20Tools%20for%20Data%20Science/Module%205%20-%20RStudio%20&%20GitHub/07%20GitHub%20-%20Working%20with%20Branches.md)

## 1-C. 방법론 — 문제에서 배포까지의 단계

메인: IBM Data Science, `03 Data Science Methodology`. **이 절이 Phase 1의 핵심이다.** [T6 Phase 1(서비스 기획)](../T6%20%EA%B8%B0%ED%9A%8D%20%ED%86%B5%ED%95%A9%20%ED%98%84%EC%9E%A5/01%20Phase%201%20-%20%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%EC%84%9C%EB%B9%84%EC%8A%A4%20%EA%B8%B0%ED%9A%8D.md)과 [T3 Phase 4(기계학습 프로젝트)](../T3%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D%EA%B3%BC%20%EB%94%A5%EB%9F%AC%EB%8B%9D/04%20Phase%204%20-%20%EA%B8%B0%EA%B3%84%ED%95%99%EC%8A%B5%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8.md)에서 계속 돌아오게 된다

- [ ] [01 Course Introduction.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/03%20Data%20Science%20Methodology/Module%201%20-%20From%20Problem%20to%20Approach%20and%20From%20Requirements%20to%20Collection/01%20Course%20Introduction.md)
- [ ] [02 Data Science Methodology Overview.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/03%20Data%20Science%20Methodology/Module%201%20-%20From%20Problem%20to%20Approach%20and%20From%20Requirements%20to%20Collection/02%20Data%20Science%20Methodology%20Overview.md)
- [ ] [03 Business Understanding.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/03%20Data%20Science%20Methodology/Module%201%20-%20From%20Problem%20to%20Approach%20and%20From%20Requirements%20to%20Collection/03%20Business%20Understanding.md)
- [ ] [04 Analytic Approach.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/03%20Data%20Science%20Methodology/Module%201%20-%20From%20Problem%20to%20Approach%20and%20From%20Requirements%20to%20Collection/04%20Analytic%20Approach.md)
- [ ] [05 Data Requirements.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/03%20Data%20Science%20Methodology/Module%201%20-%20From%20Problem%20to%20Approach%20and%20From%20Requirements%20to%20Collection/05%20Data%20Requirements.md)
- [ ] [06 Data Collection.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/03%20Data%20Science%20Methodology/Module%201%20-%20From%20Problem%20to%20Approach%20and%20From%20Requirements%20to%20Collection/06%20Data%20Collection.md)
- [ ] [01 Data Understanding.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/03%20Data%20Science%20Methodology/Module%202%20-%20From%20Understanding%20to%20Preparation%20and%20From%20Modeling%20to%20Evaluation/01%20Data%20Understanding.md)
- [ ] [02 Data Preparation - Concepts.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/03%20Data%20Science%20Methodology/Module%202%20-%20From%20Understanding%20to%20Preparation%20and%20From%20Modeling%20to%20Evaluation/02%20Data%20Preparation%20-%20Concepts.md)
- [ ] [03 Data Preparation - Case Study.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/03%20Data%20Science%20Methodology/Module%202%20-%20From%20Understanding%20to%20Preparation%20and%20From%20Modeling%20to%20Evaluation/03%20Data%20Preparation%20-%20Case%20Study.md)
- [ ] [04 Modeling - Concepts.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/03%20Data%20Science%20Methodology/Module%202%20-%20From%20Understanding%20to%20Preparation%20and%20From%20Modeling%20to%20Evaluation/04%20Modeling%20-%20Concepts.md)
- [ ] [05 Modeling - Case Study.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/03%20Data%20Science%20Methodology/Module%202%20-%20From%20Understanding%20to%20Preparation%20and%20From%20Modeling%20to%20Evaluation/05%20Modeling%20-%20Case%20Study.md)
- [ ] [06 Evaluation.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/03%20Data%20Science%20Methodology/Module%202%20-%20From%20Understanding%20to%20Preparation%20and%20From%20Modeling%20to%20Evaluation/06%20Evaluation.md)
- [ ] [01 Deployment.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/03%20Data%20Science%20Methodology/Module%203%20-%20From%20Deployment%20to%20Feedback%20and%20Final%20Evaluation/01%20Deployment.md)
- [ ] [02 Feedback.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/03%20Data%20Science%20Methodology/Module%203%20-%20From%20Deployment%20to%20Feedback%20and%20Final%20Evaluation/02%20Feedback.md)
- [ ] [03 Storytelling.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/03%20Data%20Science%20Methodology/Module%203%20-%20From%20Deployment%20to%20Feedback%20and%20Final%20Evaluation/03%20Storytelling.md)
- [ ] [04 Course Summary.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/03%20Data%20Science%20Methodology/Module%203%20-%20From%20Deployment%20to%20Feedback%20and%20Final%20Evaluation/04%20Course%20Summary.md)
- [ ] [01 Introduction to CRISP-DM.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/03%20Data%20Science%20Methodology/Module%204%20-%20Final%20Project%20and%20Assessment/01%20Introduction%20to%20CRISP-DM.md)

## 1-D. 데이터 분석가의 일 — 다른 관점으로 한 번 더

함께 보기: Data Analytics, `Course 1 - Data Analytics Foundations` (IBM 쪽이 "데이터 사이언티스트"라면 이쪽은 "데이터 분석가" 관점이다. 스프레드시트 실습이 있어 감을 잡기 쉽다)

- [ ] [01 Welcome to Data Analytics.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2001%20Data%20and%20the%20data%20analyst%20role/01%20Welcome%20to%20Data%20Analytics.md)
- [ ] [02 Generative AI in This Course.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2001%20Data%20and%20the%20data%20analyst%20role/02%20Generative%20AI%20in%20This%20Course.md)
- [ ] [03 Module 1 Introduction.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2001%20Data%20and%20the%20data%20analyst%20role/03%20Module%201%20Introduction.md)
- [ ] [04 Life as a Data Analyst.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2001%20Data%20and%20the%20data%20analyst%20role/04%20Life%20as%20a%20Data%20Analyst.md)
- [ ] [05 What is Data Analytics.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2001%20Data%20and%20the%20data%20analyst%20role/05%20What%20is%20Data%20Analytics.md)
- [ ] [06 Evidence-Based Decision Making.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2001%20Data%20and%20the%20data%20analyst%20role/06%20Evidence-Based%20Decision%20Making.md)
- [ ] [07 A History of Data Analytics.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2001%20Data%20and%20the%20data%20analyst%20role/07%20A%20History%20of%20Data%20Analytics.md)
- [ ] [08 Modern Industry Use Cases.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2001%20Data%20and%20the%20data%20analyst%20role/08%20Modern%20Industry%20Use%20Cases.md)
- [ ] [09 Defining Data.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2001%20Data%20and%20the%20data%20analyst%20role/09%20Defining%20Data.md)
- [ ] [10 Unstructured Data.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2001%20Data%20and%20the%20data%20analyst%20role/10%20Unstructured%20Data.md)
- [ ] [11 Structured Data.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2001%20Data%20and%20the%20data%20analyst%20role/11%20Structured%20Data.md)
- [ ] [12 Big Data.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2001%20Data%20and%20the%20data%20analyst%20role/12%20Big%20Data.md)
- [ ] [13 Data Ecosystems.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2001%20Data%20and%20the%20data%20analyst%20role/13%20Data%20Ecosystems.md)
- [ ] [14 Collaborators Outside Your Data Team.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2001%20Data%20and%20the%20data%20analyst%20role/14%20Collaborators%20Outside%20Your%20Data%20Team.md)
- [ ] [15 Collaborators on Your Data Team.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2001%20Data%20and%20the%20data%20analyst%20role/15%20Collaborators%20on%20Your%20Data%20Team.md)
- [ ] [16 Introduction to Large Language Models.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2001%20Data%20and%20the%20data%20analyst%20role/16%20Introduction%20to%20Large%20Language%20Models.md)
- [ ] [17 Choosing an LLM.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2001%20Data%20and%20the%20data%20analyst%20role/17%20Choosing%20an%20LLM.md)
- [ ] [18 Prompting LLMs.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2001%20Data%20and%20the%20data%20analyst%20role/18%20Prompting%20LLMs.md)
- [ ] [19 LLM Limitations.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2001%20Data%20and%20the%20data%20analyst%20role/19%20LLM%20Limitations.md)
- [ ] [20 Demo - Interacting with LLMs.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2001%20Data%20and%20the%20data%20analyst%20role/20%20Demo%20-%20Interacting%20with%20LLMs.md)
- [ ] [01 Module 2 Introduction.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2002%20Using%20spreadsheets%20for%20data%20analytics/01%20Module%202%20Introduction.md)
- [ ] [02 Solving Problems with Data.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2002%20Using%20spreadsheets%20for%20data%20analytics/02%20Solving%20Problems%20with%20Data.md)
- [ ] [03 Spreadsheets for Business Analytics.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2002%20Using%20spreadsheets%20for%20data%20analytics/03%20Spreadsheets%20for%20Business%20Analytics.md)
- [ ] [04 Navigating Google Sheets.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2002%20Using%20spreadsheets%20for%20data%20analytics/04%20Navigating%20Google%20Sheets.md)
- [ ] [05 Importing Data.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2002%20Using%20spreadsheets%20for%20data%20analytics/05%20Importing%20Data.md)
- [ ] [06 Sorting, Filtering, and Formatting.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2002%20Using%20spreadsheets%20for%20data%20analytics/06%20Sorting,%20Filtering,%20and%20Formatting.md)
- [ ] [07 Getting to Know Your Data.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2002%20Using%20spreadsheets%20for%20data%20analytics/07%20Getting%20to%20Know%20Your%20Data.md)
- [ ] [08 Summary Statistics - Max, Min, Average.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2002%20Using%20spreadsheets%20for%20data%20analytics/08%20Summary%20Statistics%20-%20Max,%20Min,%20Average.md)
- [ ] [09 Conditional Formatting.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2002%20Using%20spreadsheets%20for%20data%20analytics/09%20Conditional%20Formatting.md)
- [ ] [10 Summary Statistics - COUNTIF.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2002%20Using%20spreadsheets%20for%20data%20analytics/10%20Summary%20Statistics%20-%20COUNTIF.md)
- [ ] [11 Summary Statistics - SUMIF, AVERAGEIF.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2002%20Using%20spreadsheets%20for%20data%20analytics/11%20Summary%20Statistics%20-%20SUMIF,%20AVERAGEIF.md)
- [ ] [12 Summary Statistics - COUNTIFS, SUMIFS.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2002%20Using%20spreadsheets%20for%20data%20analytics/12%20Summary%20Statistics%20-%20COUNTIFS,%20SUMIFS.md)
- [ ] [13 Data Processing - IF, IFS, RIGHT, LEFT.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2002%20Using%20spreadsheets%20for%20data%20analytics/13%20Data%20Processing%20-%20IF,%20IFS,%20RIGHT,%20LEFT.md)
- [ ] [14 Where Does Data Come From.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2002%20Using%20spreadsheets%20for%20data%20analytics/14%20Where%20Does%20Data%20Come%20From.md)
- [ ] [15 Data Exploration with LLMs.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2002%20Using%20spreadsheets%20for%20data%20analytics/15%20Data%20Exploration%20with%20LLMs.md)
- [ ] [16 Introduction to Time Series.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2002%20Using%20spreadsheets%20for%20data%20analytics/16%20Introduction%20to%20Time%20Series.md)
- [ ] [17 Real-World Time Series.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2002%20Using%20spreadsheets%20for%20data%20analytics/17%20Real-World%20Time%20Series.md)
- [ ] [18 Moving Averages.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2002%20Using%20spreadsheets%20for%20data%20analytics/18%20Moving%20Averages.md)
- [ ] [19 Percent Change.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2002%20Using%20spreadsheets%20for%20data%20analytics/19%20Percent%20Change.md)
- [ ] [01 Module 3 Introduction.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2003%20Data%20visualization%20in%20spreadsheets/01%20Module%203%20Introduction.md)
- [ ] [02 What is Data Storytelling.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2003%20Data%20visualization%20in%20spreadsheets/02%20What%20is%20Data%20Storytelling.md)
- [ ] [03 The Language of Data Visualizations.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2003%20Data%20visualization%20in%20spreadsheets/03%20The%20Language%20of%20Data%20Visualizations.md)
- [ ] [04 Analyzing Visualizations.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2003%20Data%20visualization%20in%20spreadsheets/04%20Analyzing%20Visualizations.md)
- [ ] [05 The Right Chart for the Right Insight.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2003%20Data%20visualization%20in%20spreadsheets/05%20The%20Right%20Chart%20for%20the%20Right%20Insight.md)
- [ ] [06 Demo - Bar and Column Charts.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2003%20Data%20visualization%20in%20spreadsheets/06%20Demo%20-%20Bar%20and%20Column%20Charts.md)
- [ ] [07 Demo - Customizing Charts.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2003%20Data%20visualization%20in%20spreadsheets/07%20Demo%20-%20Customizing%20Charts.md)
- [ ] [08 Demo - Scatter Plots.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2003%20Data%20visualization%20in%20spreadsheets/08%20Demo%20-%20Scatter%20Plots.md)
- [ ] [09 Demo - Grouped Bar and Column Charts.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2003%20Data%20visualization%20in%20spreadsheets/09%20Demo%20-%20Grouped%20Bar%20and%20Column%20Charts.md)
- [ ] [10 Demo - Stacked Bar and Column Charts.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2003%20Data%20visualization%20in%20spreadsheets/10%20Demo%20-%20Stacked%20Bar%20and%20Column%20Charts.md)
- [ ] [11 Demo - Line Charts.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2003%20Data%20visualization%20in%20spreadsheets/11%20Demo%20-%20Line%20Charts.md)
- [ ] [12 Strategies for Effective Data Visualization.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2003%20Data%20visualization%20in%20spreadsheets/12%20Strategies%20for%20Effective%20Data%20Visualization.md)
- [ ] [13 Data Encoding.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2003%20Data%20visualization%20in%20spreadsheets/13%20Data%20Encoding.md)
- [ ] [14 Chart Elements.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2003%20Data%20visualization%20in%20spreadsheets/14%20Chart%20Elements.md)
- [ ] [15 Data Visualization Examples - The Good and the Better.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2003%20Data%20visualization%20in%20spreadsheets/15%20Data%20Visualization%20Examples%20-%20The%20Good%20and%20the%20Better.md)
- [ ] [16 Demo - Interpreting Data Visualizations with LLMs.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2003%20Data%20visualization%20in%20spreadsheets/16%20Demo%20-%20Interpreting%20Data%20Visualizations%20with%20LLMs.md)
- [ ] [17 Demo - Creating Data Visualizations with LLMs.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2003%20Data%20visualization%20in%20spreadsheets/17%20Demo%20-%20Creating%20Data%20Visualizations%20with%20LLMs.md)
- [ ] [01 Module 4 Introduction.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2004%20The%20data%20analytics%20lifecycle/01%20Module%204%20Introduction.md)
- [ ] [02 The Data Analytics Lifecycle.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2004%20The%20data%20analytics%20lifecycle/02%20The%20Data%20Analytics%20Lifecycle.md)
- [ ] [03 Defining the Problem.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2004%20The%20data%20analytics%20lifecycle/03%20Defining%20the%20Problem.md)
- [ ] [04 Collecting and Preprocessing Data.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2004%20The%20data%20analytics%20lifecycle/04%20Collecting%20and%20Preprocessing%20Data.md)
- [ ] [05 Analyzing Data.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2004%20The%20data%20analytics%20lifecycle/05%20Analyzing%20Data.md)
- [ ] [06 Identifying Insights.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2004%20The%20data%20analytics%20lifecycle/06%20Identifying%20Insights.md)
- [ ] [07 Sharing Results.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2004%20The%20data%20analytics%20lifecycle/07%20Sharing%20Results.md)
- [ ] [08 Evaluating Outcomes.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2004%20The%20data%20analytics%20lifecycle/08%20Evaluating%20Outcomes.md)
- [ ] [09 Gathering Stakeholder Requirements.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2004%20The%20data%20analytics%20lifecycle/09%20Gathering%20Stakeholder%20Requirements.md)
- [ ] [10 Synthesizing Stakeholder Input.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2004%20The%20data%20analytics%20lifecycle/10%20Synthesizing%20Stakeholder%20Input.md)
- [ ] [11 Checking In with Stakeholders.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2004%20The%20data%20analytics%20lifecycle/11%20Checking%20In%20with%20Stakeholders.md)
- [ ] [12 Domain Knowledge.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2004%20The%20data%20analytics%20lifecycle/12%20Domain%20Knowledge.md)
- [ ] [13 Demo - LLMs for Stakeholder Analysis.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2004%20The%20data%20analytics%20lifecycle/13%20Demo%20-%20LLMs%20for%20Stakeholder%20Analysis.md)
- [ ] [14 Your Next Steps in Data Analytics.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%201%20-%20Data%20Analytics%20Foundations/module%2004%20The%20data%20analytics%20lifecycle/14%20Your%20Next%20Steps%20in%20Data%20Analytics.md)

## 산출물

내가 캡스톤에서 다루고 싶은 문제 하나를 골라, `03 Data Science Methodology`의 단계에 맞춰 쪼갠 2페이지 기획서.

- 비즈니스 이해 → 분석 접근 → 데이터 요구사항 → 데이터 수집 계획까지만 쓴다(모델링 이후는 T3에서 채운다)
- **각 단계마다 "지금 내가 모르는 것"을 한 줄씩 적는다.** 이 목록이 남은 트랙에서 무엇을 우선할지 정해 준다

## 다음 단계

→ [02 Phase 2 - 기술통계와 데이터 시각화](02%20Phase%202%20-%20%EA%B8%B0%EC%88%A0%ED%86%B5%EA%B3%84%EC%99%80%20%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EC%8B%9C%EA%B0%81%ED%99%94.md)

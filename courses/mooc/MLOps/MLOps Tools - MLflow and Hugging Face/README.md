# MLOps Tools: MLflow and Hugging Face

**Course URL:** [mooc.org/learn/mlops-mlflow-huggingface-duke](https://www.mooc.org/learn/mlops-mlflow-huggingface-duke)

MOOC / Duke University. "MLOps | Machine Learning Operations" 스페셜라이제이션의 세 번째 코스(Course 3 of 4). MLOps 진영에서 가장 널리 쓰이는 두 오픈소스 플랫폼 — **MLflow**와 **Hugging Face** — 를 다루는 심화(Advanced) 코스로, 4개 모듈로 구성. MLflow의 프로젝트/모델/트래킹 시스템부터, Hugging Face 리포지토리를 활용한 데이터셋/모델 저장·배포·실전 응용까지 진행. 주 강사는 Alfredo Deza, 보조 강사는 Noah Gift.

## 모듈 구성
- **Module 1 - Introduction to MLflow** — MLflow Tracking(파라미터/메트릭/아티팩트 로깅, Tracking UI 쿼리), MLflow Projects(conda 환경, MLproject 엔트리포인트, 원격 Git 실행, Databricks/Azure ML 연동), MLflow Models(MLmodel 포맷, Model Registry, REST API 서빙, Hugging Face 번역 모델 로깅)
- [Module 2 - Introduction to Hugging Face](Module%202%20-%20Introduction%20to%20Hugging%20Face/) — Hugging Face Hub(Models/Datasets/Spaces/Organizations), 리포지토리 생성·업로드(CLI/웹 UI), Gradio 기반 Spaces 데모, GPU 지원 Codespaces(Whisper), Hugging Face CLI, Model Hub 필터링과 모델 다운로드 3가지 방법, 데이터셋 업로드·분할(split)·커스텀 로더
- [Module 3 - Deploying Hugging Face](Module%203%20-%20Deploying%20Hugging%20Face/) — Hugging Face 모델을 FastAPI로 서빙, Docker 컨테이너화, GitHub Actions CI/CD(GHCR/Azure Container Registry/Docker Hub 자동 패키징), Azure ML Studio에 데이터셋·모델 등록 및 탐색, Azure ML Python SDK
- [Module 4 - Applied Hugging Face](Module%204%20-%20Applied%20Hugging%20Face/) — Azure Container Apps 배포(서비스 주체 인증, ingress 포트, CPU/RAM 스케일링), 파인튜닝 이론과 CPU/GPU 실전 비교, ONNX 내보내기(DistilBERT), Hugging Face Spaces 배포와 CD 자동화(GitHub Actions), GenAI 경제학·윤리(수익 공유, 공유지의 비극, 게임이론, 완전경쟁, 부정적 외부효과, 규제 기업가정신, 데이터셋 윤리적 소싱, Glaze)

## 진행 상황
- [x] Module 1 — Introduction to MLflow
- [x] Module 2 — Introduction to Hugging Face
- [x] Module 3 — Deploying Hugging Face
- [x] Module 4 — Applied Hugging Face

## 강의 목록

<!-- course-inventory:start -->
### Module 1 - Introduction to MLflow

- **01 Meet your Course Instructor - Alfredo Deza**
- **02 About the Course - 안내사항 정리**
- **03 Key Terms - Introduction to MLflow**
- **04 Overview of MLflow**
- **05 Installing and Using MLflow**
- **06 Practical Scenario - MLflow Components**
- **07 Introduction to the Tracking UI**
- **08 Parameters, Version, Artifacts and Metrics**
- **09 What is MLflow (Reading)**
- **10 Introduction to MLflow (Practice Assignment)**
- **11 Lesson Reflection - Introduction to MLflow**
- **12 Key Terms - MLflow Projects**
- **13 Working with MLflow Projects**
- **14 Create an MLflow Project**
- **15 Practical Scenario - MLflow Project Components**
- **16 Run Project from Remote Git Repositories**
- **17 Connecting MLflow to Databricks**
- **18 MLflow Projects (Reading)**
- **19 MLflow Projects (Practice Assignment)**
- **20 Lesson Reflection - MLflow Projects**
- **21 Key Terms - MLflow Models**
- **22 Components of an MLflow Package**
- **23 Using a Registry with an MLflow Model**
- **24 Referencing Artifacts with the API**
- **25 Saving and Serving MLflow Models**
- **26 MLflow (Graded Assignment)**
- **27 MLflow Projects Lab**
- **28 MLflow Models (Reading)**
- **29 Lesson Reflection - MLflow Models**

### Module 2 - Introduction to Hugging Face

- [01 Key Terms - Introduction to Hugging Face](Module%202%20-%20Introduction%20to%20Hugging%20Face/01%20Key%20Terms%20-%20Introduction%20to%20Hugging%20Face.md)
- [02 What is Hugging Face](Module%202%20-%20Introduction%20to%20Hugging%20Face/02%20What%20is%20Hugging%20Face.md)
- [03 Overview of the Hugging Face Hub](Module%202%20-%20Introduction%20to%20Hugging%20Face/03%20Overview%20of%20the%20Hugging%20Face%20Hub.md)
- [04 Introduction to the Hugging Face Hub](Module%202%20-%20Introduction%20to%20Hugging%20Face/04%20Introduction%20to%20the%20Hugging%20Face%20Hub.md)
- [05 Practical Scenario - Hugging Face Components](Module%202%20-%20Introduction%20to%20Hugging%20Face/05%20Practical%20Scenario%20-%20Hugging%20Face%20Components.md)
- [06 Using Hugging Face Repositories](Module%202%20-%20Introduction%20to%20Hugging%20Face/06%20Using%20Hugging%20Face%20Repositories.md)
- [07 Using Hugging Face Spaces](Module%202%20-%20Introduction%20to%20Hugging%20Face/07%20Using%20Hugging%20Face%20Spaces.md)
- [08 Hugging Face Hub (Reading)](Module%202%20-%20Introduction%20to%20Hugging%20Face/08%20Hugging%20Face%20Hub%20%28Reading%29.md)
- [09 Practical Scenario - Sharing a Model Interactively](Module%202%20-%20Introduction%20to%20Hugging%20Face/09%20Practical%20Scenario%20-%20Sharing%20a%20Model%20Interactively.md)
- [10 Lesson Reflection - Introduction to Hugging Face](Module%202%20-%20Introduction%20to%20Hugging%20Face/10%20Lesson%20Reflection%20-%20Introduction%20to%20Hugging%20Face.md)
- [11 Key Terms - Introduction to Applied Hugging Face](Module%202%20-%20Introduction%20to%20Hugging%20Face/11%20Key%20Terms%20-%20Introduction%20to%20Applied%20Hugging%20Face.md)
- [12 Introduction to Applied Hugging Face](Module%202%20-%20Introduction%20to%20Hugging%20Face/12%20Introduction%20to%20Applied%20Hugging%20Face.md)
- [13 Using GPU Enabled Codespaces](Module%202%20-%20Introduction%20to%20Hugging%20Face/13%20Using%20GPU%20Enabled%20Codespaces.md)
- [14 Using the Hugging Face CLI](Module%202%20-%20Introduction%20to%20Hugging%20Face/14%20Using%20the%20Hugging%20Face%20CLI.md)
- [15 Practical Scenario - GPU Codespaces and CLI Login](Module%202%20-%20Introduction%20to%20Hugging%20Face/15%20Practical%20Scenario%20-%20GPU%20Codespaces%20and%20CLI%20Login.md)
- [16 Hugging Face CLI (Reading)](Module%202%20-%20Introduction%20to%20Hugging%20Face/16%20Hugging%20Face%20CLI%20%28Reading%29.md)
- [17 Lesson Reflection - Introduction to Applied Hugging Face](Module%202%20-%20Introduction%20to%20Hugging%20Face/17%20Lesson%20Reflection%20-%20Introduction%20to%20Applied%20Hugging%20Face.md)
- [18 Key Terms - Using Hugging Face](Module%202%20-%20Introduction%20to%20Hugging%20Face/18%20Key%20Terms%20-%20Using%20Hugging%20Face.md)
- [19 Using the Model Hub](Module%202%20-%20Introduction%20to%20Hugging%20Face/19%20Using%20the%20Model%20Hub.md)
- [20 Practical Scenario - Creating a Repository via CLI](Module%202%20-%20Introduction%20to%20Hugging%20Face/20%20Practical%20Scenario%20-%20Creating%20a%20Repository%20via%20CLI.md)
- [21 Downloading Models](Module%202%20-%20Introduction%20to%20Hugging%20Face/21%20Downloading%20Models.md)
- [22 Working with Models](Module%202%20-%20Introduction%20to%20Hugging%20Face/22%20Working%20with%20Models.md)
- [23 Adding Datasets](Module%202%20-%20Introduction%20to%20Hugging%20Face/23%20Adding%20Datasets.md)
- [24 Using Datasets](Module%202%20-%20Introduction%20to%20Hugging%20Face/24%20Using%20Datasets.md)
- [25 Working with Datasets](Module%202%20-%20Introduction%20to%20Hugging%20Face/25%20Working%20with%20Datasets.md)
- [26 Hugging Face Fundamentals (Graded Assignment)](Module%202%20-%20Introduction%20to%20Hugging%20Face/26%20Hugging%20Face%20Fundamentals%20%28Graded%20Assignment%29.md)
- [27 Introduction to Hugging Face Lab](Module%202%20-%20Introduction%20to%20Hugging%20Face/27%20Introduction%20to%20Hugging%20Face%20Lab.md)
- [28 Datasets (Reading)](Module%202%20-%20Introduction%20to%20Hugging%20Face/28%20Datasets%20%28Reading%29.md)
- [29 Lesson Reflection - Using Hugging Face](Module%202%20-%20Introduction%20to%20Hugging%20Face/29%20Lesson%20Reflection%20-%20Using%20Hugging%20Face.md)

### Module 3 - Deploying Hugging Face

- [01 Key Terms - Packaging Hugging Face](Module%203%20-%20Deploying%20Hugging%20Face/01%20Key%20Terms%20-%20Packaging%20Hugging%20Face.md)
- [02 Hugging Face and FastAPI](Module%203%20-%20Deploying%20Hugging%20Face/02%20Hugging%20Face%20and%20FastAPI.md)
- [03 Containerizing Hugging Face](Module%203%20-%20Deploying%20Hugging%20Face/03%20Containerizing%20Hugging%20Face.md)
- [04 Practical Scenario - Defining a JSON Schema for Text Generation](Module%203%20-%20Deploying%20Hugging%20Face/04%20Practical%20Scenario%20-%20Defining%20a%20JSON%20Schema%20for%20Text%20Generation.md)
- [05 Running FastAPI with Hugging Face](Module%203%20-%20Deploying%20Hugging%20Face/05%20Running%20FastAPI%20with%20Hugging%20Face.md)
- [06 CI-CD Packaging with GitHub Actions](Module%203%20-%20Deploying%20Hugging%20Face/06%20CI-CD%20Packaging%20with%20GitHub%20Actions.md)
- [07 FastAPI (Reading)](Module%203%20-%20Deploying%20Hugging%20Face/07%20FastAPI%20%28Reading%29.md)
- [08 Quiz - Packaging Hugging Face (Practice Assignment)](Module%203%20-%20Deploying%20Hugging%20Face/08%20Quiz%20-%20Packaging%20Hugging%20Face%20%28Practice%20Assignment%29.md)
- [09 Lesson Reflection - Packaging Hugging Face](Module%203%20-%20Deploying%20Hugging%20Face/09%20Lesson%20Reflection%20-%20Packaging%20Hugging%20Face.md)
- [10 Key Terms - Hugging Face and Azure ML Studio](Module%203%20-%20Deploying%20Hugging%20Face/10%20Key%20Terms%20-%20Hugging%20Face%20and%20Azure%20ML%20Studio.md)
- [11 Hugging Face and Azure ML Studio](Module%203%20-%20Deploying%20Hugging%20Face/11%20Hugging%20Face%20and%20Azure%20ML%20Studio.md)
- [12 Registering a Hugging Face Dataset on Azure](Module%203%20-%20Deploying%20Hugging%20Face/12%20Registering%20a%20Hugging%20Face%20Dataset%20on%20Azure.md)
- [13 Practical Scenario - Tracking Model Versions](Module%203%20-%20Deploying%20Hugging%20Face/13%20Practical%20Scenario%20-%20Tracking%20Model%20Versions.md)
- [14 Registering a Hugging Face Model on Azure](Module%203%20-%20Deploying%20Hugging%20Face/14%20Registering%20a%20Hugging%20Face%20Model%20on%20Azure.md)
- [15 Inspecting a Hugging Face Dataset on Azure](Module%203%20-%20Deploying%20Hugging%20Face/15%20Inspecting%20a%20Hugging%20Face%20Dataset%20on%20Azure.md)
- [16 Azure ML Python SDK](Module%203%20-%20Deploying%20Hugging%20Face/16%20Azure%20ML%20Python%20SDK.md)
- [17 Azure ML Python SDK (Reading)](Module%203%20-%20Deploying%20Hugging%20Face/17%20Azure%20ML%20Python%20SDK%20%28Reading%29.md)
- [18 Hugging Face and Azure (Practice Assignment)](Module%203%20-%20Deploying%20Hugging%20Face/18%20Hugging%20Face%20and%20Azure%20%28Practice%20Assignment%29.md)
- [19 Lesson Reflection - Hugging Face and Azure ML Studio](Module%203%20-%20Deploying%20Hugging%20Face/19%20Lesson%20Reflection%20-%20Hugging%20Face%20and%20Azure%20ML%20Studio.md)
- [20 Key Terms - Hugging Face Automation](Module%203%20-%20Deploying%20Hugging%20Face/20%20Key%20Terms%20-%20Hugging%20Face%20Automation.md)
- [21 Using GitHub Actions for Model Deployments](Module%203%20-%20Deploying%20Hugging%20Face/21%20Using%20GitHub%20Actions%20for%20Model%20Deployments.md)
- [22 Using Azure Container Registry](Module%203%20-%20Deploying%20Hugging%20Face/22%20Using%20Azure%20Container%20Registry.md)
- [23 Automating Packaging with Azure Container Registry](Module%203%20-%20Deploying%20Hugging%20Face/23%20Automating%20Packaging%20with%20Azure%20Container%20Registry.md)
- [24 Automating Packaging with Docker Hub](Module%203%20-%20Deploying%20Hugging%20Face/24%20Automating%20Packaging%20with%20Docker%20Hub.md)
- [25 Deploying Hugging Face (Graded Assignment)](Module%203%20-%20Deploying%20Hugging%20Face/25%20Deploying%20Hugging%20Face%20%28Graded%20Assignment%29.md)
- [26 Packaging Hugging Face Lab](Module%203%20-%20Deploying%20Hugging%20Face/26%20Packaging%20Hugging%20Face%20Lab.md)
- [27 Docker Overview (Reading)](Module%203%20-%20Deploying%20Hugging%20Face/27%20Docker%20Overview%20%28Reading%29.md)
- [28 Lesson Reflection - Hugging Face Automation](Module%203%20-%20Deploying%20Hugging%20Face/28%20Lesson%20Reflection%20-%20Hugging%20Face%20Automation.md)

### Module 4 - Applied Hugging Face

- [01 Key Terms - Hugging Face with Azure Containers](Module%204%20-%20Applied%20Hugging%20Face/01%20Key%20Terms%20-%20Hugging%20Face%20with%20Azure%20Containers.md)
- [02 Create an Azure Container Application](Module%204%20-%20Applied%20Hugging%20Face/02%20Create%20an%20Azure%20Container%20Application.md)
- [03 Configure an Azure Container Application](Module%204%20-%20Applied%20Hugging%20Face/03%20Configure%20an%20Azure%20Container%20Application.md)
- [04 Deploy Hugging Face to Azure](Module%204%20-%20Applied%20Hugging%20Face/04%20Deploy%20Hugging%20Face%20to%20Azure.md)
- [05 Troubleshooting Container Deployment](Module%204%20-%20Applied%20Hugging%20Face/05%20Troubleshooting%20Container%20Deployment.md)
- [06 Quiz - Hugging Face with Azure Containers (Practice Assignment)](Module%204%20-%20Applied%20Hugging%20Face/06%20Quiz%20-%20Hugging%20Face%20with%20Azure%20Containers%20%28Practice%20Assignment%29.md)
- [07 Lesson Reflection - Hugging Face with Azure Containers](Module%204%20-%20Applied%20Hugging%20Face/07%20Lesson%20Reflection%20-%20Hugging%20Face%20with%20Azure%20Containers.md)
- [08 Key Terms - Fine-Tuning and ONNX Exporting](Module%204%20-%20Applied%20Hugging%20Face/08%20Key%20Terms%20-%20Fine-Tuning%20and%20ONNX%20Exporting.md)
- [09 Introduction to Fine-Tuning Theory](Module%204%20-%20Applied%20Hugging%20Face/09%20Introduction%20to%20Fine-Tuning%20Theory.md)
- [10 Performing Fine-Tuning](Module%204%20-%20Applied%20Hugging%20Face/10%20Performing%20Fine-Tuning.md)
- [11 Introduction to ONNX and Hugging Face](Module%204%20-%20Applied%20Hugging%20Face/11%20Introduction%20to%20ONNX%20and%20Hugging%20Face.md)
- [12 Exporting Hugging Face Models to ONNX](Module%204%20-%20Applied%20Hugging%20Face/12%20Exporting%20Hugging%20Face%20Models%20to%20ONNX.md)
- [13 Hugging Face and ONNX Lab](Module%204%20-%20Applied%20Hugging%20Face/13%20Hugging%20Face%20and%20ONNX%20Lab.md)
- [14 Quiz - Fine-Tuning and ONNX Exporting (Practice Assignment)](Module%204%20-%20Applied%20Hugging%20Face/14%20Quiz%20-%20Fine-Tuning%20and%20ONNX%20Exporting%20%28Practice%20Assignment%29.md)
- [15 Lesson Reflection - Fine-Tuning and ONNX Exporting](Module%204%20-%20Applied%20Hugging%20Face/15%20Lesson%20Reflection%20-%20Fine-Tuning%20and%20ONNX%20Exporting.md)
- [16 Key Terms - Beyond Hugging Face Spaces](Module%204%20-%20Applied%20Hugging%20Face/16%20Key%20Terms%20-%20Beyond%20Hugging%20Face%20Spaces.md)
- [17 Introduction to Hugging Face Spaces](Module%204%20-%20Applied%20Hugging%20Face/17%20Introduction%20to%20Hugging%20Face%20Spaces.md)
- [18 Hugging Face Spaces Walkthrough](Module%204%20-%20Applied%20Hugging%20Face/18%20Hugging%20Face%20Spaces%20Walkthrough.md)
- [19 Deploying Hugging Face Spaces](Module%204%20-%20Applied%20Hugging%20Face/19%20Deploying%20Hugging%20Face%20Spaces.md)
- [20 Deploying Hugging Face Lab](Module%204%20-%20Applied%20Hugging%20Face/20%20Deploying%20Hugging%20Face%20Lab.md)
- [21 Applied Hugging Face (Graded Assignment)](Module%204%20-%20Applied%20Hugging%20Face/21%20Applied%20Hugging%20Face%20%28Graded%20Assignment%29.md)
- [22 Profit Sharing Concepts](Module%204%20-%20Applied%20Hugging%20Face/22%20Profit%20Sharing%20Concepts.md)
- [23 Tragedy of the GenAI commons](Module%204%20-%20Applied%20Hugging%20Face/23%20Tragedy%20of%20the%20GenAI%20commons.md)
- [24 Game Theory of GenAI](Module%204%20-%20Applied%20Hugging%20Face/24%20Game%20Theory%20of%20GenAI.md)
- [25 Practical Scenario - Profit Sharing](Module%204%20-%20Applied%20Hugging%20Face/25%20Practical%20Scenario%20-%20Profit%20Sharing.md)
- [26 Perfect Competition](Module%204%20-%20Applied%20Hugging%20Face/26%20Perfect%20Competition.md)
- [27 Negative Externalities](Module%204%20-%20Applied%20Hugging%20Face/27%20Negative%20Externalities.md)
- [28 Regulatory Entrepreneurship](Module%204%20-%20Applied%20Hugging%20Face/28%20Regulatory%20Entrepreneurship.md)
- [29 Final Sandboxes](Module%204%20-%20Applied%20Hugging%20Face/29%20Final%20Sandboxes.md)
- [30 Regulatory Entrepreneurship (Reading)](Module%204%20-%20Applied%20Hugging%20Face/30%20Regulatory%20Entrepreneurship%20%28Reading%29.md)
- [31 Ethical Sourcing of Datasets (Reading)](Module%204%20-%20Applied%20Hugging%20Face/31%20Ethical%20Sourcing%20of%20Datasets%20%28Reading%29.md)
- [32 Glaze (Reading)](Module%204%20-%20Applied%20Hugging%20Face/32%20Glaze%20%28Reading%29.md)
- [33 Lesson Reflection - Beyond Hugging Face Spaces](Module%204%20-%20Applied%20Hugging%20Face/33%20Lesson%20Reflection%20-%20Beyond%20Hugging%20Face%20Spaces.md)
- [34 Next Steps](Module%204%20-%20Applied%20Hugging%20Face/34%20Next%20Steps.md)
- [35 Share your learning experience](Module%204%20-%20Applied%20Hugging%20Face/35%20Share%20your%20learning%20experience.md)

<!-- course-inventory:end -->

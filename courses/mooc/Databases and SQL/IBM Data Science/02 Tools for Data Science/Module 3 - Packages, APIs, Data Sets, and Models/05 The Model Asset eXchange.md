# The Model Asset eXchange

## 개요
- 강좌: Tools for Data Science
- 모듈: Packages, APIs, Data Sets, and Models
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/open-source-tools-for-data-science/lecture/pcEKO/the-model-asset-exchange)
- 이 비디오를 시청한 후에는 IBM의 Model Asset Exchange를 탐색하고 딥 러닝 모델 서비스가 이미지를 감지하는 방법을 설명할 수 있습니다.
- IBM 개발자 플랫폼의 모델 자산 거래소 (MAX) 는 딥 러닝 모델을 위한 무료 오픈 소스 리소스입니다.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후에는 IBM의 Model Asset Exchange를 탐색하고 딥 러닝 모델 서비스가 이미지를 감지하는 방법을 설명할 수 있습니다.
- IBM 개발자 플랫폼의 모델 자산 거래소 (MAX) 는 딥 러닝 모델을 위한 무료 오픈 소스 리소스입니다.
- Model Asset Exchange는 즉시 사용 가능하고 사용자 지정 가능한 딥 러닝 마이크로서비스를 위한 무료 오픈 소스 저장소입니다.
- MAX 모델 서비스 마이크로서비스는 오픈 소스 Docker 이미지로 구축 및 배포됩니다.
- 이 비디오에서는 Model Asset Exchange가 즉시 사용 가능하고 사용자 지정 가능한 딥 러닝 마이크로서비스를 위한 무료 오픈 소스 저장소라는 것을 배웠습니다.
- MAX 모델 서비스 마이크로서비스는 GitHub에서 오픈 소스 Docker 이미지로 구축 및 배포됩니다.

### 한국어 Transcript

“모델 자산 거래소”에 오신 것을 환영합니다. 이 비디오를 시청한 후에는 IBM의 Model Asset Exchange를 탐색하고 딥 러닝 모델 서비스가 이미지를 감지하는 방법을 설명할 수 있습니다. IBM 개발자 플랫폼의 모델 자산 거래소 (MAX) 는 딥 러닝 모델을 위한 무료 오픈 소스 리소스입니다. 모델을 처음부터 학습하는 데 필요한 작업에는 많은 양의 데이터, 인력, 시간 및 리소스가 필요하며, 이로 인해 가치 창출 시간이 상당히 길어질 수 있습니다. 가치 창출 시간을 단축하려면 특정 유형의 문제에 대해 사전 학습된 모델을 활용하는 것이 좋습니다.

이러한 사전 학습된 모델은 바로 사용할 수 있거나 학습하는 데 시간이 덜 걸릴 수 있습니다. 모델은 컴퓨팅 리소스와 도메인 전문 지식을 사용하여 모델을 통해 데이터를 실행하여 생성됩니다. 연구, 평가, 테스트, 교육 및 검증 단계가 완료되면 검증된 모델을 갖게 됩니다. Model Asset Exchange는 즉시 사용 가능하고 사용자 지정 가능한 딥 러닝 마이크로서비스를 위한 무료 오픈 소스 저장소입니다. 이러한 마이크로서비스는 사전 학습되거나 사용자 지정 교육 가능한 딥 러닝 모델을 사용하여 일반적인 비즈니스 문제를 해결하도록 구성됩니다.

이러한 모델은 완전한 테스트를 거쳤으며 로컬 및 클라우드 환경에 빠르게 배포할 수 있습니다. MAX의 모든 모델은 허가형 오픈 소스 라이선스로 제공되므로 개인 및 상업적 목적으로 쉽게 사용할 수 있어 법적 책임의 위험이 줄어듭니다. MAX에서는 물체 감지, 이미지, 오디오, 비디오 및 텍스트 분류, 명명된 개체 인식, 이미지-텍스트 변환, 사람 자세 감지 등 다양한 영역에 대한 모델을 찾을 수 있습니다. 일반적인 모델 서비스 마이크로서비스의 구성 요소를 살펴보겠습니다. 각 마이크로서비스에는 사전 학습된 딥 러닝 모델, 모델에서 분석하기 전에 입력을 사전 처리하는 코드, 모델 출력을 사후 처리하는 코드, 애플리케이션에서 서비스 기능을 사용할 수 있도록 하는 표준화된 공개 API가 포함됩니다.

모델 서비스 마이크로서비스는 검증된 모델을 통해 입력을 실행한 다음 출력을 REST API에 적용하여 생성됩니다. 구현, 패키징 , 문서화 및 테스트 단계가 완료되면 로컬 머신이나 프라이빗 하이브리드 또는 퍼블릭 클라우드로 전송할 수 있는 모델 지원 마이크로서비스를 갖게 됩니다. MAX 모델 서비스 마이크로서비스는 오픈 소스 Docker 이미지로 구축 및 배포됩니다. Docker는 애플리케이션을 쉽게 구축하고 배포할 수 있는 컨테이너 플랫폼입니다. Docker 이미지 소스는 GitHub에 게시되며 개인 및 상업 환경에서 사용할 수 있도록 다운로드하고 사용자 지정할 수 있습니다.

Kubernetes 오픈 소스 시스템을 사용하여 이러한 Docker 이미지의 배포, 규모 조정 및 관리를 자동화합니다. Red Hat OpenShift는 인기 있는 엔터프라이즈급 쿠버네티스 플랫폼입니다. IBM 클라우드, 구글 클라우드 플랫폼, 아마존 웹 서비스, 마이크로소프트 애저에서 사용할 수 있습니다. 이 비디오에서는 Model Asset Exchange가 즉시 사용 가능하고 사용자 지정 가능한 딥 러닝 마이크로서비스를 위한 무료 오픈 소스 저장소라는 것을 배웠습니다. 가치 창출 시간을 단축하려면 특정 유형의 문제에 대해 사전 학습된 모델을 활용하는 것이 좋습니다.

MAX 모델 서비스 마이크로서비스는 GitHub에서 오픈 소스 Docker 이미지로 구축 및 배포됩니다. Red Hat OpenShift는 마이크로서비스의 배포, 확장, 관리를 자동화하는 데 사용되는 쿠버네티스 플랫폼입니다.

## 예시
- 각 마이크로서비스에는 사전 학습된 딥 러닝 모델, 모델에서 분석하기 전에 입력을 사전 처리하는 코드, 모델 출력을 사후 처리하는 코드, 애플리케이션에서 서비스 기능을 사용할 수 있도록 하는 표준화된 공개 API가 포함됩니다.

## 요약
- MAX 모델 서비스 마이크로서비스는 오픈 소스 Docker 이미지로 구축 및 배포됩니다.
- 이 비디오에서는 Model Asset Exchange가 즉시 사용 가능하고 사용자 지정 가능한 딥 러닝 마이크로서비스를 위한 무료 오픈 소스 저장소라는 것을 배웠습니다.
- MAX 모델 서비스 마이크로서비스는 GitHub에서 오픈 소스 Docker 이미지로 구축 및 배포됩니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to "The Model Asset eXchange. " After watching this video, you will be able to navigate the Model Asset eXchange from IBM and explain how deep learning model-serving detects images. The Model Asset eXchange or MAX on the IBM Developer platform is a free open-source resource for deep learning models. The tasks needed to train a model from scratch require a large amount of data, labor, time, and resources and because of this, time to value can be quite long. To reduce time to value, consider taking advantage of pre-trained models for certain types of problems.

These pre-trained models can be ready to use right away, or they might take less time to train. Models are created by running data through a model using compute resources and domain expertise. After research, evaluation, test, train, and validate steps are complete, you will have a validated model. The Model Asset eXchange is a free open-source repository for ready-to-use and customizable deep-learning microservices. These microservices are configured to use pre-trained or custom-trainable deep learning models to solve common business problems.

These models have been fully tested and can be quickly deployed in local and Cloud environments. All models in MAX are available under permissive open-source licenses, making it easier to use them for personal and commercial purposes, which reduces the risk of legal liabilities. On MAX, you can find models for a variety of domains, including object detection, image, audio, video, and text classification, named entity recognition, image-to-text translation, human pose detection, and more. Let's look at the components of a typical model-serving microservice. Each microservice includes a pre-trained deep learning model, code that pre-processes the input before it is analyzed by the model, code that post-processes the model output, and a standardized public API that makes the services functionality available to applications.

Model-serving microservices are created by running inputs through a validated model and then applying the output to a REST API. After implement, package, document, and test steps are complete, you will have a model-serving microservice that can be sent to a local machine or a private hybrid or public Cloud. MAX model-serving microservices are built and distributed as open-source Docker images. Docker is a container platform that makes it easy to build and deploy applications. The Docker image source is published on GitHub and can be downloaded and customized for use in personal and commercial environments.

Use the Kubernetes open-source system to automate the deployment, scaling, and management of these Docker images. Red Hat OpenShift is a popular enterprise-grade Kubernetes platform. It is available on IBM Cloud, Google Cloud Platform, Amazon Web Services, and Microsoft Azure. In this video, you learned that the Model Asset eXchange is a free open-source repository for ready-to-use and customizable deep-learning microservices. To reduce time to value, consider taking advantage of pre-trained models for certain types of problems.

MAX model-serving microservices are built and distributed on GitHub as open-source Docker images. Red Hat OpenShift is a Kubernetes platform used to automate deployment, scaling, and management of microservices.

</details>

# Initializing the GCloud SDK

## 개요
- Initializing the GCloud SDK In this lecture, we are going to run a few commands to initialize the gcloud SDK and configure it to manage our project and cluster. Authorize gcloud to use your Google credentials to manage GKE/GCP resources. In your terminal run the following command: gcloud auth login Your browser will open up and ask you…

## 내용
### 자막·본문 기반 핵심 내용
- Initializing the GCloud SDK In this lecture, we are going to run a few commands to initialize the gcloud SDK and configure it to manage our project and cluster. Authorize gcloud to use your Google credentials to manage GKE/GCP resources. In your terminal run the following command: gcloud auth login Your browser will open up and ask you…
- Use the account associated with your GCP account. Follow the prompts to authenticate. You will eventually see the following message: You are now authenticated with the gcloud CLI! Initialize gcloud and your project. In your terminal run the following command: gcloud init You will be prompted with some choices. Select option [1]:
- Pick configuration to use: [1] Re-initialize this configuration [q] with new settings [2] Create a new configuration [3] Switch to and re-initialize existing configuration: [default] The second prompt will ask you to Select an account. This should be the [1] option and the Google account you authorized to use gcloud in the first step:
- Choose the account you want to use for this configuration. To use a federated user account, exit this command and sign in to the gcloud CLI with your login configuration file, then run this command again. Select an account: [1] YOUR EMAIL ADDRESS [2] Sign in with a new Google Account [3] Skip this step The third prompt will ask you to…

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `Kubernetes`

## 예시
`Kubernetes`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Initializing the GCloud SDK**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/48725131#overview)

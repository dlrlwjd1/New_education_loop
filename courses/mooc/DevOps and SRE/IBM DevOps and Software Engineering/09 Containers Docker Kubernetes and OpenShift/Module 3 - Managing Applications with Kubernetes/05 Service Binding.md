# Service Binding

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/ibm-containers-docker-kubernetes-openshift/lecture/UVWRU/service-binding)

## 개요
- 서비스 바인딩은 애플리케이션의 REST API , 데이터베이스 및 이벤트 버스를 비롯한 외부 서비스 또는 지원 서비스를 사용하는 데 필요한 프로세스입니다.

## 내용
- 서비스 바인딩은 애플리케이션의 REST API , 데이터베이스 및 이벤트 버스를 비롯한 외부 서비스 또는 지원 서비스를 사용하는 데 필요한 프로세스입니다.
- IBM의 Public Cloud 서비스 엔드포인트를 사용하여 서비스 자격 증명을 생성한 다음 클러스터의 Kubernetes 암호에 서비스 자격 증명을 저장하거나 바인딩합니다.
- 그런 다음 서비스를 클러스터에 바인딩하여 퍼블릭 클라우드 서비스 엔드포인트를 사용하는 서비스에 대한 서비스 자격 증명을 생성합니다.
- IBM 클라우드 서비스 바인딩은 서비스 자격 증명을 사용하여 쿠버네티스 시크릿을 자동으로 생성합니다.
- 환경 변수 바인딩, API 키, binding.username 및 binding.password는 이전 단계에서 생성한 Watson Tone 분석기 서비스 인스턴스의 API 키 사용자 이름 및 암호에 해당합니다.
- 표시된 코드 스니펫은 IBM 클라우드 쿠버네티스 서비스에 배포될 express.JS 애플리케이션 내에서 binding.API 키, binding.username 및 binding.password 환경 변수를 사용하는 샘플 node.js 애플리케이션을 보여줍니다.
- 이 비디오에서는 외부 서비스를 배포에 바인딩하면 코드 내에서 서비스를 사용할 수 있는 자격 증명이 자동으로 제공된다는 것을 배울 수 있습니다.

## 예시
- 이 비디오에서는 외부 서비스를 배포에 바인딩하면 코드 내에서 서비스를 사용할 수 있는 자격 증명이 자동으로 제공된다는 것을 배울 수 있습니다.

## 요약
- 표시된 코드 스니펫은 IBM 클라우드 쿠버네티스 서비스에 배포될 express.JS 애플리케이션 내에서 binding.API 키, binding.username 및 binding.password 환경 변수를 사용하는 샘플 node.js 애플리케이션을 보여줍니다. 이 비디오에서는 외부 서비스를 배포에 바인딩하면 코드 내에서 서비스를 사용할 수 있는 자격 증명이 자동으로 제공된다는 것을 배울 수 있습니다.

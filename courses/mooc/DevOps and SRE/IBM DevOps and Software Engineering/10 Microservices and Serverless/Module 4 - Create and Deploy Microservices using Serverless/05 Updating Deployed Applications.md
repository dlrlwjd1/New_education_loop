# Updating Deployed Applications

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/applications-development-microservices-serverless-openshift/lecture/o8DIa/updating-deployed-applications)

## 개요
- 이 비디오를 시청한 후에는 애플리케이션 업데이트, IBM Cloud Console을 통한 애플리케이션 업데이트, IBM Cloud CLI를 통한 애플리케이션 업데이트의 일반적인 시나리오를 설명할 수 있습니다.

## 내용
- 이 비디오를 시청한 후에는 애플리케이션 업데이트, IBM Cloud Console을 통한 애플리케이션 업데이트, IBM Cloud CLI를 통한 애플리케이션 업데이트의 일반적인 시나리오를 설명할 수 있습니다.
- 데이터베이스 위치 또는 비밀 키와 같은 환경 변수 업데이트, 애플리케이션 URL을 퍼블릭에서 프라이빗 또는 프로젝트 전용으로 변경하는 등 애플리케이션 가시성 업데이트, 애플리케이션의 이미지 참조 또는 GitHub 리포지토리 업데이트, 애플리케이션의 런타임 리소스 업데이트입니다.
- 이제 애플리케이션 배포와 마찬가지로 IBM Cloud Code Engine 콘솔 또는 CLI를 사용하여 애플리케이션을 업데이트할 수도 있습니다.
- 애플리케이션 콘솔 페이지에서 환경 변수 테이블을 클릭하면 모든 환경 변수를 찾을 수 있습니다.환경 변수를 추가하거나 업데이트하려면 “환경 변수 추가” 버튼을 클릭할 수 있습니다.
- 또는 명령줄 인터페이스 (IBM Cloud CLI) 를 선호하는 경우 환경 변수를 추가하거나 업데이트하기 위한 기본 명령은 애플리케이션 이름과 환경 변수의 이름 및 값이라는 두 가지 주요 인수를 포함하는 “ibmcloud ce app update”입니다.
- CLI에서 “ibmcloud ce app update” 명령에는 이미지 참조를 업데이트하기 위한 세 가지 인수 ( 애플리케이션 이름, 이미지 참조의 이름 및 값, 비공개 컨테이너 레지스트리에 액세스하기 위한 레지스트리 암호) 가 있습니다.
- CLI를 통해 CPU 또는 GPU를 업데이트하려면 동일한 “ibmcloud ce app update” 명령을 세 가지 기본 인수 ( 애플리케이션 이름, 인스턴스에 설정된 CPU 양, 인스턴스에 설정된 메모리 양) 와 함께 사용해야 합니다.

## 예시
- 이 비디오를 시청한 후에는 애플리케이션 업데이트, IBM Cloud Console을 통한 애플리케이션 업데이트, IBM Cloud CLI를 통한 애플리케이션 업데이트의 일반적인 시나리오를 설명할 수 있습니다.

## 요약
- CLI에서 “ibmcloud ce app update” 명령에는 이미지 참조를 업데이트하기 위한 세 가지 인수 ( 애플리케이션 이름, 이미지 참조의 이름 및 값, 비공개 컨테이너 레지스트리에 액세스하기 위한 레지스트리 암호) 가 있습니다. CLI를 통해 CPU 또는 GPU를 업데이트하려면 동일한 “ibmcloud ce app update” 명령을 세 가지 기본 인수 ( 애플리케이션 이름, 인스턴스에 설정된 CPU 양, 인스턴스에 설정된 메모리 양) 와 함께 사용해야 합니다.

# Create an Azure Container Application

## 개요
- **Azure Container Apps**(서버리스 컨테이너 호스팅)로 Hugging Face 모델을 배포하기 위한 첫 단계 — 컨테이너 앱을 생성하고 기본 Ingress(포트) 설정을 조정하는 5분 실습.

## 내용

### Azure Container Apps란
- **서버리스 인프라**로 컨테이너를 배포하는 서비스 — 컨테이너만 배포하면 나머지는 신경 쓸 필요 없음.
- Hugging Face 모델뿐 아니라 사실상 모든 ML 모델 배포에 유용 — **즉시 확장(instant scale)**과 다양한 생성 옵션 제공.

### 컨테이너 앱 생성
- "Create container app" 클릭 → 구독 선택 → 리소스 그룹은 기존에 쓰던 **`demo-container`** 재사용.
- **컨테이너 앱 이름이 중요한 이유**: 이 이름이 나중에 **GitHub Actions 자동화의 환경변수**(`AZURE_CONTAINER_APP_NAME`, `AZURE_GROUP_NAME`)로 그대로 사용되기 때문 — 이름을 신중히 선택해야 함. 이름은 전역적으로 **고유**해야 함(예: `demo`만으로는 부족, `demo-container`는 가능).
- 리전은 East US 선택("왜 Canada Central을 제안하는지 모르겠다"는 언급, 원하는 리전으로 변경 가능) → "Review + Create" → 검증 통과 확인(포트 8000에서 어디서든 트래픽 수신 등 설정 확인).
- **Quickstart 이미지**(간단한 Hello World 컨테이너)를 기본값으로 사용, 타깃 포트는 기본 80(나중에 변경 가능) → **Create**.

### 생성된 리소스 확인
- 리소스로 이동 → **Application URL**로 접속하면 기본 "Welcome to Azure Container Apps" 페이지 확인.
- 제공되는 기능들: 시크릿(secret) 전달, **지속적 배포(continuous deployment) 설정**, 리비전(revision)으로 앱 관리, 모니터링, **Ingress** 설정(포트 매핑) 등.

### Ingress 포트를 8000으로 수정
- Hugging Face + FastAPI 앱은 **uvicorn이 포트 8000**을 사용(Dockerfile에서 확인) — 기본값(80)과 다르므로 **Ingress 설정에서 타깃 포트를 8000으로 변경** 필요.
- Ingress 타입은 HTTP, 어디서든 트래픽 허용 유지 → **Save** → Ingress 업데이트 완료.

## 예시
```text
# Container App 생성 설정 요약
Resource Group: demo-container
Container App Name: demo-container   (← GitHub Actions 환경변수로 재사용됨)
Region: East US
Image: Quickstart (Hello World)
Ingress: HTTP, target port 8000 (uvicorn 기본 포트에 맞춰 수정)
```

## 요약
- Azure Container App 생성 시 지정하는 **이름은 이후 GitHub Actions 자동화의 환경변수로 그대로 재사용**되므로 신중하게 지어야 하며, Hugging Face + FastAPI 앱의 실제 포트(8000)에 맞춰 **Ingress 타깃 포트를 반드시 수정**해야 한다는 것이 이번 실습의 핵심 준비 단계다.

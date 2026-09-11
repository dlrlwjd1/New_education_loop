# Using Azure Container Registry

## 개요
- **Azure Container Registry(ACR)**를 포털에서 생성하고, GitHub Actions에서 인증에 필요한 **Admin 사용자·비밀번호·로그인 서버**를 확보하는 3분 실습.

## 내용

### ACR 생성
- Azure 포털에서 **"registry"** 검색 → **Container registries** → 새로 생성.
- 구독 선택 → 새 리소스 그룹 생성(`demo-container` — 이후 다른 서비스들도 여기에 함께 배포할 계획).
- 레지스트리 이름은 **영숫자만 허용**(대시 등 특수문자 불가) — `demo-alfredo`처럼 고유한 이름으로 조정.
- 리전은 East US 선택(가용 영역은 불필요), SKU는 **Standard**(그 외 Premium/Basic 옵션도 있음).
- "Review + Create" → 검증 통과 → Create → 배포(매우 빠르게 완료).

### 인증 정보 확보 — Access Keys
- 생성된 리소스로 이동 → **Access keys** 탭에서 **Admin user를 활성화**해야 함 — Azure Container Registry에 이미지를 푸시하려면 이 admin 사용자 활성화가 필수 요건.
- 확인 가능한 정보: **사용자 이름**(예: `alfredo`), **비밀번호 2개**(용도에 따라 재생성 가능), 그리고 **로그인 서버(login server)** 주소.
- 이 사용자 이름과 비밀번호는 이후 **GitHub 리포지토리의 Secrets(GitHub Actions용)**로 등록해 인증에 사용해야 함.

## 예시
```bash
# Azure CLI로 동일 작업을 하는 경우 (참고)
az acr create --resource-group demo-container --name demoalfredo --sku Standard
az acr update -n demoalfredo --admin-enabled true
az acr credential show -n demoalfredo   # username/password 확인
```

## 요약
- Azure Container Registry를 GitHub Actions 파이프라인에서 사용하려면 **Admin user를 활성화**하고, 그로부터 얻은 **사용자 이름·비밀번호·로그인 서버**를 GitHub Secrets에 등록해야 한다는 것이 이번 실습의 핵심 준비 단계다.

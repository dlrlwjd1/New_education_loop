# Running PyTorch with AWS App Runner

## 개요
- PyTorch + FastAPI 기반 이미지 분류 마이크로서비스를 GitHub Codespaces에서 로컬로 검증한 뒤, Cloud9 → ECR → **AWS App Runner**(PaaS)로 배포해 전 세계에서 접근 가능한 프로덕션급 ML 마이크로서비스를 완성하는 7분 실습.

## 내용

### 로컬(GitHub Codespaces) 개발과 검증
- PyTorch + FastAPI 리포지토리 — `requirements.txt`에 fastapi, uvicorn, pillow, torchvision 등 포함.
- 코드 구조: 사전학습 모델 로드 → FastAPI 앱 설정 → 이미지 변환(transform) 헬퍼 함수 → 예측(prediction) 헬퍼 함수 → Hello World 디버그 엔드포인트 → 파일 업로드 처리.
- `python app.py`로 실행 → `/docs`(Swagger UI)에서 `/predict` 엔드포인트에 고양이 이미지를 업로드해 테스트 → "Egyptian cat"으로 정확히 분류.

### Cloud9에서 컨테이너 빌드
1. **ECR(Elastic Container Registry)**에 리포지토리 생성(예: `pytorch`).
2. **AWS Cloud9**(GitHub Codespaces와 유사한 AWS 클라우드 빌드 환경)에서 `git clone` → `python3 -m venv` 가상환경 생성.
3. Cloud9 환경 리사이즈(더 큰 인스턴스로) — 컨테이너 빌드 시 항상 권장되는 모범 사례.
4. 로컬에서 이미지 ID를 전달해 컨테이너 실행 → Cloud9의 "Preview Running Application"으로 Hello World와 `/docs`의 예측 엔드포인트가 정상 동작함을 재확인.
5. 컨테이너에 태그를 붙여 ECR로 푸시 — 로컬에서 미리 검증했기 때문에 이후 App Runner 배포가 훨씬 빠르게 진행됨.

### AWS App Runner로 배포
- App Runner에서 "Create a service" → **Container registry** 옵션 선택 → ECR의 `pytorch:latest` 이미지 선택 → 자동(Automatic) 배포 설정.
- 서비스 이름(`PyTorch-Container`) 지정, 넉넉한 컴퓨트 사양 선택 → 배포.
- 배포 로그에서 ECR 풀(pull), 헬스 체크 등 모든 단계 확인 가능.
- 완료 후 **암호화된 도메인(HTTPS)**이 자동 제공되는 완전히 보안된 마이크로서비스로 라우팅됨.
- 해당 도메인에서 실제로 고양이 이미지를 업로드해 예측 실행 → 정상 동작 확인 — 전 세계 누구나 접근 가능한 프로덕션급 PyTorch 마이크로서비스가 완성됨.

### 핵심 통찰
- 클라우드 기반 개발 환경(Codespaces, Cloud9)만으로도 몇 단계만에 프로덕션급 서비스를 완성할 수 있음 — 로컬에서 미리 검증 후 배포하는 흐름이 App Runner 배포 속도와 신뢰성을 높여줌.

## 요약
- 이 데모는 "로컬(Codespaces)에서 FastAPI+PyTorch 검증 → Cloud9에서 컨테이너 빌드·재검증 → ECR 푸시 → App Runner 배포"로 이어지는 완전한 MLOps 배포 파이프라인을 보여주며, 몇 단계만으로 HTTPS가 적용된 전역 접근 가능한 ML 마이크로서비스를 완성할 수 있음을 입증한다.

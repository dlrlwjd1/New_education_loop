# Configure an Azure Container Application

## 개요
- Container App 생성 후 반드시 확인·조정해야 할 **Ingress 설정**과 **컨테이너 리소스 할당(CPU/RAM)·스케일링 규칙**을 점검하는 5분 실습.

## 내용

### Ingress 재확인
- **Ingress 활성화** 여부, 트래픽 허용 범위(어디서든 vs Container Apps 환경 내부로 제한), **HTTP**(SSL 미사용) 유지.
- **타깃 포트를 8000으로 정확히 매핑**했는지 재확인 — 이전 영상에서 이미 변경한 설정.

### 컨테이너 리소스 할당 조정
- **Application → Containers** 탭에서 컨테이너 설정 확인 — 기본 Hello World 컨테이너는 **Azure Container Registry**에서 온 이미지이며, 기본 리소스는 **1/4 CPU 코어 + 0.5GB RAM**(매우 작아서 겨우 실행될 정도).
- Hugging Face + FastAPI 앱을 실제로 배포하려면 이 리소스로는 부족 — **Edit and deploy**로 리소스 증설:
  - CPU: **최대 2코어**까지 늘림(3코어는 허용 안 됨).
  - 메모리: 0.5GB로는 부족해 **4GB**로 증설.
- 이 조정을 저장한 뒤 리비전을 새로 만들 수 있음(지금 당장 배포하지는 않지만, 이후 이미지를 푸시한 뒤 다시 여기로 와서 변경해야 함을 미리 안내).

### 스케일(Scale) 설정
- **스케일 규칙(scale rule)**: 최소 **0**, 최대 **10**(최대 30까지도 가능) 인스턴스로 설정 — 0~10이면 충분하다고 판단.

### 그 외 옵션 확인
- **인증(Authentication)**: 모델을 완전히 공개하고 싶지 않다면 이 단계에서 설정 가능(이번엔 설정하지 않음).
- **지속적 배포(Continuous deployment)**: GitHub과 연동해 자동으로 업데이트하는 옵션도 있지만, 이미 GitHub Actions로 준비가 되어 있으므로 이번엔 건너뜀 — 다음 레슨에서 자동화를 이어감.

## 요약
- Container App을 실제 ML 워크로드에 맞게 구성하려면 **Ingress 포트(8000) 확인 + 컨테이너 리소스 증설(CPU 2코어, RAM 4GB) + 스케일 규칙(0~10 인스턴스)**을 조정해야 하며, 인증과 GitHub 연동형 지속적 배포는 필요에 따라 추가로 설정할 수 있는 선택 사항이다.

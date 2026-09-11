# AI 에이전트를 클라우드 기반 LLM에 연결하기 (Connecting your AI agent to a cloud hosted LLM)

## 개요
- **핵심 개념 요약**: 로컬 가상 샌드박스 환경이나 사내 프라이빗 네트워크에서 작동 중인 AI 에이전트 핵심 모듈이 클라우드에 안전하게 배포된 LLM API(예: Vertex AI, Gemini API, 또는 자체 호스팅된 GPU 서버)에 자격 증명 탈취 없이 보안 IAM 채널을 통해 접근하고 질의를 완수하는 보안 네트워크 연동 설계를 다룹니다.
- **업로드일**: 2025-10-15
- **YouTube 링크**: [Watch Video](https://www.youtube.com/watch?v=UOsbFesKqDg)

## 내용
### 1. 보안 위협: API Key 하드코딩의 한계
- 로컬 스크립트에 API 키 문자열을 그대로 적어 두면 깃허브(GitHub) 등의 소스 관리 도구에 우발적으로 공유되거나 노출되어 요금 과금 테러 및 자산 유출 피해를 입을 수 있습니다.
- 엔터프라이즈 환경에서는 정적 API 키 사용을 원천 차단하고, 구글 클라우드의 **IAM 서비스 계정(Service Account)** 자격 증명 방식을 적용해야 합니다.

### 2. IAM 및 Workload Identity 연동
- **IAM 서비스 계정**: 에이전트 프로세스에게 클라우드 LLM 모델에만 질문할 수 있는 최소 권한(`roles/aiplatform.user`)을 부여한 인증 토큰을 런타임에 동적으로 주입합니다.
- 로컬 가동 시에는 서비스 계정 키 파일(JSON)을 환경 변수(`GOOGLE_APPLICATION_CREDENTIALS`)에 바인딩하여 안전하게 인증을 처리합니다.

### 3. 통신 암호화 및 엔드포인트 격리
- 클라우드 LLM 호출 시 모든 데이터는 HTTPS(TLS 1.3) 보안 프레임워크를 통해 암호화 전송되어야 하며, 사내 보안 요건에 따라 퍼블릭 인터넷이 아닌 VPC 서비스 제어(VPC Service Controls)망 내부의 프라이빗 서브넷 경로로만 통신하도록 제한할 수 있습니다.

## 예시
아래 파이썬 코드는 환경 변수 보안 방침을 지키며, 구글의 공식 Vertex AI SDK를 인스턴스화하여 클라우드에 호스팅된 거대 AI 모델 엔드포인트에 접속해 통신하는 표준 예제입니다.

```python
import os
from google.cloud import aiplatform
from vertexai.generative_models import GenerativeModel

# 1. 안전한 IAM 서비스 계정 JSON 키 경로 환경 변수 바인딩 검증
# (주의: 코드 본문에는 절대 실제 API Key나 비밀번호를 적지 않습니다.)
assert "GOOGLE_APPLICATION_CREDENTIALS" in os.environ, "보안 IAM 자격 증명 환경 변수가 주입되지 않았습니다!"

# 2. 클라우드 프로젝트 및 리전 타깃 매핑
PROJECT_ID = os.environ.get("GCP_PROJECT_ID", "my-secure-ai-project")
LOCATION = os.environ.get("GCP_LOCATION", "asia-northeast3") # 서울 리전

aiplatform.init(project=PROJECT_ID, location=LOCATION)

# 3. 클라우드 Vertex AI 플랫폼에 배포된 최신 Gemini 모델 초기화
# (클라우드 상의 호스팅 모델이므로, 에이전트는 네트워크 API 호출을 수행합니다.)
cloud_model = GenerativeModel("gemini-1.5-pro")

def query_cloud_agent(prompt: str) -> str:
    print(f"[Secure Channel] Querying cloud-hosted LLM inside project: {PROJECT_ID}...")
    try:
        response = cloud_model.generate_content(prompt)
        return response.text
    except Exception as e:
        return f"통신 보안/인증 에러 발생: {str(e)}"

result = query_cloud_agent("구글 클라우드 보안 IAM 설계 요령에 대해 요약해 줘.")
print(result)
```

## 요약
- 실무용 AI 에이전트 배포 시 절대 보안 비밀(API Key)을 소스에 기록하지 말고, 환경 변수와 클라우드 자격증명(IAM Service Account) 방식으로 결합해야 합니다.
- Vertex AI SDK는 Google Cloud의 기본 인증 체계와 완벽히 호환되므로 환경 변수 설정만으로 안전하고 강력한 보안 통신 터널을 구성할 수 있습니다.
- 대규모 서비스 시에는 에이전트와 LLM 통신 경로를 VPC 내부에 가두어 데이터 유출 경로를 원천 통제하는 하이엔드 인프라 보안 구조가 적극 권장됩니다.

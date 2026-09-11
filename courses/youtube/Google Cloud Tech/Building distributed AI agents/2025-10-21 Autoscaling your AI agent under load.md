# 부하 시 AI 에이전트 자동 확장 (Autoscaling your AI agent under load)

## 개요
- **핵심 개념 요약**: 비즈니스 운영 환경에서 동시다발적인 추론 요청이 폭증할 때, 에이전트 호스팅 API 서버(FastAPI 등)와 가상 컴퓨팅 리소스의 트래픽을 정밀 감지하여 무중단 상태로 컨테이너 인스턴스를 자동 증설 및 감축하는 **오토스케일링(Autoscaling)** 최적화 설계 방안을 파악합니다.
- **업로드일**: 2025-10-21
- **YouTube 링크**: [Watch Video](https://www.youtube.com/watch?v=ESIL0Rzl5VQ)

## 내용
### 1. 트래픽 폭증이 AI 에이전트에 미치는 충격
- 에이전트는 일반적인 단순 웹 서버에 비해 추론 대기 시간(Latency)이 매우 길며(최소 2~3초에서 수십 초), 도구 호출(Tool calling) 및 DB 쓰기 연산이 복합적으로 발생합니다.
- 단일 인스턴스에서 동시 요청을 모두 감당하면 메모리 고갈(OOM)이나 API 타임아웃 장애로 즉각 이어집니다.

### 2. Cloud Run의 동시성(Concurrency) 튜닝
- **Concurrency (동시성)**: 한 컨테이너 인스턴스가 동시에 처리할 수 있는 최대 요청 수입니다.
- 기본값은 80이지만, 무거운 LLM 에이전트의 경우 컨테이너당 동시성 수치를 10~20 사이로 낮추어(Tight concurrency) 리소스가 몰리기 전에 즉각 신규 컨테이너 인스턴스가 프로비저닝되어 로드를 골고루 분산받도록 오토스케일링 민감도를 상향 튜닝해야 합니다.

### 3. CPU/Memory 스케일 아웃 메트릭 설정
- 요청 개수와 더불어 실제 인스턴스의 CPU 사용률이 60~70% 선을 넘어가면 자동으로 인스턴스 스케일 아웃이 발생하도록 규칙을 설계합니다.
- 인스턴스 기동 시의 콜드 스타트를 예방하기 위해 `min-instances`를 비즈니스 최소치(예: 2개)로 묶어 두는 예방책도 함께 융합하여 구성합니다.

## 예시
아래 예시는 gcloud 명령어를 사용하여 배포 가동 속도가 느린 AI 에이전트 서비스에 대해 Concurrency(동시성 한계치)를 15로 낮추고, 최소 인스턴스 정책을 결합하여 견고하게 오토스케일 배포를 때리는 명령어 명세입니다.

```bash
# Cloud Run 에이전트 인프라 오토스케일링 배포 최적화 스크립트
# --concurrency=15 : 컨테이너당 동시 처리를 최대 15개로 제한 (초과 시 즉각 신규 서버 증설 트리거)
# --min-instances=2 : 트래픽이 완전히 제로로 떨어져도 최소 2개 컨테이너는 띄워두어 기동 지연 방지
# --max-instances=10 : 과도한 자동 증설로 인한 폭탄 과금 방어용 안전선 설정

gcloud run deploy secure-agent-api \
    --image=gcr.io/my-gcp-project/distributed-agent:latest \
    --platform=managed \
    --region=asia-northeast3 \
    --concurrency=15 \
    --min-instances=2 \
    --max-instances=10 \
    --cpu=2 \
    --memory=4Gi \
    --allow-unauthenticated
```

## 요약
- AI 에이전트 서빙 인프라는 매우 무겁기 때문에, 전통적 웹서버보다 **Concurrency 단위를 보수적(낮은 수치)으로 설정**해야 실시간 부하에 원활하게 대처할 수 있습니다.
- 최소 인스턴스(`min-instances`) 보장 정책은 콜드 스타트로 발생하는 사용자 이탈 현상을 방지해 주는 필수적인 배포 설정입니다.
- 트래픽이 잦아들었을 때 자원을 신속히 반납하는 축소(Scale-down) 속도 튜닝도 비용 제어 관점에서 꼼꼼히 설정해 주어야 불필요한 과금을 예방할 수 있습니다.

# Cloud Run에 GPU 기반 LLM 배포하기 (Deploying a GPU powered LLM on Cloud Run)

## 개요
- **핵심 개념 요약**: 구글 클라우드의 서버리스 컴퓨팅 플랫폼인 Cloud Run 상에서 고성능 GPU 자원을 할당받아, 오픈소스 소형 LLM(Gemma, Llama 등)을 실시간 서빙 엔드포인트로 자율 구동하는 인프라 구축 방안을 배웁니다.
- **업로드일**: 2025-10-06
- **YouTube 링크**: [Watch Video](https://www.youtube.com/watch?v=KQk6b0v-Btg)

## 내용
### 1. Cloud Run의 GPU 가속화 지원
- 기존 Cloud Run은 CPU 기반의 가벼운 웹앱 서빙에만 적합했으나, 대형 언어 모델의 로컬 호스팅 수요가 커짐에 따라 NVIDIA L4 GPU 등 고성능 하드웨어 가속기 인스턴스를 추가 할당할 수 있게 진화했습니다.
- 이를 통해 복잡한 GKE(Google Kubernetes Engine) 클러스터 관리 오버헤드 없이 온디맨드로 GPU LLM 인프라를 프로비저닝할 수 있습니다.

### 2. LLM 서빙 프레임워크 선택 및 컨테이너화
- GPU 자원을 효율적으로 점유하기 위해 **vLLM**이나 **Ollama** 등 고속 서빙 프레임워크를 도커(Docker) 컨테이너로 패키징합니다.
- **콜드 스타트(Cold Start)**: 대형 가중치 파일(Weight file)로 인해 초기 기동 시간이 수 분 이상 걸리는 병목 현상을 방지하기 위해, 가중치 데이터를 컨테이너 내부에 미리 내장(Bake-in)하거나 Cloud Storage FUSE 드라이브를 마운트하여 기동 시 즉각 로드하도록 아키텍처를 최적화합니다.

### 3. 최소 인스턴스(Min Instances) 정책
- 콜드 스타트를 완벽히 피하고 즉각적인 대답 품질을 보장받으려면, 최소 1개 이상의 GPU 인스턴스가 항상 상시 가동 대기(Keep-alive) 상태를 유지하도록 설정하는 것이 프로덕션의 필수 팁입니다.

## 예시
아래 예시는 Terraform 구성을 모방하여 Cloud Run 서비스 배포 시 L4 GPU 자원을 명시적으로 활성화하고 상시 구동 인스턴스를 설정하는 YAML 매니페스트 명세 예제입니다.

```yaml
# cloudrun-gpu-service.yaml
apiVersion: serving.knative.dev/v1
kind: Service
metadata:
  name: gemma-llm-service
  annotations:
    run.googleapis.com/launch-stage: BETA
spec:
  template:
    metadata:
      annotations:
        # 1. GPU 하드웨어 가속 종류 명시 (NVIDIA L4)
        run.googleapis.com/accelerator: nvidia-l4
        # 2. 콜드 스타트 방지를 위한 상시 대기 인스턴스 1개 보장
        run.googleapis.com/minScale: '1'
        run.googleapis.com/maxScale: '5'
    spec:
      containers:
      - image: gcr.io/my-gcp-project/vllm-gemma-2b:latest
        resources:
          limits:
            cpu: '4'
            memory: 16Gi
            # 3. GPU 개수 1개 할당
            nvidia.com/gpu: '1'
        ports:
        - containerPort: 8000
```

## 요약
- Cloud Run의 GPU 지원 기능을 활용하면 관리형 서버리스 이점을 유지하면서 오픈소스 LLM을 안정적으로 실시간 서빙할 수 있습니다.
- 기동 속도 개선(Cold start tuning)을 위해 vLLM 최적화 캐시 기법 및 FUSE 드라이버 마운트를 연동하는 것이 인프라 엔지니어링의 핵심입니다.
- GPU 단가가 높으므로 트래픽 추이에 따른 지능적 자동 스케일 조정(Autoscaling scale-down) 범위 설계가 수반되어야 비용 낭비를 막을 수 있습니다.

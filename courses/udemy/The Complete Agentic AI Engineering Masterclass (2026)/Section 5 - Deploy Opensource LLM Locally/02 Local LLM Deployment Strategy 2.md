# Local LLM Deployment Strategy 2

## 개요
- LM Studio의 모델 탐색·다운로드·GPU 오프로딩과 추론 지표를 살펴본다.

## 내용
### LM Studio
LM Studio는 시스템 사양에 맞는 모델을 보여 주고 채팅 인터페이스에서 실행한다. `Full GPU offload possible`은 모델 전체를 GPU에 올릴 수 있음을 뜻한다.

강의는 토큰/초(tokens per second), 생성 토큰 수와 EOS(end-of-sequence)를 확인한다. 일부 DeepSeek 모델처럼 공개 가중치가 있어도 파일이 수백 GB이면 일반 노트북에서 실행할 수 없다. GPT-4.1 같은 비공개 모델은 가중치가 공개되지 않아 로컬 실행 대상이 아니다.

## 예시
```text
모델 선택 → 파일 크기 확인 → GPU 오프로딩 가능 여부 확인
→ 실행 → tokens/sec와 메모리 사용량 측정
```

## 요약
- 모델 이름보다 실제 파일 크기와 양자화·오프로딩 가능성을 확인한다.
- LM Studio의 호환성 표시는 로컬 모델 선택의 출발점이다.

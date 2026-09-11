# Local LLM Deployment Strategy 1

## 개요
- Ollama로 오픈소스 LLM을 로컬에서 내려받고 실행한다.

## 내용
### Ollama 실행
Ollama는 CLI와 데스크톱 인터페이스를 제공한다. `ollama run`은 모델이 없으면 먼저 내려받고, 실행 시 가중치를 RAM/GPU 메모리에 적재한다. 생성 속도는 모델 크기와 시스템 사양에 따라 달라진다.

## 예시
```bash
ollama run <model-name> "Explain LLM"
```

강의에서는 모델 실행 전후의 메모리 사용량을 비교해 로컬 추론이 실제로 시스템 자원을 사용하는 모습을 확인한다.

## 요약
- 모델 크기와 RAM/GPU 용량을 먼저 비교한다.
- 로컬 모델은 데이터 통제에 유리하지만 대형 모델은 실행이 느리거나 불가능할 수 있다.

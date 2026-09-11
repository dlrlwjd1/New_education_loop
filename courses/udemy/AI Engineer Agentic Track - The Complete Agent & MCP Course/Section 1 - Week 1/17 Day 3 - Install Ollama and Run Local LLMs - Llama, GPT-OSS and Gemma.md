# Day 3 - Install Ollama and Run Local LLMs: Llama, GPT-OSS and Gemma

## 개요
- Ollama로 로컬 모델을 준비하고 기존 모델 비교 실습에 추가한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49771149#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 모델 선택과 실행 위치
Ollama 설치 후 모델 목록에서 장비에 맞는 크기를 선택한다. 버전 숫자가 높다고 무조건 적합한 것은 아니다. 큰 파라미터 모델은 저장 공간과 메모리를 많이 사용한다. 이름에 cloud가 붙는 모델은 클라우드 실행이므로 로컬 실행과 구분한다.

### 설치 상태와 모델 관리
`ollama ls`로 설치된 모델을 확인하고 `ollama pull`로 필요한 모델을 받는다. 서비스가 꺼져 있으면 `ollama serve`를 사용한다. 이미 실행 중이면 같은 포트를 다시 바인딩할 수 없다. 설치 후 명령이 인식되지 않으면 터미널이나 IDE를 다시 시작해 환경 변경을 반영한다.

### 공통 API로 호출
기본 로컬 주소의 포트는 11434다. `/v1/models`에서 제공 모델을 확인하고 OpenAI 호환 클라이언트로 호출한다. 클라우드 호출에서 사용하던 질문·응답 수집 흐름을 그대로 적용한다.

### 시연 결과
Llama 3.2의 작은 버전, GPT-OSS 20B, 추가로 Gemma를 실행한다. 큰 모델은 강사의 장비에서도 GPU 부하가 커진다. 처음 계획한 여덟 개에서 Gemma를 더해 최종 비교 대상은 아홉 개가 된다. 반복 실행·장비별 속도 차이를 염두에 두고 결과를 모은다.

## 예시
```bash
ollama ls
ollama pull llama3.2:1b
```

서비스가 실행 중이지 않을 때만 별도 터미널에서 실행한다.

```bash
ollama serve
```

실습에서는 내려받은 모델명을 API 요청의 `model`로 사용한다.

## 요약
- 모델 버전보다 장비가 감당할 수 있는 크기를 확인한다.
- Ollama의 cloud 모델과 로컬 모델을 구분한다.
- 로컬 모델도 같은 질문과 수집 형식에 연결할 수 있다.

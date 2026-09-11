# Build and Deploy a Marco Polo AWS Step Function (Lab)

## 개요
- 앞선 데모("Working with AWS Step Functions")에서 다룬 Marco Polo 패턴을 실제로 AWS 콘솔에서 Lambda 2개 + Step Function으로 빌드·배포해보는 1시간짜리 실습 랩(ungraded lab).

## 내용

### 랩 목표
- **Marco Polo** 게임 서버리스 워크플로를 AWS Step Functions와 Lambda로 시뮬레이션해 만들어보기.

### 랩 설명
- 커맨드라인 기반의 간단한 "Marco Polo" 게임을 만들고, 이를 AWS 서버리스 서비스에서 실행되는 것처럼 시뮬레이션.
- 워크플로: 이름을 첫 번째 Lambda 함수에 전달 → `"Marco"`인지 확인 → 그 응답을 두 번째 Lambda로 전달 → `"Polo"`를 반환하는지 확인.

### 랩 단계
1. 랩 환경 열기.
2. `marco_polo.py` 커맨드라인 도구를 로컬에서 실행: `./marco_polo.py phrase Marco`, `./marco_polo.py phrase Sally`.
3. `stepfunction.json`을 살펴보며 두 Lambda가 어떻게 조율(coordinate)되는지 확인.
4. AWS 콘솔에서 `pre_marco`, `post_marco` Lambda 함수 생성 (AWS 프리티어 계정 필요 — https://aws.amazon.com/free/).
5. 제공된 `stepfunction.json` 정의로 Step Function 생성.
6. 다양한 이름으로 Step Function 워크플로를 테스트하며 출력 관찰.

### 성찰 질문
1. Step Functions는 다단계 워크플로의 조율을 어떻게 가능하게 하는가?
2. Lambda와 Step Functions를 활용한 서버리스 아키텍처의 이점은 무엇인가?
3. 이 Lambda 체이닝 패턴을 또 어디에 적용할 수 있는가?
4. 더 많은 단계나 플레이어를 지원하도록 게임을 어떻게 확장할 수 있는가?
5. 이런 워크플로를 운영화(operationalize)하고 모니터링하는 데 어떤 과제가 남아있는가?

### 도전 과제
1. 각 Lambda 함수에 커스텀 로깅 추가해보기.
2. 에러 발생 시 CloudWatch 알람 설정해보기.
3. Step Function 워크플로를 호출하는 프론트엔드 만들어보기.
4. Lambda들을 Docker 이미지로 컨테이너화해보기.
5. Amazon Lex로 인터랙티브 음성 인터페이스 만들어보기.

## 요약
- 이 랩은 "Working with AWS Step Functions" 데모의 `PreMarco`/`PostMarco` 패턴을 실제 AWS 계정에서 직접 배포·테스트해보는 실습이며, 로컬 CLI 시뮬레이션(`marco_polo.py`) → Lambda 생성 → Step Function 정의(`stepfunction.json`) → 실제 실행까지 전체 흐름을 다룬다.

# Supporting Replication & Automation Outside Generative AI

## 개요
- 챗봇과의 대화 속에서 이루어진 분석을, **대화 밖에서도 재현(replicate)하고 자동화할 수 있는 독립 산출물(artifact)**로 바꾸는 방법을 다루는 강의.

## 내용
### 왜 "재현 가능성(replicability)"이 필요한가
- 대화(conversation)는 훌륭하지만 한계가 있다 — 나중에 "도대체 어떻게 그런 결론이 나왔어?"라는 질문을 받았을 때, 대화 기록만으로는 설명하기 번거롭다.
- 목표: 분석 과정을 **다른 사람도 검증하고 재현할 수 있는 완전한 산출물**로 만드는 것.

### 1단계 — 대화 속 분석을 하나의 Python 스크립트로 통합하기
- 지금까지의 대화에서 AI는 여러 차례 Python 코드를 조각조각 작성·실행해왔다.
- 프롬프트: "지금까지 한 모든 분석과 체크를 재현할 수 있는, 커맨드라인에서 실행 가능한 단일 통합 Python 스크립트를 작성해줘. 이 스크립트는 이 파일과 같은 형식의 파일 경로를 입력받아 실행돼야 해."
- 결과: 대화 속에서 조각조각 실행됐던 모든 Python 코드가 **하나의 완결된 스크립트(예: `late_return_analysis.py`)**로 정리되어, 실행 방법까지 안내받음.
- 효과: 이제 새로운 쿼리 결과(CSV)를 얻을 때마다, ChatGPT와 대화를 다시 하지 않고도 **이 스크립트만 실행하면 동일한 분석을 재현**할 수 있다. 대시보드, 파이프라인, 자동화 시스템 구축의 기반이 됨.

### 2단계 — README로 "무엇을, 왜" 했는지 문서화하기
- 프롬프트: "우리가 한 분석, 데이터에 대해 수행한 체크, 후속 검토가 필요한 데이터 이슈, 원본 데이터셋의 형태/특성(전체 행 수 등), 그리고 방금 만든 스크립트 실행 방법을 설명하는 README를 작성해줘."
- 결과: 데이터셋 개요(컬럼, 형식, 기본 통계 — 전체 행 수, 대여일 범위, 장르 종류 등), 수행한 새니티 체크, 수행한 분석 단계, 스크립트 사용법까지 담긴 **완결된 README 문서**를 받음.

### 3단계 — 모든 것을 하나의 zip 파일로 패키징하기
- 마지막 요청: "원본 데이터셋, README, (원한다면 쿼리 생성 과정까지) 모두 하나의 zip 파일로 묶어줘."
- 결과: 원본 스크립트 + 사용한 데이터셋 + 설명 README가 담긴 **zip 파일**을 다운로드.
- (이 zip 패키징 기능은 특히 ChatGPT에서 잘 작동한다고 언급 — 다른 도구에서도 될 수는 있지만 ChatGPT 기준으로 설명.)

### 이 산출물의 가치
- 문서화(documentation)와 재현(replication)은 원래 매우 번거롭고 손이 많이 가는 작업이었지만, 이제는 **"스크립트로 만들어줘", "README로 정리해줘", "zip으로 묶어줘"라고 요청하는 것만으로 해결**된다.
- 결과물의 활용:
  - 다른 사람이 **같은 데이터로 같은 분석을 반복 가능(repeatable)**하게 재현할 수 있음.
  - 새로운 데이터셋에 대해서도 같은 스크립트를 적용해볼 수 있고, **참조용 원본 데이터셋과 포맷 안내**가 있으므로 데이터를 어떻게 준비해야 하는지도 알 수 있음.
  - README가 실행 방법과 배경 설명까지 담고 있어, **대화에 참여하지 않은 제3자도 전체 과정을 이해**할 수 있음.

## 예시
```
1) 스크립트 통합 요청:
"Write a single unified Python script to reproduce all of these analyses and checks that can be run
from the command line and provided the path to a file in the same format as this one as input."

2) README 작성 요청:
"Write a README describing the analysis we did, checks we did on the data, data issues for potential follow-up,
shape/characteristics of the source dataset (e.g. total rows), and how to run the script you created."

3) 패키징 요청:
"Zip it all up with the original dataset and the README."
```

## 요약
- 대화 속에서 이루어진 분석은 **하나의 통합 Python 스크립트**로 정리해 대화 밖에서도 재현 가능하게 만들 수 있다.
- **README**로 데이터셋 개요, 수행한 체크·분석, 실행 방법까지 문서화하면 제3자도 이해하고 검증할 수 있다.
- 스크립트 + 데이터셋 + README를 **zip으로 패키징**하면, 대시보드·파이프라인·자동화의 기반이 되는 완결된 산출물을 손쉽게 만들 수 있다.

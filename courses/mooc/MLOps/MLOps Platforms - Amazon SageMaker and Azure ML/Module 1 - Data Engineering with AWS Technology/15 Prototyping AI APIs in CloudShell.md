# Prototyping AI APIs in CloudShell

## 개요
- AWS CloudShell 안에서 **AWS Comprehend CLI**와 커맨드라인 도구 **Lynx**를 조합해, Wikipedia 문서를 텍스트로 긁어와 감성 분석·개체명 추출·빈도 집계까지 순수 Bash 파이프라인으로 프로토타이핑하는 12분 데모.

## 내용

### AWS Comprehend CLI 기본 사용법
- AWS에는 텍스트 분석, 자동 코드 리뷰, 챗봇, 예측, 문서 분석 등 다양한 AI 서비스가 있으며, **CloudShell**은 이런 아이디어를 빠르게 시도해볼 수 있는 최적의 장소.
- `aws comprehend help`로 사용 가능한 서브커맨드 확인(batch-detect, dominant-language, classify-document 등).
- 여러 줄(new line)로 옵션을 나눠 작성하면 복잡한 명령어도 훨씬 가독성 있게 구성 가능.
- `aws comprehend detect-sentiment --language-code en --text "I love C-Sharp"` → 감성 결과(POSITIVE/NEGATIVE/NEUTRAL) 즉시 반환.
- 탭 완성(tab completion)을 적극 활용 가능. 단, **한 번에 전달 가능한 텍스트는 5,000바이트 미만**이어야 한다는 제약이 있음 — 대용량 텍스트 처리 시 반드시 고려해야 할 지점.

### Lynx로 웹 콘텐츠를 텍스트로 추출
- `sudo yum install lynx`로 설치 — 1980~90년대에 실제로 인터넷을 탐색하던 터미널 기반 웹 브라우저.
- `lynx -dump <URL>`로 웹페이지 텍스트를 표준출력으로 덤프 가능. `| less`로 파이프하면 터미널에서 바로 브라우징도 가능.
- 예시로 위키피디아의 "Albert Einstein" 문서를 대상으로 진행 — `wc -l`로 줄 수(77,690줄), `wc -c`로 바이트 수(432,000바이트) 확인 → Comprehend의 5,000바이트 제한을 초과.

### 5,000바이트 제한 우회 — `head -c`
- `head -c 5000`으로 정확히 5,000바이트만 잘라내는 방식으로 해결.
- 백틱(또는 `$(...)`) 문법으로 명령어 출력을 변수에 할당: `TEXT=$(lynx -dump <URL> | head -c 5000)` → `echo $TEXT`로 확인.
- 이렇게 변수에 담은 텍스트를 `aws comprehend detect-sentiment --language-code en --text "$TEXT"`에 그대로 전달.
- 결과: 아인슈타인에 관한 위키피디아 텍스트는 중립적일 것으로 예상했지만, 실제로는 꽤 긍정적인(약 1/3 가량 매우 긍정적) 어조로 나타남 — 역사적 인물에 대한 대중적 호감이 반영된 흥미로운 데이터 과학적 관찰.

### 개체명 추출과 빈도 집계 — Bash 파이프라인 전체
- `aws comprehend detect-entities --output text`로 개체명(entity) 목록 추출 (Wikipedia, Albert Einstein, German 등).
- 이를 더 정교하게 만들기 위해 **AI 파이프라인** 커스텀 명령을 구성:
  1. 개체명 추출(detect-entities) 결과에서 개체가 들어있는 컬럼만 추출.
  2. 공백 제거, 알파벳 문자만 남기기, 소문자화, 개행 제거로 텍스트 정제.
  3. `sort` → `uniq -c`로 각 개체가 몇 번 등장하는지 집계.
  4. 첫 번째 컬럼(등장 횟수) 기준으로 정렬 후 역순 정렬(`sort -rn`).
  5. `head`로 상위 몇 개 항목만 출력.
- 결과: Einstein, University, German, Empire, Albert, Kingdom, Zurich 등 실제로 기사에서 중요하게 다뤄지는 핵심 개체들이 빈도순으로 나타남 — Python이나 C# 같은 언어 없이도 CloudShell + Bash + Comprehend API 조합만으로 복잡한 데이터 과학 프로토타입을 빠르게 만들 수 있음을 보여줌.

## 예시
```bash
# Comprehend 감성 분석 기본 사용
aws comprehend detect-sentiment \
    --language-code en \
    --text "I love C-Sharp"

# Lynx 설치 및 웹페이지 텍스트 추출
sudo yum install lynx
lynx -dump https://en.wikipedia.org/wiki/Albert_Einstein | less

# 텍스트 크기 확인
lynx -dump https://en.wikipedia.org/wiki/Albert_Einstein | wc -l   # 줄 수
lynx -dump https://en.wikipedia.org/wiki/Albert_Einstein | wc -c   # 바이트 수

# 5,000바이트로 잘라 변수에 저장
TEXT=$(lynx -dump https://en.wikipedia.org/wiki/Albert_Einstein | head -c 5000)
echo $TEXT

# 감성 분석에 변수 전달
aws comprehend detect-sentiment --language-code en --text "$TEXT"

# 개체명 추출 + 빈도 집계 파이프라인 (개념 구조)
aws comprehend detect-entities --language-code en --text "$TEXT" --output text \
    | awk '{print $entity_column}' \
    | tr -d ' ' | tr '[:upper:]' '[:lower:]' | tr -d '\n' \
    | sort | uniq -c \
    | sort -k1 -rn \
    | head -10
```

## 요약
- AWS CloudShell 위에서 `aws comprehend` CLI와 Lynx, 그리고 표준 Bash 도구(`head -c`, 백틱 변수 할당, `sort`/`uniq -c`/`awk`)만 조합하면, 웹 텍스트 수집 → 5,000바이트 제한 우회 → 감성 분석 → 개체명 추출·빈도 집계까지 이어지는 데이터 과학 파이프라인을 어떤 프로그래밍 언어 없이도 프로토타이핑할 수 있다.

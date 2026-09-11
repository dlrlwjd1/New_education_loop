# Declaring Dependencies

## 개요
- `requirements.txt`로 프로젝트 의존성을 선언하는 법과, **버전 고정(pinning)**의 의미와 장단점을 다룬다.

## 내용

### `requirements.txt` 구조
- 각 줄은 `패키지명==버전번호` 형태 — `==`은 그 **패키지를 특정 버전에 고정(pin)**한다는 뜻.
- 버전을 명시하지 않으면(예: `pytest`만 적기), **설치 시점의 최신 버전**이 설치된다.

### 설치 흐름
- 항상 그렇듯 가상환경을 먼저 만들고 활성화: `python -m venv .venv` → `source .venv/bin/activate`.
- `pip install -r requirements.txt`로 파일에 나열된 모든 패키지와 그 하위 의존성을 한 번에 설치.

### 고정(pinned) vs. 비고정(unpinned)의 차이
- **고정된 버전** (`pytest==7.1.2`): 항상 정확히 그 버전이 설치됨 — 재현성(reproducibility) 보장.
- **비고정** (`pytest`만 명시): 설치 시점마다 그때의 최신 버전이 설치될 수 있어, 시간이 지나면 팀원마다 다른 버전을 쓰게 될 위험이 있다.

## 예시
```
# requirements.txt
click==8.1.3
colorama==0.4.5
pytest             # 버전 미지정 → 최신 버전 설치
```
```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

python -c "import pytz"   # 설치된 패키지 확인
```

## 요약
- `requirements.txt`는 `패키지==버전`으로 의존성을 선언하며, `pip install -r requirements.txt`로 일괄 설치한다.
- 버전을 고정하면 재현성이 보장되고, 고정하지 않으면 설치 시점의 최신 버전이 설치된다는 차이를 이해하고 상황에 맞게 선택해야 한다.

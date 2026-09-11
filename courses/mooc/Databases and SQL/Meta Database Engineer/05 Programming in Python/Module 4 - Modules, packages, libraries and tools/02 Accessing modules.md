# Accessing modules

## 개요

- 인터프리터가 모듈을 찾는 검색 순서와 sys.path 확인
- 내장 모듈(sys, calendar) 접근 실습과 모듈 소스 탐험

## 내용

### 인터프리터의 모듈 검색 순서

1. **현재 디렉터리 경로**
2. **내장 모듈 디렉터리**
3. **PYTHONPATH 환경 변수**의 디렉터리 목록
4. **설치 의존 기본 디렉터리**

### sys.path로 검색 위치 확인

- `import sys` 없이 sys.path를 쓰면 Python이 sys를 몰라 에러 → 먼저 임포트해야 한다.
- `sys.path`는 인터프리터가 모듈을 찾을 모든 위치(현재 작업 디렉터리 포함) 목록을 반환 — for 루프로 한 줄씩 출력하면 깔끔하다.

### calendar 모듈 실습

- 임포트는 첫머리에 하는 게 좋은 습관이지만, 코드 중간에서도 가능하다 (`import calendar`).
- **leapdays(year1, year2)** — 두 해 사이의 윤일 수(정수) 반환. 2000~2050은 13.
- **isleap(year)** — 윤년 여부(불리언) 반환. 2036은 True.
- 에디터에서 Cmd(Mac)/Ctrl(Windows) 클릭으로 calendar 파일에 들어가 보면 — 모듈 자신도 다른 모듈들을 임포트하고 있으며, sys.path에 나온 Python 패키지 위치에 존재함을 확인할 수 있다.

## 예시

```python
import sys
locations = sys.path
for loc in locations:
    print(loc)             # 모듈 검색 경로들

import calendar
leap_days = calendar.leapdays(2000, 2050)
print(leap_days)           # 13
print(calendar.isleap(2036))  # True
```

## 요약

- 모듈은 현재 디렉터리 → 내장 디렉터리 → PYTHONPATH → 기본 설치 디렉터리 순으로 검색된다.
- sys.path로 검색 경로를 확인할 수 있고, calendar 같은 내장 모듈은 임포트 즉시 기능(leapdays·isleap)을 제공한다.
- 에디터의 정의 이동으로 모듈 소스를 직접 살펴볼 수 있다.

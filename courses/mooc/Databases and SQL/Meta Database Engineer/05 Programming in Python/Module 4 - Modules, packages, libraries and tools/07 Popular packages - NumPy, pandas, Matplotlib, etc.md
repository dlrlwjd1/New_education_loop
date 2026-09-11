# Popular packages: NumPy, pandas, Matplotlib, etc

## 개요

- 패키지(특정 목적의 모듈 묶음)의 개념과 분야별 인기 패키지 지도

## 내용

### 패키지의 기초

- **패키지 = 디렉터리(폴더), 모듈 = 파일**. 도서관(패키지 컬렉션)과 책(패키지)에 비유 — 매일 커진다.
- 임포트는 모듈과 같은 방식이며, `from foo import a`(foo=패키지, a=원하는 함수가 든 모듈)처럼 올바르게 지정해야 의미가 있다. 패키지의 디렉터리 구조를 탐색하거나 온라인 예제를 참고하면 시간이 절약된다.
- **pip = 기본 패키지 매니저**, **PyPI = 패키지 색인**.

### Python의 주요 활용 분야

- 데이터 과학, AI·머신러닝, 웹 프레임워크, 애플리케이션 개발, 자동화, 하드웨어 인터페이스.

### 분야별 인기 패키지

| 분야 | 패키지 |
|---|---|
| **내장(설치 불필요)** | os, sys, csv, json, importlib, re, math, itertools |
| **데이터 과학** | NumPy, SciPy, NLTK, pandas (탐색·조작) / OpenCV(이미지 처리), Matplotlib(시각화) |
| **ML·AI** | TensorFlow, PyTorch, Keras (딥러닝·신경망 구현에 PyTorch·Keras가 가장 인기) / SciPy, scikit-learn, Theano |
| **웹 개발** | Flask(경량 마이크로 프레임워크), Django(풀스택) / CherryPy, Pyramid, Beautiful Soup, Selenium |

- 로보틱스·게임 개발 등 전문 영역에도 관련 패키지가 존재하며, 완벽히 맞는 패키지가 없더라도 오픈소스 커뮤니티가 계속 채워 나가고 있다.

## 요약

- 패키지는 모듈의 묶음(디렉터리)이고 pip/PyPI로 설치·검색한다.
- 내장 패키지(os·sys·json 등)는 거의 모든 프로젝트에서 쓰이므로 잘 알아둘 가치가 있다.
- 데이터 과학(NumPy·pandas), ML(TensorFlow·PyTorch·Keras), 웹(Flask·Django) 등 분야별 대표 패키지를 프로젝트 규모·친숙도에 따라 고른다.

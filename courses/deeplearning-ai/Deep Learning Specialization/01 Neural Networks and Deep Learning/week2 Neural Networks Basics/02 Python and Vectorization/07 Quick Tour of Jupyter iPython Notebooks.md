# 07 Quick Tour of Jupyter/iPython Notebooks

## 개요
- 첫 프로그래밍 과제(programming assignment) 전, Jupyter/iPython 노트북 사용법 간단 투어
- 지시문(instructions)은 텍스트 블록, 회색 블록은 코드 블록
- 코드 실행, 마크다운 복구, 커널(kernel) 관리, 제출 방법 안내

---

## 내용

### 코드 작성 위치

- 코드 블록 안에 `### START CODE HERE ###` 와 `### END CODE HERE ###` 표시
- **반드시 이 두 주석 사이에** 코드를 작성

```python
### START CODE HERE ###
print("hello world")
### END CODE HERE ###
```

### 코드 실행

- **Shift + Enter**: 현재 셀(cell) 실행 (Mac·PC 공통)
- 또는 메뉴 **Cell → Run Cell**
- 컴퓨터마다 단축키가 다를 수 있음

### 마크다운(markdown) 복구

- 지시문 텍스트를 실수로 **더블클릭**하면 마크다운 원본 코드가 보임
- 다시 예쁜 텍스트로 되돌리려면 그 셀을 실행 (Shift+Enter 또는 Cell → Run Cell)

### 커널(kernel) 관리

- 코드는 서버의 **커널** 위에서 실행됨
- 너무 큰 작업, 장시간 방치, 인터넷 연결 문제 등으로 커널이 죽을 수 있음
- 커널이 죽으면: **Kernel → Restart Kernel** 로 재시작
- 작은 작업만 하면 보통 문제 없음

### 상단 셀도 반드시 실행

- 노트북에는 여러 코드 블록이 있음
- 채점 대상 코드가 없는 블록이라도 **위쪽 셀부터 실행**해야 함
- 이유: 상단 셀이 `import numpy as np` 등 **필요한 변수·라이브러리를 세팅**하기 때문

### 제출

- 완료 후 우측 상단 파란색 **Submit Assignment** 버튼 클릭 → 채점 제출

---

## 예시

```python
# 상단 셀 — 채점 대상 아니어도 반드시 실행
import numpy as np
# ... 변수 세팅 ...

# 아래 셀 — 실제 과제 코드
### START CODE HERE ###
a = np.random.randn(5, 1)
### END CODE HERE ###
```

---

## 요약
- 코드는 `START CODE HERE` ~ `END CODE HERE` 사이에 작성
- **Shift + Enter** 로 셀 실행 (또는 Cell → Run Cell)
- 마크다운이 깨져 보이면 그 셀을 실행해 복구
- 커널이 죽으면 **Kernel → Restart**
- import·변수 세팅이 있는 **상단 셀부터 반드시 실행**
- 완료 후 **Submit Assignment** 로 제출
- 다음은 선택(optional) 영상 — 로지스틱 회귀 비용 함수(cost function)의 유도

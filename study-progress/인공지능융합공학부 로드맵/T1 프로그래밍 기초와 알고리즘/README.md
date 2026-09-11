# T1 — 프로그래밍 기초와 알고리즘

학부 교과 **컴퓨터프로그래밍(1-1) · 파이썬응용(1-2) · 코딩테스트기초(2-1) · 인공지능알고리즘(2-2)** 을 담는 트랙이다.
"AI를 배우기 전에 코드를 쓸 줄 알아야 한다"에 해당하는 부분 전부가 여기 있다.

- 상위 로드맵: [인공지능융합공학부 로드맵](../README.md)
- 도착점 기여: 캡스톤 서비스의 **코드를 직접 쓰고, 느린 부분을 알고리즘으로 고칠 수 있게 된다**
- 분량: 약 82시간

## Phase 목록

| Phase | 학부 교과 | 주제 | 산출물 | 저장소 자료 | 파일 |
|---|---|---|---|---|---|
| 1 | 컴퓨터프로그래밍(1-1)<br>파이썬응용(1-2) | 파이썬 프로그래밍 기초 | 외부 API에서 데이터를 받아 파일로 저장하는 파이썬 스크립트 | 있음 | [01 Phase 1](01%20Phase%201%20-%20%ED%8C%8C%EC%9D%B4%EC%8D%AC%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%20%EA%B8%B0%EC%B4%88.md) |
| 2 | 코딩테스트기초(2-1) | 자료구조와 알고리즘 | 시간복잡도를 근거로 두 풀이를 비교한 문제 풀이 노트 10개 | 있음 | [02 Phase 2](02%20Phase%202%20-%20%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98.md) |
| 3 | 코딩테스트기초(2-1) | 그래프·문자열과 코딩테스트 실전 | 제한 시간 안에 푼 그래프·문자열 문제 기록 | 있음 | [03 Phase 3](03%20Phase%203%20-%20%EA%B7%B8%EB%9E%98%ED%94%84%20%EB%AC%B8%EC%9E%90%EC%97%B4%EA%B3%BC%20%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8%20%EC%8B%A4%EC%A0%84.md) |
| 4 | 인공지능알고리즘(2-2) | 탐색·최적화·진화 알고리즘 | A* 로 푼 경로 탐색 + 메타휴리스틱으로 푼 조합 최적화 | **있음** ✅ | [04 Phase 4](04%20Phase%204%20-%20%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98%20%ED%83%90%EC%83%89%EA%B3%BC%20%EC%B5%9C%EC%A0%81%ED%99%94.md) |

## 뼈대가 되는 강좌

1. **[IBM Data Science](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/README.md)** — `04 Python for Data Science, AI & Development` 가 Phase 1의 메인. 변수·자료구조·조건/반복·함수·클래스·파일 입출력·API 호출까지 파이썬 한 바퀴를 돈다.
2. **[Python Essentials for MLOps](../../../courses/mooc/MLOps/Python%20Essentials%20for%20MLOps/README.md)** — Phase 1의 두 번째 축. **테스트 작성(Module 3)** 과 pandas·NumPy(Module 4)를 다뤄 IBM 쪽에 없는 부분을 메운다.
3. **[Data Structures and Algorithms](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/README.md)** (UC San Diego · 6강좌 272강) — Phase 2~4의 메인. 학부 코딩테스트기초·인공지능알고리즘이 요구하는 범위를 거의 그대로 덮는다.
4. **[Data Analytics](../../../courses/deeplearning-ai/Data%20Analytics/README.md)** (DeepLearning.AI) — Course 3이 Phase 1의 보조. 같은 파이썬 문법을 데이터 분석 문맥에서 다시 본다.
5. **[Intelligent Agents and Search Algorithms](../../../courses/mooc/Computer%20Science%20Fundamentals/Intelligent%20Agents%20and%20Search%20Algorithms/README.md)** (MOOC · CU Boulder · 5모듈 12시간) — **Phase 4의 메인.** 합리적 에이전트·PEAS부터 A\*·IDA\*·가중 A\*, 언덕 오르기·시뮬레이티드 어닐링·유전 알고리즘, 미니맥스·알파-베타까지. **2026-09-04 수강·정리 완료** — 이 트랙의 마지막 공백이 여기서 닫혔다.

## 이 트랙에 없는 것

- **C/Java 등 다른 언어** — 학부 커리큘럼도 파이썬·자바스크립트 중심이라 범위 밖에 둔다. 자바스크립트는 [T5 트랙](../T5%20AI%20%EC%84%9C%EB%B9%84%EC%8A%A4%20%EA%B0%9C%EB%B0%9C%EA%B3%BC%20%EC%9D%B8%ED%94%84%EB%9D%BC/README.md) Phase 1에 있다.
- **컴퓨터구조·운영체제** — 학부 교과에 없다. 궁금하면 저장소의 [Nand to Tetris](../../../courses/mooc/Computer%20Science%20Fundamentals/Build%20a%20Modern%20Computer%20from%20First%20Principles%20-%20Nand%20to%20Tetris/README.md)가 있다. 학습 순서와 진행 기록은 **컴퓨터 시스템 로드맵**을 따른다.

## 진행 현황

| Phase | 상태 | 완료일 |
|---|---|---|
| Phase 1 | 미시작 | — |
| Phase 2 | 미시작 | — |
| Phase 3 | 미시작 | — |
| Phase 4 | 미시작 (강의 자료 확보 완료 2026-09-04) | — |

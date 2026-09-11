# Build a Modern Computer from First Principles: From Nand to Tetris (Part I)

**Course URL:** [mooc.org/learn/build-a-computer](https://www.mooc.org/learn/build-a-computer)

Hebrew University of Jerusalem (Shimon Schocken, Noam Nisan) 강좌. Nand 게이트 하나에서 출발해 논리 게이트 → ALU → 메모리 → 컴퓨터 아키텍처 → 어셈블러까지, 범용 컴퓨터를 처음부터 끝까지 직접 만드는 8모듈 강좌. 소프트웨어 계층(컴파일러·OS)을 다루는 "Nand to Tetris Part II"의 선행 강좌로, 전제 지식이 전혀 없어도 수강 가능하다.

## 모듈 구성

- **Module 1 - Introduction** — 강좌 전체 로드맵과 "추상화(abstraction) vs 구현(implementation)" 사고방식
- **Module 2 - Boolean Functions and Gate Logic** — 불리언 대수, NAND의 함수적 완전성, HDL과 하드웨어 시뮬레이터
- **Module 3 - General Course Information** — 강좌 개요, 교재, FAQ (읽기 자료)
- **Module 4 - Boolean Arithmetic and the ALU** — 2진수·2의 보수·덧셈기, Hack ALU 설계
- **Module 5 - Memory** — 순차 논리, 플립플롭, 레지스터·RAM·카운터
- **Module 6 - Machine Language** — Hack 머신 언어 명세와 저수준 프로그래밍(분기·변수·포인터·입출력)
- **Module 7 - Computer Architecture** — 폰 노이만/하버드 아키텍처, CPU와 Hack 컴퓨터 전체 통합
- **Module 8 - Assembler** — 심볼 테이블과 2-패스 어셈블리 프로세스, 어셈블러 구현

## 강의 목록

### Module 1 - Introduction
1. **Introduction**
2. **The Road Ahead**
3. **From Nand to Hack**
4. **From Hack to Tetris**

### Module 2 - Boolean Functions and Gate Logic
1. **Boolean Logic**
2. **Boolean Functions Synthesis**
3. **Logic Gates**
4. **Hardware Description Language**
5. **Hardware Simulation**
6. **Multi-Bit Buses**
7. **Project 1 Overview**
8. **Perspectives**

### Module 3 - General Course Information
1. **Course Overview**
2. **Textbook**
3. **FAQ**

### Module 4 - Boolean Arithmetic and the ALU
1. **Binary Numbers**
2. **Binary Addition**
3. **Negative Numbers**
4. **Arithmetic Logic Unit**
5. **Project 2 Overview**
6. **Perspectives**

### Module 5 - Memory
1. **Sequential Logic**
2. **Flip-Flops**
3. **Memory Units**
4. **Counters**
5. **Project 3 Overview**
6. **Perspectives**

### Module 6 - Machine Language
1. **Machine Languages - Overview**
2. **Machine Languages - Elements**
3. **The Hack Computer and Machine Language**
4. **Hack Language Specification**
5. **Input-Output**
6. **Hack Programming - Part 1**
7. **Hack Programming - Part 2**
8. **Hack Programming - Part 3**
9. **Project 4 Overview**
10. **Perspectives**

### Module 7 - Computer Architecture
1. **Von Neumann Architecture**
2. **The Fetch-Execute Cycle**
3. **Central Processing Unit**
4. **The Hack Computer**
5. **Project 5 Overview**
6. **Perspectives**

### Module 8 - Assembler
1. **Assembly Languages and Assemblers**
2. **The Hack Assembly Language**
3. **The Assembly Process - Handling Instructions**
4. **The Assembly Process - Handling Symbols**
5. **Developing a Hack Assembler**
6. **Project 6 Overview - Programming Option**
7. **Project 6 Overview - Without Programming**
8. **Perspectives**

## 핵심 개념 요약

- **추상화(abstraction) vs 구현(implementation)**: 인터페이스(무엇을 하는가)와 구현(어떻게 하는가)을 분리해, 하위 계층의 구현을 잊고 그 인터페이스만 신뢰하며 다음 계층을 쌓아 올리는 것이 이 강좌 전체를 관통하는 사고방식.
- **NAND의 함수적 완전성**: NAND 게이트 하나만으로 NOT·AND·OR을 포함한 모든 불리언 함수를 구성할 수 있다는 정리가 이 강좌의 출발점.
- **HDL과 하드웨어 시뮬레이터**: 실제 회로 없이 HDL(Hardware Description Language) 코드와 테스트 스크립트(.tst)·비교 파일(.cmp)로 칩을 설계·검증한다.
- **2의 보수(two's complement)**: 음수 표현에 2의 보수를 쓰면 뺄셈·오버플로 처리가 기존 덧셈 회로를 그대로 재사용해 "공짜로" 해결된다.
- **순차 논리와 DFF**: 조합 논리(combinational logic)와 달리 시간(클록 사이클)이 필요한 순차 논리(sequential logic)는 Data Flip-Flop이라는 단 하나의 프리미티브에서 출발해 레지스터·RAM·카운터로 이어진다.
- **Hack 머신 언어**: A명령어(주소 지정)와 C명령어(연산·저장·분기) 단 두 종류로 구성된 극도로 단순한 16비트 명령어 집합이지만, 어떤 고급 언어 프로그램도 이 언어로 번역 가능할 만큼 표현력이 충분하다.
- **폰 노이만/하버드 아키텍처**: 프로그램과 데이터를 메모리에 함께 두는 폰 노이만 모델과, 프로그램 메모리(ROM)와 데이터 메모리(RAM)를 물리적으로 분리해 페치/실행 충돌을 피하는 하버드 아키텍처(이 강좌가 채택)의 차이.
- **어셈블러(assembler)**: 상징적 Hack 코드를 이진 코드로 번역하는 2-패스(two-pass) 프로세스 — 1차 패스에서 레이블 심볼을, 2차 패스에서 변수 심볼과 실제 인코딩을 처리한다.
- 이 강좌(Part I)는 하드웨어까지만 다루며, 컴파일러·가상 머신·운영체제 등 소프트웨어 계층은 후속 강좌 "Nand to Tetris Part II"에서 다룬다.

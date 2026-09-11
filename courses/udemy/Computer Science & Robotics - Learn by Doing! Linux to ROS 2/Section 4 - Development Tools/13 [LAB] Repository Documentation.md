# [LAB] Repository Documentation

## 개요
1. GitHub에서 새 저장소를 만들 때 자동으로 제안되는 빈 문서 파일을 사용하여 문서를 추가하는 방법.
2. Markdown 형식의 문서 작성 방법과 기본 문법.
3. 문서에 포함할 내용 및 구조.
4. 이미지와 코드 블록의 삽입 방법.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/52505767#overview)

## 내용
### 1. 새 저장소 생성
- GitHub에서 새 저장소를 만들고, README 파일을 추가하는 단계.
- README 파일은 Markdown 형식으로 작성됩니다.

### 2. Markdown 기본 문법
- 제목, 기울임, 굵게, 목록, 링크, 이미지 등 형식화된 텍스트를 쉽게 작성할 수 있습니다.
- Markdown은 복잡한 도구나 에디터 없이도 사용 가능합니다.

### 3. 문서 내용 작성
- 프로젝트의 목적과 중요성에 대한 간략한 설명.
- 의존성, 저장소 클론 방법, 컴파일 및 실행 방법 등 필요한 정보 포함.

## 예시: 의존성 정의
```markdown
**Requirements:**
- C++ compiler supporting C++ 11 or later
- Posix compliant system (Linux or Mac OS)
```

### 4. 코드 블록 삽입
- 코드 섹션을 삽입하는 방법.
- 인라인 코드와 블록 코드의 구분.

#### 예시: Bash 명령어 코드 블록
```markdown
```bash
sudo apt update && sudo apt install g++
```
```

### 5. 이미지 삽입
- 웹에서 이미지를 직접 포함하거나 저장소에 로컬 이미지를 추가하는 방법.
- 이미지 링크 또는 상대 경로를 사용하여 이미지를 삽입합니다.

#### 예시: 로컬 이미지 삽입
````markdown
!**Welcome Image**
````

## 예시
### 1. 새 저장소 생성 및 README 파일 추가
```bash
git clone https://github.com/username/repository.git
cd repository
touch README.md
gedit README.md
```

### 2. Markdown 문서 작성
````markdown
# Project Title

This is a brief description of the project and its importance.

## Dependencies

- C++ compiler supporting C++ 11 or later
- Posix compliant system (Linux or Mac OS)

## Installation

To install dependencies, run:

```bash
sudo apt update && sudo apt install g++
```
````

## 요약
- GitHub에서 새 저장소를 만들 때 자동으로 제안되는 빈 문서 파일을 사용하여 문서를 추가하는 방법.
- Markdown 형식의 문서 작성 방법과 기본 문법.
- 문서에 포함할 내용 및 구조.
- 이미지와 코드 블록의 삽입 방법.

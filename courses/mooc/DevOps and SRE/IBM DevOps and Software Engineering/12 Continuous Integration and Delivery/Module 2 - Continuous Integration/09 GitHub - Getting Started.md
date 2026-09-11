# GitHub - Getting Started

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/continuous-integration-and-continuous-delivery-ci-cd/lecture/9qDjZ/github-getting-started)

## 개요
- GitHub 웹 인터페이스만으로 저장소를 생성하고, README와 새 파일을 편집·커밋하며, 로컬 파일을 업로드하는 기본적인 사용법을 실습.

## 내용
### 새 저장소 만들기
1. **+** 버튼 클릭 → **New Repository** 선택.
2. 저장소 이름 입력, 설명(선택), 공개(Public)/비공개(Private) 여부 선택, **"Initialize this repository with a readme file"** 옵션 선택.
3. **Create Repository** 클릭 → 생성된 저장소로 리디렉션됨.
4. 저장소의 루트 폴더에는 기본적으로 `README.md` 파일 하나만 있음.

### README 편집하기(브라우저 안에서)
- 연필 아이콘을 클릭해 온라인 에디터를 열고 README 텍스트를 수정.
- 변경 사항을 저장하려면 **커밋(commit)**해야 함 — 아래로 스크롤해 **Commit changes** 섹션에서 커밋 메시지(설명은 선택)를 입력하고 **Commit changes** 클릭.
- 저장소 이름 링크를 클릭해 홈 화면으로 돌아가면 README가 업데이트된 것을 확인 가능.

### 웹 에디터로 새 파일 만들기
- **Add File** → **Create New File** 클릭.
- 예: `firstpython.py`라는 Python 파일을 만들 때 파일명을 먼저 입력한 뒤, 코드를 설명하는 주석을 추가하고 코드를 작성.
- 완료되면 변경 사항을 저장소에 커밋 — 파일이 저장소에 추가되고 저장소 목록에 언제 추가·변경되었는지 표시됨.
- 파일을 수정해야 할 때는 파일명을 클릭한 뒤 연필 아이콘을 클릭해 편집하고 다시 커밋.

### 로컬 파일 업로드하기
- 저장소 홈 화면에서 **Add File** → **Upload files** 옵션 선택.
- **Choose Your Files**를 클릭해 로컬 시스템에서 업로드할 파일 선택 — 업로드 대상에 따라 시간이 다소 걸릴 수 있음.
- 업로드가 끝나면 **Commit Changes** 클릭 — 저장소에 업로드된 파일이 반영됨.

## 요약
- GitHub 웹 인터페이스만으로도 저장소 생성(README 초기화 포함), README와 새 파일의 온라인 편집·커밋, 로컬 파일 업로드까지 기본적인 저장소 관리를 모두 수행할 수 있으며, 모든 변경 사항은 커밋 메시지와 함께 반드시 커밋해야 저장소에 반영된다.

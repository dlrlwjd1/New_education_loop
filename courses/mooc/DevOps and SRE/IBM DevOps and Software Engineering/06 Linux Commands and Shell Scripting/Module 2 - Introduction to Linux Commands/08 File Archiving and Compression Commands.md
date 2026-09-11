# File Archiving and Compression Commands

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/hands-on-introduction-to-linux-commands-and-shell-scripting/lecture/KDMpO/file-archiving-and-compression-commands)

## 개요
- 파일 보관과 파일 압축 구별 보관된 파일을 만들고 압축을 풀고 아카이브에서 파일을 압축 , 압축 해제 및 추출하는 명령을 적용할 수 있습니다.

## 내용
- 파일 보관과 파일 압축 구별 보관된 파일을 만들고 압축을 풀고 아카이브에서 파일을 압축 , 압축 해제 및 추출하는 명령을 적용할 수 있습니다.
- 메모 디렉토리 트리의 구조는 다음과 같습니다.이 폴더에는 math와 physics라는 두 개의 하위 폴더가 있으며, 각 폴더에는 week1과 week2라는 동일한 이름으로 호출되는 파일이 들어 있습니다.
- 상위 노트 디렉토리, 수학 및 물리 하위 디렉토리, 수학 및 물리 폴더 내의 week1 및 week2 파일부터 시작하여 트리의 그래픽 표현과의 대응 관계를 확인할 수 있습니다.
- 하위 디렉토리와 그 안에 포함된 모든 파일을 포함하여 전체 메모 디렉토리를 보관하려면 tar minus cf 명령을 입력하고, 그 뒤에 Notes dot tar와 같은 보관된 파일의 이름을 입력하고, 그 뒤에 보관하려는 파일 또는 디렉토리 (Notes) 를 입력합니다.
- 여기에는 tar ball에 있는 모든 파일과 디렉토리가 나열되며 예상대로 원래 노트 폴더와 구조가 동일하며, 상위 디렉터리는 노트, 하위 디렉터리는 수학 및 물리학, 터미널 노드에는 week1 및 week2 파일이 있습니다.
- 이제 ls minus R을 입력하면 보관된 노트 폴더가 notes라는 상위 폴더, math and physis라는 하위 폴더, 그리고 시작했던 4주1과 2 파일로 아카이브가 해제된 것을 볼 수 있습니다.
- 노트 닷 타르 닷 gz 파일의 압축을 풀고 압축을 풀려면 tar - xzf를 입력하고 그 뒤에 압축된 아카이브 파일 이름인 notes.tar dot gz와 선택적 대상 폴더인 notes를 입력하면 됩니다.

## 예시
- 출력 이름에 접미사 dot gz를 추가하면 예를 들어 Windows 기반 프로그램에서 파일 유형을 제대로 인식할 수 있습니다.

## 요약
- 이제 ls minus R을 입력하면 보관된 노트 폴더가 notes라는 상위 폴더, math and physis라는 하위 폴더, 그리고 시작했던 4주1과 2 파일로 아카이브가 해제된 것을 볼 수 있습니다. 노트 닷 타르 닷 gz 파일의 압축을 풀고 압축을 풀려면 tar - xzf를 입력하고 그 뒤에 압축된 아카이브 파일 이름인 notes.tar dot gz와 선택적 대상 폴더인 notes를 입력하면 됩니다.

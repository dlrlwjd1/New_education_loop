# Overview of Git/GitHub

## 개요
- 강좌: Tools for Data Science
- 모듈: RStudio & GitHub
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/open-source-tools-for-data-science/lecture/S5XvL/overview-of-git-github)
- 이 비디오에서는 개발자와 데이터 과학자들 사이에서 소스 코드 파일 및 프로젝트의 버전 제어를 수행하고 다른 사람들과 협업하는 데 널리 사용되는 환경인 Git과 GitHub에 대해 간략하게 설명합니다.
- 버전 제어가 무엇인지에 대한 기본적인 이해 없이는 Git과 GitHub에 대해 이야기할 수 없습니다.

## 내용
### 핵심 내용
- 이 비디오에서는 개발자와 데이터 과학자들 사이에서 소스 코드 파일 및 프로젝트의 버전 제어를 수행하고 다른 사람들과 협업하는 데 널리 사용되는 환경인 Git과 GitHub에 대해 간략하게 설명합니다.
- 버전 제어가 무엇인지에 대한 기본적인 이해 없이는 Git과 GitHub에 대해 이야기할 수 없습니다.
- Git status를 사용하면 작업 디렉터리의 상태와 변경 사항의 스테이징된 스냅샷을 볼 수 있습니다.
- Git log를 사용하면 프로젝트의 이전 변경 사항을 찾아볼 수 있습니다.
- Git checkout을 사용하면 기존 브랜치를 확인하고 변경할 수 있습니다.
- Git merge를 사용하면 모든 것을 다시 통합할 수 있습니다.

### 한국어 Transcript

이 비디오에서는 개발자와 데이터 과학자들 사이에서 소스 코드 파일 및 프로젝트의 버전 제어를 수행하고 다른 사람들과 협업하는 데 널리 사용되는 환경인 Git과 GitHub에 대해 간략하게 설명합니다. 버전 제어가 무엇인지에 대한 기본적인 이해 없이는 Git과 GitHub에 대해 이야기할 수 없습니다. 버전 관리 시스템을 사용하면 문서의 변경 사항을 추적할 수 있습니다. 이렇게 하면 실수를 했을 때 이전 버전의 문서를 쉽게 복구할 수 있고 다른 사람들과의 공동 작업도 훨씬 쉬워집니다. 다음은 버전 제어의 작동 방식을 보여주는 예제입니다.

쇼핑 리스트가 있는데 룸메이트들이 필요한 물건을 확인하고 물건을 더 추가해 달라고 한다고 가정해 봅시다. 버전 관리가 없으면 쇼핑을 시작하기 전에 정리해야 할 큰 문제가 생깁니다. 버전 관리를 사용하면 모든 사람이 아이디어를 제공한 후에 필요한 내용을 정확히 알 수 있습니다. Git은 새로운 일반 공중 라이선스에 따라 배포되는 무료 오픈 소스 소프트웨어입니다. Git은 분산 버전 제어 시스템입니다.

즉, 전 세계 모든 사용자가 자신의 컴퓨터에서 프로젝트 사본을 가질 수 있습니다. 변경한 후에는 버전을 원격 서버에 동기화하여 사용자와 공유할 수 있습니다. Git이 유일한 버전 제어 시스템은 아니지만, Git이 가장 일반적인 버전 제어 시스템 중 하나가 된 주된 이유 중 하나는 분산형 측면입니다. 버전 관리 시스템은 코드와 관련된 작업에 널리 사용되지만 이미지, 문서 및 다양한 파일 유형의 버전을 제어할 수도 있습니다. 명령줄 인터페이스를 사용하여 웹 인터페이스 없이 Git을 사용할 수 있지만 GitHub는 Git 리포지토리에서 가장 많이 사용되는 웹 호스팅 서비스 중 하나입니다.

기타로는 GitLab, 비트버킷, 빈스토크가 있습니다. 시작하기 전에 알아야 할 몇 가지 기본 용어가 있습니다. SSH 프로토콜은 한 컴퓨터에서 다른 컴퓨터로 안전하게 원격 로그인하는 방법입니다. 저장소에는 버전 관리를 위해 설정된 프로젝트 폴더가 들어 있습니다. 풀 리퀘스트는 최종 변경 사항이 적용되기 전에 다른 사람이 검토 및 승인하도록 요청하는 방법입니다.

작업 디렉터리에는 Git 리포지토리와 연결된 컴퓨터의 파일 및 하위 디렉터리가 포함됩니다. 항상 사용하는 몇 가지 기본 Git 명령이 있습니다. 새 리포지토리로 시작할 때는 로컬에서 한 번만 생성한 다음 GitHub로 푸시하거나 git clone 명령을 사용하여 기존 리포지토리를 복제하면 됩니다. Git add는 작업 디렉터리에서 스테이징 영역으로 변경 사항을 이동합니다. Git status를 사용하면 작업 디렉터리의 상태와 변경 사항의 스테이징된 스냅샷을 볼 수 있습니다.

Git commit은 변경 사항의 스테이징된 스냅샷을 가져와 프로젝트에 커밋합니다. Git reset은 작업 디렉터리에 있는 파일에 대한 변경 사항을 취소합니다. Git log를 사용하면 프로젝트의 이전 변경 사항을 찾아볼 수 있습니다. Git branch를 사용하면 리포지토리 내에 격리된 환경을 만들어 변경할 수 있습니다. Git checkout을 사용하면 기존 브랜치를 확인하고 변경할 수 있습니다.

Git merge를 사용하면 모든 것을 다시 통합할 수 있습니다. Git을 효과적으로 사용하는 방법을 배우고 전 세계 데이터 과학자와 협업을 시작하려면 필수 명령을 배워야 합니다. 다행스럽게도 GitHub에는 시작하는 데 도움이 되는 놀라운 리소스가 있습니다. io로 이동하여 치트 시트를 다운로드하고 자습서를 실행하십시오. 다음 모듈에서는 로컬 환경을 설정하고 프로젝트를 시작하는 방법에 대한 집중 강좌를 제공합니다.

## 예시
- 이 비디오에서는 개발자와 데이터 과학자들 사이에서 소스 코드 파일 및 프로젝트의 버전 제어를 수행하고 다른 사람들과 협업하는 데 널리 사용되는 환경인 Git과 GitHub에 대해 간략하게 설명합니다.
- 버전 관리 시스템은 코드와 관련된 작업에 널리 사용되지만 이미지, 문서 및 다양한 파일 유형의 버전을 제어할 수도 있습니다.
- 명령줄 인터페이스를 사용하여 웹 인터페이스 없이 Git을 사용할 수 있지만 GitHub는 Git 리포지토리에서 가장 많이 사용되는 웹 호스팅 서비스 중 하나입니다.
- 항상 사용하는 몇 가지 기본 Git 명령이 있습니다.

## 요약
- Git log를 사용하면 프로젝트의 이전 변경 사항을 찾아볼 수 있습니다.
- Git checkout을 사용하면 기존 브랜치를 확인하고 변경할 수 있습니다.
- Git merge를 사용하면 모든 것을 다시 통합할 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

In this video, you will get an overview of Git and GitHub, which are popular environments among developers and data scientists for performing version control of source code files and projects and collaborating with others. You can't talk about Git and GitHub without a basic understanding of what version control is. A version control system allows you to keep track of changes to your documents. This makes it easy for you to recover older versions of your document if you make a mistake, and it makes collaboration with others much easier. Here is an example to illustrate how version control works.

Let's say you've got a shopping list, and you want your roommates to confirm the things you need and add additional items. Without version control, you've got a big mess to clean up before you can go shopping. With version control, you know exactly what you need after everyone has contributed their ideas. Git is free and open-source software distributed under the new General Public License. Git is a distributed version control system, which means that users anywhere in the world can have a copy of your project on their own computer.

When they've made changes, they can sync their version to a remote server to share it with you. Git isn't the only version control system out there, but the distributed aspect is one of the main reasons it's become one of the most common version control systems available. Version control systems are widely used for things involving code, but you can also version control images, documents, and any number of file types. You can use Git without a web interface by using your command-line interface, but GitHub is one of the most popular web-hosted services for Git repositories. Others include GitLab, Bitbucket, and Beanstalk.

There are a few basic terms that you will need to know before you can get started. The SSH protocol is a method for secure remote login from one computer to another. A repository contains your project folders that are set up for version control. A fork is a copy of a repository. A pull request is the way you request that someone reviews and approves your changes before they become final.

A working directory contains the files and subdirectories on your computer that are associated with a Git repository. There are a few basic Git commands that you will always use. When starting out with a new repository, you only need create it once, either locally and then push to GitHub or by cloning an existing repository by using the command git clone. Git add moves changes from the working directory to the staging area. Git status allows you to see the state of your working directory and the staged snapshot of your changes.

Git commit takes your staged snapshot of changes and commits them to the project. Git reset undoes changes that you've made to the files in your working directory. Git log enables you to browse previous changes to a project. Git branch lets you create an isolated environment within your repository to make changes. Git checkout lets you see and change existing branches.

Git merge lets you put everything back together again. To learn how to use Git effectively and begin collaborating with data scientists around the world, you will need to learn the essential commands. Luckily for us, GitHub has amazing resources available to help you get started. io to download the cheat sheets and run through the tutorials. In the following modules, we'll give you a crash course on setting up your local environment and getting started on a project.

</details>

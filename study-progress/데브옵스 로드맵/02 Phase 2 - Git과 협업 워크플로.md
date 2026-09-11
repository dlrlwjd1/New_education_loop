# Phase 2 — Git과 협업 워크플로

- 목표: Git을 "커밋·푸시" 수준에서 벗어나, 팀의 브랜치 전략을 설계하고 CI가 물릴 수 있는 형태로 만든다.
- 분량: 약 6~7시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 머지 컨플릭트를 두려움 없이 해결할 수 있다.
- 머지 전략(fast-forward·recursive·squash)의 차이를 알고 팀 규칙을 정할 수 있다.
- rebase와 merge를 언제 각각 쓰는지 판단할 수 있다.
- 트렁크 기반 개발(trunk-based development)과 Git Flow의 트레이드오프를 설명할 수 있다.
- Git hooks로 커밋·푸시 시점에 검사를 걸 수 있다.
- 문제를 일으킨 커밋을 `git bisect`로 찾을 수 있다.

> **CI를 붙이기 전에 브랜치 전략이 먼저 정해져야 한다.** "어느 브랜치에 푸시되면 무엇이 돌아야 하는가"가 CI 설정의 첫 줄이기 때문이다. Phase 3에 들어가기 전에 이 Phase의 산출물 1번을 반드시 만든다.

## 2-A. 버전 관리와 Git 기본

메인: Master DevOps, Course 1, Module 2 (앞부분)

- [ ] [01 Scenario - Importance of Version Control.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/01%20Scenario%20-%20Importance%20of%20Version%20Control.md)
- [ ] [02 Introduction to Version Control.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/02%20Introduction%20to%20Version%20Control.md)
- [ ] [03 Types of Version Control System.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/03%20Types%20of%20Version%20Control%20System.md)
- [ ] [04 Real-world use cases of Version Control System.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/04%20Real-world%20use%20cases%20of%20Version%20Control%20System.md)
- [ ] [05 Introduction to Git.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/05%20Introduction%20to%20Git.md)
- [ ] [06 The Git File Workflow.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/06%20The%20Git%20File%20Workflow.md) — **Git 파일 워크플로** — working directory / staging / repository 세 영역. 여기가 모든 Git 혼란의 근원이다
- [ ] [07 Installing Git on Windows.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/07%20Installing%20Git%20on%20Windows.md)
- [ ] [08 Git Installation and Environment Setup.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/08%20Git%20Installation%20and%20Environment%20Setup.md)
- [ ] [09 Basic Git Commands.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/09%20Basic%20Git%20Commands.md) — 기본 명령
- [ ] [10 Advanced Git Commands.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/10%20Advanced%20Git%20Commands.md) — 고급 명령
- [ ] [11 Working with Remote Repository.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/11%20Working%20with%20Remote%20Repository.md) — 원격 저장소

함께 보기: IBM Getting Started with Git and GitHub

- [ ] [01 Course Introduction.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/05%20Getting%20Started%20with%20Git%20and%20GitHub/Module%201%20-%20Git%20and%20GitHub%20Fundamentals/01%20Course%20Introduction.md)
- [ ] [02 Overview of Git and GitHub.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/05%20Getting%20Started%20with%20Git%20and%20GitHub/Module%201%20-%20Git%20and%20GitHub%20Fundamentals/02%20Overview%20of%20Git%20and%20GitHub.md)
- [ ] [03 Introduction to GitHub.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/05%20Getting%20Started%20with%20Git%20and%20GitHub/Module%201%20-%20Git%20and%20GitHub%20Fundamentals/03%20Introduction%20to%20GitHub.md)
- [ ] [04 GitHub Repositories.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/05%20Getting%20Started%20with%20Git%20and%20GitHub/Module%201%20-%20Git%20and%20GitHub%20Fundamentals/04%20GitHub%20Repositories.md)
- [ ] [05 GitHub - Getting Started.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/05%20Getting%20Started%20with%20Git%20and%20GitHub/Module%201%20-%20Git%20and%20GitHub%20Fundamentals/05%20GitHub%20-%20Getting%20Started.md)
- [ ] [06 GitHub Branches.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/05%20Getting%20Started%20with%20Git%20and%20GitHub/Module%201%20-%20Git%20and%20GitHub%20Fundamentals/06%20GitHub%20Branches.md)

- [ ] [01 Overview of Git Workflows.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/05%20Getting%20Started%20with%20Git%20and%20GitHub/Module%202%20-%20Git%20Commands%20and%20Managing%20GitHub%20Projects/01%20Overview%20of%20Git%20Workflows.md)
- [ ] [02 Overview of Git Commands.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/05%20Getting%20Started%20with%20Git%20and%20GitHub/Module%202%20-%20Git%20Commands%20and%20Managing%20GitHub%20Projects/02%20Overview%20of%20Git%20Commands.md)
- [ ] [03 Demo - Working with Branches using Git Commands.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/05%20Getting%20Started%20with%20Git%20and%20GitHub/Module%202%20-%20Git%20Commands%20and%20Managing%20GitHub%20Projects/03%20Demo%20-%20Working%20with%20Branches%20using%20Git%20Commands.md)
- [ ] [04 Cloning and Forking GitHub Projects.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/05%20Getting%20Started%20with%20Git%20and%20GitHub/Module%202%20-%20Git%20Commands%20and%20Managing%20GitHub%20Projects/04%20Cloning%20and%20Forking%20GitHub%20Projects.md)
- [ ] [05 Cloning versus Forking.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/05%20Getting%20Started%20with%20Git%20and%20GitHub/Module%202%20-%20Git%20Commands%20and%20Managing%20GitHub%20Projects/05%20Cloning%20versus%20Forking.md)
- [ ] [06 Managing GitHub Projects.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/05%20Getting%20Started%20with%20Git%20and%20GitHub/Module%202%20-%20Git%20Commands%20and%20Managing%20GitHub%20Projects/06%20Managing%20GitHub%20Projects.md)

- [ ] [01 [Optional] GitHub Copilot.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/05%20Getting%20Started%20with%20Git%20and%20GitHub/Module%203%20-%20Final%20Project%20and%20Assessment/01%20%5BOptional%5D%20GitHub%20Copilot.md)

## 2-B. 브랜치와 머지 — 컨플릭트를 다루는 법

메인: Master DevOps, Course 1, Module 2 (이어서)

- [ ] [12 Branching and Merging in Git.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/12%20Branching%20and%20Merging%20in%20Git.md)
- [ ] [13 Creating, Switching, and Deleting Branches - Demonstration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/13%20Creating,%20Switching,%20and%20Deleting%20Branches%20-%20Demonstration.md)
- [ ] [14 Merge Conflicts.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/14%20Merge%20Conflicts.md) — **머지 컨플릭트** — 실무에서 가장 자주 막히는 지점
- [ ] [15 Resolving Merge Conflicts - Creating Branches.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/15%20Resolving%20Merge%20Conflicts%20-%20Creating%20Branches.md) — 직접 컨플릭트를 만들어 보는 데모. **반드시 따라 한다**
- [ ] [16 Resolving Merge Conflicts - Conflict Resolution.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/16%20Resolving%20Merge%20Conflicts%20-%20Conflict%20Resolution.md)
- [ ] [17 Merge Strategies - Fast Forward, Recursive, Octopus.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/17%20Merge%20Strategies%20-%20Fast%20Forward,%20Recursive,%20Octopus.md) — **머지 전략** — 팀 규칙으로 정해야 하는 항목. 커밋 히스토리 모양이 여기서 결정된다
- [ ] [18 Merge Strategies Demonstration - Fast Forward.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/18%20Merge%20Strategies%20Demonstration%20-%20Fast%20Forward.md)
- [ ] [19 Merge Strategies Demonstration - Recursive and Octopus.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/19%20Merge%20Strategies%20Demonstration%20-%20Recursive%20and%20Octopus.md)

## 2-C. 히스토리 다루기 — rebase, cherry-pick, squash

메인: Master DevOps, Course 1, Module 2 (이어서)

- [ ] [20 Cherry-Picking in Git.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/20%20Cherry-Picking%20in%20Git.md) — 특정 커밋만 다른 브랜치로 가져오기 — 핫픽스 백포트에 쓴다
- [ ] [21 Cherry-Picking in Git - Demonstration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/21%20Cherry-Picking%20in%20Git%20-%20Demonstration.md)
- [ ] [22 Interactive Rebase.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/22%20Interactive%20Rebase.md) — **대화형 rebase** — 커밋을 정리해 리뷰하기 쉽게 만드는 도구
- [ ] [23 Interactive Rebase - Demonstration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/23%20Interactive%20Rebase%20-%20Demonstration.md)
- [ ] [24 Stashing, Rebasing, Reverting, and Resetting.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/24%20Stashing,%20Rebasing,%20Reverting,%20and%20Resetting.md) — stash·rebase·revert·reset 구분. **`reset`과 `revert`를 혼동하면 사고가 난다**
- [ ] [38 Squashing Commits for Clean History.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/38%20Squashing%20Commits%20for%20Clean%20History.md) — **squash 머지** — PR 하나를 커밋 하나로. 팀 규칙과 직결된다
- [ ] [39 Squashing Commits for Cleaner Repository - Demonstration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/39%20Squashing%20Commits%20for%20Cleaner%20Repository%20-%20Demonstration.md)
- [ ] [40 Git LFS.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/40%20Git%20LFS.md) — Git LFS — 큰 바이너리 파일
- [ ] [41 Managing Multiple Remotes - Demonstration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/41%20Managing%20Multiple%20Remotes%20-%20Demonstration.md)

## 2-D. 워크플로와 브랜치 전략

메인: Master DevOps, Course 1, Module 2 (이어서)

- [ ] [25 Git Workflows.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/25%20Git%20Workflows.md) — **Git 워크플로 비교** — 이 Phase 산출물의 근거가 되는 강의
- [ ] [26 Git Workflows - Adding Files to Staging Area.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/26%20Git%20Workflows%20-%20Adding%20Files%20to%20Staging%20Area.md)
- [ ] [27 Git Workflows - Modifying the File.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/27%20Git%20Workflows%20-%20Modifying%20the%20File.md)
- [ ] [28 Git Workflows - Merging Branches.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/28%20Git%20Workflows%20-%20Merging%20Branches.md)
- [ ] [29 Git Workflows - GitHub.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/29%20Git%20Workflows%20-%20GitHub.md)
- [ ] [30 Forking Workflow.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/30%20Forking%20Workflow.md) — 포크 워크플로 — 오픈소스와 외부 기여자 모델
- [ ] [31 Forking Workflow - Demonstration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/31%20Forking%20Workflow%20-%20Demonstration.md)
- [ ] [42 Git Branching Strategies - Trunk-Based Development.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/42%20Git%20Branching%20Strategies%20-%20Trunk-Based%20Development.md) — **트렁크 기반 개발** — CI/CD와 가장 잘 맞는 전략. 장수 브랜치가 왜 CI를 무력화하는지
- [ ] [43 Summary - Version Control with Git.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/43%20Summary%20-%20Version%20Control%20with%20Git.md)

함께 보기: IBM CI 강좌의 브랜치 워크플로 (PR 중심)

- [ ] [04 Social Coding.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%202%20-%20Continuous%20Integration/04%20Social%20Coding.md)
- [ ] [05 Git Feature Branch Workflow - Working in Branches.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%202%20-%20Continuous%20Integration/05%20Git%20Feature%20Branch%20Workflow%20-%20Working%20in%20Branches.md) — 피처 브랜치 작업
- [ ] [06 Git Feature Branch Workflow - Making a Pull Request.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%202%20-%20Continuous%20Integration/06%20Git%20Feature%20Branch%20Workflow%20-%20Making%20a%20Pull%20Request.md) — **Pull Request** — CI가 실제로 걸리는 지점

- [ ] [01 Social Coding Principles.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%202%20-%20Introduction%20to%20DevOps%20-%20Thinking%20DevOps/01%20Social%20Coding%20Principles.md)
- [ ] [02 Git Repository Guidelines.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%202%20-%20Introduction%20to%20DevOps%20-%20Thinking%20DevOps/02%20Git%20Repository%20Guidelines.md) — 저장소 규칙 — README·라이선스·`.gitignore`·브랜치 보호

## 2-E. 자동화와 디버깅 — hooks, bisect, submodule

메인: Master DevOps, Course 1, Module 2 (이어서)

- [ ] [32 Git Hooks - Automating Tasks in Git.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/32%20Git%20Hooks%20-%20Automating%20Tasks%20in%20Git.md) — **Git hooks** — 커밋 전에 린터·테스트를 돌린다. CI보다 빠른 첫 방어선
- [ ] [33 Git Hooks - Demonstration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/33%20Git%20Hooks%20-%20Demonstration.md)
- [ ] [34 Submodules in Git.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/34%20Submodules%20in%20Git.md) — 서브모듈 — 다른 저장소를 끼워 넣기. Phase 7의 매니페스트 저장소 분리에서 선택지가 된다
- [ ] [35 Submodules - Demonstration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/35%20Submodules%20-%20Demonstration.md)
- [ ] [36 Git Bisect.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/36%20Git%20Bisect.md) — **`git bisect`** — 「어제까지 됐는데 오늘 안 된다」를 이진 탐색으로 찾는다
- [ ] [37 Git Bisect - Demonstration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%202%20-%20Version%20Control%20with%20Git/37%20Git%20Bisect%20-%20Demonstration.md)

## 2-F. 정리

- [ ] [01 Course Summary.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%203%20-%20Course%20Wrap-Up%20and%20Assessment/01%20Course%20Summary.md)
- [ ] [02 Practice Project - Building a Collaborative and Efficient DevOps Workflow Using Git and Linux.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%203%20-%20Course%20Wrap-Up%20and%20Assessment/02%20Practice%20Project%20-%20Building%20a%20Collaborative%20and%20Efficient%20DevOps%20Workflow%20Using%20Git%20and%20Linux.md) — **실습 프로젝트.** Phase 1~2를 종합한다

## 산출물 과제

1. **팀 브랜치 전략 문서 1장** — 다음 항목을 각각 한 줄로 결정한다. **Phase 3에 들어가기 전 필수.**
   - 기본 브랜치 이름과 보호 규칙
   - 기능 개발 브랜치 명명 규칙
   - PR 머지 방식 (merge / squash / rebase) 과 그 이유
   - 어느 브랜치 푸시에 CI가 돌고, 어느 브랜치 머지에 배포가 돌 것인가
   - 핫픽스 경로
2. **컨플릭트 실습** — 같은 파일 같은 줄을 두 브랜치에서 고쳐 컨플릭트를 만들고, 해결해 머지한다. 3회 반복해 손에 붙인다.
3. **Git hook 하나 설치** — 커밋 전에 린터 또는 포맷터가 돌게 만든다. Phase 3의 CI와 무엇이 중복되고 무엇이 다른지 한 줄로 메모한다.
4. **`git bisect` 1회 실행** — 일부러 버그를 심은 커밋을 10개 이상 커밋 뒤에 두고, bisect로 찾아낸다.

## 다음 단계

→ [03 Phase 3 - 빌드 자동화와 CI](03%20Phase%203%20-%20%EB%B9%8C%EB%93%9C%20%EC%9E%90%EB%8F%99%ED%99%94%EC%99%80%20CI.md)

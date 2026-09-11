# GitHub - Working with Branches

## 개요
- 강좌: Tools for Data Science
- 모듈: RStudio & GitHub
- 재생 시간: 6분
- [MOOC 원본 강의](https://www.mooc.org/learn/open-source-tools-for-data-science/lecture/dyb5g/github-working-with-branches)
- 이 동영상을 시청하고 나면 GitHub 브랜치를 정의하고, 마스터 브랜치와 하위 브랜치를 생성하고, 브랜치를 병합하는 방법을 설명하고, 풀 리퀘스트를 생성할 수 있습니다.
- 브랜치는 변경할 수 있는 리포지토리의 스냅샷입니다.

## 내용
### 핵심 내용
- 이 동영상을 시청하고 나면 GitHub 브랜치를 정의하고, 마스터 브랜치와 하위 브랜치를 생성하고, 브랜치를 병합하는 방법을 설명하고, 풀 리퀘스트를 생성할 수 있습니다.
- 브랜치는 변경할 수 있는 리포지토리의 스냅샷입니다.
- 마스터 브랜치의 코드와 워크플로를 변경하려면 마스터 브랜치의 복사본을 만들 수 있습니다.
- 브랜치 선택 메뉴에서 '마스터'를 클릭하여 마스터 브랜치로 이동하여 확인할 수 있으며, 새 파일이 마스터 브랜치에 추가되지 않은 것을 확인할 수 있습니다.
- 풀 리퀘스트 (PR) 를 생성하여 하위 브랜치의 변경 내용을 병합하여 마스터 브랜치에 반영할 수 있습니다.
- 이 비디오에서는 다음과 같은 내용을 배웠습니다.

### 한국어 Transcript

“GitHub: 브랜치 사용하기”에 오신 것을 환영합니다. 이 동영상을 시청하고 나면 GitHub 브랜치를 정의하고, 마스터 브랜치와 하위 브랜치를 생성하고, 브랜치를 병합하는 방법을 설명하고, 풀 리퀘스트를 생성할 수 있습니다. 브랜치는 변경할 수 있는 리포지토리의 스냅샷입니다. 마스터 브랜치의 복사본으로, 마스터 브랜치에 병합하기 전에 워크플로 변경을 개발하고 테스트하는 데 사용할 수 있습니다. Git과 GitHub에는 마스터라는 메인 브랜치가 있습니다.

배포 가능한 코드가 포함되어 있으며 프로젝트의 공식 작업 버전입니다. 안정적이어야 하므로 마스터에서 테스트되지 않은 코드는 푸시하지 않는 것이 좋습니다. 마스터 브랜치의 코드와 워크플로를 변경하려면 마스터 브랜치의 복사본을 만들 수 있습니다. 이 브랜치는 워크플로의 사본이 될 하위 브랜치일 수 있습니다. 하위 브랜치에서는 변경 및 실험이 수행됩니다.

빌드하고, 편집하고, 변경 사항을 테스트하고, 만족하면 마스터 브랜치에 다시 병합하여 모델을 배포할 준비를 할 수 있습니다. 이 모든 작업이 기본 브랜치 외부에서 수행되며 병합하기 전까지는 분기 이전의 워크플로가 변경되지 않는다는 것을 알 수 있습니다. 한 구성원이 변경해도 다른 구성원의 워크플로에 지장을 주거나 영향을 주지 않도록 워크플로를 적절히 테스트하고 승인한 후 여러 브랜치를 만들어 마스터와 적절하게 병합할 수 있습니다. GitHub에서 브랜치를 만들려면 이 리포지토리를 살펴보겠습니다. 현재 리포지토리에는 브랜치가 하나 있습니다.

몇 가지 사항을 변경하고 싶지만 문제가 발생할 경우에 대비해 마스터를 변경하고 싶지 않다면 브랜치를 만들면 됩니다. 이렇게 하려면 드롭다운 화살표를 클릭하고 새 브랜치를 생성해야 합니다. 새 브랜치의 이름을 '하위 브랜치'로 지정한 다음 엔터를 클릭합니다. 이제 리포지토리에는 마스터 브랜치와 하위 브랜치라는 두 브랜치가 있습니다. 브랜치 선택기 드롭다운 목록에서 하위 브랜치를 선택하여 이를 확인할 수 있습니다.

마스터 브랜치의 모든 콘텐츠가 자식 브랜치에 복사됩니다. 하지만 마스터 브랜치에 파일을 추가하지 않고도 자식 브랜치에 파일을 추가할 수 있습니다. 파일을 추가하려면 브랜치 선택기 드롭다운 목록에서 하위 브랜치를 선택해야 합니다. 그런 다음 새 파일 만들기를 클릭합니다. 제공된 공간에 파일 이름을 'test child dot py'로 지정한 다음 몇 줄의 코드를 추가합니다.

하위 브랜치 안에 명령문을 인쇄할 수 있습니다. 화면 하단에 '새 파일 커밋'이라는 섹션이 있습니다. 커밋 메시지는 변경 내용을 추적하는 데 도움이 되므로 중요합니다. 팀의 편의를 위해 설명이 포함된 커밋 메시지를 추가하세요. 여기에 '테스트 하위 dot py 만들기'를 추가할 수 있습니다.

그런 다음 새 파일 커밋을 클릭합니다. 브랜치 선택 메뉴에서 '마스터'를 클릭하여 마스터 브랜치로 이동하여 확인할 수 있으며, 새 파일이 마스터 브랜치에 추가되지 않은 것을 확인할 수 있습니다. 새 파일을 만든 후 테스트하여 제대로 작동하는지 확인하십시오. 풀 리퀘스트 (PR) 를 생성하여 하위 브랜치의 변경 내용을 병합하여 마스터 브랜치에 반영할 수 있습니다. 풀 리퀘스트는 두 브랜치의 콘텐츠 차이를 보여줍니다.

메인 브랜치의 변경 및 수정 사항을 다른 팀원에게 알릴 수 있습니다. 다른 팀원이 변경 사항을 검토하고 마스터 브랜치에 병합되도록 승인하는 것이 가장 좋습니다. 풀 리퀘스트는 GitHub에서의 협업 수단입니다. 풀 리퀘스트를 열면 변경 사항을 제안하게 됩니다. 팀 구성원을 배정하여 기여를 검토 및 승인하고 대상 브랜치에 통합할 수 있습니다.

풀 리퀘스트를 열어 브랜치 간의 차이점을 확인하려면 비교 및 풀 리퀘스트를 클릭합니다. 화면 아래쪽으로 스크롤하면 두 브랜치 간의 비교를 볼 수 있습니다. 한 파일이 변경되었고 파일에 두 개의 추가 항목이 있는 것으로 표시됩니다. 이 두 줄은 삭제된 횟수가 전혀 없는 파일에 추가한 것입니다. 이제 풀 리퀘스트를 생성해 보겠습니다.

다음 화면에는 풀 리퀘스트의 세부 정보가 표시됩니다. 변경에 동의하면 풀 리퀘스트 병합을 클릭한 다음 확인을 클릭합니다. 풀 리퀘스트가 성공적으로 병합되었다는 확인 메시지가 표시됩니다. 더 이상 정보를 편집하거나 새 정보를 추가할 필요가 없는 경우 브랜치를 삭제할 수 있습니다. 이제 하위 브랜치가 마스터 브랜치와 완전히 통합되었습니다.

마스터 브랜치를 확인하고 테스트 하위 dot py 파일이 포함되어 있는지 확인할 수 있습니다. 이 비디오에서는 다음과 같은 내용을 배웠습니다. 브랜치는 변경할 수 있는 저장소의 스냅샷입니다. 자식 브랜치에서 변경 사항을 빌드, 편집 및 테스트한 다음 마스터 브랜치에 병합할 수 있습니다. 한 구성원이 변경한 내용이 다른 구성원의 워크플로에 지장을 주거나 영향을 주지 않도록 여러 브랜치를 만들어 마스터에 병합할 수 있습니다.

또한 풀 리퀘스트는 메인 브랜치의 변경 및 편집 내용을 다른 팀원에게 알리는 방법입니다.

## 예시
- 배포 가능한 코드가 포함되어 있으며 프로젝트의 공식 작업 버전입니다.
- 안정적이어야 하므로 마스터에서 테스트되지 않은 코드는 푸시하지 않는 것이 좋습니다.
- 마스터 브랜치의 코드와 워크플로를 변경하려면 마스터 브랜치의 복사본을 만들 수 있습니다.
- 제공된 공간에 파일 이름을 'test child dot py'로 지정한 다음 몇 줄의 코드를 추가합니다.

## 요약
- 브랜치 선택 메뉴에서 '마스터'를 클릭하여 마스터 브랜치로 이동하여 확인할 수 있으며, 새 파일이 마스터 브랜치에 추가되지 않은 것을 확인할 수 있습니다.
- 풀 리퀘스트 (PR) 를 생성하여 하위 브랜치의 변경 내용을 병합하여 마스터 브랜치에 반영할 수 있습니다.
- 이 비디오에서는 다음과 같은 내용을 배웠습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to “GitHub: Working with Branches.” After watching this video, you will be able to define a GitHub branch create master and child branches describe how to merge branches, and create a Pull Request. A branch is a snapshot of your repository to which you can make changes. It is a copy of the master branch and can be used to develop and test workflow changes before merging it into the master branch. In Git and GitHub, there is a main branch called master. It has the deployable code and is the official working version of your project.

It is meant to be stable, thus, it is advisable not to push any code that has not been tested in the master. If you want to change the code and the workflow in the master branch, you can create a copy of the master branch. This can be the child branch that will be a copy of the workflow. In the child branch, changes and experiments are done. You can build, make edits, test the changes, and when you are satisfied with them, you can merge them back to the master branch, where you can prepare the model for deployment.

You can see that all of this is done outside the main branch and until you merge, changes will not be made to the workflow before you branched. To ensure that changes done by one member, do not impede or affect the workflow of other members, multiple branches can be created and merged appropriately with the master after the workflow is properly tested and approved. To create branches in GitHub, let’s look at this repository. There is currently one branch in the repository. You want to make some changes but don’t want to alter the master in case something goes wrong, so you will create a branch.

To do that, you will click the drop-down arrow and create a new branch. Name the new branch ‘child branch’ and then click enter. The repository now has two branches, the master and child branches. You can check this by selecting the child branch in the Branch selector drop-down list. All the content in the master branch is copied to the child branch.

However, you can add files in the child branch without adding any to the master branch. To add a file, ensure the child branch is selected in the branch selector drop-down list. Then click Create new file. In the space provided, name the file ‘test child dot py’ and then add a few lines of code. You can print the statement inside the child branch.

At the bottom of the screen, you will see a section, ‘Commit new file.’ Commit messages are important as they help to keep track of the changes made. Add a descriptive commit message for the convenience of the team. Here you can add ‘Create test child dot py.’ Then click Commit new file. The file is added to the child branch. You can verify by going to the master branch by clicking ‘master’ from the Branch selector menu, and you can see that the new file is not added to the master branch.

After you have created the new file, test and ensure it is working. You can merge the changes in the child branch to reflect in the master branch by creating a Pull Request (PR). Pull requests show the differences in the content from both branches. It can notify other team members of the changes and edits to the main branch. Ideally, another team member reviews the changes and approves them to be merged with the Master branch.

Pull requests are a means of collaboration on GitHub. When you open a pull request, you propose your changes. You can assign team members to review and approve your contribution and merge in the target branch. To open a pull request to see the differences between the branches, click Compare and pull request. If you scroll down to the bottom of the screen, you will see the comparison between both branches.

It shows that one file has changed, and the file has two additions, the two lines you added to the file with zero deletions. You will now create the pull request. Add the title and an optional comment. Click Create pull request. The next screen will show the details of the pull request.

If you are okay with the changes, click Merge pull request and then click Confirm. You will get a confirmation that the pull request has been successfully merged. You can delete the branch if you no longer need to edit or add new information. Now, the child branch has completely merged with the Master branch. You can check the Master branch and verify it contains the test child dot py file.

In this video, you learned: A branch is a snapshot of your repository to which you can make changes. In the child branch, you can build, make edits, and test the changes, and then you can merge them with the Master branch. To ensure that changes done by one member do not impede or affect the workflow of other members, multiple branches can be created and merged with the master. And, a pull request is a way to notify other team members of the changes and edits to the main branch.

</details>

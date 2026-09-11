# Forking Workflow - Demonstration

## 개요
- GitHub에서 Fork·Sync fork·Pull Request 버튼을 이용해 실제로 오픈소스 저장소에 기여하는 흐름을 시연.

## 내용
### Fork(포크)
- 공개(public) 저장소는 누구나 자신의 계정으로 **Fork** 버튼을 눌러 복사할 수 있다.
- 원본에 영향을 주지 않고 자유롭게 실험할 수 있는 자신만의 사본이 생긴다.
- 원본 저장소 = **upstream repository**, 포크한 저장소 = **downstream repository**

### Sync fork(동기화)
- 원본(upstream) 저장소에 새 파일/커밋이 생기면, 내 fork는 "N commit(s) behind" 상태가 된다.
- **Sync fork** 버튼을 눌러 원본의 최신 변경을 내 fork로 가져올 수 있다.

### Contribute → Pull Request(기여)
- 내 fork(downstream)에서 새 파일을 만들고 커밋한 뒤, 이 변경을 원본 프로젝트에 반영하고 싶다면 **Contribute → Open a pull request**를 클릭한다.
- Pull Request는 내 저장소의 브랜치를 원본 저장소의 브랜치에 병합해달라는 요청이다.
- 원본 저장소의 메인테이너가 Pull Request 목록에서 변경사항을 확인하고 **Merge pull request**로 승인하면, 내 변경이 원본의 master 브랜치에 반영된다.

## 요약
- Fork(내 사본 생성) → Sync fork(원본 최신화 반영) → 변경 작업 → Contribute/Pull Request(반영 제안) → 메인테이너의 Merge라는 4단계가 GitHub에서 실제로 Forking Workflow가 동작하는 방식이다.

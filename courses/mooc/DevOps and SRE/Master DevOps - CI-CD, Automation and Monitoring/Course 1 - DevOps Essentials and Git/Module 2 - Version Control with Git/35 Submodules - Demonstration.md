# Submodules - Demonstration

## 개요
- 메인 저장소에 서브모듈(submodule)로 다른 저장소를 추가하고, 각각 커밋한 뒤 push하는 실습.

## 내용
### 메인 저장소 준비

```bash
git clone <main-repo-URL> main-repo
cd main-repo
git log --oneline
```

### 서브모듈 추가

```bash
git submodule add <sub-repo-URL>
```

- 이 명령은 `.gitmodules` 파일을 생성하고, 서브 저장소를 클론한 하위 폴더를 만든다.

```bash
git status   # .gitmodules 파일과 서브모듈 디렉터리가 추가된 것으로 표시
git add .
git commit -m "add submodule"
```

### 메인 저장소와 서브모듈에 각각 파일 추가

```bash
# 메인 저장소에 파일 추가
touch file1_main_repo
git add file1_main_repo
git commit -m "add file to main repo"

# 서브모듈 디렉터리 안으로 이동해서 파일 추가
cd <submodule-folder>
touch file_submodule
git add file_submodule
git commit -m "add file to submodule"
cd ..
```

### 원격에 푸시

```bash
git push origin master   # 메인 저장소 push (Personal Access Token 사용)
```

- GitHub에서 메인 저장소를 열면 `.gitmodules` 파일이 서브모듈 경로를 담고 있고, 서브모듈 폴더를 클릭하면 해당 서브 저장소로 연결된다.

### 서브모듈 자체 변경사항 푸시
- 서브모듈에서 만든 변경(새 커밋)은 **서브모듈 디렉터리 안에서 별도로 push**해야 한다.

```bash
cd <submodule-folder>
git push origin master
cd ..
```

- 이후 메인 저장소로 돌아와 서브모듈 참조 변경사항을 커밋 + push하면, 메인 저장소 push 한 번으로 참조가 최신 커밋을 가리키게 된다.

## 요약
- `git submodule add <URL>`로 서브모듈을 추가하면 `.gitmodules`와 하위 폴더가 생기며, 서브모듈 안에서 만든 커밋은 서브모듈 디렉터리에서 직접 push하고, 메인 저장소는 그 참조(커밋 포인터)만 커밋·push하면 된다.

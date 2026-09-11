# Working with Files and Directories

## 개요
- 파일·디렉터리를 생성·탐색·이름변경·복사·링크·삭제하는 Linux 기본 명령어 실습 데모.

## 내용
### 기본 워크플로우 명령어

```bash
# 현재 디렉터리 내용 나열
ls

# 디렉터리 이동
cd desktop

# 현재 위치(전체 경로) 확인
pwd

# 새 디렉터리 생성 후 이동
mkdir myfolder
cd myfolder

# 빈 파일 생성
touch file1.txt
touch file2.txt

# 파일 이름 변경
mv file1.txt file1_renamed.txt

# 파일 복사
cp file1_renamed.txt file1_copied.txt

# 하위 디렉터리 생성 후 파일 이동
mkdir sub_directory
mv file1_copied.txt sub_directory

# 심볼릭 링크 생성/확인
ln -s file1_renamed.txt link_to_file1
ls -l

# 심볼릭 링크 삭제
rm link_to_file1

# 파일 내용 보기
cat file1_renamed.txt

# 파일 삭제
rm file1_renamed.txt

# 디렉터리와 그 내용 전체 삭제
rm -r sub_directory

# 상위 디렉터리로 이동
cd ..

# 메인 디렉터리 삭제
rm -r myfolder
```

## 요약
- `ls`/`cd`/`pwd`로 탐색하고, `mkdir`/`touch`로 생성하며, `mv`/`cp`/`ln -s`로 재구성하고, `rm`/`rm -r`로 정리하는 이 흐름이 Linux에서 파일·디렉터리를 다루는 기본기이자 모든 DevOps 작업의 토대다.

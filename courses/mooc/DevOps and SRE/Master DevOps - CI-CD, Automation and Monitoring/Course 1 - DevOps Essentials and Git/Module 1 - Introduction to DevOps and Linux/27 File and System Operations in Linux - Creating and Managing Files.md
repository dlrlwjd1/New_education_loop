# File and System Operations in Linux - Creating and Managing Files

## 개요
- DevOps 엔지니어가 알아야 할 시스템 정보 확인, 파일 생성·비교·검색 명령어 실습 데모.

## 내용
### 시스템 정보 확인

```bash
uname -a      # OS·커널 정보 확인
whoami        # 현재 활성 사용자 확인
df -h         # 디스크 사용량을 읽기 쉬운 형식(GB/MB)으로 표시
```

### 디렉터리·파일 생성

```bash
mkdir project
cd project

touch file1.txt file2.txt
echo "내용" > file1.txt   # 파일에 내용 작성
cat file1.txt              # 파일 내용 확인
```

### 파일 복사·비교

```bash
cp file1.txt file1_backup.txt   # 파일 복사
diff file1.txt file2.txt         # 두 파일의 차이 비교 (cmp도 사용 가능)
```

### 내용 표시·검색

```bash
# 여러 줄 추가
echo -e "line 1\nline 2\nline 3" > file2.txt

head -n 2 file2.txt   # 처음 2줄 표시
tail -n 1 file2.txt   # 마지막 1줄 표시
grep line file2.txt   # "line"이라는 단어가 있는 줄 검색
```

## 요약
- `uname`/`whoami`/`df`로 시스템 상태를 확인하고, `touch`/`echo`/`cat`으로 파일을 만들고 확인하며, `cp`/`diff`/`head`/`tail`/`grep`으로 비교·검색하는 것이 DevOps 실무에서 매일 쓰는 기본 파일 관리 루틴이다.

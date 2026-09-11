# File and System Operations in Linux - Archiving and Compressing

## 개요
- tar를 이용한 아카이빙·압축, 정렬(sort), 프로세스·네트워크 확인, 권한(permission) 관리 실습 데모.

## 내용
### 아카이빙과 압축

```bash
tar -cvf archive.tar *.txt        # 텍스트 파일들을 하나의 tar 아카이브로 묶기
tar -cvzf archive.tar.gz *.txt    # 아카이빙 + 압축을 한 번에

which tar   # tar 바이너리 위치 확인
whereis tar # 소스 코드 위치 확인
man tar     # tar 매뉴얼 페이지 확인
```

### 파일 정렬

```bash
echo -e "apple\nbanana\ncherry" > fruits.txt
sort fruits.txt   # 알파벳순 정렬 출력
```

### 프로세스·네트워크 확인

```bash
top          # 실행 중인 프로세스와 자원 사용량 실시간 확인
ip addr      # 또는 ifconfig - 네트워크 인터페이스와 IP 주소 확인
wget <url>   # 인터넷에서 파일 다운로드
```

### 권한(Permission) 관리
- 파일/디렉터리마다 세 가지 권한: **읽기(r)**, **쓰기(w)**, **실행(x)**
- 세 종류의 사용자 카테고리: **owner(u)**, **group(g)**, **others(o)**

```bash
chmod 644 file1.txt   # 소유자는 읽기+쓰기, 그룹/기타는 읽기만
```

### 디렉터리 삭제

```bash
rm -r project   # 디렉터리와 그 안의 모든 내용 삭제
```

## 요약
- `tar`(아카이빙/압축), `sort`(정렬), `top`/`ip addr`/`wget`(시스템·네트워크 확인), `chmod`(권한 관리)는 시스템 상태를 점검하고 파일을 안전하게 관리하는 DevOps 엔지니어의 필수 도구다.

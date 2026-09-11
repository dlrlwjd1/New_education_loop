# [LAB] Scripting and Automation

## 개요
1. Bash 스크립트 작성 및 실행 방법 이해
2. Cron을 사용한 자동화된 백업 설정
3. Alias를 사용한 명령어 단축
4. systemd를 사용한 서비스 관리

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/52221237#overview)

## 내용
### 1. Bash 스크립트 작성
- **목적**: 간단한 스크립트를 작성하여 파일 관리, 프로그램 실행 및 시스템 모니터링을 자동화하는 방법 이해
- **절차**:
  1. 텍스트 에디터 열기 (예: gedit)
  2. `my_script.sh` 파일 생성 및 편집
  3. 스크립트의 첫 번째 줄에 `#!/bin/bash` 추가
  4. 현재 날짜를 저장하는 변수 정의 (`$DATE`)
  5. 백업 함수 (`backup`) 정의
  6. 소스 디렉토리 및 대상 디렉토리 확인
  7. 백업 수행 로직 추가
- **주의점**: 스크립트 실행 권한 추가 (`chmod +x my_script.sh`)

### 2. Cron을 사용한 자동화된 백업 설정
- **목적**: cron과 crontab을 사용하여 일정 시간에 백업 스크립트를 자동으로 실행하는 방법 이해
- **절차**:
  1. `crontab -e` 명령어로 crontab 파일 편집
  2. `* * * * * /path/to/my_script.sh` 형식의 라인 추가 (예: 매일 8시 55분에 백업 스크립트 실행)
  3. `crontab -l` 명령어로 현재 crontab 엔트리 확인
- **주의점**: cron이 실행되는 환경과 스크립트의 경로 확인

### 3. Alias를 사용한 명령어 단축
- **목적**: 자주 사용하는 명령어를 단축하여 편리하게 사용할 수 있도록 하는 방법 이해
- **절차**:
  1. `alias disk_usage='df -h /'` 형식의 alias 생성
  2. `.bashrc` 파일에 alias 추가

## 예시
- 강의에서 별도의 코드 예시는 다루지 않는다.

## 요약
- Bash 스크립트 작성 및 실행 방법 이해
- Cron을 사용한 자동화된 백업 설정
- Alias를 사용한 명령어 단축
- systemd를 사용한 서비스 관리

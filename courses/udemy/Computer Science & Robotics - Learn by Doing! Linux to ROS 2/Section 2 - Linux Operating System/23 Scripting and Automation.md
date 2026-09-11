# Scripting and Automation

## 개요
1. **Bash 스크립팅 소개**: Bash 스크립트는 텍스트 파일로 구성되며, 일반적으로 터미널에서 직접 입력하는 명령어의 시퀀스를 포함합니다.
2. **자동화 도구**: Cron과 Systemd를 사용하여 Linux에서 프로그램을 자동으로 실행하거나 배경에서 지속적으로 실행할 수 있습니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/50106513#overview)

## 내용
### Bash 스크립팅 이해
- **Bash 스크립트의 기본 개념**: Bash 스크립트는 텍스트 파일로, 일반적으로 터미널에서 직접 입력하는 명령어의 시퀀스를 포함합니다.
  ```bash
  #!/bin/bash
  echo "Hello, World!"
  ```
- **변수, 루프, 함수**: Bash 스크립트는 변수, 루프, 함수와 같은 프로그래밍 개념을 지원합니다.

### Cron 사용법
- **Cron의 기본 개념**: Cron은 Linux에서 반복적인 작업을 스케줄링하는 배경 서비스입니다.
  ```bash
  # 예시: 매일 자정에 백업 스크립트 실행
  0 0 * * * /path/to/backup_script.sh
  ```
- **Cron 표현식**: Cron은 분, 시, 일, 월, 요일을 기준으로 작업을 스케줄링합니다.

### Systemd 사용법
- **Systemd의 기본 개념**: Systemd는 Linux에서 초기화 시스템과 서비스 관리자를 제공하는 도구입니다.
  ```bash
  # 예시: SSH 서비스 시작
  sudo systemctl start sshd
  ```

## 예시
- 강의의 개념과 적용 맥락은 위 내용에 정리했으며, 구체적인 명령 실습은 관련 실습 강의에서 진행한다.

## 요약
- **Bash 스크립팅 소개**: Bash 스크립트는 텍스트 파일로 구성되며, 일반적으로 터미널에서 직접 입력하는 명령어의 시퀀스를 포함합니다.
- **자동화 도구**: Cron과 Systemd를 사용하여 Linux에서 프로그램을 자동으로 실행하거나 배경에서 지속적으로 실행할 수 있습니다.

# Hands-on Introduction to Linux Commands and Shell Scripting

## 개요
- Linux 환경, 핵심 명령과 Bash 스크립트로 반복 운영 작업을 자동화한다.

## 내용
- 파일·디렉터리, 권한, process, package와 표준 입력·출력·오류의 기본 모델을 이해한다.
- `find`, `grep`, `sort`, `uniq`, `cut`, pipe와 redirect를 조합해 데이터를 처리한다.
- shell script에는 shebang, 변수, 인자, 조건, 반복, 함수와 exit status를 사용한다.
- 변수 인용, `set -euo pipefail`, 명시적 오류 메시지와 안전한 임시 파일로 실패를 예측 가능하게 한다.

## 예시
```bash
#!/usr/bin/env bash
set -euo pipefail
archive=${1:?"archive path required"}
tar -czf "$archive" ./logs
```

## 요약
- 4개 모듈은 Linux 입문, 명령, shell scripting, 최종 프로젝트다.

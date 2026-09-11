# [LAB] tmux and terminator

## 개요
1. Terminator 설치 및 기본 사용법
2. tmux 설치 및 기본 사용법
3. tmux와 terminator의 차이점
4. 로그 프로그램을 이용한 실습

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/50106521#overview)

## 내용
### 1. Terminator 설치 및 기본 사용법
- **설치**: `sudo apt install terminator`
- **기본 단축키**:
  - Ctrl Alt T: 새로운 탭 열기
  - Ctrl Shift T: 새로운 창 열기
  - Ctrl Shift W: 현재 창 닫기
  - Ctrl Shift O: 다음 창으로 이동
  - Ctrl Shift P: 이전 창으로 이동

### 2. tmux 설치 및 기본 사용법
- **설치**: `sudo apt install tmux`
- **기본 단축키**:
  - Ctrl B C: 새로운 세션 열기
  - Ctrl B N: 다음 세션으로 이동
  - Ctrl B P: 이전 세션으로 이동
  - Ctrl B D: 현재 세션에서 분리

### 3. tmux와 terminator의 차이점
- **Terminator**: 단일 창 내에서 여러 탭을 사용할 수 있으며, 각 탭은 독립적인 환경을 제공합니다.
- **tmux**: 별도의 세션을 관리하며, 세션이 분리되어도 프로세스가 계속 실행됩니다.

### 4. 로그 프로그램을 이용한 실습
1. **로그 파일 생성**:
   ```bash
   echo "Hello from Terminator" > temp_service_log
   ```
2. **tmux에서 로그 파일 수정 및 실행**:
   - tmux 세션 시작: `tmux new -s test`
   - 새로운 탭 열기: Ctrl B C
   - 로그 파일 수정: `nano temp_service_log`
   - 수정 내용 확인: Ctrl B D (세션 분리)
3. **로그 프로그램 실행**:
   ```bash
   tail -f temp_service_log
   ```
4. **tmux에서 다른 세션 열기**:
   - 새로운 세션 시작: `tmux new -s second`
   - 로그 파일 확인: Ctrl B C (새로운 탭 열기)

## 예시
### 1. Terminator 설치 및 기본 사용법
```bash
sudo apt install terminator
```

### 2. tmux 설치 및 기본 사용법
이 소절의 본문은 수집되지 않았다. Udemy 자막 원문을 확보한 뒤 보완해야 한다.

## 요약
- Terminator 설치 및 기본 사용법
- tmux 설치 및 기본 사용법
- tmux와 terminator의 차이점
- 로그 프로그램을 이용한 실습

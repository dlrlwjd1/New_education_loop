# [LAB] ros2 CLI

## 개요
1. ROS 2의 명령줄 인터페이스 (CLI)를 사용하여 시스템과 상호작용하고 새로운 패키지를 설치하며, 이미 설치된 패키지를 관리합니다.
2. ROS 2 CLI는 모든 Ros2 기능을 사용할 수 있는 포괄적인 명령어 집합을 제공합니다.
3. CLI는 bashrc 파일에서 올바르게 소스를 로드한 경우 새 터미널에서 사용 가능합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/49933339#overview)

## 내용
### 1. ROS 2 CLI 소개
ROS 2의 CLI는 모든 Ros2 기능과 시스템 상태를 확인하고 실행 중인 애플리케이션을 모니터링하는 데 사용됩니다. 이 인터페이스는 bashrc 파일에서 올바르게 소스를 로드한 경우 새 터미널에서 사용 가능합니다.

### 2. CLI 명령어 확인
CLI의 모든 최상위 명령어와 그 의미를 확인하려면 `--help` 플래그를 사용할 수 있습니다. 예를 들어, `ros2 node`는 실행 중인 노드와 상호작용하는 데 사용되며, `ros2 pkg`는 설치된 패키지를 검사하거나 새 패키지를 생성하는 데 사용됩니다.

### 3. 패키지 목록 확인
시스템에 포함된 모든 Ros2 패키지를 확인하려면 `ros2 pkg list` 명령어를 사용합니다. 예를 들어, `ros2 pkg list | grep turtle_sim`은 `turtle_sim` 패키지를 필터링하여 출력할 수 있습니다.

### 4. 패키지 설치
새로운 패키지를 설치하려면 시스템이 최신 상태인지 확인해야 합니다. `sudo apt update` 명령어를 사용하여 시스템을 업데이트한 후, 필요한 패키지를 설치합니다. 예를 들어, `sudo apt install ros-<distro>-turtle-theme`로 `turtle_theme` 패키지를 설치할 수 있습니다.

### 5. 노드 실행
새로운 패키지에서 노드를 실행하려면 `ros2 run` 명령어를 사용합니다. 예를 들어, `ros2 run turtle_sim turtle_sim_node`로 `turtle_sim_node`를 실행할 수 있습니다.

### 6. 노드 정보 확인
이 소절의 본문은 수집되지 않았다. Udemy 자막 원문을 확보한 뒤 보완해야 한다.

## 예시
- 강의에서 별도의 코드 예시는 다루지 않는다.

## 요약
- ROS 2의 명령줄 인터페이스 (CLI)를 사용하여 시스템과 상호작용하고 새로운 패키지를 설치하며, 이미 설치된 패키지를 관리합니다.
- ROS 2 CLI는 모든 Ros2 기능을 사용할 수 있는 포괄적인 명령어 집합을 제공합니다.
- CLI는 bashrc 파일에서 올바르게 소스를 로드한 경우 새 터미널에서 사용 가능합니다.

# Package Management

## 개요
1. Linux의 패키지 관리 기능에 대해 탐구합니다.
2. 기본 프로그램을 통해 일상적인 작업을 수행할 수 있지만, 새로운 소프트웨어를 설치하는 것이 중요합니다.
3. Debian 기반 시스템에서 `.deb` 파일은 Windows의 `.exe` 파일과 유사한 패키지입니다.
4. APT(Apt Package Tool)는 복잡한 패키지 의존성을 관리하여 소프트웨어 설치를 단순화합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/50106479#overview)

## 내용
### 기본 개념
1. **패키지 (Package)**: 실행 가능한 코드, 버전 정보, 구성 파일 등을 포함하는 압축된 아카이브입니다.
2. **패키지 매니저 (Package Manager)**: 패키지를 설치, 제거, 관리하는 시스템입니다.

### Debian Package Management System
1. **dpkg**: `.deb` 파일을 직접 설치하고 관리합니다.
   ```bash
   dpkg -i package_name.deb
   ```
2. **APT (Advanced Package Tool)**: 패키지 의존성을 자동으로 처리하여 복잡한 소프트웨어를 쉽게 설치합니다.

### APT의 주요 기능
1. **메타데이터 읽기**: 대상 패키지와 모든 의존성의 메타데이터를 읽습니다.
2. **종속성 확인**: 모든 의존성이 충족되고, 충돌하는 패키지가 없는지 확인합니다.
3. **로컬 캐시 업데이트**: `sudo apt update` 명령을 실행할 때 로컬 캐시를 업데이트합니다.
4. **원자성**: 설치 또는 제거 작업이 성공하거나 실패하면 시스템 상태가 일관성을 유지하도록 설계되었습니다.

### sudo 명령
1. **권한 관리**: `sudo`는 슈퍼유저 권한을 가진 사용자를 허용합니다.
   ```bash
   sudo command_name
   ```

## 예시
- 강의의 개념과 적용 맥락은 위 내용에 정리했으며, 구체적인 명령 실습은 관련 실습 강의에서 진행한다.

## 요약
- Linux의 패키지 관리 기능에 대해 탐구합니다.
- 기본 프로그램을 통해 일상적인 작업을 수행할 수 있지만, 새로운 소프트웨어를 설치하는 것이 중요합니다.
- Debian 기반 시스템에서 `.deb` 파일은 Windows의 `.exe` 파일과 유사한 패키지입니다.
- APT(Apt Package Tool)는 복잡한 패키지 의존성을 관리하여 소프트웨어 설치를 단순화합니다.

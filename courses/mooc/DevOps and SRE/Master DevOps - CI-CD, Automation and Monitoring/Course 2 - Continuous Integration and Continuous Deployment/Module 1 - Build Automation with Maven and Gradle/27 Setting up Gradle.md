# Setting up Gradle

## 개요
- AWS EC2 Ubuntu 22 서버에 Java와 Gradle을 수동으로 설치·설정하는 실습.

## 내용

```bash
# Java 설치 (Gradle은 Java가 필요)
apt-get update
apt-get install openjdk-17-jdk -y

# unzip 설치 (Gradle은 zip 파일로 배포됨)
apt-get install unzip -y

# services.gradle.org에서 원하는 버전의 Gradle zip 파일 다운로드
wget https://services.gradle.org/distributions/gradle-<version>-bin.zip -P /tmp

# /opt/gradle 디렉터리로 압축 해제
unzip -d /opt/gradle /tmp/gradle-<version>-bin.zip

# 환경변수 설정 스크립트 생성 (예: /etc/profile.d/gradle.sh)
export GRADLE_HOME=/opt/gradle/gradle-<version>
export PATH=${GRADLE_HOME}/bin:${PATH}

# 파일 권한 부여 및 적용
chmod +x /etc/profile.d/gradle.sh
source /etc/profile.d/gradle.sh

# 설치 확인
gradle -v
```

## 요약
- Gradle을 수동 설치할 때는 Java 설치 → unzip 설치 → `services.gradle.org`에서 zip 다운로드 → `/opt/gradle`에 압축 해제 → `GRADLE_HOME`/`PATH` 환경변수 설정 → `source`로 적용의 순서를 따른다.

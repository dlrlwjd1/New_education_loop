# Installing and Setting Up Maven

## 개요
- AWS Ubuntu 22 가상머신에서 Java·Maven을 설치하는 실습.

## 내용

```bash
# root 권한으로 전환
sudo su -

# Maven 설치 여부 확인
mvn --version   # "command not found" → 미설치 확인

# 패키지 목록 갱신
apt-get update

# (필요 시) Java 17 설치 - Maven은 Java 기반 도구라 선행 필요
apt-get install openjdk-17-jdk
java --version

# Maven 설치
apt-get install maven -y

# 설치 확인
mvn --version   # 예: Maven 3.6.3
```

- Maven을 설치하면 기본적으로 Java 17이 함께 딸려온다 — 별도로 Java를 설치하지 않아도 되는 경우가 많다.

## 요약
- Ubuntu 계열에서는 `apt-get install maven`만으로 손쉽게 Maven을 설치할 수 있으며, Maven 패키지에 Java 런타임이 포함되어 있어 별도 Java 설치가 필수는 아니다.

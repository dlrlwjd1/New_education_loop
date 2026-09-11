# Installing Jenkins

## 개요
- Ubuntu 22 서버에 Java 설치부터 Jenkins 설치·초기 설정(unlock, 플러그인, 관리자 계정 생성)까지 전체 과정을 실습.

## 내용
### 1. Java 설치 (선행 조건)

```bash
apt-get update
apt-get install openjdk-17-jre  # 또는 관련 패키지
java -version   # 설치 확인
```

### 2. Jenkins 설치 (Ubuntu, Jenkins 공식 사이트 명령 기준)

```bash
# Jenkins 키 다운로드 (공식 사이트 명령의 공백 제거 후 실행)
wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | apt-key add -

# APT 저장소 소스 목록에 Jenkins 저장소 추가
echo deb https://pkg.jenkins.io/debian-stable binary/ | tee /etc/apt/sources.list.d/jenkins.list

apt-get update
apt-get install jenkins
```

- Windows에서는 `.war` 파일을 다운로드해 실행하거나 전용 Windows 설치 프로그램 사용.

### 3. Jenkins 서비스 시작 및 상태 확인

```bash
systemctl start jenkins
systemctl status jenkins   # "active (running)" 확인, q로 종료
```

### 4. 브라우저에서 초기 설정
1. `http://<서버 공인IP>:8080` (또는 Windows는 `localhost:8080`) 접속
2. **Unlock Jenkins** — 서버의 초기 관리자 비밀번호 파일을 확인해 입력

```bash
cat /var/lib/jenkins/secrets/initialAdminPassword
```

3. **플러그인 설치** — "Install suggested plugins" 선택 (folders, pipeline, git, LDAP, email, SSH build, maven, gradle 등 기본 플러그인 설치, 인터넷 속도에 따라 시간 소요)
4. **관리자 계정 생성** — 사용자명, 비밀번호, 이름, 이메일 입력 후 저장
5. **Jenkins URL 설정** 완료 후 대시보드 진입

## 요약
- Jenkins 설치는 Java 설치 → Jenkins 패키지 설치 → 서비스 시작 → 브라우저에서 초기 비밀번호로 unlock → 플러그인 설치 → 관리자 계정 생성 순으로 진행되며, 완료되면 포트 8080의 대시보드에서 바로 사용할 수 있다.

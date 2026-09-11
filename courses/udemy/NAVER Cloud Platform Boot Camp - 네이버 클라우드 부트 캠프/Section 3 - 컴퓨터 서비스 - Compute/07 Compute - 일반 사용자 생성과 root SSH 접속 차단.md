# Compute - 일반 사용자 생성과 root SSH 접속 차단

## 개요

- 원격 `root` 로그인을 차단해 Linux VM의 보안을 강화한다.
- 일반 사용자로 로그인한 뒤 필요할 때만 관리자 권한을 사용한다.

## 내용

### root 원격 접속의 위험

`root`는 서버의 모든 권한을 가진 계정이다. 외부에서 `root`로 직접 SSH 로그인하는 방식은 공격 표면이 크므로 권장하지 않는다.

일반 사용자를 만들고 그 계정으로 먼저 로그인한 뒤, 필요한 작업에만 `sudo` 또는 `su`를 사용하는 방식이 안전하다.

### 일반 사용자 생성

```bash
sudo adduser student
sudo passwd student
```

사용자와 비밀번호를 만든 후 새 계정으로 SSH 로그인이 되는지 먼저 확인한다.

### root SSH 로그인 차단

SSH 서버 설정 파일을 열어 다음 값을 설정한다.

```text
PermitRootLogin no
```

설정 파일 경로는 다음과 같다.

```text
/etc/ssh/sshd_config
```

설정을 변경하기 전에 일반 계정으로 접속할 수 있는지 확인해야 관리 접근을 잃는 사고를 방지할 수 있다.

## 예시

```text
root로 최초 접속
→ 일반 사용자 생성
→ 새 사용자 SSH 접속 확인
→ sshd_config에서 PermitRootLogin no 설정
→ 일반 사용자로 로그인
→ 필요한 명령만 sudo 또는 su로 실행
```

## 요약

- 원격 `root` 로그인을 계속 허용하는 것은 보안상 좋지 않다.
- 먼저 일반 사용자와 비밀번호를 만든다.
- 새 계정의 접속을 확인한 뒤 `PermitRootLogin no`를 설정한다.
- 평소에는 일반 계정을 사용하고 필요한 작업에만 관리자 권한을 얻는다.
- [원본 강의](https://www.udemy.com/course/naver-cloud-boot-camp/learn/lecture/43345524#overview)

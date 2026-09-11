# Network - Load Balancer 실습준비

## 개요

- Load Balancer 테스트에 사용할 Ubuntu 웹 서버를 준비한다.
- Apache·PHP를 설치하고 서버의 호스트명과 IP를 출력한다.
- 기준 서버 이미지를 복제해 두 대의 백엔드 서버를 만든다.

## 내용

### 네트워크 준비

웹 서버에는 외부 테스트를 위한 공인 IP를 할당하고 ACG에서 TCP 80 포트를 허용한다. Ubuntu 서버에 접속한 뒤 Apache와 PHP를 설치한다.

```bash
sudo apt update
sudo apt install -y apache2 php php-fpm
sudo systemctl enable --now apache2
```

DNS를 설정하지 않았으므로 웹 브라우저에서 공인 IP로 Apache 기본 페이지가 열리는지 확인한다.

### 식별 페이지 만들기

요청이 어느 서버로 전달됐는지 구분할 수 있도록 `/var/www/html/index.php`에서 호스트명과 서버 IP를 표시한다.

```php
<?php
echo '<p>Hostname: ' . htmlspecialchars(gethostname()) . '</p>';
echo '<p>IP Address: ' . htmlspecialchars($_SERVER['SERVER_ADDR']) . '</p>';
?>
```

각 서버의 호스트명을 `red`, `blue`처럼 다르게 정하면 새로 고침할 때 Load Balancer의 분산 결과를 눈으로 확인할 수 있다.

### 서버 복제

Apache와 PHP를 설치한 `red` 서버의 사용자 이미지를 만든 뒤, 그 이미지로 `blue` 서버를 생성한다. 두 서버 모두 같은 웹 환경을 가지되 호스트명으로 구분한다.

## 예시

```text
Ubuntu VM 생성
→ 공인 IP와 TCP 80 허용
→ Apache·PHP 설치
→ 호스트명·IP 출력 페이지 작성
→ 서버 이미지 생성
→ red와 blue 서버 준비
```

## 요약

- Load Balancer 실습에는 동일한 서비스를 제공하는 서버 두 대를 준비한다.
- ACG에서 HTTP 80번 포트를 허용한다.
- Apache와 PHP로 호스트명·IP 식별 페이지를 만든다.
- 기준 이미지를 복제하면 동일한 웹 환경을 빠르게 준비할 수 있다.
- [원본 강의](https://www.udemy.com/course/naver-cloud-boot-camp/learn/lecture/43367038#overview)


# Notifications in Jenkins (Email, SMS and Slack)

## 개요
- Jenkins 알림(notification)의 개념과 중요성, 지원 유형, Email Extension Plugin 설정 방법을 설명.

## 내용
### Jenkins 알림이란
- Job의 성공/실패 상태를 이메일, SMS, Slack 등으로 이해관계자(개발자, 테스터, 매니저)에게 전달하는 기능. 주로 플러그인으로 구현.

### 왜 중요한가
- 예를 들어 밤사이 파이프라인이 실패했는데 다음 날 아침에야 알게 되면, 그 사이 5~8시간 동안 애플리케이션이 계속 실패 상태로 방치된다.
- 즉각적인 실시간 피드백 제공, 장시간 실행 작업 모니터링, 성공/실패 즉시 확인, 팀 간 협업·오류 탐지·트러블슈팅 지원.

### 지원되는 알림 유형
- **Email** — 가장 흔히 사용
- **Webhook** — API로 서드파티 도구와 연동해 즉시 알림 송수신
- **Slack** — Jenkins에서 메시지를 받아 채널에 전송
- **SMS**, **Teams**, **Outlook 이메일** 연동도 가능

### Email Extension Plugin 설정
1. **Manage Jenkins → System** → **Extended E-mail Notification** 섹션으로 이동
2. SMTP 서버 정보 입력 (예: Gmail을 SMTP 서버로 사용 시 포트 465)
3. 발신용 이메일 계정과 앱 비밀번호(application password), SSL 사용 설정
4. 프로젝트 기본 제목(프로젝트명+빌드번호 등)과 기본 내용(Job 이름, 상태, 빌드 번호) 설정 후 저장

### Job별 이메일 발송 설정
- 각 Job의 **Post-build Actions**에서 "Email Notification" 또는 "Editable Email Notification" 선택
- 수신자 목록(recipient list) 입력
- Advanced 섹션에서 발송 조건 설정: 실패 시에만(Failure) / 항상(Always) 발송 등
- 체크박스로 "unstable build 시에만 발송" 여부 설정 가능
- "빌드를 깨뜨린 개별 담당자에게 별도 이메일 발송" 옵션도 설정 가능

## 요약
- Jenkins는 Email(대표적으로 Email Extension Plugin), Slack, Webhook, SMS 등으로 빌드 결과를 실시간 알림하며, SMTP 서버 설정 후 Job의 Post-build Actions에서 수신자와 발송 조건(실패 시/항상/개별 담당자 등)을 세밀하게 지정할 수 있다.

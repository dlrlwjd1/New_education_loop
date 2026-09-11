# Day 2 - Set Up Email Sending Tools for Your AI Sales Agents

## 개요
- 영업 에이전트가 사용할 메시지 전달 함수를 SMTP와 Pushover 대안으로 준비한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49820441#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### SMTP를 쓰는 이유
강사는 도메인 검증 등이 필요한 대량 발송 서비스 대신 기존 이메일 계정의 SMTP를 사용한다. 이번 수업은 발송 시스템 운영이 아니라 에이전트 협업 실습이므로 메일 없이 Pushover·파일·출력으로 대체해도 된다.

### 환경 변수
`EMAIL_SMTP_SERVER`, `EMAIL_APP_PASSWORD`, `EMAIL_ADDRESS`를 준비한다. 서버명에는 HTTP 접두사를 넣지 않는다. 영상의 Gmail 시연은 앱 비밀번호를 쓰며 복사한 값의 공백을 제거한다. 인증 가능 여부와 방법은 제공자·계정 설정에 따라 확인해야 하며 모든 서비스에 같은 방식이 적용되는 것은 아니다.

### 실제 발송 범위와 시험
Python 표준 라이브러리 `smtplib` 기반 함수는 제목·텍스트 본문·HTML 본문을 받는다. 영상의 수신자는 환경 변수에 설정한 자기 이메일이며 외부 잠재 고객에게 보내는 예제가 아니다. 먼저 시험 메일로 도착과 HTML 표현을 확인한다.

### send_message 추상화
`send_message`가 이메일 사용 설정에 따라 SMTP 또는 Pushover로 보낸다. 에이전트에는 이 공통 함수만 제공하므로 전달 수단을 바꿔도 상위 협업 구조는 그대로다. SMTP 준비가 어렵다면 사용 플래그를 꺼 알림으로 진행한다.

## 예시
```text
send_message(제목, 텍스트 본문, HTML 본문)
├─ 이메일 사용: send_email → 자신의 수신함
└─ 이메일 미사용: push → 자신의 휴대전화
```

로컬 함수의 실행 결과와 수신한 메시지가 일치하는지 확인한다.

## 요약
- 연락 수단을 직접 시험한 뒤 에이전트에 연결한다.
- 에이전트는 공통 메시지 함수를 사용한다.
- 수업의 발송 대상은 자신이며 SMTP는 선택 사항이다.

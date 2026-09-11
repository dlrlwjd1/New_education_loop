# Notifications in Jenkins (Email, SMS and Slack) - Demonstration

## 개요
- Email Extension Plugin의 SMTP 설정과, Pipeline/Freestyle Job에 이메일 알림을 붙이는 실습.

## 내용
### 1. SMTP(Gmail) 설정
- **Manage Jenkins → System → Extended E-mail Notification**
- SMTP 서버: `smtp.gmail.com`, 포트: `587`
- Advanced에서 SSL 사용 설정, Jenkins Credential(Username with password 타입, Gmail 계정+앱 비밀번호) 추가
- 기본 제목: 프로젝트명 + Job 이름 + 빌드 번호 + 빌드 상태 / 기본 내용: 콘솔 출력 상세 정보
- 설정 저장

### 2. Pipeline Job에 이메일 알림 추가

```groovy
pipeline {
    agent any
    stages {
        stage('Send Email') {
            steps {
                echo 'message'
            }
        }
    }
    post {
        always {
            emailext (
                to: 'recipient@example.com',
                subject: '...',
                body: '...',
                attachLog: true
            )
        }
    }
}
```

- Jenkins의 **Pipeline Syntax Generator**를 활용하면 `emailext` 스텝 코드를 자동 생성할 수 있다.
- `post` 블록의 `always`(항상), `failure`(실패 시) 등 조건에 따라 다르게 발송 가능.
- 제목·본문을 비워두면 시스템 기본 설정값이 사용된다.
- 문법 오류(따옴표 누락 등) 시 파이프라인이 실패하므로 문자열은 반드시 따옴표로 감싸야 한다.

### 3. Freestyle Job에 이메일 알림 추가
- **Post-build Actions → Editable Email Notification** 선택
- 수신자 목록, 콘텐츠 타입, 제목 타입 지정(기본값 유지 가능), 로그 첨부 여부 등 Advanced 설정
- 발송 트리거 조건(항상/실패 시 등)과 수신자를 지정 후 저장 — Job에 실행 단계가 없어도 빈 이메일이 발송될 수 있음

## 요약
- Email Extension Plugin의 SMTP 설정을 마치면, Pipeline Job은 `post { always { emailext(...) } }` 블록으로, Freestyle Job은 Post-build Actions의 Editable Email Notification으로 각각 빌드 결과 알림 이메일을 설정할 수 있다.

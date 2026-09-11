# Adding Supabase as Your Backend Database

## 개요
- Lovable의 임시 백엔드 구조를 Supabase와 프로덕션 배포 환경에 연결한다.
- 원본 강의: https://www.udemy.com/course/ai-product-manager-bootcamp/learn/lecture/53244133

## 내용
### 프로젝트와 스키마
- Supabase 프로젝트를 만들고 마이그레이션으로 `minutes`와 `profiles` 테이블을 생성한다.
- 테이블 편집기에서 스키마를 확인하고 인증 사용자가 프로필 데이터로 연결되는지 시험한다.

### 배포 환경 연결
- 애플리케이션에 필요한 Supabase 환경 변수를 Vercel의 대상 환경에 등록한다.
- 환경 변수를 바꾼 후 다시 배포해야 새 설정이 적용된다.
- Authentication 화면과 실제 앱 로그인을 함께 확인한다.

### 보안 주의
- 강의 데모는 편의를 위해 장기 만료 토큰을 대화에 전달하지만, 실제 프로젝트에서는 최소 권한·짧은 만료·비밀 저장소를 사용하고 토큰을 채팅이나 코드에 노출하지 않는다.

## 예시
```text
Supabase 프로젝트 → 마이그레이션 → Vercel 환경 변수 → 재배포 → 회원가입·데이터 저장 검증
```

## 요약
- 데이터베이스 스키마, 인증, 배포 환경 변수를 한 흐름으로 검증한다.
- 접근 토큰과 API 키는 저장소나 대화 기록에 남기지 않는다.

# Application Security for Developers and DevOps Professionals

## 개요
- secure SDLC, 보안 테스트·완화와 OWASP 위험을 개발·DevOps 흐름에 적용한다.

## 내용
- threat modeling으로 자산, 신뢰 경계, 공격 경로를 파악하고 설계 단계에서 통제를 정한다.
- SAST, DAST, dependency·container scan, secret detection을 파이프라인에 배치하고 위험도에 따라 차단한다.
- OWASP 위험에는 injection, broken access control, 인증 실패, 잘못된 설정과 취약 구성요소가 포함된다.
- parameterized query, 서버측 검증, 최소 권한, 안전한 session·암호화, patch와 security header로 완화한다.

## 예시
```python
cursor.execute("SELECT * FROM users WHERE id = %s", (user_id,))
```

## 요약
- 4개 모듈은 개발 보안, 테스트·완화, OWASP 위험, 모범 사례·프로젝트다.

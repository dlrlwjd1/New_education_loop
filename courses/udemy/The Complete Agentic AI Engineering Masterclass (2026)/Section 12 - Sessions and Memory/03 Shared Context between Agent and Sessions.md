# Shared Context between Agent & Sessions

## 개요
- 전체 대화 대신 필요한 사용자 특성만 상태 변수로 저장·공유한다.

## 내용
### 상태 관리 도구
`save_user_info`와 `retrieve_user_info` 도구로 이름·국가를 키-값 상태에 저장한다. `temp`, `user`, `app` 같은 스코프 접두사는 데이터의 출처와 수명을 구분한다.

세션 전체를 다른 세션에 전달하면 토큰 비용과 정보 노출이 커진다. 비즈니스 작업에 필요한 최소 데이터만 명시적으로 추출해 공유한다.

## 예시
```text
user:name = Javin
user:country = USA
```

## 요약
- 전체 대화 기록보다 핵심 변수를 공유하는 편이 효율적이다.
- 어떤 정보를 저장할지는 비즈니스 요구에서 먼저 정의한다.

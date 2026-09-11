# Structuring a Maven Project: Best Practices for Maintainable Codebases

## 개요
- 확장 가능하고 유지보수하기 쉬운 Maven 프로젝트를 위한 6가지 구조화 베스트 프랙티스.

## 내용
1. **표준 Maven 디렉터리 레이아웃 채택**
   - `src/main/java` — 애플리케이션 메인 코드
   - `src/main/resources` — 설정 파일, 템플릿 등 비코드 리소스
   - `src/test/java` — 단위/통합 테스트 클래스
   - `src/test/resources` — 테스트에 필요한 리소스
   - 이 레이아웃을 따르면 Maven의 기본 동작과 호환되고 다른 도구·프레임워크와의 통합이 쉬워진다.

2. **계층형(Layered) 패키지 구조 구현**
   - 논리적 계층으로 코드를 조직화해 모듈성과 관심사 분리(separation of concerns)를 높인다.
   - 이점: 관심사 분리, 계층별 독립적 테스트 용이, 확장성.

3. **멀티 모듈 프로젝트 효과적으로 관리**
   - 대규모 애플리케이션은 여러 모듈로 나눠 재사용성·유지보수성 향상.
   - 모듈 경계를 명확히 정의, **Parent POM**으로 공통 설정(의존성·플러그인) 중앙화, 순환 의존성(circular dependency) 방지.

4. **깔끔하고 정돈된 pom.xml 유지**
   - 관련 의존성을 논리적으로 그룹화
   - `<properties>`로 버전을 중앙에서 관리
   - 복잡한 설정은 주석으로 문서화

5. **일관된 네이밍 컨벤션 준수**
   - 패키지명: 역방향 도메인 표기(예: `com.company.project`)
   - 클래스명: 기능을 반영하는 설명적인 이름(예: `UserService`)
   - 모듈명: 목적을 명확히 나타냄(예: `user-api`, `user-impl`)

6. **문서화·메타데이터 포함**
   - `README.md` — 프로젝트 개요, 설정 방법, 사용법
   - `LICENSE` — 라이선스 정보
   - `CHANGELOG.md` — 변경 이력

## 요약
- 표준 디렉터리 레이아웃, 계층형 구조, 멀티 모듈 관리, 정돈된 pom.xml, 일관된 네이밍, 문서화라는 6가지 원칙을 지키면 Maven 프로젝트의 코드 품질과 팀 협업 효율이 크게 향상된다.

# Integrating Jenkins with Maven

## 개요
- Jenkins와 Maven을 통합하는 이유와, 전체 CI/CD 파이프라인에서 이 둘이 다른 도구들과 어떻게 연결되는지 개괄.

## 내용
### 왜 Jenkins-Maven 통합이 중요한가
1. **일관되고 오류 없는 빌드** — 매번 새 코드가 이전 코드와 통합되어 오류 없이 빌드되도록 보장
2. **빠른 완료와 피드백** — 빌드·테스트 과정을 자동화해 개발자에게 빠른 피드백 제공
3. **자동화된 배포** — 자동 빌드가 자동 배포로 이어져 애플리케이션을 더 빠르게 배포
4. **버전 관리와의 연동** — 커밋 시 Jenkins가 즉시 알림받아 Maven에 컴파일·테스트·패키징을 지시 → 더 빠른 빌드·배포
5. **품질 향상** — 자동화로 사람의 실수 감소, 결과물 품질 향상

### CI/CD 파이프라인 전체 흐름
1. 개발자가 코드를 **GitHub**에 push
2. **Jenkins**가 코드를 가져와 **Maven**에게 컴파일·테스트 지시
3. 테스트는 Selenium, JUnit, Jasmine, Cucumber, TestNG 등으로 수행
4. Jenkins가 **Tomcat** 같은 서버에 빌드 결과 배포
5. Jenkins가 **Prometheus·Grafana** 같은 모니터링 도구와 연동해 파이프라인 모니터링

## 요약
- Jenkins와 Maven의 통합은 GitHub(소스) → Jenkins+Maven(빌드/테스트) → Tomcat(배포) → Prometheus/Grafana(모니터링)로 이어지는 CI/CD 파이프라인의 핵심 축이며, 이를 통해 일관되고 빠르며 품질 높은 자동화된 빌드·배포가 가능해진다.

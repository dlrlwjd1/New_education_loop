# Containerization Scenario Yelp - Transition to Docker

## 개요
- Yelp가 2014년 모든 환경을 Docker로 전환하며 얻은 이점을 정리한 사례 후속편.

## 내용
### Docker 전환
- Yelp는 2014년 Testing, Pre-production, Production, Staging 등 **모든 환경**을 Docker로 전환 — 고객, 개발팀, 테스트팀 모두로부터 긍정적인 피드백을 받음.

### 전환으로 얻은 이점
1. **개발자 자율성(Developer Autonomy)** — 개발자가 환경·설정을 직접 통제. Docker 컨테이너에 애플리케이션과 그 의존성을 함께 패키징하므로, 개발 환경의 설정을 그대로 "lift and ship"해 다른 환경에 배포해도 문제없이 동작.
2. **일관성(Consistency)** — Dev 환경의 구성이 Pre-production·Production·Staging·Testing에서도 동일하게 유지되어 드리프트(drift)를 제거. Chef를 쓸 때는 배포 시점에 소프트웨어가 드리프트되어 버그가 발생했지만, Docker 이미지를 만들어 그대로 다른 환경에서 실행하면 일관성이 보장됨.
3. **효율성(Efficiency)과 빠른 배포** — Chef로는 배포에 수천 줄의 코드가 필요했지만, Docker에서는 Dockerfile 하나로 이미지를 만들고 어떤 플랫폼에서든 실행할 수 있어 코드량이 수백 줄 수준으로 줄고 배포가 훨씬 빨라짐.
4. **지속적 배포(Continuous Deployment)** — CI/CD가 더 빨라지고, 통합·테스트 후 더 신속하게 배포 가능 — 컨테이너 환경이 배포를 더 견고하고 민첩(agile)하게 만듦. 코드 리뷰·테스트 후 자동화된 Docker 빌드로 버그를 더 빠르게 찾아내고 제거할 수 있었음.
5. **운영 단순화(Simplified Operations)** — 더 이상 아무도 Chef 생태계를 운영하기 위해 Ruby를 배울 필요가 없음. Dockerfile 하나로 누구나 CI/CD 파이프라인을 실행할 수 있고, 개발자는 운영팀에 의존하지 않고도 패키지를 자유롭게 수정 가능 — 애플리케이션과 의존성이 하나의 이미지로 묶여 있어 Production·Non-production·Staging·Testing 등 어떤 Docker 환경에서도 문제없이 실행됨.

## 요약
- Yelp는 2014년 전 환경을 Docker로 전환해 개발자 자율성, 환경 간 일관성(드리프트 제거), 코드량 감소로 인한 배포 효율성, 더 빨라진 CI/CD, 그리고 Ruby·Chef 생태계 학습이 필요 없어진 운영 단순화라는 이점을 얻었으며, 이는 컨테이너가 조직의 애플리케이션 운영과 배포 민첩성에 핵심적인 역할을 하게 된 대표 사례다.

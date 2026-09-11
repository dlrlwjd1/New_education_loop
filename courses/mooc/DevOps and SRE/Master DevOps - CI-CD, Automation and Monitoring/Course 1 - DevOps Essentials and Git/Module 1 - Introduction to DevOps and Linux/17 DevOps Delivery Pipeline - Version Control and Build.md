# DevOps Delivery Pipeline - Version Control and Build

## 개요
- DevOps Delivery Pipeline 전체 단계를 개괄하고, 그중 Version Control과 Build 단계를 심화 설명.

## 내용
### Delivery Pipeline 전체 단계
1. Version Control — Git 등 저장소에 코드 저장·관리
2. Build — 코드를 실행 가능한 형태로 컴파일
3. Unit Testing — 개별 코드 단위의 정확성 검증
4. 테스트/스테이징 환경 배포
5. 자동화 테스트 — 기능·성능·보안 검증
6. Production 배포
7. 배포 후 성능·안정성 측정 및 검증 (피드백 루프 완성)

### Version Control 심화
- 코드 변경을 추적하고 개발자 간 협업을 가능하게 하며 여러 버전을 효율적으로 관리한다.
- 공동 저자가 소설을 쓰듯, 버전 관리가 없으면 서로의 작업을 덮어쓰게 된다 — 버전 관리는 이를 막고 "타임머신"처럼 이전 버전으로 되돌아갈 수 있게 한다.
- 여러 개발자가 동시에 같은 프로젝트에서 작업해도 서로 덮어쓰지 않고 병합할 수 있다.
- 대표 도구: Git, GitHub, GitLab

### Build 심화
- 소스 코드를 실행 가능한 아티팩트(.exe, 애플리케이션 패키지, 웹 배포 유닛 등)로 컴파일.
- 단순 컴파일이 아니라 필요한 모든 라이브러리·프레임워크·외부 패키지까지 함께 패키징한다 (여행 갈 때 기기뿐 아니라 충전기·케이블까지 챙기는 것과 같다).
- 대표 도구: Maven, Gradle, Jenkins Pipelines

## 요약
- Delivery Pipeline은 Version Control(코드 관리)에서 시작해 Build(실행 가능한 형태로 패키징)로 이어지며, 이후 강의에서 Unit Testing·배포·측정 단계로 이어진다.

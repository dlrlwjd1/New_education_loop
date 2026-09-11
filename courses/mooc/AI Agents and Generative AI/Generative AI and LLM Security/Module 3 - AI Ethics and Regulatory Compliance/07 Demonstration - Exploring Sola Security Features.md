# Demonstration: Exploring Sola Security Features

## 개요
- Sola는 워크플로를 위한 AI 보안 코파일럿(AI security co-pilot)이다. 프롬프트(prompt)와 출력을 실시간으로 감시하고, 위험한 콘텐츠에 플래그를 지정하며, 정책 가드레일(policy guardrails)을 집행하고, 유출 전에 비밀(secrets)을 마스킹(redact)하며, 감사 가능한 기록(auditable trail)을 남긴다.
- 분석가가 컴플라이언스나 보안을 놓치지 않으면서 더 빠르게 움직이도록 돕는 "스마트 체크포인트(smart checkpoint)"로 볼 수 있다.
- 이 데모에서는 Sola의 핵심 기능을 빠르게 둘러본다.

## 내용

### 홈 화면과 빠른 시작
로그인하면 홈(Home) 화면에 도착한다. 중앙에는 "무엇을 보호해 드릴까요?(what can I help you secure today?)"라고 묻는 큰 텍스트 상자가 있다. 친절한 보안 분석가에게 말하듯, 평범한 영어로 과제를 입력하거나 바로 아래의 바로가기(shortcuts)를 선택할 수 있다.

바로가기 예시:
- 상위 AWS·GitHub 위험 식별(identify top AWS and GitHub risks)
- Google Workspace 보안 평가(assess Google Workspace security)
- TLS 취약점 탐지(detect TLS vulnerabilities)
- 노출된 스토리지 볼륨 식별(identify exposed storage volumes)

이 바로가기들은 미리 만들어진 출발점(pre-built starting points)이다. 클릭하면 간단한 앱이나 워크플로가 생성/열리므로, 복잡한 데이터를 먼저 연결하지 않아도 결과를 얻을 수 있다. 학습이나 빠른 점검에 적합하다.

### 왼쪽 메뉴 구성
- **홈(Home)**: 메인 화면과 빠른 시작 바로가기로 돌아간다.
- **통합(Integrations)**: 데이터 소스를 연결하는 곳이다. 빠른 데모용으로는 CSV 업로드나 공개 사이트용 웹 체커(web checker) 같은 간단한 옵션이 있다. 실제 프로젝트에서는 GitHub나 Google Workspace 같은 소스를 추가한다.
- **설정(Settings)**: 워크스페이스 환경 설정을 담으며, 대체로 한 번 설정하면 그만인 영역이다.
- **앱(Apps)**:
  - **My Apps**: 사용자가 만든 프로젝트를 보여준다. 각 앱은 분석과 대시보드를 위한 작은 워크스페이스다.
  - **Workspace apps**: 팀 전체가 공유하는 앱으로 협업에 유용하다.
- **앱 갤러리(App Gallery)**: 템플릿 라이브러리다. 처음 사용한다면 여기서 템플릿을 골라 기본 구조를 자동으로 스캐폴딩(scaffold)하는 것이 가장 쉬운 출발점이다.
- **도움말 및 지원(Help and support)**: 가이드와 튜토리얼로 연결된다.

요약하면 홈은 빠른 작업, 통합은 데이터, 앱은 구축·공유, 앱 갤러리는 시작을 위한 것이다.

### 핵심 워크플로 — 쿼리, 캔버스, 알림
- **쿼리(queries)**: 질문을 던져 답을 얻는다.
- **캔버스(canvas)**: 쿼리 결과를 테이블(tables), 카운터(counters), 차트(charts)로 표시한다. 목표는 투명성(transparency)이다. 팀원이나 경영진이 동일한 사실(same truth)을 볼 수 있는 명확하고 공유 가능한 뷰를 만든다.
- **알림(alerts)**: 감시자(watchers) 역할을 한다. "보안 헤더가 누락되면(if missing security headers are detected)" 같은 조건을 설정하면 Sola가 플래그를 지정한다. 알림은 책임성(accountability)을 뒷받침한다 — 중요한 변화가 생기면 누군가에게 통지되어 조치할 수 있다.

쿼리 → 캔버스 → 알림은 함께 "답을 얻고, 명확히 보여주고, 계속 감시하는" 단순한 루프(loop)를 이룬다.

## 예시
- 바로가기 "identify top AWS and GitHub risks"를 클릭하면 데이터 연결 없이도 즉시 위험 점검 워크플로가 생성되는 흐름.
- 알림 조건 예시: "보안 헤더 누락 탐지 시 플래그 지정" — 조건 기반 감시로 책임성을 확보하는 사례.

## 요약
- Sola는 프롬프트·출력을 실시간 감시하고 위험 콘텐츠 플래그, 정책 가드레일 집행, 비밀 마스킹, 감사 기록을 제공하는 AI 보안 코파일럿이다.
- 홈 화면의 자연어 입력창과 사전 제작된 바로가기로 복잡한 데이터 연결 없이 빠르게 시작할 수 있다.
- 왼쪽 메뉴: 홈(빠른 작업), 통합(데이터 소스), 앱(My Apps·Workspace apps로 구축·공유), 앱 갤러리(템플릿), 도움말.
- 핵심 루프: 쿼리(답 얻기) → 캔버스(테이블·카운터·차트로 명확히 표시) → 알림(조건 기반 감시로 책임성 확보).

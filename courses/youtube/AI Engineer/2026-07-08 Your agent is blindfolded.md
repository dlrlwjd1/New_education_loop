# Your agent is blindfolded

## 개요
- 원본: https://www.youtube.com/watch?v=iRcX54EO5g8
- 채널: AI Engineer
- 발표자: Johan Lajili, Poolside AI
- 핵심 주제: agent의 성능 차이는 모델 자체보다 feedback loop와 검증 환경에서 크게 갈린다.

## 내용
### greenfield와 brownfield의 차이는 intuition의 정확도다
새 프로젝트에서는 agent의 직관이 맞을 가능성이 높다. 컴포넌트나 서비스가 일반적인 위치와 형태로 존재하기 때문이다. 반면 기존 코드베이스에는 dead end, 사용되지 않는 코드, 숨은 제약이 많아 agent가 잘못된 직관을 갖기 쉽다.

따라서 brownfield에서 agent를 믿을 수 있게 하려면, agent가 스스로 확인할 수 있는 feedback loop를 제공해야 한다.

### agent의 "작동합니다"는 주어진 정보 안에서의 판단이다
agent가 기능을 구현했다고 말할 때, 실제 의미는 "내가 볼 수 있고 검증할 수 있는 범위에서는 작동할 것 같다"에 가깝다. 로그, UI 상태, 서비스 상태, 재현 절차를 agent가 볼 수 없다면 agent는 blindfolded 상태로 추측한다.

### Spoolside 사례
발표자는 Poolside 내부에서 `Spoolside`라는 CLI를 만들어 agent가 VS Code extension 환경을 테스트할 수 있게 했다고 설명한다. 웹페이지가 아닌 제품에서도 screenshot, compressed snapshot, backend/frontend logs, service restart, menu navigation, agent message flow 같은 도구를 제공하면 agent가 인간처럼 테스트할 수 있다.

### 새 역할: product engineer에서 AIX engineer로
발표자는 엔지니어의 역할이 제품 기능을 직접 만드는 것에서, AI가 제품을 안전하게 만들 수 있는 환경을 만드는 쪽으로 이동한다고 본다. 코드베이스 정리, 지식 베이스, CLI, skill, MCP, 테스트 도구가 모두 agent를 돕는 infrastructure가 된다.

## 예시
### agent를 위한 검증 도구
- 화면 screenshot과 DOM/snapshot 제공
- frontend/backend 로그 추출
- 특정 서비스 재시작
- 특정 메뉴나 페이지로 이동하는 high-level command
- 메시지 전송, 응답 대기, 이미지 업로드 같은 제품별 action

### bug fix workflow
- agent가 바로 수정하지 못하게 한다.
- 먼저 bug를 재현하게 한다.
- 재현 로그와 화면 상태를 확인하게 한다.
- 그다음 수정, 테스트, 결과 요약을 수행하게 한다.

## 요약
- brownfield에서 agent가 실패하는 이유는 모델이 약해서만이 아니라, 볼 수 있는 feedback이 부족해서다.
- agent가 버그를 고치려면 먼저 버그를 재현할 수 있어야 한다.
- 팀마다 제품별 CLI, skill, MCP, logging interface를 만들어 agent가 self-serve하도록 해야 한다.
- AI 속도가 커질수록 검증 없는 velocity는 오류를 더 빠르게 누적시킬 수 있다.

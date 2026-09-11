# Orchestrate agents

## 개요

- 공통 `SKILL.md`로 세 에이전트의 협업 규칙을 정의한다.
- Agent A와 B를 병렬 실행하고 계획과 결과를 감독한다.

## 내용

### 오케스트레이션 스킬

Antigravity 스킬은 작업 지침과 모범 사례를 담은 재사용 가능한 지식 패키지다. Voyager의 공통 스킬은 역할을 다음과 같이 구분한다.

- **Agent A**: 핵심 게임과 게임 메커니즘 구현
- **Agent B**: Firebase 기반 리더보드 구현
- **Agent C**: A와 B의 결과를 통합하고 전체 기능 검증

스킬 저장 위치는 두 가지다.

```text
# 워크스페이스 전용
<workspace-root>/.agents/skills/<skill-folder>/

# 전역
~/.gemini/antigravity/skills/<skill-folder>/
```

Voyager에서는 `.agents/skills/orchestration/SKILL.md`를 사용한다. 스킬에는 Vanilla JavaScript 게임 메커니즘, Firebase 서비스 사용, 에이전트 간 협업 규칙을 기록한다.

### 실행 준비

- 이전 Hello World 파일을 `public/`에서 제거한다.
- Agent Manager에서 `agy-sandbox`를 선택한다.
- 새 대화를 Planning 모드로 시작한다.
- Agent A와 B에게 각자의 프롬프트를 보내 병렬로 실행한다.

### 인간 검토자의 역할

에이전트가 정보 수집용 명령을 요청하면 목적을 확인한 뒤 허용한다. 구현 계획에는 역할 침범이나 구조적 오류가 없는지 확인하고, 문제가 있으면 댓글로 수정한다.

### 문제 해결

- Firebase CLI는 Agent C만 사용하므로 A/B가 `firebase` 명령을 요청하면 거부한다.
- 가용성이나 성능 문제가 있으면 다른 모델을 시도한다.
- 사람이 코드를 직접 검토하고 문제를 해당 에이전트에게 설명한다.
- 구조가 망가졌다면 `public/`을 비우고 새 대화에서 다시 시작한다.

## 예시

```text
Agent A ── 핵심 게임 ──┐
                       ├─ Agent C ─ 테스트·통합·배포
Agent B ─ 리더보드 ────┘
```

## 요약

- 공통 스킬은 협업 규칙과 기술적 제약을 재사용하게 한다.
- 병렬 작업은 역할과 파일 소유권이 분명할 때 효과적이다.
- 인간은 계획 검토, 명령 승인, 오류 교정에 계속 관여한다.

# Finish building the game

## 개요

- Agent C로 게임과 리더보드를 통합하고 전체 흐름을 검증한다.
- 배포 후 테스트 데이터를 지우고 Firestore 규칙을 보완한다.

## 내용

### Agent C의 검증 계획

Agent A와 B가 끝난 뒤 Agent C를 시작한다. 구현 계획에 다음 항목이 포함됐는지 확인한다.

- `firebase serve`로 게임을 로컬 테스트
- 에이전트가 게임을 직접 플레이하기 어려우므로 `Shift + D`로 게임 플레이를 우회
- 리더보드에 테스트 점수를 입력
- 핵심 게임과 점수 저장 흐름을 함께 검증

누락된 단계가 있으면 계획에 댓글을 추가한 뒤 실행을 승인한다. 에이전트가 실패하면 오류와 현재 상태를 설명해 스스로 수정하도록 유도한다.

### 배포

로컬에서 전체 기능이 동작하면 배포한다.

```bash
firebase deploy
```

### 정리와 보안

Firebase 콘솔의 **Databases & Storage > Firestore**에서 `scores` 컬렉션의 테스트 문서를 삭제한다.

`firestore.rules`는 리더보드는 공개적으로 읽되, 인증된 사용자만 쓰도록 조정한다.

```text
allow read: if true;
allow write: if request.auth != null;
```

변경한 규칙도 Firebase에 다시 배포해야 실제 환경에 반영된다.

## 예시

```text
로컬 서버 시작
  → 게임 흐름 우회
  → 테스트 점수 입력
  → 리더보드 확인
  → 문제 수정
  → 프로덕션 배포
```

## 요약

- Agent C는 단순 코드 병합보다 엔드투엔드 검증을 담당한다.
- 구현 계획에서 테스트 방법과 성공 조건을 먼저 확인한다.
- 배포 후 테스트 데이터와 Firestore 보안 규칙을 정리한다.

# Introduction to Configuration Management

## 개요
- Configuration Management의 정의, 중요성, 대표 도구와 Pull vs Push 방식 분류를 설명.

## 내용
### Configuration Management란
- **Configuration** — 여러 서버에 동일한 변경사항(패키지 설치, 파일 복사 등)을 적용하는 것.
- **Management** — 그 변경을 수동 또는 도구로 수행하는 것.
- 서버·구성요소를 원하는 상태(desired state)로 유지해 라이프사이클 전체에서 일관된 성능을 보장하는 체계적인 프로세스.
- **Change Management**와 연계 — 어떤 서버가 언제, 누구에 의해 바뀌었고 기존 작업에 영향을 줬는지 추적한다.

### 왜 중요한가
1. **환경 간 일관성** — Dev/Test/Production 등 여러 환경의 서버에 동일한 소프트웨어가 필요하며, 수동 관리로는 일관성을 유지하기 어렵다.
2. **속도** — 100대 서버 작업이 수동으로는 10시간, 셸 스크립트로는 5시간 걸릴 일을, Configuration Management 도구로는 여러 서버에 동시(병렬)에 적용해 시간을 크게 단축.
3. **보안 연결** — 서버에 안전하게 연결해 변경사항 적용.
4. **안정성(Stability)** — 정기 스케줄로 모든 서버가 원하는 상태를 유지하는지 점검 가능.
5. **빠른 복구(Recovery)** — 배포 실패나 VM 응답 없음 시, 도구로 머신을 재설정·재구성해 빠르게 복구.

### 대표 도구
- **Puppet, Chef** — **Pull 방식** (에이전트가 서버에서 설정을 가져옴)
- **Ansible, SaltStack** — **Push 방식** (도구가 서버로 변경사항을 밀어 넣음)
- 이 중 **Ansible**이 업계에서 가장 선두적인 도구.

## 요약
- Configuration Management는 여러 서버에 동일한 설정을 일관되고 빠르며 안전하게 적용·추적하는 체계이며, Puppet/Chef(Pull)와 Ansible/SaltStack(Push)로 접근 방식이 나뉘고 그중 Ansible이 가장 널리 쓰인다.

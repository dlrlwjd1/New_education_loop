# Ansible Best Practices for Beginners

## 개요
- 확장 가능하고 유지보수하기 쉬운 Ansible 프로젝트를 위한 6가지 베스트 프랙티스.

## 내용
1. **프로젝트 구조 — 확장성을 고려한 조직화**
   - **Role** 활용 — task·변수·handler를 캡슐화해 재사용성과 명확성 향상
   - **Group Variables** — `group_vars`, `host_vars` 디렉터리로 그룹/개별 호스트 설정을 체계적으로 관리
   - **버전 관리** — Git 등으로 Ansible 파일을 관리해 변경 추적·협업 용이

2. **깔끔하고 읽기 쉬운 Playbook 작성**
   - Play·Task·변수에 목적을 알 수 있는 **설명적인 이름** 부여
   - 일관된 들여쓰기·포맷팅
   - 모듈에 **명시적 상태**(예: `state: present`) 지정해 모호함 방지
   - 복잡한 로직에는 주석 추가

3. **민감 정보의 안전한 관리**
   - **Ansible Vault**로 비밀번호·API 키 등 암호화
   - Playbook이나 변수 파일에 절대 하드코딩하지 않음
   - 암호화된 파일을 안전하게 저장하고 접근 권한을 철저히 관리

4. **테스트와 검증**
   - `--check` 모드로 **Dry Run**(실제 적용 없이 변경사항 미리 확인)
   - **Ansible Lint** 같은 도구로 문법 오류·베스트 프랙티스 준수 여부 분석
   - CI/CD 파이프라인에 Ansible 테스트를 통합해 검증 자동화

5. **Tag를 활용한 작업 관리**
   - Task에 **Tag**를 부여해 선택적 실행 가능
   - `--tags` 옵션으로 특정 작업만 실행

6. **Idempotency(멱등성) 보장**
   - 반복 실행해도 이미 원하는 상태라면 시스템을 바꾸지 않도록 설계
   - 멱등성을 내재적으로 지원하는 Ansible 모듈을 활용
   - Shell 명령어보다 Ansible 모듈을 우선 사용해 멱등적 동작 유지

## 요약
- Ansible을 견고하게 운영하려면 Role/Group Variables 기반 프로젝트 구조, 명확한 Playbook, Ansible Vault를 통한 시크릿 관리, Dry Run·Lint를 통한 검증, Tag 기반 선택 실행, 그리고 멱등성 설계라는 6가지 원칙을 지켜야 한다.

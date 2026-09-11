# Ansible Roles

## 개요
- Ansible Role의 개념, 필요성, 디렉터리 구조, 베스트 프랙티스와 흔한 실수를 설명.

## 내용
### Ansible Role이란
- 수백~수천 개의 Playbook을 개별적으로 관리하기 어려워질 때, task·설정을 재사용 가능한 단위로 패키징해 조직화하는 방법.
- 코드를 여러 디렉터리로 나눠 작성한 뒤 한 번에 실행하는 원칙을 따른다 — Playbook을 논리적인 컴포넌트 단위로 쪼갠다.
- **Role을 쓰면 가능해지는 것**:
  - 여러 Playbook(작업)을 **동시에** 실행 가능(단순 Playbook만으로는 불가능)
  - 하나의 Playbook 안에서 **다른 Playbook을 호출** 가능(단순 Playbook만으로는 불가능)

### Role이 필요한 이유
- 수많은 Playbook·템플릿·변수를 논리적으로 조직화
- 팀원과 Role을 공유해 협업 촉진
- **Ansible Galaxy** — 기성 Role이나 커스텀 Role을 찾을 수 있는 온라인 플랫폼
- Role 기반 접근·격리로 보안 강화 가능

### Role의 디렉터리 구조
- Role은 이름을 가지며, 총 **7개의 표준 디렉터리**로 구성:
  1. `default` — 기본 변수
  2. `vars` — 실제 변수
  3. `handlers`
  4. `tasks`
  5. `files`
  6. `meta`
  7. `templates`
- Role은 서버별, OS별, 애플리케이션별, 배포별로 그룹화해 만들며, Playbook이나 Ad-hoc command에서 호출해 사용한다.

### 베스트 프랙티스
1. 변수를 효율적으로 사용 — 기본 변수(default)와 실제 변수(vars)를 구분해 선언
2. 문서화 — 어떤 Playbook인지, 어떤 OS를 대상으로 하는지, 배포 버전이 무엇인지 명시
3. 테스트 케이스 작성 — 특히 오픈소스 커뮤니티가 사용할 Role이라면 중요

### 흔한 실수와 회피 방법
1. **하나의 Role에 여러 작업 혼재** — 예: Java, Python, Ruby 배포를 한 Role에 다 넣는 것은 지양. 애플리케이션마다 별도 Role을 만들어 작은 단위로 쪼갤 것.
2. **데이터 하드코딩** — 항상 변수(환경 변수, 호스트별 변수, ad-hoc 변수, var 섹션, 기본 변수)를 사용할 것.
3. **테스트 소홀** — 테스트 프레임워크로 Role을 검증하지 않으면 오류가 발생하기 쉽다.

## 요약
- Ansible Role은 Playbook을 default/vars/handlers/tasks/files/meta/templates라는 7개 표준 디렉터리로 모듈화해, 여러 Playbook의 동시 실행과 상호 호출을 가능하게 하며, 애플리케이션별로 Role을 분리하고 변수·문서화·테스트를 갖추는 것이 핵심 베스트 프랙티스다.

# Overview: Add Security to Your RESTful Service

> MOOC 읽기 자료 · [원본 강의](https://www.mooc.org/learn/devops-capstone-project/supplement/ho1tK/overview-add-security-to-your-restful-service)

## 개요
- CI 워크플로우 구성에 이어, Customer Account Service에 Flask-Talisman과 Flask-CORS로 보안 헤더와 CORS 정책을 추가하는 Module 3 후반부의 흐름을 안내.

## 내용
### 이전 레슨과의 연결
- 이전 레슨에서 GitHub Actions로 Customer Account Service의 빌드와 테스트를 자동화하는 CI 워크플로우를 추가.
- 이번 레슨에서는 빌드한 마이크로서비스에 안전한 코드 관행을 추가 — 보안 헤더를 위한 **Flask-Talisman**과 CORS(Cross-Origin Resource Sharing) 정책을 수립하기 위한 **Flask-CORS**를 추가.

### 진행 흐름
1. Sprint Backlog 맨 위에서 이 작업을 위해 만든 스토리를 가져와 자신에게 배정하고 In Progress로 옮긴 뒤, 이 작업 전용으로 만든 새 브랜치에서 작업을 시작.
2. TDD 관행에 맞춰, 구현하려는 보안 기능에 대한 테스트 케이스를 먼저 작성 — 보안 헤더와 CORS 정책을 추가하는 필요한 코드를 포함시키면 처음에는 실패하던 테스트 케이스가 결국 통과하게 됨.
3. 보안 헤더를 위한 Flask-Talisman과 CORS 정책 수립을 위한 Flask-CORS를 추가한 뒤, 변경 사항을 커밋·푸시하고 pull request를 만들어 이전 모듈에서 활성화한 지속적 통합(GitHub Action)을 트리거.
4. CI 테스트가 통과하면 브랜치를 main(또는 master) 브랜치에 병합.
5. 작업이 진행됨에 따라 해당 사용자 스토리를 칸반 보드에서 이동 — 스토리를 완료하면 Done으로, 이후 Closed로 옮김.

## 요약
- Module 3 후반부는 CI로 검증되는 새 브랜치에서 TDD로 보안 헤더(Flask-Talisman)와 CORS 정책(Flask-CORS)에 대한 실패하는 테스트를 먼저 작성한 뒤 이를 통과시키는 코드를 구현하고, CI 테스트 통과 후 main 브랜치에 병합해 마이크로서비스에 방어적 보안을 추가하는 것을 목표로 한다.

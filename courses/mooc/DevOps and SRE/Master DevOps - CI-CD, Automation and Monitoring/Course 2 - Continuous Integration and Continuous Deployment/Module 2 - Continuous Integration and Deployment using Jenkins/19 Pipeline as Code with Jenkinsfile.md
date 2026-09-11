# Pipeline as Code with Jenkinsfile

## 개요
- Jenkins Pipeline의 개념, Declarative vs Scripted 문법 비교, Jenkinsfile의 기본 구조(Node/Directive/Stage/Step)를 설명.

## 내용
### Pipeline as Code란
- 빌드·테스트·배포 전체 과정을 파이프라인 형태로 구현하게 해주는 **Pipeline 플러그인**.
- 파이프라인은 도구 다운로드 → 빌드 → 테스트 → post-build actions → 종료 순으로 진행되며, 애플리케이션에 따라 단계가 달라질 수 있다.
- 일시정지(suspend)·재개(resume) 기능 제공, 소스 코드 관리 시스템과의 흐름 정의 가능.
- 파이프라인 코드는 확장자가 없는 **Jenkinsfile**에 작성한다.

### Declarative vs Scripted Pipeline
- **Declarative Pipeline** — 최신 Jenkins에서 가장 흔히 쓰이는 문법. 구조가 미리 정의되어 있어 읽고 쓰기 쉬움.
- **Scripted Pipeline** — Jenkins 1버전 시절 등장한 문법. 경량 파이프라인 실행에 쓰였으나 다소 구식이고 복잡, Groovy에 능숙해야 하며 Jenkins 2에서는 잘 쓰이지 않음.
- 공통점: 둘 다 재사용 가능한 코드 작성 가능, Groovy 기반 문법, 에러 핸들링 지원.

### Pipeline Stage View
- 실행된 stage 이름, 소요 시간, 예상 실행 시간, 빌드 번호, 실행 일시, 아티팩트 생성 여부 등을 시각적으로 보여준다.

### Declarative Pipeline 기본 구조 (4대 구성요소)
1. **Node(Pipeline 키워드)** — 파이프라인 코드가 실행되는 블록. `pipeline { ... }`로 시작하는 필수 섹션.
2. **Directives** — `agent`(어느 서버에서 실행할지, 필수), `environment`, `options`, `parameters`, `triggers`, `tools` 등 파이프라인의 목적·설정을 정의. `agent` 외에는 대부분 선택사항.
3. **Stages** — 실행할 작업(Job) 단위 블록. 이름과 steps를 반드시 가지며, 필수 섹션.
4. **Steps** — Stage 안에서 실제로 실행되는 명령/스크립트(코드 클론, 빌드, 테스트, 배포, 파일 복사 등). 파이프라인의 가장 기본적인 실행 단위이며 사실상 필수.

```groovy
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                // 빌드 명령
            }
        }
        stage('Test') {
            steps {
                // 테스트 명령
            }
        }
        stage('Deploy') {
            steps {
                // 배포 명령
            }
        }
    }
}
```

## 요약
- Jenkins Pipeline은 Jenkinsfile에 `pipeline`(Node) → `agent` 등 Directive → `stages`(Stage 목록) → 각 Stage의 `steps`(실제 명령) 구조로 작성하며, 오늘날은 읽기 쉬운 Declarative 문법이 다소 복잡한 Scripted 문법을 대체해 표준으로 자리잡았다.

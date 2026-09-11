# Helm Chart Development Best Practices

## 개요
- Helm Chart를 유지보수 가능하고 신뢰할 수 있게 만들기 위한 템플릿 설계, 재사용(서브차트/라이브러리 차트), 테스트·검증, 버전 관리 관행을 정리.

## 내용
### 1. 템플릿 패턴(Templating Patterns)
- **DRY(Don't Repeat Yourself)를 위한 Helper 사용** — `_helpers.tpl`에 공통 템플릿을 정의해 중복을 제거.
```yaml
{{/* Common labels */}}
{{- define "mychart.labels" -}}
app.kubernetes.io/name: {{ include "mychart.name" . }}
app.kubernetes.io/version: {{ .Chart.AppVersion }}
app.kubernetes.io/managed-by: Helm
{{- end }}
```
```yaml
metadata:
  labels:
    {{ include "mychart.labels" . | indent 4 }}
```
- 이렇게 하면 모든 리소스에서 **일관된 레이블**을 강제할 수 있음.
- **YAML 중심, 최소한의 로직** — 복잡한 로직을 템플릿에 넣기보다 `if`, `else`, `range`, `toYaml` 같은 단순한 구조를 사용:
```yaml
{{ toYaml .Values.resources | indent 2 }}
```
- 템플릿은 명확성을 높여야지 흐려서는 안 됨.
- **올바른 들여쓰기와 JSON 옵션** — `-` 연산자로 공백을 제어해 깨끗한 YAML을 유지하고, 복잡한 리터럴 구조에는 JSON 스타일의 인라인 문법이 들여쓰기 오류를 줄이는 데 도움이 됨.

### 2. 서브차트(Subchart)와 라이브러리 차트를 통한 재사용
- **모듈형 구성을 위한 서브차트** — 복잡한 애플리케이션은 모듈화가 유리:
```text
parent-chart/
  charts/
    backend1/
    backend2/
  values.yaml    # 서브차트 활성화/비활성화 제어
```
- 의존성은 `Chart.yaml`에 정의하고, 부모 `values.yaml`을 통해 서브차트를 켜고 끔.
- **공유 유틸리티를 위한 라이브러리 차트** — 설치 불가능한(non-installable) 라이브러리 차트를 만들어 레이블 템플릿, 헬퍼, 공유 설정 같은 공통 코드를 담고, 다른 Chart에서 참조해 표준화와 코드 재사용을 촉진.
- **파라미터화를 통한 범용 차트** — 여러 마이크로서비스가 `values.yaml`만 다르게 해서 **하나의 기본 Chart**를 공유하는 방식 — 일관성을 보장하고 업데이트를 단순화.

### 3. 테스트와 검증
- **Lint와 Dry Run**:
```bash
helm lint ./mychart
helm template ./mychart --debug
```
- 클러스터에 반영되기 전에 문법·구조·로직 문제를 미리 잡아냄.
- **Chart 테스트** — `templates/tests/` 안에 기본 헬스체크용 리소스를 포함:
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: "{{ .Release.Name }}-test-connection"
spec:
  containers:
    - name: wget
      image: busybox
      command: ['wget', '-q', '--spider', '{{ include "mychart.fullname" . }}']
```
```bash
helm install ./mychart
helm test <release>
```
- 배포 이후 실제 기능이 동작하는지 검증.
- **스키마 검증** — `values.schema.json`이나 Helm 플러그인을 사용해 `values.yaml` 입력값을 검증, 오류를 조기에 발견.

### 4. Chart 버전 관리 모범 사례
- **Chart와 앱에 대한 SemVer(유의적 버전)**:
  - `Chart.yaml`의 `version`은 시맨틱 버저닝(MAJOR.MINOR.PATCH)을 따라야 함.
  - `appVersion`은 Chart에 담긴 실제 소프트웨어의 버전을 나타냄.
  - **옵션 1(1:1 매핑)**: Chart 버전과 앱 버전을 함께 동기화.
  - **옵션 2(독립적)**: 템플릿 로직만 바뀌고 기저 애플리케이션은 그대로일 때 Chart 버전만 별도로 올림.
- **버전 고정과 배포 파이프라인** — Chart 버전과 컨테이너 이미지 버전을 모두 고정(pin)해 재현성과 안전한 롤백을 보장. CI/CD 파이프라인을 통해 Chart를 배포와 별도로 패키징 — Helm 저장소(repository)를 만들고 테스트/스테이징/프로덕션 환경으로 Chart를 승격.
- **롤백** — Helm의 내장 롤백 기능 활용:
```bash
helm rollback <release> <revision>
```
- 자동화된 CI/CD에서는 헬스체크를 포함시키고, 배포 실패 시 자동으로 롤백을 트리거.

### 결론
- 이러한 관행을 도입하면 Helm이 단순한 배포 도구에서 **확장 가능하고 유지보수 가능한 시스템**으로 발전함 — 헬퍼 기반 템플릿, 모듈형 설계, 검증, 체계적인 버전 관리를 실천하는 학습자는 프로덕션급 인프라를 지원할 준비가 더 잘 되어 있음. 이런 패턴은 Chart의 품질을 높일 뿐 아니라 팀 협업, 일관성, 신뢰성도 촉진함.

## 요약
- 견고한 Helm Chart를 만들려면 `_helpers.tpl`로 중복을 없애고 로직을 최소화하는 템플릿 설계, 서브차트·라이브러리 차트·범용 차트를 통한 모듈형 재사용, `helm lint`·`helm template`·Chart 테스트·스키마 검증을 통한 사전 검증, 그리고 SemVer 기반 버전 관리와 `helm rollback`을 활용한 안전한 배포 파이프라인 구성이 핵심이다.

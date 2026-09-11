# ConfigMaps and Secrets - Creating Secrets

## 개요
- Secret을 생성하는 두 가지 방법(kubectl 명령, YAML 매니페스트)을 비교하고, 특히 **YAML 방식에서는 값을 반드시 Base64로 직접 인코딩해서 넣어야 한다**는 핵심 차이를 정리.

## 내용
### 방법 1 — kubectl 명령으로 생성
```bash
kubectl create secret generic my-secret \
  --from-literal=username=myuser \
  --from-literal=password=mypassword
```
- **`generic`**은 Opaque 타입을 의미 — TLS, Bootstrap Token, SSH 등 다른 타입을 만들려면 해당 타입 이름을 지정.
- **`--from-literal`**을 여러 번 사용하면 여러 key-value 쌍을 한 번에 전달 가능(파일 없이도 여러 값 전달 가능).
- **`--from-file=<파일명>`**을 사용하면 해당 파일에 담긴 모든 key-value 쌍이 Secret에 반영됨.
- **kubectl 명령에서는 값을 평문(plain text)으로 입력해도 됨** — Kubernetes가 자동으로 인코딩해서 저장.

### 방법 2 — YAML 매니페스트로 생성
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: my-secret
type: Opaque
data:
  username: bXl1c2Vy
  password: bXlwYXNzd29yZA==
```
- `kind: Secret`, `type`에는 Opaque든 다른 타입(사용자 인증, Docker Config 등)이든 실제로 생성하려는 Secret의 타입을 명시.
- **핵심 차이점**: YAML의 `data` 필드에 넣는 값은 **반드시 Base64로 미리 인코딩된 문자열**이어야 함 — Kubernetes는 YAML을 통한 Secret 생성 시 **평문 값을 절대 받아들이지 않음**.
- 즉 명령줄(`--from-literal`)에서는 평문을 그대로 써도 되지만, **YAML 파일에서는 사용자가 직접 값을 Base64로 인코딩한 뒤** `data` 필드에 넣어야 함.
- Secret이 생성되면 Kubernetes는 Pod에 값을 전달할 때 **자동으로 디코딩**해서 넘겨주므로, 애플리케이션 입장에서는 별도 처리가 필요 없음.

### 적용
```bash
kubectl apply -f secret.yaml
```
- 다른 리소스와 동일하게 YAML 작성 후 `kubectl apply -f`로 적용.

## 요약
- Secret은 `kubectl create secret <타입> --from-literal` 또는 `--from-file` 명령으로 만들거나 `kind: Secret`인 YAML로 만들 수 있는데, 명령줄 방식은 값을 평문으로 입력해도 되는 반면 **YAML 방식은 `data` 필드에 반드시 사용자가 직접 Base64로 인코딩한 값을 넣어야 하며 평문은 절대 허용되지 않는다**는 점이 핵심 차이이고, Kubernetes는 Pod에 전달할 때 자동으로 디코딩해준다.

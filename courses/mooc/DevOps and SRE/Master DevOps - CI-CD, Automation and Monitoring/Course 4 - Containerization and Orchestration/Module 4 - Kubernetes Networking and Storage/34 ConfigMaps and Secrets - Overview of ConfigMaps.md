# ConfigMaps and Secrets - Overview of ConfigMaps

## 개요
- 민감하지 않은 설정 정보를 Pod에 외부에서 주입하는 Kubernetes 객체인 **ConfigMap**의 필요성과, `kubectl` 명령/YAML로 생성하는 방법을 정리.

## 내용
### ConfigMap이 필요한 이유 — 문제 상황
- Pod 안의 컨테이너에서 실행 중인 애플리케이션에 환경 변수나 설정 값(예: `LOG_LEVEL=verbose`처럼 로그 수준을 verbose 모드로 설정)을 전달하고 싶은 경우를 가정.
- 방법 하나는 Pod가 뜬 뒤 `kubectl exec`로 컨테이너 안에 들어가 직접 설정을 변경하는 것 — 하지만 **Pod가 죽고 재생성될 때마다 매번 다시 설정해야 해서 비효율적**.
- 이를 해결하기 위해 Kubernetes가 제공하는 API 객체가 **ConfigMap**.

### ConfigMap이란
- **민감하지 않은(non-sensitive) 정보**를 Pod/애플리케이션에 전달하기 위한 Kubernetes API 객체 — 사용자 이름, 로그 레벨처럼 다른 사람이 봐도 문제되지 않는 **구성(configuration) 데이터**를 key-value 형태로 저장·전달.
- ConfigMap을 사용하면 **컨테이너 이미지를 다시 빌드하지 않고도** 설정 값을 바꿀 수 있음.
- 모든 컨테이너에 이 설정을 넣고 싶지 않고, **특정 Pod/컨테이너 한두 개에만** 적용하고 싶을 때도 유용 — 이미지 자체에 넣는 대신 실행 시점(runtime)에 ConfigMap으로 전달.

### ConfigMap 생성 방법 1 — kubectl 명령
```bash
# 파일 기반: 여러 key-value 쌍을 파일에 담아 전달
kubectl create configmap example-config --from-file=config.properties
```
- `config.properties` 파일 안에 `user=edureka`, `log_level=verbose` 같은 여러 설정 항목을 넣어두고, 그 파일 전체를 ConfigMap으로 생성.
```bash
# 리터럴 기반: 단일 key-value 쌍만 전달
kubectl create configmap example-config --from-literal=log_level=verbose
```
- **`--from-literal`**은 하나의 key-value 쌍만 전달할 때 사용.
- **`--from-file`**은 여러 key-value 쌍을 담은 파일 전체를 전달할 때 사용.

### ConfigMap 생성 방법 2 — YAML 매니페스트
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: example-config
data:
  user: edureka
  log_level: verbose
```
- `data` 필드 아래에 전달하고 싶은 설정 항목들을 key-value 쌍으로 나열.
```bash
kubectl apply -f configmap.yaml
```
- 다른 리소스와 마찬가지로 `kubectl apply -f`로 적용.

## 요약
- ConfigMap은 로그 레벨이나 사용자 이름처럼 민감하지 않은 설정 정보를 컨테이너 이미지 재빌드 없이 Pod에 외부에서 주입할 수 있게 해주는 Kubernetes 객체로, `kubectl create configmap --from-literal`(단일 값)이나 `--from-file`(여러 값이 담긴 파일), 또는 `data` 필드에 key-value 쌍을 나열한 YAML 매니페스트 두 가지 방식으로 생성할 수 있다.

# StatefulSets - Demonstration - StatefulSet YAML Configuration

## 개요
- `volumeClaimTemplates`를 포함한 실제 StatefulSet YAML을 작성하며, 각 필드의 의미와 기본 StorageClass 자동 사용 원리를 설명.
- 참고: 원본 자막에서 Pod를 가리킬 때 "part"/"port"라는 단어가 반복 등장하는 것은 자동 음성 인식 오류이며, 이 노트에서는 문맥에 맞게 Pod로 표기(실제 네트워크 포트는 그대로 "port"로 유지).

## 내용
### StatefulSet YAML 전체 구조
```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: web
spec:
  serviceName: nginx
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx:1.21
          ports:
            - containerPort: 80
              name: web
          volumeMounts:
            - name: www
              mountPath: /usr/share/nginx/html
  volumeClaimTemplates:
    - metadata:
        name: www
      spec:
        accessModes: ["ReadWriteOnce"]
        resources:
          requests:
            storage: 1Gi
```

### 필드별 설명
- **`apiVersion: apps/v1`, `kind: StatefulSet`** — StatefulSet 리소스 정의.
- **`metadata.name: web`** — StatefulSet 이름이 `web`이므로, `replicas: 3`에 따라 생성되는 Pod 이름은 **`web-0`, `web-1`, `web-2`**로 고정됨.
- **`spec.serviceName: nginx`** — 앞서 만든 **Headless Service**(`nginx`)를 지정 — 이 Headless Service가 각 Pod(`web-0`, `web-1`, `web-2`)의 DNS 항목을 만들어줌.
- **`spec.replicas: 3`** — 3개의 Pod를 생성.
- **`spec.selector.matchLabels`** — 이 레이블과 일치하는 Pod가 있으면 관리 대상으로 삼고, 없으면 `template` 섹션을 사용해 새로 생성.
- **`template`** — 생성될 각 Pod의 메타데이터(레이블 `app: nginx`)와 스펙(컨테이너 `nginx:1.21`, 포트 80, 볼륨 마운트)을 정의.
  - `volumeMounts`에서 이름 `www`인 볼륨을 컨테이너의 `/usr/share/nginx/html`에 마운트.

### volumeClaimTemplates — StatefulSet이 PVC까지 자동 생성
- 지금까지의 Persistent Volume 실습에서는 **PVC를 먼저 수동으로 만들고**, 그 PVC를 Pod에서 참조하는 방식이었음.
- 하지만 StatefulSet에서는 PVC를 미리 만들 필요가 없음 — **`volumeClaimTemplates`**를 정의하면, StatefulSet이 Pod를 생성할 때마다 **자동으로 각 Pod 전용 PVC도 함께 생성**해줌.
- 위 예시에서 `volumeClaimTemplates`는 이름이 `www`인 PVC를 정의하며, `accessModes: ReadWriteOnce`, `storage: 1Gi`(1GB)로 지정.

### StorageClass를 생략하면?
- YAML에서 `storageClassName`을 명시하지 않았는데, 그럼에도 볼륨은 정상적으로 프로비저닝됨 — Kubernetes는 이 경우 **`default`로 표시(annotation)된 StorageClass를 자동으로 사용**.
```bash
kubectl get sc
```
- 이 클러스터에는 `default`라는 annotation이 붙은 StorageClass가 있으며, `storageClassName`을 생략하면 이 기본 StorageClass가 사용됨. 필요하면 `premium-rwo`나 `standard-rwo`처럼 명시적으로 StorageClass를 지정할 수도 있음.
- 결과적으로 이 StorageClass를 사용해 **1GB 크기의 볼륨 3개**가 프로비저닝되며, 각각 `web-0`, `web-1`, `web-2`에 연결되어 `/usr/share/nginx/html` 경로에 마운트됨.

### 파일 저장 및 적용 준비
```bash
vi statefulset.yaml
# 위 내용 붙여넣기 후 저장
kubectl get sts   # StatefulSet 약어, 현재는 아무것도 없음
kubectl get pod   # 현재는 Pod도 없음
```
- 다음 강의에서 이 YAML을 실제로 `kubectl apply`하고 결과를 검증할 예정.

## 요약
- StatefulSet YAML은 `serviceName`으로 Headless Service를 참조하고 `replicas`만큼 `<이름>-0`, `<이름>-1`, ... 형태의 Pod를 생성하며, 특히 `volumeClaimTemplates`를 정의하면 PVC를 수동으로 만들지 않아도 StatefulSet이 각 Pod마다 자동으로 전용 PVC(예: 1GB, ReadWriteOnce)를 생성해 마운트해주고, `storageClassName`을 생략하면 클러스터에 `default`로 지정된 StorageClass가 자동으로 사용된다.

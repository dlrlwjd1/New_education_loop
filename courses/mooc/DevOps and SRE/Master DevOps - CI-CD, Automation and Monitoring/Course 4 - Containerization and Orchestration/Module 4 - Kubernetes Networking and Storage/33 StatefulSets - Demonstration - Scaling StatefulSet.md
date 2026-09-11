# StatefulSets - Demonstration - Scaling StatefulSet

## 개요
- Pod 삭제를 통한 고가용성(High Availability)·장애 허용(Fault Tolerance) 확인, 수동 스케일 업/다운 실습, 그리고 리소스 정리(cleanup) 순서까지 StatefulSet 데모의 마지막 부분.

## 내용
### 고가용성과 장애 허용 확인 — Pod 삭제 테스트
- 같은 애플리케이션의 복사본(`web-0`, `web-1`, `web-2`)이 여러 개 떠 있는 것 자체가 **고가용성(High Availability)**.
```bash
kubectl delete pod web-2
```
- `web-2` 삭제 후 다시 ContainerCreating 상태를 거쳐 **동일한 이름(`web-2`)으로 재생성**됨 — 네트워크 정체성(이름)이 그대로 유지되어 장애 허용(fault tolerance)이 확인됨.
- 같은 방식으로 `web-1`, `web-0`을 각각 삭제해도 항상 **같은 이름으로 재생성**됨을 확인.

### 수동 스케일 업(Scale Up)
```bash
kubectl scale sts web --replicas=5
```
- 기존 3개(`web-0~2`)에서 2개를 늘려 총 5개로 확장.
- 새로 늘어난 Pod(`web-3`, `web-4`)는 곧바로 Running되지 않고 **Pending** 상태를 먼저 거침 — StatefulSet은 **볼륨을 먼저 생성한 뒤에 Pod를 생성**하기 때문(Ordered Provisioning).
- `web-3`이 완료된 후에야 `web-4`가 진행 — StatefulSet의 세 가지 특징(고유 네트워크 정체성·고유 스토리지·순서 있는 프로비저닝)이 여기서도 그대로 적용됨.

### 수동 스케일 다운(Scale Down)
```bash
kubectl scale sts web --replicas=1
```
- 5개에서 1개로 축소하면, **항상 가장 마지막 순번(ordinal)부터** 종료됨 — 4번 → 3번 → 2번 → 1번 순서로 삭제되고 **0번 Pod만 남음**.
- 중요한 점: **스케일 다운 시에도 볼륨(PVC)은 삭제되지 않음** — 볼륨에는 데이터가 있을 수 있기 때문에 StatefulSet은 절대로 볼륨을 자동 삭제하지 않음.
- 다시 스케일 업(`--replicas=3`)하면, 새로 늘어나는 `web-1`, `web-2`는 **새 볼륨을 만들지 않고 기존에 남아 있던 볼륨을 그대로 재사용(Bound)** — Pod가 이전과 동일한 데이터를 가진 볼륨을 다시 받게 됨.

### 리소스 정리(Cleanup) — 순서 중요
1. **StatefulSet 삭제**:
   ```bash
   kubectl delete -f statefulset.yaml
   ```
   - 모든 Pod가 종료(terminating)됨.
2. **Headless Service 삭제** — StatefulSet을 지워도 Headless Service는 자동으로 삭제되지 않으므로 **수동으로 삭제**해야 함:
   ```bash
   kubectl delete -f headless.yaml
   ```
3. **PVC 삭제** — StatefulSet과 Headless Service를 지워도 PVC(및 연결된 볼륨)는 남아 있으므로 별도로 삭제해야 함:
   ```bash
   kubectl delete pvc --all
   ```
   - 이 명령으로 모든 PVC와 그에 연결된 볼륨이 함께 삭제됨.

## 요약
- StatefulSet의 Pod를 삭제하면 항상 동일한 이름으로 재생성되어 고가용성·장애 허용을 보여주고, `kubectl scale sts --replicas=N`으로 스케일 업하면 순서대로(볼륨 먼저, 그다음 Pod) 늘어나고 스케일 다운하면 가장 높은 순번부터 역순으로 줄어들지만 볼륨(PVC)은 절대 자동 삭제되지 않아 다시 스케일 업하면 기존 볼륨을 재사용하며, 리소스를 완전히 정리하려면 **StatefulSet → Headless Service → PVC** 순서로 각각 수동 삭제해야 한다.

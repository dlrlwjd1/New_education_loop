# Persistent Volumes and Persistent Volume Claims - Terminating the Pod and Verifying Volume Detachment

## 개요
- Pod 내부에 데이터를 만든 뒤 Pod를 삭제·재생성해, 볼륨(PV)에 저장한 데이터는 살아남고 컨테이너 로컬 파일시스템에 저장한 데이터는 사라짐을 직접 검증.

## 내용
### 컨테이너 안으로 진입
```bash
kubectl exec -it pod-pvc -- bash
# 멀티 컨테이너 Pod인 경우: kubectl exec -it <pod> -c <container-name> -- bash
```
- 단일 컨테이너 Pod이므로 `-c` 옵션 없이도 자동으로 해당 컨테이너로 진입.

### 마운트된 볼륨 크기 확인
```bash
df -kh
```
- `/var/www/html`의 크기가 약 **2.9GB**(요청한 3GB에서 파일시스템 메타데이터/inode 테이블 등에 일부 공간이 예약되어 실제 가용 용량은 근사치)로 표시됨.

### 데이터 생성 — 볼륨 vs 로컬 파일시스템 비교
```bash
touch /var/www/html/file1 /var/www/html/file2 /var/www/html/file3
ls -al /var/www/html
touch /root/file4 /root/file5 /root/file6
ls -al /root
```
- `/var/www/html`(PV가 마운트된 경로)에 file1~3 생성, **`/root`(볼륨이 아닌 컨테이너 로컬 파일시스템)**에 file4~6 생성 — 이후 어느 쪽이 살아남는지 비교하기 위한 사전 작업.

### Pod 삭제 및 볼륨 분리(detach) 확인
```bash
kubectl delete pod pod-pvc
kubectl get pod
```
- Pod가 삭제됨. GCP 콘솔에서 디스크 목록을 새로고침하면 "In use by" 칸이 다시 **비어 있음(blank)**으로 바뀜 — Pod가 삭제되면서 볼륨이 노드로부터 분리(detach)됨.
- 하지만 **볼륨(PV) 자체는 여전히 존재** — Pod를 삭제한다고 볼륨까지 삭제되는 것은 아님.

### Pod 재생성 및 볼륨 재연결
```bash
kubectl apply -f pod.yaml
kubectl get pod
kubectl describe pod pod-pvc
```
- Pod가 다시 생성되며 이전과 **동일한 노드**(`d0mx`)에 스케줄링되고, GCP 콘솔에서 다시 새로고침하면 볼륨이 이 노드에 자동으로 재연결(attach)된 것을 확인.

### 데이터 지속성(persistence) 최종 검증
```bash
kubectl exec -it pod-pvc -- bash
df -kh
ls -al /var/www/html
ls -al /root
```
- `/var/www/html`은 여전히 3GB이며 **file1, file2, file3이 그대로 남아 있음** — 볼륨에 저장된 데이터는 Pod가 삭제·재생성되어도 지속(persist)됨을 확인.
- 반면 `/root`의 file4, file5, file6은 **사라지고 없음** — `/root`는 볼륨이 아니라 컨테이너의 로컬 파일시스템에 저장된 것이었기 때문에, 컨테이너가 삭제될 때 함께 사라짐.

### 결론
- 데이터를 **볼륨**에 저장하면 Pod/컨테이너가 죽어도 데이터가 유지되고, 같은 볼륨(PVC)을 다시 연결하면 이전 데이터를 그대로 확인 가능.
- 반대로 컨테이너 로컬 파일시스템에 저장한 데이터는 컨테이너/Pod가 죽으면 함께 사라짐 — 이것이 바로 **Persistent Volume이 필요한 이유**.

## 요약
- `/var/www/html`(PV 마운트 경로)과 `/root`(컨테이너 로컬 파일시스템)에 각각 파일을 만든 뒤 Pod를 삭제하면 볼륨은 노드에서 분리되지만 삭제되지 않고 남아 있으며, Pod를 재생성해 같은 PVC를 다시 연결하면 `/var/www/html`의 파일들은 그대로 살아남는 반면 `/root`에 저장했던 파일들은 컨테이너와 함께 영구히 사라져, Persistent Volume을 사용해야만 Pod 재생성 후에도 데이터가 지속됨을 실습으로 확인했다.

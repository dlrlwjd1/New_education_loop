# Ephemeral Volume - Data Storage and Verification

## 개요
- `emptyDir` 볼륨에 실제로 파일을 써보고, Pod를 삭제·재생성해 데이터가 완전히 사라짐(ephemeral)을 확인.

## 내용
### emptyDir은 어디에 저장되는가 — 정정
- 강의 중 강사가 스스로 정정한 내용: 이전 영상에서 emptyDir이 **워커 노드의 RAM(메모리)**에서 공간을 가져온다고 설명했으나, 이번 영상에서 **워커 노드의 하드디스크(로컬 디렉터리)**에 저장되는 것이 맞다고 정정함.
- 즉, `emptyDir`은 기본적으로 **워커 노드의 로컬 하드디스크상의 임시 디렉터리**이며, Pod가 죽으면 이 디렉터리도 함께 정리(clean up)되어 데이터가 보존되지 않음.
- GCP 콘솔의 Compute Engine → Disks에서 워커 노드의 하드디스크 크기(약 100GB, 부트 설정/inode 메타데이터 등으로 실제 가용 용량은 약 94.3GB)를 확인해 `/data`가 이 로컬 하드디스크 위에 마운트되어 있음을 보여줌.

### 컨테이너 진입 및 데이터 확인
```bash
kubectl exec -it ephemeral-demo-pod -- sh
```
- `busybox` 이미지에는 `bash`가 없고 기본 Bourne shell(`sh`)만 있음 — `bash` 시도 시 없음을 확인 후 `sh`로 진입.
```bash
cd /data
df -kh
```
- `/data` 경로(마운트 경로)의 용량 확인.

### 파일 생성
```bash
echo "Hello ephemeral world" > hello.txt
cat hello.txt
touch file1 file2 file3
touch file4 file5
ls -al
```
- `/data`에 `hello.txt`, `file1`~`file5` 등 여러 파일 생성.

### Pod 삭제 후 데이터 소실 확인
```bash
kubectl get pod   # sleep 3600 명령으로 아직 실행 중
kubectl delete pod ephemeral-demo-pod
```
- Pod 삭제에는 정리 작업으로 인해 다소 시간이 걸림.
```bash
kubectl apply -f emptydir.yaml
kubectl get pod
kubectl exec -it ephemeral-demo-pod -- sh
ls -l /data
```
- Pod를 동일한 YAML로 재생성한 뒤 다시 `/data`를 확인하면, **이전에 만든 모든 파일이 사라지고 없음** — 예상대로 emptyDir은 Pod의 생명주기에 종속되므로 Pod가 죽으면 데이터가 완전히 사라짐.

### 결론
- Ephemeral Volume(`emptyDir`)은 **비프로덕션·테스트 용도로만** 사용해야 하며, 실제 프로덕션 워크로드에는 사용하면 안 됨.

## 요약
- `emptyDir` 볼륨은(강사의 정정에 따르면) 워커 노드의 RAM이 아니라 **로컬 하드디스크**의 임시 디렉터리에 데이터를 저장하며, Pod 안에서 파일을 생성한 뒤 Pod를 삭제하고 동일한 YAML로 재생성해 확인한 결과 이전 데이터가 모두 사라져 있어 emptyDir이 Pod의 생명주기에 완전히 종속됨을 실습으로 검증했고, 따라서 emptyDir은 프로덕션이 아닌 테스트·비프로덕션 용도로만 사용해야 한다.

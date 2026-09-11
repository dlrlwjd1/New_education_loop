# Services - Demonstration - ClusterIP, NodePort, LoadBalancer, and External Name for External Resource Mapping

## 개요
- ExternalName Service가 IP 없이 DNS 별칭(alias)으로만 동작함을 `nslookup`으로 검증하며, ClusterIP·NodePort·LoadBalancer·ExternalName 네 가지 Service 타입 실습을 마무리.

## 내용
### ExternalName Service는 IP를 갖지 않음
- ExternalName Service는 **외부 데이터베이스/서버의 레코드를 만드는 것**일 뿐이므로 IP 주소가 할당되지 않음 — 지정한 도메인 이름(예: `example.com`)에 대한 DNS 별칭 역할만 함.
- Pod가 이 Service 이름(예: `ext-service`)으로 요청을 보내면, 내부적으로 지정된 외부 도메인(`example.com`)으로 **DNS 포워딩**됨.

### 연결 테스트
```bash
ping example.com   # 로컬(랩톱)에서 외부 도메인의 IP 확인(예: 96.7.128.198)
```
- 브라우저로 해당 도메인에 접속해 실제로 응답하는 페이지가 있는지 확인.

### Pod 내부에서 ExternalName Service 검증
```bash
kubectl run testpod -it --image=busybox --rm -- /bin/sh
nslookup external-service
```
- BusyBox Pod 안에서 `nslookup external-service`를 실행하면, ExternalName Service가 가리키는 외부 도메인의 IP(랩톱에서 확인한 것과 동일한 IP)로 해석되는 것을 확인.
- 즉, Pod는 외부 도메인 이름을 직접 알 필요 없이 **클러스터 내부의 Service 이름만으로 외부 리소스에 별칭 접근**할 수 있음을 검증.

### 실습 마무리
- 이번 데모에서 **ClusterIP, NodePort, LoadBalancer, ExternalName** 네 가지 Service 타입을 모두 순서대로 실습하며 각각의 접근 범위(내부 전용, 내부+외부, 클라우드 로드밸런서 포함, DNS 별칭)와 통신 경로를 확인.

## 요약
- ExternalName Service는 실제 IP를 갖지 않고 지정된 외부 도메인으로 DNS 포워딩만 수행하는 별칭이며, Pod 안에서 `nslookup <서비스이름>`을 실행하면 랩톱에서 직접 `ping`했을 때와 동일한 외부 IP로 해석되는 것을 통해 이 매핑이 정상 동작함을 검증했고, 이로써 ClusterIP·NodePort·LoadBalancer·ExternalName 네 가지 Service 타입의 실습을 모두 마쳤다.

# Labels, Selectors and Annotations - Example of Annotation

## 개요
- Annotation(주석)의 정의와 Label과의 차이, YAML 예시, 그리고 두 개념의 비교표를 정리.

## 내용
### Annotation이란
- Label처럼 key-value 쌍이지만, **리소스를 식별·필터링하는 데 사용되지 않는(non-identifying) 메타데이터**.
- Pod, Service, Deployment, StorageClass, Volume 등 어떤 오브젝트에도 부착 가능하지만, **레이블처럼 그룹핑·선택(select)하는 용도로는 쓸 수 없음**.
- 다른 애플리케이션이나 도구가 참고할 수 있는 정보를 담는 용도 — 빌드·릴리스 정보, 외부 리소스 포인터, 툴링 정보, 사용자/시스템 출처 데이터, 롤아웃 메타데이터, 연락처 정보 등 광범위한 데이터를 담을 수 있음.

### Annotation 사용 예시 — 롤아웃 메타데이터
- 예: Deployment가 리비전 1(1.17) → 2(1.18) → 3(1.19) → 4(1.20)로 업데이트됐다면, "현재 리비전 번호(4)"라는 정보를 Annotation으로 유지.
- 이 값은 다음 업데이트 때 자동으로 5로 바뀌는 등 **비식별·비그룹핑 정보** — `kubectl describe deployment`로 이 Annotation을 확인 가능.

### Pod YAML의 Annotation 예시
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-app-pod
  annotations:
    description: "This is a sample pod"
    contact: "team@example.com"
    environment: "development"
    team: "platform"
```
- 만약 `environment`, `team`을 **Label**로 넣었다면 `kubectl get pod -l environment=development`처럼 필터링에 사용할 수 있지만, **Annotation으로 넣으면 필터링에 사용할 수 없음** — 순수하게 정보 제공 목적.

### Label vs Annotation 비교
| 항목 | Label | Annotation |
|---|---|---|
| 목적 | key-value로 오브젝트를 식별·선택 | 비식별(non-identifying) 메타데이터 |
| 용도 | 리소스 그룹핑·선택·쿼리 지원 | 오브젝트 선택에는 영향을 주지 않는 추가 정보 저장 |
| Selector 사용 가능 여부 | 가능(Selector가 Label로 필터링) | **불가능**(비식별 정보이므로) |
| 값 제약 | 63자 이하, 특정 문자 규칙(밑줄·점·아포스트로피 등 제한적 허용) | 최대 256KB, 하이픈·밑줄·`@`·`$` 등 더 넓은 범위의 문자 허용 |
| 대표 용도 | 도구·사용자가 리소스 관리를 위한 의미 있는 속성 지정 | 빌드 정보, URL 같은 비식별 메타데이터 저장 |

## 요약
- Annotation은 Label과 마찬가지로 key-value 형태이지만 리소스 식별·선택(Selector)에는 쓸 수 없는 순수 정보성 메타데이터(빌드 정보, 연락처, 롤아웃 리비전 등)이며, Label은 63자 이하의 제한된 문자만 허용하는 반면 Annotation은 최대 256KB까지 더 넓은 범위의 문자를 담을 수 있다.

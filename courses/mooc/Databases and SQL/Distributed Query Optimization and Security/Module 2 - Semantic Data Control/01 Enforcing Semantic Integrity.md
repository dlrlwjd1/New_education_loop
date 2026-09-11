# Enforcing Semantic Integrity

## 개요

- 갱신 연산(update operation) U는 데이터베이스를 상태 D에서 D_U로 옮기며, 갱신 후에도 무결성 제약(integrity constraint)이 유지되도록 강제하는 방법을 다룬다.
- 사후 검사(post-test)와 사전 검사(pre-test)를 비교하고, 사전 검사가 되돌리기(undo)가 필요 없어 더 효율적임을 설명한다.
- 사전 검사가 통하지 않는 존재 한정 단언(existentially quantified assertion)을 위해 차등 릴레이션(differential relation) R+, R−와 컴파일된 단언(compiled assertion) 기법을 소개한다.

## 내용

### 갱신 연산과 사후 검사(post-test)

- 갱신 연산 U는 행 추가, 값 변경, 행 삭제 등 무엇이든 될 수 있으며, 연산 후 데이터베이스는 원래 상태 D가 아닌 새로운 상태 D_U가 된다.
- 사후 검사 방식: 연산을 먼저 수행해 D → D_U로 바꾼 뒤, 트랜잭션 완료 후 제약을 검사해 제약이 거짓(false)이 되면 트랜잭션을 거부(reject)한다. 이때 갱신 연산을 수정하거나 그 효과를 되돌려야(undo) 한다.
- 문제점: D_U 전체가 모든 단언(assertion)과 일치하는지 검사해야 하고, U를 되돌리는 작업도 많은 비용이 든다.

### 사전 검사(pre-test)

- 갱신 후 데이터베이스가 일관된 상태(consistent state)가 될 경우에만 갱신을 실행하도록 보장한다.
- 되돌릴 것이 없으므로 더 효율적이다. 갱신의 효과가 어떤 단언과 모순되면 갱신 자체를 실행하지 않으므로, 데이터베이스는 원래의 일관된 상태 그대로 유지된다.
- 방법: 쿼리 실행 전에 제약 조건을 갱신문(update statement)에 덧붙인다(append). 갱신 후의 새 값을 가리키는 `NEW` 연산자(예: `NEW.BUDGET`)를 사용해, 갱신이 실제로 적용되기 전에 검사할 수 있다.

### 전칭 한정 공식에서의 비일관성 방지(inconsistency prevention)

- 이 방식은 전칭 한정 튜플 해석 공식(universally quantified tuple calculus formula)에만 동작한다. 즉 "모든 x에 대해(for all x) f(x)가 성립" 형태의 제약은 갱신 연산의 WHERE 절에 제약을 AND로 덧붙여 값이 데이터베이스에 들어가기 전에 검사할 수 있다.
- 그러나 외래 키 제약(foreign key constraint) 같은 존재 한정 단언(existentially quantified assertion)에는 동작하지 않는다. 예: "ASSIGNMENT의 모든 행에 대해, ASSIGNMENT의 프로젝트 번호와 같은 프로젝트 번호를 가진 PROJECT 행이 존재한다(there exists)"는 단언은 프로젝트가 없는 할당(assignment) 행이 추가되는 것을 막지만, `there exists` 절 때문에 이전처럼 갱신 연산에 단순히 AND로 붙일 수 없다.
- 이 문제의 기존 해법(컴파일 시점 사전 검사 구축, 런타임 검사)은 좋지 않다. 갱신 연산에 복잡한 장치를 넣어야 하고, 단일 릴레이션(single relation)의 단일 갱신에만 동작하는 제한적인 방식이다.

### 차등 릴레이션(differential relations)

- 릴레이션 R에 대한 모든 갱신은 세 쌍(triple)을 만든다: R(원래 릴레이션), R+(갱신으로 추가될 튜플 집합), R−(갱신으로 제거될 튜플 집합). R+와 R−를 차등 릴레이션이라 부른다.
- 삭제만 하면 R+는 비어 있고, 삽입만 하면 R−는 비어 있다.
- 갱신 시 새 릴레이션은 R = (R − R−) ∪ R+ 이다. 즉 먼저 제거할 요소를 빼고, 그다음 R+의 새 행을 더한다.
- 갱신을 시작할 때 R은 그대로 두고 R+와 R−의 값만 단언에 대해 검사한다. 검사를 통과하면 데이터베이스를 갱신하고, 통과하지 못하면 R+와 R−를 그냥 버린다. R은 변한 적이 없으므로 데이터베이스는 원래 상태를 유지한다.

### 컴파일된 단언(compiled assertions)

- 컴파일된 단언은 (R, T, C)의 트리플로 표현된다: R은 릴레이션, T는 갱신 유형(type of update), C는 단언(assertion) 조건이다.
- 단언 전체가 아니라 R과 T가 일치하는 부분집합만 검사한다. 즉 T 유형의 갱신이 테이블 R에 수행될 때에만 해당 단언을 검사하며, 검사는 R+와 R−에만 적용된다.

### 단언 예시 세 가지

1. **ASSIGNMENT 테이블 + 삽입(insert), 단언 C1**: 모든 새 ASSIGNMENT 행에 대해, 새 행의 프로젝트 번호와 일치하는 프로젝트 번호를 가진 PROJECT 행이 존재해야 한다. 이 단언이 없으면 프로젝트가 없는 할당이 추가된다. 행이 실제로 삽입되기 전에 이 검사가 수행된다.
2. **PROJECT 테이블 + 삭제(delete), 단언 C2**: PROJECT에서 행을 제거할 때, 제거하려는 프로젝트에 여전히 연결된 ASSIGNMENT가 없어야 한다. 있는데도 프로젝트를 제거하면 고아 할당(orphan assignment)이 생기므로 이를 방지한다.
3. **PROJECT 테이블 + 수정(modify/update), 단언 C3**: 수정에는 행의 이전 버전(old)과 새 버전(new)이 있다. 모든 old 행에 대해 new 행이 존재하며 다음 중 하나가 성립해야 한다 — (a) old 프로젝트 번호에 대응하는 ASSIGNMENT가 없어서 고아 할당이 생기지 않거나, (b) ASSIGNMENT에 그 프로젝트 번호가 실제로 존재한다면 new 행의 프로젝트 번호가 old 프로젝트 번호와 같아야 한다. 즉 행의 나머지는 수정돼도 프로젝트 번호는 바뀌지 않아 ASSIGNMENT의 대응 행들이 여전히 그 프로젝트 행에 연결되어 있어야 한다.

## 예시

프로젝트 예산을 10% 인상하되, 예산이 50만~100만 달러 사이여야 한다는 제약을 사전 검사로 강제하는 예:

```sql
-- 원래 갱신문
UPDATE PROJECT
SET BUDGET = BUDGET * 1.1
WHERE PNAME = 'CAD CAM';

-- 제약을 덧붙인 사전 검사 형태 (NEW.BUDGET은 SET 적용 후의 새 예산 값)
UPDATE PROJECT
SET BUDGET = BUDGET * 1.1
WHERE PNAME = 'CAD CAM'
  AND NEW.BUDGET >= 500000
  AND NEW.BUDGET <= 1000000;
```

데이터베이스는 이 검사를 미리 수행해, 예산이 100만 달러를 넘게 될 경우 연산을 거부하고 어떤 값도 변경하지 않는다.

## 요약

- 사후 검사(post-test)는 갱신 후 전체 상태를 검사하고 실패 시 되돌려야 하므로 비용이 크다.
- 사전 검사(pre-test)는 제약을 갱신문에 덧붙여(`NEW` 연산자 사용) 실행 전에 검사하므로 undo가 필요 없다.
- 사전 검사는 전칭 한정 공식에만 동작하며, 외래 키 같은 존재 한정 단언에는 적용할 수 없다.
- 차등 릴레이션 R+(추가될 튜플), R−(제거될 튜플)를 이용하면 R을 바꾸지 않은 채 검사할 수 있고, 실패 시 R+/R−만 버리면 된다.
- 컴파일된 단언은 (릴레이션 R, 갱신 유형 T, 단언 C) 트리플로 표현되어, 해당 릴레이션에 해당 유형의 갱신이 일어날 때만 R+와 R−에 대해 검사된다.

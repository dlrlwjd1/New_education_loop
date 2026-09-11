# Transparency Issues

## 개요

- 분산 DBMS가 사용자에게 숨겨야 할 위치·복제·fragment·네트워크와 저장 구조의 복잡성을 설명한다.
- 논리적·물리적 데이터 독립성과 전역 질의의 관계를 다룬다.

## 내용

### 위치와 fragment 투명성

사용자는 테이블 조각이 어느 사이트에 있는지, 몇 개의 복제본이 있는지 몰라도 전역 테이블 이름으로 질의한다. 분산 DBMS가 질의를 각 fragment로 변환하고 결과를 결합한다.

### 데이터 독립성

논리적 독립성은 열이나 fragment 배치가 바뀌어도 사용자 인터페이스를 유지한다. 물리적 독립성은 인덱스·저장 매체·파일 구조 변경이 애플리케이션에 드러나지 않게 한다.

### 네트워크와 복제 투명성

DBMS는 사이트 주소와 네트워크 부하를 고려해 실행 경로를 선택한다. 복제본 선택과 갱신도 사용자 대신 관리해야 전체 트랜잭션의 일관성을 제어할 수 있다.

## 예시

```sql
SELECT c.customer_name, p.part_name, o.quantity
FROM customer AS c
JOIN orders AS o ON o.customer_no = c.customer_no
JOIN part AS p ON p.part_no = o.part_no
JOIN manufacturer AS m ON m.manufacturer_no = p.manufacturer_no
WHERE m.state = 'Maryland';
```

사용자는 각 테이블의 실제 사이트를 지정하지 않는다.

## 요약

- 전역 스키마는 분산 위치와 fragment를 숨긴다.
- 논리·물리 변경은 가능한 한 애플리케이션과 분리한다.
- 투명성이 높을수록 DBMS의 메타데이터·최적화·트랜잭션 책임은 커진다.

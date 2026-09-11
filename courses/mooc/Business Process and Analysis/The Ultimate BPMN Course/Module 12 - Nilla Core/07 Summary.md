# Summary

## 개요

- Module 12에서 배운 네 가지 고급 event 정리

## 내용

| Event | 역할 | 이 챕터의 사례 |
|---|---|---|
| **Signal event** | **방향을 지정하지 않고 정보를 방송하고 수신**한다 | Tofisu의 신규 레퍼런스 고객이 음식 블로거 **Vegan Watch**에게 수신됨 |
| **Error event** | **발생하는 오류**를 나타낸다. **항상 취소형(canceling)이므로 점선 event가 없다** | Nilla Care에서 **통제 테스트용 IT 시스템이 실패**한 경우 |
| **Escalation event** | **바람직하지 않은 결과(undesired outcomes)** 를 나타내고, 그로 인한 **부모와 하위 프로세스 간 커뮤니케이션**을 처리한다 | Nilla Care에서 **실패한 통제가 시정 조치 하위 프로세스를 촉발**한 경우 |
| **Termination event** | **현재 프로세스 인스턴스와 잠재적 하위 프로세스의 모든 토큰을 죽인다** | Deluxe에서 **취소 후 토큰을 정리**할 때 |

### 반드시 기억할 대비

> **Error event는 항상 취소형이다. 그래서 signal event와 달리 점선(dashed) event가 없다.**

반면 **escalation event에는 점선 변형이 있다** — 에스컬레이션은 원래 작업을 멈추라는 뜻이 아니기 때문이다.

## 요약

- **Signal** — 방송(1:N), **8가지 변형 전부** 사용 가능
- **Error** — 오류, **3가지 변형만**. **점선 없음**
- **Escalation** — 바람직하지 않은 결과, **점선 있음**
- **Termination** — 모든 토큰 소비, **end event만**
- 네 event를 가르는 축은 **"원래 작업을 계속할 수 있는가"** 다

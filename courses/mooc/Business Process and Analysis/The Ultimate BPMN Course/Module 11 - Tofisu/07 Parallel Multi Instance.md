# Parallel Multi Instance

## 개요

- **Parallel multi-instance task(병렬 다중 인스턴스 작업)** — activity가 **병렬로(in parallel) 실행**된다
- 역시 **정의된 조건으로 종료**된다
- **중요한 전제**: **실제로 병렬 실행할 자원(resources)이 있어야 한다**

## 내용

### 사례 — Space Z의 품질보증

**품질보증(QA)팀에는 현미경이 여러 대 있다.** 그래서 **생산한 샘플 전부를 한 번에 병렬로 평가할 수 있다.**

→ **parallel multi-instance task를 쓴다.** 이는 **여러 작업의 병렬 실행**을 나타낸다.

### 중요한 전제 — 자원이 있어야 한다

> **당연히 task를 실제로 병렬 실행하려면 그에 상응하는 자원도 필요하다.**
>
> **예를 들어 품질보증팀에 일하는 사람이 한 명뿐이라면, parallel task를 쓸 수는 있지만 실제로는 하나씩 실행될 것이다.**

즉 **모델이 현실을 반영해야 한다.** 병렬로 그렸는데 자원이 없으면 그림과 현실이 어긋난다.

### 적용 범위 — 어디에 붙일 수 있는가

> **이 loop type들은 event sub-process를 유일한 예외로 하여 모든 종류의 task와 sub-process에 적용할 수 있다.**

즉 **loop 로직, sequential 로직, parallel 로직**을 다음에 적용할 수 있다.

- **일반 task**
- **Collapsed sub-process**
- **Expanded sub-process**
- **Transaction process**

**유일한 예외**: **Event sub-process**

## 예시

```text
세 가지 loop type 비교

[Task ↻]    Loop
            조건이 충족될 때까지 반복
            같은 입력

[Task ≡]    Sequential multi-instance
            하나씩 순차 실행
            다른 입력
            예: 직원 6명 급여 이체

[Task ⦀]    Parallel multi-instance
            동시에 병렬 실행
            다른 입력
            예: 현미경 여러 대로 샘플 전체를 한 번에 평가


적용 가능 대상

✓ 일반 task
✓ Collapsed sub-process
✓ Expanded sub-process
✓ Transaction sub-process
✗ Event sub-process   ← 유일한 예외


자원 전제

  QA팀에 현미경 10대 + 인원 10명  →  진짜 병렬 ✓
  QA팀에 인원 1명                 →  parallel로 그려도
                                     실제로는 하나씩 실행됨
  → 모델이 현실을 반영하는지 확인할 것
```

## 요약

- **Parallel multi-instance는 여러 인스턴스를 동시에 병렬 실행**한다
- **병렬 실행할 자원이 실제로 있어야** 모델이 현실과 맞는다
- **세 가지 loop type 정리**
  - **Loop** — 같은 입력으로 조건까지 반복
  - **Sequential multi-instance** — 다른 입력을 하나씩
  - **Parallel multi-instance** — 다른 입력을 동시에
- **event sub-process를 제외한 모든 task와 sub-process에 적용**할 수 있다

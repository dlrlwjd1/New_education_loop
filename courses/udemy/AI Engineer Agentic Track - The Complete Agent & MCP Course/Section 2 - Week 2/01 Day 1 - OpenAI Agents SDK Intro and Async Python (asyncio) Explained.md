# Day 1 - OpenAI Agents SDK Intro and Async Python (asyncio) Explained

## 개요
- OpenAI Agents SDK 소개에 앞서 LLM 호출에 필요한 비동기 Python의 동작을 설명한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49820287#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 가벼운 에이전트 프레임워크
OpenAI Agents SDK는 여러 모델과 사용할 수 있는 공개 프레임워크로 소개된다. Python과 TypeScript 구현이 있으며 수업에서는 Python을 사용한다. 이전 실험 프로젝트 Swarm에서 발전한 코드 중심 접근이라는 배경을 설명한다.

### async def와 await
`async def`로 정의한 코루틴 함수를 호출하면 코루틴 객체가 만들어진다. 그것을 `await`하는 등 실행 경로에 연결해야 본문이 실행된다. `await`는 완료를 기다리는 지점이며, 대기가 필요할 때 다른 작업이 실행될 기회를 준다.

### 이벤트 루프와 I/O 대기
LLM 요청은 네트워크 응답을 기다리는 시간이 많다. 이벤트 루프는 이러한 대기 중 다른 작업을 진행하도록 협력적으로 실행을 조율한다. 하나의 이벤트 루프 스레드에서는 Python 코드가 동시에 여러 CPU에서 실행되는 것은 아니다. 이것은 동시성(concurrency)을 제공하지만 CPU 병렬 계산과는 구분한다.

### 순차 await와 gather
`await a()` 다음에 `await b()`를 쓰면 순차 실행이다. 독립적인 여러 호출을 함께 진행하려면 `asyncio.gather`처럼 작업들을 함께 실행하도록 구성해야 한다. CPU 계산 위주 작업에는 별도의 실행 방식이 필요하다. 공유 상태를 여러 코루틴이 수정하면 await 경계를 사이에 두고 논리적 경쟁이 생길 수 있으므로, 비동기라는 이유만으로 모든 경쟁 조건이 없어지는 것은 아니다.

## 예시
```python
import asyncio

async def task(name):
    await asyncio.sleep(0.1)
    return name

async def main():
    results = await asyncio.gather(task("A"), task("B"))
    print(results)

if __name__ == "__main__":
    asyncio.run(main())
```

강의의 gather 구조를 외부 API 없이 확인하는 재구성 예시다. 노트북에서는 `await main()`으로 실행한다.

## 요약
- 코루틴 객체 생성과 실행을 구분한다.
- 비동기 실행은 I/O 대기 시간을 활용하는 데 유리하다.
- 순차 await만으로 여러 요청이 동시에 진행되지는 않는다.

# Summary

## 개요

- Module 7의 best practice 다섯 가지 정리

## 내용

| Best practice | 규칙 |
|---|---|
| **Scope(범위)** | 프로세스를 **task 15개로 제한**해 비즈니스 사용자에게 표현력 있고 접근 가능하게 유지한다. **기술적 모델은 더 많은 task를 포함해도 된다** |
| **Message event** | **같은 pool 안의 lane 간 커뮤니케이션에는 message event를 쓰지 않는다.** 대신 **sequence flow**를 사용한다 |
| **두 개의 pool** | 두 pool을 쓰기로 했다면 **각 pool이 완결되고 독립적인 프로세스를 담도록** 한다 |
| **Naming convention** | **명확하고 표현력 있는 이름**을 쓴다. **task는 능동형 서술, event는 수동형 서술** |
| **Straight to success** | **성공적 결과는 직진, 부정적 결과는 아래로 분기**시켜 일관되고 매끄러운 읽기 흐름을 만든다 |

## 요약

- 이 다섯 규칙은 **모델의 정확성이 아니라 품질과 표현력**을 다룬다
- Module 5(함정)가 **"틀리지 않게"** 였다면, Module 7은 **"잘 만들게"** 다
- 특히 **naming convention**과 **straight to success**는 비용 없이 즉시 적용할 수 있어 효과가 크다

# Writing import statements

## 개요

- import 문의 여러 작성법: 전체 임포트, from ... import(선택 임포트), as(별칭), 와일드카드(*)와 그 주의점

## 내용

### 작성법 4가지

1. **전체 모듈 임포트**: `import math` → 사용 시 `math.sqrt(9)` — 모듈명. 접두어 필요.
2. **선택 임포트**: `from math import sqrt` → **모듈 전체를 올리지 않아 인터프리터 과부하를 막는다.** 사용 시 접두어 없이 `sqrt(9)` (math.sqrt로 쓰면 에러).
3. **별칭(alias)**:
   - 모듈 별칭: `import math as m` → `m.cos(0)` — 이때 math.cos는 **더 이상 인식되지 않는다** (m으로만 접근).
   - 함수 별칭: `from math import factorial as f` → `f(10)` — 긴 이름 타이핑을 줄인다.
   - 여러 함수 동시 임포트: `from math import log10, sqrt`
4. **와일드카드**: `from math import *` — 모듈의 전부 임포트. **권장하지 않는 경우가 많다** — 큰 코드베이스에서는 함수가 어느 모듈에서 왔는지 추적하기 어렵고, 다른 모듈과 섞이면 혼란스럽다.

### 추가 사항

- 패키지 임포트도 모듈 임포트와 동일한 방식.
- 함수뿐 아니라 **변수·클래스**도 임포트할 수 있다. 존재하지 않는 이름을 임포트하면 에러(cannot import name ...).

## 예시

```python
import math
print(math.sqrt(9))          # 3.0

from math import sqrt
print(sqrt(9))               # 접두어 불필요

import math as m
print(m.cos(0))              # 1.0

from math import factorial as f
print(f(10))

from math import log10, sqrt
print(log10(50))
```

## 요약

- import(전체), from-import(선택), as(별칭), *(전부)의 네 방식으로 임포트를 작성한다.
- 선택 임포트는 부하를 줄이고, 별칭은 타이핑을 줄이되 원래 이름을 대체한다.
- 와일드카드는 출처 추적이 어려워 대규모 코드에서 피하는 것이 좋다.

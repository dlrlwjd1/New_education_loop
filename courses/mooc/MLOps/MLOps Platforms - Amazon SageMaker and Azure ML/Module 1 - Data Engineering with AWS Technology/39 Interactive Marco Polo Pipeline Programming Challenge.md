# Interactive Marco Polo Pipeline Programming Challenge

## 개요
- 브라우저에서 바로 실행 가능한 인터랙티브 코드 에디터로, 앞서 Step Functions 데모에서 만든 `pre_marco`/`post_marco` Lambda 로직을 순수 Python 함수로 시뮬레이션하며 확장해보는 연습 자료.

## 내용

### 시작 코드
- `pre_marco(name)`: `name`이 `"Marco"`이면 `{"name": "Polo"}` 반환, 아니면 `{"name": "No"}` 반환.
- `post_marco(name)`: `name`이 `"Polo"`이면 `"Great Job!"` 반환, 아니면 `"Keep Trying"` 반환.
- 입력 payload `{"name": "Marco"}`를 `pre_marco`에 전달 → 출력이 `"Polo"`이면 `post_marco`를 호출해 최종 결과 출력, 아니면 `"No match"` 출력.

### 코드 챌린지
1. **게임 문구 확장**: `"Fish Out of Water"` 문구에 대한 지원 추가 — `pre_marco`가 두 번째 함수를 트리거하는 다른 응답을 반환하도록.
2. **3단계 워크플로 확장**: `"Fish"`를 받으면 응답하는 새 Lambda 추가.
3. **다른 이름 지원**: `"Marco"` 외의 다른 이름에도 응답하도록 함수 업데이트.
4. **출력 메시지 개선**: `post_marco` 함수가 커스텀 축하 메시지를 출력하도록 업데이트.
5. **Lambda 페이로드 시뮬레이션**: 호출을 시뮬레이션된 event/context 인자로 감싸기 — 예: `output1 = pre_marco({"name":"Marco"}, {})`.

### 힌트
- 두 Lambda 함수의 입력·출력 형식이 서로 맞도록(align) 반드시 함께 업데이트할 것.
- 코드를 중복 작성하지 말고 기존 함수를 재사용할 것.
- 각 단계마다 출력을 출력(print)해 테스트·디버깅할 것.

## 예시
```python
# Lambda functions
def pre_marco(name):
    if name == "Marco":
        return {"name": "Polo"}
    return {"name": "No"}

def post_marco(name):
    if name == "Polo":
        return "Great Job!"
    return "Keep Trying"

# Input payload
payload = {"name": "Marco"}

# Invoke pre_marco
output1 = pre_marco(payload["name"])

# Check output
if output1["name"] == "Polo":
    # Invoke post_marco
    output2 = post_marco(output1["name"])
    # Print final output
    print(output2)
else:
    print("No match")
```

## 요약
- 이 연습은 Step Functions 데모에서 다룬 `PreMarco`/`PostMarco` Lambda 오케스트레이션 개념을, 실제 AWS 콘솔 없이 순수 Python 코드로 시뮬레이션하며 3단계 확장·다양한 입력 처리·페이로드 형식까지 직접 실험해보는 브라우저 기반 코딩 챌린지다.

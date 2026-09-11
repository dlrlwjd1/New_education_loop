# Lecture: Python and JSON

## 개요
- Python의 `json` 라이브러리로 딕셔너리·리스트를 직렬화(`dumps`)·역직렬화(`loads`)하는 방법과, XML 파싱과의 비교를 다루는 강의

## 내용
### Python과 JSON의 자연스러운 궁합
- Python의 리스트·딕셔너리 데이터 모델은 JSON의 배열·객체 구조와 거의 동일해, Java나 PHP보다 훨씬 자연스럽게 매핑된다(Java는 타입이 엄격해 매핑이 상대적으로 까다롭다).

### 직렬화: json.dumps
- 중첩된 딕셔너리(예: `data['name']`, `data['phone']['type']`, `data['phone']['number']`, `data['email']['hidden']`)를 자유롭게 구성한 뒤, `json.dumps(data, indent=4)`로 문자열로 직렬화한다. `indent=4`는 사람이 보기 좋게 들여쓰기하는 옵션이며, 컴퓨터 입장에서는 필요 없지만 가독성을 위해 자주 사용한다.

### 역직렬화: json.loads
- 문자열(파일에서 읽었든, 네트워크에서 받았든, 직접 만든 문자열이든)을 `json.loads(문자열)`로 파싱하면 원래의 Python 딕셔너리/리스트 구조로 복원된다.
- JSON 문법 오류(예: 작은따옴표를 큰따옴표 자리에 사용하는 등)가 있으면 예외가 발생할 수 있으므로 `try/except`로 감싸는 것이 안전하다.
- 리스트를 직렬화하는 예제(`json3.py`, `json4.py`)도 유사한 패턴이며, 반복문(`for`)으로 각 항목을 처리하는 점만 다르다.

### XML 파싱과의 비교
- Python 내장 XML 파서로 문자열에서 트리를 만들고 `tree.find(...)`로 값을 조회하는 방식은, JSON처럼 자연스러운 내부 데이터 구조(리스트/딕셔너리)가 아니라 "쿼리를 보내야 하는 객체"를 다룬다는 점에서 다르다.
- XML은 무한히 깊은 중첩과 자체 문서화된 태그가 강점이라, Microsoft Word의 DOCX 형식처럼 챕터·섹션·문단 같은 매우 계층적인 문서 구조에는 여전히 적합하다. 하지만 언어 간에 리스트·딕셔너리를 주고받는 용도로는 JSON이 더 낫다는 것이 핵심 메시지다.

## 예시
```python
import json

data = {}
data['name'] = 'Chuck'
data['phone'] = {'type': 'intl', 'number': '+1 734 303 4456'}
data['email'] = {'hidden': 'yes'}

print(json.dumps(data, indent=4))

json_string = '{"name": "Chuck", "phone": {"type": "intl"}}'
info = json.loads(json_string)
print(info['name'])
```

## 요약
- `json.dumps()`는 Python 딕셔너리/리스트를 JSON 문자열로 직렬화하고, `json.loads()`는 그 반대로 역직렬화한다.
- Python의 데이터 모델이 JSON과 매우 유사해 다른 언어보다 자연스럽게 다룰 수 있다.
- XML은 계층적 문서(DOCX 등)에 강하지만, 언어 간 리스트·딕셔너리 교환에는 JSON이 더 간결하고 실용적이다.

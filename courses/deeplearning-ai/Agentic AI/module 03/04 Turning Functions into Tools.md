# Turning Functions into Tools

## 개요

이 lab에서는 Python 함수를 AISuite를 통해 LLM이 사용할 수 있는 tool로 만드는 방법을 실습합니다.

핵심 목표:
- Python 함수를 LLM tool로 노출
- AISuite가 함수 docstring을 이용해 tool schema를 자동 생성하는 방식 이해
- LLM의 tool call 요청과 local function execution 흐름 확인
- 수동 tool schema 정의와 직접 실행 처리 방식 이해
- 여러 tool을 제공했을 때 LLM이 적절한 tool과 인자를 선택하는 과정 관찰

## 내용

### Lab 목표

Tool calling은 LLM이 단순히 텍스트를 생성하는 것을 넘어, 외부 함수와 연결되어 실제 작업을 수행하게 만드는 패턴입니다.

이 lab에서는 다음을 연습합니다.

- Python function을 tool로 제공
- LLM이 언제 tool을 사용할지 선택
- LLM이 함수 인자를 추론
- AISuite가 tool 실행과 결과 전달을 orchestration
- 여러 tool을 순서대로 호출하는 multi-step workflow 확인

### 환경 설정

```python
import json
import display_functions
from dotenv import load_dotenv

_ = load_dotenv()
```

`display_functions`는 chat completion response 안에서 발생한 tool call, tool result, final response를 보기 좋게 출력하는 helper입니다.

### AISuite Client 초기화

```python
import aisuite as ai

client = ai.Client()
```

AISuite client는 LLM 호출과 tool orchestration을 위한 통합 인터페이스입니다.

## 첫 번째 Tool 만들기

### Python Function 정의

현재 시간을 문자열로 반환하는 함수를 만듭니다.

```python
from datetime import datetime

def get_current_time():
    """
    Returns the current time as a string.
    """
    return datetime.now().strftime("%H:%M:%S")
```

중요한 점:
- 함수 자체는 일반 Python 함수
- docstring이 함수 목적을 설명함
- AISuite는 이 docstring을 사용해 LLM에게 tool 설명을 제공함

DeepLearning.AI platform에서는 기본 시간이 GMT 기준일 수 있고, 로컬에서 실행하면 로컬 시간이 반환됩니다.

### 함수를 LLM Tool로 전달

먼저 사용자 메시지를 만듭니다.

```python
prompt = "What time is it?"
messages = [
    {
        "role": "user",
        "content": prompt,
    }
]
```

그 다음 `tools`에 Python 함수를 직접 전달합니다.

```python
response = client.chat.completions.create(
    model="openai:gpt-4o",
    messages=messages,
    tools=[get_current_time],
    max_turns=5
)

print(response.choices[0].message.content)
```

주요 파라미터:

| Parameter | 설명 |
|-----------|------|
| `model` | 사용할 LLM |
| `messages` | conversation history |
| `tools` | LLM이 사용할 수 있는 함수 목록 |
| `max_turns` | tool call 반복의 최대 횟수 |

`max_turns`는 LLM이 tool call을 반복하다가 무한 loop에 빠지는 것을 막기 위한 제한입니다.

### Behind the Scenes

겉으로는 최종 답변만 보이지만 내부에서는 다음 일이 일어납니다.

```text
User: What time is it?
  -> LLM: get_current_time tool call 요청
  -> AISuite: get_current_time() local 실행
  -> AISuite: tool result를 LLM에게 전달
  -> LLM: 최종 답변 생성
```

Response를 자세히 보려면 helper를 사용합니다.

```python
display_functions.pretty_print_chat_completion(response)
```

이 출력에서 확인할 수 있는 것:
- LLM이 어떤 tool을 요청했는지
- tool이 local machine에서 실행되었는지
- tool result가 다시 LLM에게 전달되었는지
- 최종 응답이 어떻게 생성되었는지

## Tool Schema 수동 정의

### AISuite 자동 변환의 내부 구조

Python 함수를 직접 `tools=[get_current_time]`로 넘기면 AISuite가 docstring을 읽어 tool schema를 자동 생성합니다.

수동으로 정의하면 다음과 비슷합니다.

```python
tools = [{
    "type": "function",
    "function": {
        "name": "get_current_time",
        "description": "Returns the current time as a string.",
        "parameters": {}
    }
}]
```

Tool schema의 핵심 필드:

| Field | 설명 |
|-------|------|
| `name` | local function 이름 |
| `description` | LLM이 언제 tool을 쓸지 판단하는 설명 |
| `parameters` | 함수 인자 schema |

인자가 없는 함수라면 `parameters`는 비어 있을 수 있습니다.

### 수동 Tool 실행 처리

수동 schema를 사용하면 AISuite가 자동 실행까지 처리하지 않습니다.

따라서 `max_turns`를 사용하지 않고, 개발자가 tool call을 직접 처리해야 합니다.

```python
response = client.chat.completions.create(
    model="openai:gpt-4o",
    messages=messages,
    tools=tools,
)
```

Response 안에는 `tool_calls`가 들어 있습니다.

```python
print(json.dumps(response.model_dump(), indent=2, default=str))
```

이후 직접 실행 흐름:

```python
response2 = None

if response.choices[0].message.tool_calls:
    tool_call = response.choices[0].message.tool_calls[0]
    args = json.loads(tool_call.function.arguments)

    tool_result = get_current_time()

    messages.append(response.choices[0].message)
    messages.append({
        "role": "tool",
        "tool_call_id": tool_call.id,
        "content": str(tool_result)
    })

    response2 = client.chat.completions.create(
        model="openai:gpt-4o",
        messages=messages,
        tools=tools,
    )

    print(response2.choices[0].message.content)
```

이 방식은 이전 강의에서 배운 tool calling의 실제 구조를 그대로 구현한 것입니다.

차이:
- 자동 방식: AISuite가 schema 생성, tool 실행, result 전달을 처리
- 수동 방식: 개발자가 schema 정의, tool call 파싱, 함수 실행, result 전달을 처리

## 여러 Tool 제공하기

### 세 가지 Tool 추가

Lab에서는 세 가지 tool을 더 만듭니다.

| Tool | 역할 | 인자 |
|------|------|------|
| `get_weather_from_ip` | IP 기반 위치의 현재/최고/최저 기온 조회 | 없음 |
| `write_txt_file` | `.txt` 파일 생성 또는 덮어쓰기 | `file_path`, `content` |
| `generate_qr_code` | QR code 이미지 생성 | `data`, `filename`, `image_path` |

### Weather Tool

```python
import requests

def get_weather_from_ip():
    """
    Gets the current, high, and low temperature in Fahrenheit for the user's
    location and returns it to the user.
    """
    lat, lon = requests.get("https://ipinfo.io/json").json()["loc"].split(",")

    params = {
        "latitude": lat,
        "longitude": lon,
        "current": "temperature_2m",
        "daily": "temperature_2m_max,temperature_2m_min",
        "temperature_unit": "fahrenheit",
        "timezone": "auto"
    }

    weather_data = requests.get(
        "https://api.open-meteo.com/v1/forecast",
        params=params
    ).json()

    return (
        f"Current: {weather_data['current']['temperature_2m']}°F, "
        f"High: {weather_data['daily']['temperature_2m_max'][0]}°F, "
        f"Low: {weather_data['daily']['temperature_2m_min'][0]}°F"
    )
```

이 tool은 외부 API를 사용합니다.

흐름:
1. IP 주소 기반 위치 조회
2. 위도/경도 추출
3. Open-Meteo API 호출
4. 현재/최고/최저 기온 문자열 반환

### File Writing Tool

```python
def write_txt_file(file_path: str, content: str):
    """
    Write a string into a .txt file (overwrites if exists).
    Args:
        file_path (str): Destination path.
        content (str): Text to write.
    Returns:
        str: Path to the written file.
    """
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    return file_path
```

LLM은 사용자 요청에서 파일명과 내용을 추론해 인자로 전달합니다.

예:

```text
Can you make a txt note for me called reminders.txt that reminds me to call Daniel tomorrow at 7PM?
```

LLM이 추론해야 하는 인자:
- `file_path`: `reminders.txt`
- `content`: `call Daniel tomorrow at 7PM`에 해당하는 메모 내용

### QR Code Generator

```python
import qrcode
from qrcode.image.styledpil import StyledPilImage

def generate_qr_code(data: str, filename: str, image_path: str):
    """Generate a QR code image given data and an image path.

    Args:
        data: Text or URL to encode
        filename: Name for the output PNG file (without extension)
        image_path: Path to the image to be used in the QR code
    """
    qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_H)
    qr.add_data(data)

    img = qr.make_image(
        image_factory=StyledPilImage,
        embedded_image_path=image_path
    )
    output_file = f"{filename}.png"
    img.save(output_file)

    return f"QR code saved as {output_file} containing: {data[:50]}..."
```

LLM은 prompt에서 URL, output filename, logo path를 추론해 tool arguments로 전달합니다.

## 예시

### 날씨 Tool 선택

```python
prompt = "Can you get the weather for my location?"

response = client.chat.completions.create(
    model="openai:o4-mini",
    messages=[{"role": "user", "content": prompt}],
    tools=[
        get_current_time,
        get_weather_from_ip,
        write_txt_file,
        generate_qr_code
    ],
    max_turns=5
)

display_functions.pretty_print_chat_completion(response)
```

LLM은 여러 tool 중 `get_weather_from_ip`가 가장 적절하다고 판단합니다.

### Text Note 생성

```python
prompt = "Can you make a txt note for me called reminders.txt that reminds me to call Daniel tomorrow at 7PM?"
```

LLM은 `write_txt_file`을 선택하고 적절한 인자를 생성합니다.

생성된 파일 확인:

```python
with open("reminders.txt", "r") as file:
    contents = file.read()
    print(contents)
```

### QR Code 생성

```python
prompt = "Can you make a QR code for me using my company's logo that goes to www.deeplearning.ai? The logo is located at `dl_logo.jpg`. You can call it dl_qr_code."
```

LLM은 `generate_qr_code`를 호출합니다.

예상 인자:
- `data`: `www.deeplearning.ai`
- `filename`: `dl_qr_code`
- `image_path`: `dl_logo.jpg`

이미지 확인:

```python
from IPython.display import Image

Image("dl_qr_code.png")
```

### 여러 Tool을 순서대로 사용

복합 요청:

```text
Can you help me create a qr code that goes to www.deeplearning.com from the image dl_logo.jpg?
Also write me a txt note with the current weather please.
```

이 요청에는 여러 작업이 포함됩니다.

필요한 tool:
- `generate_qr_code`
- `get_weather_from_ip`
- `write_txt_file`

중요한 점:
- 날씨 정보를 메모에 쓰려면 먼저 `get_weather_from_ip`를 호출해야 함
- 그 결과를 사용해 `write_txt_file`을 호출해야 함
- QR code 생성은 별도로 `generate_qr_code`를 호출해야 함

```python
response = client.chat.completions.create(
    model="openai:o4-mini",
    messages=[{"role": "user", "content": prompt}],
    tools=[
        get_weather_from_ip,
        get_current_time,
        write_txt_file,
        generate_qr_code
    ],
    max_turns=10
)

display_functions.pretty_print_chat_completion(response)
```

LLM은 사용자의 자연어 요청을 분석해 필요한 tool을 고르고, dependency가 있는 경우 올바른 순서로 호출합니다.

## 관찰할 점

- LLM은 prompt intent에 따라 적절한 tool을 선택함
- 함수 docstring은 tool 선택 품질에 큰 영향을 줌
- 인자는 사용자 메시지에서 추론됨
- tool result는 최종 답변에 반영됨
- no-parameter tool은 빠른 정보 조회에 적합함
- 복합 작업에서는 tool call 순서가 중요함
- `pretty_print_chat_completion`으로 내부 orchestration을 관찰하면 디버깅에 도움이 됨

## 모델 선택

실험 가능한 모델:

| Model | 특징 |
|-------|------|
| `openai:gpt-4o` | reasoning과 속도 균형 |
| `openai:gpt-4.1` | 복잡한 작업과 reasoning에 강함 |
| `openai:gpt-4.1-mini` | 더 가볍고 빠르며 비용이 낮음 |
| `openai:gpt-3.5-turbo` | 단순 작업과 빠른 반복에 적합 |

선택 기준:
- 단순 prototyping: 작은 모델
- 복잡한 multi-step orchestration: 더 강한 모델
- 비용과 latency가 중요할 때: mini 또는 더 저렴한 모델

## 요약

- Tool calling은 LLM이 Python function을 reasoning 과정에서 사용할 수 있게 해줌
- AISuite는 Python function과 docstring을 바탕으로 tool schema를 자동 생성할 수 있음
- `max_turns`를 사용하면 AISuite가 tool call, local execution, result 전달을 자동으로 처리함
- 수동 schema를 정의하면 개발자가 tool call parsing과 execution flow를 직접 처리해야 함
- 명확한 함수 이름, type hint, docstring은 LLM의 tool 선택과 argument 생성에 중요함
- 여러 tool을 제공하면 LLM은 task에 맞는 tool을 선택하고 필요한 경우 순서대로 호출함
- 복합 요청에서는 tool 간 dependency를 고려한 orchestration이 필요함
- Tool call trace를 확인하는 것은 agentic behavior를 디버깅하고 개선하는 데 필수적임

## 다음 주제

코드 실행 tool처럼 더 강력한 tool을 agent workflow에 연결하는 방법 살펴보기

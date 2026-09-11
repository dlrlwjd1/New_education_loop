# Interactive Python Logging

## 개요
- Python `logging` 모듈의 로그 레벨, 포맷, 핸들러 구성을 직접 실행해보는 인터랙티브 코드 실습 자료(오디오 요약 25초).

## 내용

### Python 로깅 핵심 포인트
- 로그 형식, 출력 위치 등을 유연하게 설정 가능.
- 여러 **로그 레벨(log level)** 사용 가능(DEBUG, INFO, WARNING, ERROR, CRITICAL).
- 타임스탬프, 로거 이름, 레벨 등을 포함한 구조화된 로깅.

### 예시가 보여주는 것
- 로깅 인스턴스 생성.
- 로그 레벨 설정.
- 로깅 포맷 정의.
- 콘솔 로깅 핸들러 추가.
- debug부터 critical까지 다양한 레벨로 메시지 로깅.

## 예시
```python
import logging

# Create logger
logger = logging.getLogger('app_logger')
logger.setLevel(logging.DEBUG)

# Create console handler
ch = logging.StreamHandler()
ch.setLevel(logging.DEBUG)

# Create formatter and add to handler
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
ch.setFormatter(formatter)

# Add handler to logger
logger.addHandler(ch)

# Log messages
logger.debug('Debug message')
logger.info('Info message')
logger.warning('Warning message')
logger.error('Error message')
logger.critical('Critical message')
```

## 요약
- 이 실습은 "Monitoring and Logging"에서 다룬 로깅 개념을 Python `logging` 모듈로 직접 구현하며, 로거 생성 → 레벨 설정 → 포맷터·핸들러 구성 → 다양한 레벨의 메시지 기록까지 실습한다.

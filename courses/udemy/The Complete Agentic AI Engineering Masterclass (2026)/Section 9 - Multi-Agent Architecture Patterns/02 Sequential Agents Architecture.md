# Sequential Agents Architecture

## 개요
- 순서가 중요한 작업을 `SequentialAgent`로 고정한다.

## 내용
### 블로그 파이프라인
Outline Agent가 개요를 만들고 Writer Agent가 초안을 작성한 뒤 Editor Agent가 문법·구조를 개선한다. 각 결과는 `output_key`로 공유 상태에 저장되어 다음 단계의 입력이 된다.

`SequentialAgent`에 지정한 하위 에이전트 목록의 순서가 실제 실행 순서다.

## 예시
```text
Outline → Writer → Editor
```

## 요약
- 앞 단계 결과에 의존하거나 순서를 보장해야 할 때 사용한다.
- 독립 작업까지 순차 처리하면 불필요하게 느려진다.

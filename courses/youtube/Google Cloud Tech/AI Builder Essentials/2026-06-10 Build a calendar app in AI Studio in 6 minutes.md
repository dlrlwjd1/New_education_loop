# AI Studio로 6분 만에 캘린더 앱 만들기 (Build a calendar app in AI Studio in 6 minutes)

## 개요
- **핵심 개념 요약**: Google AI Studio를 활용하여 단 6분 만에 작동하는 캘린더 일정 관리 웹 어플리케이션(HTML, CSS, JavaScript)을 기획부터 소스 코드 생성, 그리고 브라우저 내 구동 검증까지 완수해 내는 바이브 코딩(Vibe Coding)의 실전 시나리오를 다룹니다.
- **업로드일**: 2026-06-10
- **YouTube 링크**: [Watch Video](https://www.youtube.com/watch?v=ESUhJ9tsSUY)

## 내용
### 1. 6분 완성 초고속 개발을 가능하게 만드는 요인
- 전통적 코딩으로는 달력 테이블 렌더링, 월별 날짜 오프셋 계산, 일정 입력 상태 폼(Form), 이벤트 저장 및 조회 상태(State) 로직을 짜는 데 최소 수십 분에서 수 시간이 걸립니다.
- Google AI Studio에 고수준 요구사항을 텍스트로 밀어 넣으면, 단 한 번의 추론 주기(Single generation step) 내에 모든 로직이 유기적으로 결합된 완성형 단일 소스 파일(Single-file app)을 산출해냅니다.

### 2. 정밀 피드백 기법 (Iterative Prompting)
- 1차 코드 생성 이후 추가 요구사항(예: "일정 항목을 클릭하면 팝업 모달이 뜨게 수정해 줘", "검색 기능을 넣어 줘")을 채팅창에 이어 씀으로써 기존 코드 아키텍처를 훼손하지 않으면서 안정적으로 코드를 고도화해 나갑니다.

### 3. API 키 관리 및 로컬 배포
- 생성된 단일 파일을 컴퓨터 로컬에 복사하여 브라우저에서 바로 열어보고 실시간으로 프로토타입 시연을 테스트합니다.

## 예시
아래 소스 코드는 AI Studio를 통해 단 한 번에 구현되는 캘린더 핵심 렌더링 및 일정 CRUD 이벤트 핸들러가 포함된 경량 단일 HTML/Vanilla JS 코드 예시입니다.

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>AI Studio 6분 완성 캘린더</title>
    <style>
        body { font-family: sans-serif; display: flex; flex-direction: column; align-items: center; }
        .calendar { display: grid; grid-template-columns: repeat(7, 1fr); gap: 5px; width: 350px; }
        .day { border: 1px solid #ccc; padding: 10px; min-height: 50px; cursor: pointer; }
        .day:hover { background-color: #f0f0f0; }
        .event { font-size: 11px; background-color: #d1e7dd; margin-top: 5px; padding: 2px; }
    </style>
</head>
<body>
    <h2>2026년 7월</h2>
    <div class="calendar" id="calendarGrid"></div>

    <script>
        const grid = document.getElementById("calendarGrid");
        const daysInMonth = 31;
        const events = {};

        // 달력 일자 동적 생성
        for (let i = 1; i <= daysInMonth; i++) {
            const dayDiv = document.createElement("div");
            dayDiv.className = "day";
            dayDiv.innerText = i;

            // 일정 추가 클릭 이벤트 바인딩
            dayDiv.onclick = () => {
                const note = prompt(`${i}일의 새로운 일정을 입력하세요:`);
                if (note) {
                    if (!events[i]) events[i] = [];
                    events[i].push(note);
                    renderEvents(dayDiv, i);
                }
            };
            grid.appendChild(dayDiv);
        }

        // 특정 날짜에 기록된 일정을 렌더링하는 헬퍼 함수
        function renderEvents(parent, day) {
            // 이전 이벤트 태그 클린업
            const existing = parent.querySelectorAll(".event");
            existing.forEach(e => e.remove());
            
            // 신규 데이터 추가
            events[day].forEach(txt => {
                const evSpan = document.createElement("div");
                evSpan.className = "event";
                evSpan.innerText = txt;
                parent.appendChild(evSpan);
            });
        }
    </script>
</body>
</html>
```

## 요약
- AI Studio를 통한 바이브 코딩은 복잡한 캘린더 일정 로직을 6분이라는 초단시간 내에 프로토타이핑하여 아이디어를 신속하게 실제 구동물로 시각화합니다.
- 복잡한 컴포넌트 라이브러리 없이 순수 HTML/JS 파일만으로 완성되도록 프롬프팅 지침을 주면 의존성 충돌 문제 없이 바로 가동됩니다.
- 한 번에 최종 완성하려 하기보다는, 기본 달력 기능 완성 후 점진적으로 기능을 요청하여 확장해 나가는 피드백 설계 루프가 훨씬 깔끔한 코드를 유도합니다.

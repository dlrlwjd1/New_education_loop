# DevStash Homepage Mockup Spec

> 원문 [homepage-mockup-spec.md](homepage-mockup-spec.md)의 한국어 번역본입니다.

DevStash를 위한 마케팅 홈페이지를 만든다 - DevStash는 코드 스니펫(code snippet), AI 프롬프트(prompt), 명령(command), 노트(note), 파일, 이미지, 링크를 위한 개발자 지식 허브(knowledge hub)이다.

**출력물(Output):** `prototypes/homepage/`에 `index.html`, `styles.css`, `script.js`

---

## 색상 팔레트(Color Palette)

항목 타입별로 다음 강조 색상(accent color)을 사용하는 다크 테마(dark theme):

- Snippet: `#3b82f6` (파랑)
- Prompt: `#f59e0b` (앰버)
- Command: `#06b6d4` (시안)
- Note: `#22c55e` (초록)
- File: `#64748b` (슬레이트)
- Image: `#ec4899` (핑크)
- URL: `#6366f1` (인디고)

---

## 히어로 섹션(Hero Section, 주요 초점)

히어로는 세 가지 요소를 나란히 배치하여 "혼돈에서 질서로(chaos to order)"라는 개념을 보여준다.

### 혼돈 컨테이너(Chaos Container, 왼쪽)

"Your knowledge today..."라는 라벨이 붙은 상자로, 개발자가 현재 지식을 어디에 흩어놓는지를 나타내는 8개의 떠다니는 아이콘을 담고 있다.

- Notion, GitHub, Slack, VS Code 로고
- 브라우저 탭, 터미널, 텍스트 파일, 북마크 아이콘

**아이콘은 애니메이션(animate)되어야 한다:**

- 무작위로 떠다니며, 벽에 부딪혀 튕김
- 은은한 회전 및 스케일 펄스(scale pulsing)
- 호버 시 마우스 커서에서 멀어지도록 이동

### 변환 화살표(Transform Arrow, 가운데)

혼돈에서 질서로 향하는, 맥동(pulsing)하는 화살표.

### 대시보드 미리보기(Dashboard Preview, 오른쪽)

"...with DevStash"라는 라벨이 붙은 상자로, 단순화된 대시보드 목업(mockup)을 보여준다:

- 내비게이션 항목이 있는 사이드바(sidebar)
- 색상이 있는 상단 테두리(top border)를 가진 항목 카드 그리드(항목 타입 색상 사용)

---

## 기타 섹션(Other Sections)

1. **내비게이션(Navigation)** - 로고, "Features"/"Pricing" 링크, Sign In/Get Started 버튼이 있는 고정 상단 내비게이션

2. **히어로 텍스트(Hero Text)** - 비주얼 위쪽에: 그라디언트 텍스트(gradient text)를 사용한 "Stop Losing Your Developer Knowledge" 헤드라인, 흩어진 지식에 관한 서브헤드라인(subheadline), CTA 버튼

3. **기능(Features)** - 그리드에 6개의 카드: Code Snippets, AI Prompts, Instant Search, Commands, Files & Docs, Collections. 각 카드는 해당 항목 타입의 강조 색상을 사용한다.

4. **AI 섹션(AI Section)** - 두 개의 열: 왼쪽에는 "Pro Feature" 배지(badge)와 AI 기능 체크리스트(checklist). 오른쪽에는 "AI Generated Tags" 데모가 있는 코드 에디터 목업.

5. **가격(Pricing)** - Free($0, 항목 50개, 컬렉션 3개) vs Pro($8/mo, 무제한, AI 기능). Pro 카드는 "Most Popular" 배지로 강조된다. 연간 $72 옵션을 위한 토글(toggle)도 추가한다.

6. **CTA** - "Ready to Organize Your Knowledge?"와 버튼

7. **푸터(Footer)** - 로고, 링크 열(link column), 현재 연도가 표시된 저작권 표기.

---

## 애니메이션(Animations)

- **혼돈 아이콘(Chaos icons)**: requestAnimationFrame을 사용한 JavaScript 애니메이션. 아이콘이 떠다니고, 벽에 튕기며, 마우스 커서로부터 밀려난다.
- **화살표(Arrow)**: CSS 펄스(pulse) 애니메이션
- **스크롤(Scroll)**: 스크롤하여 뷰(view)에 들어오면 요소가 페이드 인(fade in)
- **내비게이션 바(Navbar)**: 스크롤 시 더 불투명해짐

---

## 반응형(Responsive)

- 모바일: 혼돈/화살표/대시보드를 세로로 쌓고, 그리드는 단일 열로
- 화살표는 모바일에서 90° 회전하여 아래를 가리킴

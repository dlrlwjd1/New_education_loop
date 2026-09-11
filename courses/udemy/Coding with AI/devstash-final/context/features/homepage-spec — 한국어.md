# Homepage Spec

> 원문 [homepage-spec.md](homepage-spec.md)의 한국어 번역본입니다.

## 개요(Overview)

정적 HTML 프로토타입(`prototypes/homepage/`)을 `src/app/page.tsx`에 위치한 실제 Next.js 앱 홈페이지로 변환한다. Tailwind CSS와 shadcn/ui 컴포넌트를 사용하여 디자인, 레이아웃, 애니메이션을 충실하게 재현한다.

## 섹션(Sections)

1. **Navbar** - 로고, Features/Pricing 앵커 링크(anchor link), Sign In/Get Started 버튼, 모바일 햄버거 메뉴(hamburger menu)가 있는 고정 상단 내비게이션
2. **Hero** - 그라디언트 텍스트(gradient text) 헤드라인, 부제, CTA 버튼, 혼돈에서 대시보드로 이어지는 비주얼(떠다니는 아이콘 -> 화살표 -> 대시보드 목업)
3. **Features** - 3열 그리드에 배치된 6개의 기능 카드(Code Snippets, AI Prompts, Instant Search, Commands, Files & Docs, Collections)
4. **AI Section** - 분할 레이아웃(split layout): 왼쪽에는 Pro 배지, 헤드라인, 체크리스트; 오른쪽에는 AI가 생성한 태그가 있는 코드 에디터 목업
5. **Pricing** - 월간/연간 토글(toggle), 기능 목록이 있는 Free 및 Pro 가격 카드
6. **CTA** - 헤드라인과 버튼이 있는 최종 클릭 유도(call-to-action)
7. **Footer** - 브랜드 열, Product/Resources/Company 링크 열, 동적 연도(dynamic year)가 표시된 저작권 표기

## 컴포넌트 분해(Component Breakdown)

### 서버 컴포넌트(Server Components, `'use client'` 없음)

- `src/app/page.tsx` - 페이지 셸(shell), 모든 섹션을 조합
- `src/components/homepage/FeaturesSection.tsx` - 정적 기능 카드 그리드
- `src/components/homepage/AISection.tsx` - 코드 목업이 있는 AI 기능 쇼케이스
- `src/components/homepage/CTASection.tsx` - 최종 클릭 유도(call-to-action)
- `src/components/homepage/Footer.tsx` - 링크 열이 있는 푸터

### 클라이언트 컴포넌트(Client Components, `'use client'`)

- `src/components/homepage/Navbar.tsx` - 스크롤 배경 효과, 모바일 메뉴 토글
- `src/components/homepage/HeroSection.tsx` - 혼돈 애니메이션 포함
- `src/components/homepage/ChaosAnimation.tsx` - requestAnimationFrame, 마우스 밀어내기(repulsion), 튕김 물리(bounce physics)를 사용하는 떠다니는 아이콘
- `src/components/homepage/DashboardPreview.tsx` - 정적 미니 대시보드 목업(서버 컴포넌트로 가능하나, 함께 배치(co-location)를 위해 hero와 함께 둠)
- `src/components/homepage/PricingSection.tsx` - 월간/연간 결제 토글, 동적 가격 표시
- `src/components/homepage/ScrollFadeIn.tsx` - IntersectionObserver를 사용하여 스크롤 시 페이드 인 업(fade-in-up) 애니메이션을 추가하는 재사용 가능한 래퍼(wrapper)

## 링크 및 내비게이션(Links & Navigation)

| Element | Destination |
|---------|-------------|
| Logo | `/` |
| Features 링크 | `#features` (앵커 스크롤) |
| Pricing 링크 | `#pricing` (앵커 스크롤) |
| Sign In | `/sign-in` |
| Get Started / Get Started Free | `/register` |
| Start Free Trial (Pro 카드) | `/register` |
| See Features (hero) | `#features` (앵커 스크롤) |

## 기술 노트(Technical Notes)

- 가능한 경우 인라인 SVG 대신 Lucide React 아이콘(이미 설치됨)을 사용
- 내부 라우트에는 `next/link`의 `Link`를 사용하고, 앵커 링크에는 일반 `<a>`를 사용
- 그라디언트 텍스트: 공유 `gradient-text` 유틸리티 클래스 또는 인라인 Tailwind(`bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent`)를 사용
- Navbar 스크롤 효과: `useEffect`에서 `window.scrollY`를 추적하고, 배경 불투명도/테두리 클래스를 토글
- 혼돈 애니메이션: 프로토타입의 `requestAnimationFrame` 루프를 `useEffect`로 이식하되, 리렌더(re-render)를 피하기 위해 ref 기반 상태를 사용. 언마운트(unmount) 시 정리(clean up)
- `ScrollFadeIn` 컴포넌트: 각 섹션의 콘텐츠를 감싸며, `threshold: 0.1`의 IntersectionObserver를 사용하여 CSS 트랜지션(opacity 0->1, translateY 24px->0)을 트리거
- 가격 토글: `isYearly`에 `useState`를 사용하고, `$8/month`를 `$6/month (billed $72/yr)`로 전환
- 모바일 메뉴: 열기/닫기에 `useState`를 사용하고, `md` 브레이크포인트(breakpoint) 아래에서는 데스크톱 내비 링크를 숨기고 햄버거를 표시
- 기본 버튼에는 `variant="default"`, 고스트(ghost) 버튼에는 `variant="outline"`을 사용하는 shadcn `Button` 컴포넌트 사용
- 푸터 연도: 인라인으로 `{new Date().getFullYear()}`만 사용(서버 컴포넌트가 현재 연도를 렌더링)
- globals.css 또는 layout을 통해 html/body에 `scroll-smooth` 추가

## 스타일링(Styling)

- 전부 Tailwind로, 프로토타입의 다크 테마(어두운 배경, 흐릿한 텍스트, 파란색 그라디언트 강조)에 맞춤
- 해당되는 경우 `globals.css`의 기존 CSS 변수(항목 타입 색상 등)를 사용
- 기능 카드 강조 색상은 인라인 스타일 또는 Tailwind 임의값(arbitrary value)으로 지정
- 반응형(responsive): 기능 그리드는 3열 -> 2열 -> 1열, AI 섹션은 나란히(side-by-side) -> 세로로 쌓기(stacked) 등
- 프로토타입의 간격(spacing)과 크기(sizing)를 Tailwind 유틸리티로 합리적인 범위 내에서 최대한 가깝게 유지

## 참고 자료(References)

- `prototypes/homepage/index.html` - 구조
- `prototypes/homepage/styles.css` - 스타일링 참고
- `prototypes/homepage/script.js` - 애니메이션/상호작용 로직
- `context/screenshots/` - 홈페이지 프로토타입 스크린샷

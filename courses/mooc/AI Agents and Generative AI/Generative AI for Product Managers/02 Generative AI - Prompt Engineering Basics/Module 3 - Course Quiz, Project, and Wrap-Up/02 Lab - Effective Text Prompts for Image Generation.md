# 02 Lab: Effective Text Prompts for Image Generation (실습)

## 개요
- GPT Image 2 모델을 사용해 텍스트 프롬프트로 이미지를 생성하고, 스타일 수정자·품질 부스터·가중 용어로 프롬프트를 정제하는 30분 실습

### 학습 목표
- 생성형 AI 플랫폼의 이미지 생성 기능 활용
- 효과적인 이미지 생성을 위해 다양한 이미지 프롬프팅 기법 적용

## 내용

### Step 1 — AI 클래스룸 설정
- 채팅 이름 짓기, 드롭다운에서 **GPT Image 2** 모델 선택

### Step 2 — 텍스트 프롬프트로 이미지 생성
- Prompt Instructions 필드에 맥락 지시 입력(예: "High-resolution images") — 이 지시는 채팅 시작 후 잠금되어 수정 불가
- 메시지 입력창에 "image of a cat" 같은 프롬프트 입력 후 "Start chat" → 이미지 생성(생성된 이미지는 2시간 후 만료)
- "Regenerate response"로 새 이미지 재생성 가능

### Step 3 — 스타일 수정자(Style Modifiers)로 프롬프트 정제
- 예시 스타일: Photographic, Animated, Digital Art, Comic Book, Fantasy Art, Line Art, Analog Film, Neon Punk, Isometric, Origami, Cinematic Pixel Art
- 실습 프롬프트: "Comic art of a cat" → "Image of a cat with neon punk"

### Step 4 — 품질 부스터(Quality Boosters)로 이미지 품질 향상
- 예시 용어: high-resolution, intricate details, hyper-detailed, sharp focus, complementary colors
- 실습 프롬프트: "Create a highly detailed and realistic painting of a cat" → "A cat having complementary colors and charming body"

### Step 5 — 가중 용어(Weighted Terms)로 강조 표현
- 특정 대상/감정에 양수·음수 가중치를 부여해 강조하거나 약화시킬 수 있음
- 실습 프롬프트: "Scenic landscape" → "Generate an Image of a scenic landscape with mountains and a lake"

### 직접 해보기(Try Yourself)
- **스타일 수정자 조합**(쉼표로 구분): "an animated, neon punk image of a cat" / "a lined, digital art image of a cat" / "a comic book-inspired, fantasy art portrayal of a cat" / "an origami-inspired, isometric view of a cat"
- **품질 부스터 조합**: "a lifelike, exquisitely detailed, high-quality image of a cat" / "an exquisite, handcrafted mahogany dining table" / "a sensational, multi-layered chocolate cake" / "a breathtaking, panoramic view of a castle on a hill"
- **감정·세부사항 실험**: "Tranquil beach with crystal-clear water and sands" / "Futuristic cityscape with sleek skyscrapers and illuminated streets"

## 요약
- [01 Text-to-Image Prompts Techniques](01%20Text-to-Image%20Prompts%20Techniques.md)에서 배운 5대 기법 중 **스타일 수정자·품질 부스터·가중 용어** 3가지를 GPT Image 2로 직접 실습
- 실습 흐름: 기본 프롬프트로 이미지 생성 → 스타일 수정자로 예술적 스타일 부여 → 품질 부스터로 디테일·해상도 강화 → 가중 용어로 특정 요소 강조/약화
- 일일 이미지 생성 횟수 제한이 있으므로 플랫폼을 신중하게 사용할 것을 권고

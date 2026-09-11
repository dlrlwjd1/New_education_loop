# 03 Manipulating Images One Pixel At a Time

## 개요
- 강좌: Introduction to Computer Vision and Image Processing (IBM)
- 모듈: Module 2 — Image Processing with OpenCV and Pillow
- ⭐ **자르기(cropping)** 와 **픽셀 값 바꾸기** — 도형 그리기, 텍스트 얹기, 이미지 겹치기.

---

## 내용

### 자르기(cropping) ⭐
> ⭐ **자르기는 이미지의 일부를 잘라내고 나머지를 버리는 것이다.** 슬라이싱으로 한다.
>
> **행은 이미지의 맨 위에서 시작해 아래로, 열은 왼쪽에서 시작해 오른쪽으로 간다.**

```python
A = array1[2:5, 1:3]        # 행 2~4, 열 1~2 선택
A = array1[2:5, 1:3, :]     # ⭐ 콜론은 각 채널을 모두 선택한다는 뜻
```

| 변수 | 뜻 |
|---|---|
| **upper** | **이미지에 포함하고 싶은 첫 행** |
| **lower** | **포함하고 싶은 마지막 행** |
| **left** | **포함하고 싶은 마지막 열** |
| **right** | **포함하고 싶은 첫 열** |

> ⚠️ 강의에서 **right를 "첫 열", left를 "마지막 열"** 이라고 설명한다. 실습에서는 실제 슬라이스 방향을 직접 확인하는 편이 안전하다.

### 픽셀 값 바꾸기 ⭐
> **강도가 전부 0인 이미지를 생각해 보자. 배열 값을 그에 맞게 설정해 원하는 원소를 255로 바꿀 수 있다. 결과는 직사각형 상자가 된다.**
>
> **간단한 도형을 그릴 수 있다.** 강도가 전부 0인 이미지에서 **4번째 행의 특정 열들을 255로 설정**하고 다른 원소도 바꾸면 **얼굴처럼 보이는 결과**가 나온다.
>
> ⭐ **컬러 이미지 배열에도 같은 것을 할 수 있다. 다만 행과 열뿐 아니라 바꾸고 싶은 채널도 지정한다** (예: 빨강 채널).

### 겹치기(paste / superimpose) ⭐
> **이미지 A의 파란 상자를 이미지 I에 더하고 싶다면, 그 파란 상자를 이루는 행과 열을 알고 있으므로 그 값들을 이미지 I에 재대입하면 된다.**

---

## 예시

### PIL — ImageDraw · ImageFont · paste
```python
from PIL import Image, ImageDraw, ImageFont

image_fn = image.copy()                    # ⭐ 먼저 복사한다
image_draw = ImageDraw.Draw(image_fn)      # draw 생성자로 그리기 객체를 만든다

# 사각형 — 중요한 두 파라미터
image_draw.rectangle(xy=[10, 10, 100, 100], fill="red")
#   xy   = 경계 상자(bounding box) 좌표
#   fill = 사각형의 색

# 텍스트 얹기
fnt = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 20)
image_draw.text(xy=(0, 0), text="box", font=fnt, fill=(0, 0, 0))
#   xy   = 텍스트의 좌상단 앵커 좌표
#   text = 그릴 텍스트
#   fill = 텍스트에 쓸 색

# 이미지 겹치기 — 고양이 잘라낸 것을 Lena 위에 올린다
image_lenna.paste(crop_image, box=(left, upper))
#   첫 입력  = 겹칠 이미지
#   box     = 붙여 넣을 이미지의 좌상단 모서리
```

### OpenCV — rectangle · putText
```python
import cv2

# 사각형
cv2.rectangle(image, pt1=(left, top), pt2=(right, lower),
              color=(0, 255, 0), thickness=3)
#   pt1 = 좌상단 좌표, pt2 = 우하단 좌표

# 텍스트
cv2.putText(img=image, text="Stuff", org=(10, 500),
            color=(255, 255, 255), fontFace=4, fontScale=5, thickness=2)
#   text = 얹을 문자열
#   org  = ⭐ 텍스트 문자열의 좌하단 모서리
```

---

## 요약
- **자르기는 슬라이싱**이다. **컬러면 `[행, 열, :]`** 로 모든 채널을 선택한다.
- **픽셀 값을 직접 대입해 도형을 그릴 수 있고**, 컬러면 **채널까지 지정**한다.
- **겹치기 = 대상 영역의 값을 재대입하는 것.**
- **PIL**: `ImageDraw.Draw` → `.rectangle(xy, fill)` · `.text(xy, text, font, fill)` · `Image.paste(im, box)`. ⭐ `xy`는 **좌상단** 앵커.
- **OpenCV**: `cv2.rectangle(pt1=좌상단, pt2=우하단, color, thickness)` · `cv2.putText(org=좌하단)`. ⚠️ **PIL의 텍스트 앵커는 좌상단, OpenCV는 좌하단이다.**
- ⭐ **그리기 전에 `copy()`** — 원본을 망치지 않는다.

## 다음 주제
- [04 Pixel Transformations.md](04%20Pixel%20Transformations.md)

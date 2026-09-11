# 02 Manipulating Images

## 개요
- 강좌: Introduction to Computer Vision and Image Processing (IBM)
- 모듈: Module 2 — Image Processing with OpenCV and Pillow
- ⭐⭐ **복사(copy)의 함정**과 **뒤집기(flip)·회전(rotate)**.

---

## 내용

### ⚠️⚠️ 복사 — 가장 흔한 실수
> **복사는 원본과 독립적인 새 이미지를 만들게 해 준다.**
>
> **`id()` 함수로 객체의 메모리 주소를 찾을 수 있다. baboon 배열을 A에 대입하면 `id()`로 볼 때 메모리 주소가 원본 배열과 같다. `copy` 메서드를 적용해 B에 대입하면 메모리 주소가 다르다.**

```python
A = baboon              # ⚠️ 같은 메모리를 가리킨다
B = baboon.copy()       # ⭐ 새 메모리

baboon[:, :, :] = 0     # baboon을 전부 0으로

# 결과: baboon과 A가 모두 0이 된다 (같은 메모리를 가리키므로)
#       ⭐ B는 copy 메서드를 썼으므로 영향받지 않는다
```
> ⭐ **항상 이미지를 복사할 필요는 없지만, 코드에서 이런 동작을 보게 된다면 그것이 흔한 실수다.**

### 뒤집기(flipping) ⭐
> **뒤집기는 이미지의 방향을 바꾼다. 픽셀(강도)의 인덱스 값을 바꿈으로써 이미지를 뒤집을 수 있다.**
>
> ⭐ **열 인덱스를 행 인덱스로 바꾸면 이미지의 방향이 달라지거나 뒤집힌다.** 예를 들어 **2번째와 5번째 열이 여러 흰 선으로 이루어진 이미지에서 인덱스를 바꾸면 수직선이 수평선으로 나타난다.**
>
> **컬러 이미지의 경우 모든 색 채널을 동시에 변환할 수 있다.**

---

## 예시

### PIL — 뒤집는 방법이 여럿이다
```python
from PIL import Image, ImageOps

im_flip   = ImageOps.flip(image)     # 상하 반전
im_mirror = ImageOps.mirror(image)   # 좌우 반전

# transpose 메서드 — Image 모듈에 뒤집기 종류를 기술하는 내장 속성이 있다
im = image.transpose(Image.FLIP_TOP_BOTTOM)   # 위아래를 뒤집는다
```

### OpenCV — 역시 여러 방법
```python
import cv2

# flip 함수 — 입력은 이미지 배열, 파라미터는 flip code
im_flip = cv2.flip(image, 0)     # ⭐ flipcode = 0 이면 y축을 중심으로 수직 반전

# rotate 함수 — 뒤집기 종류를 기술하는 내장 속성이 있고 값은 정수로 표현된다
im_rot = cv2.rotate(image, cv2.ROTATE_90_CLOCKWISE)   # 입력 이미지를 시계방향 90도 회전
```

---

## 요약
- ⚠️⚠️ **`A = image`는 같은 메모리를 가리킨다. 독립된 사본이 필요하면 `image.copy()`.** 원본을 수정하면 A도 바뀌지만 B는 안 바뀐다. **흔한 실수다.**
- **뒤집기 = 픽셀 인덱스를 바꾸는 것.** 열 인덱스를 행 인덱스로 바꾸면 수직선이 수평선이 된다.
- **PIL**: `ImageOps.flip`(상하) · `ImageOps.mirror`(좌우) · `transpose(Image.FLIP_TOP_BOTTOM)`.
- **OpenCV**: `cv2.flip(img, flipcode)` — **flipcode 0 = y축 기준 수직 반전** · `cv2.rotate(img, cv2.ROTATE_90_CLOCKWISE)`.

## 다음 주제
- [03 Manipulating Images One Pixel At a Time.md](03%20Manipulating%20Images%20One%20Pixel%20At%20a%20Time.md)

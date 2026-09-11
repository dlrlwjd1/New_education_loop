# 01 What Is A Digital Image

## 개요
- 강좌: Introduction to Computer Vision and Image Processing (IBM)
- 모듈: Module 2 — Image Processing with OpenCV and Pillow
- ⭐⭐ **디지털 이미지 = 숫자의 직사각형 배열.** 그리고 **PIL과 OpenCV의 결정적 차이(RGB vs BGR)**.

---

## 내용

### 디지털 이미지의 정체 ⭐⭐
> ⭐⭐ **디지털 이미지는 숫자로 이루어진 직사각형 배열로 해석할 수 있다.**
>
> **회색조(grayscale) 이미지가 이해하기 쉽다 — 여러 회색 음영으로 이루어진 이미지다. 영역을 확대하면 이미지가 픽셀(pixel)이라 불리는 블록의 직사각형 격자로 이루어져 있음을 본다. 이 픽셀들을 강도값(intensity value)이라 불리는 숫자로 표현한다.**

| 값 | 의미 |
|---|---|
| **0** | **검정** |
| **255** | **흰색** |
| 사이 | 회색 음영. **어두운 회색일수록 낮은 값** |

> **실세계에서 이미지는 거의 무한한 값을 가질 수 있지만, 디지털 이미지의 강도값은 0에서 255 사이다. 알고 보면 그것이면 충분하다 — 이미지를 표현하는 데 256개의 강도값.**
>
> ⭐ **대비(contrast)는 이 값들 사이의 차이다.**

### 강도 단계를 줄이면 ⭐
| 강도값 개수 | 결과 |
|---|---|
| **256** | 원본 |
| **32** | **거의 비슷해 보인다** |
| **16** | ⚠️ **대비가 낮은 영역에서 차이가 보이기 시작한다** |
| **8** | **이미지가 이상해 보인다** |
| **2** | ⚠️ **만화처럼 보인다** |

### 인덱스 ⭐
> **결국 우리에게는 숫자 배열이 있다. 높이는 행의 수, 너비는 열의 수다.**
>
> ⭐ **각 픽셀(강도값)은 자기 인덱스를 가진다. 행은 이미지의 맨 위에서 시작해 아래로 내려가고, 열은 왼쪽에서 시작해 오른쪽으로 간다.**
>
> **각 픽셀 값은 센서 격자에서 나온다. 원래의 물체가 있고, 이미지는 그 격자에서 얻은 양자화된 표본(quantized samples)이다.**

### 컬러 이미지 ⭐⭐
> **RGB 이미지는 빨강·초록·파랑 이미지의 조합이다. 이것은 여러 색 표현 중 하나일 뿐이다. 이 색 값들을 서로 다른 채널(channel)로 표현하며, 회색조 이미지처럼 각 채널이 하나의 이미지다.**
>
> ⭐⭐ **회색조 이미지가 정사각형이라면, 컬러 이미지는 정육면체와 같다.**
>
> **행·열 인덱스에 더해 각 채널에 대한 인덱스도 있다** — 이 강의 표기로는 **0=빨강, 1=파랑, 2=초록**.

### 흑백(마스크) 이미지와 비디오
> **객체를 식별하는 데 쓰는 이미지 마스크가 있다. 사람에 해당하는 강도는 1로, 나머지는 0으로 표현된다. 디스플레이가 대비를 조정하므로 0은 검정, 1은 흰색으로 보인다.**
>
> ⭐ **비디오 시퀀스는 이미지의 시퀀스다.** 5개 이미지가 5개 비디오 프레임을 나타낸다.

### 파일 형식
> **널리 쓰이는 두 이미지 형식은 JPEG(Joint Photographic Expert Group)과 PNG(Portable Network Graphics)다. 이 형식들은 파일 크기를 줄이고 다른 기능도 갖고 있다.**
>
> **어떤 파이썬 라이브러리를 쓰든 이미지를 로드해야 한다. 코드가 같은 디렉터리에 있으면 파일 이름만 있으면 되고, 다른 디렉터리면 파일 경로가 필요하다.**

---

## 예시

### PIL(Pillow)
```python
from PIL import Image, ImageOps
import matplotlib.pyplot as plt
import numpy as np

image = Image.open("lenna.png")      # PIL Image 객체 생성
plt.imshow(image)                     # image.show() 대신 matplotlib 사용

image.format   # 확장자/형식
image.size     # (너비, 높이) 픽셀 수
image.mode     # 색 공간 — 여기서는 'RGB'

# 회색조 변환 — ImageOps 모듈에 기성 영상처리 연산이 여럿 있다
gray = ImageOps.grayscale(image)
gray.mode      # 'L' = luminance(휘도)
gray.save("lenna_gray.jpg")           # PNG → JPEG 변환도 된다

# 양자화 — 입력은 양자화 단계 수
gray.quantize(256 // 2)

# 채널 분리 — 각 RGB 채널을 회색조 이미지로 얻는다
red, green, blue = image.split()
plt.imshow(red, cmap='gray')          # 빨간 픽셀이 높은 강도로 보인다

# PIL 이미지 → NumPy 배열
arr = np.array(image)
```

### OpenCV ⭐⭐
```python
import cv2

# imread — 결과는 8비트 부호 없는(unsigned) 강도값의 NumPy 배열
image = cv2.imread("lenna.png")
image.shape

# ⚠️⚠️ 그냥 imshow 하면 색이 이상하다 — OpenCV는 BGR, PIL은 RGB다
image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
plt.imshow(image_rgb)

# 회색조
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# 저장 — 입력은 경로와 이미지 배열
cv2.imwrite("lenna_gray.jpg", gray)

# 회색조로 바로 로드하려면 컬러 코드를 지정해야 한다
gray = cv2.imread("lenna.png", cv2.IMREAD_GRAYSCALE)

# 슬라이싱으로 채널 분리 — 마지막 인덱스가 색 채널
blue, green, red = image[:, :, 0], image[:, :, 1], image[:, :, 2]
```

### ⚠️⚠️ PIL vs OpenCV
| | PIL(Pillow) | OpenCV |
|---|---|---|
| **채널 순서** | ⭐ **RGB** | ⚠️⚠️ **BGR** |
| **기능** | 상대적으로 단순 | ⭐ **기능이 더 많지만 쓰기 더 어렵다** |
| 강좌에서 | 일부 작업에 사용 | **주 도구** |

> **이것이 PIL과 OpenCV 배열의 주된 차이다.**

---

## 요약
- ⭐⭐ **디지털 이미지 = 숫자의 직사각형 배열.** 회색조는 **0(검정)~255(흰색)** 의 강도값, **대비 = 값들 사이의 차이.**
- **강도 단계를 줄이면** 32까지는 비슷하지만 **16부터 저대비 영역에서 티가 나고 2에서는 만화가 된다.**
- **인덱스는 행이 위→아래, 열이 왼쪽→오른쪽.**
- ⭐⭐ **컬러 이미지는 채널이 쌓인 정육면체.** 회색조가 정사각형이라면 컬러는 큐브.
- **PIL**: `Image.open` · `.format/.size/.mode` · `ImageOps.grayscale`(mode `L`) · `.quantize` · `.split()`.
- **OpenCV**: `cv2.imread` · `cv2.cvtColor` · `cv2.imwrite` · `IMREAD_GRAYSCALE`.
- ⚠️⚠️ **PIL은 RGB, OpenCV는 BGR.** 이걸 놓치면 색이 뒤집혀 나온다.

## 다음 주제
- [02 Manipulating Images.md](02%20Manipulating%20Images.md)

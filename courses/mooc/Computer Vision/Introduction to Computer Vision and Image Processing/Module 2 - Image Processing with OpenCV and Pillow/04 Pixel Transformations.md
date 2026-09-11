# 04 Pixel Transformations

## 개요
- 강좌: Introduction to Computer Vision and Image Processing (IBM)
- 모듈: Module 2 — Image Processing with OpenCV and Pillow
- ⭐⭐ **히스토그램 · 강도 변환 · 임계화(thresholding)와 단순 분할(segmentation).** 이 강의는 **회색조 이미지만** 다루고 **OpenCV를 쓴다**(필요한 함수가 다 있어서).

---

## 내용

### 히스토그램 ⭐⭐
> ⭐ **히스토그램은 픽셀의 발생 횟수를 센다. 이미지를 이해하고 조작하는 데 유용한 도구다.**
>
> 강도값이 셋뿐인 장난감 이미지라면 **검정 픽셀 1개, 회색 5개, 흰색 2개** 같은 식으로 센다. **픽셀을 세는 대신 강도값을 셀 수도 있다.**
>
> ⭐ **배열의 인덱스가 강도 준위 `r`이다. 대부분의 이미지에서 256개 준위가 있고, 서로 다른 회색 준위의 개수를 담는다.**

```python
hist = cv2.calcHist([image], channels=[0], mask=None,
                    histSize=[256], ranges=[0, 256])
#   [image]   = 이미지
#   channels  = 계산할 채널 (여기서는 회색조)
#   histSize  = 채널 수(빈 개수)
#   ranges    = 강도값의 범위
```
> **막대 그래프로 그리면 어두운 부분은 낮은 강도, 밝은 영역은 높은 값에 매핑된다.**

### 강도 변환(intensity transformation) ⭐⭐
> ⭐⭐ **강도 변환은 이미지를 한 번에 한 픽셀씩 바꾼다.** (일부 영상 변환은 이웃 픽셀에 의존하지만, 강도 변환 `T`는 **이미지 배열 `f`의 단 하나의 점 `(i, j)`에만 의존**한다.)
>
> **이미지 배열 `f`가 배열 `g`로 변환된다. 이 변환은 회색 준위의 강도 `r`에도 작용해 `s`로 매핑한다. 이것이 히스토그램을 바꾼다.**

```
g(i,j) = T( f(i,j) )        s = T(r)
```
> **변환을 적용하면 히스토그램이 이동하고 스케일된다.** 예컨대 **`r=0`이 `1`로, `r=1`이 `3`으로 매핑되면, `histogram_r`의 `r=1` 위치의 값 5가 `histogram_s`의 `s=3`으로 옮겨 간다.**

### ① 이미지 네거티브(image negatives) ⭐
> **강도 준위를 뒤집는 것.** 세부가 잘 안 보이는 이미지에 적용하면 **세부가 훨씬 뚜렷해진다.**

```
s = 255 - r          # (L−1) − r, L = 256
```
> **이 함수는 낮은 강도값 0, 1을 255, 254로 매핑한다. 히스토그램을 뒤집는다.**

### ② 밝기·대비 — 선형 변환 ⭐⭐
> **선형 변환은 밝기와 대비 조정을 적용하는 것으로 볼 수 있다.**

```
new_image = α · image + β
```
| 파라미터 | 역할 |
|---|---|
| ⭐ **α (alpha)** | **단순 대비(contrast) 조절** |
| ⭐ **β (beta)** | **단순 밝기(brightness) 조절** |

```python
new_image = cv2.convertScaleAbs(image, alpha=alpha, beta=beta)
```
> ⭐ **배열 연산 대신 `convertScaleAbs`를 쓴다. 이 함수는 스케일하고 절댓값을 계산해 강도값이 0~255 범위에 들어가게 한다.**

**관찰** ⭐
- **β만 바꾸면 밝기가 조정된다.** 이미지가 훨씬 밝아지고 **히스토그램이 오른쪽으로 이동**한다. ⚠️ **많은 강도값이 255로 매핑된다.**
- **α를 바꾸면 대비가 바뀐다.** ⭐ **어두운 영역의 대비가 개선되지만 밝은 영역은 씻겨 나간(washed out) 것처럼 보인다.** 히스토그램에서 **낮은 값들은 더 퍼지지만 큰 값들 상당수가 255로 매핑**되어 이것이 씻겨 나간 이유를 설명한다.

### ③ 히스토그램 평활화(histogram equalization) ⭐⭐
> **비선형 함수도 쓸 수 있지만, 대비를 최적화하는 알고리즘을 보자.**
>
> ⭐⭐ **히스토그램 평활화는 이미지의 히스토그램을 이용해 대비를 조정하는 알고리즘이다. `equalizeHist` 함수는 히스토그램을 평평하게 만드는 변환을 히스토그램으로부터 결정해 대비를 개선한다.**

```python
new_image = cv2.equalizeHist(image)
```

### ④ 임계화(thresholding)와 분할(segmentation) ⭐⭐
> ⭐⭐ **임계 함수는 모든 픽셀에 임계값을 적용한다. 이미지에서 객체를 추출하는 데 쓸 수 있다. 이것을 분할(segmentation)이라 한다.**

**의사 코드**
```
각 픽셀 (i, j)에 대해:
    if input_img[i,j] > threshold:  image_out[i,j] = max_value   # 보통 1 또는 255
    else:                            image_out[i,j] = 0
```
> 예: **임계값 1, min 0, max 255**로 돌리면 **결과는 새 이미지 배열의 값이 전부 흰색 아니면 검정**이 된다.

**cameraman 예제** ⭐
> **이 이미지의 히스토그램은 쌍봉(bimodal)이다. 카메라맨은 첫 번째 봉우리(강도 87 미만)에 해당하고 두 번째 봉우리는 배경이다. 임계값을 그에 맞게 설정하면 카메라맨을 분할할 수 있다.**

```python
ret, new_image = cv2.threshold(image, thresh, max_value, cv2.THRESH_BINARY)
#   thresh     = 임계값
#   max_value  = 255
#   type       = THRESH_BINARY → 출력이 0 아니면 255

# ⚠️ 임계값을 고르기 어려울 때가 있다 → OTSU 방법으로 자동 선택
ret, otsu = cv2.threshold(image, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
#   ret = ⭐ 자동으로 결정된 임계값
```
> ⭐ **OTSU로 얻은 이미지는 수동 임계값을 쓴 것과 동일해 보인다.**

---

## 요약
- ⭐⭐ **히스토그램 = 강도값의 발생 횟수.** `cv2.calcHist`. 이미지를 이해·조작하는 출발점.
- ⭐⭐ **강도 변환 `s = T(r)`은 한 픽셀에만 의존한다.** 히스토그램을 이동·스케일한다.
- **네거티브**: `s = 255 − r` — 히스토그램을 뒤집고 어두운 이미지의 세부를 드러낸다.
- ⭐⭐ **선형 변환 `α·image + β`** — **α = 대비, β = 밝기.** `cv2.convertScaleAbs`가 0~255로 잘라 준다. ⚠️ **과하면 밝은 영역이 255로 몰려 washed out 된다.**
- ⭐⭐ **히스토그램 평활화 `cv2.equalizeHist`** — 히스토그램을 평평하게 만드는 변환을 자동으로 찾아 대비를 개선한다.
- ⭐⭐ **임계화 = 가장 단순한 분할.** `cv2.threshold(..., THRESH_BINARY)`. **히스토그램이 쌍봉이면 두 봉우리 사이에 임계값**을 둔다. ⭐ **`THRESH_OTSU`가 임계값을 자동으로 골라 준다.**

## 다음 주제
- [05 Geometric Operations.md](05%20Geometric%20Operations.md)

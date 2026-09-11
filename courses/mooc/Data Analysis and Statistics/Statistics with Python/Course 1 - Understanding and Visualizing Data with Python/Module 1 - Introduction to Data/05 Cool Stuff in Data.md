# (Cool Stuff in) Data

## 개요
- 데이터는 숫자만이 아니다 — 이미지, 텍스트(단어), 오디오 등 무엇이든 데이터가 될 수 있다
- 각 데이터 형태별로 오늘날 가능한 흥미로운 응용 사례를 소개한다
- 역사적 사례로 통계학의 창시자 중 한 명인 Florence Nightingale을 다룬다

## 내용
### 강사 소개
Julie Deeke는 University of Michigan 통계학과 박사과정생으로, 단일세포 RNA 시퀀싱(single-cell RNA sequencing) 데이터 응용 — 배치 효과(batch effect)를 분리해 내는 방법 등 — 을 연구한다. 통계에 끌린 이유는 숫자로부터 이야기를 끌어내고, 처음에는 복잡해 보이는 숫자들에서 온갖 정보를 추출할 수 있다는 점이었다.

### 데이터는 숫자다 (data as numbers)
사람들이 데이터라고 하면 흔히 떠올리는 형태 — 스프레드시트. 이 코스에서 계속 사용할 NHANES(National Health and Nutrition Examination Survey)는 CDC가 수집하며, 많은 숫자가 담긴 표 형태다. 예컨대 성별(gender) 변수는 여성/남성 여부를 숫자로 표현한다.

### 데이터는 이미지다 (data as images)
- **아이겐페이스(Eigenfaces)**: 얼굴을 숫자로 표현하는 기법. 연구자는 이미지 속 얼굴을 숫자로 나타내 다양한 일을 할 수 있다.
- **얼굴 스왑·인식**: Snapchat의 얼굴 바꾸기(face swapping)에서 아이겐페이스가 얼굴 위치 식별에 유용하게 쓰인다. 스마트폰 카메라는 사진 촬영 시 얼굴에 박스를 표시해 정확도와 해상도를 맞추고, Facebook은 업로드한 사진에서 얼굴 인식(facial recognition)으로 사람을 태그할 수 있다.
- **위성 이미지(satellite images)**: 해안선 위치 추정, 특정 지역의 산림 면적 추정, 폭풍 시스템(storm system)의 진행 추적과 사후 피해 평가에 쓰인다.
- **Quick, Draw! with Google**: 낙서를 그리면 신경망(neural net)이 무엇인지 인식하는 데모. 강사는 배낭·비행기 등 처음 세 개는 인식에 성공했지만 나머지 세 개(예: short monster)는 실패했고, 다른 사람들이 어떻게 그렸는지와 자신의 그림이 곰·바다거북·테디베어에 가깝게 인식됐음을 확인할 수 있었다.

### 데이터는 단어다 (data as words)
- **텍스트 생성**: Botnik이 해리 포터(Harry Potter) 전체 7권의 텍스트에 여러 알고리즘과 예측 텍스트(predictive text) 기법을 적용해 새로운 챕터("Harry Potter and the Portrait of What Looked Like a Large Pile of Ash")를 생성했다. 단어에 담긴 데이터로 무엇을 할 수 있는지 보여 주는 사례.
- **전자 건강 기록(electronic health records)**: 건강 기록 속 많은 단어에는 많은 데이터가 담겨 있다. 이름 등 식별 정보로 여러 기관의 기록을 매칭하면 전체 건강 이력을 파악할 수 있다.
- **문서 분류(document classification)**: 문서에 사용된 단어를 보고 신문의 비즈니스/스포츠/지역 섹션 중 어디에 속하는지 추정할 수 있다.
- **단어 임베딩과 편향 제거(debiasing word embeddings)**: 단어에는 의미와 함축(connotation)이 임베딩되어 있다. "Man is to Computer Programmer as Woman is to Homemaker" 같은 논문처럼, 임베딩에 편향이 있으면 이를 제거(debias)하려는 연구가 있다.

### 데이터는 오디오다 (data as audio)
- **음악 식별**: Shazam 등 앱은 라디오에서 들은 노래의 제목과 아티스트를 식별해 준다.
- **음성 편집**: Adobe Suite 응용 프로그램으로 목소리를 바꾸거나 음성의 여러 부분을 재배치할 수 있다.
- **음성 복제(voice replication)**: 어떤 사람이 약 50단어 정도 말한 클립만 있으면, 그 사람이 실제로 말하지 않은 내용을 말한 것처럼 들리는 음성을 만들어 낼 수 있다.

### 역사적 사례 — Florence Nightingale
많은 사람이 Florence Nightingale을 간호학의 창시자로 알지만, 그녀는 통계학의 주요 창시자 중 한 명이기도 하다. 크림 전쟁(Crimean War)의 간호사였던 그녀는 환자에 대한 정보 수집과 그 데이터에 담긴 내용의 이해를 강력히 주장했다. 각 부상병 환자의 정보를 체계적으로 기록했고, **콕스콤 그래프(Coxcomb graph)**라 이름 붙인 그래프를 만들었다 — 오늘날의 시계열(time series), 상자그림(box plot), 원그래프(pie chart) 등 많은 그래프의 토대가 됐다. 이를 통해 군대의 사망 원인 — 질병으로 인한 예방 가능한 사망, 부상으로 인한 사망, 전체 사망률 — 을 살펴보고, 사망률이 시간에 따라 그리고 계절에 따라 어떻게 달라지는지 비교했다.

## 요약
- 데이터는 숫자(NHANES 스프레드시트), 이미지(아이겐페이스, 얼굴 인식, 위성 이미지), 단어(텍스트 생성, 건강 기록, 문서 분류, 단어 임베딩), 오디오(Shazam, 음성 편집·복제) 등 어떤 형태든 될 수 있다
- Google Quick, Draw!는 신경망이 낙서를 인식하는 과정을 체험하게 해 준다
- Florence Nightingale은 체계적 데이터 기록과 콕스콤 그래프로 통계학·데이터 시각화의 토대를 놓았다
- 데이터는 우리 주변 어디에나 있다

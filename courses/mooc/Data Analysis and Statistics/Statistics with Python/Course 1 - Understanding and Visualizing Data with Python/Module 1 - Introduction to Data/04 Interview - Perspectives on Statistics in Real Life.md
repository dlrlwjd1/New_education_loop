# Interview: Perspectives on Statistics in Real Life

## 개요
- Brenda Gunderson이 진행하는 인터뷰. 게스트는 Brady West(서베이 방법론·통계)와 Ambuj Tewari(통계·머신러닝)
- 각자의 연구(비확률 표본의 편향 평가, 모바일 헬스), 코스에서 쓰는 NHANES 데이터, Python 예찬, 연구자와 학습자를 위한 조언을 다룬다

## 내용
### Brady West — 서베이 방법론 연구자
- 직함: University of Michigan, Institute for Social Research(ISR) 산하 Survey Research Center의 Research Associate Professor.
- 주 업무는 연구 제안서(research proposal)를 써서 정부·민간 기관의 연구비를 확보하고, 서베이 방법론(survey methodology)과 서베이 통계(survey statistics) 분야의 기초 연구를 수행하는 것. 확보한 연구비는 본인의 방법론 개발·논문 작성과 학생 지원에 쓰인다.
- ISR에는 서베이 방법론 석·박사 과정이 있어 일반 연구 교수와 달리 학기마다 강의도 하고 여름 프로그램에서도 가르친다. 교육·멘토링과 기초 연구, 캠퍼스 내 협업의 균형을 맞추며 일한다.

### Brady의 연구 프로젝트 — 비확률 표본의 편향 평가
- 박사 논문에서 저명한 통계학자 Rod Little과 함께한 연구를 확장해, NIH 연구비로 **비확률 표본(non-probability sample)의 잠재적 편향(bias) 평가** 연구를 진행 중이다.
- 이 전문과정에서도 확률 표본추출(probability sampling)과 비확률 표본추출의 차이를 다룬다. Facebook에서 모집한 사람들이나 Twitter 데이터처럼 잘 설계된 확률 표본이 아닌 데이터셋에서 추정치를 만들 때, 잠재적 편향을 정량화할 이론적으로 탄탄한 지표(metric)를 개발하고 있다(동료 Phil Boonstra, 학생 Jingwei Wu, Chen Chen과 협업).
- 미시간 생물통계학과의 **Genes for Good** 프로젝트(Facebook으로 참가자 모집, 암 위험 요인과 유전 데이터 수집)에 이 지표를 적용해, 같은 유전 데이터를 수집하는 벤치마크 확률 표본인 **Health and Retirement Study(HRS)**의 유전 프로파일과 비교하는 작업을 하고 있다. 다원유전자 점수(polygenic score) 같은 유전 데이터도 새로 배우는 중 — "통계학에는 지루한 순간이 없고 늘 새로 배운다."

### Ambuj Tewari — 통계학과 머신러닝
- 직함: 통계학과와 전기공학·컴퓨터과학과(EECS)의 Associate Professor. 두 학문은 데이터 과학 흐름 속에서 점점 가까워지고 있다.
- 연구 분야는 머신러닝(machine learning). 역사적으로 인공지능(AI) 연구에서 나왔으며, 지능적인 기계를 만들려면 모든 것을 프로그래밍하는 대신 기계가 스스로 경험에서 배우게 해야 한다는 아이디어에서 출발했다. 지금 머신러닝은 휴대폰, Google, Facebook 등 어디에나 있다.
- 미시간의 학부 데이터 과학 전공과 2018년 가을 출범하는 데이터 과학 석사 과정에 참여. 데이터 과학은 계산적 사고(computational thinking)와 추론적 사고(inferential thinking)를 과학·비즈니스 등의 문제 해결에 접목하는 것이다.

### Ambuj의 연구 프로젝트 — 모바일 헬스(mobile health)
- 미시간에 온 뒤 Susan Murphy와 함께 모바일 헬스 분야 연구를 시작했다. 중독 연구용 데이터 수집 모바일 앱이 National Institute on Drug Abuse가 후원한 전국 대회에서 수상했다.
- 진행 중인 **Intern Health Study**(정신의학과 Sen 교수 주도): 의료 인턴은 장시간 근무와 불규칙한 일정 등으로 매우 스트레스가 높아 상당수가 우울증을 겪는다. 인턴들에게 스마트폰을 지급해 기분(mood), 활동, 수면 데이터를 수집하고, 우울 에피소드를 발생 전에 예측해 개입(intervene)할 수 있는지 연구한다.

### NHANES 데이터 소개
- **NHANES**(National Health and Nutrition Examination Survey)는 CDC(Centers for Disease Control)가 미국 인구의 건강, 새로운 건강 수요, 하위집단 간 건강 격차(health disparities)를 파악하기 위해 약 2년 주기로 지속 수행하는 주요 전국 건강 조사다. 이 전문과정의 많은 데이터셋이 NHANES의 변형이다.
- NHANES는 **군집 표본(cluster sample)**의 좋은 예다. 전국에서 개인을 무작위로 뽑는 대신, 지리적 영역(geographic area)을 무작위로 선택한 뒤 그 영역 안에서 개인을 무작위 표본추출해 조사에 초대한다.
- 본조사에서는 혈압, 혈액 특성, 체중 같은 신체 측정(physical measurement)을 수집한다. 이를 위해 CDC는 의료 장비와 전문 인력을 실은 대형 세미트레일러를 표본 지역으로 몰고 가서 측정을 수행한다. 개별 가정 진입로에 트레일러를 댈 수 없으므로 지역 단위 군집 표본이 필요에 의해 생긴 것이다.
- NHANES는 미국 인구 건강에 대한 매우 중요한 데이터 자원이자 군집 표본추출 교육의 좋은 예다. 연구자는 데이터를 내려받아 다양한 관계·특성·분포에 대한 전국 추정치를 만들 수 있다.

### Python에 대하여 (Ambuj)
- 머신러닝 분야는 과거 Matlab을 많이 썼지만, 범용 언어로 개발된 Python이 커뮤니티의 노력으로 NumPy, SciPy, Pandas 같은 훌륭한 데이터 과학·수치·과학 계산 라이브러리 생태계를 갖추게 됐다.
- Python은 빨리 익힐 수 있어 가르치기 좋은 언어이며 "언어가 사용자와 함께 성장한다." 시작하는 데 드는 노력은 적지만 갈 수 있는 곳에는 한계가 없다 — 모바일 개발, 웹 개발, 데이터 과학 등 다양한 문제 영역에서 통한다. 온라인 커뮤니티에서 질문하고 답하며 배울 수도 있다.

### 연구자를 위한 조언
- **Brady**: 약 20년의 컨설팅(CSCAR) 경험에서 — 연구 프로젝트를 설계할 때 **처음부터 도움을 구하는 것을 두려워하지 말라**. 필요한 표본 크기, 사용할 분석 기법, 설계할 측정 도구(instrument) 등을 통계학자·서베이 방법론자 등 전문가와 초기에 상의해야 한다. 설계가 75% 진행된 뒤에 찾아오면 초기 대화로 막을 수 있었던 설계 결함이 많다. 한 학기짜리 수업 지식만으로 모든 걸 해내려 하면 "좋게 끝나지 않을 것"이다.
- **Ambuj**: **윤리(ethics)와 책임(responsibility)**. 데이터 기반·알고리즘 의사결정이 수감, 채용, 해고 같은 결정을 내리는 시대에는 문제가 생겼을 때 조사할 수 있는 책무성(accountability) 장치가 있어야 한다. NSF도 제안서를 지적 가치(intellectual merit)뿐 아니라 더 넓은 영향(broader impacts)으로 평가한다. 자율주행차 사고의 책임은 누구에게 있는가 — 책임, 신뢰, 프라이버시, 공정성(fairness)에 대한 고민이 지금 매우 중요하다.

### 가르치는 일에 대하여
- **Brady**: 대학원생 대상의 통계 모델링 응용 수업(다층 모형 multilevel modeling, 구조방정식 모형 structural equation modeling, 분류·회귀 나무 classification and regression trees, 종단 자료 분석 longitudinal data analysis)을 직접 설계해 가르쳤다. 학생들은 각 영역에서 연구 질문을 만들고 데이터셋을 찾아 모형을 적합(fit)하고 해석해 학기 동안 논문 4편을 쓴다(코드 부록 포함, R·Python 등 자유). 응용 표본추출(applied sampling) 수업에서는 층화 표본추출(stratified sampling), 군집 표본추출, 가중치(weights) 활용을 가르치고, ISR Summer Institute에서는 복잡 표본설계 데이터 분석을 가르친다. 최근 NIH R25 지원으로 **반응형 서베이 설계(responsive survey design)** — 데이터 수집 진행 중에 수집 모드 전환 등 설계 파라미터를 데이터 기반으로 수정하는 새로운 분야 — 단기 코스 11개를 운영했다.
- **Ambuj**: 확률 입문, 데이터 과학을 위한 R 입문, Python 과목 등 프로그래밍 기반 수업을 가르쳤다. 프로그래밍 수업의 즐거움은 학생들이 강력한 도구로 무언가를 직접 만들어 와서 보여 주는 것. "대부분의 사람은 가르치고 싶어서가 아니라 배우고 싶어서 가르친다. 무언가를 배우는 최고의 방법은 그것을 가르치는 것이다."
- **Brenda**: 수천 명 규모의 통계 입문 강의에서 클리커 질문(clicker question)으로 강의를 나누고, 100% 정답이 나오면 카트휠(cartwheel)을 약속한다. 이 코스의 카트휠 데이터셋은 팀 동료들이 실제 카트휠을 해서 이동 거리, 관련 특성, 품질 평점(quality rating) 등을 측정한 것이다.

### 학습자를 위한 조언
- **Brady**: 은사 Julian Faraway의 말 — "직접 앉아서 해 보기 전까지는 통계를 결코 제대로 배울 수 없다." 영상을 보고 개념을 이해하는 데서 그치지 말고, 데이터를 내려받아 코드를 쓰고 분석을 돌리고 결과를 해석하라. 실수를 하고 에러 메시지를 보라. 이 전문과정의 데이터셋을 넘어 다른 데이터를 찾아 같은 기법을 적용해 보라. 연습할수록 더 나은 통계학자·데이터 분석가가 된다.
- **Ambuj**: 실수를 두려워하지 말라 — 실수가 곧 성공으로 이어진다. 도움을 구하는 것을 두려워하지 말라(토론 게시판, 더 넓은 커뮤니티, Wikipedia 등 무료 자료, 오픈소스인 Python과 R). 지금은 데이터 과학을 하기에 "황금기"다. 그리고 남을 도와라 — 가르치며 배우듯 서로 도우며 배운다.

## 요약
- Brady West: 서베이 방법론 연구자. 비확률 표본(Facebook·Twitter 등)의 편향을 정량화하는 지표를 개발, Genes for Good와 HRS 유전 데이터 비교에 적용 중
- Ambuj Tewari: 머신러닝 연구자. 모바일 헬스 연구로 의료 인턴의 우울 증상을 스마트폰 데이터로 예측·개입하는 Intern Health Study 진행
- NHANES: CDC의 전국 건강·영양 조사로 군집 표본추출의 대표 사례이며 이 코스의 주요 데이터셋
- Python은 NumPy·SciPy·Pandas 생태계와 커뮤니티 덕에 배우기 쉽고 한계 없이 성장하는 언어
- 연구 조언: 설계 초기에 전문가와 상의하라, 연구의 윤리·사회적 영향을 고민하라
- 학습 조언: 직접 데이터로 코드를 돌려 봐야 통계가 몸에 붙는다. 실수를 두려워하지 말고 도움을 주고받아라

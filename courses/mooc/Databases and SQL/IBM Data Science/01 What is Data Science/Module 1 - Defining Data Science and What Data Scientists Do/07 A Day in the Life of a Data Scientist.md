# A Day in the Life of a Data Scientist

## 개요
- 강좌: What is Data Science?
- 모듈: Defining Data Science and What Data Scientists Do
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/what-is-datascience/lecture/qp9yD/a-day-in-the-life-of-a-data-scientist)
- [음악] 저는 큰 조직의 일원으로서 추천 엔진을 구축해 봤고, 모든 유형의 엔지니어들과 함께 일하며 다양한 부분의 문제들을 마주했습니다 이는 제가 가장 만족하는 것들 중 하나인데, 그 이유는 경영진부터 엔지니어나 개발자들까지, 모든 사람들의 입장에서 쉽게 이해할 수 있는 아주 간단한 해결책을 마침내 찾았기 때문입니다 궁극적으로, 그건 매우 복잡한만큼 효과적이었습니다 그들은 더 많은 시간을 할애해야 할 수도 있었습니다 대학생 때, 녹조 현상을 예측해야 하는 문제에 당면했었습니다 녹조 현상이 발생하면 물에 독성이 생기고, 이는 수자원 관리 회사에 문제를 일으킬 수 있습니다 저희의 화학 공학 지식들로는 그것을 예측할 수 없었습니다 그래서 저희는 인공 신경망을 사용하여 녹조들이 언제 생길지 예측했습니다 수자원 관리 회사에서 이 문제를 더 잘 해결할 수 있도록 말입니다 토론토에 있는 대중 교통들은 토론토 교통국에 의해 운영됩니다 저희는 이를 TTC라고 부릅니다 토론토 교통국은 북미 지역에서 가장 큰 대중 교통 당국입니다 어느날, 토론토 교통국에서 저에게 연락하여 "저희에게 문제가 있습니다"라고 했습니다 저는 "문제가 뭐죠?
- " 라고 물어봤습니다 그들은 대답했죠 "불평사항 신고 관련 데이터가 있는데, 이걸 분석하고 싶습니다 당신의 도움이 필요합니다" 저는 "기꺼이 도와드리겠습니다" 라고 했습니다 제가 "불평사항 신고가 얼마나 있죠?

## 내용
### 핵심 내용
- [음악] 저는 큰 조직의 일원으로서 추천 엔진을 구축해 봤고, 모든 유형의 엔지니어들과 함께 일하며 다양한 부분의 문제들을 마주했습니다 이는 제가 가장 만족하는 것들 중 하나인데, 그 이유는 경영진부터 엔지니어나 개발자들까지, 모든 사람들의 입장에서 쉽게 이해할 수 있는 아주 간단한 해결책을 마침내 찾았기 때문입니다 궁극적으로, 그건 매우 복잡한만큼 효과적이었습니다 그들은 더 많은 시간을 할애해야 할 수도 있었습니다 대학생 때, 녹조 현상을 예측해야 하는 문제에 당면했었습니다 녹조 현상이 발생하면 물에 독성이 생기고, 이는 수자원 관리 회사에 문제를 일으킬 수 있습니다 저희의 화학 공학 지식들로는 그것을 예측할 수 없었습니다 그래서 저희는 인공 신경망을 사용하여 녹조들이 언제 생길지 예측했습니다 수자원 관리 회사에서 이 문제를 더 잘 해결할 수 있도록 말입니다 토론토에 있는 대중 교통들은 토론토 교통국에 의해 운영됩니다 저희는 이를 TTC라고 부릅니다 토론토 교통국은 북미 지역에서 가장 큰 대중 교통 당국입니다 어느날, 토론토 교통국에서 저에게 연락하여 "저희에게 문제가 있습니다"라고 했습니다 저는 "문제가 뭐죠?
- " 라고 물어봤습니다 그들은 대답했죠 "불평사항 신고 관련 데이터가 있는데, 이걸 분석하고 싶습니다 당신의 도움이 필요합니다" 저는 "기꺼이 도와드리겠습니다" 라고 했습니다 제가 "불평사항 신고가 얼마나 있죠?
- "라고 물었더니 그들은 "조금 있습니다"라고 말했습니다 "얼마 정도 있나요"라고 물었더니 "50만개 정도 있습니다"고 했죠 저는 "그럼 일해봅시다"라고 말했습니다 그래서 데이터를 받아서 분석하기 시작했습니다 기본적으로, 그들은 몇몇 데이터를 표 형식이나 구조화되지 않은 데이터로 잘 보존해 놓았습니다 이 경우, 표 형식 데이터는 언제 불평사항 신고를 했는지, 누가 이를 받았는지, 어떤 종류의 불만인지, 불평사항이 해결되었는지, 누구의 잘못이었는지에 대한 것이었죠 그리고 구조화되지 않은 부분은 이메일과 팩스 기록이었습니다 여러분, 상상해보세요 어떻게 이메일 기록 50만 개를 확인해보고, 거기서 답을 도출해낼까요 그래서 저는 이 데이터를 이용한 작업을 시작했습니다 제가 가장 먼저 알고 싶었던 것은 불평사항들의 원인이었죠 불만사항들에 패턴이 있는지, 다른 날들보다 많이 접수된 날이 있는지 알고 싶었어요 그래서 저는 데이터를 살펴보고, 이를 모두 다른 형식들로 분석했습니다 하지만 저는 어떤 날에는 불만사항을 많아지게 만들고, 어떤 날에는 불만사항을 적어지게 만드는 원인을 찾지 못했죠 그리고 저는 한 달 넘게 계속 분석했습니다 그러던 어느 날, 토론토에서 저는 버스에서 내리고 있었습니다 저는 여전히 그 문제에 대해 고민하고 있었죠 땅을 보지 않고 발을 디뎠을 때, 저는 물웅덩이에 빠졌습니다 제 발목까지 물에 잠겼어요 한 발은 물에 젖고, 한 발은 물에 젖지 않았죠 저는 정말 짜증이 났습니다 그리고 길을 걸어가는데, 갑자기 뭔가 떠올랐습니다 그리고 말했죠 "아, 잠깐만 오늘 예상치 못하게 갑자기 비가 내렸어 나는 비가 올지 몰랐지 그래서 내가 원하지 않았지만 내 발이 젖은거야 기상이변과 토론토 교통국이 받는 불만사항 사이에 어떠한 관계가 있는 것은 아닐까?
- " 그래서 저는 캐나다 환경부 웹 사이트에 접속하였고, 비, 강수량, 풍속, 일조량 등에 관한 데이터를 모았습니다 거기에서 저는 매우 흥미로운 점을 발견했는데요 불만사항 접수가 가장 많았던 상위 10일은 날씨가 나빴던 날들이었습니다 예상치 못했던 비가 내리거나 기온이 급격하게 떨어지거나 눈이 너무 많이 내리거나, 바람이 너무 많이 불었던 날들이었죠 저는 토론토 교통국 경영진을 만나 이렇게 말했습니다 "좋은 소식과 나쁜 소식이 있습니다 먼저 좋은 소식입니다 왜 특정한 날에 유독 많은 불만사항이 접수되는지, 그 이유를 알아냈습니다 전 그 이유를 알아요 하지만 나쁜 소식도 있습니다 여러분들은 이 문제를 해결할 수 없습니다" [음악]

### 한국어 Transcript

[음악] 저는 큰 조직의 일원으로서 추천 엔진을 구축해 봤고, 모든 유형의 엔지니어들과 함께 일하며 다양한 부분의 문제들을 마주했습니다 이는 제가 가장 만족하는 것들 중 하나인데, 그 이유는 경영진부터 엔지니어나 개발자들까지, 모든 사람들의 입장에서 쉽게 이해할 수 있는 아주 간단한 해결책을 마침내 찾았기 때문입니다 궁극적으로, 그건 매우 복잡한만큼 효과적이었습니다 그들은 더 많은 시간을 할애해야 할 수도 있었습니다 대학생 때, 녹조 현상을 예측해야 하는 문제에 당면했었습니다 녹조 현상이 발생하면 물에 독성이 생기고, 이는 수자원 관리 회사에 문제를 일으킬 수 있습니다 저희의 화학 공학 지식들로는 그것을 예측할 수 없었습니다 그래서 저희는 인공 신경망을 사용하여 녹조들이 언제 생길지 예측했습니다 수자원 관리 회사에서 이 문제를 더 잘 해결할 수 있도록 말입니다 토론토에 있는 대중 교통들은 토론토 교통국에 의해 운영됩니다 저희는 이를 TTC라고 부릅니다 토론토 교통국은 북미 지역에서 가장 큰 대중 교통 당국입니다 어느날, 토론토 교통국에서 저에게 연락하여 "저희에게 문제가 있습니다"라고 했습니다 저는 "문제가 뭐죠? " 라고 물어봤습니다 그들은 대답했죠 "불평사항 신고 관련 데이터가 있는데, 이걸 분석하고 싶습니다 당신의 도움이 필요합니다" 저는 "기꺼이 도와드리겠습니다" 라고 했습니다 제가 "불평사항 신고가 얼마나 있죠? "라고 물었더니 그들은 "조금 있습니다"라고 말했습니다 "얼마 정도 있나요"라고 물었더니 "50만개 정도 있습니다"고 했죠 저는 "그럼 일해봅시다"라고 말했습니다 그래서 데이터를 받아서 분석하기 시작했습니다 기본적으로, 그들은 몇몇 데이터를 표 형식이나 구조화되지 않은 데이터로 잘 보존해 놓았습니다 이 경우, 표 형식 데이터는 언제 불평사항 신고를 했는지, 누가 이를 받았는지, 어떤 종류의 불만인지, 불평사항이 해결되었는지, 누구의 잘못이었는지에 대한 것이었죠 그리고 구조화되지 않은 부분은 이메일과 팩스 기록이었습니다 여러분, 상상해보세요 어떻게 이메일 기록 50만 개를 확인해보고, 거기서 답을 도출해낼까요 그래서 저는 이 데이터를 이용한 작업을 시작했습니다 제가 가장 먼저 알고 싶었던 것은 불평사항들의 원인이었죠 불만사항들에 패턴이 있는지, 다른 날들보다 많이 접수된 날이 있는지 알고 싶었어요 그래서 저는 데이터를 살펴보고, 이를 모두 다른 형식들로 분석했습니다 하지만 저는 어떤 날에는 불만사항을 많아지게 만들고, 어떤 날에는 불만사항을 적어지게 만드는 원인을 찾지 못했죠 그리고 저는 한 달 넘게 계속 분석했습니다 그러던 어느 날, 토론토에서 저는 버스에서 내리고 있었습니다 저는 여전히 그 문제에 대해 고민하고 있었죠 땅을 보지 않고 발을 디뎠을 때, 저는 물웅덩이에 빠졌습니다 제 발목까지 물에 잠겼어요 한 발은 물에 젖고, 한 발은 물에 젖지 않았죠 저는 정말 짜증이 났습니다 그리고 길을 걸어가는데, 갑자기 뭔가 떠올랐습니다 그리고 말했죠 "아, 잠깐만 오늘 예상치 못하게 갑자기 비가 내렸어 나는 비가 올지 몰랐지 그래서 내가 원하지 않았지만 내 발이 젖은거야 기상이변과 토론토 교통국이 받는 불만사항 사이에 어떠한 관계가 있는 것은 아닐까? " 그래서 저는 캐나다 환경부 웹 사이트에 접속하였고, 비, 강수량, 풍속, 일조량 등에 관한 데이터를 모았습니다 거기에서 저는 매우 흥미로운 점을 발견했는데요 불만사항 접수가 가장 많았던 상위 10일은 날씨가 나빴던 날들이었습니다 예상치 못했던 비가 내리거나 기온이 급격하게 떨어지거나 눈이 너무 많이 내리거나, 바람이 너무 많이 불었던 날들이었죠 저는 토론토 교통국 경영진을 만나 이렇게 말했습니다 "좋은 소식과 나쁜 소식이 있습니다 먼저 좋은 소식입니다 왜 특정한 날에 유독 많은 불만사항이 접수되는지, 그 이유를 알아냈습니다 전 그 이유를 알아요 하지만 나쁜 소식도 있습니다 여러분들은 이 문제를 해결할 수 없습니다" [음악]

## 예시
- 이 강의는 개념 설명 중심이며 Transcript에서 독립된 예시를 확인하기 어렵다.

## 요약
- " 라고 물어봤습니다 그들은 대답했죠 "불평사항 신고 관련 데이터가 있는데, 이걸 분석하고 싶습니다 당신의 도움이 필요합니다" 저는 "기꺼이 도와드리겠습니다" 라고 했습니다 제가 "불평사항 신고가 얼마나 있죠?
- "라고 물었더니 그들은 "조금 있습니다"라고 말했습니다 "얼마 정도 있나요"라고 물었더니 "50만개 정도 있습니다"고 했죠 저는 "그럼 일해봅시다"라고 말했습니다 그래서 데이터를 받아서 분석하기 시작했습니다 기본적으로, 그들은 몇몇 데이터를 표 형식이나 구조화되지 않은 데이터로 잘 보존해 놓았습니다 이 경우, 표 형식 데이터는 언제 불평사항 신고를 했는지, 누가 이를 받았는지, 어떤 종류의 불만인지, 불평사항이 해결되었는지, 누구의 잘못이었는지에 대한 것이었죠 그리고 구조화되지 않은 부분은 이메일과 팩스 기록이었습니다 여러분, 상상해보세요 어떻게 이메일 기록 50만 개를 확인해보고, 거기서 답을 도출해낼까요 그래서 저는 이 데이터를 이용한 작업을 시작했습니다 제가 가장 먼저 알고 싶었던 것은 불평사항들의 원인이었죠 불만사항들에 패턴이 있는지, 다른 날들보다 많이 접수된 날이 있는지 알고 싶었어요 그래서 저는 데이터를 살펴보고, 이를 모두 다른 형식들로 분석했습니다 하지만 저는 어떤 날에는 불만사항을 많아지게 만들고, 어떤 날에는 불만사항을 적어지게 만드는 원인을 찾지 못했죠 그리고 저는 한 달 넘게 계속 분석했습니다 그러던 어느 날, 토론토에서 저는 버스에서 내리고 있었습니다 저는 여전히 그 문제에 대해 고민하고 있었죠 땅을 보지 않고 발을 디뎠을 때, 저는 물웅덩이에 빠졌습니다 제 발목까지 물에 잠겼어요 한 발은 물에 젖고, 한 발은 물에 젖지 않았죠 저는 정말 짜증이 났습니다 그리고 길을 걸어가는데, 갑자기 뭔가 떠올랐습니다 그리고 말했죠 "아, 잠깐만 오늘 예상치 못하게 갑자기 비가 내렸어 나는 비가 올지 몰랐지 그래서 내가 원하지 않았지만 내 발이 젖은거야 기상이변과 토론토 교통국이 받는 불만사항 사이에 어떠한 관계가 있는 것은 아닐까?
- " 그래서 저는 캐나다 환경부 웹 사이트에 접속하였고, 비, 강수량, 풍속, 일조량 등에 관한 데이터를 모았습니다 거기에서 저는 매우 흥미로운 점을 발견했는데요 불만사항 접수가 가장 많았던 상위 10일은 날씨가 나빴던 날들이었습니다 예상치 못했던 비가 내리거나 기온이 급격하게 떨어지거나 눈이 너무 많이 내리거나, 바람이 너무 많이 불었던 날들이었죠 저는 토론토 교통국 경영진을 만나 이렇게 말했습니다 "좋은 소식과 나쁜 소식이 있습니다 먼저 좋은 소식입니다 왜 특정한 날에 유독 많은 불만사항이 접수되는지, 그 이유를 알아냈습니다 전 그 이유를 알아요 하지만 나쁜 소식도 있습니다 여러분들은 이 문제를 해결할 수 없습니다" [음악]

<details>
<summary>영문 Transcript 원문</summary>

[Music] I've built a recommendation engine before, as part of a large organization and worked through all types of engineers and accounted for different parts of the problem. It's one of the ones I'm most happy with because ultimately, I came up with a very simple solution that was easy to understand from all levels, from the executives to the engineers and developers. Ultimately, it was just as efficient as something really complex, and they could have spent a lot more time on. Back in the university, we have a problem that we wanted to predict algae blooms. This algae blooms could cause a rise in toxicity of the water and it could cause problems through the water treatment company.

We couldn't like predict with our chemical engineering background. So we use artificial neural networks to predict when these blooms will reoccur. So the water treatment companies could better handle this problem. In Toronto, the public transit is operated by Toronto Transit Commission. It's one of the largest transit authorities in the region, in North America.

And one day they contacted me and said, "We have a problem. " And I said, "Okay, what's the problem? " They said, "Well, we have complaints data, and we would like to analyze it, and we need your help. " I said, "Fine I would be very happy to help. " So I said, "How many complaints do you have?

" They said, "A few. " I said, "How many? " Maybe half a million. I said, "Well, let's start working with it. " So I got the data and I started analyzing it.

So, basically, they have done a great job of keeping some data in tabular format that was unstructured data. And in that case, tabular data was when the complaint arrived, who received it, what was the type of the complaint, was it resolved, whose fault was it. And the unstructured part of it was the exchange of e-mails and faxes. So, imagine looking at how half a million exchanges of e-mails and trying to get some answers from it. So I started working with it.

The first thing I wanted to know is why would people complain and is there a pattern or is there some days when there are more complaints than others? And I had looked at the data and I analyzed it in all different formats, and I couldn't find [what] the impetus for complaints being higher on a certain day and lower on others. And it continued for maybe a month or so. And then, one day I was getting off the bus in Toronto, and I was still thinking about it. And I stepped out without looking on the ground, and I stepped into a puddle, puddle of water.

And now, I was sort of ankle deep into water, and it was just one foot wet and the other dry. And I was extremely annoyed. And I was walking back and then it hit me, and I said, "Well, wait a second. Today it rained unexpectedly, and I wasn't prepared for it. That's why I'm wet, and I wasn't looking for it.

" What if there was a relationship between extreme weather and the type of complaints TTC receives? So I went to the environment Canada's website, and I got data on rain and precipitation, wind and the light. And there, I found something very interesting. The 10 most excessive days for complaints. The 10 days where people complain the most were the days when the weather was bad.

It was unexpected rain, an extreme drop in temperature, too much snow, very windy day. So I went back to the TTC's executives and I said, "I've got good news and bad news. " And the good news is, I know why people would complain excessively on certain days. I know the reason for it. The bad news is, there's nothing you can do about it.

</details>

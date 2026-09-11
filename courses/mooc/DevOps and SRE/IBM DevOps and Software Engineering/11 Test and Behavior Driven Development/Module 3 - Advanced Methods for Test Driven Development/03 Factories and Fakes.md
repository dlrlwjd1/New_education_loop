# Factories and Fakes

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/test-and-behavior-driven-development-tdd-bdd/lecture/1Ywjz/factories-and-fakes)

## 개요
- 테스트를 위한 공장 및 가짜 제품의 중요성에 대해 논의하고 공장을 사용하여 가짜를 생성하는 방법을 요약하고 공장에서 생성된 가짜를 테스트하는 방법을 설명합니다.

## 내용
- 테스트를 위한 공장 및 가짜 제품의 중요성에 대해 논의하고 공장을 사용하여 가짜를 생성하는 방법을 요약하고 공장에서 생성된 가짜를 테스트하는 방법을 설명합니다.
- id는 정보를 담고 있지 않은 키이고 대부분의 데이터베이스는 시퀀스를 기본 키로 사용하기 때문에 이 필드가 호출될 때마다 증가하는 시퀀스 번호를 제공하기 위해 팩토리 Sequence 클래스를 사용합니다.
- Faker에는 Booleans에 대한 공급자가 없지만 FactoryBoy에는 우리가 제공하는 옵션 중에서 무작위로 선택하는 FuzzyChoice라는 메서드가 있습니다.
- 이제 Account 클래스에서 호출할 수 있는 모든 메서드를 AccountFactory 클래스에서도 호출할 수 있습니다.
- 계정을 사용할 수 있는 모든 곳에서 이제 AccountFactory를 사용하여 즉각적인 샘플 데이터를 얻을 수 있습니다.
- 가짜를 사용하면 팍스 앤 선즈 (Parks and Sons) 에서 재정 고문으로 일하는 크리스티나 미첼 (Cristina Mitchell) 을 만들 수도 있고, 피터슨, 에반스, 웨스트에서 변호사로 일하는 태미 산도발 (Tammy Sandoval) 을 만들 수도 있습니다.
- FactoryBoy와 같은 라이브러리를 사용하면 테스트에 필요한 거의 모든 것에 대해 사실적인 샘플 데이터를 만들 수 있습니다.

## 예시
- FactoryBoy와 같은 라이브러리를 사용하면 테스트에 필요한 거의 모든 것에 대해 사실적인 샘플 데이터를 만들 수 있습니다.

## 요약
- 가짜를 사용하면 팍스 앤 선즈 (Parks and Sons) 에서 재정 고문으로 일하는 크리스티나 미첼 (Cristina Mitchell) 을 만들 수도 있고, 피터슨, 에반스, 웨스트에서 변호사로 일하는 태미 산도발 (Tammy Sandoval) 을 만들 수도 있습니다. FactoryBoy와 같은 라이브러리를 사용하면 테스트에 필요한 거의 모든 것에 대해 사실적인 샘플 데이터를 만들 수 있습니다.

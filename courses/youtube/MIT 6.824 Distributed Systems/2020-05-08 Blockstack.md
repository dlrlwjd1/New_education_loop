# Lecture 20: Blockstack

## 개요
- 업로드일: 2020-05-08
- 원본: https://www.youtube.com/watch?v=XvXK_vZ0BNw
- 강좌: MIT 6.824 Distributed Systems (Spring 2020)
- 핵심 주제: blockchain을 이름·공개키 등록에 사용하는 Blockstack과 사용자 중심 decentralized application 구조

## 내용
### 세 가지 질문
Blockstack은 다음 세 문제를 함께 탐구한다.

1. 전 세계 이름을 공개키에 연결하는 범용 PKI를 어떻게 만들 것인가.
2. blockchain이 암호화폐 밖에서도 유용한가.
3. 중앙 웹서비스가 사용자 데이터를 소유하는 현재 구조를 바꿀 수 있는가.

### Naming과 Virtualchain
사용자는 이름 등록·갱신 operation을 기존 blockchain transaction에 기록한다. 모든 node가 blockchain history를 읽고 같은 규칙으로 operation을 해석해 이름에서 공개키·데이터 위치로 이어지는 상태를 재구성한다. 이를 virtualchain이라 부른다.

blockchain은 대량 데이터를 저장하는 곳이 아니라 드물게 바뀌는 전역 이름과 소유권 순서를 합의하는 계층으로 사용한다. 이름 선점과 갱신에는 blockchain의 비용과 확정 지연이 따른다.

### 사용자 데이터와 애플리케이션
애플리케이션 코드는 정적 형태로 배포하고, 사용자는 자신의 개인키로 인증한다. 실제 데이터는 사용자가 선택한 저장소(Gaia)에 암호화하거나 서명해 보관한다. 앱 사업자가 사라지거나 차단해도 사용자가 이름과 데이터의 통제권을 유지하는 것이 목표다.

### 트레이드오프
- 개인키를 잃으면 중앙 운영자가 계정을 복구해 주기 어렵다.
- blockchain의 낮은 처리량과 최종 확정 시간이 UX를 제한한다.
- 브라우저·저장 제공자·indexer 등 새로운 신뢰 지점이 남는다.
- 중앙 서비스가 제공하던 검색, 공유, 권한 관리, 악성 콘텐츠 대응을 분산 구조에서 다시 설계해야 한다.

## 예시
```text
이름 등록/공개키 → Blockchain + Virtualchain
앱 실행          → 정적 애플리케이션 코드
사용자 데이터    → 사용자가 선택한 Gaia storage
인증             → 사용자의 private key 서명
```

## 요약
- Blockstack은 blockchain을 범용 저장소가 아니라 전역 이름·키 소유권의 순서화 계층으로 쓴다.
- virtualchain은 blockchain operation을 해석해 PKI 상태를 재구성한다.
- 앱과 데이터 소유권을 분리해 사용자가 자신의 identity와 storage를 통제하게 한다.
- 탈중앙화는 중앙 통제를 줄이는 대신 key 복구, 성능, 검색·공유 기능에 새로운 부담을 만든다.

# Networking Commands

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/hands-on-introduction-to-linux-commands-and-shell-scripting/lecture/46KpH/networking-commands)

## 개요
- hostname 명령은 컴퓨터를 고유하게 식별하는 호스트 이름 및 기타 정보를 가져오거나 설정하는 데 사용됩니다.

## 내용
- hostname 명령은 컴퓨터를 고유하게 식별하는 호스트 이름 및 기타 정보를 가져오거나 설정하는 데 사용됩니다.
- 장치의 통신 인터페이스에 대한 모든 세부 정보를 보려면 IP 주소, MAC 주소 및 기타 인터페이스별 세부 정보를 포함한 포괄적인 정보를 제공하는 'ip a' 명령을 사용하십시오.
- 그러면 IP 주소, 수신 및 전송된 패킷 수, 오류, 손실된 패킷, 보내고 받은 총 데이터와 같은 주요 메트릭을 비롯한 어댑터에 대한 정보가 표시됩니다.
- 예를 들어 ping google dot com을 입력하면 Ping은 에코 요청에 대한 각 성공적인 응답에 대해 한 줄의 정보를 반환하고 제어 c로 중단할 때까지 계속합니다.
- ping 마이너스 c five google dot com을 입력하면 5개의 핑 결과 ( Aborts) 가 반환되고 마이너스 c 옵션을 사용하지 않아도 출력되는 것과 동일한 통계가 출력됩니다.
- curl www.google.com을 입력하면 기본 HTTP 프로토콜을 사용하여 www.google.com에서 랜딩 페이지의 전체 HTML 콘텐츠가 반환됩니다.
- 예를 들어 curl www.google.com을 마이너스 o 옵션과 함께 입력하고 파일 이름 (예: google.txt) 을 함께 입력할 수 있습니다.

## 예시
- 예를 들어 ping google dot com을 입력하면 Ping은 에코 요청에 대한 각 성공적인 응답에 대해 한 줄의 정보를 반환하고 제어 c로 중단할 때까지 계속합니다.

## 요약
- curl www.google.com을 입력하면 기본 HTTP 프로토콜을 사용하여 www.google.com에서 랜딩 페이지의 전체 HTML 콘텐츠가 반환됩니다. 예를 들어 curl www.google.com을 마이너스 o 옵션과 함께 입력하고 파일 이름 (예: google.txt) 을 함께 입력할 수 있습니다.

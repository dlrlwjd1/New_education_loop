# Quick Note for Windows Users

## 개요
- Quick Note for Windows Users In the upcoming lecture, we will be running a command to create a new image using docker commit with this command: docker commit -c 'CMD ["redis-server"]' CONTAINERID If you are a Windows user you may get an error like "/bin/sh: [redis-server]: not found" or "No Such Container" Instead, try running the comm…

## 내용
### 자막·본문 기반 핵심 내용
- Quick Note for Windows Users In the upcoming lecture, we will be running a command to create a new image using docker commit with this command: docker commit -c 'CMD ["redis-server"]' CONTAINERID If you are a Windows user you may get an error like "/bin/sh: [redis-server]: not found" or "No Such Container" Instead, try running the comm…
- docker commit -c "CMD 'redis-server'" CONTAINERID

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `docker`, `redis`, `docker commit with this command`, `docker commit -c`

## 예시
`docker`, `redis`, `docker commit with this command`, `docker commit -c`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Quick Note for Windows Users**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/23875374#overview)

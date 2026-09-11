# Reminder on Build Kit

## 개요
- Reminder on Build Kit As mentioned earlier, Buildkit will hide away much of its progress which is something the legacy builder did not do. In the upcoming lectures will be discussing some output that will be quickly hidden by default. To see this output, you will want to pass the progress flag to the build command: docker build --progr…

## 내용
### 자막·본문 기반 핵심 내용
- Reminder on Build Kit As mentioned earlier, Buildkit will hide away much of its progress which is something the legacy builder did not do. In the upcoming lectures will be discussing some output that will be quickly hidden by default. To see this output, you will want to pass the progress flag to the build command: docker build --progr…
- Additionally, you can pass the no-cache flag to disable any caching: docker build --no-cache --progress=plain . Note - Do not try to use the no-cache flag with Lecture 47 Minimizing Cache Busting Disabling Buildkit to match course output To disable Buildkit, you can just pass the following variable to the build command:

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `docker`, `docker build --progress`, `docker build --no-cache --progress`, `docker build `

## 예시
`docker`, `docker build --progress`, `docker build --no-cache --progress`, `docker build `가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Reminder on Build Kit**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/50120193#overview)

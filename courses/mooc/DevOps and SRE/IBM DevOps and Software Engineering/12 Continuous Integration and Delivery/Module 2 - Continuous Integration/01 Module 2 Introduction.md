# Module 2 - Continuous Integration

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/continuous-integration-and-continuous-delivery-ci-cd/lecture/6xpMl/module-2-continuous-integration)

## 개요
- Module 2의 도입부 — CI의 특징과 DevOps에서의 이점, 소셜 코딩과 Git Feature Branch 워크플로우, 여러 CI 도구, 그리고 이번 모듈에서 심화로 다룰 GitHub Actions를 미리 안내.

## 내용
- CI의 특징과 DevOps에서의 이점부터 시작 — **소셜 코딩(social coding)**을 탐구하는데, 이는 오픈소스 커뮤니티에서 널리 쓰이는 관행이며 많은 기업이 그 효율성과 이점을 얻기 위해 사내(inner source) 방식으로 채택하고 있음.
- 이를 뒷받침하기 위해 **Git 버전 관리 시스템**, **Git Feature Branch 워크플로우** 실천 방법, 이를 관리하는 데 필요한 필수 명령어를 배움 — 이 워크플로우는 좋은 DevOps 관행을 따르고 작은 단위로 작업해 개발 작업이 메인 코드베이스에서 너무 멀리 벗어나지 않도록 보장.
- Jenkins, CircleCI, Travis CI 같은 인기 CI 도구들을 살펴보고 유사점과 차이점을 비교.
- 심화로 다룰 도구는 **GitHub Actions** — 비교적 새로운 도구지만 빠르게 인기를 얻고 있고 모든 GitHub 저장소에서 사용 가능. GitHub Actions 워크플로우의 필수 구성 요소인 이벤트(event), 러너(runner), 작업(job), 단계(step), 액션(action)을 자세히 다룸.
- 실습에서는 저장소를 fork해 자신만의 GitHub Actions 워크플로우를 설정 — 코드를 체크아웃하고, 품질 검사와 단위 테스트를 수행하고, Pull Request나 main 브랜치로의 push가 있을 때마다 자동으로 코드 커버리지를 리포트. 이는 단순한 "hello world" 실습이 아니라 강사 개인 프로젝트에서 가져온 실제 사례 — 실습에서 배운 것을 바로 자신의 프로젝트에 적용할 수 있어야 함.

## 요약
- Module 2는 소셜 코딩과 Git Feature Branch 워크플로우로 CI의 협업 기반을 다진 뒤, 여러 CI 도구를 비교하고 특히 GitHub Actions의 이벤트·러너·작업·단계·액션 구조를 심화로 다뤄, 실제 프로젝트에 바로 적용 가능한 CI 워크플로우 구축 실습으로 이어진다.

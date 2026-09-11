# Day 1 - Installing CrewAI with uv tool and Setting Up Skills

## 개요
- uv tool로 CrewAI CLI를 설치하고 실습용 작업 폴더를 준비한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821129#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### CLI 설치
`uv tool`은 현재 프로젝트 의존성과 별개로 실행 가능한 명령을 설치한다. 설치 전후 `uv tool list`로 확인한다. 영상에서는 버전을 고정해 강사와 같은 환경을 사용하고, 변경 사항은 주차 README에서 확인하도록 안내한다.

### 실습 폴더와 보조 도구
`reference`는 완성 예제, `coursework`는 직접 재구성하는 공간, `community_contributions`는 공유 예제다. Windows에서 Chroma 관련 설치 오류가 나면 설정 안내의 MS Build Tools 준비 여부를 확인한다. 코딩 에이전트용 CrewAI skills 설치는 선택 사항이며 Node 환경이 필요하다.

## 예시
```bash
uv tool list
uv tool install crewai
uv tool list
```

위 명령은 기본 설치형이다. 강의와 동일한 재현 환경을 원하면 주차 README에 적힌 버전을 확인해 고정한다.

## 요약
- CLI 설치와 개별 Crew 프로젝트 생성은 별개다.
- reference를 참고하며 coursework에서 직접 구성한다.

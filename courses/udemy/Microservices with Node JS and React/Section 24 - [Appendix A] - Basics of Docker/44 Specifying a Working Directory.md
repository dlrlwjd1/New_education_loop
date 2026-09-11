# Specifying a Working Directory

## 개요
- 따라서 이 루트 디렉터리에서 패키지 잠금이 설정된 도커 파일을 볼 수 있습니다. json 파일은 npm 패키지 도트 JSON 인덱스에 의해 자동으로 생성됩니다. js. 그리고 모든 설치 종속성을 이 노드 모듈 폴더에 배치했습니다.

## 내용
### 자막·본문 기반 핵심 내용
- 따라서 이 루트 디렉터리에서 패키지 잠금이 설정된 도커 파일을 볼 수 있습니다. json 파일은 npm 패키지 도트 JSON 인덱스에 의해 자동으로 생성됩니다. js. 그리고 모든 설치 종속성을 이 노드 모듈 폴더에 배치했습니다.
- 여기에 있는 workdir 명령은 나중에 Docker 파일 내부에서 실행되는 명령에 영향을 미칠 뿐만 아니라 나중에 docker 실행 명령을 통해 컨테이너 내부에서 실행되는 명령에도 영향을 여기서 LZ를 수행하면 모든 프로젝트 파일과 폴더가 이 단일 파일 안에 잘 분리되어 있고 CD 포워드 슬래시를 수행하여 루트 디렉토리로 다시 변경할 수 있습니다.
- 이를 위해 it 및 sh를 첨부하여 docker 실행 명령을 다시 실행하거나 해당 docker 실행 명령을 사용할 수 있습니다.
- Workdir 명령어를 추가했습니다. Docker 파일을 저장하겠습니다. 그런 다음 다시 터미널로 돌아가 보겠습니다.

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `json`, `npm`, `Docker`, `Docker PS`

## 예시
`json`, `npm`, `Docker`, `Docker PS`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Specifying a Working Directory**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/50120303#overview)

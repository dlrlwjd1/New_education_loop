# Base Image Issues

## 개요
- 지난 섹션에서 이 NodeJS 프로젝트를 빌드하기 위해 Docker 파일을 처음 살펴봤는데, npm 설치 실행 단계에서 npm을 찾을 수 없다는 오류 메시지가 표시되는 것을 바로 확인했습니다.

## 내용
### 자막·본문 기반 핵심 내용
- 지난 섹션에서 이 NodeJS 프로젝트를 빌드하기 위해 Docker 파일을 처음 살펴봤는데, npm 설치 실행 단계에서 npm을 찾을 수 없다는 오류 메시지가 표시되는 것을 바로 확인했습니다.
- 이 오류 메시지가 표시되는 이유는 바로 여기 2단계에서 임시 컨테이너 내부에서 npm 설치 명령을 실행하려고 할 때 사용할 수 있는 npm 복사본이 없기 때문입니다.
- 하지만 일반적으로 해당 이미지의 매우 축소된 버전을 얻게 됩니다. 따라서 알파인 버전은 기본적으로 여러분과 저에게 필요한 것은 노드와 npm뿐이고 바로 여기 이 노드 이미지에 npm이 포함되어 있기 때문에 잘 작동합니다.
- 먼저 Docker 파일을 저장한 다음 저장한 후에는 터미널로 돌아와서 Docker 빌드 도트를 다시 수행합니다.

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `NodeJS`, `Docker`, `npm`, `JSON`, `Docker Hub`

## 예시
`NodeJS`, `Docker`, `npm`, `JSON`, `Docker Hub`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Base Image Issues**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/50120243#overview)

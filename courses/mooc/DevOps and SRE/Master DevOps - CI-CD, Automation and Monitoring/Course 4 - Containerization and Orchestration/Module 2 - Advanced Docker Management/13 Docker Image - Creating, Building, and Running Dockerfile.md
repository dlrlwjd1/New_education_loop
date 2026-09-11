# Docker Image - Creating, Building, and Running Dockerfile

## 개요
- 이 강의의 Transcript는 [07 Dockerfile - Creating Dockerfile](07%20Dockerfile%20-%20Creating%20Dockerfile.md)과 동일한 내용(같은 `FROM`+`CMD` Ubuntu 예제, `docker build`의 중간 컨테이너·레이어 커밋 과정, 태그 없는 이미지를 ID로 실행하는 방법)이다.

## 내용
- 자세한 내용은 [07 Dockerfile - Creating Dockerfile](07%20Dockerfile%20-%20Creating%20Dockerfile.md) 참고.
- 핵심 요지만 재정리: Dockerfile(`FROM ubuntu` + `CMD echo "Hello World"`)을 `docker build .`로 실행하면, 베이스 이미지로부터 중간 컨테이너가 생성되어 명령이 실행되고, 그 결과가 새 레이어로 커밋된 뒤 중간 컨테이너는 삭제되며, 최종적으로 표시되는 이미지 ID는 최상위 레이어일 뿐 실제로는 모든 레이어의 조합이 최종 이미지다. 태그 없이 빌드된 이미지도 `docker run --name <이름> <이미지ID>`로 정상 실행 가능하다.

## 요약
- [07 Dockerfile - Creating Dockerfile](07%20Dockerfile%20-%20Creating%20Dockerfile.md)과 동일한 내용이므로 해당 파일을 참고한다.

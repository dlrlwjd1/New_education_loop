# Note About Docker Build Output and Buildkit

## 개요
- Note About Docker Build Output and Buildkit In the next lecture, we will be building a Docker image of our Posts service. Students who have the most recent versions of Docker will now have "Buildkit" enabled by default. If so, you will notice a slightly different output in your terminal when building from a Dockerfile.

## 내용
### 자막·본문 기반 핵심 내용
- Note About Docker Build Output and Buildkit In the next lecture, we will be building a Docker image of our Posts service. Students who have the most recent versions of Docker will now have "Buildkit" enabled by default. If so, you will notice a slightly different output in your terminal when building from a Dockerfile.
- https://docs.docker.com/develop/develop-images/build_enhancements/ https://docs.docker.com/engine/reference/commandline/build/#specifying-external-cache-sources https://www.docker.com/blog/advanced-dockerfiles-faster-builds-and-smaller-images-using-buildkit-and-multistage-builds/
- The main difference for students will be the final step in the build process. As shown in the lecture the last step would say: ---> fc60771eaa08 Successfully Built fc60771eaa08 Now, with Buildkit, the final step would say: => => exporting layers => => writing image sha256:ee59c34ada9890ca09145cc88ccb25d32b677fc3b61e921 0.0s
- Both fc60771eaa08 and ee59c34ada9890ca09145cc88ccb25d32b677fc3b61e921 are the resulting image ID's that you would use to run a container. docker run fc60771eaa08 docker run ee59c34ada9890ca09145cc88ccb25d32b677fc3b61e921 Using the Progress Flag to see more verbose output Buildkit will hide away much of its progress which is something t…

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `Docker`, `service`, `Dockerfile`, `https`, `Docker Build Output and Buildkit`, `Docker image of our Posts service. Students who have the most recent versions of Docker will now have`, `docker run fc60771eaa08`, `docker run ee59c34ada9890ca09145cc88ccb25d32b677fc3b61e921`, `docker build --progress`, `docker build `

## 예시
`Docker`, `service`, `Dockerfile`, `https`, `Docker Build Output and Buildkit`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Note About Docker Build Output and Buildkit**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/26474490#overview)

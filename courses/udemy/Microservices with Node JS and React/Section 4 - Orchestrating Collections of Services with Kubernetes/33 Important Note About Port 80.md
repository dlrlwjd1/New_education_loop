# Important Note About Port 80

## 개요
- Important Note About Port 80 In the upcoming lecture, we will be editing our hosts file so that we can access posts.com/posts in our browser. If you are unable to access the application you may have something already running on port 80, which is the default port for the ingress. Before doing anything, please make sure you have properly…

## 내용
### 자막·본문 기반 핵심 내용
- Important Note About Port 80 In the upcoming lecture, we will be editing our hosts file so that we can access posts.com/posts in our browser. If you are unable to access the application you may have something already running on port 80, which is the default port for the ingress. Before doing anything, please make sure you have properly…
- For Windows Pro users, both SQL Server Reporting Services (MSSQLSERVER) and the World Wide Web Publishing Service / IIS Server have been the most common services causing a conflict. To determine what might be using this port, in your terminal run: Using Powershell with elevated permissions: netstat -anb Scroll to the top of the returne…
- Many students are skipping this step! https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/26492690#questions Once you have confirmed that you have indeed installed/enabled the ingress-nginx controller, you'll need to identify if something is running on port 80 and shut it down. Some students have even had ap…
- If Docker is properly listening on port 80 you should see: TCP 0.0.0.0:80 0.0.0.0:0 LISTENING [com.docker.backend.exe] If something else is listed for TCP 0.0.0.0:80, you'll need to shut that service down. sudo lsof -i tcp:80 If Docker is properly listening on port 80 you should see something very similar: COMMAND PID USER FD TYPE DEVI…

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `ingress`, `Kubernetes`, `https`, `react`, `Service`, `Docker`, `http`, `Docker is properly listening on port 80 you should see`, `Docker is properly listening on port 80 you should see something very similar`, `NODE NAME`

## 예시
`ingress`, `Kubernetes`, `https`, `react`, `Service`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Important Note About Port 80**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/23145506#overview)

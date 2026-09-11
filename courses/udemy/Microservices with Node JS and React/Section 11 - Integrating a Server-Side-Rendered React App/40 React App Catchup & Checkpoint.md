# React App Catchup & Checkpoint

## 개요
- React App Catchup & Checkpoint If you skipped over the React app that was built in this section, here is what you should do: Close Skaffold down by pressing Control-C in the terminal window that is running it. Download the zip file attached to this lecture Extract the client folder into your root project directory Extract the skaffold.…

## 내용
### 자막·본문 기반 핵심 내용
- React App Catchup & Checkpoint If you skipped over the React app that was built in this section, here is what you should do: Close Skaffold down by pressing Control-C in the terminal window that is running it. Download the zip file attached to this lecture Extract the client folder into your root project directory Extract the skaffold.…
- Extract all the files in the ‘infra/k8s/’ directory into your project’s ‘infra/k8s’ directory Step to do only if you are running Docker/Kubernetes on your local machine (if you are using Google Cloud then skip this) Change into the client directory at your terminal Run docker build -t YOURDOCKERID/client . Run docker push YOURDOCKERID/…
- Change back to the root project directory. Run skaffold dev Give Skaffold a little time to start up. You should then be able to access the app in your browser at ticketing.dev. Important - You can also use this zip file as a checkpoint. It includes all updates and fixes from previous lecture notes including the Auth service, Ingress, a…
- If you would rather not code along, you can simply download the zip file, extract and run skaffold dev. This assumes that your ticketing secret had previously been set. If not, you will need to run: kubectl create secret generic jwt-secret --from-literal JWT_KEY=asdf 254-react-catchup-checkpoint.zip

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `React`, `Skaffold`, `yaml`, `Docker`, `Kubernetes`, `service`, `Ingress`, `kubectl`, `jwt`, `Skaffold down by pressing Control-C in the terminal window that is running it`

## 예시
`React`, `Skaffold`, `yaml`, `Docker`, `Kubernetes`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **React App Catchup & Checkpoint**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19266074#overview)

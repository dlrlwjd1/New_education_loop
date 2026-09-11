# Local Registry

## 개요
1. Docker Hub의 역할과 사용 방법 이해
2. 로컬 레지스트리의 필요성 및 장점
3. 로컬 레지스트리 설정 방법
4. 로컬 레지스트리 활용 예시

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/52397851#overview)

## 내용
### Docker Hub의 역할과 사용 방법
Docker Hub는 공개적으로 접근 가능한 클라우드 기반 서비스로, 다양한 컨테이너 이미지를 저장하고 관리합니다. Docker가 로컬에 없는 이미지를 가져올 때 기본적으로 Docker Hub를 참조합니다.

### 로컬 레지스트리의 필요성 및 장점
1. **보안**: 민감한 데이터(소프트웨어, 패키지, AI 모델, 커스텀 드라이버 등)가 포함된 이미지를 공개 또는 제3자 개인 레지스트리에 업로드하지 않으려고 할 때 유용합니다.
2. **인터넷 연결 없이 작업**: 로봇이나 팩토리, 건설 현장, 창고 등의 오프라인 또는 제한된 인터넷 환경에서 작동할 수 있습니다.
3. **속도 향상**: 로컬 레지스트리를 통해 이미지를 다운로드하거나 가져올 때 클라우드에 의존하지 않으므로 배포 및 업데이트 속도가 빨라집니다.
4. **외부 네트워크의 신뢰성 향상**: 로컬 환경에서 격리된 공간을 생성하여 외부 네트워크에 대한 의존성을 줄일 수 있습니다.

### 로컬 레지스트리 설정 방법
1. **Docker 레지스트리 이미지 다운로드**:
   ```bash
   docker pull registry:2
   ```
2. **레지스트리 컨테이너 실행**:
   ```bash
   docker run -d -p 5000:5000 --restart=always --name registry registry:2
   ```
3. **Docker 이미지를 로컬 레지스트리에 푸시**:
   ```bash
   docker tag myimage localhost:5000/myimage
   docker push localhost:5000/myimage
   ```

### 로컬 레지스트리 활용 예시
이 소절의 본문은 수집되지 않았다. Udemy 자막 원문을 확보한 뒤 보완해야 한다.

## 예시
- 강의에서 별도의 코드 예시는 다루지 않는다.

## 요약
- Docker Hub의 역할과 사용 방법 이해
- 로컬 레지스트리의 필요성 및 장점
- 로컬 레지스트리 설정 방법
- 로컬 레지스트리 활용 예시

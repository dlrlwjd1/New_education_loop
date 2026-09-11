# Demo: Implementing Container Restart Detection and Alerting with Docker - Part 2 (데모 — Docker 컨테이너 재시작 탐지·경고 2부)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 7: Performance Testing & Advanced SRE

## 개요
- 2부: **Dockerfile·docker-compose 작성 → 컨테이너 빌드·실행 → 보안 그룹(5000·9090) → 재시작 탐지 테스트**(재시작 카운트를 영속 볼륨에 저장).

## 내용 · 예시 (절차)

### 3. Dockerfile·docker-compose
```bash
# Dockerfile (flask_app/ 안) — 이미지·작업 디렉터리·설치·실행 지시
cat flask_app/Dockerfile
ls -R                                # 파일 트리 확인
sudo nano docker-compose.yaml        # 루트에 위치, YAML 들여쓰기 민감 → notepad로 정리
#   service: flask_app 컨테이너명 flask-restart-monitor
#   ports: 5000:5000 (host:container), restart: always
#   volumes: flask_data_app (영속 저장)
```

### 4. 빌드·실행
```bash
sudo docker-compose up --build -d
docker ps                            # 컨테이너 실행 확인
```

### 5. 보안 그룹 (인바운드)
- EC2 → Security → 보안 그룹 → Edit inbound rules → Add rule: Custom TCP **5000**, Custom TCP **9090** (전체 허용, 프로덕션 주의) → 저장.

### 6. 재시작 탐지 테스트
```bash
# 브라우저: http://<EC2-public-IP>:5000  → "Hello from Flask" + Restart count 표시
docker exec -it flask-restart-monitor bash   # 컨테이너 진입, 카운트 저장 파일 확인
sudo docker restart flask-restart-monitor    # 재시작 → 카운트 증가
curl http://localhost:5000                   # "Hello from Flask", Restart count = 2, 3 ...
# 반복 루프로 재시작(sleep 2) → 카운트 누적 (예: 6)
docker logs --tail 50 flask-restart-monitor  # 컨테이너 로그
docker inspect --format '{{json .Mounts}}' flask-restart-monitor  # 볼륨 마운트 확인(영속성)
```
- 재시작 카운트는 **영속 볼륨의 텍스트 파일**에 저장되어 웹페이지·파일·`docker exec` 모두에서 동일하게 확인됨.

## 요약
- **Dockerfile + docker-compose.yaml**(restart: always, 영속 볼륨)로 Flask 앱 컨테이너 빌드·실행.
- 보안 그룹에 **5000·9090** 개방, `:5000`에서 앱 접속.
- **`docker restart`**로 수동 크래시를 시뮬레이션하면 **재시작 카운트가 볼륨에 영속**되어 증가 — 재시작 탐지·영속성을 검증(로그·inspect로 확인).

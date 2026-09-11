# Lecture 4: Primary-Backup Replication

## 개요
- 업로드일: 2020-02-18
- 원본: https://www.youtube.com/watch?v=M_teob23ZzY
- 강좌: MIT 6.824 Distributed Systems (Spring 2020)
- 핵심 주제: VMware FT를 사례로 본 primary-backup 복제, 결정적 재실행, split brain 방지

## 내용
### 복제가 다루는 장애
이 강의가 가정하는 것은 서버나 네트워크가 멈추는 fail-stop 장애다. 같은 소프트웨어 버그나 하드웨어 설계 결함이 두 복제본에서 같은 오답을 만들면 복제로 해결할 수 없다.

### VMware FT의 접근
VMware FT는 하나의 가상 머신을 primary와 backup에서 실행한다. 모든 CPU 명령 결과를 전송하는 대신, 인터럽트·네트워크 입력·비결정적 명령 결과처럼 실행을 달라지게 하는 **비결정적 입력**만 logging channel로 보낸다. backup은 같은 초기 상태에서 같은 입력을 같은 지점에 적용해 primary와 동일한 상태를 재현한다.

### Output Rule
primary가 외부에 출력을 보내기 전에 backup이 그 출력을 만들 수 있는 로그를 받았는지 확인한다. 이 output rule 덕분에 primary 장애 후 backup이 이어서 실행해도 외부에서 이미 관찰한 상태보다 뒤로 돌아가지 않는다. 일부 네트워크 패킷은 중복될 수 있으므로 상위 프로토콜의 중복 처리도 필요하다.

### Split brain 방지
네트워크 단절만으로 상대가 죽었다고 판단하면 primary와 backup이 동시에 서비스를 제공할 수 있다. 따라서 공유 저장소의 원자적 test-and-set 같은 외부 중재자가 하나만 승격되도록 해야 한다. 복제 시스템의 핵심은 상태 복사뿐 아니라 **누가 유일한 primary인가**를 안전하게 결정하는 일이다.

## 예시
```text
외부 입력 → Primary 실행 → 비결정적 이벤트 로그 → Backup 재실행
                    └─ 로그 전달 확인 후에만 외부 출력
```

## 요약
- primary-backup은 fail-stop 장애를 견디지만 공통 소프트웨어 버그까지 고치지는 못한다.
- VMware FT는 비결정적 입력만 기록해 가상 머신 전체를 결정적으로 재실행한다.
- output rule은 장애 전 외부에 보인 상태를 backup이 이어받게 한다.
- 네트워크 분할에서는 단순 timeout만으로 승격하면 split brain이 생기므로 외부 중재가 필요하다.

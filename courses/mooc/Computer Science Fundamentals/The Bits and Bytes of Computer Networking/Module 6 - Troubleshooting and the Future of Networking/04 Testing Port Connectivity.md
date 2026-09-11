# Testing Port Connectivity

## 개요

- 네트워크 계층 연결은 ping·traceroute로 확인하지만, **전송 계층이 동작하는지** 알아야 할 때가 있다.
- 도구: **Linux·macOS는 netcat(`nc`)**, **Windows는 `Test-NetConnection`**.

## 내용

### netcat (Linux · macOS)

- **`nc` 명령**으로 실행하며 **필수 인자 두 개**를 받는다: **호스트와 포트**.
- `nc google.com 80`을 실행하면 **google.com의 80번 포트로 연결을 수립하려 시도**한다.
  - **연결에 실패하면 명령이 종료**된다.
  - **성공하면 커서가 깜빡이며 추가 입력을 기다린다.** 이는 **직접 키보드로 리스닝 서비스에 애플리케이션 계층 데이터를 보낼 수 있게** 하는 것이다.

#### 포트 상태만 궁금하다면 — `-z`와 `-v`

| 플래그 | 뜻 |
|---|---|
| **`-z`** | **zero input output mode.** 포트 상태만 확인 |
| **`-v`** | **verbose.** 사람 눈에 유용한 출력. 비-verbose 출력은 **스크립트에서 쓰기 좋은 형태** |

- **`-z`와 `-v`를 함께 주면**, 명령의 출력이 단순히 **해당 포트로 연결이 가능한지 아닌지**를 알려 준다.

### Test-NetConnection (Windows)

- netcat과 **비슷한 기능 일부**를 갖는다.
- **호스트만 지정하고 실행하면** 기본적으로 **ICMP echo request**를 사용한다. **ping과 매우 비슷하지만 훨씬 많은 데이터를 표시**하며, **사용 중인 데이터 링크 계층 프로토콜**까지 보여 준다.
- **`-Port` 플래그**를 주면 **특정 포트로의 연결성을 테스트**하도록 요청할 수 있다.

### 주의

- **netcat과 Test-NetConnection은 여기서 다룬 짧은 포트 연결성 예시보다 훨씬 강력한 도구**다.
- 사실 **모든 기능을 다루기에는 영상 하나로 부족할 만큼 복잡한 도구**들이다. **이 강력한 도구들이 할 수 있는 다른 일들을 따로 찾아 읽어 볼 것.**

## 예시

```bash
# Linux / macOS
nc google.com 80          # 연결 시도 (성공하면 입력 대기)
nc -z -v google.com 80    # 포트 연결 가능 여부만 사람이 읽기 좋게 출력
```

```powershell
# Windows
Test-NetConnection google.com            # ICMP echo request (ping과 유사, 정보 더 많음)
Test-NetConnection google.com -Port 80   # 특정 포트 연결성 테스트
```

## 요약

- 전송 계층(포트) 연결 확인에는 netcat과 Test-NetConnection을 쓴다.
- `nc host port`는 연결에 성공하면 애플리케이션 계층 데이터를 직접 입력할 수 있게 한다.
- 상태만 볼 때는 `-z -v`를 함께 쓴다.
- Windows의 Test-NetConnection은 포트 없이 쓰면 ping 유사 동작이고, `-Port`로 포트를 지정한다.

# [LAB] Networking

## 개요
1. Linux 시스템에서 IP 주소를 찾는 방법을 배웁니다.
2. IPv4와 IPv6의 구조를 이해합니다.
3. 정적 IP와 동적 IP 설정 방법을 배웁니다.
4. Netplan을 사용하여 네트워크 설정을 변경하는 방법을 학습합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/52220873#overview)

## 내용
### 1. IP 주소 찾기
Linux 시스템에서 IP 주소를 찾는 가장 간단한 방법은 `ip a` 명령어입니다. 이 명령어는 모든 네트워크 인터페이스의 정보를 보여줍니다. 예를 들어, Wi-Fi와 유선 네트워크 장치가 있습니다.

### 2. IPv4와 IPv6 구조
IPv4 주소는 4개의 숫자로 구성되며, 각 숫자는 0에서 255 사이입니다. 예를 들어, `192.168.1.103`은 IPv4 형식입니다.

### 3. 정적 IP와 동적 IP 설정
- **정적 IP**: 항상 같은 주소를 유지합니다.
- **동적 IP**: 서버를 통해 할당되므로 컴퓨터 재부팅 시마다 변경될 수 있습니다.

#### 정적 IP 설정 (그래픽 인터페이스)
1. Wi-Fi 전체 네트워크로 이동하여 IPv4 연결성을 설정합니다.
2. Netmask와 Gateway를 설정합니다. 예를 들어, `192.168.1.0`과 `192.168.1.13`을 사용할 수 있습니다.

#### 정적 IP 설정 (명령어)
1. `sudo nano /etc/netplan/01-netcfg.yaml` 파일을 열고, 기존 내용을 삭제합니다.
2. 새로운 네트워크 설정을 추가합니다. 예를 들어:
    ```yaml
    network:
      version: 2
      renderer: NetworkManager
      ethernets:
        eth0:
          dhcp4: no
          addresses:
            - 192.168.1.13/24
          gateway4: 192.168.1.1
          nameservers:
            addresses:
              - 8.8.8.8
              - 8.8.4.4
    ```
3. `sudo netplan apply` 명령어를 사용하여 설정을 적용합니다.

### 4.
이 소절의 본문은 수집되지 않았다. Udemy 자막 원문을 확보한 뒤 보완해야 한다.

## 예시
- 강의에서 별도의 코드 예시는 다루지 않는다.

## 요약
- Linux 시스템에서 IP 주소를 찾는 방법을 배웁니다.
- IPv4와 IPv6의 구조를 이해합니다.
- 정적 IP와 동적 IP 설정 방법을 배웁니다.
- Netplan을 사용하여 네트워크 설정을 변경하는 방법을 학습합니다.

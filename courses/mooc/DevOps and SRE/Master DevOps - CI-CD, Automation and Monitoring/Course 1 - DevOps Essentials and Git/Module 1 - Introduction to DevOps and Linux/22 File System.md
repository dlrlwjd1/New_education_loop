# File System

## 개요
- Linux 파일 시스템의 개념과 종류, 대표 포맷(FAT, NTFS, EXT4, XFS)의 특징을 설명.

## 내용
### 파일 시스템이란
- 파일·폴더·접근 정보를 OS가 이해할 수 있는 형태로 저장·조회하는 논리적 구조.
- 로컬, 네트워크 경유, 또는 디바이스를 표현하는 가상 파일 형태로도 존재할 수 있다.
- 하드디스크는 블록(block)이라는 고정 크기 단위로 나뉘며, 각 블록은 고유 식별자를 가진다.
- 파일마다 메타데이터(크기, 생성 시각, 소유자, 접근 권한, 타입 등)가 함께 저장된다.

### 파일 시스템 종류
- **Disk file system** — 하드드라이브에 영구 저장, 대용량 파일·다중 사용자 지원 (FAT, NTFS 등)
- **Network file system** — 네트워크로 원격 컴퓨터의 파일 접근 (NFS, AFS, SMB)
- **Special-purpose file system** — 디바이스·API를 파일처럼 취급 (Unix/Linux 특유의 개념)

### 대표 파일 시스템 포맷
- **FAT (File Allocation Table)** — 오래된 방식, 순차적 클러스터에 저장하고 테이블로 위치 추적. 단편화(fragmentation)에 취약, 오늘날은 USB/SD카드 정도에만 사용.
- **NTFS (New Technology File System)** — Windows용이지만 Linux에서도 접근 가능. 파일 연산을 트랜잭션처럼 처리해 크래시 후 복구에 유리, 압축·암호화 지원.
- **EXT4** — Linux에서 가장 널리 쓰이는 파일 시스템. 빠르고 안정적이며 커널과 완전히 통합. 테라바이트급 대용량 파일·수천 개 하위 폴더 지원.
- **XFS** — B-tree 구조로 공간을 효율적으로 할당하는 저널링(journaling) 파일 시스템. 대용량 파일, 높은 처리량(high-throughput) 환경(스토리지 서버)에 적합. 변경사항을 적용 전에 기록해 데이터 손상 위험을 줄인다.

### EXT4가 Linux에 통합되는 방식 (계층)
1. Storage Device — 실제 하드디스크
2. Block Layer — 데이터를 블록 단위로 관리
3. Page Cache — 빠른 접근을 위한 메모리 임시 저장
4. File System Layer — EXT4, EXT2, VFAT 등이 파일·디렉터리 구조 처리
5. VFS(Virtual File System) — 여러 파일 시스템을 하나의 인터페이스로 다루게 하는 다리 역할

## 요약
- 파일 시스템은 블록과 메타데이터로 데이터를 조직화하며, Linux에서는 EXT4가 표준, XFS는 대용량·고성능 환경에, FAT/NTFS는 상호운용성이 필요할 때 쓰인다.

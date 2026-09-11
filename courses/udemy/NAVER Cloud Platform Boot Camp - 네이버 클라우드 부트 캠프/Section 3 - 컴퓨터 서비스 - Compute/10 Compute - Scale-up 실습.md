# Compute - Scale-up 실습

## 개요

- VM의 CPU·메모리 사양을 높이거나 낮춘다.
- 서버 스펙 변경 전 정지가 필요한 이유를 이해한다.

## 내용

### 서버 정지

NAVER Cloud Platform에서 서버 사양을 변경하려면 VM을 정지해야 한다. 실행 중인 서버에서는 Server Spec Change 메뉴가 비활성화된다.

이는 클라우드의 제약이라기보다 강의에서 사용하는 운영체제가 온라인 상태의 CPU·메모리 변경을 지원하지 않기 때문이라고 설명한다.

### Scale-up과 Scale-down

서버를 정지한 후 Server Management의 서버 스펙 변경 메뉴에서 원하는 CPU·메모리 조합을 선택한다.

- Scale-up: CPU·메모리를 더 큰 사양으로 변경
- Scale-down: CPU·메모리를 더 작은 사양으로 변경

변경이 완료되면 서버를 다시 시작하고 콘솔에서 새 사양이 적용되었는지 확인한다.

## 예시

```text
운영 서비스 중지
→ VM 정지
→ Server Management
→ 서버 스펙 변경
→ CPU·메모리 조합 선택
→ 변경 완료 확인
→ VM 시작
```

## 요약

- Scale-up과 Scale-down은 한 VM의 CPU·메모리 사양을 변경한다.
- 사양 변경 전 서버를 정지해야 한다.
- 실행 중에는 스펙 변경 메뉴를 사용할 수 없다.
- 변경 후 서버를 시작하고 적용된 사양을 확인한다.
- [원본 강의](https://www.udemy.com/course/naver-cloud-boot-camp/learn/lecture/43345584#overview)


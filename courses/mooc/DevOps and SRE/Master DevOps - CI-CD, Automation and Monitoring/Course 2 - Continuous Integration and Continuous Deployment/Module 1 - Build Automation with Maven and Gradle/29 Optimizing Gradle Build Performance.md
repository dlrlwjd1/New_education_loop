# Optimizing Gradle Build Performance

## 개요
- 설정 최적화, 캐싱, 병렬 실행, 의존성 관리 등 Gradle 빌드 성능을 개선하는 7가지 고급 전략.

## 내용
1. **증분 빌드(Incremental Build) 활용**
   - 커스텀 task는 input/output을 명시적으로 선언해 Gradle이 up-to-date 여부를 판단할 수 있게 한다.
   - 증분 빌드를 지원하지 않는 플러그인은 가능하면 대체한다.

2. **Build Cache 활성화·설정**
   - **Local Build Cache** — 기본 활성화, 로컬 머신에 빌드 결과 저장
   - **Remote Build Cache** — CI 환경에서 여러 머신 간 빌드 결과 공유에 유용
   - `gradle.properties`에 캐시 활성화 설정 추가

3. **병렬 실행(Parallel Execution) 활용**
   - `gradle.properties`에서 병렬 task 실행 설정으로 멀티코어 프로세서 활용
   - 대형 프로젝트를 독립적인 작은 모듈로 나누면 모듈별 병렬 빌드가 가능해져 성능 향상

4. **의존성 관리 최적화**
   - 동적 버전(예: `1.+`) 사용을 피해 예측 불가능한 빌드와 추가 해석 시간을 방지
   - 의존성 제약(constraint)으로 버전을 명시해 일관성 유지
   - 불필요한 전이 의존성(transitive dependency)을 제외해 classpath 크기 최소화

5. **Daemon 설정 구성**
   - Gradle Daemon(백그라운드 프로세스)을 활성화하면 빌드 간 성능이 크게 향상됨. `gradle.properties`에서 설정.

6. **Configuration Cache 사용**
   - Configuration 단계의 결과를 캐시해 이후 빌드에서 재사용
   - 모든 task·플러그인이 호환되는 것은 아니므로 프로덕션 적용 전 충분히 테스트 필요

7. **빌드 성능 모니터링·분석**
   - `--scan` 옵션으로 Build Scan을 생성해 task 실행 시간, 의존성, 최적화 지점을 상세히 확인
   - Profile Report를 생성해 `build/reports/profile` 디렉터리에서 상세 성능 지표 확인

## 요약
- 증분 빌드·빌드 캐시·병렬 실행·의존성 최적화·Daemon·Configuration Cache를 조합하고 Build Scan/Profile Report로 지속적으로 모니터링하면 Gradle 빌드 속도와 개발 생산성을 크게 향상시킬 수 있다.

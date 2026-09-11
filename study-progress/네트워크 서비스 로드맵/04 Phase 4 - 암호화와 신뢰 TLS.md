# Phase 4 — 암호화와 신뢰 (TLS)

- 목표: HTTPS가 "자물쇠 아이콘"이 아니라 **키 교환과 신뢰 사슬의 결과**임을 알고, 인증서 장애를 스스로 진단한다.
- 분량: 약 9시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 대칭키·비대칭키·해시가 TLS 안에서 각각 어느 순간에 쓰이는지 말한다
- TLS 핸드셰이크를 ClientHello부터 세션 키 생성까지 단계로 설명한다
- 인증서 체인(리프 → 중간 → 루트)을 그리고, **중간 인증서 누락**이 왜 "일부 클라이언트에서만" 오류를 내는지 설명한다
- `openssl s_client -connect host:443 -showcerts` 출력으로 체인과 만료일을 확인한다
- Let's Encrypt로 인증서를 발급하고 자동 갱신을 건다
- TLS를 로드밸런서에서 끊을지 백엔드까지 가져갈지 결정하고, 각각의 대가를 말한다

> **전제**: Phase 2에서 산 도메인이 필요하다. Let's Encrypt는 도메인 소유 증명을 요구한다.

## 4-A. 암호화 기본과 TLS 핸드셰이크

메인: IBM DevOps and Software Engineering, `13 Application Security` Module 1

- [ ] [08 Security Patterns.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%201%20-%20Introduction%20to%20DevSecOps%20and%20Network%20Security/08%20Security%20Patterns.md)
- [ ] [09 TLS-SSL.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%201%20-%20Introduction%20to%20DevSecOps%20and%20Network%20Security/09%20TLS-SSL.md) — **이 소절의 핵심.** 핸드셰이크를 4단계(버전 합의 → 암호 합의 → 서버 신원 검증 → 세션 키 생성)로 정리하고, CI/CD로 인증서를 만료 전에 갱신하라는 실무 지침까지 짚는다
- [ ] [10 What Is OpenSSL.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%201%20-%20Introduction%20to%20DevSecOps%20and%20Network%20Security/10%20What%20Is%20OpenSSL.md) — 진단 도구로서의 `openssl`
- [ ] [11 Summary and Highlights - Understanding the Role of Network Security.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%201%20-%20Introduction%20to%20DevSecOps%20and%20Network%20Security/11%20Summary%20and%20Highlights%20-%20Understanding%20the%20Role%20of%20Network%20Security.md)

함께 보기: Protecting and Managing APIs, Module 1 Lesson 4

- [ ] [01.Data Encryption & HTTPS.md](../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%204%20-%20Encryption%20and%20Compliance/01.Data%20Encryption%20&%20HTTPS.md) — **전송 중 암호화와 저장 시 암호화의 구분**
- [ ] [02.Encrypting Sensitive Data & Compliance Standards.md](../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%204%20-%20Encryption%20and%20Compliance/02.Encrypting%20Sensitive%20Data%20&%20Compliance%20Standards.md)

보조: IBM `02 Introduction to Cloud Computing` Module 5

- [ ] [04 Cloud Encryption.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/02%20Introduction%20to%20Cloud%20Computing/Module%205%20-%20Cloud%20Security,%20Monitoring,%20Case%20Studies,%20Jobs/04%20Cloud%20Encryption.md) — 클라우드에서 키를 누가 쥐는가

## 4-B. HTTPS 적용과 TLS 종료 지점

메인: Protecting and Managing APIs + NAVER Cloud Platform Boot Camp

- [ ] [03.Demonstration - Implementing HTTPS for an API.md](../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%204%20-%20Encryption%20and%20Compliance/03.Demonstration%20-%20Implementing%20HTTPS%20for%20an%20API.md) — API 하나에 HTTPS를 실제로 붙이는 데모
- [ ] [06 Network - Network Proxy Load Balancer.md](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%204%20-%20Network/06%20Network%20-%20Network%20Proxy%20Load%20Balancer.md) — **TLS를 로드밸런서에서 끊는 구성.** 도메인 인증서를 Certificate Manager에 등록하고 TLS 리스너에서 고른다. 강의 실습에서는 인증서가 없어 TLS 없이 진행하므로, **Phase 2의 도메인이 있으면 여기서 실제로 붙여 볼 수 있다**
- [ ] [10 Demo - Automating SRE with Ansible and HTTPS Nginx.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%204%20-%20Reliability%20Engineering%20&%20Deployments/10%20Demo%20-%20Automating%20SRE%20with%20Ansible%20and%20HTTPS%20Nginx.md) — Nginx에 HTTPS를 자동화로 얹는 쪽. Phase 5·10과 겹친다

## 4-C. 공백 — 인증서 체인 · CA · Let's Encrypt

저장소의 TLS 강의는 **핸드셰이크까지는 잘 설명하지만 인증서 자체를 만들어 보지 않는다.** CSR·CA 서명·체인 검증을 손으로 하는 강의가 없고, Let's Encrypt는 저장소 어디에도 없다. 인증서 만료·체인 누락이 실무 장애의 큰 몫이라 이 공백은 메우는 편이 좋다.

| 강의 | 플랫폼 | 링크 | 비고 |
|---|---|---|---|
| TLS & HTTPS Explained – Visualizations & Localhost Setup | MOOC (Packt) | [링크](https://www.mooc.org/learn/packt-tls-and-https-explained-visualizations-and-localhost-setup-qelju) | 3모듈 6시간. Module 1이 대칭·비대칭 암호, Module 2가 **핸드셰이크를 ClientHello/ServerHello → premaster/master secret 순으로 쪼개고 PKI·CA·CSR**을 다룬다. Module 3은 **`openssl`로 직접 CA 키와 인증서를 만들고 서버 키쌍·서명 인증서를 생성해 로컬 HTTPS 서버를 세우는 실습.** Wireshark 분석과 TLS 1.3도 포함 |

이 강좌가 4-C의 인증서 체인·CA 부분을 그대로 채운다. **다만 Let's Encrypt 자동 갱신은 이 강좌에도 없으므로 아래 과제로 채운다.**

## 산출물 과제 (강의 없이도 가능)

1. **체인 읽기** — 아무 HTTPS 사이트에 `openssl s_client -connect example.com:443 -showcerts` 를 실행해 리프·중간·루트 인증서를 순서대로 뽑고, 각각의 발급자(Issuer)와 주체(Subject)가 어떻게 이어지는지 그림으로 그린다
2. **체인 깨뜨리기** — 로컬 서버에서 중간 인증서를 일부러 빼고 `curl` 과 브라우저로 각각 접속해 **한쪽만 실패하는 것**을 확인한다. 왜 그런지 문서에 적는다
3. **만료 감시** — `openssl x509 -enddate -noout` 으로 만료일을 뽑아 남은 일수를 출력하는 스크립트를 쓴다. Phase 9의 알림에 연결한다
4. **Let's Encrypt** — Phase 2의 도메인에 `certbot`(또는 `acme.sh`)으로 인증서를 발급한다. **HTTP-01과 DNS-01 챌린지를 둘 다 해 보고** 차이를 적는다. 갱신을 `systemd` 타이머나 cron에 걸고 `--dry-run` 으로 검증한다
5. **종료 지점 비교표** — TLS를 (a) 로드밸런서에서 끊고 뒤는 평문, (b) 로드밸런서에서 끊고 뒤는 다시 TLS, (c) 백엔드까지 그대로 통과 — 세 구성의 장단점을 성능·보안·인증서 관리 관점에서 표로 만든다

## 산출물

**"내 도메인 HTTPS 구축 기록".** Let's Encrypt로 발급받아 자동 갱신이 도는 인증서, `openssl s_client` 로 확인한 체인, 위 5번의 종료 지점 비교표, 그리고 3번의 만료 감시 스크립트.

## 다음 단계

→ [05 Phase 5 - 프록시와 로드밸런싱](05%20Phase%205%20-%20%ED%94%84%EB%A1%9D%EC%8B%9C%EC%99%80%20%EB%A1%9C%EB%93%9C%EB%B0%B8%EB%9F%B0%EC%8B%B1.md)

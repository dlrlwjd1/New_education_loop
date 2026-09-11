# Introduction

## 개요

- 다른 챕터와 성격이 다른 특별 챕터
- **새로운 요소를 배우지 않는다.** 대신 학생들이 자주 빠지는 **함정(trap)** 을 다룬다
- 두 가지 함정: **Deadlock**과 **Multi-merge**

## 내용

### 이 챕터의 목표

> **이 함정들을 피하고 처음부터 제대로 하도록(get it right from the very start) 돕는 것**

두 함정 모두 **여는 gateway와 닫는 gateway의 짝을 잘못 맞추는 것**에서 생긴다.

| 함정 | 발생 원인 |
|---|---|
| **Deadlock** | 여는 **exclusive** gateway를 닫는 **parallel** gateway로 닫음 |
| **Multi-merge** | 여는 **parallel** gateway를 닫는 **exclusive** gateway로 닫음 |

## 요약

- 이 챕터는 새 기호가 아니라 **잘못된 모델링 패턴**을 다룬다
- 두 함정 모두 **gateway 짝짓기(pairing) 실수**에서 비롯된다

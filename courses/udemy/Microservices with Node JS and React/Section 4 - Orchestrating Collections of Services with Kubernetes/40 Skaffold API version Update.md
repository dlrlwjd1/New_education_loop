# Skaffold API version Update

## 개요
- Skaffold API version Update The v2Alpha3 API version of Skaffold that is used in the course is a few versions behind. Based on all of our recent testing this should still be supported and work without any errors or issues. skaffold schema list will return the API versions that are supported by the version of Skaffold you have installed.

## 내용
### 자막·본문 기반 핵심 내용
- Skaffold API version Update The v2Alpha3 API version of Skaffold that is used in the course is a few versions behind. Based on all of our recent testing this should still be supported and work without any errors or issues. skaffold schema list will return the API versions that are supported by the version of Skaffold you have installed.
- - ./infra/k8s/* You can find the full updated code attached to the next lecture as a zip file.
- That said, some students may want to upgrade their skaffold config. There is a very easy way to do this by just running skaffold fix from your terminal: https://skaffold.dev/docs/references/cli/#skaffold-fix This will print an updated version of your Skaffold config to the terminal so that you can copy-paste or review and update as nee…
- This will not automatically update or modify your existing file. The main difference between the two APIs is that the deploy and kubectl fields no longer exist: apiVersion: skaffold/v2alpha3 kind: Config kubectl: manifests: - ./infra/k8s/* Should now be written as: apiVersion: skaffold/v4beta3 kind: Config manifests: rawYaml:

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `Skaffold`, `API`, `schema`, `https`, `kubectl`, `Skaffold API version Update`, `Skaffold that is used in the course is a few versions behind. Based on all of our recent testing this should still be supported and work without any errors or issues`, `skaffold schema list will return the API`, `Skaffold you have installed`, `skaffold config. There is a very easy way to do this by just running skaffold fix from your terminal`

## 예시
`Skaffold`, `API`, `schema`, `https`, `kubectl`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Skaffold API version Update**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/37117726#overview)

# [AWS] VPC Peering

> VPC 끼리 연결해주는 서비스

## 특징

- 리전내부 및 리전간 지원
- 전용 게이트웨이 생성
- 생성되고 추가 라우팅 테이블 적용 필요
- 내부에서만 Private하게 연결
- 전이적 피어링 지원 안함

::: tip 전이적 피어링
A와 B가 연결되어있고, B와 C가 연결되있어도 A 와 C는 통신할 수 없다.
이거 문제 해결하려고 나온게 `Transit Gateway` (다수의 네트워크를 private하게 연결시켜주는 서비스)
:::

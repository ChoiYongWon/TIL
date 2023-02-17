# [VPC] Subnet

서브넷은 생성하면 처음엔 무조건 Private 서브넷이다.

### Public Subnet

인터넷 게이트웨이를 생성하여 해당 서브넷의 라우팅 테이블을 인터넷 게이트웨이를 연결하면된다.

### Private Subnet

Private 서브넷은 Outbound로 통신해야할일이 잦은 경우엔 NAT 게이트웨이로 통신한다.

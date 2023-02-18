# [VPC] public subnet vs private subnet

서브넷은 생성하면 처음엔 무조건 `private subnet`이다.
`public subnet`과 `private subnet`을 구분하는 기준은 `인터넷 게이트웨이`가 연결 되어있냐 없냐로 구분한다.

### Public Subnet

인터넷 게이트웨이를 생성하여 해당 서브넷의 라우팅 테이블을 인터넷 게이트웨이를 연결하면된다.

### Private Subnet

VPC 외부로부터 `Inbound` `Outbound` 요청이 단절되어있는 공간이다.
`private subnet`은 `Outbound`로 통신해야할일이 있을 경우엔 `NAT 게이트웨이`로 통신한다.

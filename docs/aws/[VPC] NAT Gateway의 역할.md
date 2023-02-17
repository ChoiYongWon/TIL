# [VPC] NAT Gateway의 역할

목적은 하나밖에 없다.  
Private Subnet에서 `OUTBOUND`로의 요청을 필요로 할때.

이때 Private Subnet에서 Public Subnet에 있는 NAT Gateway를 통해 요청을 보내면,  
Private Subnet의 `사설 IP`가 `공인 IP`로 변환되고, 외부로 나가게 된다.

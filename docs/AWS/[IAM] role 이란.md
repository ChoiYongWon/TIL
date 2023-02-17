# [IAM] role 이란

user, group, role

role은 `임시적인 권한`으로 AWS에서 sts 토큰을 발급받는데 여기에 ttl이 있다.
즉, 정해진 시간이 지나면 권한이 소멸된다.

role은 user가 사용할 수 있고, 또한 aws에 서비스가 다른 aws의 서비스를 제어할때 role을 쓴다.  
후자의 경우 aws 내부적으로 sts 토큰을 주기적으로 refresh 하여 ttl을 유지시킨다.

# DNS Record A vs CNAME

## A Record

`Record A`란 주소 `til.choiyongwon.me`에 대해서 `IP`로 매핑하겠다는 뜻이다.  
즉, url 창에 `til.choiyongwon.me`으로 접속하면 DNS 서버로부터 `til.choiyongwon.me`에 매핑된 `IP`를 제공받는다.

### A Record 활용

개인 서버나, 호스팅은 대체로 IP 주소만 제공되므로,
만약 web server나 application server를 서비스할때,  
유저들이 접속하기 편하게 A Record를 통해 해당 `Domain을 개인서버 IP에 매핑`할 수 있다.

## CNAME Record

`Record CNAME`이란 주소 `til.choiyongwon.me`에 대해서 다른 `Domain`으로 매핑하겠다는 뜻이다.  
즉, url 창에 `til.choiyongwon.me`으로 접속하면 DNS 서버로부터 `til.choiyongwon.me`에 매핑된 `Domain`를 제공받는다.

### CNAME Record 활용

블로그와 같이 이미 Domain이 존재하는 서비스의 `주 Domain을 바꾸고 싶을때` 활용된다.  
예를 들어, `choiyongwon.github.io`를 `til.choiyongwon.me`로 바꾸고 싶을때 활용할 수 있다.

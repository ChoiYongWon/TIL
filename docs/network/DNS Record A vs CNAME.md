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
예를 들어, `choiyongwon.github.io`를 `til.choiyongwon.me`로 바꾸고 싶다고 하자
이떄, DNS 공급자(ex: 가비아)를 통해 CNAME에 `choiyongwon.github.io`을 등록하면 된다.  
추가로, `github` 사이트에서 Custom Domain으로 `til.choiyongwon.me`을 등록하는 과정이 있다.  
이는 주 Domain을 바꾸기 위한 과정이다.  
즉, 기존 `choiyongwon.github.io`으로 접속하면 `til.choiyongwon.me`으로 리다렉트된다.

## 실제 동작 과정

### Case 1 (til.choiyongwon.me으로 접속할 경우)

1. `til.choiyongwon.me`으로 접속한다.
2. DNS Server로부터 CNAME 레코드로 등록된 `choiyongwon.github.io`을 받아온다.
3. `choiyongwon.github.io`으로 접속한다.
4. DNS Server로부터 A 레코드로 등록된 `choiyongwon.github.io`의 `IP`를 받아온다.
5. `IP`로 접속한다.
6. github 서버에서 source URL이 `til.choiyongwon.me`임을 확인하고 매핑된 github page로 연결해준다.

### Case 2 (choiyongwon.github.io로 접속할 경우)

1. `choiyongwon.github.io`으로 접속한다.
2. DNS Server로부터 A 레코드로 등록된 `choiyongwon.github.io`의 `IP`를 받아온다.
3. `IP`로 접속한다.
4. github 서버에서 source URL이 `choiyongwon.github.io`임을 확인하고 바뀐 등록된 주 도메인(`til.choiyongwon.me`)으로 리디렉트 시킨다.
5. goto Case 1

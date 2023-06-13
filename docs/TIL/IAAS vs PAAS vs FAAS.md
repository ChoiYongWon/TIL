# IAAS vs PAAS vs FAAS

클라우드 서버를 구성할때
크게 On-Premise, IAAS, PAAS, FAAS 환경으로 서비스를 구축할 수 있다.
밑으로가면 갈수록 사용자가 관리해야될 요소가 줄어든다.

## On-Premise

그냥 개인 서버 개념이다.  
모든 계층을 사용자가 관리해야한다.  
ex) Physical, Network, Os, 등등

## IAAS

Infrastructure As A Service의 약자.  
`가상화`까지 제공해주는 서비스  
즉 사용자는 OS만 선택해서 관리하면 된다.
ex) Linux, Window, Mac

### IAAS 서비스 예시

- AWS EC2

## PAAS

Platform As A Service의 약자.  
`Runtime`까지 제공해주는 서비스
즉 사용자는 자신의 서비스가 구동될 환경만 선택하고 관리하면된다.  
ex) NodeJS, Python, Java 등

### PAAS 서비스 예시

- AWS Lambda
- AWS Amplify
- AWS RDS
- AWS ECS

## FAAS

Function As A Service의 약자.  
Layer의 최상단인 `Function`만 관리하면 되는 서비스  
사용자는 `Function`의 구동환경만 선택하고 `함수`만으로 원하는 서비스를 제공할 수 있다.

### FAAS 서비스 예시

- AWS Lambda

## FAAS vs Serverless

`Serverless`는 간단히 말해서  
평소에는 서버가 꺼져있다가, 특정 이벤트로 인해서 트리거 되는 순간 서버가 잠시 켜졌다가 작업을 모두 수행하면 다시 꺼지는 방식이다.  
ex) AWS API Gateway  
즉, 사용자는 서버가 켜져서 함수가 실행된 시간에 대한 비용만 지불하면된다.

사용자는 서버에 대해 관리할 필요가 전혀 없다고 해서 `Serverless`라고 불린다.

`FAAS`는 `Serverless`에서 제공하는 유형중 하나이다.  
함수를 기반으로 한 Serverless 환경이라고 이해하면 되겠다.

## 느낀점

공부하면서 느낀건데 처음에는 ~AAS가 제공하는 계층
즉, 클라우드가 관리하는 영역에 따라 명확하게 구분되는줄 알았다.
막상 알아보니 계층에 따라 구분하기 보단, Service로 제공되는 형식에 따라 구분되는것 같다. 예를들어 Platform As A Service와 Container As A Service를 비교할때 CAAS도 컨테이너 관리 툴이라는 플랫폼을 제공해주는 PAAS의 성격을 띄고 있는데, 제공하는 서비스의 형식이 Container 관련 서비스라서 CAAS라고 불리는것 같다.

크게 나누자면 IAAS, PAAS, SAAS로 나뉘는것 같고 거기서 세분화되여 CAAS, FAAS, BAAS 등의 서비스가 파생되는것 같다.

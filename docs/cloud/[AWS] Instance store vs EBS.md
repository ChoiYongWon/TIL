# [AWS] Instance store vs EBS

## Instance Store

> Ec2 인스턴스에 로컬로 연결하는 저장소

### 특징

- 휘발성 ( 인스턴스를 껏다키면 초기화됨 )
- 캐시데이터를 저장하거나 휘발해도 되는 데이터를 저장할때 사용 고려
- 하드웨어 내부에 존재
- 물리적으로 가까움
- 지원되어지는 인스턴스 유형이 따로있다

## EBS

> 네트워크를 통해서 EC2와 빠르게 IO하는 저장소

### 특징

- 지속성 (인스턴스를 껏다켜도 데이터 유지)

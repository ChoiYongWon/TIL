# [AWS] S3 스토리지 클래스

S3에서의 `내구성`이란 복제하는 갯수

## 클래스 유형

- S3 Standard
- S3 Standard-IA (3개의 가용영역에 복사본 저장)
- S3 One Zone-IA (1개의 가용영역에 복사본 저장 내구성이 좀 떨어짐)
- S3 Glacier Instant Retrieval (빠른복원이 필요한)
- S3 Glacier Flexible Retrieval (몇분에서 몇 시간동안 복원)
- S3 Glacier Deep Archive (12시간 이내에 복원)

## S3 Intelligent-Tiering

사용 빈도를 기반으로 분석해서 알아서 S3 클래스를 바꿔줌  
AI가 해주므로 분속 비용이 듬

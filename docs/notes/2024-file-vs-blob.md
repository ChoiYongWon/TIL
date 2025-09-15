---
permalink: /notes/2024-file-vs-blob/
comment: true
---

# File vs Blob

File 객체는 Blob객체를 상속받은 객체이며 Blob의 모든 속성을 다 갖고 있음  
Blob이 파일 그 자체의 데이터라면 File은 메타데이터 등 부가 데이터가 존재함.

### FileReader.readDataAsUrl vs URL.createObjectURL

다른건 없다. readDataAsUrl는 비동기적으로 처리하고 createObjectURL는 동기적으로 처리한다.

---
permalink: /notes/2024-nextjs-static-asset-caching/
comment: true
---

# Nextjs Static Asset 캐싱

Nextjs는 기본적으로 public 폴더에 있는 asset들에 대해선 캐싱을 하지 않는다. (바뀔 수 있기 때문에)

기본적으로 적용된 캐시는 다음과 같다.

```json
Cache-Control: public, max-age=0
```

---
permalink: /notes/2024-vercel-json-cron-hobby-plan-blocked/
comment: true
---

# Vercel.json Cron Hobby 플랜 막힘

Vercel에서 Cron Job을 통해 5분마다 요청하여 cold start를 최대한 방지할려고 한다.

```json
// vercel.json

{
  "crons": [
    {
      "path": "/api/cron",
      "schedule": "*/5 * * * *"
    }
  ]
}
```

5분마다 실행되도록 작성했는데 vercel에서 빌드도 하기전에 거절당해버린다.

<div class="img-container">
    <img class="img" src="https://github.com/ChoiYongWon/AT/assets/40623433/2138c353-495d-4b10-9af4-05f59d8b2c00" alt=""/>
    <span class="caption">그림 1. 거절 당함.</span>
</div>

더 찾아보니 Vercel에서 플랜 별로 Cron 제한이 있다.

<div class="img-container">
    <img class="img" src="https://github.com/ChoiYongWon/AT/assets/40623433/c9a9d126-d366-4d2e-921e-85da64579ef9" alt=""/>
    <span class="caption">그림 2. Vercel Cron Pricing.</span>
</div>

Hobby 플랜은 1개의 Cron을 생성할 수 있고 주기는 하루에 한번이다.

```json
// vercel.json
{
  "crons": [
    {
      "path": "/api/cron",
      "schedule": "0 5 * * *"
    }
  ]
}
```

다시 이렇게 작성하고 push 해보았다.

<div class="img-container">
    <img class="img" src="https://github.com/ChoiYongWon/AT/assets/40623433/562124e0-6448-4109-83a3-094f7a45a72f" alt=""/>
    <span class="caption">그림 3. 해결.</span>
</div>

잘된다.

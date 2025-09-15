---
permalink: /notes/2024-nginx-ssl-lets-encrypt/
comment: true
---

# Nginx에서 SSL 적용하기 Feat. Let's Encrypt

Nginx의 다양한 기능 중에 SSL 보안 기능이 있는데 발급 받은 인증서 경로만 설정해주면 알아서 적용시켜준다.

`python3-certbot-nginx` 플러그인을 사용하면 자동으로 적용해준다.

### API 서버 SSL로 연결하기 Feat. Nginx

Nginx에는 Proxy 기능이 있다.

브라우저와 서버 (Nginx) 간의 연결을 SSL로 통신하고 Nginx에서 내부 서버(localhost:3000)로 Proxy 연결을 해주면 된다.

<div class="img-container">
    <img class="img" src="https://github.com/user-attachments/assets/46110fbc-7f2e-4d15-b7a1-2aa11e7b4de5" alt=""/>
    <span class="caption">그림 1. 연결 과정 다이어그램.</span>
</div>

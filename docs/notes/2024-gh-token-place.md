---
permalink: /notes/2024-gh-token-place/
comment: true
---

# gh 에서 로그인을 했을 때 token은 어디에 저장될까?

gh가 2.40.0으로 릴리즈 되면서 ~/.config/gh/hosts.yml 내에 저장되었던 토큰 정보가 이제 기본으로 시스템 keyring에 저장된다.
macOS에서는 keyChain으로 짐작된다.

참조 [GitHub CLI 2.40.0](https://github.com/cli/cli/discussions/8429#discussioncomment-7799379)

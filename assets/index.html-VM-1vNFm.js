import{_ as s,e as a,g as t,o as n}from"./app-BUwTTWNT.js";const e={};function h(l,i){return n(),a("div",null,i[0]||(i[0]=[t(`<h1 id="branch에서-특정-commit-id가-존재하는지-확인" tabindex="-1"><a class="header-anchor" href="#branch에서-특정-commit-id가-존재하는지-확인"><span>branch에서 특정 commit id가 존재하는지 확인</span></a></h1><p>git 체리픽을 하다보면 특정 커밋이 체리픽하는 브랜치에 포함되어있는지 헷갈릴때가 있다</p><h3 id="commit-id가-포함된-모든-브랜치-출력" tabindex="-1"><a class="header-anchor" href="#commit-id가-포함된-모든-브랜치-출력"><span>commit id가 포함된 모든 브랜치 출력</span></a></h3><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#61AFEF;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#98C379;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#D19A66;--shiki-dark:#D19A66;"> --contains</span><span style="--shiki-light:#98C379;--shiki-dark:#98C379;"> {commitId}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#7F848E;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># * develop</span></span>
<span class="line"><span style="--shiki-light:#7F848E;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#   feat/1</span></span>
<span class="line"><span style="--shiki-light:#7F848E;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#   feat/2</span></span></code></pre></div><h3 id="특정-branch-내에서-commit-id-검색" tabindex="-1"><a class="header-anchor" href="#특정-branch-내에서-commit-id-검색"><span>특정 branch 내에서 commit id 검색</span></a></h3><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#61AFEF;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#98C379;--shiki-dark:#98C379;"> log</span><span style="--shiki-light:#98C379;--shiki-dark:#98C379;"> {branch}</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#61AFEF;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#98C379;--shiki-dark:#98C379;"> {commitId}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#7F848E;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># commit {commitId}</span></span></code></pre></div>`,6)]))}const k=s(e,[["render",h],["__file","index.html.vue"]]),o=JSON.parse('{"path":"/notes/git-search-commit-id/","title":"branch에서 특정 commit id가 존재하는지 확인","lang":"en-US","frontmatter":{"permalink":"/notes/git-search-commit-id/","tags":["git"],"comment":true},"headers":[{"level":3,"title":"commit id가 포함된 모든 브랜치 출력","slug":"commit-id가-포함된-모든-브랜치-출력","link":"#commit-id가-포함된-모든-브랜치-출력","children":[]},{"level":3,"title":"특정 branch 내에서 commit id 검색","slug":"특정-branch-내에서-commit-id-검색","link":"#특정-branch-내에서-commit-id-검색","children":[]}],"git":{"updatedTime":1742043753000,"contributors":[{"name":"ChoiYongWon","username":"ChoiYongWon","email":"yongwon0824@naver.com","commits":2,"url":"https://github.com/ChoiYongWon"}],"changelog":[{"hash":"0110291977f53826dae9f09585245fb7d0d4aed2","date":1742043753000,"email":"yongwon0824@naver.com","author":"ChoiYongWon","message":"[Git] 문서 추가 - rebase나 cherry-pick시 무시되는 commit - rebase가 동작하는 원리? - pr 간 디펜던시가 많을 때 rebase 효과적으로 하는 방법 - patch-id란 무엇인가?"},{"hash":"284e20861952eaef4b2b2879665547d70e6ff7cd","date":1741696976000,"email":"yongwon0824@naver.com","author":"ChoiYongWon","message":"[git] branch에서 특정 commit id가 존재하는지 확인"}]},"filePathRelative":"notes/git-search-commit-id.md","excerpt":"\\n<p>git 체리픽을 하다보면 특정 커밋이 체리픽하는 브랜치에 포함되어있는지 헷갈릴때가 있다</p>\\n<h3>commit id가 포함된 모든 브랜치 출력</h3>\\n<div class=\\"language-sh\\" data-highlighter=\\"shiki\\" data-ext=\\"sh\\" style=\\"--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#61AFEF;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#98C379;--shiki-dark:#98C379\\"> branch</span><span style=\\"--shiki-light:#D19A66;--shiki-dark:#D19A66\\"> --contains</span><span style=\\"--shiki-light:#98C379;--shiki-dark:#98C379\\"> {commitId}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#7F848E;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># * develop</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#7F848E;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#   feat/1</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#7F848E;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#   feat/2</span></span></code></pre>\\n</div>"}');export{k as comp,o as data};

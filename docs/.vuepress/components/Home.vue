<template>
  <div>
    <div>
      <h1>rtolzo's <br />아카이브</h1>
    </div>
    <h2>소개</h2>
    <div class="info">
      "블로그 내의 모든 글은 제 나름대로의 해석을 기록한 내용이며, 사실과 다를
      수 있습니다."
    </div>
    <p>
      기억하고 활용하기 위해 기록합니다.
      <br />
    </p>

    <div>
      <a href="#" class="tag">#기록중..</a>
      <a href="#" class="tag">#✍️</a>
      <a href="#" class="tag">#현재</a>
      <a href="#" class="tag">#공사중</a>
    </div>
  </div>
</template>

<script></script>

<style>
@import "https://fonts.googleapis.com/css?family=Gugi";

h1 {
  font-family: "Gugi", cursive;
  font-weight: 500;
  border-bottom: 17px solid var(--vp-c-accent-hover);
  word-break: keep-all;
  font-size: 5rem;
}

.tag {
  margin-right: 0.3rem;
}

.info {
  font-weight: 400;
  font-style: oblique;
  /* text-decoration: underline; */
  text-decoration-color: var(--vp-c-text);
  margin: 2rem 0;
}
</style>

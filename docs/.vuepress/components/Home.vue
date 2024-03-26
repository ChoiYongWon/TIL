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
    </div>

    <!-- <h2>모토</h2>
    <ul>
      <li>- 할 때 좋은 것 보다, 하고 나서 좋은 게 진짜 좋은거다.</li>
      <li>- 준비하지 않은 자는 기회가 와도 소용없다.</li>
      <li>- 내가 좋아하는 일을 설명하지 않아도 느낄 수 있을만큼 좋아해라.</li>
    </ul> -->
  </div>
</template>

<script></script>

<style>
@import "https://fonts.googleapis.com/css?family=Gugi";

h1 {
  font-family: "Gugi", cursive;
  font-weight: 500;
  border-bottom: 17px solid #ffd816;
  word-break: keep-all;
  font-size: 5rem;
}

ul {
  line-height: 2rem;
}

.tag {
  margin-right: 0.3rem;
}

img {
  border-radius: 6px;
}

.info {
  font-weight: 400;
  font-style: oblique;
  /* text-decoration: underline; */
  text-decoration-color: #2c3e50;
  margin: 2rem 0;
}

code {
  border-radius: 4px !important;
}

img > .caption {
  font-size: 12px;
}

.img-container {
  width: 100%;
  display: inline-block;
  margin-bottom: 16px;
  margin-top: 16px;
}

.caption {
  display: block;
  text-align: center;
  font-size: 14px;
}

@media (max-width: 550px) {
  h1 {
    font-size: 4.4rem;
  }
}

@media (max-width: 430px) {
  h1 {
    font-size: 3.4rem;
  }
}
</style>

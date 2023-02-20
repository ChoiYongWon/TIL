<template>
  <div>
    <div>
      <h1>조립해가는 <br />지식 조각들</h1>
    </div>
    <h2>소개</h2>
    <p>
      짧은 지식들을 기록하는 용도의 블로그이다. <br />
      하나의 글은 하나의 지식 조각이다.<br />

      하나의 큰 개념을 이해하기 위해 여러 지식 조각들을 조립하여 개념을
      정립한다.<br />
    </p>
    <div>
      <a href="#" class="tag">#조립중..</a>
      <a href="#" class="tag">#😩</a>
    </div>
    <h2>모토</h2>
    <ul>
      <li>- 할 때 좋은 것 보다, 하고 나서 좋은 게 진짜 좋은거다.</li>
      <li>- 준비하지 않은 자는 기회가 와도 소용없다.</li>
    </ul>
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
  list-style: none;
  line-height: 2rem;
}

.tag {
  margin-right: 0.3rem;
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

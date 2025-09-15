---
permalink: /notes/2024-what-css-will-change-does-internally/
comment: true
---

# CSS will-change는 브라우저 내부적으로 어떤 과정이 진행되는가?

```css
.component {
  will-change: transform;
}
```

라 가정할 때

- transform을 실제로 사용하기 전에 해당 요소를 별도의 레이어로 승격시킨다. 레이어가 생성될 때의 지연시간을 줄일 수 있다.
- 변형이 예상되는 요소에 대해 GPU 메모리를 미리 할당한다.
- 브라우저는 해당 요소에 대한 애니메이션을 예상하고, 프레임 계산 등을 최적화할 수 있다.

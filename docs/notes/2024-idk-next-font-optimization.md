---
permalink: /notes/2024-idk-next-font-optimization/
comment: true
---

# Next Font 최적화 궁금한점

- next에서 next/fonts를 사용해서 폰트 최적화를 하면 production 환경에서 static 폴더 내로 이동하는데 이게 public 폴더랑 차이점을 모르겠음.  
  브라우저 Network 탭 기준으로 봤을땐 리소스를 빨리 가져오는거 같긴한데 그거 말곤 폰트 최적화를 어떻게 하는지 모르겠다. External 폰트 같은 경우에는 Next에서 자체적으로 관리를 해준다지만 그게 아닌 Local Font에서는 뭐가 이점인지 잘 모르겠음.

- Variable (가변) 폰트를 사용하면 유연성과 성능에 좋다고 하는데 이것도 잘 모르겠음. 일반 폰트는 300kb라 가정하고 가변폰트는 1.5mb라 가정했을때 브라우저에서 자주 사용하는 폰트만 사용하면 (regular, bold) 600kb만 사용하는 반면에 가변폰트를 사용하면 무조건 1.5mb의 트래픽이 발생하는거 아닌가? 라는 의문

# Component组件的两种用法:页面组件/标签组件

## 组件两种用法
- 页面组件:
    - 通过route路由机制,直接访问的组件,一般作为父组件
- 标签组件:
    - 通过HTML标签形式,在父组件中直接引入的新标签

## 参考文档
- [Component官方文档](https://angular.cn/guide/component-overview)
- [原理：从零开始实现一个Component装饰器](../case-tslang/decorators.ts)

# 进入子模块,创建一个通过标签进行渲染的子组件

``` sh
cd src/modules/bvideo
ng g component video-card --module bvideo

# CREATE src/modules/bvideo/video-card/video-card.component.html (25 bytes)
# CREATE src/modules/bvideo/video-card/video-card.component.spec.ts (621 bytes)
# CREATE src/modules/bvideo/video-card/video-card.component.ts (218 bytes)
# CREATE src/modules/bvideo/video-card/video-card.component.scss (0 bytes)
# UPDATE src/modules/bvideo/bvideo.module.ts (530 bytes)

# !!!! 修改video-card的selector为bvideo-video-card 以便统一管理,在页面中加载
```

# 完善子组件基本的HTML结构以及CSS样式

- src\modules\bvideo\video-card\video-card.component.ts
``` ts
import { Component } from '@angular/core';

@Component({
  selector: 'bvideo-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent {

  video:any = {
      image:"",
      countLike:"",
      countComment:"",
      title:""
  }

  constructor(){
  }
}
```

- src\modules\bvideo\video-card\video-card.component.html

``` html
<div class="video-item">
    <div class="video-head">
        <img src="{{video.imge}}"
            alt="{{video.title}}">
        <div class="video-count">
            <div class="count-left"><img src="assets/modules/bvideo/img/24gl-playSquare (1).png" alt=""
                    style="width: 20px;"><span class="nub">{{video.countLike}}</span></div>
            <div class="count-right"><img src="assets/modules/bvideo/img/弹幕.png" style="width: 20px;" alt=""
                    style="width: 20px;">{{video.countComment}}</div>
        </div>
    </div>
    <span class="text">{{video.title}}</span>
</div>
```

- src\modules\bvideo\video-card\video-card.component.scss
``` scss

    .video-item {
        float: left;
        width: calc(50% - 10px);
        height: 160px;
        padding: 2px 3px 3px 5px;
        /*上 右 下 左*/
    }

    .video-item>.video-head {
        width: 100%;
    }

    .video-item img {
        width: 100%;
    }

    .video-item .video-count {
        position: relative;
        height: 25px;
        margin-top: -25px;
        color: #ffffff;
        background-image: linear-gradient(to bottom, hsl(0deg 0% 24% / 0%), rgb(0 0 0));
    }

    .count-left {
        float: left;
        margin-left: 5px;

    }

    .count-right {
        float: right;
        margin-right: 5px;
        color: #ffffff;
    }

    .video-item>span {
        font: -webkit-mini-control;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        color: black;
    }

    .text {
        position: relative;
        bottom: -11px;
    }

    .nub {
        position: relative;
        right: -10px;
        top: -3px;
    }

```

# 完善子组件从父组件输入变量的传递过程

- src\modules\bvideo\video-card\video-card.component.ts

``` ts
import { Component,Input } from '@angular/core';

@Component({
  selector: 'bvideo-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent {
  // Input 属性装饰器,可以让组件在父组件调用过程中传入变量,如 [video]="video"
  @Input("video")
  video:any = {
      image:"",
      countLike:"",
      countComment:"",
      title:""
  }

  constructor(){
  }
}

```
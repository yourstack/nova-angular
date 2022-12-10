# Service:服务实现多组件数据共享

# 创建第一个服务
``` sh
# 创建服务无需加-service名称
# 创建服务无需指定Module，可直接从root注入，引入即可组件使用
ng g service user
```

# 项目中引用服务
## 组件中引用
- 示例代码：[VideoHomeComponent引入视频服务获取数据](../../src/modules/bvideo/home/home.component.ts)

``` ts
import { VideoService } from '../video.service';

export class HomeComponent {
    // 采用public是因为视频服务中，有页面跳转逻辑在template加载
    constructor(public videoServ:VideoService){}
}
```

## 服务中引用
- 示例代码：[VideoService中引入了路由服务实现跳转逻辑](../../src/modules/bvideo/video.service.ts)

``` ts
import { Router } from '@angular/router';

export class VideoService {
    constructor(private router:Router) { }
    goVideoDetail(id:number){
        this.router.navigate(["/bvideo/video"],{queryParams:{id:id}})
    }
}
```


# 服务的设计及注意事项

## public/private的区别
- public 可以将服务在template中调用
- private 仅能将服务在当前组件类中调用
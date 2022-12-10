# Library：企业前端库

# 创建一个前端库

``` sh
# 创建前端库
ng g library lib-nova
# 打包前端库
ng build --project=lib-nova
```

# 前端库新增构造块
- 组件目录：projects/lib-nova/src/lib
    - components 组件
    - directives 指令
    - modules 模块
    - pipes 管道
- 模块导出 projects/lib-nova/src/public-api.ts
``` ts
// 组件
export * from './lib/components/edit-rating-star/rating-star.component';
// 管道
export * from './lib/pipes/pipe-towan.pipe';
// 指令
export * from './lib/directives/highlight.directive';
```

# 从前端库引用

- 在任意module内引用前端库组件

``` ts
// 引入方式1：打包后dist引入方式
// ng build --project=lib-nova
import { EditRatingStarComponent } from 'dist/lib-nova';
// 引入方式2：子项目组件
import { EditRatingStarComponent } from '../../../projects/lib-nova/src/public-api';
// 引入方式3：发布npm或开源版本库后包管理器引入
import { EditRatingStarComponent } from 'lib-nova';

```
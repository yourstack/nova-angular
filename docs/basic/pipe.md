# Pipe 管道页面数据的快速处理工具

# Angular系统内置管道
- 官方管道：http://angular.cn/guide/pipes-overview
    - DatePipe http://angular.cn/api/common/DatePipe

- 官方管道的函数实现
    - toWan
    - toK

# 自定义管道

``` sh
ng g pipe toK --module gametap
mkdir pipes
mv to-k* pipes
# 修改子模块对toKPipe的引入路径 gametap.module.ts
import { ToKPipe } from './pipes/to-k.pipe';
```


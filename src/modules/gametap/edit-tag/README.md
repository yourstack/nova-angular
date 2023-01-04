
# 标签编辑组件
- 组件名称：nova-edit-tag


## 依赖模块
- FormsModule
``` js
import { FormsModule } from '@angular/forms';

imports: [
    CommonModule,
]
```
## 页面结构

``` html
输入区域：
<input type="text"></input>
<button>添加</button>

展示区域：

<span>卡牌</span>
<span>养成</span>
<span>策略</span>
<span>PVP</span>
```

## 数据结构

``` js
// 用列表存储标签数组
tagList:string[] = ["卡牌",'养成']

// 方法：添加标签
addTag(tag:string){
    this.tagList.push(tag)
}
```
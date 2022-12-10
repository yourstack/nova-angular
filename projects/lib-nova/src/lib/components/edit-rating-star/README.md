# 评分星星组件

组件：nova-rating-star
版本：0.0.1
功能：数字转换成星星

## 使用示例

``` html
<!-- 输入属性：
    score: 当前分值，默认0
    total: 总星星数量，默认5
    editable: 是否允许编辑，默认 false
-->
<nova-rating-star [score]="5" [total]="10"></nova-rating-star>
```

# 页面结构 HTML CSS

<!-- 空星星 -->
<img src="../../../assets/modules/bvideo/img/star-outline.png" />

<!-- 半星星 -->
<!-- <img src="../../../assets/modules/bvideo/img/star-half.png" /> -->

<!-- 满星星 -->
<img src="../../../assets/modules/bvideo/img/star-full.png" />


# 数据变量与业务逻辑 JS
- 属性
    - score 分数，满的有多少个星星
    - total 总分，总共有多少颗星星
    - lists 星星图片列表：由图片地址string构成的一个列表
- 方法
    - makeStar();

``` ts

class{
    score:number = 3
    total:number = 5
    list:Array<string> = []
    construtor(){}
    makeStar(){
        let fullStar = "../../../assets/modules/bvideo/img/star-full.png"
        let outStar = "../../../assets/modules/bvideo/img/star-outline.png"

        for(let index = 0;  index < this.total; index++){
            if(index+1<=this.score){
                this.list.push(fullStar)
            }else{
                this.list.push(outStar)
            }
        }
    }
}
```
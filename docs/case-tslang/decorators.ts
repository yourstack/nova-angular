/* 装饰器
    * 参考文档:
        * 类装饰器:https://www.tslang.cn/docs/handbook/decorators.html#class-decorators
        * 元数据:Angular中元数据,采用工厂函数实现
    * 编译指令:
        * tsc ./decorators.ts --target ES5 --experimentalDecorators
        * 由于Angular使用了TS试验特性装饰器，需要增加参数 --experimentalDecorators
*/

/**
 * 组件装饰器,通过工厂函数实现可携带元数据的Component装饰器
 */
function Component(metaData?:{
    selector:string
    template:string
    styleCss:string
}){
    // 通过工厂函数,实现装饰器加载是,元数据参数传递
    return function(constructor:Function){
        constructor.prototype.selector = metaData?.selector
        constructor.prototype.template = metaData?.template
        constructor.prototype.styleCss = metaData?.styleCss
        constructor.prototype.ngOnInit = ()=>{}
        constructor.prototype.renderComponent = ()=>{
            // 渲染函数实现了组件的生命周期
            // constructor 构造函数在new Class时候已经执行了
            // 渲染过程:解析html,解析scss,解析变量函数方法
                let innerStyle = "<style>"+constructor.prototype.styleCss+"</style>";
                let innerHTML = constructor.prototype.template;
                if(document.getElementsByTagName(constructor.prototype.selector).length>0){
                    document.getElementsByTagName(constructor.prototype.selector)[0].innerHTML = innerStyle+innerHTML
                }
            // 完成渲染:调用ngOnInit()生命周期
            constructor.prototype.ngOnInit()
        }

    }
}

/**
 * 组件类定义参数,通过Component装饰器,快速定义组件页面\组件标签
 */
@Component({
    selector:"video-home",
    template:`
    <ul>
        <li>视频1:xxx.mp4</li>
        <li>视频2:xxx.mp4</li>
        <li>视频3:xxx.mp4</li>
    </ul>
    `,
    styleCss:`
        li{
            color:red
        }
    `
})
class VideoHomePage{
    constructor(){
    }
}

@Component({
    selector:"nova-like-button",
    template:`<button>点赞喜欢</button>`,
    styleCss:`button{
        border:solid 2px;
        border-color:yellow;
    }`
})
class LikeButtonComponent{
    constructor(){

    }
}



/**
 * 模块声明参数,写入在本模块可加载的组件类
 */
let ModuleDeclarations:any[] = [
    VideoHomePage,
    LikeButtonComponent
]

window.onload = ()=>{
    ModuleDeclarations.forEach((CompClass:any)=>{
        // 最终,由模块决定declaration中的组件,在对应的时间渲染
        let comp = new CompClass()
        comp.renderComponent() // 渲染组件
    })
}

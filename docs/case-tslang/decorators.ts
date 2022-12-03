// tsc ./decorators.ts --target ES5 --experimentalDecorators  --emitDecoratorMetadata
/* 参考文档:
    * 类装饰器:https://www.tslang.cn/docs/handbook/decorators.html#class-decorators
    * 元数据:https://www.tslang.cn/docs/handbook/decorators.html#metadata
*/
import "reflect-metadata";
// metaData:{
//     selector:string // video-home
//     templateHtml:string
//     styleCss:string
// }
 
function Component(constructor:Function){
    Object.seal(constructor);
    console.log(constructor);
}

@Component
class VideoHomePage{
    constructor(){
    }
}


let videoHomePage = new VideoHomePage()

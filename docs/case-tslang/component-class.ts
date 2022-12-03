
class ComponentClass{
    selector:string // video-home
    templateHtml:string
    styleCss:string
    constructor(metaData:{
        selector:string 
        templateHtml:string
        styleCss:string
    }){
        this.selector = metaData.selector
        this.templateHtml = metaData.templateHtml
        this.styleCss = metaData.styleCss
    }
    init(){
        declarations.push(()=>{
            let innerStyle = "<style>"+this.styleCss+"</style>";
            let innerHTML = this.templateHtml;
            document.getElementsByTagName(this.selector)[0].innerHTML = innerStyle+innerHTML
        })
    }
}

let videoHomePage1 = new ComponentClass({
    selector:"video-home",
    templateHtml:`
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

let likeButton1 = new ComponentClass({
    selector:"nova-like-button",
    templateHtml:`<button>点赞喜欢</button>`,
    styleCss:`button{
        border:solid 2px;
        border-color:yellow;
    }`
})


var declarations:any = []

videoHomePage1.init();
likeButton1.init();

window.onload = ()=>{
    declarations.forEach((compInitFunc:any)=>{
        compInitFunc();
    })
}
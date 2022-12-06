import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    VideoData:any = []
    NavData:any = []
    currentNav:string = "首页"

    constructor(){
        this.getNavData();
        this.getVideoData();
    }
    changeNav(nav:any){
        this.currentNav = nav
    }

    ngOnInit(){

    }

    getNavData(){
        this.NavData = ["首页","动画","番剧","国创","音乐","舞蹈","游戏","知识","科技","运动","汽车","生活","美食","运动圈","鬼畜","时尚","娱乐","影视","纪录片","电影","电视剧","直播","相簿","课堂"]
    }

    getVideoData(){
        this.VideoData=[       
            {
                image:"https://i0.hdslb.com/bfs/archive/8a11012a1264695362eab164379afad5b7e2a7f9.jpg@480w_270h_1c.webp",
                countLike:"774.4w",
                countComment:"422",
                title:"【亮记生物鉴定】网络热传生物鉴定44"

            },
            {
                image:"https://i1.hdslb.com/bfs/archive/a870e731e806c63a33731e545f8dd4b7ae12231e.jpg@480w_270h_1c",
                countLike:"48.4w",
                countComment:"4211",
                title:"关于我连夜去上海找甲方要92万片卫生巾这件事"

            },
            {
                image:"https://i1.hdslb.com/bfs/archive/8498bd0190839039254faade3d08216acd0ee318.jpg@480w_270h_1c.webp",
                countLike:"12w",
                countComment:"1.1w",
                title:"蓝 色 妖 姬 是 怎 样 练 成 的"

            },
            {
                image:"https://i1.hdslb.com/bfs/archive/efb15153565d2d55b037e6d738a8308fe82deb7b.jpg@480w_270h_1c.webp",
                countLike:"44w",
                countComment:"2123",
                title:"《赌球心态大赏》"

            },
            {
                image:"https://i1.hdslb.com/bfs/archive/2b5fcf492b76d23988db97b496dab71ee62ad1bb.jpg@480w_270h_1c.webp",
                countLike:"211.3w",
                countComment:"133",
                title:"少佐，请给我命令"

            },
            {
                image:"https://i1.hdslb.com/bfs/archive/4bbffb87b6f5b4ee3fa515d918e819a45ccef7f3.jpg@480w_270h_1c.webp",
                countLike:"666.3w",
                countComment:"8.5w",
                title:"一顿就花四千！麻辣小青龙、沸腾帝王蟹！一顿把海鲜天花板吃到饱！"

            },
            {
                image:"https://i1.hdslb.com/bfs/archive/7f153524a51adc09cd6bccf1ad4ef10682f751e0.jpg@480w_270h_1c",
                countLike:"122.3w",
                countComment:"165",
                title:"我收容的MC主世界的所有BOSS!!"

            },
            {
                image:"https://i1.hdslb.com/bfs/archive/16eac1223b530b7b521d02d5b4810b182de7314d.jpg@480w_270h_1c.webp",
                countLike:"121.w",
                countComment:"1210",
                title:"为了守护学校我成了偶像"

            },
            {
                image:"https://i1.hdslb.com/bfs/archive/7b8001588b0441af75074f4fb0c494c31b09990d.jpg@480w_270h_1c.webp",
                countLike:"100.5W",
                countComment:"1.6w",
                title:"我能相信这两玩意吗"

            },
            {
                image:"https://i1.hdslb.com/bfs/archive/d44b7dd691392f5a4db0165369670b3a1f41b11f.jpg@480w_270h_1c.webp",
                countLike:"25.6W",
                countComment:"1006",
                title:"无屏风表演《口技》还原文言文！！！"

            }
        ]
    }
}

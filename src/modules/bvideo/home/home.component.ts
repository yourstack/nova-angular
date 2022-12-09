import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public stars: string[] = [
        '../../../assets/modules/bvideo/img/star-full.png',
        '../../../assets/modules/bvideo/img/star-full.png',
        '../../../assets/modules/bvideo/img/star-full.png',
        '../../../assets/modules/bvideo/img/star-full.png',
        '../../../assets/modules/bvideo/img/star-full.png',
    ]
    public score: number = 3
    VideoData: any = []
    NavData: any = []
    currentNav: string = "首页"

    constructor() {

    }
    changeNav(nav: any) {
        this.currentNav = nav
    }
    ngOnInit() {
        this.NavData = ["首页", "动画", "番剧", "国创", "音乐", "舞蹈", "游戏", "知识", "科技", "运动", "汽车", "生活", "美食", "运动圈", "鬼畜", "时尚", "娱乐", "影视", "纪录片", "电影", "电视剧", "直播", "相簿", "课堂"]

        this.VideoData = [
            {
                imge: "assets/modules/bvideo/img/8a11012a1264695362eab164379afad5b7e2a7f9.jpg@480w_270h_1c",
                countLike: "774.4w",
                countComment: "422",
                title: "【亮记生物鉴定】网络热传生物鉴定44"

            },
            {
                imge: "assets/modules/bvideo/img/关于.webp",
                countLike: "48.4w",
                countComment: "4211",
                title: "关于我连夜去上海找甲方要92万片卫生巾这件事"

            },
            {
                imge: "assets/modules/bvideo/img/蓝色.webp",
                countLike: "12w",
                countComment: "1.1w",
                title: "蓝 色 妖 姬 是 怎 样 练 成 的"

            },
            {
                imge: "assets/modules/bvideo/img/efb15153565d2d55b037e6d738a8308fe82deb7b.jpg@480w_270h_1c.webp",
                countLike: "44w",
                countComment: "2123",
                title: "《赌球心态大赏》"

            },
            {
                imge: "assets/modules/bvideo/img/命令.webp",
                countLike: "211.3w",
                countComment: "133",
                title: "少佐，请给我命令"

            },
            {
                imge: "assets/modules/bvideo/img/吃.webp",
                countLike: "666.3w",
                countComment: "8.5w",
                title: "一顿就花四千！麻辣小青龙、沸腾帝王蟹！一顿把海鲜天花板吃到饱！"

            },
            {
                imge: "assets/modules/bvideo/img/我的世界.webp",
                countLike: "122.3w",
                countComment: "165",
                title: "我收容的MC主世界的所有BOSS!!"

            },
            {
                imge: "assets/modules/bvideo/img/偶像.webp",
                countLike: "121.w",
                countComment: "1210",
                title: "为了守护学校我成了偶像"

            },
            {
                imge: "assets/modules/bvideo/img/2.webp",
                countLike: "100.5W",
                countComment: "1.6w",
                title: "我能相信这两玩意吗"

            },
            {
                imge: "assets/modules/bvideo/img/口技.webp",
                countLike: "25.6W",
                countComment: "1006",
                title: "无屏风表演《口技》还原文言文！！！"

            }
        ]
    }

    starActive(e: MouseEvent, i: number) {
        e.stopPropagation();
        let oldNum = this.score
        this.score = i + 1  // 要渲染的星星数量，从1开始防止初始即渲染一颗星星
        let newNum = this.score
        if(oldNum == newNum) {
            this.score = 0
        }
    }
}

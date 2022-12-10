import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class VideoService {
  VideoData:any[] = []
  showVideoData:any[] = []
  constructor(private router:Router) { }

  goVideoDetail(id:number){
    this.router.navigate(["/bvideo/video"],{queryParams:{id:id}})
  }
  searchFromData(inputText:string){
    this.showVideoData = this.VideoData?.filter(video=>{
        let title = video.title.toLowerCase();
        let stitle = inputText.toLowerCase();
        if(title.indexOf(stitle)!=-1){
          return true
        }else{
          return false
        }
      })
      return this.showVideoData;
  }

  getVideoById(id:number){
    return this.VideoData.find(item=>item.id==id)
  }

  getVideoData(){
    this.VideoData = [
      {
            id:1,
          image: "assets/modules/bvideo/img/8a11012a1264695362eab164379afad5b7e2a7f9.jpg@480w_270h_1c",
          countLike: 7744000,
          countComment: 422,
          title: "【亮记生物鉴定】网络热传生物鉴定44"

      },
      {
        id:2,

          image: "assets/modules/bvideo/img/关于.webp",
          countLike: "48.4w",
          countComment: "4211",
          title: "关于我连夜去上海找甲方要92万片卫生巾这件事"
      },
      {
        id:3,
        image: "assets/modules/bvideo/img/蓝色.webp",
          countLike: "12w",
          countComment: "1.1w",
          title: "蓝 色 妖 姬 是 怎 样 练 成 的"

      },
      {
        id:4,
        image: "assets/modules/bvideo/img/efb15153565d2d55b037e6d738a8308fe82deb7b.jpg@480w_270h_1c.webp",
          countLike: "44w",
          countComment: "2123",
          title: "《赌球心态大赏》"

      },
      {
        id:5,
        image: "assets/modules/bvideo/img/命令.webp",
          countLike: "211.3w",
          countComment: "133",
          title: "少佐，请给我命令"

      },
      {
        id:6,
        image: "assets/modules/bvideo/img/吃.webp",
          countLike: "666.3w",
          countComment: "8.5w",
          title: "一顿就花四千！麻辣小青龙、沸腾帝王蟹！一顿把海鲜天花板吃到饱！"

      },
      {
          image: "assets/modules/bvideo/img/我的世界.webp",
          countLike: "122.3w",
          countComment: "165",
          title: "我收容的MC主世界的所有BOSS!!"

      },
      {
        id:7,
        image: "assets/modules/bvideo/img/偶像.webp",
          countLike: "121.w",
          countComment: "1210",
          title: "为了守护学校我成了偶像"

      },
      {
        id:8,
        image: "assets/modules/bvideo/img/2.webp",
          countLike: "100.5W",
          countComment: "1.6w",
          title: "我能相信这两玩意吗"

      },
      {
        id:9,
        image: "assets/modules/bvideo/img/口技.webp",
          countLike: "25.6W",
          countComment: "1006",
          title: "无屏风表演《口技》还原文言文！！！"

      }
  ]
  return this.VideoData;
  }
}

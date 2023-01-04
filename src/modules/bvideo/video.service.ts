import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Parse } from 'src/services/parse';
import { ParseObject } from 'src/services/parse-object';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  VideoData:any[] = []
  showVideoData:any[] = []
  constructor(private router:Router,private http:HttpClient) { 
    // this.getVideoDataByXHR()
    // this.getVideoDataByFetch().then(data=>{
    //   console.log(data)
    // })
    // this.getVideoDataByHttp();
    // this.createVideo();
    // this.createVideoComment();
    let videoList = this.getVideoData();
    videoList.forEach(video=>{
      delete video.id
      // this.createVideo(video)
    })
  }

  async createVideo(video:any){
    let url = "http://metapunk.cn:9999/parse/classes/Video"
    let body = video
    let options = {
      headers:{
        "X-Parse-Application-Id": "dev",
        "Content-Type": "application/json"
      }
    }
    let data:any = await this.http.post(url,body,options).toPromise();
    console.log(data);
  }
  async createVideoComment(){
    let videoC = {
        user: {__type:"Pointer",className:"_User",objectId:"gTGgpmiEhq"},
        video:  {__type:"Pointer",className:"Video",objectId:"0awhCo2ORK"},
        content: "666"
    }

    let url = "http://metapunk.cn:9999/parse/classes/VideoComment"
    let body = videoC
    let options = {
      headers:{
        "X-Parse-Application-Id": "dev",
        "Content-Type": "application/json"
      }
    }
    let data:any = await this.http.post(url,body,options).toPromise();
    console.log(data);
  }
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

  async getVideoByIdFromParse(objectId:string){
    let video = new ParseObject();
    video.className = "Video"
    let data = await video.get(objectId);
    return data;
  }

  getVideoById(id:number){
    return this.VideoData.find(item=>item.id==id)
  }

  /**
   * Angular Http
   */
  async getVideoDataByHttp(){
    // console.log("getVideoDataByHttp")
    let data = await this.http.get("http://metapunk.cn/test/video.json").toPromise();
    console.log(data);
  }
  /**
   * EMCAScript 6+
   * fetch()
   */
  async getVideoDataByFetch(){
    console.log("getVideoDataByFetch")
      let response = await fetch("http://metapunk.cn/test/video.json", {
        "credentials": "omit",
        "headers": {
        },
        "method": "GET",
        "mode": "cors"
    });
    if(response.status==200){
      return await response.text()
    }else{
      return null
    }
  }
  async getVideoDataFromParse(){
    let response = await fetch("http://metapunk.cn:9999/parse/classes/Video?limit=5", {
                "credentials": "omit",
                "headers": {
                    "X-Parse-Application-Id": "dev",
                },
                "method": "GET",
                "mode": "cors"
            })

            let data = await response.json()
            let VideoList:any = data.results;
            console.log("VideoList",VideoList)
  }
  /*
    JavaScript
    AJAX 通过XMLHttpRequest发送http请求
  */
  getVideoDataByXHR(){
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
    // console.log("getVideoDataByXHR")
    return new Promise((resolve,reject)=>{

      let req = new XMLHttpRequest();
      let url = "http://metapunk.cn/test/video.json"

      req.withCredentials = false;
      req.onreadystatechange = (e) => {
        console.log(req.status)
        if(req.status == 200){
          console.log(req.responseText)
          resolve(req.responseText)
        }
      };
      req.open("GET", url,true);
      req.send();
    })
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

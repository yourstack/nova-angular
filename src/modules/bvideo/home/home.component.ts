import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from '../video.service';
import { Parse } from 'src/services/parse';
import { ParseObject } from 'src/services/parse-object';
import { ParseQuery } from 'src/services/parse-query';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  navList:string[] = []
  showVideoData:any = []
  VideoData:Array<{
    image:string
    countLike:string|number
    countComment:string|number
    title:string
  }>|undefined = []
  currentNav:string = "首页"

  updateAt:Date = new Date();
  constructor(
    public videoServ:VideoService
    ){
    this.getNavData();
    this.renderVideoData();


    let parse = new Parse();
    parse.initialize({serverURL:"http://metapunk.cn:9999/parse",applicationId:"dev"})

  }


  createVideo(){
    let video = new ParseObject()
    video.className = "Video",
    video.data = {
        image: "assets/modules/bvideo/img/口技.webp",
        countLike: "25.6W",
        countComment: "1006",
        title: "无屏风表演《口技》还原文言文！！！"
    }
    video.save();
  }
  createVideoComment(){
    let video = new ParseObject()
    video.className = "VideoComment",
    video.data = {
      user: {__type:"Pointer",className:"_User",objectId:"gTGgpmiEhq"},
      video:  {__type:"Pointer",className:"Video",objectId:"0awhCo2ORK"},
      content: "666"
    }
    video.save();
  }

  async getCommentSync(){
    try{
      console.log(new Date())
      let c1 = await this.getVideoCommentsById(1)
      console.log(c1,new Date())
      let c2 = await this.getVideoCommentsById(2)
      console.log(c2,new Date())
      let c3 = await this.getVideoCommentsById(3)
      console.log(c3,new Date())
      let c4 = await this.getVideoCommentsById(4)
      console.log(c4,new Date())
      return [c1,c2,c3,c4]
    }catch(err){
      throw err
    }
  }
  getVideoCommentsById(id:number|string,timeout:number=1000){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
          let responseData = `{"id":${id},"user":1,"video":3,"content":"good"}`
          let json:any
          try{
            let json = JSON.parse(responseData)
            resolve(json)
          }catch(err){
            reject(err)
          }
      }, timeout);
    })
  }

  onScoreChange(score:number){
    console.log(score)
  }
  toWan(value:number){
    let str = String(value);
    if(value>10000){
      str = String(value/10000) + "w"
    }
    return str
  }

  inputText:string = ""
  search(ev:string){
    this.showVideoData = this.videoServ.searchFromData(ev);
  }
  changeNav(nav:string){
    this.currentNav = nav;
  }
  getNavData(){
    this.navList = ["首页","动画","番剧","国创","音乐","舞蹈","游戏","知识","科技","运动","汽车","生活","美食","运动圈","鬼畜","时尚","娱乐","影视","纪录片","电影","电视剧","直播","相簿","课堂"]
  }

  renderVideoData(){
    this.showVideoData = this.videoServ.getVideoData();
  }
}

import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from '../video.service';

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
    private router:Router,
    public videoServ:VideoService
    ){
    this.getNavData();
    this.renderVideoData();
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

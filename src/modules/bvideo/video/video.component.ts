import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  video:any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public videoServ:VideoService
  ){
 
    this.queryParamsDecode();
    this.getRecommandVideoList();
  }
  ngOnInit(){
    this.getVideoData();
  }
  getVideoData(){
    this.video = this.videoServ.getVideoById(this.video.id);
    // videid http://
  }
  search(ev:string){
    this.RecommandVideoList = this.videoServ.searchFromData(ev);
  }

  queryParamsDecode(){
    // 手写查询参数的解析过程
    let queryParams1 = location.href.split("?")[1].split("&").map(item=>{ return {key:item.split("=")[0],value:decodeURI(item.split("=")[1])} })
    console.log(queryParams1);

    // 直接使用Angular封装好的
    this.route.queryParams.subscribe(data=>{
      console.log(data)
      this.video = data;
    })
  }

  RecommandVideoList:any[] = []
  getRecommandVideoList(){
    this.RecommandVideoList = this.videoServ.getVideoData()
  }

}

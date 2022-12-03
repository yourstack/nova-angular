import { Component,Input } from '@angular/core';

@Component({
  selector: 'bvideo-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent {
  // Input 属性装饰器,可以让组件在父组件调用过程中传入变量,如 [video]="video"
  @Input("video")
  video:any = {
      image:"",
      countLike:"",
      countComment:"",
      title:""
  }

  constructor(){
  }
}

import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'nova-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent {

  @Input("video")
  video:any = {
    image:"",
    title:"",
    countCommet:"",
    countLike:""
  }

  constructor(){
  }
}

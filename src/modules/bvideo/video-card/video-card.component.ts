import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent {

  @Input("video")
  video:any = {
    image:"",
    countLike:"sad",
    countComment:"asdas",
    title:"dasd"
}

constructor(){
}

}

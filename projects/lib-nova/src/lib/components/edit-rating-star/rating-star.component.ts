import { Component,  Input , OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'nova-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.scss']
})
export class EditRatingStarComponent implements OnInit {
  @Input("score")
  score:number = 0;
  @Input("total")
  total:number = 5;
  @Input("editable")
  editable:boolean = false;

  uiDebouceTime = 200;

  public stars: string[] = [
  ]

  constructor() {

  }

  ngOnInit() {
    console.log(this.score);
    this.makeStar(this.score)
  }
  overing:boolean = false // 是否正在滑入
  onOver(index:number){
    if(!this.editable) return;

    // debouce 过滤掉频繁的事件触发，避免星星闪烁问题
    if(this.overing) return;
    this.overing = true;
    setTimeout(()=>{
      this.overing = false;
    },this.uiDebouceTime)

    let score = index+1
    this.makeStar(score)
  }
  onOverRxjs(ev:Event){
    // let overOb = Observable.from(ev).debouce(500);
    // overOb.subscribe(data=>{})
  }
  outing:boolean = false // 是否正在滑出
  onOut(){
    if(!this.editable) return;

    // debouce 过滤掉频繁的事件触发，避免星星闪烁问题
    if(this.outing) return;
    this.outing = true;
    setTimeout(()=>{
      this.outing = false;
    },this.uiDebouceTime)

    this.makeStar(this.score)
  }
  setScore(index:number){
    if(this.editable){
      this.score = index+1
      console.log(this.score)
      this.makeStar(this.score);
    }else{
      return
    }
  }
  makeStar(score:number) {
    this.stars = []
    if(this.total) {
      for (let i = 0; i < this.total; i++) {
        if(i+1<=score){
            this.stars.push('../../../assets/modules/bvideo/img/star-full.png')
        }else{
          if(i<score && score < i+1){
            // 渲染半颗星
            this.stars.push('../../../assets/modules/bvideo/img/star-half.png')
          }else{ 
            // 渲染空星星
            this.stars.push('../../../assets/modules/bvideo/img/star-outline.png')
          }
        }
      }
    }
  }

}











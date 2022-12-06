import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  gameObject = {
    name:"弹弹堂",
    top:"#3",
    order:110000,
    updateAt:new Date(),
    tags:["卡牌","养成","策略","PVP"]
  }
  toDateText(date:Date){
    let year = date.getFullYear()
    let month = date.getMonth() +1
    let day:number|string = date.getDate();
    if(day < 10){
      day = "0"+day
    }
    return year +"/" + month  +"/" + day
  }
  toWan(count:number){
    let str:string|number = count
    if(count>10000){
      str = (count/10000) + "万"
    }
    // if(count>100000){
    //   str = (count/100000).toFixed(0) + "十万"
    // }
    if(count>1000000){
      str = (count/1000000).toFixed(0) + "百万"
    }
    return str
  }
  toK(count:number){
    let unit = ""
    let num = ""
    if(count>1000){
      unit = "k"
      num = (count/1000).toFixed(0)
    }
    if(count>1000000){
      unit = "m"
      num = (count/1000000).toFixed(2)
    }
    if(count>1000000000){
      unit = "g"
      num = (count/1000000000).toFixed(2)
    }
    return num + unit
  }
}

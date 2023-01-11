import { Component } from '@angular/core';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.scss']
})
export class TestpageComponent {
  title:string = "测试页面，title变量是个字符串"
  redShow:boolean = true
  blueShow:boolean = true

  constructor(){
    this.displayStudentList = this.getListData();
  }

  getListData(){
    // xxx
    // xxx
    // xxx
    return this.redStuentList;
  }

  getStringLength(str:string){
    return str.length
  }
  redList = [1,2,3,4,5,6,7]
  redStuentList:any[] = [
    {name:"Xiaoming",age:18,loginDate:new Date(),fansCount:999},
    {name:"Xiaoming2",age:18,loginDate:new Date(),fansCount:1999},
    {name:"Xiaoming3",age:18,loginDate:new Date(),fansCount:2999},
    {name:"XiaoWang",age:19,loginDate:new Date(),fansCount:3999},
    {name:"XiaoWang2",age:19,loginDate:new Date(),fansCount:99999}
  ]
  displayStudentList:any[] = []
  showAll(){
    this.displayStudentList = this.redStuentList
  }
  limitCount(type:string,count:number){
    let list:any[] = []
    this.redStuentList.forEach(item=>{
      if(item.fansCount>count && type=="greater"){
        list.push(item)
      }
      if(item.fansCount<count && type=="less"){
        list.push(item)
      }
    })
    this.displayStudentList = list
  }
  toJson(json:object){
    return JSON.stringify(json)
  }
  blueList = ["aaaa","bbb","cccccc"]
  toggleShow(color:string){
    if(color=="red"){
      this.redShow = !this.redShow
    }
    if(color=="blue"){
      this.blueShow = !this.blueShow
    }
  }
}

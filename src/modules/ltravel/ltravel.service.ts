import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LtravelService {

  constructor(private router:Router,private http:HttpClient) { 
  }
  goNoteDetail(note:any){
    // JS路由跳转
    let qparams = "?"
    Object.keys(note).forEach((key,index)=>{
      qparams += `${key}=${note[key]}`
      if(index+1 != Object.keys(note).length){
        qparams += "&"
      }
    })
    console.log(qparams)
    // location.href = "/ltravel/note" 

    // Angular路由跳转
    this.router.navigate(["/ltravel/note"],{queryParams:{
      objectId:note.objectId
    }})
  }
  getNoteById(objectId:string){
    // 数组官方文档 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    let list = this.getNoteList();
    let note = list.find(item=>item.objectId==objectId)
    return note
  }
  getNoteList(){
    return [
      {objectId:"1",title:"秦岭6日游",author:"旅行达人",content:"这是一篇很长lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll的旅行日记"},
      {objectId:"2",title:"西安3日游",author:"旅行达人",content:"这是一篇很长lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll的旅行日记"},
      {objectId:"3",title:"南昌3日游",author:"旅行达人",content:"这是一篇很长lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll的旅行日记"}
    ]
  }

  getNoteByIdFromHttp(objectId:string){
    // RESTful APIs 文档：https://docs.parseplatform.org/rest/guide/#queries
    let serverURL = `http://metapunk.cn:9999/parse`
    let appId = "dev"
    let url = `${serverURL}/classes/TravelNote?where={"objectId":"${objectId}"}`
    return this.http.get(url,{
      headers:{
        "X-Parse-Application-Id": appId
      }
    })
  }
  getNoteListFromHttp(){
    // RESTful APIs 文档：https://docs.parseplatform.org/rest/guide/#queries
    // AJAX XMLHttpRequest https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest
    // ES6 fetch https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
    // 微信小程序 https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html
    // Angular Http https://angular.cn/guide/http
    let serverURL = `http://metapunk.cn:9999/parse`
    let appId = "dev"
  //   curl -X GET \
  // -H "X-Parse-Application-Id: ${APPLICATION_ID}" \
    let url = `${serverURL}/classes/TravelNote`
    return this.http.get(url,{
      headers:{
        "X-Parse-Application-Id": appId
      }
    })
  }
}

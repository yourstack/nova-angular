import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
/**
 * 微服务用户相关：https://docs.parseplatform.org/rest/guide/#logging-in
 */

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _sessionToken:string = "";
  get sessionToken(){
    let storeToken = localStorage.getItem("Parse/SessionToken");
    if(storeToken&&storeToken!=""){
      return storeToken
    }
    return this._sessionToken
  }
  set sessionToken(v){
    localStorage.setItem("Parse/SessionToken",v)
    this._sessionToken = v
  }

  constructor(private http:HttpClient,private router:Router) { 
  }
  redirectURL:string|null = null
  async isLogin(url:string){
    this.redirectURL = url
    let sessionToken = this.sessionToken
    if(sessionToken&&sessionToken!=""&&sessionToken.indexOf("r")!==-1){
      return true
    }else{
      this.router.navigate(["/user/login"])
      return false
    }
  }
  async signup(userData:{
    username:string
    password:string
    phone?:string
  }){
    let url = "http://metapunk.cn:9999/parse/users"
    let body = {"username":userData.username,"password":userData.password,"phone":userData.phone}
    let options = {
      headers:{
        "X-Parse-Application-Id": "dev",
        "Content-Type": "application/json"
      }
    }
    let data:any = await this.http.post(url,body,options).toPromise();
    console.log(data);
    if(data.sessionToken){
      this.sessionToken = data.sessionToken
    }
    /*
    {
      "objectId": "gTGgpmiEhq",
      "createdAt": "2022-12-11T02:07:06.882Z",
      "sessionToken": "r:1b94df7840ea5dd10765259ae8e77e0f"
    }
    */
  }
  async login(userData:{
    username:string
    password:string
  }){
    let url = "http://metapunk.cn:9999/parse/login"
    let body = {"username":userData.username,"password":userData.password}
    let options = {
      headers:{
        "X-Parse-Application-Id": "dev",
        "Content-Type": "application/json"
      }
    }
    let data:any = await this.http.post(url,body,options).toPromise();
    console.log(data);
    if(data.sessionToken){
      this.sessionToken = data.sessionToken
    }
    this.checkRedirect();
  }
  checkRedirect(){
    if(this.redirectURL){
      this.router.navigate([this.redirectURL]);
      this.redirectURL = null;
    }
  }
  logout(){

  }

  // 获取公司帐套信息
  async getCompany(){
    this.http.get("http://metapunk.cn:9999/parse/classes/Company?",{
      headers:{"X-Parse-Application-Id":"dev"}
    }).subscribe(data=>{
      console.log(data)
    })
  }
}

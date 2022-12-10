import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * 微服务用户相关：https://docs.parseplatform.org/rest/guide/#logging-in
 */

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 
    this.getCompany()
  }

  async isLogin(){
    return true
  }
  login(){

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

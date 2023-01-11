import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private router:Router) { }
  addNewGame(){
    this.router.navigate(["/game/edit"],{
      queryParams:{
        new:true        
      }
    })
  }

  /**
   * 
   * @param className - 后端数据Schema表名
   * @returns Promise number 返回的HTTP请求，正常携带的值是数字类型
   * @example
   * import { GameService } from '../game.service';
   * class XxxXxx{
   *  deleteCount:number
    * constructor(private gameServ:GameService)
    * method1(){
    *   this.deleteCount = await this.gameServ.getDeleteCount("Game");
    * }
   * }
   */
  async getDeleteCount(className:string){
    let url = `http://metapunk.cn:9999/parse/classes/${className}?where={"isDeleted":true}&count=1&limit=0`

    let result = await fetch(url, {
      "headers": {
        "x-parse-application-id": "dev"
      },
      "body": null,
      "method": "GET",
      "mode": "cors",
      "credentials": "omit"
    });
    let data = await result.json();
    return data.count || 0
  }

  /**
   * 删除数据对象（软删除）将isDeleted字段置为true
   * @param className 后端数据Schema表名
   * @param game 数据object对象
   * @param isRestore 默认为false，当值为true时，将isDeleted字段置为false
   * @returns Boolean true为删除成功 false为删除失败
   */
  async deleteObject(className:string,game:any,isRestore:boolean=false){
    let isDeleted = true
    if(isRestore==true){
      isDeleted = false
    }
    // 发送HTTP请求，将isDeleted字段更新为true;
    let objectId = game.objectId
    if(objectId){
      let response = await fetch(`http://metapunk.cn:9999/parse/classes/${className}/${objectId}`, {
        "headers": {
          "content-type": "text/plain;charset=UTF-8",
          "x-parse-application-id": "dev"
        },
        "body": `{"isDeleted":${isDeleted}}`,
        "method": "PUT",
        "mode": "cors",
        "credentials": "omit"
      });
      let data = await response.json();
      // 成功删除时，HTTP网络请求返回：{"updatedAt":"2023-01-04T08:29:35.195Z"}
      if(data?.updatedAt){
        return true
      }
    }
    return false
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commentedit',
  templateUrl: './commentedit.component.html',
  styleUrls: ['./commentedit.component.scss']
})
export class CommenteditComponent {
  comment:any = {}
  isUpdate:boolean = true;
  constructor(private route:ActivatedRoute,private router:Router){
    this.route.queryParamMap.subscribe(data=>{
      let params:any = data
      params = params.params
      if(params?.id){
        this.getGameCommentById(params.id)
      }
      if(params?.new){
        this.isUpdate = false;
      }
    })
  }

  back(){
    this.router.navigate(["/game/comment/list"])
  }

  async save(){
    let objectId = this.comment.objectId || ""
    let jsonData:any = {}
    jsonData = this.comment
    // 删除系统保留字段
    delete jsonData.updatedAt
    delete jsonData.createdAt
    delete jsonData.objectId
    // 发送新增/更新请求

      let httpMethod = "PUT"
      let url = `http://metapunk.cn:9999/parse/classes/GameComment/${objectId}`
      if(!this.isUpdate){
        httpMethod = "POST"
        url = `http://metapunk.cn:9999/parse/classes/GameComment`
      }
      let response = await fetch(url, {
        "headers": {
          "content-type": "text/plain;charset=UTF-8",
          "x-parse-application-id": "dev"
        },
        "body": JSON.stringify(jsonData),
        "method": httpMethod,
        "mode": "cors",
        "credentials": "omit"
      });
      let data = await response.json();
      // 新增：{  "createdAt": "2022-01-01T12:23:45.678Z",  "objectId": "Ed1nuqPvcm"}
      // 更新：{  "updatedAt": "2022-01-01T12:23:45.678Z" }
      console.log(data)
      if(data?.createdAt || data?.updatedAt){
        console.log("保存成功")
        this.back();
      }else{
        alert("保存出错，请检查")
      }
    return
  }

  async getGameCommentById(id:string){
    let response = await fetch(`http://metapunk.cn:9999/parse/classes/GameComment/${id}?`, {
      "headers": {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "x-parse-application-id": "dev"
      },
      "referrer": "http://127.0.0.1:4040/",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": null,
      "method": "GET",
      "mode": "cors",
      "credentials": "omit"
    });
    let data = await response.json();
    if(data?.objectId){
      this.comment = data;
    }
  }
}

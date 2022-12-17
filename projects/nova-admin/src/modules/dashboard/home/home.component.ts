import { Component } from '@angular/core';
import { Parse } from 'src/services/parse';
import { ParseQuery } from 'src/services/parse-query';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  ProjectList:Array<any> = []
  currentProject:any = {title:"B视频应用",cover:"https://tse3-mm.cn.bing.net/th/id/OIP-C.MuH9iXNKXNYXs6ppDReWRgHaE8?w=234&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",module:"bvideo",author:"wlh",git:"https://gitee.com/wlhdsd/ng-wanglonghui"}
  constructor(){

    let parse = new Parse();
    parse.initialize({serverURL:"http://metapunk.cn:9999/parse",applicationId:"dev"})

    this.getVideoDataFromParse()
    this.getProjects();
  }
  showProjectName(p:any){
    alert(p.title);
  }
  getProjects(){
    this.ProjectList = [
      {title:"B视频应用",isEnabled:true,cover:"https://tse3-mm.cn.bing.net/th/id/OIP-C.MuH9iXNKXNYXs6ppDReWRgHaE8?w=234&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",module:"bvideo",author:"wlh",git:"https://gitee.com/wlhdsd/ng-wanglonghui"},
      {title:"Z音乐应用",isEnabled:true,cover:"https://tse3-mm.cn.bing.net/th/id/OIP-C.MuH9iXNKXNYXs6ppDReWRgHaE8?w=234&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",module:"zmusic",author:"zxc",git:""},
      {title:"CATFM音频",isEnabled:true,cover:"https://tse3-mm.cn.bing.net/th/id/OIP-C.MuH9iXNKXNYXs6ppDReWRgHaE8?w=234&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",module:"catfm",author:"xll",git:""}
    ]

  }

  async getVideoDataFromParse(){
    let query = new ParseQuery()
    query.className = "Video"
    query.limit(2);
    // query.contains("title","我")
    let data = await query.find();
    console.log("getVideoDataFromParse",data)
  }
}

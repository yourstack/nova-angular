import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.scss']
})
export class GamelistComponent {

  GameList:any[] = []
  /**
   * @type <string> 搜索方法绑定的搜索查询字符
   */
  searchText:string = ""
  showDelete:boolean = false;
  deleteCount:number = 0;
  constructor(private router:Router,private gameServ:GameService){
    this.refresh();
  }

  search(ev?:Event){
    if(ev){
      if((ev as any).code != "Enter") return
    }
    // where={"isDeleted":false,"name":{"$regex":"${this.searchText}"}}
    let searchParams = `,"name":{"$regex":"${this.searchText}"}`
    this.getGameList(searchParams)
  }
  async refresh(){
    this.getGameList();
    this.deleteCount = await this.gameServ.getDeleteCount("Game");
  }
  addNewGame(){
    this.gameServ.addNewGame();
  }
  onShowDelete(){
    console.log("onShowDelete")
    this.showDelete=!this.showDelete
    this.refresh()
  }

  async getGameList(searchParams=""){
    let url = "http://metapunk.cn:9999/parse/classes/Game?"

    // 拼接排序条件
    let paramsOrder = `order=-score`
    url += paramsOrder

    // 拼接匹配条件
    let paramsWhere
    if(!this.showDelete){
      paramsWhere = `where={"isDeleted":false${searchParams}}`
      url += "&" + paramsWhere
    }else{
      paramsWhere = `where={"isDeleted":true${searchParams}}`
      url += "&" + paramsWhere
    }

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
    this.GameList = data.results;

    return
    // 测试数据
    this.GameList = [
      {name:"部落与弯刀",icon:"https://www.zhaodanji.com/uploadfile/2018/0604/20180604093444821.png",desc:"游戏介绍内容还没想好",cover:"https://android-screenimgs.25pp.com/fs08/2021/03/30/7/109_9babc081a4f5b92c70fb679f13e7bccb.jpeg",publish:"汉家松鼠",developer:"汉家松鼠"},
      {name:"王者荣耀",icon:"https://img.51miz.com/Element/00/87/20/60/308d523c_E872060_3f16d4cf.png",desc:"游戏介绍内容还没想好",cover:"https://img.zcool.cn/community/013c255cb7a106a8012141688bf6e2.png@2o.png",publish:"Tencent",developer:"天美"},
      {name:"原神",icon:"https://upload-bbs.mihoyo.com/upload/2021/06/08/83501730/3688bae98163c5f377f30fafb24e74fc_3512310040476034436.png",desc:"游戏介绍内容还没想好",cover:"https://ts1.cn.mm.bing.net/th/id/R-C.af5138575fe86f1a0cf0d4bb311b2004?rik=%2fVBeTeQqmL6xLg&riu=http%3a%2f%2fpic.k73.com%2fup%2fsoft%2f2020%2f1110%2f113230_43090761.png&ehk=2M%2boANeuOlaVKXUTfvpjH5oLS8Hk0pMnZwfFFljMbuc%3d&risl=&pid=ImgRaw&r=0",publish:"米哈游",developer:"米哈游"},
    ]
  }

  deleteGame(game:any,isRestore:boolean=false){
    this.gameServ.deleteObject("Game",game,isRestore).then(isSuccess=>{
      if(isSuccess){
        // 内存变量删除该项
        let idx = this.GameList.findIndex(item=>item.name==game.name)
        this.GameList.splice(idx,1)
        if(!isRestore){
          this.deleteCount ++;
        }else{
          this.deleteCount --;
        }
      }
    })
  }

  editGame(game:any){
    console.log(game)
  }
}

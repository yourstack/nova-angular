import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LtravelService } from '../ltravel.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  noteList:Array<{
    objectId:string
    title:string
    author?:string
    content?:string
  }> = []
  constructor(private router:Router,public travelServ:LtravelService){
    this.getNoteList();
  }
  
  getNoteList(){
    // 从HTTP微服务获取数据
    this.travelServ.getNoteListFromHttp().subscribe(data=>{
      this.noteList = (data as any).results
    })
    
    // 从本地内存获取数据
    // this.noteList = this.travelServ.getNoteList()
  }
}

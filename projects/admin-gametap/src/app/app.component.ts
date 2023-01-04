import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin-gametap';
  showSidebar:boolean = false;
  RouteList = [
    // {path:"/dashboard/home",name:"后台首页"},
    {path:"/game/list",name:"游戏管理"},
    // {path:"/bvideo/video?id=3",name:"游戏详情"}
  ]
  constructor(private router:Router){
    
  }
  goRoute(route:any){
    this.router.navigate([route.path],{})
  }
}

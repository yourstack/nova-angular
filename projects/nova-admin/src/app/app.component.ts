import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nova Admin后端管理子项目';
  showFiller = false;
  RouteList = [
    {path:"/dashboard/home",name:"后台首页"},
    {path:"/bvideo/home",name:"视频首页"},
    {path:"/bvideo/video?id=3",name:"视频详情"}
  ]
  constructor(private router:Router){

  }
  logout(){
    localStorage.clear();
    this.router.navigate(["dashboard/home"])
  }
  goRoute(route:any){
    this.router.navigate([route.path],{})
  }
}

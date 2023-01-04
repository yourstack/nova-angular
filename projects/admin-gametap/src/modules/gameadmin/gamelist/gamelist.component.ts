import { Component } from '@angular/core';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.scss']
})
export class GamelistComponent {

  projectList:any[] = []
  constructor(){
    this.getProjectList();
  }
  getProjectList(){
    this.projectList = [
      {title:"CatFM",author:"Xue Lianli"},
      {title:"LTravel",author:"Liu Yuhang"},
      {title:"ZMusic",author:"Zou Xichen"},
    ]
  }
}

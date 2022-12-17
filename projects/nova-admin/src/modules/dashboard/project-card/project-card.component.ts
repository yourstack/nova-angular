import { Component, Input } from '@angular/core';

@Component({
  selector: 'nova-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input("project")
  project:any = {
    title:"",
    author:"",
    cover:""
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'nova-edit-tag',
  templateUrl: './edit-tag.component.html',
  styleUrls: ['./edit-tag.component.scss']
})
export class EditTagComponent {
  // Input 装饰器，可以让父组件调用子组件时候传递变量。
  @Input("tagList")
  tagList:string[]=[]

  // Input 装饰器，可以让父组件调用子组件时候传递变量。
  @Input("editable")
  editable:boolean = false

  debug:boolean = false;
  inputText:string = ""
  addTag(){
    let tag = this.inputText;
    if(tag==""){
      return
    }
    this.tagList.push(tag)
    this.inputText = ""
  }
  onKeyUp(ev:any){
    this.inputText = ev?.srcElement.value
  }
  constructor(){

  }
}

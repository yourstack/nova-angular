import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nova-commentitem',
  templateUrl: './commentitem.component.html',
  styleUrls: ['./commentitem.component.scss']
})
export class CommentitemComponent {
  @Input("comment")
  comment:any = {}

  @Output("edit")
  _edit:EventEmitter<any> = new EventEmitter()

  @Output("delete")
  _delete:EventEmitter<any> = new EventEmitter()

  @Output("restore")
  _restore:EventEmitter<any> = new EventEmitter()

  constructor(private router:Router){}
  delete(){
    this._delete.emit(this.comment)
  }
  edit(){
    this.router.navigate(["/game/comment/edit"],{
      queryParams:{
        id:this.comment.objectId
      }
    })
    // this._edit.emit(this.comment)
  }
  restore(){
    this._restore.emit(this.comment)
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nova-gameitem-card',
  templateUrl: './gameitem-card.component.html',
  styleUrls: ['./gameitem-card.component.scss']
})
export class GameitemCardComponent {
  @Input("game")
  game:any = {}

  @Output("edit")
  _edit:EventEmitter<any> = new EventEmitter()

  @Output("delete")
  _delete:EventEmitter<any> = new EventEmitter()

  @Output("restore")
  _restore:EventEmitter<any> = new EventEmitter()

  constructor(private router:Router){}
  delete(){
    this._delete.emit(this.game)
  }
  edit(){
    this.router.navigate(["/game/edit"],{
      queryParams:{
        id:this.game.objectId
      }
    })
    // this._edit.emit(this.game)
  }
  restore(){
    this._restore.emit(this.game)
  }
}

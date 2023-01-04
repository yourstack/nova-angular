import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'nova-video-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  inputText:string = ""
  @Output("search")
  _search:EventEmitter<string> = new EventEmitter()
  
  search(){
    this._search.emit(this.inputText);
  }
}

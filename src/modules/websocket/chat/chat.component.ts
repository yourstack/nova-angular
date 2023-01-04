import { Component } from '@angular/core';
import { WebsocketService } from "../../../services/websocket.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  title = 'socketrv';
  content = '';
  received:any[] = [];
  sent:any[] = [];
  user:string = "Ryane";
  room:string = "angular";

  constructor(private WebsocketService: WebsocketService) {
    WebsocketService.messages.subscribe(msg => {
      this.received.push(msg);
      console.log("Response from websocket: " + msg);
    });
  }

  sendMsg() {
    let message = {
      source: '',
      content: '',
      room:"",
      user:""
    };
    message.source = 'localhost';
    message.content = this.content;
    message.room = this.room
    message.user = this.user

    this.sent.push(message);
    this.WebsocketService.messages.next(message);
  }
}

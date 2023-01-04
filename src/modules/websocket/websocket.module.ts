import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WebsocketRoutingModule } from './websocket-routing.module';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WebsocketRoutingModule
  ]
})
export class WebsocketModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameadminRoutingModule } from './gameadmin-routing.module';
import { GamelistComponent } from './gamelist/gamelist.component';
import { GameeditComponent } from './gameedit/gameedit.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    GamelistComponent,
    GameeditComponent
  ],
  imports: [
    CommonModule,
    GameadminRoutingModule,
    // 第三方组件
    MatCardModule,MatButtonModule
  ]
})
export class GameadminModule { }

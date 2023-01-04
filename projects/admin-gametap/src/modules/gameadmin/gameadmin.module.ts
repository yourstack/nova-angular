import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GameadminRoutingModule } from './gameadmin-routing.module';
import { GamelistComponent } from './gamelist/gamelist.component';
import { GameeditComponent } from './gameedit/gameedit.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from "@angular/material/badge"
import {MatDatepickerModule} from "@angular/material/datepicker"


import { GameitemCardComponent } from './gameitem-card/gameitem-card.component';

@NgModule({
  declarations: [
    GamelistComponent,
    GameeditComponent,
    GameitemCardComponent
  ],
  imports: [
    CommonModule,FormsModule,
    GameadminRoutingModule,
    // 第三方组件
    MatCardModule,MatButtonModule,
    MatToolbarModule,MatInputModule,MatIconModule,MatBadgeModule,MatDatepickerModule
  ]
})
export class GameadminModule { }

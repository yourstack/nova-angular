import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GametapRoutingModule } from './gametap-routing.module';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { EditTagComponent } from './edit-tag/edit-tag.component';
import { ToKPipe } from './pipes/to-k.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    GameComponent,
    EditTagComponent,
    ToKPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    GametapRoutingModule
  ]
})
export class GametapModule { }

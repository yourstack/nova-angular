import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LtravelRoutingModule } from './ltravel-routing.module';
import { HomeComponent } from './home/home.component';
import { NoteComponent } from './note/note.component';


@NgModule({
  declarations: [
    HomeComponent,
    NoteComponent
  ],
  imports: [
    CommonModule,
    LtravelRoutingModule
  ]
})
export class LtravelModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BvideoRoutingModule } from './bvideo-routing.module';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { ToKPipe } from '../gametap/pipes/to-k.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    VideoComponent,
    VideoCardComponent,
    ToKPipe
  ],
  imports: [
    CommonModule,
    BvideoRoutingModule
  ]
})
export class BvideoModule { }

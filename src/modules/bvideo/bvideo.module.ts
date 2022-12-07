import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BvideoRoutingModule } from './bvideo-routing.module';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { VideoCardComponent } from './video-card/video-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    VideoComponent,
    VideoCardComponent,
  ],
  imports: [
    CommonModule,
    BvideoRoutingModule
  ]
})
export class BvideoModule { }

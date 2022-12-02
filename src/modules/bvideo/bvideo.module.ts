import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BvideoRoutingModule } from './bvideo-routing.module';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';


@NgModule({
  declarations: [
    HomeComponent,
    VideoComponent
  ],
  imports: [
    CommonModule,
    BvideoRoutingModule
  ]
})
export class BvideoModule { }

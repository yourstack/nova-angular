import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BvideoRoutingModule } from './bvideo-routing.module';
import { HomeComponent } from './home/home.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { RatingStarComponent } from './rating-star/rating-star.component';
import { MyComponent } from './my/my.component';



@NgModule({
  declarations: [
    HomeComponent,
    VideoCardComponent,
    RatingStarComponent,
    MyComponent,
  ],
  imports: [
    CommonModule,
    BvideoRoutingModule
  ]
})
export class BvideoModule { }

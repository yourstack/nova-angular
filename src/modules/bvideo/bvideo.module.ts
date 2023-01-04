import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BvideoRoutingModule } from './bvideo-routing.module';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';

import { FormsModule } from '@angular/forms';
import { VideoCardComponent } from './video-card/video-card.component';
import { HeaderComponent } from './header/header.component';

// 引入方式1：子项目组件
import { PipeTowanPipe } from '../../../projects/lib-nova/src/lib/pipes/pipe-towan.pipe';
import { HighlightDirective } from '../../../projects/lib-nova/src/lib/directives/highlight.directive';
import { EditRatingStarComponent } from '../../../projects/lib-nova/src/public-api';
// 引入方式2：打包后dist引入方式
// ng build --project=lib-nova
// import { EditRatingStarComponent } from 'dist/novaui';

@NgModule({
  declarations: [
    HomeComponent,
    VideoComponent,
    VideoCardComponent,
    HeaderComponent,
    // From Lib Nova
    PipeTowanPipe,
    EditRatingStarComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    BvideoRoutingModule
  ]
})
export class BvideoModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"video",component:VideoComponent},
  {path:"auth",component:HomeComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BvideoRoutingModule { }

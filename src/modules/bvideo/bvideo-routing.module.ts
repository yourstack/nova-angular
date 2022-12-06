import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'video', component:VideoComponent},
  // {path: 'home', loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent)},
  // {path: 'video', loadComponent: () => import('./video/video.component').then(mod => mod.VideoComponent)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BvideoRoutingModule { }

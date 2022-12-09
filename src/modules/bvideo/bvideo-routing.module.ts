import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { MyComponent } from './my/my.component';

const routes: Routes = [
  {path: '',redirectTo: '/bvideo/home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'video', component:VideoComponent},
  {path: 'my', component:MyComponent},
  // {path: 'home', loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent)},
  // {path: 'video', loadComponent: () => import('./video/video.component').then(mod => mod.VideoComponent)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BvideoRoutingModule { }

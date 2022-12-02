import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
];


let bvideoRoute ={
  path: 'bvideo',
  loadChildren: () => import('../modules/bvideo/bvideo.module').then(m => m.BvideoModule)
}

routes.push(bvideoRoute)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

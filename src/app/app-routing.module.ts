import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
];


let bvideoRoute ={
  path: 'bvideo',
  loadChildren: () => import('../modules/bvideo/bvideo.module').then(m => m.BvideoModule)
}

routes.push(bvideoRoute)

let gametapRoute ={
  path: 'gametap',
  loadChildren: () => import('../modules/gametap/gametap.module').then(m => m.GametapModule)
}

routes.push(gametapRoute)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

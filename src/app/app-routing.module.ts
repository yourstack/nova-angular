import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
];

let userRoute ={
  path: 'user',
  loadChildren: () => import('../modules/user/user.module').then(m => m.UserModule)
}
routes.push(userRoute)


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

let websocketRoute ={
  path: 'websocket',
  loadChildren: () => import('../modules/websocket/websocket.module').then(m => m.WebsocketModule)
}
routes.push(websocketRoute)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

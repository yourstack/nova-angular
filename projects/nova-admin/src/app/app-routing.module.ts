import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
];

let dashboardRoute ={
  path: 'dashboard',
  canActivate:[AuthGuard],
  loadChildren: () => import('../modules/dashboard/dashboard.module').then(m => m.DashboardModule)
}
routes.push(dashboardRoute)


let userRoute ={
  path: 'user',
  loadChildren: () => import('src/modules/user/user.module').then(m => m.UserModule)
}
routes.push(userRoute)


let bvideoRoute ={
  path: 'bvideo',
  canActivate:[AuthGuard],
  loadChildren: () => import('src/modules/bvideo/bvideo.module').then(m => m.BvideoModule)
}
routes.push(bvideoRoute)


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamelistComponent } from './gamelist/gamelist.component';
import { GameeditComponent } from './gameedit/gameedit.component';

const routes: Routes = [
  {path:"list",component:GamelistComponent},
  {path:"edit",component:GameeditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameadminRoutingModule { }

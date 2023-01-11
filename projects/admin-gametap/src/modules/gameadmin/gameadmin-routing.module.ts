import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamelistComponent } from './gamelist/gamelist.component';
import { GameeditComponent } from './gameedit/gameedit.component';
import { CommentlistComponent } from './commentlist/commentlist.component';
import { CommenteditComponent } from './commentedit/commentedit.component';

import { TestpageComponent } from './testpage/testpage.component';

const routes: Routes = [
  {path:"list",component:GamelistComponent},
  {path:"edit",component:GameeditComponent},
  {path:"comment/list",component:CommentlistComponent},
  {path:"comment/edit",component:CommenteditComponent},
  {path:"test",component:TestpageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameadminRoutingModule { }

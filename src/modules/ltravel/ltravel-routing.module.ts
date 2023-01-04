import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NoteComponent } from './note/note.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"note",component:NoteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LtravelRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,FormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }

import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username:string = ""
  password:string = ""
  constructor(private authServ:AuthService){

  }
  async logIn(){
    if(this.username==""|| this.password==""){
      alert("请输入完整的用户名密码")
    }
    let data = await this.authServ.login({
      username:this.username,
      password:this.password
    })
    console.log(data)
  }
  async signUp(){
    if(this.username==""|| this.password==""){
      alert("请输入完整的用户名密码")
    }
    let data = await this.authServ.signup({
      username:this.username,
      password:this.password
    })
    console.log(data)
  }
}

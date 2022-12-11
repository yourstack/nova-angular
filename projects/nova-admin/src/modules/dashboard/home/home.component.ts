import { Component } from '@angular/core';
import { Parse } from 'src/services/parse';
import { ParseQuery } from 'src/services/parse-query';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(){

    let parse = new Parse();
    parse.initialize({serverURL:"http://metapunk.cn:9999/parse",applicationId:"dev"})

    this.getVideoDataFromParse()
  }

  async getVideoDataFromParse(){
    let query = new ParseQuery()
    query.className = "Video"
    query.limit(2);
    // query.contains("title","我")
    let data = await query.find();
    console.log("getVideoDataFromParse",data)
  }
}

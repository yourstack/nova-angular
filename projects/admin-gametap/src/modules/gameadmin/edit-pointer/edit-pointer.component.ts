import { Component, Input, Output,EventEmitter, AfterContentInit } from '@angular/core';

@Component({
  selector: 'nova-edit-pointer',
  templateUrl: './edit-pointer.component.html',
  styleUrls: ['./edit-pointer.component.scss']
})
export class EditPointerComponent implements AfterContentInit {
  @Input()
  value!:{__type:string,className:string,objectId:string}

  @Output()
  valueChange:EventEmitter<{__type:string,className:string,objectId:string}> = new EventEmitter()

  /**
   * @desc 已选择指针对应的真实对象完整JSON数据
   */
  objectData:any

  @Input("className")
  className!:string
  @Input("searchCol")
  searchCol!:string
  searchText!:string

  list:any[] = []
  constructor(){
    setTimeout(() => {
      this.getDataById();
    }, 1000);
  }

  ngAfterContentInit(): void {

  }  
  pickItem(item:any){
    this.objectData = item;
    this.value = {
      __type:"Pointer",
      className:this.className,
      objectId:item.objectId
    }
    this.valueChange.emit(this.value)
  }
  onSearch(){
    this.getDataList()
  }
  async getDataById(){
    if(this.value?.objectId){
      let id = this.value?.objectId
      let response = await fetch(`http://metapunk.cn:9999/parse/classes/${this.value.className}/${id}?`, {
        "headers": {
          "x-parse-application-id": "dev"
        },
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "omit"
      });
      let data = await response.json();
      if(data?.objectId){
        this.objectData = data;
      }
    }
  }
  async getDataList(){
      let url = `http://metapunk.cn:9999/parse/classes/${this.className}?`
  
      let paramsWhere = `where={"${this.searchCol}":{"$regex":"${this.searchText}"}}`
      url += paramsWhere

      let result = await fetch(url, {
        "headers": {
          "x-parse-application-id": "dev"
        },
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "omit"
      });
      let data = await result.json();
      this.list = data.results;
  
      return
  }
}

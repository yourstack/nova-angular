import { Component, Input, Output,EventEmitter, AfterContentInit } from '@angular/core';

@Component({
  selector: 'nova-edit-pointer',
  templateUrl: './edit-pointer.component.html',
  styleUrls: ['./edit-pointer.component.scss']
})
export class EditPointerComponent implements AfterContentInit {
  /**
   * @typedef
   * @property {string} __type
   * @property {stirng} className
   * @property {stirng} objectId
   * @example
   */
  /**
   * @type Pointer
   * @desc 从父组件传入绑定的对象指针数据值
   * @example
   * <nova-edit-pointer [(value)]="commnet.game">
   */
  @Input()
  value!:{__type:string,className:string,objectId:string}

  @Output()
  valueChange:EventEmitter<{__type:string,className:string,objectId:string}> = new EventEmitter()

  /**
   * @desc 已选择指针对应的真实对象完整JSON数据
   */
  objectData:any

  /**
   * @type string
   * @desc 指针指向后端数据的Schema表名
   * @example
   * <nova-edit-pointer [className]="'GameComment'">
   */
  @Input("className")
  className!:string

  /**
   * @type string
   * @desc 该指针查询时对应的Schema表列字段，搭配className使用
   * @example
   * <!-- 编辑用户_User的指针数据，且根据nickname昵称搜索 -->
   * <nova-edit-pointer [className]="'_User" [searchCol]="'nickname'">
   */
  @Input("searchCol")
  searchCol!:string
  /**
   * @type string
   * @desc 根据指针搜索表时，匹配的字符串
   */
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

      /**
       * @desc data 格式：{results:[]} 查询结果列表
       * @see https://docs.parseplatform.org/rest/guide/#queries
       */
      let data = await result.json();
      
      this.list = data.results;
  
      return
  }
}

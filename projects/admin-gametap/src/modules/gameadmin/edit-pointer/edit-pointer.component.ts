import { Component, Input, Output,EventEmitter, AfterContentInit } from '@angular/core';

interface Pointer{
  __type:string
  /**
   * 数据Schema表名
   */
  className:string
  /**
   * 数据唯一识别ID
   */
  objectId:string
}

/**
 * EditPointer指针编辑组件
 * @example
 * 示例：评论编辑页面，用该组件编辑评论用户指针字段
 * 双向绑定：父组件comment.user变量，绑定到子组件的value值上
 * 输入属性：className 数据Schema表名 _User 用户表
 * 输入属性：searchCol 数据Schema列名 nickname 昵称字段
 * <nova-edit-pointer [(value)]="comment.user" [className]="'_User" [searchCol]="'nickname'">
 * 
 */
@Component({
  selector: 'nova-edit-pointer',
  templateUrl: './edit-pointer.component.html',
  styleUrls: ['./edit-pointer.component.scss']
})
export class EditPointerComponent {


  /**
   * 从父组件传入绑定的对象指针数据值
   * @type Pointer
   * @example
   * <nova-edit-pointer [value]="commnet.game">
   */
  @Input()
  value!:Pointer

  /**
   * 将指针变化后的值作为事件输出到父级组件
   * @example
   * <nova-edit-pointer (value)="commnet.game">
   */
  @Output()
  valueChange:EventEmitter<{__type:string,className:string,objectId:string}> = new EventEmitter()

  /**
   * 已选择指针对应的真实对象完整JSON数据
   */
  objectData:any

  /**
   * 指针指向后端数据的Schema表名
   * @type string
   * @example
   * <nova-edit-pointer [className]="'GameComment'">
   */
  @Input("className")
  className!:string

  /**
   * 该指针查询时对应的Schema表列字段，搭配{@link #className}使用
   * @type string
   * @example
   * <!-- 编辑用户_User的指针数据，且根据nickname昵称搜索 -->
   * <nova-edit-pointer [className]="'_User" [searchCol]="'nickname'">
   */
  @Input("searchCol")
  searchCol!:string

  /**
   * 根据指针搜索表时，匹配的字符串
   * @type string
   */
  searchText!:string

  /**
   * 页面渲染的数据列表
   */
  list:any[] = []

  constructor(){
    setTimeout(() => {
      this.getDataById();
    }, 1000);
  }

  /**
   * 选择该数据对象，并设置对应的指针值
   * @param item 数据对象
   * @returns 数据对象转换为Pointer指针类型并emit至父级组件
   */
  pickItem(item:any){
    this.objectData = item;
    this.value = {
      __type:"Pointer",
      className:this.className,
      objectId:item.objectId
    }
    this.valueChange.emit(this.value)
  }

  /**
   * 用户输入时字符，触发搜索逻辑，获取相关数据列表
   */
  onSearch(){
    this.getDataList()
  }
    
  /**
   * 获取当前指针指向的数据对象完整值及属性<br>
   * - 相关属性：{@link #value} 指针数据的className及objectId
   * @returns this.objectData 赋值数据对象完整值
   */
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

  /**
   * 获取相关数据列表<br>
   * - 相关属性：{@link #className}
   * - 相关属性：{@link #searchCol}
   * - 相关属性：{@link #searchText}
   * @returns 获取相关数据列表并赋值给this.list
   */
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

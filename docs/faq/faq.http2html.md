# FAQ:如何将HTTP请求数据，渲染到页面上

- 示例代码：https://gitee.com/wlhdsd/ng-wanglonghui/commit/eb1c7a945ad8092215bfa01f9d9c6dcb43c4f443

1. 页面组件新增空数组，作为接收参数
2. 执行http请求，获得的数据复制给空数组
3. *ngFor指令将数组渲染到html模板文件
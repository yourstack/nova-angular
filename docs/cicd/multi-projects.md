# MultiModule:多模块及多库依赖实践

# 实例：创建一个用于管理端的子项目
## 第一步：创建子项目 admin-gametap
``` sh
# 当前项目下，创建一个子项目
ng g application admin-gametap --style=scss --routing
# 启动调试子项目
ng s --project=admin-gametap
```

## 第二步：子项目的根模块，编写管理端的左右布局
- 相关依赖：
    - Material：https://material.angular.cn/
    - AntDesign：https://ng.ant.design/docs/introduce/zh

### 安装第三方组件库到子项目
``` sh
# 安装Material到子项目，默认y，默认开启动画Animation
ng add @angular/material --project=admin-gametap

# Skipping installation: Package already installed
# ? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink        [ Preview:                                            
# https://material.angular.io?theme=indigo-pink ]                                                                                          
# ? Set up global Angular Material typography styles? Yes
# ? Include the Angular animations module? Include and enable animations
# UPDATE package.json (1509 bytes)
# ✔ Packages installed successfully.
# UPDATE projects/admin-gametap/src/app/app.module.ts (502 bytes)
# UPDATE angular.json (17970 bytes)
# UPDATE projects/admin-gametap/src/index.html (580 bytes)
# UPDATE projects/admin-gametap/src/styles.scss (181 bytes)
```

### 用组件开发根模块后台管理的样式布局
- 示例代码：
    - [admin-gametap app.module.ts](../../projects/admin-gametap/src/app/app.module.ts)
    - [admin-gametap app.component.html](../../projects/admin-gametap/src/app/app.component.html)
``` sh 
# https://material.angular.cn/components/toolbar/api
# app.module.ts 引入相关的Mat模块
# app.component.html 编写代码
```

## 第三步：子项目子模块的管理模块，列表页/编辑页
- 模块创建：https://gitee.com/ryanemax/nova-angular/commit/ef55627087767583cc7785e7ed4101be9bb8f002

### 创建游戏管理模块
``` sh
cd nova-angular/projects/admin-gametap/src/modules
ng g module gameadmin --routing

cd gameadmin
ng g component gamelist --module gameadmin
ng g component gameedit --module gameadmin

# 根据需求继续编辑游戏列表页面

```

### 组件化优化游戏管理模块
- 组件：游戏卡片 gameitem-card
    - 在游戏列表页，用于列表展示
    - 在游戏编辑页，用于效果预览
``` sh
ng g component gameitem-card
```

### 游戏列表页实现数据查询等操作
- 微服务操作：
    - 参考文档：[Parse:微服务测试环境](docs/backend/parse.md)
    - 创建数据范式（Schema）：Game
        - 包含字段：title author ...
- 页面区域：增加Toolbar工具条
    - 搜索区域
    - 添加按钮
- 页面区域：通过API获取Project列表

### 游戏编辑页实现添加/编辑功能

## 第四步：实现管理端登录权限
- 

# FAQ.组件库是否会导致main.js增加

## 测试结论:组件库本身不会增加额外main.js体积
- 打包体积变化，主要是由于根模块引用了BrowserAnimationsModule，以及scss样式
    - npm安装ionic/material/primeng/antdesign，不引入情况下本身不增加体积
    - 可以放心安装多组件库依赖，并在子项目中独立引入
- 注意：HttpClientModule几乎所有项目都是必需的，但是也会增加main.js体积
    - 经测试，会增加16k，可以放心使用

- app.module.ts新增HttpClientModule后效果

``` sh
Initial Chunk Files           | Names                              |  Raw Size | Estimated Transfer Size
main.e61192629c83a5cc.js      | main                               | 252.91 kB |                69.50 kB
polyfills.925e0c339c801df5.js | polyfills                          |  33.08 kB |                10.65 kB
runtime.e90f67e49d5b8761.js   | runtime                            |   2.72 kB |                 1.30 kB
styles.ef46db3751d8e999.css   | styles                             |   0 bytes |                       -

                              | Initial Total                      | 288.72 kB |                81.46 kB
```

## 最佳实践:PWA项目独立子项目管理
- 建议PWA项目，需要新增app-shell或者独立创建子项目，严格控制app.module.ts和angular.json的依赖


## 测试构建:以Material组件为例
- 添加前 ng build

``` sh 
Initial Chunk Files           | Names                              |  Raw Size | Estimated Transfer Size
main.0663746a69414d3d.js      | main                               | 236.55 kB |                65.33 kB
polyfills.925e0c339c801df5.js | polyfills                          |  33.08 kB |                10.65 kB
runtime.1c37070a8cd6ae42.js   | runtime                            |   2.72 kB |                 1.30 kB
styles.ef46db3751d8e999.css   | styles                             |   0 bytes |    
```

- 添加后 ng build
    - 变化1：app.module.ts新增动画模块 BrowserAnimationsModule
    - 变化2：angular.json增加样式 "@angular/material/prebuilt-themes/indigo-pink.css"
        

``` sh
# ng add @angular/material
main.dab4d4a57ca39b94.js      | main                               | 301.63 kB |                81.77 kB
styles.5752f2bd6fbd629e.css   | styles                             | 108.47 kB |                 9.37 kB
polyfills.925e0c339c801df5.js | polyfills                          |  33.08 kB |                10.65 kB
runtime.1c37070a8cd6ae42.js   | runtime                            |   2.72 kB |                 1.30 kB
```

- 禁用动画模块后 ng build

``` sh
Initial Chunk Files           | Names                              |  Raw Size | Estimated Transfer Size
main.0663746a69414d3d.js      | main                               | 236.55 kB |                65.33 kB
styles.5752f2bd6fbd629e.css   | styles                             | 108.47 kB |                 9.37 kB
polyfills.925e0c339c801df5.js | polyfills                          |  33.08 kB |                10.65 kB
runtime.1c37070a8cd6ae42.js   | runtime                            |   2.72 kB |                 1.30 kB
```

# FAQ.多子项目版本控制

``` sh
# clone子项目版本库至.projects目录
mkdir .projects
cd .projects
git clone https://gitee.com/wlhdsd/ng-wanglonghui

# 从子项目复制模块及资源至主项目
scp -r .projects/ng-wanglonghui/src/modules/bvideo/* src/modules/bvideo
scp -r .projects/ng-wanglonghui/src/assets/modules/bvideo/* src/assets/modules/bvideo
```
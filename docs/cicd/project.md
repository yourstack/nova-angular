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
    - 字体图标：https://joe1900.github.io/MDI/

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
ng g component gameitem-card --module gameadmin
```

### 游戏列表页实现数据查询等操作
- 微服务操作：
    - 参考文档：[Parse:微服务测试环境](/docs/backend/parse.md)
    - 创建数据范式（Schema）：Game
        - 包含字段：title author ...
- 页面区域：增加Toolbar工具条
    - 搜索区域
    - 添加按钮
- 页面区域：通过API获取Project列表

### 游戏编辑页实现添加/编辑功能
- Dialog组件
- Edit页面

## 第四步：实现管理端登录权限
- 

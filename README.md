# NovaAngular
# 项目介绍
- Nova Angular项目
    - 依照实战项目中的最佳实践，供参考规范
    - 将Angular的新特性逐个展示出来，供交流学习

# 学习大纲
- 新人起步：startup
    - [第一个Angular项目的创建及结构说明](docs/startup/1.initproject.md)
    - [第一个模块/组件的创建与路由导航](docs/startup/2.newmodule%26component.md)
    - [认识Angular中常见的Typescript语法](docs/startup/3.tslang.md)
    - [实战:写一个自己的子模块](docs/startup/task1.md)
- 八大构造 basic
    - [Component组件的两种用法:页面组件/标签组件](docs/basic/component.md)
    - [DataBinding双向数据绑定:输入属性/输出事件](docs/basic/databinding.md)
    - [Service:服务实现多组件数据共享](docs/basic/service.md)
        - [HTTP网络请求基础与示例](docs/backend/request.md)
    - [Directive:属性选择器的精准控制](docs/basic/directive.md)
- 前端CICD
    - [Library:企业组件库的设计](docs/cicd/library.md)
    - [Scripts:编写跨平台自动化脚本](scripts/README.md)
    - [MultiProjects:多模块及多库依赖实践](docs/cicd/multi-projects.md)
- 前端测试：testing
    - [单元测试：检测最小可测试单元](docs/testing/unit-test.md)
    - [对端测试：模拟真实用户场景](docs/testing/e2e-test.md)
- 文档规范：Document
    - [UML:技术文档编写规范](docs/uml/document.md)
- 后端服务：Backend
    - [Parse:微服务测试环境](docs/backend/parse.md)


# 常用命令
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1.

## 测试预览 Development server
- 新项目需要运行 `npm i` 安装基础依赖至：node_modules

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## 创建构造 Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## 打包构建 Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## 注释规范 Comment
- https://tsdoc.org/

## 单元测试 Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

单元测试示例与详解： [./docs/testing/unit-test.md](docs/testing/unit-test.md)


## 端对端测试 Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

端对端测试示例与详解： [./docs/testing/e2e-test.md](docs/testing/e2e-test.md)

## 版本控制 Git Version Control
``` sh
# 创建本地GIT
git init # 本地初始化GIT版本控制
git add . # 添加需要被版本控制的文件
git commit -m "feat: init nova angular & bvideo module" # 添加本次修改内容的说明

# 推送远程GIT
git remote add origin https://github.com/yourstack/nova-angular.git
git push --set-upstream origin master
git push

# 设置代理（仅Github需要）
 git config --global https.proxy https://127.0.0.1:1180
```

## 更多帮助Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Electron 非侵入式打包过程
- ng build
- dist/nova-admin ./dist
- electron .
- electron-pkg exe macdmg bin

``` sh
# 打包对应子项目
ng build --project=nova-admin

# 复制对应的子项目dist包，至electron路径
cp -rf ../dist/nova-admin/* dist/

# 配置electron基本环境
cd electron
npm install --save-dev electron
# main.ts // 通过Nodejs创建一个electron网页窗口的运行燃油
# package.json // 安装了electron打包相关的依赖
# plugins // 模拟将文件资源访问转成网络请求，符合Angular加载规则

# 通过electron-builder生成可执行文件
## Linux可执行文件 .AppImage
## Window可按装成徐 nisi
## Mac可执行文件 .AppImage
npx electron-builder install-app-deps
npx electron-builder -l -w
```
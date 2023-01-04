
# Ionic打包过程
``` sh
ionic serve # 启动调试
ionic build # WWW网页打包

# 增加安卓打包配置
ionic capacitor add android
# 开始打包安卓APK IVY + TreeShaking
ionic capacitor build android --prod --base-href ./
ionic capacitor build android --no-build --prod --base-href ./
ionic cordova build android --no-build --prod --base-href ./
```

# FAQ.安卓环境的准备与安装
- android studio
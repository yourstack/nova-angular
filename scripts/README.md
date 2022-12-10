# npm scripts 编写跨平台自动化脚本

# 跨平台支持

## 推荐方法：js加载，区分系统执行

- env.js

``` js
console.log(process.env)
```

## 其他方法：sh/ps1分别实现
- env.sh

``` sh
echo $PATH;
```

- env.ps1

``` sh
echo $PATH;
```
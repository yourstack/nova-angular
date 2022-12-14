# FAQ:后台数据添加图片地址前端不显示

# 原因分析
- 后端数据库中，存储的图片字段，仅为URL资源地址
    - 如果资源地址使用相对路径：assets/xxx/xxx.png
        - 需要在项目assets对应目录，提前放置图片资源
    - 如果资源地址使用在线网址：http://xxx.com/xxx.png
        - 需要在线网址需要有当前域的访问权限，且资源可用

# 解决方案
- 测试环境
    - 建议将静态资源，放在图床等外网可访问的网站
        - sm.ms（https://sm.ms/）是一个比较知名的老牌的图床网站，支持免费图片外链，上传下载速度都不错。支持原图，支持 HTTPS、生成HTML、BBCode、Markdown的分享代码。支持格式包括 JPG、JPEG、GIF、PNG 及 BMP，可以批量上传 10 张图片。
        - 图壳（https://imgkr.com/）是一个免费图床，图片服务器托管在国内的 UCloud，无需注册即可上传，网站上没有注明文件大小限制。每次可批量上传 5 张图片。不过虽然是国内服务器，但似乎做了一定的限速。
        - 路过图床 (https://imgtu.com/) 也算是一个比较老牌知名的图床网站了，非常稳定，但速度一般。无需注册，最大支持 10M 图片上传，支持 HTTPS。
- 生产环境
    - 建议使用CDN或云对象存储存储静态资源
        - 七牛云-注册领免费10G：https://portal.qiniu.com/signup?invitation_type=1&invitation_key=1382401290
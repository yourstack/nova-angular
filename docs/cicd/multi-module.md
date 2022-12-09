# 多子项目版本控制

``` sh
# clone子项目版本库至.projects目录
mkdir .projects
cd .projects
git clone https://gitee.com/wlhdsd/ng-wanglonghui

# 从子项目复制模块及资源至主项目
scp -r .projects/ng-wanglonghui/src/modules/bvideo/* src/modules/bvideo
scp -r .projects/ng-wanglonghui/src/assets/modules/bvideo/* src/assets/modules/bvideo
```
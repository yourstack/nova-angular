
PROJECT_NAME=$1
VERSION_TIME=`date "+%Y%m%d%H%M%S"`

echo "正在打包可执行文件：${PROJECT_NAME}"

# sudo cnpm i -g yarn 
# sudo cnpm i -g electron
mkdir -p ./dist/dist
rm -rf ./dist/dist/*

# 复制项目配置文件（名称、版本、ICON相关）

cd ./dist
cnpm i

cp -rf ../plugins ./
mkdir -p ./node_modules/@paulcbetts/vueify/node_modules/yallist/
npx electron-builder install-app-deps
npx electron-builder -l -w

exit





# 复制Window可执行文件及安装脚本
mkdir -p ../../release/$PROJECT_NAME/win/
cp -rf ./dist/NovaAdmin*.exe ../../release/$PROJECT_NAME/win/${PROJECT_NAME}-${VERSION_TIME}.exe
# cp -f ./dist/NovaAdmin.exe ../../release/$PROJECT_NAME/win/NovaAdmin_32.exe
if [ -d ../apps/$PROJECT_NAME/target/win ]
then
cp -rf ../apps/$PROJECT_NAME/target/win/* ../../release/$PROJECT_NAME/win/
fi

# 复制Linux可执行文件及安装脚本
mkdir -p ../../release/$PROJECT_NAME/linux/
cp -f ./dist/NovaAdmin*.AppImage ../../release/$PROJECT_NAME/linux/${PROJECT_NAME}-${VERSION_TIME}.AppImage
# cp -f ./dist/NovaAdmin-0.7.0-x86_64.AppImage ../../release/$PROJECT_NAME/linux/NovaAdmin_32.AppImage

if [ -d ../apps/$PROJECT_NAME/target/linux ]
then
cp -rf ../apps/$PROJECT_NAME/target/linux/* ../../release/$PROJECT_NAME/linux/
fi

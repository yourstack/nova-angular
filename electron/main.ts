
import { app, screen, BrowserWindow, BrowserView, ipcMain } from "electron";
import { globalShortcut } from 'electron';
// const electron = require('electron')
import * as path from "path";
import * as fs from "fs";

// IMPORTANT:通过协议挂载静态资源，路由及位置资源转向index.html
// const serve = require("nova-serve");
// const serve = require(path.join(__dirname, `/../plugins/nova-serve/`));
const serve = require(path.join(__dirname, `/plugins/nova-serve/`));
// const loadURL = serve({directory: path.join(__dirname, `/../../dist/nova-admin/`)});
const loadURL = serve({ directory: path.join(__dirname, `/www/`) });

/*********************
 * 创建窗口及视图
 */

let mainWindow: BrowserWindow;
let splashWindow: BrowserWindow;
let splashView: BrowserView;
let adminView: BrowserView;


/********************************
 * 将Splash单独作为一个View启动
 */
function newSplashView() {
  let { width, height } = screen.getPrimaryDisplay().workAreaSize
  splashView = new BrowserView()
  mainWindow.addBrowserView(splashView)
  splashView.setBackgroundColor("#000000")
  splashView.setBounds({ width: width, height: height, x: 0, y: 0 })
  // splashView.setBounds({width:300,height:300,x:0,y:0})
  splashView.webContents.loadURL(`file://${__dirname}/splash/index.html`)
}

/********************************
 * 将Admin单独作为View启动,启动后隐藏Splash
 */
function newAdminView() {
  let { width, height } = screen.getPrimaryDisplay().workAreaSize
  adminView = new BrowserView({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      // enableRemoteModule: true,
    }
  })
  mainWindow.addBrowserView(adminView)
  adminView.webContents.once("dom-ready", () => {
    // if (process.env.NOVA_DEBUG || appConfig.NOVA_DEBUG) {
      // adminView.webContents.openDevTools({ mode: 'right' })
    // }

    setTimeout(() => {
      if (splashWindow) {
        splashWindow.destroy();
      }
      if (splashView) {
        mainWindow.removeBrowserView(splashView);
        // splashView = null;
      }
    }, 5000);
  })
  adminView.setBackgroundColor("#000000")
  adminView.setBounds({ width: width, height: height, x: 0, y: 0 })


  loadURL(adminView);
}

async function createWindow() {


  // 创建主页面
  mainWindow = new BrowserWindow({
    fullscreen: true,
    backgroundColor: "000000",
    minWidth: 1200,
    minHeight: 800,
    frame: false,
    show: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      // enableRemoteModule: true,

    }
  });

  newAdminView();

  newSplashView();

  // mainWindow.once('')

  mainWindow.webContents.once('dom-ready', () => {
    mainWindow.show();
    mainWindow.setFullScreen(true)

  });

  mainWindow.on("closed", () => {
    // mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q

  if (process.platform !== 'darwin') {
    app.exit();
  }else{
    app.exit();
  }
});

function getImages() {
  const cwd = process.cwd();
  fs.readdir('.', { withFileTypes: true }, (err, files) => {
    if (!err) {
      let re:any = /(?:\.([^.]+))?$/;
      const images = files
        .filter(file => file.isFile() && ['jpg', 'png'].includes(re.exec(file.name)[1]))
        .map(file => `file://${cwd}/${file.name}`);
      mainWindow.webContents.send("getImagesResponse", images);
    }
  });
}

function isRoot() {
  return path.parse(process.cwd()).root == process.cwd();
}

function getDirectory() {
  fs.readdir('.', { withFileTypes: true }, (err, files) => {
    if (!err) {
      const directories = files
        .filter(file => file.isDirectory())
        .map(file => file.name);
      if (!isRoot()) {
        directories.unshift('..');
      }
      mainWindow.webContents.send("getDirectoryResponse", directories);
    }
  });
}

ipcMain.on("navigateDirectory", (event, path) => {
  process.chdir(path);
  getImages();
  getDirectory();
});

ipcMain.on('unclockscreen', () => {
});
ipcMain.on('clockcreen', () => {
});
ipcMain.on('close-window', () => {
  app.exit(0);
});


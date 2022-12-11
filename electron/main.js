"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var electron_1 = require("electron");
// const electron = require('electron')
var path = require("path");
var fs = require("fs");
// IMPORTANT:通过协议挂载静态资源，路由及位置资源转向index.html
// const serve = require("nova-serve");
// const serve = require(path.join(__dirname, `/../plugins/nova-serve/`));
var serve = require(path.join(__dirname, "/plugins/nova-serve/"));
// const loadURL = serve({directory: path.join(__dirname, `/../../dist/nova-admin/`)});
var loadURL = serve({ directory: path.join(__dirname, "/www/") });
/*********************
 * 创建窗口及视图
 */
var mainWindow;
var splashWindow;
var splashView;
var adminView;
/********************************
 * 将Splash单独作为一个View启动
 */
function newSplashView() {
    var _a = electron_1.screen.getPrimaryDisplay().workAreaSize, width = _a.width, height = _a.height;
    splashView = new electron_1.BrowserView();
    mainWindow.addBrowserView(splashView);
    splashView.setBackgroundColor("#000000");
    splashView.setBounds({ width: width, height: height, x: 0, y: 0 });
    // splashView.setBounds({width:300,height:300,x:0,y:0})
    splashView.webContents.loadURL("file://" + __dirname + "/splash/index.html");
}
/********************************
 * 将Admin单独作为View启动,启动后隐藏Splash
 */
function newAdminView() {
    var _a = electron_1.screen.getPrimaryDisplay().workAreaSize, width = _a.width, height = _a.height;
    adminView = new electron_1.BrowserView({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    mainWindow.addBrowserView(adminView);
    adminView.webContents.once("dom-ready", function () {
        // if (process.env.NOVA_DEBUG || appConfig.NOVA_DEBUG) {
        adminView.webContents.openDevTools({ mode: 'right' });
        // }
        setTimeout(function () {
            if (splashWindow) {
                splashWindow.destroy();
            }
            if (splashView) {
                mainWindow.removeBrowserView(splashView);
                // splashView = null;
            }
        }, 5000);
    });
    adminView.setBackgroundColor("#000000");
    adminView.setBounds({ width: width, height: height, x: 0, y: 0 });
    loadURL(adminView);
}
function createWindow() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // 创建主页面
            mainWindow = new electron_1.BrowserWindow({
                fullscreen: true,
                backgroundColor: "000000",
                minWidth: 1200,
                minHeight: 800,
                frame: false,
                show: true,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false
                }
            });
            newAdminView();
            newSplashView();
            // mainWindow.once('')
            mainWindow.webContents.once('dom-ready', function () {
                mainWindow.show();
                mainWindow.setFullScreen(true);
            });
            mainWindow.on("closed", function () {
                // mainWindow = null;
            });
            return [2 /*return*/];
        });
    });
}
electron_1.app.on("ready", createWindow);
electron_1.app.on("activate", function () {
    if (mainWindow === null) {
        createWindow();
    }
});
// Quit when all windows are closed.
electron_1.app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        electron_1.app.exit();
    }
    else {
        electron_1.app.exit();
    }
});
function getImages() {
    var cwd = process.cwd();
    fs.readdir('.', { withFileTypes: true }, function (err, files) {
        if (!err) {
            var re_1 = /(?:\.([^.]+))?$/;
            var images = files
                .filter(function (file) { return file.isFile() && ['jpg', 'png'].includes(re_1.exec(file.name)[1]); })
                .map(function (file) { return "file://" + cwd + "/" + file.name; });
            mainWindow.webContents.send("getImagesResponse", images);
        }
    });
}
function isRoot() {
    return path.parse(process.cwd()).root == process.cwd();
}
function getDirectory() {
    fs.readdir('.', { withFileTypes: true }, function (err, files) {
        if (!err) {
            var directories = files
                .filter(function (file) { return file.isDirectory(); })
                .map(function (file) { return file.name; });
            if (!isRoot()) {
                directories.unshift('..');
            }
            mainWindow.webContents.send("getDirectoryResponse", directories);
        }
    });
}
electron_1.ipcMain.on("navigateDirectory", function (event, path) {
    process.chdir(path);
    getImages();
    getDirectory();
});
electron_1.ipcMain.on('unclockscreen', function () {
});
electron_1.ipcMain.on('clockcreen', function () {
});
electron_1.ipcMain.on('close-window', function () {
    electron_1.app.exit(0);
});

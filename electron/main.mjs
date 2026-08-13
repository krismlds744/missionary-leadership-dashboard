import { app, BrowserWindow } from "electron";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isDev = !app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    width: 1600,
    height: 900,
    title: "Mission Insights",
    autoHideMenuBar: true,
    show: false,
    backgroundColor: "#020617",

    webPreferences: {
      preload: path.join(__dirname, "preload.mjs"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.maximize();

  if (isDev) {
    win.loadURL("http://localhost:5177");
    win.webContents.openDevTools({ mode: "detach" });
  } else {
    const indexPath = path.join(app.getAppPath(), "dist", "index.html");
    console.log("Loading production file:", indexPath);

    win.loadFile(indexPath);

    // Open DevTools automatically in the packaged app
    win.webContents.openDevTools({ mode: "detach" });
  }

  win.webContents.on(
    "did-fail-load",
    (_event, errorCode, errorDescription, validatedURL) => {
      console.error("================================");
      console.error("FAILED TO LOAD");
      console.error("Code:", errorCode);
      console.error("Description:", errorDescription);
      console.error("URL:", validatedURL);
      console.error("================================");
    }
  );

  win.webContents.on("did-finish-load", () => {
    console.log("Page loaded successfully.");
  });

  win.webContents.on("render-process-gone", (_event, details) => {
    console.error("Renderer process crashed:", details);
  });

  win.once("ready-to-show", () => {
    win.show();
  });
}

app.whenReady().then(createWindow);

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
let electron = require('electron');
let url = require('url');
let path = require('path');

let { app, BrowserWindow, Menu, ipcMain } = electron;
let { ZergData } = require('./Data.js');

let mainWindow;

process.env.NODE_ENV = 'production';

//Listen for app to be ready
app.on('ready', () => {
    //Create New Window
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        resizable: false
    });

    //Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "mainWindow.html"),
        protocol: 'file:',
        slashes: true
    }));

    // Quit app when closed
    mainWindow.on('closed', function()
        {
            app.quit();
        }
    );

    let mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

let mainMenuTemplate = [
    {
        label: 'Menu',
        submenu: [
            {
                label: 'Quit',
                accelerator: process.platform === 'darwin' ? "Command+Q" : 'Ctrl+Q',
                click()
                {
                    app.quit()
                }
            }
        ]
    }
]


if(process.env.NODE_ENV !== 'production')
{
    mainMenuTemplate.push(
        {
            label: 'Developer Tools',
            submenu: [
                {
                    label: 'Toggle DevTools',
                    accelerator: process.platform === 'darwin' ? "Comment+I" : "Ctrl+I",
                    click(item, focusedWindow)
                    {
                        focusedWindow.toggleDevTools();
                    }
                },
                {
                    role: 'reload'
                }
            ]
        }
    )
}

function GetUnitsUsingHugeMineral()
{
    let index = 0;
    let max = ZergData[0].GetMineral();
    ZergData.map((zerg, i) => {
        if(zerg.GetMineral() > max)
        {
            index = i;
        }
    });

    return ZergData[index];
}

function GetSumOfSupply()
{
    let sum = 0;
    ZergData.map((zerg, index) => {
        sum = sum + zerg.GetSupply();
    });
    console.log(sum);
    return sum;
}


ipcMain.on('asynchronous-message', (event, arg) => {
    event.sender.send('asynchronous-reply', ZergData)
})

ipcMain.on('mineral', (event, arg) => {
    event.sender.send('mineral-reply', GetUnitsUsingHugeMineral());
})

ipcMain.on('supply', (event, arg) => {
    event.sender.send('supply-reply', GetSumOfSupply());
})
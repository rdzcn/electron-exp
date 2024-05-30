import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('preloadAPI', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    ping: () => ipcRenderer.invoke('ping')
});

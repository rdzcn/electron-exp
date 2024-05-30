export interface IPreloadAPI {
  node: () => string,
  chrome: () => string,
  electron: () => string,
  ping: () => Promise<string>
}
  
declare global {
  interface Window {
    preloadAPI: IPreloadAPI
  }
}
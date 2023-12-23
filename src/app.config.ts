export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/skyline-screenshot/index'
  ],
  renderer: 'skyline',
  lazyCodeLoading: "requiredComponents",
  "componentFramework": "glass-easel",
  "rendererOptions": { "skyline": { "defaultDisplayBlock": true } },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    "navigationStyle": "custom"
  }
})

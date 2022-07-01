export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/test/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    // custom: true,
    borderStyle: "black",
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './assets/index.png',
        selectedIconPath: './assets/index.png',
      },
      {
        pagePath: 'pages/test/index',
        text: '分类',
        iconPath: './assets/index.png',
        selectedIconPath: './assets/index.png',
      }
    ]
  },
})

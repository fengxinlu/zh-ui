module.exports = {
  title: 'ZhUI',
  base: '/zh-ui/',
  description: 'zh-ui 是一个轻量级的UI',
  port: 8083, 
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '组件', link: '/component/guide/introduction' },
      { text: '更新日志', link: '/log' }
    ],
    sidebar: {
      '/component/': [
        {
          title: '开发指南',
          collapsable: false,
          children: [
            'guide/introduction',
            'guide/guide'
          ]
        },
        {
          title: '基础组件',
          collapsable: false,
          children: [
            'basic/button',
            'basic/text'
          ]
        },
      ]
    }
  },
  plugins: [
    require('./plugins/alias.js'),
    require('./plugins/additionalPages.js')
  ]
}
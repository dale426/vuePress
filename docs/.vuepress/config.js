module.exports = {
  title: '小虫子',
  description: '小虫子的网络日志，小虫子',
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 4,     // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: 'Tag'      // 默认文案 “标签”
      }
    }
  },
  // themeConfig: {
  //   nav: [
  //     { text: 'Home', link: '/' },
  //     { text: 'page', link: '/page/' },
  //     { text: 'External', link: 'https://google.com' },
  //     {
  //       text: 'Languages',
  //       items: [
  //         { text: 'Chinese', link: '/language/chinese/' },
  //         { text: 'Japanese', link: '/language/japanese/' }
  //       ]
  //     }
  //   ],
  //   sidebar: [
  //     '/',
  //     '/page/',
  //     ['/page/', 'Explicit link text']
  //   ],
  //   astUpdated: 'Last Updated', // string | boolean
  // },
  plugins: [
    [
      'vuepress-plugin-yuque', {
        repoUrl: 'https://www.yuque.com/dale/font',
        html: true
      }
    ]
  ]
}
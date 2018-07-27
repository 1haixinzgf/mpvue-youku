import Vue from 'vue'
import App from './App'
import './weui.css'
import './common/style/reset.styl'
import  './common/style/mixin.styl'
import './common/style/fonts/iconfont.css'
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', 'pages/index/main','^pages/discover/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#272636",
      selectedColor: "#FFD161",
      backgroundColor: "#fff",
      borderStyle: "#a8a8a8",
      list: [
        {
          pagePath: "pages/index/main",
          iconPath: "static/images/index.png",
          selectedIconPath: "static/images/index-selected.png",
          color:"white",
          text: "首页"
        },
        {
          pagePath: "pages/discover/main",
          iconPath: "static/images/index.png",
          selectedIconPath: "static/images/index-selected.png",
          color:"white",
          text: "VIP会员"
        },
        {
          pagePath: "pages/logs/main",
          iconPath: "static/images/index.png",
          selectedIconPath: "static/images/index-selected.png",
          color:"white",
          text: "我的"
        }
      ]
    }
  }
}
